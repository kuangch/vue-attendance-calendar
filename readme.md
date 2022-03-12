# vue-attendance-calendar

基于vue + element-ui实现的考勤日历组件

## 使用

安装
``` bash
npm install vue-attendance-calendar -S
```

组件安装
``` javascript
import AttendanceCalendar from 'vue-attendance-calendar'
Vue.use(AttendanceCalendar)
```

组件使用
``` html
<attendance-calendar ref="ac" :options="options"/>
```

组件属性
```
options [object] 考勤数据;
-- month: [string] 月份; 如: 2022-02
-- records: [object] 考勤记录; 如:
        {
          '2022-02-01': {start_time: '9:00', end_time: '19:00'},
          '2022-02-02': {start_time: '9:00', end_time: ''},
          '2022-02-03': {start_time: '', end_time: '19:00'},
          '2022-02-04': {start_time: '', end_time: ''},
          '2022-02-05': {start_time: '9:00', end_time: '10:00'},
          '2022-02-15': {start_time: '09:10', end_time: '17:00'},
          '2022-02-16': {start_time: '09:10', end_time: '17:20'},
          '2022-02-17': {start_time: '09:00', end_time: '16:00'},
        }
```


说明
```
```

## 效果
![image](https://raw.githubusercontent.com/kuangch/vue-attendance-calendar/master/screen.jpg)
