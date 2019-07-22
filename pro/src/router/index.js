import Vue from "vue";
import Router from "vue-router";
import LoginC from "@/views/LoginC.vue";
import LoginP from "@/views/LoginP.vue";
import Register from "@/views/Register.vue";
import Index from "@/views/Index.vue";
import TripStory from "@/views/TripStory.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/index",
      component: Index,
    },
    {
      path: "/loginC",
      component: LoginC,
    },
    {
      path: "/loginP",
      component: LoginP,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/trip",
      component: TripStory,
    },
  ],
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === "/loginC") {
    next();
  } else {
    let token = localStorage.getItem("Authorization");

    if (token === "null" || token === "") {
      next("/loginC");
    } else {
      next();
    }
  }
});

export default router;
