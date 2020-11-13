<template>
  <div class="flex flex-1 flex-col md:px-6 pt-4" id="content">
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <nuxt-link class="text-indigo text-sm" to="/players">&lt; 球員列表</nuxt-link>
    </div>
    <!-- Desktop Stats -->
    <div class="px-6 md:px-0 mt-4 md:flex flex-wrap order-1 md:-order-1 md:shadow-md">
      <div class="w-full p-8 md:rounded-r-none bg-white shadow-md md:shadow-none">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/3 relative">
            <img class="w-full object-fit" :src="thisPlayer.image && thisPlayer.image[0].url || getAvatar(thisPlayer.id)" :alt="thisPlayer.name">
            <div class="hidden overflow-hidden relative w-full text-center mt-4 mb-4">
              <button class="bg-blue-500 hover:bg-blue-light text-white font-bold py-2 px-4 inline-flex items-center md:w-1/2">
                <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                  </svg>
                  <span class="ml-2">更換圖片</span>
              </button>
              <input
                  class="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
                  type="file"
                  name="image[]"
                  accept="image/*"
                >
            </div>
          </div>
          <div class="flex flex-wrap w-full sm:flex-1 sm:pl-8 mt-8 sm:mt-0">
            <div class="w-full pl-2 mb-0 sm:mb-4">
              <p v-if="thisPlayer.draftPool === 'yes'" class="font-bold text-xl text-indigo mb-1">{{ thisPlayer.teamDetail.name || '未分隊' }}</p>
              <p v-else class="font-bold text-xl text-grey-darker mb-1">自由球員</p>
              <h1 class="font-bold text-4xl">{{ thisPlayer.name }}</h1>
            </div>
            <div class="w-1/2 mt-4 sm:mt-0">
              <p class="text-indigo text-sm p-2">性別</p>
              <p class="font-medium text-sm pl-2">{{ thisPlayer.gender }}</p>
              <p class="text-indigo text-sm p-2 mt-4">身高級距</p>
              <p class="font-medium text-sm pl-2">{{ thisPlayer.height }}</p>
              <p class="text-indigo text-sm p-2 mt-4">背號</p>
              <p class="font-medium text-sm pl-2">{{ thisPlayer.number }}</p>
            </div>
            <div class="w-1/2 mt-4 sm:mt-0">
              <p class="text-indigo text-sm p-2">擅長位置</p>
              <div class="font-medium text-sm pl-2">
                <label for="" v-for="p in thisPlayer.position" class="inline-block rounded-full bg-green-500 text-white px-2 py-1 text-xs mr-2 mb-2">{{ p }}</label>
              </div>
            </div>
            <div class="w-full sm:w-1/2 mt-4">
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
            <div class="w-full sm:w-1/2 flex-none mt-4">
              <p class="text-indigo text-sm p-2">Memo</p>
              <p class="font-medium text-sm pl-2">{{ thisPlayer.memo }}</p>
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
