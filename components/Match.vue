<template>
  <p class="match bg-white px-2 py-3 border border-indigo text-center">{{ name }}</p>
</template>

<script>
export default {
  props: {
    name: String,
  }
}
</script>