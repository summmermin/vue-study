<template>
  <form v-on:submit.prevent="submitForm">
    <!--.prevent -->
    <!--event.preventDefault() 위에는 이거랑 같은 역할-->
    <div>
      <label for="username">id :</label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="password">pw :</label>
      <input type="password" id="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from "axios";
// axios는 http프로토콜을 이용한 브라우저에서 서버로 데이터를 주고 받기 위한 라이브러리.

export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm: function () {
      // event.preventDefault();
      console.log(this.username, this.password);
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          });
      //post는 데이터를 생성, 저장하거나 할 때 쓰는 http 방법, methods
    }
  }
}
</script>

<style>

</style>
