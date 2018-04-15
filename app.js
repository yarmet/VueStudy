new Vue({
    el: '#app',
    data: {
        title: 'Фильмотека',
        search: '',
        films: [
            {id: '1', title: 'матильда', description: 'фильм про матильду', tags: ['зарубежное']},
            {id: '2', title: 'мы монстры', description: 'фильм про монстров', tags: ['зарубежное', 'мультики']},
            {id: '3', title: 'геошторм', description: 'фильм про геошторм', tags: ['зарубежное', 'природа']},
            {id: '4', title: 'пила 8', description: 'фильм про пилу 8', tags: ['зарубежное', 'триллер']},
            {id: '5', title: 'салют-7', description: 'фильм про салют', tags: ['зарубежное', 'космос']},
            {id: '6', title: 'салют-8', description: 'фильм про салют', tags: ['зарубежное', 'космос']},
            {id: '7', title: 'салют-8', description: 'фильм про салют', tags: ['зарубежное', 'космос']},
            {id: '8', title: 'салют-9', description: 'фильм про салют', tags: ['зарубежное', 'космос']},
            {id: '9', title: 'салют-10', description: 'фильм про салют', tags: ['зарубежное', 'космос']},
            {id: '10', title: 'салют-11', description: 'фильм про салют', tags: ['зарубежное', 'космос']}
        ],
        tags: [],
        limit: 8
    },
    methods: {
        onTagFilterClicked(value) {
            if (!this.tags.includes(value)) {
                this.tags.push(value);
            }
        },
        onTagUnFilterClicked(value) {
            if (this.tags.includes(value)) {
                this.tags.splice(this.tags.indexOf(value), 1)
            }
        }

    },
    computed: {
        filtered() {
            var filter = this.search.toLowerCase().trim();
            var result = [];

            if (filter === '') {
                result = this.films;
            } else {
                result = this.films.filter(film => {
                    if (film.title.toLowerCase().indexOf(filter) === 0) {
                        return true;
                    }
                })
            }

            if (this.tags.length > 0) {

                return result.filter(item =>
                    this.tags.every(tag =>
                        item.tags.includes(tag)
                    )
                )
            }

            return result;

        }
    }
});