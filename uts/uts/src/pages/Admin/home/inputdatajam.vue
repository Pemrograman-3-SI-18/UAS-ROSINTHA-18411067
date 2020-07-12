<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-black">Tambah Data Jam</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Jam"
            lazy-rules
            color="teal"
            v-model="form.kodejam"
            :rules="[
           val => val !== null && val !== '' || 'Masukan Kode'
           ]">
            <template v-slot:append>
              <q-icon name="done"/>
            </template>
          </q-input>

          <q-input
            label="Merk Jam"
            lazy-rules
            color="teal"
            v-model="form.merkjam"
            :rules="[
           val => val !== null && val !== '' || 'Masukan Merk'
           ]">
            <template v-slot:append>
              <q-icon name="done"/>
            </template>
          </q-input>

          <q-input
            label="Harga jam"
            lazy-rules
            color="teal"
            v-model="form.hargajam"
            :rules="[
           val => val !== null && val !== '' || 'Masukan Harga'
           ]">
            <template v-slot:append>
              <q-icon name="done"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih Gambar"
            type="file"
            ref="file"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Masukan Gambar Jam'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              type="submit"
              label="SIMPAN DATA JAM"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        kodejam: null,
        merkjam: null,
        hargajam: null
      },
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('kodejam', this.form.kodejam)
      formData.append('merkjam', this.form.merkjam)
      formData.append('hargajam', this.form.hargajam)
      this.$axios.post('/jam/input', formData)
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
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
