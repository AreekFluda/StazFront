import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Register from "@/components/Register";
import Schedule from "@/components/Schedule";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
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
    }
]

const router = new VueRouter({
    routes,
});

export default router;