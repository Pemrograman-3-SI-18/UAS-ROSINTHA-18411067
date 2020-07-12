<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md" v-for="(jam, i) in data" :key="i">
          <q-card flat class="bg-blue-grey-12  text-blue-grey-14">
            <q-card-section>
              <div class="text-h6">
                {{ jam.merkjam }}
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 100%; max-width: 100%" :src="baseUrl + jam.gambar"/>
            </q-card-section>
            <q-card-section>
              <div>
               Harga: RP. {{jam.hargajam}}
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn unelevated color="teal" icon="add_shopping_cart" no-caps label="Tambah Ke keranjang" >
              </q-btn>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'halamancustomer',
  data () {
    return {
      data: null,
      baseUrl: 'http://localhost:5050/gambar/'
    }
  },
  methods: {
    getdatajam () {
      this.$axios.get('/jam/datajam')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },
  mounted () {
    this.getdatajam()
  }
}
</script>

<style scoped>

</style>
