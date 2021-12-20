<template>
  <v-app id="test">
    <v-app>
      <span id="registerLabel">Register</span>
      <v-row justify="center">
        <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"        >
          <v-card ref="form">
            <v-card-text>
              <v-text-field
                  ref="name"
                  v-model="login"
                  :rules="[() => login>0 || 'To pole jest wymagane']"
                  label="Login"
                  placeholder="Login"
                  required
              ></v-text-field>
              <v-text-field
                  id="email"
                  type="email"
                  name="email"
                  ref="Email"
                  v-model="email"
                  :rules="[
              () => !!email || 'To pole jest wymagane',
            ]"
                  label="Wprowadz email"
                  placeholder="Wprowadz email"
                  counter="25"
                  required
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  :rules="[
              () => !!email || 'To pole jest wymagane',
            ]"
                  label="Hasło"
                  counter
                  @click:append="show1 = !show1
"              ></v-text-field>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
              <v-btn text
                     color="primary"
                     v-on:click="goBack()">
                Anuluj
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
                  color="primary"
                  text
                  :disabled="!email.length || !login.length || !password.length"
                  v-on:click="registerNewUser()"
              >
                Zatwierdz
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
    login: '',
    email: '',
    formHasErrors: false,
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: '',

  }),

  computed: {
    form() {
      return {
        login: this.login,
        address: this.email,
        password: this.password

      }
    },
  },


  methods: {
    goBack() {
      return this.$router.push('/').catch(() => {
      });
    },

    registerNewUser() {
      console.log(this.login);
      console.log(this.email);
      console.log(this.password);
      registerUser(this.login, this.email, this.password).then(() => {
        alert("Konto załozone poprawnie")
        this.$router.push('/').catch(() => {
        });
      }).catch(() => {
        alert("Istnieje juz konto z takim emailem")
        this.login = ""
        this.email = ""
        this.password = ""
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