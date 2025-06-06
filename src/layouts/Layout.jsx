import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-fondo-suave text-texto-principal">
      <header className="bg-violeta-oscuro text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">PrismaLED</h1>
        <nav className="space-x-4">
          <Link to="/">Inicio</Link>
          <Link to="/reserva">Reserva</Link>
            <Link to="/confirmacion">Confirmación</Link>
        </nav>
      </header>

      <main className="p-6">{children}</main>

      <footer className="bg-violeta-claro text-black p-4 mt-12 text-center">
        © 2025 PrismaLED
      </footer>
    </div>
  );
}
