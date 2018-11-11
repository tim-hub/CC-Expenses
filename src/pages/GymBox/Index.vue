<template>
<q-list highlight>
  <q-list-header>Applications</q-list-header>
  <q-item>
    <!-- <q-item-side>
      <q-item-tile avatar>
        <img src="statics/boy-avatar.png">
      </q-item-tile>
    </q-item-side> -->
    <q-item-main >
        <q-btn class="vertical-top" color="secondary" size="xl" to="/start/pushup">
        Push-ups
      </q-btn>
    </q-item-main>
    <q-item-side right>
      <q-item-tile icon="chat_bubble" color="green" />
    </q-item-side>
  </q-item>
    <!-- combine plank and pushups -->
    <div class="col-md-12">

    </div>
    <p> </p>
    <div class="col-md-12">

    </div>

  <q-item>
    <!-- <q-item-side avatar="statics/linux-avatar.png" /> -->
    <q-item-main >
      <q-btn color="primary" size="xl" to="/start/plank">
        Plank
      </q-btn>
    </q-item-main>
    <!-- <q-item-side right icon="chat_bubble" /> -->
  </q-item>
</q-list>

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
