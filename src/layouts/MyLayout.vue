<template>
  <q-layout view="lHh Lpr lFf">
    <h-drawer></h-drawer>
    <q-page-container>

      <router-view />
    </q-page-container>

    <q-layout-footer>
      <!-- content; any -->
      <q-tabs position="bottom"
      >
        <q-route-tab
          icon="attach_money"
          to="/"
          exact
          slot="title"
          label="Transact"
        />
        <q-route-tab
          width="100px"
          icon="account_balance_wallet"
          to="/create"
          exact
          slot="title"
          label="  Balance "
        />

        <q-route-tab
          icon="bar_chart"
          to="/create"
          exact
          slot="title"
          label="   Goal👍"
        />
      </q-tabs>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import HeaderDrawer from './_HeaderDrawer'
export default {
  name: 'MyLayout',
  components: {
    'h-drawer': HeaderDrawer
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
