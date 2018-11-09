<template>
  <q-layout view="lHh Lpr lFf">
    <h-drawer></h-drawer>
    <q-page-container>

      <router-view />
    </q-page-container>
    <h-footer></h-footer>
  </q-layout>
</template>

<script>
import HeaderDrawer from './_HeaderDrawer'
import ExpenseFooter from './_ExpenseFooter'
export default {
  name: 'MyLayout',
  components: {
    'h-drawer': HeaderDrawer,
    'h-footer': ExpenseFooter
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
