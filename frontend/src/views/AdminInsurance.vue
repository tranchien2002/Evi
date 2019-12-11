<template>
  <div id="main-wrapper">
    <div :class="preloadPage ? 'preloader' : ''">
      <svg class="circular" viewBox="25 25 50 50">
        <circle
          class="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
    <header class="topbar">
      <nav class="navbar top-navbar navbar-toggleable-sm navbar-light">
        <div class="navbar-header">
          <div class="col">
            <div class="row">
              <div class="col-1">
                <a
                  class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                  href="javascript:void(0)"
                  @click="toggleTabbar"
                >
                  <i class="fas fa-bars"></i>
                </a>
              </div>
              <div class="col-11">
                <router-link class="navbar-brand" to="/">
                  <b>
                    <img src="@/assets/images/logo.png" alt="homepage" class="light-logo" />
                  </b>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <aside :class="tabbar ? 'left-sidebar toggleTabbar' : 'left-sidebar'">
      <div class="scroll-sidebar">
        <nav class="sidebar-nav">
          <ul id="sidebarnav">
            <li>
              <router-link class="waves-effect waves-dark" to="/" aria-expanded="false">
                <i class="fas fa-tachometer-alt"></i>
                <span class="hide-menu">Home</span>
              </router-link>
            </li>
            <li>
              <router-link class="waves-effect waves-dark" to="/admin" aria-expanded="false">
                <i class="fas fa-table"></i>
                <span class="hide-menu">Manager Insurance</span>
              </router-link>
            </li>
          </ul>
          <div class="text-center m-t-30"></div>
        </nav>
      </div>
    </aside>

    <div class="page-wrapper">
      <div class="container-fluid">
        <div class="row page-titles">
          <div class="col-md-5 col-8 align-self-center">
            <h3 class="text-themecolor m-b-0 m-t-0">Insurances</h3>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Admin</li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Manager Insurance</h4>

                <b-row>
                  <b-col lg="4" class="my-1">
                    <b-form-group class="mb-4">
                      <b-input-group size="sm">
                        <b-form-input
                          v-model="filter"
                          type="search"
                          id="filterInput"
                          placeholder="Search"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </b-form-group>
                  </b-col>
                </b-row>
                <div class="table-responsive">
                  <!-- Main table element -->
                  <b-table
                    responsive
                    :items="items"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    @filtered="onFiltered"
                  >
                    <template v-slot:cell(name)="row">{{ row.value.first }} {{ row.value.last }}</template>

                    <template v-slot:row-details="row">
                      <b-card>
                        <ul>
                          <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                        </ul>
                      </b-card>
                    </template>
                  </b-table>
                </div>
                <b-row style>
                  <b-col sm="8" />
                  <b-col smd="1" class="my-1">
                    <b-form-group
                      label-cols-sm="6"
                      label-cols-md="4"
                      label-cols-lg="3"
                      label-align-sm="right"
                      label-size="sm"
                      label-for="perPageSelect"
                      class="mb-0"
                    >
                      <b-form-select
                        v-model="perPage"
                        id="perPageSelect"
                        size="sm"
                        :options="pageOptions"
                      ></b-form-select>
                    </b-form-group>
                  </b-col>
                  <b-col sm="3" class="my-1">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="fill"
                      size="sm"
                      class="my-0"
                    ></b-pagination>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">© 2019 Sun-Asterisk</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin-insurance",
  data() {
    return {
      preloadPage: true,
      tabbar: false,
      items: [
        {
          isActive: true,
          age: 40,
          name: { first: "Dickerson", last: "Macdonald" }
        },
        { isActive: false, age: 21, name: { first: "Larsen", last: "Shaw" } },
        { isActive: false, age: 89, name: { first: "Geneva", last: "Wilson" } },
        { isActive: true, age: 38, name: { first: "Jami", last: "Carney" } },
        { isActive: false, age: 27, name: { first: "Essie", last: "Dunlap" } },
        { isActive: true, age: 40, name: { first: "Thor", last: "Macdonald" } },
        { isActive: false, age: 26, name: { first: "Mitzi", last: "Navarro" } },
        {
          isActive: false,
          age: 22,
          name: { first: "Genevieve", last: "Wilson" }
        },
        { isActive: true, age: 38, name: { first: "John", last: "Carney" } },
        { isActive: false, age: 29, name: { first: "Dick", last: "Dunlap" } }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, 20],
      sortBy: "",
      sortDesc: false,
      filter: null
    };
  },
  computed: {},
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    toggleTabbar() {
      this.tabbar = !this.tabbar;
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  created() {
    setTimeout(() => {
      this.preloadPage = false;
    }, 500);
  }
};
</script>

<style scoped>
.navbar-header {
  padding: 10px 0;
}
a.nav-link {
  color: #ffffff !important;
  font-size: 20px;
  cursor: pointer;
}
</style>
