import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/index";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/perfil/:id",
    element: <Perfil />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={rotas} />
    </Provider>
  );
}

export default App;
