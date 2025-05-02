import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from './routes';
import MainLayout from "@/layouts/MainLayout";

const RouterManager = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => {
            const Layout = route.layout || MainLayout;
            const Component = route.component;
            console.log('component: ', Component);
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default RouterManager;
