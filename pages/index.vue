<template>
  <!-- Content -->
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">

    <!-- Title -->
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-bold">公告</h2>
      </div>
    </div>

    <div class="p-12 mt-4 md:flex flex-wrap order-1 md:-order-1 md:shadow-md lh-2 l bg-white">
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full">
        <nuxt-content :document="announcement" />
      </div>
    </div>

    <div class="p-12 mt-4 md:flex flex-wrap order-1 md:-order-1 md:shadow-md lh-2 l bg-white">
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full">
        <nuxt-content :document="rules" />
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['games'])
  },

  async asyncData ({ $content }) {
    const announcement = await $content('hello').fetch()
    const rules = await $content('rules').fetch()

    return {
      announcement,
      rules
    }
  }
}
</script>
