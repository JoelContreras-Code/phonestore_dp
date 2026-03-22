import styles from './FeaturedProducts.module.css';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max 256GB',
    category: 'Celulares',
    price: '$1.299.999',
    oldPrice: '$1.599.999',
    badge: 'HOT',
    emoji: '📱',
    href: '/producto/iphone-15-pro-max',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Celulares',
    price: '$999.999',
    oldPrice: '$1.199.999',
    badge: 'OFERTA',
    emoji: '🌟',
    href: '/producto/samsung-galaxy-s24-ultra',
  },
  {
    id: 3,
    name: 'iPad Pro M4 11"',
    category: 'Tablets',
    price: '$849.999',
    oldPrice: null,
    badge: 'NUEVO',
    emoji: '💻',
    href: '/producto/ipad-pro-m4',
  },
  {
    id: 4,
    name: 'Samsung 55" QLED 4K',
    category: 'Smart TV',
    price: '$649.999',
    oldPrice: '$799.999',
    badge: 'OFERTA',
    emoji: '📺',
    href: '/producto/samsung-qled-55',
  },
  {
    id: 5,
    name: 'AirPods Pro 2da Gen',
    category: 'Accesorios',
    price: '$189.999',
    oldPrice: '$229.999',
    badge: null,
    emoji: '🎧',
    href: '/producto/airpods-pro-2',
  },
  {
    id: 6,
    name: 'MacBook Air M3 13"',
    category: 'Computadoras',
    price: '$1.499.999',
    oldPrice: null,
    badge: 'NUEVO',
    emoji: '🖥️',
    href: '/producto/macbook-air-m3',
  },
  {
    id: 7,
    name: 'PlayStation 5 Slim',
    category: 'Gaming',
    price: '$549.999',
    oldPrice: '$649.999',
    badge: 'HOT',
    emoji: '🎮',
    href: '/producto/ps5-slim',
  },
  {
    id: 8,
    name: 'Xiaomi Robot Vacuum S20',
    category: 'Electrodomésticos',
    price: '$249.999',
    oldPrice: '$319.999',
    badge: 'OFERTA',
    emoji: '🤖',
    href: '/producto/xiaomi-robot-s20',
  },
];

const badgeColor = { HOT: '#e53e3e', OFERTA: '#2d7dd2', NUEVO: '#38a169' };

export default function FeaturedProducts() {
  return (
    <section className={styles.section} aria-label="Productos destacados">
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.title}>Productos destacados</h2>
          <a href="/productos" className={styles.viewAll}>Ver todos →</a>
        </div>

        <ul className={styles.grid}>
          {products.map((p) => (
            <li key={p.id}>
              <article className={styles.card}>
                {p.badge && (
                  <span
                    className={styles.badge}
                    style={{ background: badgeColor[p.badge] }}
                    aria-label={`Etiqueta: ${p.badge}`}
                  >
                    {p.badge}
                  </span>
                )}

                <a href={p.href} aria-label={`Ver ${p.name}`}>
                  <div className={styles.imgBox} aria-hidden="true">
                    <span className={styles.productEmoji}>{p.emoji}</span>
                  </div>
                </a>

                <div className={styles.info}>
                  <span className={styles.category}>{p.category}</span>
                  <h3 className={styles.name}>
                    <a href={p.href}>{p.name}</a>
                  </h3>
                  <div className={styles.pricing}>
                    {p.oldPrice && <s className={styles.oldPrice}>{p.oldPrice}</s>}
                    <strong className={styles.price}>{p.price}</strong>
                  </div>
                  <a href={p.href} className={styles.addBtn}>Agregar al carrito</a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
