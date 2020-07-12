<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-blue-grey-12 text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="absolute-center">
          <div class="text-white">
          </div>
        </q-toolbar-title>
        <q-footer>
          <div class="text-bold text h-5">
          </div>
        </q-footer>
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">User</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">{{datakaryawan.username}}</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img src="statics/support.png">
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <q-btn
                  color="teal"
                  label="Keluar"
                  unelevated
                  @click="keluar()"
                  size="sm"
                  v-close-popup>
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-blue-grey-12 text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-white-1 text-bold">
            <q-item-section>
              <marquee> APLIKASI PENJUALAN JAM TANGAN </marquee>
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="statics/support.png" alt="">
              </q-avatar>
              <div class="text-weight-bold">{{datakaryawan.username}}</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
           <center> HALAMAN </center>
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/halamancustomer">
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>
            <q-item-section>
              Halaman Utama
            </q-item-section>
          </q-item>

          <q-separator red />

          <q-item clickable active-class="active" exact v-ripple to="/penilaian">
            <q-item-section avatar>
              <q-icon name="stars" />
            </q-item-section>
            <q-item-section>
              Beri Penilaian
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'PembeliLayout',

  data () {
    return {
      left: false,
      datakaryawan: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    keluar () {
      this.$q.localStorage.clear()
      this.$router.push('auth/admin')
    }
  }
}
</script>
