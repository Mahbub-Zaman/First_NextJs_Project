'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isLoggedIn = Cookies.get('auth');

  const handleLogout = () => {
    Cookies.remove('auth');
    router.push('/login');
  };

  const linkStyle = (path) =>
    pathname === path
      ? 'text-blue-600 font-semibold'
      : 'text-gray-700 hover:text-blue-600';

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          ⌨️ KeyBoard<span className="text-blue-600">Hub</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/" className={linkStyle('/')}>
            Home
          </Link>

          <Link href="/items" className={linkStyle('/items')}>
            Keyboards
          </Link>

          {isLoggedIn && (
            <Link href="/add-item" className={linkStyle('/add-item')}>
              Add Keyboard
            </Link>
          )}

          {!isLoggedIn ? (
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
