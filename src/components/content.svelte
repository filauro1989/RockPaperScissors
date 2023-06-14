<script lang="ts">
  import { currentStep, isMobile } from '../stores/stores';
  import { steps } from '../utils/content.constants';
  import StepOne from './steps/stepOne.svelte';
  import StepTwo from './steps/stepTwo.svelte';
  import StepThree from './steps/stepThree.svelte';
  import StepFour from './steps/stepFour.svelte';

  let contentOptions = [
    { format: steps.playerChoice, component: StepOne },
    { format: steps.awaitComputerChoice, component: StepTwo },
    { format: steps.computerChoice, component: StepThree },
    { format: steps.result, component: StepFour },
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
    margin-top: 4em;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Content__Mobile {
    background-size: 80% auto;
    height: 50vh;
    align-items: start;
  }
</style>
