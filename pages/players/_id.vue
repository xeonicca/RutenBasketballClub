<template>
  <div class="flex flex-1 flex-col md:px-6 pt-10" id="content">
    <!-- Title -->
    <div class="px-6 md:px-0 flex justify-between items-center -order-1">
      <div>
        <h2 class="font-normal">Art &amp; Design</h2>
        <p class="text-grey-dark mt-2">Interesting Stats</p>
      </div>
      <button class="bg-indigo-dark hover:bg-indigo-darker text-white text-sm py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add New Book</button>
    </div>
    <!-- Desktop Stats -->
    <div class="hidden px-6 md:px-0 mt-4 md:flex flex-wrap order-1 md:-order-1 md:shadow-md js-tab-pane" id="section-stats">
      <div class="p-4 px-6 w-full md:w-1/2 rounded md:rounded-r-none bg-white shadow-md md:shadow-none">
        <h4>Your favourite authors in this category</h4>
        <table class="mt-4 w-full">
          <thead class="p-2 text-sm leading-loose border-b text-indigo">
            <tr>
              <td>Name</td>
              <td class="text-center">Owned/Wishlist</td>
              <td class="text-right">Nationality</td>
            </tr>
          </thead>
          <tbody class="p-2 leading-loose text-sm">
            <tr class="border-b">
              <td class="py-2">Yohji Yamamoto</td>
              <td class="py-2 text-center">5/4</td>
              <td class="py-2 text-right">Japan</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">Sato Oki</td>
              <td class="py-2 text-center">1/3</td>
              <td class="py-2 text-right">Japan</td>
            </tr>
            <tr>
              <td class="py-2">Amaya Arzuaga</td>
              <td class="py-2 text-center">1/1</td>
              <td class="py-2 text-right">Spain</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-full md:w-1/2 p-4 md:pt-12 md:pl-1 mt-4 md:mt-0 lg:pt-12 lg:pl-8 rounded md:rounded-r-none bg-white shadow-md md:shadow-none">
        <div class="flex">
          <div class="w-1/2">
            <p class="text-indigo text-sm p-2">Most read format</p>
            <p class="font-medium text-sm pl-2">Print</p>
          </div>
          <div class="w-1/2">
            <p class="text-indigo text-sm p-2">Total read/own</p>
            <p class="font-medium text-sm pl-2">4/7</p>
          </div>
        </div>
        <div class="pt-6">
          <p class="text-indigo text-sm p-2">Most re-read book</p>
          <p class="font-medium text-sm pl-2 leading-normal">Just My Type: A Book About Fonts
            <br><span class="font-normal">by Simon Garfield</span></p>
        </div>
      </div>
    </div>
    <!-- Filter -->
    <div class="px-6 md:px-0 flex items-baseline justify-between border-b-2 border-grey-light mt-6 order-0 lg:order-1">
      <h4 class="hidden md:inline-block text-grey-dark font-normal">Books</h4>
      <div>
        <div class="inline-block md:hidden no-underline border-indigo pb-2 px-2 text-sm mr-2 text-indigo-darkest hover:cursor-pointer js-tab relative" data-tab="section-stats">Stats</div>
        <div class="no-underline inline-block border-indigo pb-2 px-2 text-sm mr-2 text-indigo-darkest hover:cursor-pointer js-tab active relative" data-tab="section-library">Library <span class="text-indigo text-xs">(7)</span></div>
        <div class="no-underline inline-block border-indigo pb-2 px-2 text-sm text-indigo-darkest hover:cursor-pointer js-tab relative" data-tab="section-picks">Picks for you</div>
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
    <!-- Picks -->
    <div class="hidden flex-wrap order-2 pt-0 md:pt-6 md:pb-8 js-tab-pane" id="section-picks">
      <div class="flex justify-start items-center p-5 px-6 w-full sm:w-1/2" style="background-color:#FBC164;">
        <img src="/images/pick-1.jpg" alt="pick" class="shadow-md w-1/3">
        <div class="ml-4 mt-1 w-2/3">
          <p class="font-medium">Popeye Jul 2018</p>
          <p class="mt-3 text-sm">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent</p>
          <button class="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
        </div>
      </div>
      <div class="flex justify-start items-center p-5 px-6  w-full sm:w-1/2" style="background-color:#F1CECD;">
        <img src="/images/pick-2.jpg" alt="pick" class="shadow-md w-1/3">
        <div class="ml-4 mt-1 w-2/3">
          <p class="font-medium">Brutus Aug 2018</p>
          <p class="mt-3 text-sm">Sapien eget, fermentum curabitur quis ut pharetra odio id, vitae eros eget maecenas, ullamcorper vitae.</p>
          <button class="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
        </div>
      </div>
      <div class="flex justify-start items-center p-5 px-6  w-full sm:w-1/2" style="background-color:#ECE7E9;">
        <img src="/images/pick-3.jpg" alt="pick" class="shadow-md w-1/3">
        <div class="ml-4 mt-1 w-2/3">
          <p class="font-medium">Casa Aug 2018</p>
          <p class="mt-3 text-sm">Curabitur quis ut pharetra odio id, vitae eros eget tristique maecenas, ullamcorper vitae.</p>
          <button class="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
        </div>
      </div>
      <div class="flex justify-start items-center p-5 px-6  w-full sm:w-1/2" style="background-color:#D0E3E8;">
        <img src="/images/pick-4.jpg" alt="pick" class="shadow-md w-1/3">
        <div class="ml-4 mt-1 w-2/3">
          <p class="font-medium">SUPER: Jul 2018</p>
          <p class="mt-3 text-sm">Eu quo donec pellentesque, urna velit. Ultrices ante iaculis ligula praesent</p>
          <button class="shadow-md mt-3 bg-grey-lightest hover:bg-white text-indigo-darker text-xs py-2 px-4 rounded-full transition-normal hover:shadow hover:translate-y-1 active:translate-y-1 focus:outline-none">Add to Wishlist</button>
        </div>
      </div>
    </div>
  </div>
</template>
