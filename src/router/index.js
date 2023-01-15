import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import PowerRankings from "../views/PowerRankings.vue"
import Team from "../views/Team.vue"
import Player from "../views/Player.vue"
import Articles from "../views/Articles.vue"
import Draft from "../views/Draft.vue"
import CareerStandings from "../views/CareerStandings.vue"


const routes = [
    {
        path: "/draft",
        name: "draft",
        component: Draft,
        meta: {
          guest: true
        }
    },
    {
        path: "/power-rankings",
        name: "power-rankings",
        component: PowerRankings,
        meta: {
          guest: true
        }
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
          guest: true
        }
    },
    {
        path: '/team/:teamId',
        name: 'team',
        component: Team,
        meta: {
          guest: true
        }
    },
    {
        path: '/player/:playerId',
        name: 'player',
        component: Player,
        meta: {
          guest: true
        }
    },
    {
        path: '/articles',
        name: 'articles',
        component: Articles,
        meta: {
          guest: true
        }
    },
    {
      path: '/career-standings',
      name: 'career-standings',
      component: CareerStandings,
      meta: {
        guest: true
      }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
export default router