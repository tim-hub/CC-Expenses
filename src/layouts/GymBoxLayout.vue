<template>
  <q-layout view="lHh Lpr lFf">
    <h-drawer></h-drawer>
    <q-page-container>

      <router-view />
    </q-page-container>

    <q-layout-footer>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import HeaderDrawer from './_HeaderDrawer'

export default {
  name: 'MyLayout',
  components: {
    'h-drawer': HeaderDrawer
  }
}
</script>

<style>
</style>
