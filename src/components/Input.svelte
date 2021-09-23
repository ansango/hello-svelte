<script lang="ts">
  import Movie from "./Movie.svelte";
  let value = "";
  let loading = false;
  let response = [];
  const handleInput = (event) => (value = event.target.value);

  $: {
    if (value.trim().length > 2) {
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
  {:else}
    <div class="film-container">
      {#each response as { Title: title, Year: year, Poster: poster }, index}
        <Movie {index} {title} {year} {poster} />
      {:else}
        <div>No hay resultados</div>
      {/each}
    </div>
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
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }

  @media (min-width: 768px) {
    .film-container {
      grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
  }

  @media (min-width: 992px) {
    .film-container {
      grid-template-columns: repeat(3, minmax(200px, 1fr));
    }
  }
</style>
