<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <!-- Title -->
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-normal font-bold">全部隊伍</h2>
        <p class="text-grey-dark mt-2">{{ teamAmount }}隊</p>
      </div>
    </div>

    <!-- Library -->
    <div class="hidden px-2 pt-2 md:px-0 flex-wrap order-2 pb-8 js-tab-pane active">
      <TeamCard v-for="team in teamsGroupedById" :key="team.id" :team="team" />
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['teamsGroupedById']),
    teamAmount() {
      return Object.keys(this.teamsGroupedById).length
    }
  }
}
</script>