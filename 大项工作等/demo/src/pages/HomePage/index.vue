<template>
  <div id="HomePage">
    <div id="top">
      <div id="box">
        <nav>项目概况</nav>
        <section>
          <div v-for="(item, index) in list" :key="index" class="list">
            <img :src="item.src" alt />
            <div>
              <span>{{item.num}}</span>
              <span>{{item.name}}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div id="buttom">
      <div id="box">
        <nav>
          <div>待办事项</div>
          <div>更多></div>
        </nav>
        <section>
          <div v-for="(item, index) in taskList['waiting']" :key="index" class="list">
            <div class="message">
              <div class="state">
                <span style="background-color: #f19149;"></span>
                <span>{{item.name}}</span>
              </div>
              <div class="date">办理分期：{{item.date}}</div>
            </div>
            <div class="content">
              <pre>{{item.describe}}</pre>
            </div>
          </div>
        </section>
      </div>
      <div id="box">
        <nav>
          <div>已完成</div>
          <div>更多></div>
        </nav>
        <section>
          <div v-for="(item, index) in taskList['finished']" :key="index" class="list">
            <div class="message">
              <div class="state">
                <span style="background-color: #009cff;"></span>
                <span>{{item.name}}</span>
              </div>
              <div class="date">办理分期：{{item.date}}</div>
            </div>
            <div class="content">
              <pre>{{item.describe}}</pre>
            </div>
          </div>
        </section>
      </div>
      <div id="box">
        <nav>项目情况</nav>
        <section>
          <table border="1">
            <tr class="header">
              <th>项目名称</th>
              <th>进度</th>
              <th>经费</th>
            </tr>
            <tr v-for="(item, index) in 5" :key="index" class="table-list">
              <th>xxxxxxxx项目</th>
              <td>
                <span>80%</span>
                <img src="../../assets/images/上升_03.png" alt />
              </td>
              <td>
                <span>80%</span>
                <img src="../../assets/images/上升_03.png" alt />
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
    <div id="buttom">
      <div id="box">
        <nav>
          <div>已提交</div>
          <div>更多></div>
        </nav>
        <section>
          <div v-for="(item, index) in taskList['finished']" :key="index" class="list">
            <div class="message">
              <div class="state">
                <span style="background-color: #24b375;"></span>
                <span>{{item.name}}</span>
              </div>
              <div class="date">办理分期：{{item.date}}</div>
            </div>
            <div class="content">
              <pre>{{item.describe}}</pre>
            </div>
          </div>
        </section>
      </div>
      <div id="box">
        <nav>
          <div>近期参与项目的外协单位</div>
          <div>更多></div>
        </nav>
        <section>
          <table border="1">
            <tr class="header">
              <th>单位名称</th>
              <th>评级</th>
            </tr>
            <tr v-for="(item, index) in 6" :key="index">
              <td>中电某研究所</td>
              <td>A级</td>
            </tr>
          </table>
        </section>
      </div>
      <div id="box">
        <nav>已完成</nav>
        <section style="width: 27.344vw;height: 14.115vw;">
          <Pie></Pie>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Pie from "../../components/Pie";
