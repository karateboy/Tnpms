<template>
  <b-row>
    <b-col cols="8">
      <b-table-simple borderless>
        <b-tbody>
          <b-tr>
            <b-th class="text-left"
              ><h2><strong>契約容量</strong></h2></b-th
            >
            <b-td class="text-right"
              ><h2><strong>1280 kw</strong></h2></b-td
            >
          </b-tr>
          <b-tr>
            <b-th class="text-left"
              ><h2><strong>裝置容量</strong></h2></b-th
            >
            <b-td class="text-right"
              ><h2><strong>680 kw</strong></h2></b-td
            >
          </b-tr>
        </b-tbody>
      </b-table-simple>
      <div>
        <card-analytic-product-orders></card-analytic-product-orders>
        <card-analytic-revenue-report></card-analytic-revenue-report>
      </div>
    </b-col>
    <b-col cols="4"
      ><img src="../assets/images/neoenergy.png" fluid-grow
    /></b-col>
  </b-row>
</template>
<script lang="ts">
import Vue from 'vue';
import CardAnalyticRevenueReport from './CardAnalyticRevenueReport.vue';
import CardAnalyticProductOrders from './CardAnalyticProductOrders.vue';
export default Vue.extend({
  components: {
    CardAnalyticProductOrders,
    CardAnalyticRevenueReport,
  },
});
</script>
