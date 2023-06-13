<script lang="ts">
  import { isMobile } from '../stores/stores';
</script>

<div class:Content__Mobile={$isMobile} class="Content">
  <div />
</div>

<style lang="scss">
  .Content {
    max-width: 450px;
    margin: 0 auto;
    border: 1px solid white;
    margin-top: 2em;
    height: 70vh;
    background-image: url('../lib/images/bg-triangle.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60% auto;
  }
  .Content__Mobile {
    background-size: 80% auto;
    height: 50vh;
  }
</style>
