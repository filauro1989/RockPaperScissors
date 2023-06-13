<script lang="ts">
  import Content from './components/content.svelte';
  import Header from './components/header.svelte';
  import { innerWidth } from './stores/stores';
</script>

<svelte:window bind:innerWidth={$innerWidth} />

<main>
  <Header />
  <Content />
  ZIO
</main>

<style>
  main {
    max-width: 1366px;
    margin: 0 auto;
    padding: 3em;
    height: 100vh;
    width: 100vw;
  }
</style>
