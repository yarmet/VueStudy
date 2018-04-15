Vue.component('app-card', {
    template: '<div class="card">' +
    '<img src="http://via.placeholder.com/350x250" alt="" class="card-img-top">' +
    '<div class="card-body">' +
    '<h4 class="card-title">{{item.title}}</h4>' +
    '<p class="card-text">{{item.description}}</p>' +
    '<p><span class="badge badge-light" v-for="tag in item.tags" @click="onTagClicked(tag)">#{{tag}}</span></p>' +
    '</div></div>',

    props: ['item'],
    methods:{
        onTagClicked(tag) {
            this.$emit('tag', tag)
        }
    }

});