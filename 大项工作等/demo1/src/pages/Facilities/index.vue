<template>
  <div id="Facilities">
    <div id="top">
      <div id="box">
        <nav>营区招待所</nav>
        <section>
          <div class="unit">
            <img src="../../assets/images/房间_03.png" alt />
            <div class="unit-right">
              <div>空余/房间总数</div>
              <div style="color:#24b39f">
                <span>45</span>
                <span>/100</span>
              </div>
            </div>
          </div>
          <div class="unit" style="margin-right: 1.5vw;">
            <img src="../../assets/images/入住人数_03.png" alt />
            <div class="unit-right">
              <div>入住人数</div>
              <div style="color:#24b39f">
                <span>80</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="box">
        <nav>军用停车场</nav>
        <section>
          <div class="unit">
            <img src="../../assets/images/车位_03.png" alt />
            <div class="unit-right">
              <div>空余/车位总数</div>
              <div style="color:#24b375">
                <span>45</span>
                <span>/100</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="box">
        <nav>私家车停车场</nav>
        <section>
          <div class="unit">
            <img src="../../assets/images/私家车_03.png" alt />
            <div class="unit-right">
              <div>空余/车位总数</div>
              <div style="color:#248cb3">
                <span>45</span>
                <span>/100</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="box">
        <nav>理发室</nav>
        <section>
          <div class="unit">
            <img src="../../assets/images/排队_03.png" alt />
            <div class="unit-right">
              <div>排队人数</div>
              <div style="color:#0065c3">
                <span>45</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="box">
        <nav>洗车房</nav>
        <section>
          <div class="unit">
            <img src="../../assets/images/洗衣房排队_03.png" alt />
            <div class="unit-right">
              <div>排队人数</div>
              <div style="color:#b35a24">
                <span>45</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="box">
        <nav>充电桩</nav>
        <section>
          <div class="unit">
            <img src="../../assets/images/充电桩_03.png" alt />
            <div class="unit-right">
              <div>空余/总数</div>
              <div style="color:#9859b3">
                <span>45</span>
                <span>/100</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div id="buttom">
      <div id="box">
        <nav>
          <div>充电桩信息</div>
          <div class="message">
            <div>
              <span style=" background-color: #e02764;"></span>
              <span>已占用</span>
            </div>
            <div>
              <span style=" background-color: #24b375;"></span>
              <span>空闲</span>
            </div>
          </div>
        </nav>
        <section>
          <div></div>
        </section>
      </div>
      <div id="box">
        <nav>保障设施监控</nav>
        <section>
          <div>
            <img src="../../assets/images/保障设备监控预览_03.png" alt />
          </div>
          <div>
            <img src="../../assets/images/保障设备监控预览_03.png" alt />
          </div>
          <div>
            <img src="../../assets/images/保障设备监控预览_03.png" alt />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Facilities"
};
</script>
<style lang="less" scoped>
#Facilities {
  background-color: #f5faf9;
  padding: 1.25vw;
  #box {
    background-color: #ffffff;
    box-shadow: 0vw 0.104vw 0.313vw 0vw rgba(0, 0, 0, 0.1);
    border-radius: 0.417vw;
    padding-left: 1.302vw;
    padding-top: 0.833vw;
    nav {
      font-family: "NotoSansHans-Bold";
      font-size: 0.938vw;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0vw;
      color: #00806f;
    }
  }
  #top {
    display: flex;
    #box {
      margin-right: 0.833vw;
      section {
        margin-top: 1.445vw;
        height: 3.635vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .unit {
          display: flex;
          align-items: center;
          img {
            margin-right: 1.094vw;
            width: 3.333vw;
            height: 3.333vw;
          }
          .unit-right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            div {
              &:nth-child(1) {
                font-family: "NotoSansHans-Regular";
                font-size: 0.833vw;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0vw;
                color: #1a1a1a;
              }
              &:nth-child(2) {
                span {
                  font-family: "Bahnschrift";
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0vw;
                  &:nth-child(1) {
                    font-size: 2.5vw;
                  }
                  &:nth-child(2) {
                    font-size: 1.25vw;
                  }
                }
              }
            }
          }
        }
      }
      &:nth-child(1) {
        width: 25.365vw;
        height: 9.375vw;
        section {
        }
      }
      &:nth-child(2) {
        width: 13.594vw;
        height: 9.375vw;
      }
      &:nth-child(3) {
        width: 13.594vw;
        height: 9.375vw;
      }
      &:nth-child(4) {
        width: 13.594vw;
        height: 9.375vw;
      }
      &:nth-child(5) {
        width: 13.594vw;
        height: 9.375vw;
      }
      &:nth-child(6) {
        width: 13.594vw;
        height: 9.375vw;
        margin-right: 0;
      }
    }
  }

  #buttom {
    margin-top: 0.833vw;
    display: flex;
    #box {
      &:nth-child(1) {
        margin-right: 0.833vw;
        width: 77.5vw;
        height: 43.542vw;
        padding-right: 1.25vw;
        nav {
          display: flex;
          justify-content: space-between;
          .message {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 8.073vw;
            div {
              display: flex;
              align-items: center;
              span {
                display: block;
                font-family: "NotoSansHans-Regular";
                font-size: 0.833vw;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0vw;
                color: #1a1a1a;
                &:nth-child(1) {
                  width: 0.625vw;
                  height: 0.625vw;
                  border-radius: 50%;
                  margin-right: 0.052vw;
                }
              }
            }
          }
        }
        section {
            margin-top: 1.198vw;
          div { 
            width: 75vw;
            height: 39.323vw;
            background-color: #eeeeee;
          }
        }
      }
      &:nth-child(2) {
        width: 19.167vw;
        height: 43.542vw;
        section {
          div {
            margin-top: 0.99vw;
            img {
              width: 16.667vw;
              height: 12.5vw;
            }
          }
        }
      }
    }
  }
}
</style>