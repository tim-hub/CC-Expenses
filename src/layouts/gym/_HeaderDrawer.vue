<template>
  <div>
    <q-layout-header>
      <q-toolbar
        color="primary"
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
          CC Gym Box
          <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
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
        <q-list-header>CC Gym Box</q-list-header>
        <q-item to="/#/">
          <q-item-side icon="home" />
          <q-item-main label="Prayers" sublabel="all prayers" />
        </q-item>

        <q-item to="/center">
          <q-item-side icon="account_circle" />
          <q-item-main label="Center" sublabel="my own dashboard and all prayer history" />
        </q-item>

        <q-item to="/credits">
          <q-item-side icon="face" />
          <q-item-main label="Credits" sublabel="Many thanks" />
        </q-item>

      </q-list>
      <q-list
        link
        inset-delimiter
      >
        <q-list-header>More from CC Private Box</q-list-header>
        <q-item to="/credits">
          <q-item-side icon="face" />
          <q-item-main label="Credits" sublabel="Many thanks" />
        </q-item>

      </q-list>

    </q-layout-drawer>
  </div>
</template>
<script>
import { openURL } from 'quasar'
export default {
  name: 'HeaderDrawer',
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
