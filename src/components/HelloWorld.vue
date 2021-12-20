<template>
  <v-app>
    <span id="logInLabel">Zaloguj się</span>
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
                v-model="login"
                :rules="[() => !!login || 'To pole jest wymagane']"
                label="Login"
                placeholder="Wprowadz login"
                required
            ></v-text-field>
            <v-text-field
                ref="Email"
                v-model="email"
                label="Email"
                placeholder="Wprowadz email"
                :rules="[() => !!email || 'To pole jest wymagane']"
            ></v-text-field>
            <v-text-field
                v-model="password"
                type="password"
                placeholder="Wprowadz haslo"
                :rules="[() => !!password || 'To pole jest wymagane']"
                class="input-group--focused"
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                  v-if="formHasErrors"
                  left>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
                color="primary"
                v-on:click="register">
              Zarejestruj sie
            </v-btn>
            <v-btn
                color="primary"
                text
                :disabled="!email.length || !login.length || !password.length"
                v-on:click="logIn">
              Zaloguj sie
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
    login: '',
    email: '',
    password: '',
    formHasErrors: false,
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
    register() {
      return this.$router.push('/register').catch(() => {
      });
    },
    logIn() {
      loginUser(this.login, this.email, this.password).then(() => {
        alert("Zalogowano poprawnie")
        this.$router.push('/schedule').catch(() => {
        });
        this.$store.state.email = this.email;
        this.$store.state.login = this.login;
        this.$store.state.password = this.password
        console.log(this.email);
        console.log(this.login);
        console.log(this.password)
      }).catch(() => {
        alert("Bledne dane")
        this.login = ""
        this.email = ""
        this.password = ""
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
