<template>
  <div>
    <h2>쇼핑몰</h2>
    <div>{{arr[2]}}</div>
    <span>수량 : </span>
    <button @click="test()">+</button>
    <div v-html="content"/>
    <h2>나라</h2>

    <input type="text" v-model="titChange" @click="test2(titChange)" placeholder="입력하기"><br/>
    <h3>{{ titChange }}</h3>
    <span>대통령 : </span><span v-html="summerChange"/><br/>
    <input type="text" v-model="changeName" @change="change(changeName)" placeholder="바꾸고 싶은 인물로 입력">
    <button>제출</button><br/>
    <span>인구수 : </span><input type="number" v-model="vm" @change="test1()"/><button @click="test1()">-</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {CommonUtils} from "../clobot/utils/CommonUtils";

let content = ref('')
let changeName = ref('')
let summerChange = ref('summer')
let titChange=ref('')
let vm=ref(50000000)

interface summerMall {
  name: string
  brand: string
  price: number
  count: number
}

interface countryInf {
  name: string
  population: number
  capital: string
  president: string
}

class country implements countryInf {
  public name = 'magic world'
  public population = 50000000
  public capital = 'summer-home'
  public president = 'summer'

  public thanos() {
    this.population = this.population / 2
  }

  public tit(chName: string) {
    this.name = chName
  }
}


class shoppingMall implements summerMall {
  public name = 'sneakers'
  public brand = 'newbal'
  public price = 120000
  public count = 5

  public discount() {
    this.count++
    this.price = this.price - 1000
  }

  constructor(val?: summerMall) {
    //constructor를 사용하면 다른 모든 메서드 호출보다 앞선 시점인, 인스턴스 객체를 초기화할 때 수행할 초기화 코드를 정의
    if (val) {
      CommonUtils.updateVO(this, val)
    }
  }
}

const b = new country()
const x = new shoppingMall({name: 'cap', brand: 'nike', price: 90000, count: 1})
const y = new shoppingMall({name: 't-shirts', brand: 'adidas', price: 59000, count: 2})
const z = new shoppingMall()
const arr = [x, y, z]

function test() {
  z.discount()
  content.value += '수량은:' + z.count + '<br/>'
  content.value += '가격은:' + z.price + '<br/>'
}

function change(val: string): void {
  summerChange.value = val;
}

arr[0].discount()
console.log(b)

function test1() {
  b.thanos()
  console.log(b.population)
  vm.value-=b.population
}
function test2(change:string):void{
  b.tit( 'mandu')
  console.log(b.tit)
  titChange.value=change;
}

</script>

<style scoped>
/*1월 20일 금요일 오후까지 해오기*/
/*클래스를 두개만 만들어오는데, 쇼핑몰에서 네임 메이커 프라이스 수량 거기다가 함수는 할인, 하나 팔리면 갯수줄이기
어레이로 만들수도 있다.
쇼핑몰을 컨스트럭터 같은 것도 하나 해보기*/
/*
나라목록 => 인구수, 영어이름 한국이름, 수도, 위도경도, 함수로 하면 타노스해서 인구수 절반으로 ,
그나라의 대통령 바꾸기
*/
</style>