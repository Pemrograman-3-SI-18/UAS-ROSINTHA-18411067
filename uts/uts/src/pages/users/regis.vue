<template>
  <q-layout class="bg-blue-grey-1" view="hHr Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-6 offset-md-3 col-xs-8 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white-5 text-blue" >
              <q-img spinner-color="white" placeholder-src="statics/login.png" src="statics/regis.png"/>
              <div class="row">
                <q-card-section class="text-accent-grey-14" >
                  <div class="text-black text-h5">Registrasi Pengguna Baru</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12q-pt-md">
                  <div class="q-pa-md">

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="form.username"
                        label="username"
                        hint="Username"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />
                      <q-input
                        filled
                        type="Password"
                        v-model="form.password"
                        label="Password"
                        hint="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />

                      <q-input
                        filled
                        v-model="form.email"
                        label="Email"
                        hint="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />
                      <q-input
                        filled
                        v-model="form.noTelp"
                        label="noTelp"
                        hint="noTelp"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />
                      <q-input
                        filled
                        v-model="form.alamat"
                        label="Alamat"
                        hint="Alamat Lengkap"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Tidak Boleh Kosong!']"
                      />

                      <div>
                        <q-btn label="Registrasi" type="submit" color="green"/>
                        <q-btn label="Login" to="/auth/admin" color="green" flat class="q-ml-sm" />
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'regis',
  data () {
    return {
      form: {
        username: null,
        password: null,
        email: null,
        noTelp: null,
        alamat: null
      },
      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/pengguna/regis', {
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
        noTelp: this.form.noTelp,
        role: '2',
        alamat: this.form.alamat
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
            this.$router.push('/customer')
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
