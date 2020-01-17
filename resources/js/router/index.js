import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export default new VueRouter({
    saveScrollPosition: true,
    routes:[
        {
            name: 'first',
            path: '/first',
            component: resolve => void(require(['../components/First.vue'], resolve))
        },
        {
            name: 'second',
            path: '/second',
            component: resolve => void(require(['../components/Second.vue'], resolve))
        },
        {
            name: 'third',
            path: '/third',
            component: resolve => void(require(['../components/Third.vue'], resolve))
        },
        {
            name: 'fourth',
            path: '/fourth',
            component: resolve => void(require(['../components/Fourth.vue'], resolve))
        },
        {
            name: 'fifth',
            path: '/fifth',
            component: resolve => void(require(['../components/Fifth.vue'], resolve))
        },
    ]
})
