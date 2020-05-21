// 雷达
<template>
  <div class="Radar">
    <div :id="idName" :style="{width: '100%',height: '200%'}"></div>
  </div>
</template>

<script>
export default {
  name: "Radar",
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
      default: "Radar"
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
        tooltip: {},
        legend: {
          data: ["进度", "经费", "外协单位", "人员"],
          orient: "vertical",
          icon: "roundRect", //图例形状
          top: "center",
          right: 0,
          itemWidth: 24, // 图例标记的图形宽度。[ default: 25 ]
          itemHeight: 2, // 图例标记的图形高度。[ default: 14 ]
          itemGap: 30, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
          textStyle: {
            fontSize: 10,
            color: "#1a1a1a"
          }
        },
        radar: {
          shape: 'polygon',
          indicator: [
            { name: "A项目", max: 100 },
            { name: "J项目", max: 100 },
            { name: "H项目", max: 100 },
            { name: "G项目", max: 100 },
            { name: "F项目", max: 100 },
            { name: "E项目", max: 100 },
            { name: "D项目", max: 100 },
            { name: "C项目", max: 100 },
            { name: "B项目", max: 100 }
          ],
          textStyle: {
            color: '#1a1a1a',
            fontFamily: 'NotoSansHans-Regular'
        },
          center: ['36%', '55%']
        },
        series: [
          {
            name: "预算 vs 开销",
            type: "radar",
            data: [
              {
                value: [90, 100, 50, 40, 60, 40, 15, 15, 50],
                name: "进度"
              },
              {
                value: [80, 20, 20, 60, 40, 70, 95, 5, 0],
                name: "经费"
              },
              {
                value: [50, 10, 5, 4, 80, 90, 58, 66, 10],
                name: "外协单位"
              },
              {
                value: [80, 10, 100, 60, 50, 80, 65, 75, 70],
                name: "人员"
              }
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
