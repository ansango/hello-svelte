<script lang="ts">
  import Movie from "./Movie.svelte";
  let value = "";
  let response: any = [];

  const handleInput = (event) => (value = event.target.value);

  const getMovies = async (value) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${value}&apikey=422350ff`
    );
    if (response.ok) {
      const data = await response.json();
      return data.Search || [];
    } else {
      throw new Error("Something went wrong");
    }
  };

  $: {
    if (value.trim().length > 2) {
      response = getMovies(value);
    }
  }
</script>

<div class="container">
  <input {value} on:input={handleInput} />
  {#await response then movies}
    <div class="film-container">
      {#each movies as { Title: title, Year: year, Poster: poster }, index}
        <Movie {index} {title} {year} {poster} />
      {:else}
        <div>No hay resultados</div>
      {/each}
    </div>
  {:catch error}
    <p>
      <span role="img" aria-label="error">❌</span>{error}<span
        role="img"
        aria-label="error">❌</span
      >
    </p>
  {/await}
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
