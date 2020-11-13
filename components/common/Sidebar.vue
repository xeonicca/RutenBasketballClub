<template>
  <nav class="absolute md:relative lg:flex lg:text-lg bg-grey-light md:bg-transparent pin-l pin-r md:pin-none py-4 px-6 lg:pt-10 lg:pl-12 lg:pr-6 lg:mt-0 overflow-y-auto md:w-1/4 lg:w-1/5 xl:w-1/6 md:border-r z-40 md:block" id="sidebar" @click="closeHeader" :class="{'hidden': !ifMenuVisible}">
    <ul class="list-reset mb-8 w-full">
      <li class="ml-2 mb-4 flex">
        <img src="/images/iconmonstr-home-4.svg" alt="home-icon" class="w-4 h-4 mr-2">
        <nuxt-link class="text-sm hover:cursor-pointer text-indigo-darkest no-underline font-bold mobile-home-trigger" to="/" activeClass="text-indigo-darker">首頁</nuxt-link>
      </li>
      <li class="ml-2 mb-4 flex">
        <img src="/images/iconmonstr-friend-3.svg" alt="wishlist-icon" class="w-4 h-4 mr-2">
        <nuxt-link class="text-sm hover:cursor-pointer text-indigo-darkest no-underline font-bold mobile-home-trigger" to="/teams" activeClass="text-indigo-dark">隊伍</nuxt-link>
      </li>
      <li class="ml-2 mb-4 flex">
        <img src="/images/iconmonstr-generation-1.svg" alt="wishlist-icon" class="w-4 h-4 mr-2">
        <nuxt-link class="text-sm hover:cursor-pointer text-indigo-darkest no-underline font-bold mobile-home-trigger" to="/players" activeClass="text-indigo-dark">成員</nuxt-link>
      </li>
      <li class="ml-2 mb-4">
        <div class="flex" id="sidenav-categories-trigger">
          <img src="/images/iconmonstr-basketball-2.svg" alt="home-icon" class="w-4 h-4 mr-2">
          <div class="text-sm hover:cursor-pointer text-indigo-darkest no-underline font-bold w-full relative">
            戰績
          </div>
        </div>
        <ul class="text-grey lg:text-grey-dark list-reset leading-loose mt-2" id="sidenav-categories">
          <li v-for="entry in dateEntryList" class="transition-normal ml-1 border-l border-grey-dark pl-4">
            <nuxt-link class="text-sm no-underline text-grey-dark hover:text-indigo-dark hover:cursor-pointer" :to="`/games/${entry}`" activeClass="text-indigo-darker">{{ entry }}</nuxt-link>
          </li>
        </ul>
      </li>
      <!-- <li class="ml-2 mb-4 flex lg:hidden">
        <img src="/images/profile-default.svg" alt="profile-icon" class="w-4 h-4 mr-2">
        <div class="hover:cursor-pointer text-white lg:text-indigo-darkest no-underline font-medium" id="mobile-profile-trigger">Profile</div>
      </li> -->
    </ul>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    ifMenuVisible: Boolean
  },

  computed: {
    ...mapGetters(['gamesGroupedByDate']),
    dateEntryList() {
      return Object.keys(this.gamesGroupedByDate).sort((a, b) =>  a > b)
    }
  },

  methods: {
    closeHeader() {
      this.$emit('menu-opened', false)
    }
  }
}
</script>
