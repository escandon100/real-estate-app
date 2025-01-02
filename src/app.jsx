import { createBrowserRouter , RouterProvider } from "react-router";
import Layout from "./routes/layout/layout";
import Homepage from "./routes/homepage/homepage"
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import Login from "./routes/login/login";
import ProfilePage from "./routes/profilePage/profilePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children : [
        {
          path : "/",
          element : <Homepage/>
        },
        {
          path : "/listPage",
          element : <ListPage />
        },
        {
          path : "/:id",
          element : <SinglePage />
        },
        {
          path : "/login",
          element : <Login/>

        },
        {
          path : "/profile",
          element : <ProfilePage/>
        }
      ]
      
    }
  ])
  return(
   <RouterProvider router = {router} />
  )
}
export default App;