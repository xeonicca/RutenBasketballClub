<template>
  <div class="round inline-flex">
    <div class="flex-1" ref="matchup"><slot name="matchup"></slot></div>
    <div class="flex-1 self-center pl-4" ref="advance"><slot name="advance"></slot></div>
  </div>
</template>

<script>
export default {
}
</script>