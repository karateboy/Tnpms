<template>
  <div></div>
</template>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
<script lang="ts">
import Vue from 'vue';
const Ripple = require('vue-ripple-directive');
import axios from 'axios';

interface EmailTarget {
  _id: string;
  counties: Array<string>;
}

const emailRegx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default Vue.extend({
  directives: {
    Ripple,
  },
  data() {
    return {
      form: {
        sensorGPS: true,
      },
      selected: [],
    };
  },
  mounted() {},
  methods: {},
});
</script>

<style></style>
