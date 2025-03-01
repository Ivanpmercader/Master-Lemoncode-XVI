import { routes } from "./routes";
import { HelloComponent } from "./../components/hello/helloComponent";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutComponent } from "./../components/about/aboutComponent";

export const AppRouter: React.FC = () => {
    return (
        <Routes>
          <Route path="/" element={<Navigate to={routes.home}/>} />
          <Route path={routes.home} element={<HelloComponent/>}/> 
          <Route path={routes.about} element={<AboutComponent />}/> 
          <Route path={routes.notFound} element={<h1>404: Page not found</h1>}/> 
        </Routes>
    )
  }