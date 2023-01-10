import Vue from 'vue'
import App from './App.vue' //컴포넌트 파일(싱글파일 컴포넌트)

Vue.config.productionTip = false

// const App = {
//     template: '<div>app</div>>'
// }

new Vue({
    render: h => h(App),
    // components: {
    //     'app': App
    // }
}).$mount('#app')

// new Vue({
//     el: '#app'
// render: h => h(App), 템플릿 실행했을 때 내부적으로 render가 실행된다
// })