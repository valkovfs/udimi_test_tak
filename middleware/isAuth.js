import { ref } from 'vue'
export default function({ app, redirect, route }) {
  const token = app.$cookies.get('token')

  const isAuthenticated = !!token
  if (!isAuthenticated) {
    redirect({ name: 'login' })
  } else if ( route.name === 'login' && token ) {
    redirect({ name: '/'})
  }
}
