<template>
  <v-app id="test">
    <v-app>
      <span id="registerLabel">Register</span>
      <v-row justify="center">

        <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
        >
          <v-card ref="form">
            <v-card-text>
              <v-text-field
                  ref="name"
                  v-model="name"
                  :rules="[() => name>0 || 'This field is required']"
                  :error-messages="errorMessages"
                  label="Full Name"
                  placeholder="Enter name"
                  required
              ></v-text-field>
              <v-text-field
                  id="email"
                  type="email"
                  name="email"
                  ref="Email"
                  v-model="email"
                  :rules="[
              () => !!email || 'This field is required',
              () => !!email && email.length <= 25 || 'Email must be less than 25 characters',
              addressCheck
            ]"
                  label="Email Line"
                  placeholder="Enter email"
                  counter="25"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Normal with hint text"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
              ></v-text-field>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
              <v-btn text
                     color="primary"
                     v-on:click="goBack()">
                Cancel
              </v-btn>
              <v-spacer></v-spacer>
              <v-slide-x-reverse-transition>
                <v-tooltip
                    v-if="formHasErrors"
                    left
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        class="my-0"
                        v-bind="attrs"
                        v-on="on"
                    >
                      <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                  </template>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>
              <v-btn
                  :disabled="!formIsValid"
                  color="primary"
                  text
                  v-on:click="registerNewUser()"
              >

                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </v-app>

</template>

<script>

import {registerUser} from "@/api/api";

export default {
  data: () => ({
    errorMessages: '',
    name: null,
    email: null,
    formHasErrors: false,
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: 'Password',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),

  computed: {
    form() {
      return {
        name: this.name,
        address: this.email,
        password: this.password

      }
    },
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    formIsValid() {

    },
    addressCheck() {
      this.errorMessages = this.email && !this.name
          ? `I'm required`
          : ''

      return true
    },

    goBack() {
      return this.$router.push('/').catch(() => {
      });
    },

    registerNewUser() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      registerUser(this.name, this.email, this.password).then(() => {
        alert("Konto załozone poprawnie")
        this.$router.push('/').catch(() => {
        });
      }).catch(() => {
        alert("Istnieje juz konto z takim emailem")
        this.name=""
        this.email=""
        this.password=""
      })

    }
  },
  isEmailValid: function () {
    return (this.email == "") ? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
  }


}
</script>


<style scoped>

#registerLabel {
  text-align: center;
  font-size: 100px;
  color: cornflowerblue;
}
</style>