<template>
  <div>
    <br/>
    <button @click="test()">버튼1</button>
    <br/>
    <button @click="test2()">버튼2</button>
    <br/>
    <button @click="test3()">버튼3</button>
    <br/>
    <button @click="test4()">버튼4</button>
    <br/>
    <button @click="test5()">버튼5</button>
    <br/>
    <button @click="test6()">버튼6</button>
    <br/>
    <button @click="test7()">버튼7</button>
    <br/>
    <button @click="test8()">버튼8</button>
    <br/>
    <button @click="test9()">버튼9</button>
    <br/>
  </div>
</template>

<script setup lang="ts">


const list: any[] = []
for (let i = 0; i < 10; i++) {
  list.push({
    id: i,
    name: 'summer',
    room: i * 100,
    car: `summer${i}`,
    city: 'seoul'
  })
}


const list2: any[] = []
for (let x = 0; x < 6; x++) {
  list2.push({
    color: 'red',
    num: x,
    level: `level${x}`,
    song: 'song',
    job: 'student'
  })
}
// console.log(list2.slice(2, 4));

const list3: any[] = []
for (let y = 0; y < 6; y++) {
  list3.push({
    name: 'gyeom',
    nickname: `nickname${y}`,
    code: y + 10,
    animal: ['사자', '호랑이', '말'],
    level: `level${y}`,
    family: {
      mom: {
        name: 'mj',
        id: 890 + y
      }
    }
  })
}
console.log(list2.concat(list3))


const list4: any = {
  name: 'soo',
  family: {
    mom: {
      name: 'hong',
      age: 55,
      id: `${name}+101`,
      car: true,
      pet: ['강아지', '고양이']
    },
    dad: {
      name: 'jin',
      age: 55,
      id: `${name}+101`,
      car: false,
      pet: []
    }
  },
  weather: 'fall',
  hobby: 'swimming',
  id: `${name}101`
}
// console.log(list3.animal.concat(list4.family.dad.pet))

const list5: any = {
  name: 'you',
  id: 'ara',
  pet: {
    name: 'lisa',
    age: 7,
    food: 'apple',
    hobby: 'dancing',
    num: [100, 10000, 4, 7, 34]
  },
  car: true,
  job: 'designer'
}

function test9(): void {
  const a = {
    a: 1,
    b: 2,
    c: 3
  }
  const b = {
    c: 7,
    d: 4,
    e: 5,
    f: 6
  }
  const c = new Object({
    name: 'summer',
    age: 29
  })
  const d = new Array(12,3,4,5
  )
  // const t1 = ''
  // const aStr = '{"a":1,"b":2,"c":3}'
  // console.log(a)
  // console.log(JSON.stringify(a)) //tostring // 로봇한테
  // console.log(JSON.parse(aStr)) //스트링이었던 애를 오브젝트 타입으로 만들기 //제이슨으로 파싱한다음에
  // console.log(a.hasOwnProperty('a'))
  console.log(Object.assign(a, b, c)) //a랑 b를 합쳐주는애 뒤에 있는 애 기준으로 한다.
  console.log(d)
}


function test(): void {
  console.log(list2.slice(2, 4)); // begin 부터 end 까지(end 미포함)
}

function test2(): void {
  if (list[39]) {

  }
  console.log(list.hasOwnProperty(3))
} //객체가 해당 불리언값을 가지고 있나

function test3(): void {
  console.log(list4.family.mom.pet.map((xy: string) => xy + '1마리'));
//   배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
}

function test4(): void {
  console.log(list3.reverse())
  // console.log(list3.animal.concat(list4.family.dad.pet)) //기존 배열에 합쳐서 새 배열로 반환
}

function test5(): void {
  console.log(list5.pet.num.sort())
// 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
//   sort 안에서 어떻게 돌아가는지 공부하기 commonutils에서 확인가능
}

function test6(): void {
  console.log(list.pop())
// 배열에서 마지막 요소를 제거하고 그 요소를 반환
}

function test7(): void {
  console.log(Array.isArray(list3))
// 이게 어레이인가 확인
}

function test8(): void {
  console.log(list.filter(iop => iop.room == 300))
}
</script>

<style>
#app > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>