Vue.component('app-filter', {
    template: '<form>' +
    '<div class=form-group>' +
    '<input type="text" class="form-control" :value="value" @input="onValueUpdate($event.target.value)" >' +
    '</div>' +
    '<p><span class="badge badge-light" v-for="tag in tags" @click="onTagClicked(tag)">#{{tag}}</span></p>' +
    '</form>',
    props: ['value', 'tags'],
    methods: {
        onValueUpdate(value) {
            this.$emit('input', value);
        },
        onTagClicked(tag) {
            this.$emit('tag', tag);
        }
    }

});