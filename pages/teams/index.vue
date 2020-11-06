<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <!-- Title -->
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-normal font-bold">全部隊伍</h2>
        <p class="text-grey-dark mt-2">{{ teamAmount }}隊</p>
      </div>
    </div>

    <!-- Library -->
    <div class="hidden px-2 pt-2 md:px-0 flex-wrap order-2 pb-8 js-tab-pane active" id="section-library">
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4 js-book">
        <img src="/images/book-01.jpg" alt="book-01" class="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo">
        <div class="ml-3 sm:ml-0 w-2/3 sm:w-full">
          <p class="text-sm my-2 font-medium sm:font-normal">apartmento Aug 2018</p>
          <p class="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
          <label for="" class="hidden sm:inline-block rounded-full libre-bg-grey text-white px-2 py-1/2 text-xs">Loaned</label>
          <div class="block sm:hidden relative">
            <select class="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
              <option>Start</option>
              <option>Loaned</option>
              <option selected>Finished</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
        <img src="/images/book-02.jpg" alt="book-02" class="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book">
        <div class="ml-3 sm:ml-0 w-2/3 sm:w-full">
          <p class="text-sm my-2 font-medium sm:font-normal">Popeye Aug 2018</p>
          <p class="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
          <label for="" class="hidden sm:inline-block rounded-full libre-bg-yellow text-white px-2 py-1/2 text-xs">Started</label>
          <div class="block sm:hidden relative">
            <select class="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
              <option>Start</option>
              <option>Loaned</option>
              <option>Reading</option>
              <option selected>Finished</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
        <img src="/images/book-03.jpg" alt="book-03" class="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book">
        <div class="ml-3 sm:ml-0 w-2/3 sm:w-full">
          <p class="text-sm my-2 font-medium sm:font-normal">Brutus Aug 2018</p>
          <p class="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
          <label for="" class="hidden sm:inline-block rounded-full libre-bg-pink text-white px-2 py-1/2 text-xs">Reading</label>
          <div class="block sm:hidden relative">
            <select class="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
              <option>Start</option>
              <option>Loaned</option>
              <option selected>Finished</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
        <img src="/images/book-04.jpg" alt="book-04" class="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book">
        <div class="ml-3 sm:ml-0 w-2/3 sm:w-full">
          <p class="text-sm my-2 font-medium sm:font-normal">Harnako Aug 2018</p>
          <p class="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
          <label for="" class="hidden sm:inline-block rounded-full bg-indigo text-white px-2 py-1/2 text-xs">Finished</label>
          <div class="block sm:hidden relative">
            <select class="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
              <option>Start</option>
              <option>Loaned</option>
              <option selected>Finished</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
        <img src="/images/book-05.jpg" alt="book-05" class="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book">
        <div class="ml-3 sm:ml-0 w-2/3 sm:w-full">
          <p class="text-sm my-2 font-medium sm:font-normal">Premium 2 2018</p>
          <p class="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
          <label for="" class="hidden sm:inline-block rounded-full bg-indigo text-white px-2 py-1/2 text-xs">Finished</label>
          <div class="block sm:hidden relative">
            <select class="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
              <option>Start</option>
              <option>Loaned</option>
              <option selected>Finished</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
        <img src="/images/book-06.jpg" alt="book-06" class="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book">
        <div class="ml-3 sm:ml-0 w-2/3 sm:w-full">
          <p class="text-sm my-2 font-medium sm:font-normal">Premium 4 2018</p>
          <p class="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
          <label for="" class="hidden sm:inline-block rounded-full bg-indigo text-white px-2 py-1/2 text-xs">Finished</label>
          <div class="block sm:hidden relative">
            <select class="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
              <option>Start</option>
              <option>Loaned</option>
              <option selected>Finished</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row sm:flex-col items-center sm:items-start w-full xs:w-1/2 sm:w-1/3 md:w-1/5 p-4">
        <img src="/images/book-07.jpg" alt="book-07" class="w-1/3 sm:w-full shadow-md transition-normal hover:brighter hover:translate-y-1 hover:shadow-lg hover:border-indigo js-book">
        <div class="ml-3 sm:ml-0 w-2/3 sm:w-full">
          <p class="text-sm my-2 font-medium sm:font-normal">Brutus Aug 2018</p>
          <p class="block sm:hidden mt-2 mb-3 text-sm leading-medium">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent.</p>
          <label for="" class="hidden sm:inline-block rounded-full libre-bg-pink text-white px-2 py-1/2 text-xs">Reading</label>
          <div class="block sm:hidden relative">
            <select class="block appearance-none w-full text-sm bg-white border border-grey-light hover:border-grey pl-3 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline">
              <option>Start</option>
              <option>Loaned</option>
              <option selected>Finished</option>
            </select>
            <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['teamsGroupedById']),
    teamAmount() {
      return Object.keys(this.teamsGroupedById).length
    }
  }
}
</script>