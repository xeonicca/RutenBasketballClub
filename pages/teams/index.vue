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
      <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3" v-for="team in teamsGroupedById">
        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="bg-cover bg-center h-56 p-4" style="background-image: url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)">
          </div>
          <div class="p-4">
            <p class="uppercase tracking-wide text-sm font-bold text-gray-700">{{ team.name }}</p>
            <p class="font-bold text-3xl text-gray-900">{{ team.shortName }}</p>
          </div>
          <div class="flex p-4 border-t border-gray-300 text-gray-700">
            <div class="flex-1 inline-flex items-center">
              <p><span class="text-gray-900 font-bold">3</span> 名球員</p>
            </div>
            <div class="flex-1 inline-flex items-center">

              <p><span class="text-gray-900 font-bold">2</span> 勝</p>
            </div>
          </div>
          <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
            <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">GM</div>
            <div class="flex items-center pt-2">
              <div class="bg-cover bg-center w-10 h-10 rounded-full mr-3" style="background-image: url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)">
              </div>
              <div>
                <p class="font-bold text-gray-900">Tiffany Heffner</p>
                <p class="text-sm text-gray-700">(555) 555-4321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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