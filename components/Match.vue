<template>
  <div class="match pb-4 pr-4 relative">
    <h2 v-if="title && title !== ''" class="match-title text-xs">{{ title }}</h2>
    <div class="match-body border border-indigo">
      <table class="min-w-full">
        <tbody>
          <tr>
            <td class="px-8 py-4 whitespace-no-wrap bg-white">{{ homeName }}</td>
          </tr>
          <tr v-if="awayName && awayName !== ''">
            <td class="px-8 py-4 whitespace-no-wrap bg-white">{{ awayName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    homeName: String,
    awayName: String,
    title: String
  }
}
</script>

<style>
.match + .match {
  margin-top: 4px;
}

.match-title {
  position: absolute;
  top: -14px;
}

.match:nth-child(odd):after {
  content: '';
  position: absolute;
  top: calc(51% - 8px);
  right: 0;
  content: '';
  display: block;
  width: 1em;
  height: 51%;
  border-right: 1px solid #8795a1;
  border-top: 1px solid #8795a1;
}

.match:nth-child(even):after {
  content: '';
  position: absolute;
  bottom: calc(51% + 8px);
  right: 0;
  content: '';
  display: block;
  width: 1em;
  height: 51%;
  border-right: 1px solid #8795a1;
  border-bottom: 1px solid #8795a1;
}

.match:first-child:last-child:before {
  content: '';
  position: absolute;
  bottom: calc(49% + 8px);
  left: -1em;
  content: '';
  display: block;
  width: 1em;
  height: 0;
  border-top: 1px solid #8795a1;
}
</style>