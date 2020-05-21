// 饼图
<template>
  <div class="Histogram">
    <div :id="idName" :style="{width: '105%',height: '200%'}"></div>
  </div>
</template>

<script>
export default {
  name: "Histogram",
  data() {
    return {};
  },
  props: {
    datas: {
      type: Array,
      default: (()=>{
        []
      })
    },
    idName: {
      type: String,
      default: "Histogram"
    }
  },
  mounted() {
    this.visitor();
  },
  methods: {
    visitor() {
      let myChart = this.$echarts.init(
        document.getElementById(this.idName),
        "macarons"
      );
      myChart.setOption({
        tooltip: {
          show: true,
          formatter: "{b}:{c}"
        },
        xAxis: {
          type: "category",
          data: [
            "A单位",
            "B单位",
            "C单位",
            "D单位",
            "E单位",
            "F单位",
            "G单位",
            "H单位",
            "J单位"
          ]
        },
        yAxis: {
          type: "value"
        },
        grid: {
          top: "15%",
          right: "3%",
          left: "11%",
          bottom: "12%"
        },
        series: [
          {
            top: "500px",
            barWidth: "24px",
            barMinHeight: 10,
            barCategoryGap: "1.615vw",
            label: {
              normal: {
                show: true,
                position: "top",
                formatter: "{c}",
                textStyle: {
                  color: "#005c5a" //color of value
                }
              }
            },
            data: [3600, 7000, 1400, 5700, 5700, 4400, 5800, 3000, 2600],
            type: "bar",
            itemStyle: {
              normal: {
                show: true,
                color: "#13b5b1"
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
</style>
