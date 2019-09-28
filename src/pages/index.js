import Loadable from "react-loadable";

import Loading from "@common/loading";


const Shopping = Loadable({
    loader: () => import("./shopping"),
    loading: Loading
})

const Bags = Loadable({
    loader: () => import("./bags"),
    loading: Loading
})

const Sort = Loadable({
    loader: () => import("./sort"),
    loading: Loading
})

const Mine = Loadable({
    loader: () => import("./mine"),
    loading: Loading
})

const Login = Loadable({
    loader: () => import("./login"),
    loading: Loading
})

const News = Loadable({
    loader: () => import("./shopping/news"),
    loading: Loading
})

const Cools = Loadable({
    loader: () => import("./shopping/cools"),
    loading: Loading
})

export {
    Shopping,
    Bags,
    Sort,
    Mine,
    Login,
    News,
    Cools,
    Loadable

}