export default {
  components: {
    Pie
  },
  name: "HomePage",
  data() {
    return {
      list: [
        { name: "项目总数", img: "项目总数_03", src: "", num: "1111" },
        {
          name: "项目总金额（亿）",
          img: "项目总金额_03",
          src: "",
          num: "1111"
        },
        { name: "参与项目人数", img: "参与人数_03", src: "", num: "1111" },
        { name: "参与外协单位", img: "参与外协单位_03", src: "", num: "1111" },
        { name: "超期项目数", img: "超期项目数_03", src: "", num: "1111" },
        { name: "超经费项目数", img: "超经费项目数_03", src: "", num: "1111" }
      ],
      taskList: {
        // 待办
        waiting: [
          {
            name: "任务名称",
            date: "2019-01-10",
            describe: "这里是描述内容"
          },
          {
            name: "任务名称",
            date: "2019-01-10",
            describe: "这里是描述内容"
          }
        ],
        // 已完成
        finished: [
          { name: "任务名称", date: "2019-01-10", describe: "这里是描述内容" },
          { name: "任务名称", date: "2019-01-10", describe: "这里是描述内容" }
        ],
        // 已提交
        submitted: [
          { name: "任务名称", date: "2019-01-10", describe: "这里是描述内容" },
          { name: "任务名称", date: "2019-01-10", describe: "这里是描述内容" }
        ]
      },
      case: []
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
#HomePage {
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
    #box {
      height: 9.375vw;
      section {
        margin-top: 1.927vw;
        margin-left: 1.823vw;
        width: 90vw;
        height: 3.438vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .list {
          height: 100%;
          display: flex;
          align-items: center;
          img {
            margin-right: 1.042vw;
            width: 3.333vw;
            height: 3.385vw;
          }
          div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            span {
              display: block;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0vw;
              color: #1a1a1a;
              &:nth-child(1) {
                font-family: "Bahnschrift";
                font-size: 2.5vw;
              }
              &:nth-child(2) {
                font-family: "NotoSansHans-Regular";
                font-size: 0.833vw;
              }
            }
          }
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
      padding-right: 0.833vw;
      nav {
        display: flex;
        justify-content: space-between;
        div {
          &:nth-child(2) {
            font-family: "NotoSansHans-Regular";
            font-size: 0.833vw;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0vw;
            color: #00806f;
          }
        }
      }
    }
    &:nth-child(2) {
      #box {
        &:nth-child(1),
        &:nth-child(2) {
          section {
            margin-top: 1.197vw;
            .list {
              padding-top: 0.833vw;
              border-bottom: 0.052vw solid #e6f5f3;
              height: 5.313vw;
              .message {
                display: flex;
                justify-content: space-between;
                .state {
                  display: flex;
                  align-items: center;
                  span {
                    &:nth-child(1) {
                      display: inline-block;
                      width: 0.521vw;
                      height: 0.521vw;
                      border-radius: 50%;
                      margin-right: 0.417vw;
                    }
                    &:nth-child(2) {
                      font-family: "NotoSansHans-Bold";
                      font-size: 0.833vw;
                      font-weight: normal;
                      font-stretch: normal;
                      letter-spacing: 0vw;
                      color: #009985;
                    }
                  }
                }
                .date {
                  font-family: "NotoSansHans-Regular";
                  font-size: 0.729vw;
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0vw;
                  color: #666666;
                }
              }
              .content {
                margin-top: 0.677vw;
                font-family: "NotoSansHans-Regular";
                font-size: 0.729vw;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.25vw;
                letter-spacing: 0vw;
                color: #1a1a1a;
                pre {
                  width: 29.01vw;
                  white-space: pre-wrap; /* css3.0 */
                  white-space: -moz-pre-wrap; /* Firefox */
                  white-space: -pre-wrap; /* Opera 4-6 */
                  white-space: -o-pre-wrap; /* Opera 7 */
                  word-wrap: break-word; /* Internet Explorer 5.5+ */
                }
              }
            }
          }
        }
        &:nth-child(3) {
          &:nth-child(3) {
            section {
              margin-top: 2.031vw;
              table {
                border: solid 0.052vw #a1dad2;
                width: 100%;
                border-collapse: collapse;
                .header {
                  background-color: #e7f6f4;
                }
                tr {
                  th {
                    font-family: "NotoSansHans-Bold";
                    font-size: 0.729vw;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0vw;
                    color: #0f5d53;
                    height: 2.083vw;
                  }
                  td {
                    text-align: center;
                    font-family: "NotoSansHans-Regular";
                    font-size: 0.729vw;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0vw;
                    color: #1a1a1a;
                    img {
                      width: 0.625vw;
                      height: 0.833vw;
                    }
                  }
                }

                .table-list {
                  &:nth-child(odd) {
                    background-color: #f5faf9;
                  }
                }
              }
            }
          }
        }
      }
    }
    &:nth-child(3) {
      #box {
        &:nth-child(1) {
          section {
            margin-top: 1.197vw;
            .list {
              padding-top: 0.833vw;
              border-bottom: 0.052vw solid #e6f5f3;
              height: 5.313vw;
              .message {
                display: flex;
                justify-content: space-between;
                .state {
                  display: flex;
                  align-items: center;
                  span {
                    &:nth-child(1) {
                      display: inline-block;
                      width: 0.521vw;
                      height: 0.521vw;
                      border-radius: 50%;
                      margin-right: 0.417vw;
                    }
                    &:nth-child(2) {
                      font-family: "NotoSansHans-Bold";
                      font-size: 0.833vw;
                      font-weight: normal;
                      font-stretch: normal;
                      letter-spacing: 0vw;
                      color: #009985;
                    }
                  }
                }
                .date {
                  font-family: "NotoSansHans-Regular";
                  font-size: 0.729vw;
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0vw;
                  color: #666666;
                }
              }
              .content {
                margin-top: 0.677vw;
                font-family: "NotoSansHans-Regular";
                font-size: 0.729vw;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.25vw;
                letter-spacing: 0vw;
                color: #1a1a1a;
                pre {
                  width: 29.01vw;
                  white-space: pre-wrap; /* css3.0 */
                  white-space: -moz-pre-wrap; /* Firefox */
                  white-space: -pre-wrap; /* Opera 4-6 */
                  white-space: -o-pre-wrap; /* Opera 7 */
                  word-wrap: break-word; /* Internet Explorer 5.5+ */
                }
              }
            }
          }
        }
        &:nth-child(2) {
          section {
            margin-top: 2.083vw;
            table {
              border: solid 0.052vw #a1dad2;
              width: 100%;
              border-collapse: collapse;
              .header {
                height: 1.667vw;
                background-color: #e7f6f4;
                font-family: "NotoSansHans-Bold";
                font-size: 0.729vw;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0vw;
                color: #0f5d53;
              }
              tr {
                td {
                  height: 2.083vw;
                  text-align: center;
                  font-family: "NotoSansHans-Regular";
                  font-size: 0.729vw;
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0vw;
                  color: #1a1a1a;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>