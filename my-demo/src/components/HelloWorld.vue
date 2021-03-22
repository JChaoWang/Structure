<template>
  <div class="hello">
    <div @click="pickerVisible = true">开关</div>
    <vue-picker
      :data="pickData"
      @cancel="cancel"
      @change="change"
      @confirm="confirm"
      :showToolbar="true"
      :maskClick="true"
      :visible.sync="pickerVisible"
    />
  </div>
</template>

<script>
import vuePicker from 'vue-pickers';
export default {
  name: 'HelloWorld',
  components: { vuePicker },
  data() {
    return {
      pickerVisible: false,
      typeList: [
        { label: '按日', value: 0 },
        { label: '按周', value: 1 },
        { label: '按月', value: 2 },
      ],
      monthList: [
        { label: '12月(上年)', value: 0 },
        { label: '1月', value: 1 },
        { label: '2月', value: 2 },
        { label: '3月', value: 3 },
        { label: '4月', value: 4 },
        { label: '5月', value: 5 },
        { label: '6月', value: 6 },
        { label: '7月', value: 7 },
        { label: '8月', value: 8 },
        { label: '9月', value: 9 },
        { label: '10月', value: 10 },
        { label: '11月', value: 11 },
        { label: '12月', value: 12 },
      ],
      daysList: [
        {
          label: '',
          value: 'null',
        },
      ],
      pickData: [],
      result: '',
    };
  },
  created() {
    this.pickData = [this.typeList, this.monthList, this.daysList];
  },
  methods: {
    cancel() {
      console.log('cancel');
      this.result = 'click cancel result: null';
    },
    change(val) {
      console.log(val, this.pickData);
      if (val[0].value >= 3) {
        this.pickData[0][3].label = '321';
      }
    },
    confirm(res) {
      this.result = JSON.stringify(res);
      console.log(res);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
