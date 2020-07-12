<template>
  <div>
    <q-space />
    <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-black">Seberapa puaskah anda?</span>
      </span>
    <q-space/>
    <q-rating
      v-model="model"
      max="5"
      size="2cm"
      corol="green"
      icon="star_border"
      icon-selected="star"
      icon-half="star_half"
      no-dimming
    />
    <q-space/>
    <q-btn color="teal" label="Berikan Penilaian"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: 0
    }
  }
}
</script>

<style scoped>

</style>
