<template>
  <div class="bg-grey-lighter font-sans antialiased">
    <Header />
    <div class="flex">
      <Sidebar />
      <Nuxt />

      <div class="hidden absolute pin-b z-10 lg:relative lg:block w-full lg:w-1/5 bg-grey-lighter-2 px-6 pt-10" id="profile">
        <div class="flex items-center mb-6">
          <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="avatar">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-1178.000000, -87.000000)">
                <g transform="translate(1159.000000, 0.000000)">
                  <g transform="translate(0.000000, 87.000000)">
                    <g transform="translate(19.000000, 0.000000)">
                      <circle id="small-circle" fill="#5661B3" cx="30" cy="30" r="30"></circle>
                      <path id="moon" d="M30.5,49.7304688 C40.7172679,49.7304688 30.5,43.266096 30.5,33.0488281 C30.5,22.8315603 40.7172679,12 30.5,12 C20.2827321,12 11.0390625,20.6479665 11.0390625,30.8652344 C11.0390625,41.0825022 20.2827321,49.7304688 30.5,49.7304688 Z" fill="#F4E1E0"></path>
                      <circle id="big-circle" fill="#070707" cx="31" cy="31" r="11"></circle>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div class="ml-3">
            <p class="title">Ruten Basketball Club</p>
            <p class="text-grey-dark mt-1 text-sm">Since 2019</p>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-start mt-2">
            <div class="ml-3">
              <p class="mt-1 leading-normal">社團相簿</p>
              <p class="text-indigo text-sm mt-1"><a class="no-underline text-indigo hover:text-indigo-dark hover:cursor-pointer" href="http://docs.ruten.tw/drive/d/f/529684832293269626">內網</a></p>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex items-start mt-2"
            <div class="ml-3">
              <p class="mt-1 leading-normal">Youtube頻道</p>
              <p class="text-indigo text-sm mt-1"><a class="no-underline text-indigo hover:text-indigo-dark hover:cursor-pointer" href="https://www.youtube.com/channel/UCab1y2Z0_EnrBANFZd7FsOw">按讚訂閱加分享</a></p>
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
