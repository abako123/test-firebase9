<template>
  <v-btn
    v-if="!user"
    icon
    @click="signIn"
  >
    <v-icon>mdi-account</v-icon>
  </v-btn>

  <v-btn
    v-else
    @click="out"
  >
    <v-icon>mdi-lock-minus</v-icon> {{ user.displayName }}
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth'
import { auth } from '@/plugins/firebase'

const provider = new GoogleAuthProvider()
  @Component
export default class AuthBtn extends Vue {
  user: User | null = null
  signIn () {
    signInWithPopup(auth, provider)
  }

  out () {
    signOut(auth)
  }

  mounted () {
    this.init()
  }

  init () {
    onAuthStateChanged(auth, user => {
      console.log(user)
      this.user = user
    })
  }
}
</script>

<style scoped>

</style>
