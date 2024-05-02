import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./commponents/AuthModule/AuthLayout/AuthLayout";
import NotFound from "./commponents/sharedCommponents/NotFound";
import Login from "./commponents/AuthModule/Login/Login";
import MasterLayout from "./commponents/DashboardModule/MasterLayout/MasterLayout";
import Dashboard from "./commponents/DashboardModule/Dashbord/Dashboard";
import InstructorGroups from "./commponents/DashboardModule/InstructorGroups/InstructorGroups";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
        // {
        //   path: "Register",
        //   element: <Register />,
        // },
        // {
        //   path: "ForgetPasword",
        //   element: <ForgotPassword />,
        // },
        // {
        //   path: "ResetPasword",
        //   element: <ReasetPassword />,
        // },
        // {
        //   path: "VerifyEmail",
        //   element: <VerifyAccount />,
        // },
      ],
    },
    {
      path: "dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        { path: "grops", element: <InstructorGroups /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
