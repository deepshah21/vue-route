import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Panama from "../views/Panama.vue";
import routedata from "../routedata";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () => import("../views/Brazil.vue")
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama
  },
  {
    path: "/details/:id",
    name: "details",
    props: true,
    component: () =>
      import(/*webpackChunkName: "details" */ "../views/Details.vue"),
    children: [
      {
        path: ":experienceSlug",
        name: "experinceDetail",
        props: true,
        component: () =>
          import(
            /*webpackChunkName: "ExperienceDetails"*/ "../views/ExperinceDetail.vue"
          )
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "User" */ "../views/User.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */
        "../views/Login.vue"
      )
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!routedata.user) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
