import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';

// Páginas principales
import HomePage from '../pages/HomePage';
import ReservaPage from '../pages/ReservaPage';
import ConfirmacionPage from '../pages/ConfirmacionPage';

// Nuevas páginas del flujo del cliente
import Login from '../pages/Login';
import Recovery from '../pages/Recovery';
import LoginError from '../pages/Login_Error';
import Registro from '../pages/Registro';
import ClientHome from '../pages/Client_Home';
import EditarReserva from '../pages/Editar_Reserva';
import EditarCliente from '../pages/Editar_Cliente';
import HistorialReservas from '../pages/Historial_Reservas';
import PreVisualizacion from '../pages/Pre_Visualizacion';
import Disponibilidad from '../pages/Disponibilidad';
import PreOrden from '../pages/Pre_Orden';
import PreOrdenDoc from '../pages/Pre_Orden_Doc';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Páginas generales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/reserva" element={<ReservaPage />} />
          <Route path="/confirmacion" element={<ConfirmacionPage />} />

          {/* Páginas autenticación y cliente */}
          <Route path="/login" element={<Login />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/login-error" element={<LoginError />} />
          <Route path="/registro" element={<Registro />} />

          {/* Funcionalidad del cliente */}
          <Route path="/cliente" element={<ClientHome />} />
          <Route path="/editar-reserva" element={<EditarReserva />} />
          <Route path="/editar-cliente" element={<EditarCliente />} />
          <Route path="/historial-reservas" element={<HistorialReservas />} />
          <Route path="/pre-visualizacion" element={<PreVisualizacion />} />
          <Route path="/disponibilidad" element={<Disponibilidad />} />
          <Route path="/pre-orden" element={<PreOrden />} />
          <Route path="/pre-orden-doc" element={<PreOrdenDoc />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
