<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Rester connecter</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      LoginForm: {
        email: '',
        name: '',
        checked: []
      },
      show: true
    }
  },
  methods: {
    async loginUser (loginInfo) {
      const user = await this.$store.dispatch('users/login', loginInfo)
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
