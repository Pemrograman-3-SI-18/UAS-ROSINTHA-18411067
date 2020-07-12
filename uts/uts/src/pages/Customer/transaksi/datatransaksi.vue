<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">

      <div></div>
      <q-img spinner-color="white" placeholder-src="statics/watch.png" src="statics/watch.png"></q-img>
      <q-space />
      <span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >TRANSAKSI</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            label="Username"
            lazy-rules
            color="teal"
            v-model="form.username"
            :rules="[
           val => val !== null && val !== '' || 'Username Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="assignment_late"/>
            </template>
          </q-input>

          <q-input
            label="Kode Jam Pertama"
            lazy-rules
            color="teal"
            v-model="form.kodejam1"
            :rules="[
           val => val !== null && val !== '' || 'Kode jam Pertama Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Jumlah Beli Jam Pertama"
            lazy-rules
            color="teal"
            v-model="form.jumlahbeli1"
            :rules="[
           val => val !== null && val !== '' || 'Jumlah Beli Sembako Pertama Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="format_list_numbered"/>
            </template>
          </q-input>
          <q-input
            label="Kode Sembako Kedua"
            lazy-rules
            color="teal"
            v-model="form.kodejam2"
            :rules="[
           val => val !== null && val !== '' || 'Ketik - jika tidak ada pembelian kedua'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Jumlah Beli Sembako Kedua"
            lazy-rules
            color="teal"
            v-model="form.jumlahbeli2"
            :rules="[
           val => val !== null && val !== '' || 'Ketik - jika tidak ada pembelian kedua'
           ]">
            <template v-slot:append>
              <q-icon name="format_list_numbered"/>
            </template>
          </q-input>
          <q-input
            label="Kode Sembako Ketiga"
            lazy-rules
            color="teal"
            v-model="form.kodejam3"
            :rules="[
           val => val !== null && val !== '' || 'Ketik - jika tidak ada pembelian ketiga'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Jumlah Beli Sembako Ketiga"
            lazy-rules
            color="teal"
            v-model="form.jumlahbeli3"
            :rules="[
           val => val !== null && val !== '' || 'Ketik - jika tidak ada pembelian ketiga'
           ]">
            <template v-slot:append>
              <q-icon name="format_list_numbered"/>
            </template>
          </q-input>
          <q-input
            label="Alamat Anda"
            lazy-rules
            color="teal"
            v-model="form.alamat"
            :rules="[
           val => val !== null && val !== '' || 'Masukan Alamat Anda'
           ]">
            <template v-slot:append>
              <q-icon name="map"/>
            </template>
          </q-input>

          <q-input
            label="NO. Telp. Penerima"
            lazy-rules
            color="teal"
            v-model="form.noTelppenerima"
            :rules="[
           val => val !== null && val !== '' || 'NO. Telp. Penerima Harus Terisi'
           ]">
            <template v-slot:append>
              <q-icon name="add_ic_call"/>
            </template>
          </q-input>
          <div>
            ANDA YAKIN INGIN LAKUKAN TRANSAKSI???
          </div>

          <div>
            <q-btn
              unelevated
              icon="add_shopping_cart"
              type="submit"
              label="Lakukan Transaksi"
              style="height: 50px"
              color="teal-6"/>
            <q-tooltip>barang langsung dikirim kurir ke alamat yang anda berikan</q-tooltip>

          </div>
          <div>
            <q-btn
              color="teal"
              label="BATAL"
              icon="cancel_presentation"
              unelevated
              style="height: 50px"
              v-close-popupto to="/sembakocan/daftarsembako">
              <q-tooltip>Anda membatalkan transaksi</q-tooltip>
            </q-btn>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Transaksi',
  data () {
    return {
      form: {
        username: null,
        kodejam1: null,
        jumlahbeli1: null,
        kodejam2: null,
        jumlahbeli2: null,
        kodejam3: null,
        jumlahbeli3: null,
        alamat: null,
        noTelppenerima: null
      },

      accept: false
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/transaksi/input', {

        username: this.form.username,
        kodejam1: this.form.kodejam1,
        jumlahbeli1: this.form.jumlahbeli1,
        kodejam2: this.form.kodejam2,
        jumlahbeli2: this.form.jumlahbeli2,
        kodejam3: this.form.kodejam3,
        jumlahbeli3: this.form.jumlahbeli3,
        alamat: this.form.alamat,
        noTelppenerima: this.form.noTelppenerima

      })
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/sembakocan/daftarsembako')
          }
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
