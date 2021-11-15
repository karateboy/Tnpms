<template>
  <b-row class="match-height bg">
    <b-col lg="12" md="12">
      <b-card no-body class="mt-3">
        <b-tabs card pills fill>
          <b-tab title="台灣智駕測試實驗室" title-item-class="item" active>
            <neoenergy-detail />
          </b-tab>
          <b-tab title="智慧綠能循環住宅園區">
            <neoenergy-detail />
          </b-tab>
          <b-tab title="聯合研究中心">
            <neoenergy-detail />
          </b-tab>
          <b-tab title="示範場域">
            <neoenergy-detail />
          </b-tab>
          <b-tab title="中研院南部院區">
            <neoenergy-detail />
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
  </b-row>
</template>
<style scoped>
.bg {
  background-color: burlywood;
  background-image: url(../assets/images/home.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
}

.item-text {
  font-size: 2rem;
}
</style>
<script lang="ts">
import Vue from 'vue';
import NeoenergyDetail from './NeoenergyDetail.vue';
import moment from 'moment';

export default Vue.extend({
  components: {
    NeoenergyDetail,
  },
  data() {
    return {
      updateTime: moment(),
      summaryUpdateTime: moment(),
      disconnectCheckTime: '',
    };
  },
  computed: {},
  watch: {},
  async mounted() {},
  beforeDestroy() {},
  methods: {},
});
</script>
