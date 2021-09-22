<script lang="ts">
  export let name: string;
  export let img: string;
  let count: number = 0;
  const increment = () => {
    count++;
  };
</script>

<main>
  <h1>Hello {name}!</h1>
  <img src={img} alt={name} />
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
  <button on:click={increment}>Increment +1</button>
  <div>{count} times clicked</div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
