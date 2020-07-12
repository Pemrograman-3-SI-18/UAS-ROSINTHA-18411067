<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="TRANSAKSI"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top-right>
          <q-item-label
            header
            class="text-black"
          >
          </q-item-label>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
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
          name: 'desc',
          required: true,
          label: 'TANGGAL PEMESANAN',
          align: 'left',
          field: row => row.tanggalpemesanan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namapembeli', align: 'left', label: 'NAMA PEMBELI', field: 'namapembeli', sortable: true },
        { name: 'merkjam', align: 'left', label: 'MERK JAM', field: 'merkjam', sortable: true },
        { name: 'hargajam', align: 'left', label: 'HARGA JAM', field: 'hargajam' },
        { name: 'jumlahbeli', align: 'center', label: 'JUMLAH BELI', field: 'jumlahbeli' },
        { name: 'total', align: 'center', label: 'TOTAL', field: 'total' }
      ],
      data: [
        {
          tanggalpemesanan: '12-April-2020',
          namapembeli: 'Rosintha',
          merkjam: 'Cassion Baby',
          hargajam: 'Rp 300.000',
          jumlahbeli: '1',
          total: 'Rp 300.000'
        },
        {
          tanggalpemesanan: '20-Mei-2019',
          namapembeli: 'Rosintha',
          merkjam: 'Alexander',
          hargajam: 'Rp 240.000',
          jumlahbeli: '1',
          total: 'Rp 240.000'
        },
        {
          tanggalpemesanan: '14-Agustus-2018',
          namapembeli: 'Rosintha',
          merkjam: 'Seiko',
          hargajam: 'Rp 350.000',
          jumlahbeli: '1',
          total: 'Rp 350.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
