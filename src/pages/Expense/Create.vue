<template>
  <q-page padding>
    <!-- content -->
    <q-select
      v-model="select"
      float-label="Account"
      radio
     :options="accounts"
    />
  </q-page>
</template>

<script>
export default {
  name: 'NewTransaction',
  data () {
    return {
      accounts: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ]
    }
  }
}
</script>

<style>
</style>
