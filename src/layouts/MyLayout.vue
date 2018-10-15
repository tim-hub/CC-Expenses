<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          OS Exp
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header></q-list-header>
        <q-item to="/">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>

        <q-list-header></q-list-header>

                <q-item to="/create">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <q-tabs
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
      <router-view />
    </q-page-container>

    <q-layout-footer>
      <!-- content; any -->
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
