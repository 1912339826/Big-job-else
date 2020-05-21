// 饼图
<template>
  <div class="pie">
    <div :id="idName" :style="{width: '100%',height: '200%'}"></div>
  </div>
</template>

<script>
export default {
  name: "Pie",
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
      default: "myChart"
    },
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
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: [0, "50%"],
            center:["52%","50%"],
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n{b|{b}:}{per|{d}%}  ",
              backgroundColor: "#fff",
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#fff",
                  lineHeight: 0,
                  height: 0,
                  align: "center"
                },
                abg: {
                  backgroundColor: "#fff",
                  width: "100%",
                  align: "right",
                  height: 0
                },
                hr: {
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: "0.729vw",
                  lineHeight: 0
                },
                per: {
                  color: "#000",
                  backgroundColor: "#fff",
                  padding: [2, 4],
                  fontSize: "0.729vw"
                }
              }
            },
            data: 
            // this.datas
            [
              { value: 335, name: "单位1" },
              { value: 310, name: "单位2" },
              { value: 234, name: "单位3" },
              { value: 135, name: "单位4" },
              { value: 1048, name: "单位5" }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
</style>
