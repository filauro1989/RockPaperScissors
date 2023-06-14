<script lang="ts">
  import { isMobile } from '../stores/stores';

  import PaperIcon from '../lib/images/icon-paper.svg';
  import RockIcon from '../lib/images/icon-rock.svg';
  import ScissorsIcon from '../lib/images/icon-scissors.svg';
  import { selectChoice } from '../utils/content.utils';
  import { paper, rock, scissors } from '../utils/content.constants';
</script>

<div class:Content__Mobile={$isMobile} class="Content">
  <div class="Content__Container">
    <div class="Content__Box GridDiv1">
      <div
        class="Content__PaperContainer ChoiceContainer"
        on:click={() => selectChoice(paper)}
        on:keydown={() => selectChoice(paper)}
      >
        <img class:MobileImage={$isMobile} src={PaperIcon} alt="paper" />
      </div>
    </div>
    <div class="Content__Box GridDiv2">
      <div
        class="Content__ScissorsContainer ChoiceContainer"
        on:click={() => selectChoice(scissors)}
        on:keydown={() => selectChoice(scissors)}
      >
        <img class:MobileImage={$isMobile} src={ScissorsIcon} alt="Scissors" />
      </div>
    </div>
    <div class="Content__Box GridDiv3">
      <div
        class="Content__RockContainer ChoiceContainer"
        on:click={() => selectChoice(rock)}
        on:keydown={() => selectChoice(rock)}
      >
        <img class:MobileImage={$isMobile} src={RockIcon} alt="Rock" />
      </div>
    </div>
  </div>
</div>

<!-- <div>
  {#if $userSelection}
    <h1>{$derivedResult}</h1>
    <h1>{$computerChoice}</h1>
  {/if}
</div> -->

<style lang="scss">
  .Content {
    width: clamp(270px, 100%, 450px);
    margin: 0 auto;
    border: 1px solid white;
    margin-top: 2em;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__Container {
      background-image: url('../lib/images/bg-triangle.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 65% auto;
      height: 70%;
      aspect-ratio: 1;
      border: 1px solid green;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      z-index: 0;
    }

    .GridDiv1 {
      grid-area: 1 / 1 / 2 / 2;
    }
    .GridDiv2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .GridDiv3 {
      grid-area: 2 / 1 / 3 / 3;
      display: flex;
      justify-content: center;
    }
    &__Box {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ChoiceContainer {
      cursor: pointer;
      background-color: white;
      border-radius: 50%;
      height: 60%;
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ratio: 1;
      box-shadow: inset 0px 5px 1px 1px rgba(219, 219, 219, 1);
      .MobileImage {
        width: 50%;
      }
    }

    &__PaperContainer,
    &__ScissorsContainer,
    &__RockContainer {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: -16px;
        border-radius: inherit;
        z-index: -1;
      }
    }
    &__PaperContainer {
      &::before {
        background-image: radial-gradient(
          circle at 50% 0,
          hsl(230, 89%, 62%),
          hsl(230, 89%, 65%)
        );
        box-shadow: 0 6px 1px -1px hsl(230, 72%, 55%);
      }
    }
    &__RockContainer {
      &::before {
        background-image: radial-gradient(
          circle at bottom,
          hsl(349, 71%, 52%),
          hsl(349, 70%, 56%)
        );
        box-shadow: 0 6px 1px -1px hsl(349, 53%, 40%);
      }
    }
    &__ScissorsContainer {
      &::before {
        background-image: radial-gradient(
          circle at bottom,
          hsl(39, 89%, 49%),
          hsl(40, 84%, 53%)
        );
        box-shadow: 0 6px 1px -1px hsl(39, 51%, 43%);
      }
    }
  }
  .Content__Mobile {
    background-size: 80% auto;
    height: 50vh;
  }
</style>
