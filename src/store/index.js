import Vue from "vue";
import Vuex from "vuex";
import {getAllLectures, getAllParticipants} from "@/api/api";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lectures: [],
        participants: [],
    },
    mutations: {
        setLectures(state, lectures) {
            state.lectures = lectures;
        },
        setParticipants(state, participants) {
            state.participants = participants;
        },
    },
    actions: {
        fetchLectures(context) {
            return getAllLectures().then(response => {
                context.commit("setLectures", response.data)
            })
        },
        fetchParticipants(context) {
            return getAllParticipants().then(response => {
                context.commit("setParticipants", response.data)
            })
        }

    },
    getters: {
        getLectures(state) {
            return state.lectures
        },
        getParticipants(state) {
            return state.participants
        },


    }
})
