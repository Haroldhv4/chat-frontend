import { Home, Search, Bell, Mail, Bookmark, List, User, MoreHorizontal } from "lucide-react";

const MenuItem = ({ icon, active = false, children }: { icon: React.ReactNode; active?: boolean; children: React.ReactNode }) => (
  <button
    className={`flex items-center gap-4 w-full p-3 rounded-xl transition-all ${
      active
        ? "bg-gray-800/50 text-white font-semibold"
        : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
    }`}
  >
    <span className={`${active ? "text-blue-400" : ""}`}>{icon}</span>
    <span>{children}</span>
  </button>
);

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen p-4 border-r border-gray-700/50 bg-gray-900/50">
      {/* Logo */}
      <div className="mb-8 pl-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Menú */}
      <nav className="space-y-1 flex-1">
        <MenuItem icon={<Home className="w-5 h-5" />} active>Inicio</MenuItem>
        <MenuItem icon={<Search className="w-5 h-5" />}>Buscar</MenuItem>
        <MenuItem icon={<Bell className="w-5 h-5" />}>Notificaciones</MenuItem>
        <MenuItem icon={<Mail className="w-5 h-5" />}>Mensajes</MenuItem>
        <MenuItem icon={<Bookmark className="w-5 h-5" />}>Guardados</MenuItem>
        <MenuItem icon={<List className="w-5 h-5" />}>Listas</MenuItem>
        <MenuItem icon={<User className="w-5 h-5" />}>Perfil</MenuItem>
      </nav>

      {/* Botón Grok */}
      <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-blue-500/20 transition-all transform hover:scale-[1.02]">
        Grok
      </button>

      {/* Usuario */}
      <div className="mt-auto p-3 rounded-xl hover:bg-gray-800/30 transition-colors cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700"></div>
          <div>
            <p className="font-medium">Usuario</p>
            <p className="text-xs text-gray-400">@usuario</p>
          </div>
          <MoreHorizontal className="ml-auto w-5 h-5 text-gray-400" />
        </div>
      </div>
    </aside>
  );
}