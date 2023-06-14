<script>
  import { isMobile, userChoice, computerChoice } from '../../stores/stores';
  import { icons } from '../../utils/content.constants';
  import { getClassByChoice } from '../../utils/content.utils';
</script>

<div class:ContainerMobile={$isMobile} class="Container">
  <!-- <div class:Mobile={$isMobile} class="PlayerChoiceTitle">YOU PICKED</div>
  <div class:Mobile={$isMobile} class="AIChoiceTitle">THE HOUSE PICKED</div>
  <div class:Mobile={$isMobile} class="Box PlayerChoice">
    <div
      class={`ChoiceContainer ${getClassByChoice($userChoice)}`}
      class:Mobile={$isMobile}
    >
      <img class="Image" src={icons[$userChoice]} alt="paper" />
    </div>
  </div>
  <div class:Mobile={$isMobile} class="Box AIChoice">
    <div class:Mobile={$isMobile} class="ChoiceContainer">
      <div
        class={`ChoiceContainer ${getClassByChoice($computerChoice)}`}
        class:Mobile={$isMobile}
      >
        <img class="Image" src={icons[$computerChoice]} alt="paper" />
      </div>
    </div>
  </div> -->
  QUATTRO
</div>

<style lang="scss">
  .Container {
    height: 350px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 0.1fr 1fr;
    z-index: 0;
    width: clamp(270px, 100%, 550px);
  }
  .Container.ContainerMobile {
    height: 200px;
    background-size: 200px auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 0.1fr;
  }

  .PlayerChoiceTitle {
    grid-area: 1 / 1 / 2 / 2;
    text-align: center;
    color: white;
    font-size: 1.3em;
    font-weight: 600;
  }
  .PlayerChoiceTitle.Mobile {
    grid-area: 2 / 1 / 3 / 2;
  }

  .AIChoiceTitle {
    grid-area: 1 / 2 / 2 / 3;
    text-align: center;
    color: white;
    font-size: 1.4em;
    font-weight: 600;
  }
  .AIChoiceTitle.Mobile {
    grid-area: 2 / 2 / 3 / 3;
    font-size: 1.2em;
  }
  .PlayerChoice {
    grid-area: 2 / 1 / 3 / 2;
  }
  .PlayerChoice.Mobile {
    grid-area: 1 / 1 / 2 / 2;
    font-size: 1.2em;
  }
  .AIChoice {
    grid-area: 2 / 2 / 3 / 3;
  }
  .AIChoice.Mobile {
    grid-area: 1 / 2 / 2 / 3;
  }
  .Box {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 3em 0;
  }
  .Box.Mobile {
    align-items: end;
  }

  .ChoiceContainer {
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    height: 200px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0px 5px 1px 1px rgba(219, 219, 219, 1);
    .Image {
      width: 50%;
    }
  }
  .ChoiceContainer.Mobile {
    height: 100px;
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
