<template>
  <q-layout view="lHh Lpr lFf">
    <h-drawer></h-drawer>
    <q-page-container>

      <router-view />
    </q-page-container>

    <gym-footer></gym-footer>
  </q-layout>
</template>

<script>

import Drawer from './_HeaderDrawer'
import GymFooter from './_GymFooter'

export default {
  name: 'MyLayout',
  components: {
    'h-drawer': Drawer,
    'gym-footer': GymFooter
  }
}
</script>

<style>
</style>
