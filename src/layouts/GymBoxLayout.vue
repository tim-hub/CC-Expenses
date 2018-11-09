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
import HeaderDrawer from './gym/_Drawer'
import GymFooter from './gym/_GymFooter'

export default {
  name: 'MyLayout',
  components: {
    'h-drawer': HeaderDrawer,
    'gym-footer': GymFooter
  }
}
</script>

<style>
</style>
