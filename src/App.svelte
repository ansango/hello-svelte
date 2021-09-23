<script>
  import Counter from "./Counter.svelte";
  import Input from "./Input.svelte";
  const commonProps = {
    maxCounter: 15,
  };
</script>

<Counter initialCounter={9} {...commonProps} />
<Counter initialCounter={9} {...commonProps} />
<Counter initialCounter={9} {...commonProps} />
<Input />
