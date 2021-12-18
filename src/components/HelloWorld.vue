<template>
  <v-app>
    <span id="logInLabel">Log In</span>
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
                :rules="[() => !!name || 'This field is required']"
                :error-messages="errorMessages"
                label="Full Name"
                placeholder="Enter name"
                required
            ></v-text-field>
            <v-text-field
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
                type="password"
                name="input-10-2"
                placeholder="Enter password"
                value=""
                class="input-group--focused"
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text>
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                  v-if="formHasErrors"
                  left
              >

                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
                color="primary"
                v-on:click="register">
              Sign In
            </v-btn>
            <v-btn
                color="primary"
                text
                v-on:click="logIn">
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import {loginUser} from "@/api/api";

export default {
  data: () => ({
    errorMessages: '',
    name: null,
    email: null,
    password: null,
    formHasErrors: false,
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
    addressCheck() {
      this.errorMessages = this.email && !this.name
          ? `I'm required`
          : ''

      return true
    },

    signIn() {
      return this.$router.push('/schedule').catch(() => {
      });
    },
    register() {
      return this.$router.push('/register').catch(() => {
      });
    },
    logIn() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      loginUser(this.name, this.email, this.password).then(() => {
        alert("Zalogowano poprawnie")
        this.$router.push('/schedule').catch(() => {
        });
      })

    }
  },
}
</script>

<style scoped>
#logInLabel {
  text-align: center;
  font-size: 100px;
  color: cornflowerblue;
}

</style>
