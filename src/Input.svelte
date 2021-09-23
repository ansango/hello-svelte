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
      }, 1000);
    }
  }
</script>

<div class="container">
  <input {value} on:input={handleInput} />
  {#if loading}
    <div>Loading...</div>
  {:else if response.length > 0}
    <div class="film-container">
      {#each response as movie}
        <div class="film">
          <h3>{movie.Title} - <span>{movie.Year}</span></h3>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      {/each}
    </div>
  {:else}<div>No tenemos pelis</div>
  {/if}
</div>

<style>
  .container {
    margin: auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .film-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }

  .film {
    text-align: center;
    padding: 1rem;
  }
</style>
