import {TopSide} from "../components/Layout"

import Home from "../pages/Home";
import Signin from "../pages/Signin";

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
        path: "/sign_in",
        component: Signin,
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
        layout: TopSide
        // isShowHeader: true
    }
];