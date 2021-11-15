<template>
  <b-row class="match-height">
    <b-col lg="12" md="12">
      <img src="../assets/images/links.png" fluid />
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
