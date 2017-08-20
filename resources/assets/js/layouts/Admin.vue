<template>
  <v-app top-toolbar footer v-cloak>
    <admin-navbar :drawer="drawerOpen" :items="navDrawerItems"></admin-navbar>
    <admin-toolbar :title="title" :items="toolbarItems" v-on:toggleDrawer="toggleDrawer"></admin-toolbar>
    <main>
      <v-container fluid>
        <transition>
          <slot></slot>
        </transition>
      </v-container>
    </main>
    <admin-footer></admin-footer>
  </v-app>
</template>

<script>
import AdminToolbar from '../partials/AdminToolbar.vue'
import AdminNavbar from '../partials/AdminNavbar.vue'
import AdminFooter from '../partials/AdminFooter.vue'

export default {
  name: 'Admin',

  data () {
    return {
      title: 'LSurvey Admin',
      mini: false,
      drawerOpen: false,
      navDrawerItems: [
        { icon: 'mdi-gauge', text: 'Dashboard', url: '/admin' },
        { icon: 'mdi-gauge', text: 'Surveys', url: '/surveys' },
        { icon: 'mdi-pencil', text: 'Organizations', url: '/organizations' }
      ],
      toolbarItems: [
        { text: 'Dashboard', url: '/' }
      ]
    }
  },
  methods: {
    toggleDrawer () {
      this.drawerOpen = !this.drawerOpen
    }
  },
  components: {
    AdminToolbar, AdminNavbar, AdminFooter
  }
};
</script>

<style lang="scss" scoped>
</style>