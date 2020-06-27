<template>
  <div>
  </div>
</template>

<script>
import validations from '@/components/utils/validations'
export default {
  name: 'Login',
  data () {
    return {
      ...validations,
      showPassword: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async loginUser (loginForm) {
      const user = await this.$store.dispatch('users/login', loginForm)
      if (user.error) {
        this.$store.dispatch('snackbar/setSnackbar', { color: 'error', text: user.error })
      } else {
        this.$store.dispatch('snackbar/setSnackbar', { text: 'Thank you for signing in, ' + user.name })
      }
    }
  }
}
</script>

<style>

</style>
