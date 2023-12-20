import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from './ui/Error';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Users from './pages/Users';
import Services from './pages/Services';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';
import Service from "./pages/Service";
import Project from "./pages/Project";
import Quote from "./pages/Quote";
import PageNotFound from "./pages/PageNotFound";
import ServicesID from "./pages/ServicesID";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./ui/AdminLayout";
import Faqs from "./features/Admin/Faqs";
import EditFaq from "./features/Admin/EditFaq";
import AdminMessages from "./features/Admin/AdminMessages";
import EditMessage from "./features/Admin/EditMessage";
import AdminProject from "./features/Admin/AdminProject";
import DashBoardLayout from "./features/DashBoard/DashBoardLayout";
import AdminServices from "./features/Admin/Services";
import Login from "./pages/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Edit from "./pages/Edit";
import EditProject from "./features/Admin/EditProject";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children:
      [{
        path: '/',
        element: <Home />,
        errorElement: <PageNotFound />
      },
      {
        path: '/landing',
        element: <Landing />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/services/:id',
        element: <ServicesID />
      },
      {
        path: '/service',
        element: <Service />
      },
      {
        path: '/Blog',
        element: <Blog />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/quote',
        element: <Quote />
      },
      ]
  },
  {
    element: <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>,
    errorElement: <Error />,
    children: [
      {
        path: '/admin',
        element: <DashBoardLayout />
      },
      {
        path: '/admin/user',
        element: <Users />
      },
      {
        path: '/admin/edit',
        element: <Edit />
      },
      {
        path: '/admin/messages',
        element: <AdminMessages />
      },
      {
        path: '/admin/faqs',
        element: <Faqs />
      },
      {
        path: '/admin/faqs/:faqId',
        element: <EditFaq />
      },
      {
        path: '/admin/faqs/:messageId',
        element: <EditMessage />
      },
      {
        path: '/admin/projects',
        element: <AdminProject />
      },
      {
        path: '/admin/projects/:projectId',
        element: <EditProject />
      },
      {
        path: '/admin/services',
        element: <AdminServices />
      },
    ]
  },
  {
    element: <Login />,
    path: '/login',
    errorElement: <Error />,

  }
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } }
});




function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#18212f",
            color: "#e5e7eb",
          }
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
