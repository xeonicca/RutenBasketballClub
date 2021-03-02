<template>
  <div class="main-header bg-indigo-darker text-center p-4 px-6 flex items-center">
    <div class="md:hidden pr-3" id="mobile-nav-trigger" @click.prevent="toggleSidebar">
      <div class="toggle p-2 block" :class="{'open': ifMenuVisible}"><span></span></div>
    </div>
    <div class="lg:w-1/3 pr-8">
      <nuxt-link to="/" class="title text-xl text-white flex items-center justify-start pl-6 no-underline">
        <span>Ruten Basketball Club</span><!-- <small class="ml-2 text-sm p-1 bg-pink-600">S1 Archive</small> -->
      </nuxt-link>
    </div>
    <div class="flex flex-grow items-center justify-end lg:w-2/3">
      <a class="text-sm text-right text-white py-2 px-3 hover:text-grey-dark no-underline" href="https://ruten-basketball-s1.surge.sh" target="_blank">S1</a>
      <nuxt-link class="text-sm text-right text-white py-2 px-3 hover:text-grey-dark no-underline hidden lg:block" to="/">Back to Home</nuxt-link>
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