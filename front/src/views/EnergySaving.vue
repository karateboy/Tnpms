<template>
  <b-row class="match-height">
    <b-col lg="12" md="12">
      <ecommerce-company-table :table-data="companyTable" />
    </b-col>
  </b-row>
</template>
<style scoped></style>
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
        title: 'Dixons',
        subtitle: 'meguc@ruj.io',
        avatarIcon: 'MonitorIcon',
        avatarColor: 'light-primary',
        avatarTitle: 'Technology',
        viewTitle: '23.4k',
        viewsub: 'in 24 hours',
        revenue: '891.2',
        sales: '68',
        loss: true,
      },
      {
        avatarImg: require('@/assets/images/icons/parachute.svg'),
        title: 'Motels',
        subtitle: 'vecav@hodzi.co.uk',
        avatarIcon: 'CoffeeIcon',
        avatarColor: 'light-success',
        avatarTitle: 'Grocery',
        viewTitle: '78k',
        viewsub: 'in 2 days',
        revenue: '668.51',
        sales: '97',
        loss: false,
      },
      {
        avatarImg: require('@/assets/images/icons/brush.svg'),
        title: 'Zipcar',
        subtitle: 'davcilse@is.gov',
        avatarIcon: 'WatchIcon',
        avatarColor: 'light-warning',
        avatarTitle: 'Fashion',
        viewTitle: '162',
        viewsub: 'in 5 days',
        revenue: '522.29',
        sales: '62',
        loss: false,
      },
      {
        avatarImg: require('@/assets/images/icons/star.svg'),
        title: 'Owning',
        subtitle: 'us@cuhil.gov',
        avatarIcon: 'MonitorIcon',
        avatarColor: 'light-primary',
        avatarTitle: 'Technology',
        viewTitle: '214',
        viewsub: 'in 24 hours',
        revenue: '291.01',
        sales: '88',
        loss: false,
      },
      {
        avatarImg: require('@/assets/images/icons/book.svg'),
        title: 'Cafés',
        subtitle: 'pudais@jife.com',
        avatarIcon: 'CoffeeIcon',
        avatarColor: 'light-success',
        avatarTitle: 'Grocery',
        viewTitle: '208',
        viewsub: 'in 1 week',
        revenue: '783.93',
        sales: '16',
        loss: true,
      },
      {
        avatarImg: require('@/assets/images/icons/rocket.svg'),
        title: 'Kmart',
        subtitle: 'bipri@cawiw.com',
        avatarIcon: 'WatchIcon',
        avatarColor: 'light-warning',
        avatarTitle: 'Fashion',
        viewTitle: '990',
        viewsub: 'in 1 month',
        revenue: '780.05',
        sales: '78',
        loss: false,
      },
      {
        avatarImg: require('@/assets/images/icons/speaker.svg'),
        title: 'Payers',
        subtitle: 'luk@izug.io',
        avatarIcon: 'WatchIcon',
        avatarColor: 'light-warning',
        avatarTitle: 'Fashion',
        viewTitle: '12.9k',
        viewsub: 'in 12 hours',
        revenue: '531.49',
        sales: '42',
        loss: false,
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
