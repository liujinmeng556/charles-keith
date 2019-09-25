import {
    Shopping,
    Bags,
    Sort,
    Mine,
    Login
} from "@pages"



export const layoutRoutes = [
    {
        key: "/shopping",
        path: "/shopping",
        name: "商城",
        icon: "\ue6ec",
        component: Shopping,
        exact: true,
        meta: {
            requireAuth: false,
            flag: true
        }
    },
    {
        key: "/sort",
        path: "/sort",
        name: "分类",
        icon: "\ue60a",
        component: Sort,
        exact: true,
        meta: {
            requireAuth: false,
            flag: true
        }
    },
    {
        key: "/bags",
        path: "/bags",
        name: "购物袋",
        icon: "\ue69c",
        component: Bags,
        exact: true,
        meta: {
            requireAuth: true,
            flag: true
        }
    },
    {
        key: "/mine",
        path: "/mine",
        name: "我的账户",
        icon: "\ue620",
        component: Mine,
        exact: true,
        meta: {
            requireAuth: true,
            flag: true
        }
    },

]

export const noLayoutRoutes = [
    {
        key: "/login",
        path: "/login",
        name: "登陆",
        icon: "",
        component: Login,
        exact: true,
        meta: {
            requireAuth: false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes);