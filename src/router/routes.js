const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    //pagina home
    children: [
      {
        path: "",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("pages/AboutPage.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "autentication",
        name: "autentication",
        component: () => import("src/pages/AutentPage.vue"),
      },
    ],
  },

  //pagina index donde esta todo del gestor
  {
    path: "/index",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "actas",
        name: "acta",
        component: () => import("src/pages/ActaPage.vue"),
      },
      {
        path: "Actaordinaria",
        name: "ActaRO",
        component: () => import("src/pages/ActaROPage.vue"),
      },
      {
        path: "balance",
        name: "balance",
        component: () => import("src/pages/BalancePage.vue"),
      },
      {
        path: "graph",
        name: "graph",
        component: () => import("src/pages/GraphPage.vue"),
      },
      {
        path: "actapolitica",
        name: "actaCP",
        component: () => import("src/pages/ActaPolitPage.vue"),
      },
      {
        path: "user",
        name: "user",
        component: () => import("src/pages/UserPage.vue"),
      },
      {
        path: "updser",
        name: "updser",
        component: () => import("src/pages/UpdateUser.vue"),
      },
      {
        path: "calendar",
        name: "calendar",
        component: () => import("src/pages/CalendarPage.vue"),
      }
    ],
  },

  //error page
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
