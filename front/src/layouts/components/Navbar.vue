<template>
  <div class="navbar-container d-flex content align-items-center">
    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link class="nav-link" @click="toggleVerticalMenuActive">
          <feather-icon icon="MenuIcon" size="21" />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div
      class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"
    >
      <dark-Toggler class="d-none d-lg-block" />
      <h2 class="m-0">
        <strong>沙崙智慧綠能科學成電能管理系統資訊平台</strong>
      </h2>
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <b-navbar-brand href="#" right>
        <img src="../../assets/images/logo/logo.svg" width="100" />
      </b-navbar-brand>
    </b-navbar-nav>
  </div>
</template>

<script>
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue';
import axios from 'axios';
import { mapState } from 'vuex';
import jscookie from 'js-cookie';

export default {
  components: {
    // Navbar Components
    DarkToggler,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    ...mapState('user', ['userInfo']),
    role() {
      if (this.userInfo.isAdmin) return '系統管理員';

      return '使用者';
    },
  },
  methods: {
    logout() {
      axios.get('/logout').then(() => {
        jscookie.remove('authentication');
        this.$router.push('/login');
      });
    },
  },
};
</script>
