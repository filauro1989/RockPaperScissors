<script>
  import { isMobile } from '../stores/stores';
  import { icons } from '../utils/content.constants';

  import { selectChoice } from '../utils/content.utils';
</script>

<div class:ContainerMobile={$isMobile} class="Container">
  <div class="Box GridDiv1">
    <div
      class="PaperContainer ChoiceContainer"
      on:click={() => selectChoice('paper')}
      on:keydown={() => selectChoice('paper')}
    >
      <img class:MobileImage={$isMobile} src={icons.paper} alt="paper" />
    </div>
  </div>
  <div class="Box GridDiv2">
    <div
      class="ScissorsContainer ChoiceContainer"
      on:click={() => selectChoice('scissors')}
      on:keydown={() => selectChoice('scissors')}
    >
      <img class:MobileImage={$isMobile} src={icons.scissors} alt="Scissors" />
    </div>
  </div>
  <div class="Box GridDiv3">
    <div
      class="RockContainer ChoiceContainer"
      on:click={() => selectChoice('rock')}
      on:keydown={() => selectChoice('rock')}
    >
      <img class:MobileImage={$isMobile} src={icons.rock} alt="Rock" />
    </div>
  </div>
</div>

<style lang="scss">
  .Container {
    background-image: url('../lib/images/bg-triangle.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 260px auto;
    height: 70%;
    border: 1px solid green;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    z-index: 0;
    width: clamp(270px, 100%, 450px);
  }
  .Container.ContainerMobile {
    background-size: 200px auto;
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
  .Box {
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

  .PaperContainer,
  .ScissorsContainer,
  .RockContainer {
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
  .PaperContainer {
    &::before {
      background-image: radial-gradient(
        circle at 50% 0,
        hsl(230, 89%, 62%),
        hsl(230, 89%, 65%)
      );
      box-shadow: 0 6px 1px -1px hsl(230, 72%, 55%);
    }
  }
  .RockContainer {
    &::before {
      background-image: radial-gradient(
        circle at bottom,
        hsl(349, 71%, 52%),
        hsl(349, 70%, 56%)
      );
      box-shadow: 0 6px 1px -1px hsl(349, 53%, 40%);
    }
  }
  .ScissorsContainer {
    &::before {
      background-image: radial-gradient(
        circle at bottom,
        hsl(39, 89%, 49%),
        hsl(40, 84%, 53%)
      );
      box-shadow: 0 6px 1px -1px hsl(39, 51%, 43%);
    }
  }
</style>
