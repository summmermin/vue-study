<template>
  <div>{{ name }}</div>
  <button v-on:click="cl">click</button>
</template>

<script>
import {ref} from 'vue';
import {reactive} from "vue";

export default {
  setup() {
    const name = ref('summer');
    const id = reactive({id: 1})
    // 데이터가 변경되면 템플릿에서도 변경되는 것을 리액티브하다고함
    // ref()안에는 숫자, 문자 / reactive는 value안적어도되고
    // const greeting = (name) => {
    //   return 'Hello!' + name;
    // }
    // const greet=greeting(name)
    const cl = () => {
      name.value = '민정이최고'
      console.log(name)
    };
    const idChange = () => {
      name.id = 2;
    }
    return {
      name, cl
    }
  }
}
</script>

<style>

</style>