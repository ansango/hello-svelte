<script lang="ts">
  let value = "";
  let loading = false;
  let response = [];
  const handleInput = (event) => (value = event.target.value);

  $: {
    if (value.trim().length > 5) {
      loading = true;
      setTimeout(() => {
        fetch(`https://www.omdbapi.com/?s=${value}&apikey=422350ff`)
          .then((res) => res.json())
          .then((data) => {
            response = data.Search || [];
            loading = false;
          });
      }, 3000);
    }
  }
</script>

<div>
  <input {value} on:input={handleInput} />
  {#if loading}
    <div>Loading...</div>
  {:else if response.length > 0}
    <div>Tenemos {response.length} pelis</div>
  {:else}<div>No tenemos pelis</div>
  {/if}
</div>

<style>
  div {
    margin: auto;
    max-width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
</style>
