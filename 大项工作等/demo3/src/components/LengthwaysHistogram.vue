// 纵向柱状图
<template>
  <div class="LengthwaysHistogram">
    <div :id="idName" :style="{width: '100%',height: height}"></div>
  </div>
</template>

<script>
export default {
  name: "LengthwaysHistogram",
  data() {
    return {};
  },
  props: {
    num: {
      type: Number,
      default: 20
    },
    Color: {
      type: String,
      default: "#666666"
    },
    idName: {
      type: String,
      default: "meter"
    },
    height: {
      type: String,
      default: "100%"
    },
    series: {
      type: Array,
      default: () => {
        return [
          {
            name: "left",
            data: [11, 51, 51, 41],
            barWidth: "0.208vw",
            barCategoryGap:"1px",
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  var myColor = ["#b37c24", "#24b375", "#e02764", "#0065c3"];
                  var num = myColor.length;
                  return myColor[params.dataIndex];
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: "right",
                formatter: "{c}",
                textStyle: {
                  color: this.Color,
                  fontFamily: "NotoSansHans-Regular",
                  fontSize: "0.729vw",
                  fontWeight: "normal",
                  fontStretch: "normal",
                  letterSpacing: "0vw"
                }
              }
            }
          }
        ];
      }
    }
  },
  watch: {},
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
        color: [this.Color],
        tooltip: {
          show: true,
          formatter: "{b}:{c}"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "-15%",
          top: "0%",
          containLabel: true
        },
        legend: {
          data: ["1"],
          right: 10,
          top: 12,
          textStyle: {
            color: "#000000"
          },
          itemWidth: 12,
          itemHeight: 10
        },
        xAxis: {
          show: false,
          type: "value"
        },
        yAxis: {
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          type: "category",
          data: ["人员", "外协", "经费", "进度"],
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#333333",
              fontSize: "0.625vw"
            }
          }
        },
        series: this.series
      });
    }
  }
};
</script>
<style scoped>
</style>
