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
    <div class="hidden px-6 md:px-0 mt-4 md:flex flex-wrap order-1 md:-order-1 md:shadow-md" id="section-stats">
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
  </div>
</template>
