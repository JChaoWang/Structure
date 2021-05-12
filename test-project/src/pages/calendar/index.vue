<template>
  <div class="calendar" :style="{ height: height + 'px' }">
    <div class="buttom">
      <span class="cursor" @click="changeDate('pre')">&lt;</span>
      <span>
        <span class="disable">{{ new Date(nowDate).getFullYear() }}-</span>{{ `${new Date(nowDate).getMonth() + 1}月` }}
      </span>
      <span class="cursor" @click="changeDate('next')">&gt;</span>
    </div>
    <div class="calendarTable">
      <div class="item" :style="{ height: 'calc(20% - 1px)' }" v-for="(item, index) in list" :key="index">
        <!-- 星期数 -->
        <section v-show="weekStrList[index]">{{ weekStrList[index] }}</section>
        <!-- 日期 -->
        <section :class="item.disable ? 'disable' : ''">{{ new Date(item.date).getDate() }}日</section>
        <!-- 状态值 -->
        <!-- 上班判断 -->
        <section
          v-show="!(item.status && normalList.includes(item.status.CheckInState))"
          :class="item.status ? compareStatus(item.status.CheckInState) : 'status'"
        >
          {{ item.status && item.status.checkInTime ? item.status.checkInTime : '' }}（{{
            item.status && item.status.CheckInState
              ? item.status.CheckOutState === '缺卡'
                ? `上班${item.status.CheckOutState}`
                : item.status.CheckOutState
              : ''
          }}）
        </section>
        <!-- 下班判断 -->
        <section
          v-show="!(item.status && normalList.includes(item.status.CheckOutState))"
          :class="item.status ? compareStatus(item.status.CheckOutState) : 'status'"
        >
          {{ item.status && item.status.checkOutTime ? item.status.checkOutTime : '' }}（{{
            item.status && item.status.CheckOutState
              ? item.status.CheckOutState === '缺卡'
                ? `下班${item.status.CheckOutState}`
                : item.status.CheckOutState
              : ''
          }}）
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentMonthDates } from '../../common/utils';
import testData from '../../../static/data.json';
export default {
  name: 'Calendar',
  data() {
    return {
      height: window.innerHeight,
      weekStrList: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      nowDate: '2020-09-01', // 默认时间
      list: [], // 数据列表
      normalList: ['正常'],
      warningList: ['迟到', '早退', '缺卡'],
      greenList: ['加班'],
      otherList: ['补卡'],
    };
  },
  created() {
    this.getList(this.nowDate);
  },
  mounted() {
    // 挂载阶段实现对窗口大小的监听
    const that = this;
    window.onresize = () => {
      that.sizeChange();
    };
  },
  methods: {
    // 页面调整事件
    sizeChange() {
      this.$nextTick(() => {
        this.height = window.innerHeight;
      });
    },
    /***
     * 假定请求接口需要进行判断
     */
    getList(now) {
      let dateList = getCurrentMonthDates(now);
      const data = testData || [];
      dateList.forEach((item) => {
        if (data[item.date]) {
          item.status = data[item.date];
        }
      });
      this.list = dateList;
    },
    // 判断状态
    compareStatus(str) {
      if (this.warningList.includes(str)) {
        return 'status red';
      } else if (this.otherList.includes(str)) {
        return 'status blue';
      } else {
        return 'status green';
      }
    },
    changeDate(str) {
      const _year = new Date(this.nowDate).getFullYear();
      const _month = new Date(this.nowDate).getMonth() + 1;
      const _date = new Date(this.nowDate).getDate();
      if (str === 'pre') {
        this.nowDate = `${_year}-${_month - 1 < 10 ? '0' + (_month - 1) : _month - 1}-${
          _date < 10 ? '0' + _date : _date
        }`;
      } else {
        this.nowDate = `${_year}-${_month + 1 < 10 ? '0' + (_month + 1) : _month + 1}-${
          _date < 10 ? '0' + _date : _date
        }`;
      }
      this.getList(this.nowDate);
    },
  },
  destroyed() {
    // 销毁阶段去掉window.onresize事件
    window.onresize = null;
  },
};
</script>

<style scoped>
.calendar {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  background: aquamarine;
}
.buttom {
  margin: 20px 0;
  width: 18%;
  min-width: 185px;
  height: 40px;
  line-height: 40px;
  display: inline-flex;
  justify-content: space-between;
  background: #fff;
  border-radius: 6px;
  box-shadow: 2px 2px 1px #888888;
}
.buttom span {
  padding: 0 10px;
  font-size: 15px;
  display: inline-block;
}
.buttom .cursor {
  cursor: pointer;
}
.buttom .disable {
  color: #adb3bf;
}
.calendarTable {
  width: 100%;
  background: #fff;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid #888888;
  border-left: none;
}
.calendarTable .item {
  width: 14%;
  text-align: center;
  border-left: 1px solid #888888;
  border-bottom: 1px solid #888888;
}
.calendarTable .disable {
  color: #adb3bf;
}
.calendarTable .status {
  margin: 5px;
  padding: 3px 5px;
  text-align: left;
  height: 20px;
  line-height: 20px;
  border-radius: 5px;
  color: #fff;
}
.calendarTable .red {
  background: #da0000;
}
.calendarTable .green {
  background: #098b4c;
}
.calendarTable .blue {
  background: #3d89f8;
}
</style>
