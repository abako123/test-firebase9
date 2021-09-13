<template>
  <v-app>
    <v-app-bar app>
      test
      <v-spacer />
      <auth-btn />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        sss
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthBtn from '@/components/AuthBtn.vue'

  @Component({ components: { AuthBtn } })
export default class extends Vue {

}
</script>

<style scoped>

</style>
