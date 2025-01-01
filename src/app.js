import React, { Suspense, useEffect, useState } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Error from "./components/Error.js";
import Resturent from "./components/Resturent.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import Cart from "./components/Cart.js";
import store from "./utils/appStore.js";
import { Provider } from "react-redux";

// Lazy-loaded component (correct syntax)
const Grocery = lazy(() => import("./components/Grocery.js"));
const About=lazy(()=> import("./components/About.js"))
const Contact=lazy(()=>import("./components/Contact.js"))
// Root Page Component
const Page = () => {
   const [userName,setuserName]=useState("");
   useEffect(()=>{
     const data={
      name:"Elon Musk",
     }
     setuserName(data.name);
   },[]);
   console.log(userName)
   
    
  const location = useLocation(); // Gives the current URL and state
  const params = useParams(); // Provides route parameters
  const navigate = useNavigate(); // Allows navigation programmatically
 // console.log("Location:", location.pathname);
 // console.log("Params:", params);

  return (
    // {default  value of loggedInUser}
    <Provider store={store}>
      <UserContext.Provider  value={{loggedInUser:"Adarsh Singh"}}>
            {/* loggoedInUser ==  Adarsh Singh */}
               <div>
                    <UserContext.Provider value={{loggedInUser:userName}}>
                        {/* loggedInUser == userName value  */}
                        <Header />
                    </UserContext.Provider>
                    <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
                            {/* loggedInUser == userName */}
                            <Outlet />
                    </UserContext.Provider>
               </div>
      </UserContext.Provider>
    </Provider>
  );
};

// Router Configuration
const approut = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense><About/></Suspense>,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/contact", // Fixed typo
        element: <Suspense><Contact/></Suspense>,
      },
      {
        path: "/resturent/:id",
        element: <Resturent />,
      },
    ],
    errorElement: <Error />,
  },
]);

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approut} />);
