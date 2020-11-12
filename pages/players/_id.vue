<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <!-- Title -->
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="text-xl font-bold">{{ thisPlayer.name }}</h2>
        <p class="text-grey-dark mt-2">{{ thisPlayer.teamDetail.name }}</p>
      </div>
    </div>
    <!-- Desktop Stats -->
    <div class="px-6 md:px-0 mt-4 md:flex flex-wrap order-1 md:-order-1 md:shadow-md">
      <div class="w-full p-8 md:rounded-r-none bg-white shadow-md md:shadow-none">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/3 relative">
            <img class="w-full object-fit hover:brighter hover:translate-y-1" :src="thisPlayer.image && thisPlayer.image[0].url || getAvatar(thisPlayer.id)" :alt="thisPlayer.name">
          </div>
          <div class="flex flex-wrap w-full sm:flex-1 sm:pl-8">
            <div class="w-1/2 mt-4 sm:mt-0">
              <p class="text-indigo text-sm p-2">性別</p>
              <p class="font-medium text-sm pl-2">{{ thisPlayer.gender }}</p>
              <p class="text-indigo text-sm p-2">身高級距</p>
              <p class="font-medium text-sm pl-2">{{ thisPlayer.height }}</p>
            </div>
            <div class="w-1/2 mt-4 sm:mt-0">
              <p class="text-indigo text-sm p-2">擅長位置</p>
              <div class="font-medium text-sm pl-2">
                <label for="" v-for="p in thisPlayer.position" class="inline-block rounded-full bg-indigo text-white px-2 py-1 text-xs mr-2">{{ p }}</label>
              </div>
            </div>
            <div class="w-full sm:w-1/2 mt-4 sm:mt-0">
              <template v-if="thisPlayer.draftPool === 'yes'">
                <p class="text-indigo text-sm p-2">Draft Status</p>
                <div class="font-medium text-sm pl-2">
                  1st Round 1st Pick
                </div>
              </template>
              <template v-else>
                <div class="font-medium text-sm pl-2">
                  自由球員
                </div>
              </template>
            </div>
            <div class="w-full sm:w-1/2 flex-none mt-4 sm:mt-0">
              <p class="text-indigo text-sm p-2">Memo</p>
              <p class="font-medium text-sm pl-2 leading-normal">{{ thisPlayer.memo }}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AvatarGenerator } from 'random-avatar-generator';
import {mapGetters} from 'vuex'

const generator = new AvatarGenerator();
export default {
  props: {
    player: Object
  },

  computed: {
    ...mapGetters(['playerGroupedById', 'teamsGroupedById']),
    thisPlayer() {
      return this.playerGroupedById[this.$route.params.id]
    }
  },
  methods: {
    getAvatar(seed) {
      return generator.generateRandomAvatar(seed);
    }
  }
}
</script>
