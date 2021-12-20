import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Register from "@/components/Register";
import Schedule from "@/components/Schedule";
import Lectures from "@/components/Lectures";



Vue.use(VueRouter);

const routes = [
    {
        path: '',
        name: 'HelloWorld',
        component: HelloWorld

    },

    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule
    },
    {
        path: '/lectures',
        name: 'Lectures',
        component: Lectures
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;