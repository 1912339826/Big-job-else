<template>
  <div class="IsTable">
    <table border="1">
      <tr class="header">
        <th>项目名称</th>
        <th>风险指标</th>
      </tr>
      <tr v-for="(item, index) in 5" :key="index">
        <td>XXXXXX项目</td>
        <td>
          <span>25</span>
          <span v-if="Ifimg=='1'">
            <img src="../assets/images/上升_03.png" alt />
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "IsTable",
  props: {
    Ifimg: {
      type: String,
      default: '1'
    }
  }
};
</script>
<style lang="less" scoped>
.IsTable {
  width: 100%;
  table {
    width: 100%;
    border: solid 0.052vw #a1dad2;
    border-collapse: collapse;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    .header {
      height: 2.083vw;
      background-color: #e7f6f4;
      font-family: "NotoSansHans-Bold";
      font-size: 0.729vw;
      color: #0f5d53;
    }
    tr {
      &:nth-child(odd) {
        background-color: #f5faf9;
      }
      td {
        text-align: center;
        height: 2.083vw;
        &:nth-child(1) {
          font-family: "NotoSansHans-Bold";
          font-size: 0.729vw;
          color: #009985;
        }
        &:nth-child(2) {
          color: #1a1a1a;
          font-family: "NotoSansHans-Regular";
          font-size: 0.729vw;
          img {
            width: 0.625vw;
            height: 0.833vw;
            padding-top: 0.025vw;
          }
        }
      }
    }
  }
}
</style>