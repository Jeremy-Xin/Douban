import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movies from '@/page/movies'
import Content from '@/page/content'
import Movie from '@/page/movie'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: Movies
        },
        {
            path: '/content/:id',
            component: Content
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/movie/:id',
            name: 'Movie',
            component: Movie
        }
    ]
})