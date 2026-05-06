import { RouterProvider } from "react-router-dom";
import { router } from "./app.routes.jsx";
import {AuthProvider} from './features/auth/Auth.context.jsx'
import "./features/styles/global.scss"

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
};

export default App;
