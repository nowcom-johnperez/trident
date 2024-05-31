<template>
  <div>
    <h1>Wiki</h1>

    <div class="mt-10">
      <SortableTable
        :headers="main.headers" 
        :rows="main.rows" 
        :paging="true" 
        :rowActionsWidth="10" 
        :rows-per-page="main.rowsPerPage" 
        keyField="name" 
        :loading="main.loading"
      >
        <template #cell:title="{row}">
          <a href="#" @click.prevent="openSidebar(row)">{{ row.title }}</a>
        </template>
        <template #cell:url="{row}">
          <VTooltip :distance="15" :arrow-padding="20" :skidding="-20">
            <IconLink :value="row.url" />
  
            <template #popper>
              {{ row.url }}
            </template>
          </VTooltip>
        </template>
      </SortableTable>

      <SideBar type="main" :sidebar-visible="main.sidebar.show" @close="closeSidebar">
        <Overview v-if="selectedRow" :detail="selectedRow" />
      </SideBar>
    </div>
  </div>
</template>

<script>
import SortableTable from '@shell/components/ResourceTable.vue'
import SideBar from '../components/common/SideBar.vue'
import Overview from '../components/trident/Overview.vue'
import { WIKI_TABLE_HEADERS } from '../config/tables'
import IconLink from '../components/common/IconLink.vue';
export default {
  name: 'Wiki',
  components: {
    SortableTable,
    SideBar,
    Overview,
    IconLink
  },
  data() {
    return {
      loading: false,
      main: {
        headers: [],
        rows: [],
        rowPerPage: 5,
        loading: false,
        sidebar: {
          show: false
        }
      },
      selectedRow: null,
    }
  },
  methods: {
    openSidebar (row) {
      this.selectedRow = row;
      this.main.sidebar.show = true;
    },
    closeSidebar () {
      this.main.sidebar.show = false;
    }
  },
  created() {
    this.main.headers = WIKI_TABLE_HEADERS

    this.main.rows = [
      {
        title: 'Development',
        url: "https://nowcom.atlassian.net/wiki/spaces/DEV/overview"
      },
      {
        title: 'DC Trident',
        url: "https://nowcom.atlassian.net/wiki/spaces/DEV/pages/2963865806/DC+Trident"
      },
    ]
  }
}
</script>