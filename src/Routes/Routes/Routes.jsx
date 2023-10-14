import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import DetailsPage from "../../Pages/DetailsPage/DetailsPage";
import Home from "../../Pages/Home/Home/Home";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/details/:_id',
                element:<DetailsPage/>,
            }
        ]
    }
])
export default routes;