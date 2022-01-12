import Vue from "vue";
import Router from "vue-router";
import GetTask from "@/components/GetTask";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "GetTask",
      component: GetTask
    }
  ]
});
