routing through SPA
route transition
dynamic routing
lazy loading

How to create routes, including named routes ?

    To create project install vue cli globally
        1. install -g vue/cli
        2. goto directory and open terminal : vue ui
        3. vue ui server will start on port 8000 (default)
        4. after creating an app :- move to within app 

    generally we used a tag for external links
    and router-link tag for internal links
    <router-view/> where content will be load

    to load route dynamically we have to use store
    as ading routes are so manual things



Learn how to lazy load your routes? 

    app.js file is pack of all js file which loads once 
    web-pack's code splitting feature,we can split whole bundles into 
    small files call chunks or bundles.
    In this case we can split each page and lazy load the required code only the 
    route is visited.

    code splitting will make your app so faster because you only load what you need.

    in router.js in const routes ,
        component: () => import("../views/Brazil.vue")
    we can also use magic links which is usefull for debugging the code
        import(/* webpackChunkName: "about" */ "../views/About.vue") 


Learn how to work with Vue Router Params and pass them as props to components ?

    as route instance in injected into vue so we can use it through out the applications.
    {{ this.$route.params.paramName }} we can use within the app

    <router-view :key="this.$route.path" > will update/rerender the component on path change 
    for example navigate from host/details/1 to details/2 componenet will not rerender so 
    due to above code it will rerender componenet using path change

    default routes uses # for routing but which is little bit ugly
    we can use route's history mode --> history.pushState
    add mode: "history" in route object 

    use props instead of $route to decouple the component fro $route
    we can get same name of route's param within props of componenet and we can use it .
    we have to make props: true in the route object.

How to create dynamic and nested routes ?

    for nesting routes dynamically there is childrens property used 

Learn what the HTML5 History Mode is and how to enable it ?
    
    without history mode, all route url will be navigate with # .
    but using history mode in route object # will be removed from the urls

Creating go-back button ?
    
    on click of go-back button method witll return with this.$route.go(-1);
    here -1 interger define 1 step back to history . 

Learn how to create impressive route transitions ?
    
    vue provide transition wrapper component.
    css transition class will be added and removed at appropriate timing.
    have to wrap <router-view> with <transition name="" mode="">
    we have to also give a css according to name .

How to create a 404 page with the Vue Router ?
    
    1.have to create component of Not found page
    2.give route path: "404",alias:"*" and add this component for page
    3.also we can use beforeEnter property of route to check .

How to scroll- behaviour of vue router 


Learn what navigation guards are and how to create an authentication middleware for your app ?
    
    global navigation guard -> middle ware hooks which runs before and after route.
    
    meta property is used for authentication
    {   
        path: "/user",
        name: "user",
        component: () => import(/* webpackChunkName: "User" */ "../views/User.vue"),
        meta: { requiresAuth: true }
    }

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

# vue-route

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
