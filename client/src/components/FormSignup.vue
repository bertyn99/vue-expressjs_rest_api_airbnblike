<template>
  <div>
    <b-form >
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
          :state="[required('email'), emailFormat()]"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="loginForm.password"
          required
          placeholder="Enter your password"
       :type="showPassword ? 'text' : 'password'"
       :state="minLength('password',6)"
       counter=true></b-form-input>
       <b-form-invalid-feedback :state="minLength('password',6)">
        {{ minLength('password',6) }}
      </b-form-invalid-feedback>
      <b-form-valid-feedback :state="validation">
        Looks Good.
      </b-form-valid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary" >Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import validations from '@/components/utils/validations'
import { ValidationObserver, ValidationProvider } from 'vee-validate';
export default {
  name: 'FormSignup',
  data () {
    return {
      ...validations,
      showPassword: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  }
}
</script>
