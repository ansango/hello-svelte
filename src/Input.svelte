<script lang="ts">
  let value = "";
  let response = [];
  const handleInput = (event) => (value = event.target.value);

  $: {
    if (value.trim().length > 5) {
      fetch(`https://www.omdbapi.com/?s=${value}&apikey=422350ff`)
        .then((res) => res.json())
        .then((data) => {
          response = data.Search;
        });
    }
  }
</script>

<div>
  <input {value} on:input={handleInput} />
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
</style>
