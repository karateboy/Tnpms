<template>
  <b-card v-if="tableData" no-body class="card-company-table">
    <b-table :items="tableData" responsive :fields="fields" class="mb-0">
      <!-- company -->
      <template #cell(company)="data">
        <div class="d-flex align-items-center">
          <b-avatar rounded size="32" variant="light-company">
            <b-img :src="data.item.avatarImg" alt="avatar img"
          /></b-avatar>

          <div class="font-weight-bolder">
            {{ data.item.title }}
          </div>
        </div>
      </template>

      <!-- category -->
      <template #cell(category)="data">
        <div class="d-flex align-items-center">
          <b-avatar class="mr-1" :variant="data.item.avatarColor">
            <feather-icon size="18" :icon="data.item.avatarIcon" />
          </b-avatar>
          <span>{{ data.item.avatarTitle }}</span>
        </div>
      </template>

      <!-- views -->
      <template #cell(views)="data">
        <div class="d-flex flex-column">
          <span class="font-weight-bolder mb-25">{{
            data.item.viewTitle
          }}</span>
        </div>
      </template>

      <!-- revenue -->
      <template #cell(revenue)="data">
        {{ '$' + data.item.revenue }}
      </template>

      <!-- sales -->
      <template #cell(sales)="data">
        <div class="d-flex align-items-center">
          <span class="font-weight-bolder mr-1">{{
            data.item.sales + '%'
          }}</span>
          <feather-icon
            :icon="data.item.loss ? 'TrendingDownIcon' : 'TrendingUpIcon'"
            :class="data.item.loss ? 'text-danger' : 'text-success'"
          />
        </div>
      </template>
    </b-table>
  </b-card>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      fields: [
        { key: 'no', label: '編號' },
        { key: 'company', label: '場館區域' },
        { key: 'views', label: '上月節電率' },
        { key: 'sales', label: '成長' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';
@import '~@core/scss/base/components/variables-dark';

.card-company-table ::v-deep td .b-avatar.badge-light-company {
  .dark-layout & {
    background: $theme-dark-body-bg !important;
  }
}
</style>
