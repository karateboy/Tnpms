<template>
  <b-row class="match-height">
    <b-col lg="12" md="12">
      <b-card no-body>
        <b-tabs card content-class="mt-3" fill>
          <b-tab title="總覽" active> </b-tab>
          <b-tab title="投標及抑低建議"> </b-tab>
          <b-tab title="今日執行情形"> </b-tab>
          <b-tab title="得標與執行紀錄">
            <neoenergy-detail />
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
  </b-row>
</template>
<style scoped></style>
<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

interface Location {
  lat: number;
  lng: number;
}

export default Vue.extend({
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
