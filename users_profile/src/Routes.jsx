import React from "react";

import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";

import MyAccountOption32 from "./pages/MyAccountOption32/Myaccountoption32Columedit24dp5";

const ProjectRoutes = () => {

let element = useRoutes([
     { path: "/", element: <Home /> }, 
    { path: "*", element: <NotFound /> },
{
path: "myaccountoption32",
 element: <MyAccountOption32/>,
}
]);

return element;
 };

export default ProjectRoutes;