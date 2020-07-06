<template>
  <div>
     <ValidationObserver ref="observer"  v-slot="{ validate }">
      <b-form @submit.prevent="validate(submitForm(userInfo))">
       <ValidationProvider rules="required|min:3" name="Name" v-slot="{ valid, errors }">
        <b-form-group
          id="input-group-0"
          label="Your First Name:"
          label-for="input-0"
          description=""
        v-if="fullForm == 'true'">
          <b-form-input
            id="input-0"
            v-model="userInfo.name"
            type="text"
            required
            placeholder="Enter Name"
            :state="errors[0] ? false : (valid ? true : null)"
          ></b-form-input>
           <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required|min:3" name="LastName" v-slot="{ valid, errors }">
        <b-form-group
          id="input-group-1"
          label="Your Last Name:"
          label-for="input-1"
          description=""
        v-if="fullForm == 'true'">
          <b-form-input
            id="input-1"
            v-model="userInfo.name"
            type="text"
            required
            placeholder="Enter Last Name"
            :state="errors[0] ? false : (valid ? true : null)"
          ></b-form-input>
           <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
        </ValidationProvider>

        <ValidationProvider rules="required|min:6" name="Telephone" v-slot="{ valid, errors }">
        <b-form-group
          id="input-group-2"
          label="Your Phone Number:"
          label-for="input-2"
          description=""
        v-if="fullForm == 'true'">
          <b-form-input
            id="input-2"
            v-model="userInfo.tel"
            type="tel"
            required
            placeholder="Enter Phone Number"
            :state="errors[0] ? false : (valid ? true : null)"
          ></b-form-input>
           <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
        </ValidationProvider>
        <ValidationProvider rules="required|email|min:3" name="Email" v-slot="{ valid, errors }">
        <b-form-group
          id="input-group-3"
          label="Email address:"
          label-for="input-3"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-3"
            v-model="userInfo.email"
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
        <b-form-group id="input-group-4" label="Your Password:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="userInfo.password"
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
      userInfo: {
        email: '',
        password: ''
      }
    }
  },
  props: ['submitForm', 'buttontxt', 'fullForm']
}
</script>
