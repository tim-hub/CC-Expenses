<template>
  <q-page class="flex flex-center">
  <q-btn
    round
    color="primary"
    @click="nav_create"
    class="fixed"
    style="right: 18px; bottom: 18px"
  >
    +
  </q-btn>

  </q-page>

</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    nav_create () {
      this.$router.push({
        path: 'create'
      })
    }
  }

}
</script>
