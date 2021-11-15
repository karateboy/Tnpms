<template>
  <div class="100vh homebg">
    <b-row class="match-height">
      <b-col lg="3" class="pt-3 pl-3">
        <b-card title="台灣智駕測試實驗室" border-variant="dark">
          <div class="line-top" />
          <b-row class="pt-1">
            <b-col cols="9"><h4>即時發電量 123KW</h4> </b-col>
            <b-col cols="3" class="text-right"><a href="#">了解更多</a></b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col offset-lg="6" lg="3" class="pt-3 pr-3">
        <b-card title="智慧綠能循環住宅園區">
          <div class="line-top" />
          <b-row class="pt-1">
            <b-col cols="9"><h4>即時發電量 123KW</h4> </b-col>
            <b-col cols="3" class="text-right"><a href="#">了解更多</a></b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3" class="pt-2 pl-3">
        <b-card title="聯合研究中心">
          <div class="line-top" />
          <b-row class="pt-1">
            <b-col cols="9"><h4>即時發電量 123KW</h4> </b-col>
            <b-col cols="3" class="text-right"><a href="#">了解更多</a></b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col offset-lg="6" lg="3" class="pt-2 pr-3">
        <b-card title="中研院南部院區">
          <div class="line-top" />
          <b-row class="pt-1">
            <b-col cols="9"><h4>即時發電量 123KW</h4> </b-col>
            <b-col cols="3" class="text-right"><a href="#">了解更多</a></b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col offset-lg="9" lg="3" class="pt-2 pr-3">
        <b-card title="示範場域">
          <div class="line-top" />
          <b-row class="pt-1">
            <b-col cols="9"><h4>即時發電量 123KW</h4> </b-col>
            <b-col cols="3" class="text-right"><a href="#">了解更多</a></b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="match-height">
      <b-col cols="4" class="pl-3">
        <b-card no-body>
          <b-row no-gutters>
            <b-col cols="1"><b-card-body title="園區即時用電量" /></b-col>
            <b-col cols="11"
              ><b-card-body
                ><b-card-body class="pb-0">
                  <!-- apex chart -->
                  <vue-apex-charts
                    type="line"
                    height="240"
                    :options="salesLine.chartOptions"
                    :series="salesLine.series"
                  />
                </b-card-body> </b-card-body
            ></b-col>
          </b-row> </b-card
      ></b-col>
      <b-col cols="4"
        ><b-card no-body>
          <b-row no-gutters>
            <b-col cols="1"><b-card-body title="園區即時發電量" /></b-col>
            <b-col cols="11"
              ><b-card-body
                ><b-card-body class="pb-0">
                  <!-- apex chart -->
                  <vue-apex-charts
                    type="line"
                    height="240"
                    :options="salesLine.chartOptions"
                    :series="salesLine.series"
                  />
                </b-card-body> </b-card-body
            ></b-col>
          </b-row> </b-card
      ></b-col>
      <b-col cols="4" class="pr-3">
        <b-card
          header="即時溫度與氣象資訊"
          header-class="h3"
          header-bg-variant="info"
          no-body
        >
          <b-row>
            <b-col class="text-center">
              <b-card-body title="16:23">
                <b-card-text><h1>20度C</h1></b-card-text>
              </b-card-body>
            </b-col>
            <b-col>
              <b-card-body>
                <h1>降雨機率15%</h1>
                <img
                  src="https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/03.svg"
                  fluid
                />
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped>
.homebg {
  background-color: burlywood;
  background-image: url(../assets/images/home.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
}
.line-top {
  width: 100%;
  height: 1px;
  border-top: solid blue 1px;
}
.usage {
  background-color: cadetblue;
}
.verticallr {
  font-size: 1.5rem;
  font-weight: 200;
  writing-mode: vertical-lr;
}
.usage-chart {
  background-color: white;
}
.night {
  color: white;
  background-color: #72a2c0;
}

.weekday {
  color: white;
  background-color: #72a2c0;
}
</style>
<script lang="ts">
import Vue from 'vue';
import { $themeColors } from '../../themeConfig';
import VueApexCharts from 'vue-apexcharts';
interface WeatherElement {
  elementName: string;
  time: [
    {
      startTime: string;
      endTime: string;
      parameter: {
        parameterName: string;
        parameterValue: string;
      };
    },
  ];
}
interface CountyForecast {
  locationName: string;
  weatherElement: Array<WeatherElement>;
}
interface WeatherForecast {
  cwbopendata: {
    dataset: {
      datasetInfo: {
        issueTime: string;
      };
      location: Array<CountyForecast>;
    };
  };
}

interface ForecastEntry {
  dayOfWeek: number;
  date: string;
  dayDesc: string;
  dayValue: number;
  dayMax: string;
  dayMin: string;
  nightDesc: string;
  nightValue: number;
  nightMax: string;
  nightMin: string;
}
let pad = (v: number, len: number) => {
  let ret = v.toString();
  while (ret.length < len) {
    ret = '0' + ret;
  }
  return ret;
};

export default Vue.extend({
  components: {
    VueApexCharts,
  },
  data() {
    let forecastTab = Array<ForecastEntry>();
    let themeColors = $themeColors as any;
    return {
      forecastTab,
      salesLine: {
        series: [
          {
            name: '用電量',
            data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: { show: false },
            zoom: { enabled: false },
            type: 'line',
            dropShadow: {
              enabled: true,
              top: 18,
              left: 2,
              blur: 5,
              opacity: 0.2,
            },
            offsetX: -10,
          },
          stroke: {
            curve: 'smooth',
            width: 4,
          },
          grid: {
            borderColor: '#ebe9f1',
            padding: {
              top: -20,
              bottom: 5,
              left: 20,
            },
          },
          legend: {
            show: false,
          },
          colors: ['#df87f2'],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              inverseColors: false,
              gradientToColors: [themeColors.primary],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100],
            },
          },
          markers: {
            size: 0,
            hover: {
              size: 5,
            },
          },
          xaxis: {
            labels: {
              offsetY: 5,
              style: {
                colors: '#b9b9c3',
                fontSize: '0.857rem',
              },
            },
            axisTicks: {
              show: false,
            },
            categories: [
              '0',
              '2',
              '4',
              '6',
              '8',
              '10',
              '12',
              '14',
              '16',
              '18',
              '20',
              '22',
            ],
            axisBorder: {
              show: false,
            },
            tickPlacement: 'on',
          },
          yaxis: {
            tickAmount: 5,
            labels: {
              style: {
                colors: '#b9b9c3',
                fontSize: '0.857rem',
              },
              formatter(val: number) {
                return val > 999 ? `${(val / 1000).toFixed(1)}k` : val;
              },
            },
          },
          tooltip: {
            x: { show: false },
          },
        },
      },
    };
  },
  computed: {},
  watch: {},
  async mounted() {},
  beforeDestroy() {},
  methods: {
    dayIconUrl(v: number) {
      let idx = pad(v, 2);
      let url = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/${idx}.svg`;
      return url;
    },
    nightIconUrl(v: number) {
      let idx = pad(v, 2);
      let url = `https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/${idx}.svg`;
      return url;
    },
    displayDay(i: number): string {
      switch (i) {
        case 0:
          return '星期日';
        case 1:
          return '星期一';
        case 2:
          return '星期二';
        case 3:
          return '星期三';
        case 4:
          return '星期四';
        case 5:
          return '星期五';
        case 6:
          return '星期六';
        default:
          return '錯誤的日期!';
      }
    },
  },
});
</script>
