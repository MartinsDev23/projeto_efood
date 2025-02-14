import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/index";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Entrega from "./pages/Entrega";
import Pagamento from "./pages/Pagamento";
import Confirmacao from "./pages/Confirmacao";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/perfil/:id" element={<Perfil />}/>
          <Route path="/entrega" element={<Entrega />}/>
          <Route path="/pagamento" element={<Pagamento />}/>
          <Route path="/confirmacao-pagamento" element={<Confirmacao />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
