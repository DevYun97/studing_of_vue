<template>
  <div class="about">
    <h1>This is an about page</h1>
    props : {{testData}}
    <button @click="changeData">클릭</button>
    <Test :testData="testData" />
  </div>
</template>

<script>
import Test from '../components/Test.vue'

export default {
  data(){
    return {
      testData: '문자이올시다'
    }
  },
  components: {
    Test
  },
  methods: {
    changeData(){
      this.testData = '변경완료'
    }
  },
}
</script>
