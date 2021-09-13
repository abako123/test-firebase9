import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCkF3kJEt2C6A2dBNbA9stojQ63__wXiYc',
  authDomain: 'test-fire-0001-e559f.firebaseapp.com',
  projectId: 'test-fire-0001-e559f',
  storageBucket: 'test-fire-0001-e559f.appspot.com',
  messagingSenderId: '158583378837',
  appId: '1:158583378837:web:6209bd69052aef17f85c9c'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth()

auth.languageCode = 'it'

connectAuthEmulator(auth, 'http://localhost:9099')
