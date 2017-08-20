<template>
  <v-toolbar
    fixed
    class="ac-toolbar">
    <div class="top-bar"></div>
    <v-toolbar-side-icon light @click.stop="toggleDrawer()"></v-toolbar-side-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-toolbar-items>
      <v-btn flat to="/pricing" router>Pricing</v-btn>
      <v-btn flat to="/feature" router>Feature</v-btn>
      <v-btn flat to="/blog" router>Blog</v-btn>
    </v-toolbar-items>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>


<script>
export default {
  name: 'app-toolbar',
  props: ['title'],
  methods: {
    toggleDrawer () {
      this.$emit('toggleDrawer')
    }
  }
}
</script>
