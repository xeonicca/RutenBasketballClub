<template>
  <nav class="absolute lg:relative lg:flex lg:text-sm bg-indigo-darker lg:bg-transparent pin-l pin-r py-4 px-6 lg:pt-10 lg:pl-12 lg:pr-6 -mt-1 lg:mt-0 overflow-y-auto lg:w-1/5 lg:border-r z-40 hidden">
    <ul class="list-reset mb-8 w-full">
      <li class="ml-2 mb-4 flex">
        <img src="/images/iconmonstr-home-4.svg" alt="home-icon" class="w-4 h-4 mr-2">
        <nuxt-link class="hover:cursor-pointer text-white lg:text-indigo-darkest no-underline font-medium mobile-home-trigger" to="/">首頁</nuxt-link>
      </li>
      <li class="ml-2 mb-4">
        <div class="flex" id="sidenav-categories-trigger">
          <img src="/images/iconmonstr-basketball-2.svg" alt="home-icon" class="w-4 h-4 mr-2">
          <div class="hover:cursor-pointer text-white lg:text-indigo-darkest no-underline font-medium w-full relative">
            戰績
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-1 text-grey-darker" id="sidenav-icon">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <ul class="text-grey lg:text-grey-dark list-reset leading-loose mt-2" id="sidenav-categories">
          <li v-for="entry in dateEntryList" class="transition-normal ml-1 border-l border-grey-dark pl-4">
            <nuxt-link class="no-underline text-grey-dark hover:text-indigo-dark hover:cursor-pointer" :to="`/games/${entry}`" activeClass="lg:text-indigo-darker font-medium">{{ entry }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="ml-2 mb-4 flex">
        <img src="/images/iconmonstr-friend-3.svg" alt="wishlist-icon" class="w-4 h-4 mr-2">
        <nuxt-link class="hover:cursor-pointer text-white lg:text-indigo-darkest no-underline font-medium mobile-home-trigger" to="/teams">隊伍</nuxt-link>
      </li>
      <li class="ml-2 mb-4 flex">
        <img src="/images/iconmonstr-generation-1.svg" alt="wishlist-icon" class="w-4 h-4 mr-2">
        <nuxt-link class="hover:cursor-pointer text-white lg:text-indigo-darkest no-underline font-medium mobile-home-trigger" to="/players">成員</nuxt-link>
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
  computed: {
    ...mapGetters(['gamesGroupedByDate']),
    dateEntryList() {
      return Object.keys(this.gamesGroupedByDate).sort((a, b) =>  a > b)
    }
  }
}
</script>
