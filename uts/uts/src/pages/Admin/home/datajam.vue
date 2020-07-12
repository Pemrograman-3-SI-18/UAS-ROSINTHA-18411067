<template>
  <q-page>
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
          <q-btn color="teal" :disable="loading" label="Tambah Data Jam" to="/inputdatajam"/>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodejam" :props="props">
              {{ props.row.kodejam }}
            </q-td>
            <q-td key="merkjam" :props="props">{{ props.row.merkjam }}</q-td>
            <q-td key="hargajam" :props="props">{{ props.row.hargajam }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodejam)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusdatajam(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
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
      baseUrl: 'http://localhost:5050/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodejam',
          required: true,
          label: 'KODE JAM',
          align: 'center',
          field: row => row.kodejam,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'merkjam', align: 'center', label: 'MERK JAM', field: 'merkjam', sortable: true },
        { name: 'hargajam', label: 'HARGA JAM', field: 'hargajam', sortable: true },
        { name: 'gambar', label: 'GAMBAR', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'ACTION', field: 'action', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getdatajam () {
      this.$axios.get('/jam/datajam')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusdatajam (id) {
      this.$axios.delete('/jam/hapus/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil menghapus data'
          })
          this.getdatajam()
        })
    },
    edit (kodejam) {
      this.$router.push('/editdatajam/' + kodejam)
    }
  },
  mounted () {
    this.getdatajam()
  }
}
</script>
