<script lang="ts">
  import { isMobile, score } from '../stores/stores';
</script>

<div class="Header">
  <div class:Title__Mobile={$isMobile} class="Title">
    ROCK<br /> PAPER<br /> SCISSORS
  </div>
  <div class:ScoreBoard__Mobile={isMobile} class="ScoreBoard">
    <div class="ScoreBoard__Title">SCORE</div>
    <div class="ScoreBoard__ScorePoints">{$score}</div>
  </div>
</div>

<style lang="scss">
  .Header {
    margin: 0 auto;
    border: 2px solid hsl(217, 16%, 45%);
    width: clamp(270px, 100%, 600px);
    height: 116px;
    border-radius: 8px;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Title {
      color: white;
      font-size: 2em;
      line-height: 26px;
      font-weight: 700;
    }
    .Title__Mobile {
      font-size: 1.5em;
      line-height: 20px;
    }
    .ScoreBoard {
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.8em;
      text-align: center;
      aspect-ratio: 1;
      height: 100%;
      border-radius: 4px;
      &__Title {
        color: hsl(229, 64%, 46%);
        font-size: 0.7em;
        line-height: 10px;
        font-weight: 600;
        text-transform: uppercase;
      }
      &__ScorePoints {
        color: hsl(229, 25%, 31%);
        font-size: 2.5em;
        font-weight: 700;
      }
    }
  }
</style>
