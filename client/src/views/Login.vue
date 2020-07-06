<template>
 <b-container>
   <FormSignup :submitForm="loginUser" buttontxt="Login" fullForm="false" ></FormSignup>
 </b-container>
</template>

<script>
import FormSignup from '@/components/FormSignup.vue'
export default {
  name: 'Login',
  components: { FormSignup },
  methods: {
    async loginUser (loginForm) {
      const user = await this.$store.dispatch('login', loginForm)
      if (user.error) {
        alert(user.error)
        /*  this.$store.dispatch('snackbar/setSnackbar', { color: 'error', text: user.error }) */
      } else {
        /* this.$store.dispatch('snackbar/setSnackbar', { text: 'Thank you for signing in, ' + user.name }) */
        alert('Thank you for sign in ' + user.nom)
      }
    }
  }
}
</script>

<style>

</style>
