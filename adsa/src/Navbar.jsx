import { NavLink } from 'react-router-dom'
import logo from './assets/hero.png'

function Navbar() {
  return (
    <nav
      dir="rtl"
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          <NavLink
            to="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                src={logo}
                alt="Photography Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">
                عدسة
              </span>

              <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </NavLink>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`
                }
              >
                الرئيسية
              </NavLink>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`
                }
              >
                المدونة
              </NavLink>

              <a
                href="#"
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"
              >
                من نحن
              </a>

            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">

            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <NavLink
              to="/blog"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-300"
            >
              ابدأ القراءة
            </NavLink>

          </div>

          <button className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar