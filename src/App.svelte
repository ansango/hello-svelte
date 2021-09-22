<script lang="ts">
  export let name: string;
  export let img: string;
  let count: number = 0;
  const increment = () => {
    count++;
  };
  let numbers: number[] = [1, 2, 3];
  //sum all numbers in array with reduce

  const sumNumbers = () => numbers.reduce((t, n) => t + n, 0);
  let sum = sumNumbers();
  const incrementNumber = () => {
    numbers = [...numbers, numbers.length + 1];
    sum = sumNumbers();
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
  <div>
    <h3>Updating</h3>
    <div>
      <p>{numbers.join(" + ")} = {sum}</p>
      <button on:click={incrementNumber}>Increment +1</button>
    </div>
  </div>
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
