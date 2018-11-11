<template>
  <q-page class="flex flex-center">

  <!-- <commit-chart></commit-chart> -->
    <q-btn size="12em">
      H
    </q-btn>
  </q-page>

</template>

<style>
</style>

<script>
import CommitChart from '../charts/CommitChart'
export default {
  name: 'PageIndex',
  components: {
    CommitChart
  },
  methods: {
    nav_create () {
      this.$router.push({
        path: 'create'
      })
    }
  }
}
</script>
