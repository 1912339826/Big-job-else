<template>
  <div id="RiskWarning">
    <div id="top">
      <div id="box">
        <nav>
          <span>项目A</span>
          <span>高风险</span>
        </nav>
        <section>
          <div class="describe">
            <pre>{{text}}</pre>
          </div>
          <div style="width: 6.458vw; height: 6.458vw;" class="echarts">
            <Progress />
          </div>
          <div>
            <LengthwaysHistogram />
          </div>
        </section>
      </div>
      <div id="box">
        <nav>
          <span>项目B</span>
          <span>高风险</span>
        </nav>
        <section>
          <div class="describe">
            <pre>{{text}}</pre>
          </div>
          <div style="width: 6.458vw; height: 6.458vw;" class="echarts">
            <Progress :idName="'one'" />
          </div>
          <div>
            <LengthwaysHistogram :idName="'two'" />
          </div>
        </section>
      </div>
    </div>
    <div id="buttom">
      <div id="box">
        <nav>项目评估排名</nav>
        <section>
          <IsTable :Ifimg="'0'" />
        </section>
      </div>
      <div id="box">
        <nav>项目开支排名</nav>
        <section>
          <IsTable />
        </section>
      </div>
      <div id="box">
        <nav>各项目风险指标排名</nav>
        <section style="width: 26.51vw;height: 17.24vw;">
          <Radar />
        </section>
      </div>
    </div>
    <div id="buttom">
      <div id="box">
        <nav>项目进度排名</nav>
        <section>
          <IsTable />
        </section>
      </div>
      <div id="box">
        <nav>项目个人报销排名</nav>
        <section>
          <IsTable />
        </section>
      </div>
      <div id="box">
        <nav>外协单位经费占比</nav>
        <section style="width: 28.177vw;height: 16.771vw;"> 
            <Histogram/>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Progress from "../../components/Progress";
import LengthwaysHistogram from "../../components/LengthwaysHistogram";
import IsTable from "../../components/IsTable";
import Radar from "../../components/Radar";
import Histogram from '../../components/Histogram'
export default {
  components: {
    Progress,
    LengthwaysHistogram,
    IsTable,
    Radar,
    Histogram
  },
  name: "RiskWarning",
  data() {
    return {
      text:
        "这里是一段任务内容的描述，多余的11111111部分进行省略，这里是一段任这里是一段任务内容的描述，这里是一段任务内容的描务内容的描"
    };
  }
};
</script>
<style lang="less" scoped>
#RiskWarning {
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
    justify-content: space-between;
    #box {
      width: 48.333vw;
      height: 9.375vw;
      nav {
        span {
          &:nth-child(2) {
            margin-left: 0.469vw;
            display: inline-block;
            width: 2.604vw;
            height: 1.094vw;
            line-height: 1vw;
            text-align: center;
            border: 1px solid #ff001d;
            font-size: 0.3vw;
            border-radius: 0.2vw;
            color: #ff0000;
          }
        }
      }
      section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 4.219vw;
        div {
          &:nth-child(3) {
            width: 11.458vw;
            height: 6.458vw;
          }
        }
        .describe {
          font-family: "NotoSansHans-Regular";
          font-size: 0.729vw;
          color: #666666;
          pre {
            width: 17.656vw;
            height: 3.229vw;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.25vw;
            letter-spacing: 0vw;
            position: relative;
            // overflow: hidden;
            // text-overflow: ellipsis;
            // white-space: nowrap;
            white-space: pre-wrap; /* css3.0 */
            white-space: -moz-pre-wrap; /* Firefox */
            white-space: -pre-wrap; /* Opera 4-6 */
            white-space: -o-pre-wrap; /* Opera 7 */
            word-wrap: break-word; /* Internet Explorer 5.5+ */
            span {
              position: absolute;
              right: 0;
              bottom: 0;
            }
          }
        }
        .echartsjs {
          background-color: aqua;
        }
      }
    }
  }
  #buttom {
    margin-top: 0.833vw;
    display: flex;
    justify-content: space-between;
    #box {
      width: 31.927vw;
      height: 21.354vw;
      section {
        width: 26.25vw;
        margin-left: 1.25vw;
        margin-top: 2.031vw;
      }
    }
  }
}
</style>