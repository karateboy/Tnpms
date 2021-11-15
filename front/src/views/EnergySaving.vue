<template>
  <b-row class="match-height">
    <b-col cols="4">
      <b-card img-src="../assets/images/energy-saving.png" overlay>
        <b-card-title
          ><h2><strong>能耗指標</strong></h2></b-card-title
        >
        <h3>
          平均EUI <span class="highlight">2,347</span> (kWh/m<sup>2</sup>)
        </h3>
        <h3>平均節電綠 <span class="highlight">6</span> %</h3>
      </b-card>
    </b-col>
    <b-col cols="4">
      <b-card img-src="../assets/images/solar.jpg" overlay>
        <b-card-title
          ><h2><strong>綠電指標</strong></h2></b-card-title
        >
        <h3 class="text-white">
          綠電使用滲透率 <span class="highlight">54.3</span> (%)
        </h3>
        <h3 class="text-white">
          總發電量 <span class="highlight">2,350</span> (kWp)
        </h3>
        <h3 class="text-white">
          累積減碳量 <span class="highlight">365,500</span> (kg)
        </h3>
      </b-card>
    </b-col>
    <b-col cols="4">
      <b-card img-src="../assets/images/forest.jpg" text-variant="info" overlay>
        <b-card-title
          ><h2 class="text-white"><strong>節能減碳量</strong></h2></b-card-title
        >
        <h3 class="text-white">
          相當種植 <span class="highlight">750</span>棵樹
        </h3>
      </b-card>
    </b-col>
    <b-col cols="12">
      <ecommerce-company-table :table-data="companyTable" />
    </b-col>
  </b-row>
</template>
<style scoped>
.highlight {
  font-size: 2rem;
  font-weight: 800;
  color: cadetblue;
}
</style>
<script lang="ts">
import Vue from 'vue';
import EcommerceCompanyTable from './EcommerceCompanyTable.vue';

interface Location {
  lat: number;
  lng: number;
}

export default Vue.extend({
  components: {
    EcommerceCompanyTable,
  },
  data() {
    let companyTable = [
      {
        avatarImg: require('@/assets/images/icons/toolbox.svg'),
        no: '1',
        title: '台灣智駕測試實驗室',
        subtitle: 'meguc@ruj.io',
        avatarIcon: 'MonitorIcon',
        avatarColor: 'light-primary',
        avatarTitle: 'Technology',
        viewTitle: '5%',
        viewsub: 'in 24 hours',
        revenue: '891.2',
        sales: '68',
        loss: false,
      },
      {
        avatarImg: require('@/assets/images/icons/parachute.svg'),
        no: '2',
        title: '智慧綠能循環住宅園區',
        subtitle: 'vecav@hodzi.co.uk',
        avatarIcon: 'CoffeeIcon',
        avatarColor: 'light-success',
        avatarTitle: 'Grocery',
        viewTitle: '4%',
        viewsub: 'in 2 days',
        revenue: '668.51',
        sales: '97',
        loss: true,
      },
      {
        avatarImg: require('@/assets/images/icons/brush.svg'),
        no: 'C',
        title: '聯合研究中心',
        subtitle: 'davcilse@is.gov',
        avatarIcon: 'WatchIcon',
        avatarColor: 'light-warning',
        avatarTitle: 'Fashion',
        viewTitle: '2%',
        viewsub: 'in 5 days',
        revenue: '522.29',
        sales: '62',
        loss: false,
      },
      {
        avatarImg: require('@/assets/images/icons/star.svg'),
        no: 'D',
        title: '示範場域',
        subtitle: 'us@cuhil.gov',
        avatarIcon: 'MonitorIcon',
        avatarColor: 'light-primary',
        avatarTitle: 'Technology',
        viewTitle: '-2%',
        viewsub: 'in 24 hours',
        revenue: '291.01',
        sales: '88',
        loss: false,
      },
      {
        avatarImg: require('@/assets/images/icons/book.svg'),
        no: 'E',
        title: '中研院南部院區',
        subtitle: 'pudais@jife.com',
        avatarIcon: 'CoffeeIcon',
        avatarColor: 'light-success',
        avatarTitle: 'Grocery',
        viewTitle: '6%',
        viewsub: 'in 1 week',
        revenue: '783.93',
        sales: '16',
        loss: true,
      },
    ];
    return {
      companyTable,
    };
  },
  computed: {},
  watch: {},
  async mounted() {},
  beforeDestroy() {},
  methods: {},
});
</script>
