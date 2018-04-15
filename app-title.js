Vue.component('app-title',{
    template: '<h1 > {{title.substring(0, title.length-1)}}<span class="text-danger">{{title.substring(title.length-1, title.length)}}</span></h1>',
    props : ['title']

});