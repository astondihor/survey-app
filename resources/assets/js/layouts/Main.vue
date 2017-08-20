<template>
  <div>
    <v-app top-toolbar footer v-cloak>
      <app-navbar :drawer="drawerOpen" :items="navDrawerItems"/>
        <app-toolbar :title="title" :items="toolbarItems" v-on:toggleDrawer="toggleDrawer"></app-toolbar>
        <main>
        <v-container fluid>
          <transition>
          <slot></slot>
          </transition>
        </v-container>
        </main>
        <app-footer></app-footer>
    </v-app>
  </div>
</template>

<script>
import AppToolbar from '../partials/AppToolbar.vue'
import AppNavbar from '../partials/AppNavbar.vue'
import AppFooter from '../partials/AppFooter.vue'

export default {
  name: 'main-layout',
  data: function () {
    return {
      title: 'LaravelSurvey',
      mini: false,
      drawerOpen: false,
      navDrawerItems: [
        { icon: 'mdi-gauge', text: 'Dashboard', url: '/' },
        { icon: 'mdi-gauge', text: 'Contact', url: '/contact-us' },
        { icon: 'mdi-pencil', text: 'Survey Editor', url: '/survey-editor' }
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
    AppToolbar, AppNavbar, AppFooter
  }
}
</script>
