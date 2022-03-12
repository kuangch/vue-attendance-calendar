<template>
  <div class="container">
    <el-calendar class="calendar" :value="options.month">
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
          slot="dateCell"
          slot-scope="{date, data}">
          <div style="position: relative; width: 100%; height: 100%">
            <div class="center date">
              {{ (date.getMonth() + 1 == options.month.split('-')[1]) ? data.day.split('-')[2] : ''}}
            </div>
            <div class="item">
              <div class="null center" v-if="!options.records[data.day] || (!options.records[data.day].start_time && !options.records[data.day].end_time)">
                {{ (date.getDay() % 7 == 6 || date.getDay() % 7 == 0 || date.getMonth() + 1 != options.month.split('-')[1]) ? '':'缺勤'}}
              </div>
              <div class="attendance" v-else
                   :style="'background:' + getAttendance(options.records[data.day].start_time,options.records[data.day].end_time,date)">
                <div class="center time start">{{options.records[data.day].start_time}}</div>
                <div class="center time end">{{options.records[data.day].end_time}}</div>
              </div>
            </div>
          </div>

      </template>
    </el-calendar>
  </div>
</template>

<script>

    export default {
        name: "attendance-calendar",
        created(){
        },
        data(){
        },

        props:{
            options:{
                type: Object,
                required: true
            },
            worktime:{
              type: Number,
              required: true
            }
        },

        methods:{
          getDiffTime(startTime,endTime){
            let h = endTime.split(':')[0] - startTime.split(':')[0];
            let m = endTime.split(':')[1] - startTime.split(':')[0];
            return h * 60 + m
          },
          getAttendance(start, end, date){
            if(!start || !end){
              return '#ff000055'
            }
            if(date.getDay() % 7 == 0 || date.getDay() % 7 == 6){
              return '#aaaaaa55'
            }
            if (this.getDiffTime(start, end) >= this.worktime * 60){
              return '#00ff0055'
            }else{
              return '#ffff0055'
            }
          }
        },

        mounted(){
            let _this = this

        },
    }
</script>

<style>
    @keyframes rotate {
        to{
            transform:  translate(-50%, -50%) rotate(360deg);
        }
    }
</style>

<style scoped lang="scss">

    .loading{
        display: inline-block;
        position: absolute;
        width: 20%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /*animation: rotate 2s 0s infinite linear;*/
        transform-origin: 50% 50%;
    }

    .container{
        position: absolute;
        display: inline-block;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background: gainsboro;

      .calendar{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        .center{
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .date{
          position: absolute;
          width: 100%;
          height: 100%;
          font-size: 4.5vw;
          color: #abababab
        }
        .item{
          position: absolute;
          width: 100%;
          height: 100%;

          .null{
            height: 100%;
            color: red;
          }
          .attendance{
            height: 100%;
            .time{
              height: 50%;
              font-size: 1.8vw;
            }
            .start{
              border-bottom: 1px solid gainsboro;
            }
            .end{

            }
          }
        }
      }
    }

</style>
