<script lang="ts">
  export let index, title, year, poster;
</script>

<article class="film">
  <h3>
    <span># {index + 1}</span>
    {title} - <span>{year}</span>
    {#if 2021 - year < 5}
      <span role="img" aria-label="new">🆕</span>
    {/if}
  </h3>
  <img src={poster} alt={title} />
</article>

<style>
  .film {
    text-align: center;
    padding: 1rem;
  }
</style>
