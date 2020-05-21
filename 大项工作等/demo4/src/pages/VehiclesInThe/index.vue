<template>
  <div id="VehiclesInThe">
    <div id="top">
      <div id="box" v-for="(item, index) in list" :key="index">
        <nav>
          <span>查看</span>
          <img src="../../assets/images/查看_03.png" alt />
        </nav>
        <section>
          <img :src="item.src" alt />
          <div class="right">
            <div class="top">
              <span :style="item.color">{{item.num}}</span>
              <span :style="item.color">辆</span>
            </div>
            <div class="name">
              <span>{{item.name}}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div id="buttom">
      <div id="box">
        <nav>
          <div class="left">车辆在位情况</div>
          <div class="right">
            <div>
              <span style="background-color: #ff4141;"></span>
              <span>不在位</span>
            </div>
            <div>
              <span style="background-color: #24b375;"></span>
              <span>在位</span>
            </div>
          </div>
        </nav>
        <section>
          <div class="unit-list" v-for="(item, index) in 18" :key="index">
            <img src="../../assets/images/车辆_03.png" alt />
            <div class="bottom">
              <div>
                <span></span>
                <span>苏AJ1234</span>
              </div>
              <div>
                <span>某某某</span>
              </div>
            </div>
          </div>
        </section>
        <div id="pages">
          <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VehiclesInThe",
  data() {
    return {
      list: [
        {
          img: "营区当前车辆_03",
          src: "",
          name: "营区内当前车辆",
          num: "111",
          color: "color:#0065c3"
        },
        {
          img: "在位车辆_03",
          src: "",
          name: "在位车辆",
          num: "111",
          color: "color:#24b375"
        },
        {
          img: "不在位车辆_03",
          src: "",
          name: "不在位车辆",
          num: "111",
          color: "color:#ff4141"
        },
        {
          img: "异常车辆_03",
          src: "",
          name: "异常车辆",
          num: "111",
          color: "color:#ff8c26"
        }
      ]
    };
  },
  mounted() {
    this.list.map(item => {
      item.src = this.srcimg(item.img);
    });
  },
  methods: {
    srcimg(img) {
      return require(`../../assets/images/${img}.png`);
    }
  }
};
</script>
<style lang="less" scoped>
#VehiclesInThe {
  background-color: #f5faf9;
  padding: 1.25vw;
  #box {
    background-color: #ffffff;
    box-shadow: 0vw 0.104vw 0.313vw 0vw rgba(0, 0, 0, 0.1);
    border-radius: 0.417vw;
    padding-left: 1.302vw;
    padding-top: 0.833vw;
    nav {
      font-family: "NotoSansHans-Regular";
      font-size: 0.833vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0vw;
    }
  }
  #top {
    display: flex;
    justify-content: space-between;
    #box {
      width: 23.75vw;
      height: 8.333vw;
      nav {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: 1.25vw;
        align-items: center;
        span {
          font-family: "NotoSansHans-Regular";
          font-size: 0.833vw;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0vw;
          color: #009985;
        }
        img {
          margin-left: 0.26vw;
          width: 0.729vw;
          height: 0.729vw;
        }
      }

      section {
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0vw;
        margin-top: 0.469vw;
        display: flex;
        align-items: center;
        img {
          width: 4.167vw;
          height: 4.167vw;
          margin-right: 1.677vw;
        }
        .right {
          .top {
            span {
              &:nth-child(1) {
                font-family: "Bahnschrift";
                font-size: 2.917vw;
              }
              &:nth-child(2) {
                margin-left: 0.677vw;
                font-family: "NotoSansHans-Regular";
                font-size: 0.833vw;
              }
            }
          }
          .name {
            font-family: "NotoSansHans-Regular";
            font-size: 0.833vw;
            color: #666666;
          }
        }
      }
    }
  }
  #buttom {
    width: 100%;
    height: 44.583vw;
    margin-top: 0.833vw;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0vw;
    #box {
      padding-bottom: 1vw;
      nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-right: 1.198vw;
        .left {
          color: #00806f;
        }
        .right {
          display: flex;
          justify-content: space-between;
          width: 8.125vw;
          align-items: center;
          div {
            display: flex;
            align-items: center;
            span {
              display: inline-block;
              &:nth-child(1) {
                width: 0.625vw;
                height: 0.625vw;
                border-radius: 50%;
                margin-right: 0.365vw;
              }
              &:nth-child(2) {
                font-family: "NotoSansHans-Regular";
                font-size: 0.833vw;
                color: #666666;
              }
            }
          }
        }
      }
      section {
        width: 95.106vw;
        height: 40.313vw;
        display: flex;
        flex-wrap: wrap;
        .unit-list {
          margin-top: 1.667vw;
          margin-right: 1.771vw;
          width: 14.063vw;
          height: 11.458vw;
          background-color: #ffffff;
          box-shadow: 0vw 0.104vw 0.208vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0.208vw;
          img {
            width: 14.063vw;
            height: 8.333vw;
          }
          .bottom {
            height: 3.125vw;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 0.781vw;
            padding-left: 1.25vw;
            div {
              &:nth-child(1) {
                span {
                  display: inline-block;
                  &:nth-child(1) {
                    width: 0.729vw;
                    height: 0.729vw;
                    background-color: #24b375;
                    border-radius: 50%;
                  }
                  &:nth-child(2) {
                    font-family: "NotoSansHans-Regular";
                    font-size: 0.833vw;
                    color: #1a1a1a;
                  }
                }
              }
              &:nth-child(2) {
                font-family: "NotoSansHans-Bold";
                font-size: 0.833vw;
                color: #009985;
              }
            }
          }
        }
      }
      #pages {
        margin-top: 1.354vw;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        /deep/.el-pagination.is-background {
          font-family: "NotoSansHans-Regular";
          font-size: 0.729vw;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0vw;
          color: #1a1a1a;
          button {
            border: solid 0.052vw #a1dad2;
          }
          .el-pager {
            li {
              border: solid 0.052vw #a1dad2;
            }
            .active {
              background-color: #009985;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>