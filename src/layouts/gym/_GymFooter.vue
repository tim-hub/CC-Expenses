<template>
  <q-layout-footer>
      <!-- content; any -->
      <q-tabs position="bottom"
      >
        <q-route-tab

          to="/"
          exact
          slot="title"
          label="Start"
        />

        <q-route-tab
          icon="bar_chart"
          to="/stats"
          exact
          slot="title"
          label="   Stats"
        />
      </q-tabs>
    </q-layout-footer>
</template>
<script>
export default {
  name: 'GymFooter'
}
</script>
