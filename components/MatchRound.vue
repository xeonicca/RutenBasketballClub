<template>
  <div class="item">
    <div class="item-parent">
      <slot name="parent"></slot>
      <strong class="item-order">#{{ order }}</strong>
    </div>
    <div class="item-childrens">
      <div class="item-child">
        <slot name="firstChild"></slot>
      </div>
      <div class="item-child">
        <slot name="secondChild"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { order: String }
}
</script>
