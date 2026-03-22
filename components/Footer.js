import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>📱 <strong>Phonestore</strong><em>_DP</em></span>
          <p>Tu tienda de tecnología de confianza. Celulares, tablets, electrodomésticos y accesorios al mejor precio.</p>
        </div>

        <nav aria-label="Links del footer">
          <h3>Categorías</h3>
          <ul>
            <li><a href="/categoria/celulares">Celulares</a></li>
            <li><a href="/categoria/tablets">Tablets</a></li>
            <li><a href="/categoria/electrodomesticos">Electrodomésticos</a></li>
            <li><a href="/categoria/accesorios">Accesorios</a></li>
          </ul>
        </nav>

        <nav aria-label="Información">
          <h3>Información</h3>
          <ul>
            <li><a href="/nosotros">Sobre nosotros</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/envios">Envíos y devoluciones</a></li>
            <li><a href="/garantia">Garantía</a></li>
          </ul>
        </nav>

        <div className={styles.contact}>
          <h3>Contacto</h3>
          <p>📞 0800-PHONESTORE</p>
          <p>✉️ contacto@phonestore-dp.com</p>
          <p>🕐 Lun–Vie 9:00–18:00</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Phonestore DP. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
