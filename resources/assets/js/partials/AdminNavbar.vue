<template>
  <v-navigation-drawer
    persistent
    light
    :mini-variant.sync="mini"
    class="pb-0"
    absolute
    hight="100%"
    disable-route-watcher
    v-model="drawer">
    <v-list>
      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>
          <img src="img/myimg.jpg" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Tamás Barta</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click.native.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-list
      class="pa-0"
      dense>
      <v-divider></v-divider>
      <template v-for="(item, i) in items">
        <v-layout
          row
          v-if="item.heading"
          align-center
          :key="i">
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs66 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group v-else-if="item.children" v-model="item.model" no-action>
          <v-list-tile slot="item">
            <v-list-tile-action>
              <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i">
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
          v-else
          :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
  export default {
    name: 'app-navbar',
    props: ['drawer', 'items'],
    data: () => ({
      mini: false
    })
  }
</script>
