<template>
  <v-app>
    <v-row>
      <v-col class="text-left">
        <v-btn class="link" id="backBtn" color="primary">Wyloguj</v-btn>
      </v-col>
      <v-col class="text-right">
        <v-btn class="text-right" id="signInBtn" color="primary" v-on:click="goSignUpPage()">Zapisz się</v-btn>
      </v-col>
    </v-row>


    <v-container>
      <p id="label">
        XVI Konferencja IT-Programuj z nami!
      </p>
      <p id="dataLabel">
        1 CZERWCA 2021 GODZINA 10:00
      </p>
    </v-container>
    <v-container>
      <v-data-table id="scheduleTable"
                    :headers="headers"
                    :items="informations"
      ></v-data-table>
    </v-container>
  </v-app>

</template>

<script>


export default {
  name: "Schedule",
  data() {
    return {
      headers: [
        {
          text: 'Godzina:',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'Description',
          value: 'calories'
        },


      ],
      informations: [
        {
          name: '10:00',
          calories: "Rozpoczecie konferencji",

        },
        {
          name: '10:00-11:45',
          calories: "Prelekcja dotycząca Springa",

        },
        {
          name: '11:45-12:00',
          calories: "Przerwa",

        },
        {
          name: '12:00-13:45',
          calories: "Prelekcja dotyczaca baz danych",

        },
        {
          name: '13:45-14:00',
          calories: "Przerwa",

        },
        {
          name: '14:00-15:45',
          calories: "Prelekcja-technologie frontendowe",

        },
        {
          name: '15:45',
          calories: "Zakonczenie konferencji",

        }
      ],
    }


  }, methods: {
    goSignUpPage() {
      return this.$router.push('/signUp').catch(() => {
      });
    },

  }
}

</script>

<style scoped>
#label {
  font-size: 100px;
  color: cornflowerblue;
  text-align: center;
}

#dataLabel {
  color: red;
  font-size: 90px;
  text-align: center;
}


</style>
