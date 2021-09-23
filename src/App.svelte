<script>
  import Counter from "./Counter.svelte";
  import Input from "./Input.svelte";
  const commonProps = {
    maxCounter: 15,
  };
</script>

<div>
  <h1>Movies Search</h1>
  <div>
    <Input />
  </div>
</div>

<style>
  h1 {
    text-align: center;
  }
</style>
