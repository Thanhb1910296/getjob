

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import NotFoundPage from "../pages/NotFoundPage";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";

export const routes = [
    {
        path: "/",
        component: Home,

        //isShowHeader: true
    },
    {
        path: "/signin",
        component: Signin,
        //isShowHeader: true
    },
    {
        path: "/signup",
        component: Signup,
        //isShowHeader: true
    },
    {
        path: "*",
        component : NotFoundPage,
        // isShowHeader: false
    },
    {
        path: "/profile",
        component : Profile,
        layout: null,
        // isShowHeader: true
    },
    {
        path: "/upload",
        component : Upload,
        layout: null,
        // isShowHeader: true
    }
];