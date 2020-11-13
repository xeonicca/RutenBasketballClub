<template>
  <!-- Content -->
  <div class="flex flex-1 flex-col md:px-6 pt-4" id="content">
    <div class="px-6 md:px-0 flex items-baseline justify-between border-b-2 border-grey-light mt-2">
      <!-- <h4 class="hidden md:inline-block text-grey-dark font-normal">Welcome</h4> -->
      <div>
        <div class="inline-block no-underline border-indigo pb-2 px-4 text-sm mr-2 text-indigo-darkest hover:cursor-pointer js-tab relative active font-bold" data-tab="section-stats">公告</div>
        <nuxt-link class="no-underline md:hidden inline-block border-indigo pb-2 px-4 text-sm mr-2 text-indigo-darkest hover:cursor-pointer js-tab relative" to="/teams">隊伍</nuxt-link>

        <nuxt-link class="no-underline md:hidden inline-block border-indigo pb-2 px-4 text-sm mr-2 text-indigo-darkest hover:cursor-pointer js-tab relative" to="/players">成員</nuxt-link>
      </div>
    </div>

    <!-- <div class="p-12 mt-4 md:shadow-md lh-2 l bg-white">
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full">
        <nuxt-content class="prose prose-sm" :document="announcement" />
      </div>
    </div> -->
    <section>
      <div class="p-8 sm:p-12 m-4 sm:mx-0 md:shadow-md lh-2 bg-white">
        <div class="flex flex-row sm:flex-col items-center sm:items-start w-full">
          <nuxt-content class="prose prose-sm" :document="draft" />
        </div>
      </div>

      <div class="p-8 sm:p-12 m-4 sm:mx-0 md:shadow-md lh-2 bg-white">
        <div class="flex flex-row sm:flex-col items-center sm:items-start w-full">
          <nuxt-content class="prose prose-sm" :document="rules" />
        </div>
      </div>
    </section>
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
    const draft = await $content('draft').fetch()

    return {
      announcement,
      rules,
      draft
    }
  }
}
</script>
