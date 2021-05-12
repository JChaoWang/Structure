export function getCurrentMonthDates(date) {
  /**
   * 构建公共方法计算出本月第一天到最后一天日期
   */
  const now = date ? new Date(date) : new Date();
  const _year = now.getFullYear(); // 年
  const _month = now.getMonth(); // 月
  const total = new Date(_year, _month + 1, 0).getDate(); // 当月总天数
  let dateList = [];
  for (let i = 1; i <= total; i++) {
    const item = {
      date: transformDate(new Date(_year, _month, i)),
      day: new Date(_year, _month, i).getDay() === 0 ? 7 : new Date(_year, _month, i).getDay(),
      disable: false,
    };
    dateList.push(item);
  }
  // 计算月初需要补充的日期
  const firstDay = new Date(_year, _month, 1).getDay() - 1;
  for (let i = firstDay; i > 0; i--) {
    const item = {
      date: transformDate(new Date(_year, _month, 0 - (i - 1))),
      day: new Date(_year, _month, 0 - (i - 1)).getDay() === 0 ? 7 : new Date(_year, _month, 0 - (i - 1)).getDay(),
      disable: true,
    };
    dateList.unshift(item);
  }
  // 计算月末需要补充的日期
  const lastDay = 7 - new Date(_year, _month, total).getDay();
  for (let i = 1; i <= lastDay; i++) {
    const item = {
      date: transformDate(new Date(_year, _month, total + i)),
      day: new Date(_year, _month, total + i).getDay() === 0 ? 7 : new Date(_year, _month, total + i).getDay(),
      disable: true,
    };
    dateList.push(item);
  }
  return dateList;
}

// 日期格式转换
export function transformDate(date) {
  const now = date ? new Date(date) : new Date();
  const _year = now.getFullYear(); // 年
  const _month = now.getMonth() + 1; // 月
  const _date = now.getDate(); // 日
  return `${_year}-${_month < 10 ? '0' + _month : _month}-${_date < 10 ? '0' + _date : _date}`;
}
