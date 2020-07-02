<template>
  <div>
     <ValidationObserver ref="observer"  v-slot="{ passes }">
      <b-form @submit.prevent="passes(submitForm(loginForm))">
        <ValidationProvider rules="required|email|min:3" name="Email" v-slot="{ valid, errors }">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-1"
            v-model="loginForm.email"
            type="email"
            required
            placeholder="Enter email"
            :state="errors[0] ? false : (valid ? true : null)"
          ></b-form-input>
           <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          rules="required|min:3"
          name="Password"
          vid="password"
          v-slot="{ valid, errors }"
        >
        <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="loginForm.password"
            required
            placeholder="Enter your password"
            :type="showPassword ? 'text' : 'password'"
            :state="errors[0] ? false : (valid ? true : null)"
        counter=true></b-form-input>
        <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
        <b-form-valid-feedback >
          Looks Good
        </b-form-valid-feedback>
        </b-form-group>
        </ValidationProvider>
        <b-button type="submit" variant="primary"  > {{ buttontxt }}</b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>

<script>

import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full'
export default {
  name: 'FormSignup',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data () {
    return {
      showPassword: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  props: ['submitForm', 'buttontxt']
}
</script>
