<script lang="ts">
  export let initialCounter: number = 0;
  export let maxCounter: number = 10;
  let counter: number = initialCounter;

  const increment = (): void => {
    counter++;
  };

  $: isEvenOrOdd = counter % 2 === 0 ? "even" : "odd";
  $: if (counter > maxCounter) {
    counter = maxCounter;
  }
</script>

<div>
  <div>
    {counter}
    {isEvenOrOdd}
  </div>
  <button on:click={increment}>+1</button>
</div>

<style>
  div {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
