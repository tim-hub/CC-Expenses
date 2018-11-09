<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"

        :inverted="$q.theme === 'ios'"
      >
              <!-- :glossy="$q.theme === 'mat'" -->
        <q-btn
          flat
          dense
          round
          @click="goBack()"
          aria-label="Menu"
        >
          <q-icon name="chevron_left" />
        </q-btn>

        <q-toolbar-title>
          Back
          <div slot="subtitle">
            <!-- Running on Quasar v{{ $q.version }} -->
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'BackLayout',
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {

  }
}
</script>

<style>
</style>
