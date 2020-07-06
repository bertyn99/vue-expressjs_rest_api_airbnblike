<template>
 <b-container>
   <FormSignup :submitForm="registerUser" buttontxt="Register" fullForm="true" ></FormSignup>
 </b-container>
</template>

<script>
import FormSignup from '@/components/FormSignup.vue'
export default {
  name: 'Register',
  components: { FormSignup },
  methods: {
    async registerUser (loginForm) {
      const user = await this.$store.dispatch('login', loginForm)
      if (user.error) {
        alert(user.error)
        /*  this.$store.dispatch('snackbar/setSnackbar', { color: 'error', text: user.error }) */
      } else {
        /* this.$store.dispatch('snackbar/setSnackbar', { text: 'Thank you for signing in, ' + user.name }) */
        alert('Thank you for sign in ' + user.name)
      }
    }
  }
}
</script>

<style>

</style>
