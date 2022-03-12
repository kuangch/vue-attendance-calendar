<template>

  <div style="width: 60vw;">
      <attendance-calendar ref="ac" :options="options"/>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      options: {
        month: '2022-02',
        records: {
          '2022-02-01': {start_time: '9:00', end_time: '19:00'},
          '2022-02-02': {start_time: '9:00', end_time: ''},
          '2022-02-03': {start_time: '', end_time: '19:00'},
          '2022-02-04': {start_time: '', end_time: ''},
          '2022-02-05': {start_time: '9:00', end_time: '10:00'},
          '2022-02-15': {start_time: '09:10', end_time: '17:00'},
          '2022-02-16': {start_time: '09:10', end_time: '17:20'},
          '2022-02-17': {start_time: '09:00', end_time: '16:00'},
        }
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped lang="scss">
    div{
        display: inline-block;

        .btn{
            text-decoration:underline;
            color: grey;
            cursor:pointer;
            padding-left: 5px;
            padding-right: 5px;
        }

        .btn.action{
            color: blue;
        }
    }
</style>
