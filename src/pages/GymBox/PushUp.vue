<template>
  <q-page class="flex flex-center">

  <!-- <commit-chart></commit-chart> -->
    <q-btn round size="12em"
      v-on:click="pushup.counter += 1"
    >
      {{pushup.counter}}
    </q-btn>
    <q-btn color="primary"
      :click="save()"
    >
      Save
    </q-btn>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'Pushup',
  data () {
    return {
      pushup: {
        counter: 0,
        time: null
      }
    }
  },
  components: {
  },
  methods: {
    save () {
      this.$lengthOfStorage().then(
        r => {
          let l = r
          this.pushup.time = new Date()
          this.$setItem(l, this.pushup)
        }
      )
    }
  },
  mounted () {
    this.pushup.counter = 0
    this.pushup.time = null
  }
}
</script>
