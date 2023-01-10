<template>
  <div>
<!--    <app-header v-bind:프롭스속성이름="상위 컴포넌트의 데이터이름"></app-header>-->
    <app-header v-bind:propsdata="str"></app-header>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  data: function () {
    return {str: 'Header'}
  },
  components: {
    'app-header': AppHeader
  }
}
</script>

<style>

</style>
