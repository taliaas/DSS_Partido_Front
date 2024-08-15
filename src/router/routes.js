import AboutPage from "src/pages/AboutPage.vue";
import HomePage from "src/pages/HomePage.vue";
import RegisterPage from "src/pages/RegisterPage.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    //pagina home
    children: [
      {
        path: "",
        component: HomePage
      },
      {
        path: "about",
        name: "about",
        component: AboutPage
      },
      {
        path: "sigin",
        name: "sigin",
        component: RegisterPage
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
        path: "acta",
        name: "acta",
        component: () => import("src/pages/ActaPage.vue"),
      },
      {
        path: "actaordinaria",
        name: "actaordinaria",
        component: () => import("src/pages/ActaROPage.vue"),
      },
      {
        path: "actapolitica",
        name: "actapolitica",
        component: () => import("src/pages/ActaPolitPage.vue"),
      },
      {
        path: '/details/:id',
        name: "ActaView",
        component: () => import("src/pages/ActaView.vue"),
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
        path: "user",
        name: "user",
        component: () => import("src/pages/UserPage.vue"),
      },
      {
        path: "adduser",
        name: "adduser",
        component: () => import("src/pages/AggAcount.vue"),
      },
      {
        path: "aboutuser",
        name: "aboutuser",
        component: () => import("src/pages/AboutAccount.vue"),
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
      },
      {
        path: "notification",
        name: "notification",
        component: () => import("src/pages/NotificatioPage.vue"),

      }
    ],
  },

  //error page
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
const userRole = 'admin'
// Función para verificar el rol del usuario antes de permitir el acceso a una ruta
function checkUserRole(to, from, next) {
  switch (to.path) {
    case '/index':
      if (userRole !== 'admin') {
        next('/'); // Redirige a la pagina de login si el rol no es admin
      } else {
        next(); // Permite el acceso si el rol es admin
      }
      break;
    // Puedes annadir mas condiciones aqui para otras rutas
    default:
      next(); // Permite el acceso a todas las demas rutas
  }
}

// Itera sobre las rutas y asigna el guardia de ruta
routes.forEach(route => {
  route.beforeEnter = function(to, from, next) {
    checkUserRole(to, from, next);
  };
});

export default routes;
