import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logo_prisma.png';

export default function Layout2() {
  return (
    <div className="min-h-screen bg-fondo-suave text-texto-principal">

      {/* Header con logo */}
      <header className="w-full p-4 flex justify-center">
        <Link to="/">
          <img src={logo} alt="Logo PrismaLED" className="h-20" />
        </Link>
      </header>

      {/* Contenido dinámico */}
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Bienvenido alayout2</h1>        
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-violeta-claro text-black p-4 mt-12 text-center">
        © 2025 PrismaLED
      </footer>
    </div>
  );
}
