<template>
  <div class="home">
    <h3>Test.vue 컴포넌트 입니다.</h3>
    <div>
      <p>props : {{ testData }}</p>
      <p>{{ sayHello }}</p>
      <button @click="changeProps">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testData: {
      type: String,
      required: true, // 필수 값 허용 여부
      default: 'Lego' // 기본 값 설정
    }
  },
  computed: { //데이터와 동일하게 this. 로 불러서 사용가능.
    sayHello(){
      return ' 띵동 ~ ' + this.testData
    }
  },
  methods: {
    changeProps(){
      this.testData = '전화입니다'
    }
  }
}
</script>

<style scoped>
  .home {
    margin: 10px auto;
    padding: 10px 0 20px;
    border: 1px solid pink;
    max-width: 600px;
  }
</style>
