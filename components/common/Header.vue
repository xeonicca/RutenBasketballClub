<template>
  <div class="main-header bg-indigo-darker text-center p-4 px-6 flex items-center">
    <div class="md:hidden pr-3" id="mobile-nav-trigger" @click.prevent="toggleSidebar">
      <div class="toggle p-2 block" :class="{'open': ifMenuVisible}"><span></span></div>
    </div>
    <div class="lg:w-1/4 xl:w-1/5 pr-8">
      <nuxt-link to="/" class="title text-xl text-white flex justify-start pl-6 no-underline">
        Ruten Basketball Club
      </nuxt-link>
    </div>
    <div class="flex flex-grow items-center lg:w-3/4 xl:w-4/5">
      <span class="relative w-full">
        <!-- <input type="search" placeholder="Search" class="w-full text-sm text-white transition border border-transparent focus:outline-none focus:border-indigo placeholder-white rounded bg-indigo-medium py-1 px-2 pl-10 appearance-none leading-normal ds-input">
        <div class="absolute search-icon" style="top: .5rem; left: .8rem;">
          <svg class="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </div> -->
      </span>
      <nuxt-link class="text-sm text-right text-white py-2 px-3 hover:text-grey-dark no-underline hidden lg:block lg:w-1/3 px-6" to="/">Back to Home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ifMenuVisible: Boolean
  },
  methods: {
    toggleSidebar() {
      this.$emit('menu-opened', !this.ifMenuVisible)
    }
  }

}
</script>