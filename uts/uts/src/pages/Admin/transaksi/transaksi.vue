<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title=" RIWAYAT TRANSAKSI"
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
          <q-input borderless dense debounce="300" color="primary" v-model="filter" placeholder="Cari Kode Transaksi">
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
          label: 'KODE TRANSAKSI',
          align: 'center',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'tanggalpemesanan', align: 'center', label: 'TANGGAL PEMESANAN', field: 'tanggalpemesanan', sortable: true },
        { name: 'namapembeli', align: 'center', label: 'NAMA PEMBELI', field: 'namapembeli', sortable: true },
        { name: 'merkjam', align: 'center', label: 'MERK JAM', field: 'merkjam', sortable: true },
        { name: 'hargajam', label: 'HARGA JAM', field: 'hargajam' },
        { name: 'jumlahbeli', align: 'center', label: 'JUMLAH BELI', field: 'jumlahbeli' },
        { name: 'total', label: 'TOTAL', field: 'total' }
      ],
      data: [
        {
          tanggalpemesanan: '12-April-2020',
          kodetransaksi: 'Ts-001',
          namapembeli: 'John',
          merkjam: 'Swwis Army',
          hargajam: 'Rp 300.000',
          jumlahbeli: '1',
          total: 'Rp 300.000'
        },
        {
          tanggalpemesanan: '12-Agustus-2019',
          kodetransaksi: 'Ts-002',
          namapembeli: 'Rosintha',
          merkjam: 'Tissot',
          hargajam: 'Rp 240.000',
          jumlahbeli: '1',
          total: 'Rp 240.000'
        },
        {
          tanggalpemesanan: '14-Mei-2018',
          kodetransaksi: 'Ts-003',
          namapembeli: 'Julianto',
          merkjam: 'Alexander',
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
