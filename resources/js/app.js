require('./bootstrap');

window.Vue = require('vue');


Vue.component('menu-list', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
});
