<template>
  <div class="bg-grey-lighter font-sans antialiased">
    <Header />
    <div class="main-container flex">
      <Sidebar />
      <Nuxt />

      <div class="hidden absolute pin-b z-10 lg:relative lg:block w-full lg:w-1/5 bg-grey-lighter-2 px-6 pt-10" id="profile">
        <div class="flex items-center mb-6">
          <img src="/images/basketball.svg" alt="Avatar" width="75">
          <div class="ml-3">
            <p class="title">Ruten Basketball Club</p>
            <p class="text-grey-dark mt-1 text-sm">Since 2019</p>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-start mt-2">
            <div class="ml-3">
              <p class="mt-1 leading-normal">社團相簿</p>
              <p class="text-indigo text-sm mt-1"><a class="no-underline text-indigo hover:text-indigo-dark hover:cursor-pointer" href="http://docs.ruten.tw/drive/d/f/529684832293269626" target="_blank">內網</a></p>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-start mt-2"
            <div class="ml-3">
              <p class="mt-1 leading-normal">Youtube頻道</p>
              <p class="text-indigo text-sm mt-1"><a class="no-underline text-indigo hover:text-indigo-dark hover:cursor-pointer" href="https://www.youtube.com/channel/UCab1y2Z0_EnrBANFZd7FsOw" target="_blank">按讚訂閱加分享</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/common/Header'
import Sidebar from '~/components/common/Sidebar'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>
