<template>
  <q-page class="flex flex-center">
    <!-- combine plank and pushups -->
    <div class="col-md-12">
            <q-btn class="vertical-top" color="secondary" size="xl" to="/start/pushup">
        Push-ups
      </q-btn>
    </div>
    <p> </p>
    <div class="col-md-12">
      <q-btn color="primary" size="xl" to="/start/plank">
        Plank
      </q-btn>
    </div>
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
