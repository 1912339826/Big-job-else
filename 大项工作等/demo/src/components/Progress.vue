// 环形进度条（仪表盘）
<template>
  <div>
    <div :id="idName" :style="{width: '120%',height: '70%'}"></div>
  </div>
</template>
<script>
export default {
  name: "Progress",
  props: {
    idName: {
      type: String,
      default: "Progress"
    },
    color:{
      type:Array,
      default:(()=>{
        return ["#ff4141","#ffecec"]
      })
    }
  },
  mounted() {
    this.visitor();
  },
  methods: {
    visitor() {
      var isdata = [80, 80, 20];
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      myChart.setOption({
        color: this.color,
        tooltip: {
          trigger: "item",
          formatter: "{b} :<br/> {c} ({d}%)"
        },
        title: {
          text: `${isdata[0]}%`,
          textStyle: {
            color: this.color[0],
            fontSize: "2.083vw",
            fontFamily: "Bahnschrift"
          },
          x: "27%",
          y: "43%"
        },
        series: [
          {
            name: "中考知识点",
            type: "pie",
            radius: ["90%", "65%"],
            center: ["40%", "55%"],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: isdata[1], name: "已完成" },
              { value: isdata[2], name: "未完成" }
            ]
          }
        ]
      });
    }
  }
};
</script>