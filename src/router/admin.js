const admin= [
    {
        path :"/admin",
        component: ()=> import("../layout/admin.vue"),
        children:[
            //quan ly user
            {
                path:"user",
                name:"admin-user",
                component: () =>import ("../pages/admin/user/index.vue")
            },
            {
                path:"user/create",
                name:"admin-user-create",
                component: () =>import ("../pages/admin/user/create.vue")
            },
            {
                path:"user/:id/edit",
                name:"admin-user-edit",
                component: () =>import ("../pages/admin/user/edit.vue")
            },
            //quan ly roles
            {
                path:"roles",
                name:"admin-roles",
                component: () =>import ("../pages/admin/roles/index.vue")
            },
            //quan ly setting
            {
                path:"setting",
                name:"admin-setting",
                component: () =>import ("../pages/admin/setting/index.vue")
            }
        ]
    }
];
export default admin;
