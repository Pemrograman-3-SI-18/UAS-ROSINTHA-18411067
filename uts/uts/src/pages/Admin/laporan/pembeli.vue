<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-img spinner-color="white" placeholder-src="statics/sembakocanlogin.png" src="statics/sembakocanlogin.png"></q-img>
          <q-space />
          <span class="text-h2 text-weight-light q-pa-md">
        <span class="text-blue-grey-6" >DAFTAR TRANSAKSI SEMBAKOCAN</span>
      </span>
          <!---<q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />--->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="username" :props="props">
              {{ props.row.username }}
            </q-td>
            <q-td key="kodesembako1" :props="props">{{ props.row.kodesembako1 }}</q-td>
            <q-td key="jumlahbeli1" :props="props">{{ props.row.jumlahbeli1 }}</q-td>
            <q-td key="kodesembako2" :props="props">{{ props.row.kodesembako2 }}</q-td>
            <q-td key="jumlahbeli2" :props="props">{{ props.row.jumlahbeli2 }}</q-td>
            <q-td key="kodesembako3" :props="props">{{ props.row.kodesembako3 }}</q-td>
            <q-td key="jumlahbeli1" :props="props">{{ props.row.jumlahbeli3 }}</q-td>
            <q-td key="alamat" :props="props">{{ props.row.alamat }}</q-td>
            <q-td key="noTelppenerima" :props="props">{{ props.row.noTelppenerima }}</q-td>

          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'username',
          required: true,
          label: 'Username',
          align: 'left',
          field: row => row.username,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'kodesembako1', align: 'center', label: 'Sembako Pertama', field: 'kodesembako1', sortable: true },
        { name: 'jumlahbeli1', align: 'center', label: 'Jumlah Beli Sembako Pertama', field: 'jumlahbeli1', sortable: true },
        { name: 'kodesembako2', align: 'center', label: 'Sembako Kedua', field: 'kodesembako2', sortable: true },
        { name: 'jumlahbeli2', align: 'center', label: 'Jumlah Beli Sembako Kedua', field: 'jumlahbeli2', sortable: true },
        { name: 'kodesembako3', align: 'center', label: 'Sembako Ketiga', field: 'kodesembako3', sortable: true },
        { name: 'jumlahbeli3', align: 'center', label: 'Jumlah Beli Sembako Ketiga', field: 'jumlahbeli3', sortable: true },
        { name: 'alamat', align: 'center', label: 'Alamat', field: 'alamat' },
        { name: 'noTelppenerima', align: 'center', label: 'NO. Telp. Penerima', field: 'noTelppenerima' }
      ],
      data: []
    }
  },
  methods: {
    // emulate fetching data from server
    getDataTransaksi () {
      this.$axios.get('/transaksi/datatransaksi/')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },

  mounted () {
    this.getDataTransaksi()
  }
}
</script>

<style scoped>

</style>
