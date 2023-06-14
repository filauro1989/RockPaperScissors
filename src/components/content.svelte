<script lang="ts">
  import { currentStep, isMobile } from '../stores/stores';
  import { steps } from '../utils/content.constants';
  import StepOne from './stepOne.svelte';
  import StepTwo from './stepTwo.svelte';

  let contentOptions = [
    { format: steps.playerChoice, component: StepOne },
    { format: steps.awaitComputerChoice, component: StepTwo },
  ];
  $: component = contentOptions[$currentStep].component;
</script>

<div class:Content__Mobile={$isMobile} class="Content">
  <svelte:component this={component} />
</div>

<!-- <div>
  {#if $userSelection}
    <h1>{$derivedResult}</h1>
    <h1>{$computerChoice}</h1>
  {/if}
</div> -->

<style lang="scss">
  .Content {
    width: clamp(270px, 100%, 550px);
    margin: 0 auto;
    border: 1px solid white;
    margin-top: 2em;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Content__Mobile {
    background-size: 80% auto;
    height: 50vh;
  }
</style>
