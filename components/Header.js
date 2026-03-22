'use client';
import { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Celulares', href: '/categoria/celulares' },
  { label: 'Tablets', href: '/categoria/tablets' },
  { label: 'Electrodomésticos', href: '/categoria/electrodomesticos' },
  { label: 'Accesorios', href: '/categoria/accesorios' },
  { label: 'Ofertas', href: '/ofertas' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span>📦 Envíos a todo el país &nbsp;|&nbsp; 📞 Atención al cliente: 0800-PHONESTORE</span>
      </div>

      <nav className={styles.nav} aria-label="Navegación principal">
        <div className={styles.navInner}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="Phonestore DP - Inicio">
            <span className={styles.logoIcon}>📱</span>
            <span>
              <strong>Phonestore</strong>
              <em>_DP</em>
            </span>
          </a>

          {/* Buscador central */}
          <form className={styles.searchForm} role="search" action="/buscar">
            <input
              type="search"
              name="q"
              placeholder="Buscar productos, marcas..."
              className={styles.searchInput}
              aria-label="Buscar productos"
            />
            <button type="submit" className={styles.searchBtn} aria-label="Buscar">
              🔍
            </button>
          </form>

          {/* Acciones */}
          <div className={styles.actions}>
            <a href="/login" className={styles.btnOutline}>
              Iniciar sesión
            </a>
            <a href="/registro" className={styles.btnPrimary}>
              Registrarse
            </a>
            <a href="/carrito" className={styles.cartBtn} aria-label="Carrito de compras">
              🛒 <span className={styles.cartBadge}>0</span>
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Links de navegación */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
