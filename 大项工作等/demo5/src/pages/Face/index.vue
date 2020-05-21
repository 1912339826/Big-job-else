// 人脸
<template>
  <div id="Face">
    <div id="left">
      <div id="box" class="boxone">
        <nav>
          <div class="nav-left">
            <img src="../../assets/images/icon_03.png" alt />
            <span>实时监控</span>
          </div>
          <div class="nav-right">
            <img src="../../assets/images/zoom-one_03.png" alt />
            <img src="../../assets/images/zoom-four_03.png" alt />
            <img src="../../assets/images/zoom-nine_03.png" alt />
            <img src="../../assets/images/zoom-max_03.png" alt />
          </div>
        </nav>
        <section>
          <img src="../../assets/images/监控示例_03.jpg" alt />
        </section>
      </div>
      <div id="box" class="boxtwo">
        <nav>
          <div class="nav-left">
            <img src="../../assets/images/实时抓拍_03.png" alt />
            <span>实时抓拍</span>
          </div>
          <div class="nav-right">
            <div class="voice">
              <img src="../../assets/images/抓拍声音_03.png" alt />
              <div>已开启抓拍声音</div>
            </div>
            <div class="move">更多></div>
          </div>
        </nav>
        <section>
          <div class="list" v-for="(item, index) in 16" :key="index">
            <img src="../../assets/images/抓拍照_03.jpg" alt />
            <div>15:20:07</div>
          </div>
        </section>
      </div>
    </div>
    <div id="right">
      <div id="box">
        <nav>
          <div class="nav-left">
            <img src="../../assets/images/实时比对_03.png" alt />
            <div>实时比对</div>
          </div>
          <div class="nav-right">更多></div>
        </nav>
        <section>
          <div class="list" v-for="(item, index) in 4" :key="index">
            <div class="box">
              <img src="../../assets/images/对比照_03.jpg" alt />
              <div class="one">2019-01-01 15:20:07</div>
              <div class="two">
                <div>办公室测试</div>
                <div>详情</div>
              </div>
            </div>
            <div class="middle">
              <div class="top">相似度</div>
              <div style="width: 5.938vw;height: 5.938vw;">
                <Progress :color="['#4185ff','#123765']" :idName="`Progress${index}`" />
              </div>
            </div>
            <div class="box">
              <img src="../../assets/images/对比照_03.jpg" alt />
              <div class="one">2019-01-01 15:20:07</div>
              <div class="two">
                <div>张新杰（白名单）</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Progress from "../../components/Progress";
export default {
  name: "Face",
  components: {
    Progress
  }
};
</script>
<style lang="less" scoped>
#Face {
  background-color: #161d33;
  padding-top: 1.25vw;
  padding-bottom: 1.25vw;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  #box {
    background-color: #041f46;
    box-shadow: 0vw 0.104vw 0.313vw 0vw rgba(0, 0, 0, 0.1);
    border-radius: 0.417vw;
    border: solid 0.052vw #041f46;
    padding-top: 1.094vw;
    padding-left: 1.25vw;
    padding-right: 1.25vw;
    padding-bottom: 1.25vw;
  }
  #left {
    .boxone {
      width: 62.083vw;
      height: 33.854vw;
      nav {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .nav-left {
          display: flex;
          align-items: center;
          img {
            width: 0.938vw;
            height: 0.885vw;
            margin-right: 0.573vw;
          }
          span {
            display: inline-block;
            font-family: "NotoSansHans-Medium";
            font-size: 0.938vw;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0vw;
            color: #ffffff;
          }
        }
        .nav-right {
          img {
            margin-left: 0.417vw;
            width: 1.25vw;
            height: 1.25vw;
          }
        }
      }
      section {
        margin-top: 1.198vw;
        width: 59.583vw;
        height: 29.479vw;
        border: solid 0.052vw #0065c3;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 58.958vw;
          height: 28.854vw;
        }
      }
    }
    .boxtwo {
      margin-top: 0.833vw;
      width: 62.083vw;
      height: 19.063vw;
      padding: 0;
      nav {
        padding-top: 1.094vw;
        padding-left: 1.25vw;
        padding-right: 1.25vw;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0vw;
        .nav-left {
          display: flex;
          align-items: center;
          img {
            width: 1.042vw;
            height: 1.042vw;
            margin-right: 0.625vw;
          }
          span {
            display: inline-block;
            font-family: "NotoSansHans-Medium";
            font-size: 0.938vw;
            color: #ffffff;
          }
        }
        .nav-right {
          font-family: "NotoSansHans-Regular";
          font-size: 0.833vw;
          color: #4185ff;
          display: flex;
          align-items: center;
          .voice {
            display: flex;
            align-items: center;
            img {
              margin-right: 0.417vw;
              width: 0.833vw;
              height: 0.781vw;
            }
          }
          .move {
            margin-left: 2.083vw;
          }
        }
      }
      section {
        margin-top: 0.99vw;
        width: 100%;
        height: 15.417vw;
        padding-top: 0.208vw;
        padding-left: 0.208vw;
        display: flex;
        flex-wrap: wrap;
        .list {
          margin-left: 1.25vw;
          img {
            width: 6.25vw;
            height: 5.729vw;
          }
          div {
            text-align: center;
            font-family: "NotoSansHans-Regular";
            font-size: 0.729vw;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0vw;
            color: #ffffff;
            width: 6.25vw;
            height: 1.042vw;
            background-image: linear-gradient(
              -90deg,
              #041f46,
              #02356a,
              #041f46
            );
          }
        }
      }
    }
  }
  #right {
    #box {
      width: 34.583vw;
      height: 53.75vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0vw;
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .nav-left {
          display: flex;
          align-items: center;
          img {
            width: 1.146vw;
            height: 1.042vw;
            margin-right: 0.625vw;
          }
          div {
            font-family: "NotoSansHans-Medium";
            font-size: 0.938vw;
            color: #ffffff;
          }
        }
        .nav-right {
          font-family: "NotoSansHans-Regular";
          font-size: 0.833vw;
          color: #4185ff;
        }
      }
      section {
        margin-top: 1.146vw;
        .list {
          display: flex;
          justify-content: space-between;
          padding-left: 0.521vw;
          padding-right: 0.729vw;
          margin-bottom: 1.25vw;
          width: 30.417vw;
          height: 11.875vw;
          padding-bottom: 0.938vw;
          border-bottom: 0.052vw solid hsla(209, 100%, 38%, 0.3);
          &:last-child {
            margin-bottom: 0vw;
          }
          .box {
            width: 7.969vw;
            height: 10.677vw;
            background-color: hsla(219, 100%, 63%, 0.1);
            border-radius: 0.208vw;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            img {
              margin-top: 0.26vw;
              width: 7.292vw;
              height: 7.292vw;
            }
            .one {
              font-family: "NotoSansHans-Regular";
              font-size: 0.729vw;
              color: hsla(0, 0%, 100%, 0.6);
            }
            .two {
              width: 7.292vw;
              display: flex;
              justify-content: space-between;
              div {
                &:nth-child(1) {
                  font-family: "NotoSansHans-Regular";
                  font-size: 0.729vw;
                  color: #ffffff;
                }
                &:nth-child(2) {
                  font-family: "NotoSansHans-Regular";
                  font-size: 0.729vw;
                  color: #4185ff;
                }
              }
            }
          }
          .middle {
            .top {
              margin-top: 0.573vw;
              margin-bottom: 0.7vw;
              font-family: "NotoSansHans-Regular";
              font-size: 0.833vw;
              color: #0065c3;
              text-align: center
            }
          }
        }
        // 黑名单报警
        .is-blacklist {
          background-color: hsla(0, 100%, 63%, 0.3);
        }
      }
    }
  }
}
</style>