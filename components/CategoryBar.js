import styles from './CategoryBar.module.css';

const categories = [
  { label: 'Celulares',        href: '/categoria/celulares',        emoji: '📱' },
  { label: 'Tablets',          href: '/categoria/tablets',          emoji: '📟' },
  { label: 'Electrodomésticos',href: '/categoria/electrodomesticos', emoji: '🏠' },
  { label: 'Computadoras',     href: '/categoria/computadoras',     emoji: '💻' },
  { label: 'Accesorios',       href: '/categoria/accesorios',       emoji: '🎧' },
  { label: 'Smart TV',         href: '/categoria/smart-tv',         emoji: '📺' },
  { label: 'Gaming',           href: '/categoria/gaming',           emoji: '🎮' },
  { label: 'Ofertas',          href: '/ofertas',                    emoji: '🔥' },
];

export default function CategoryBar() {
  return (
    <section className={styles.section} aria-label="Explorar categorías">
      <div className={styles.inner}>
        <h2 className={styles.title}>Explorar por categoría</h2>
        <nav aria-label="Categorías de productos">
          <ul className={styles.grid}>
            {categories.map((cat) => (
              <li key={cat.href}>
                <a href={cat.href} className={styles.card}>
                  <span className={styles.emoji} aria-hidden="true">{cat.emoji}</span>
                  <span className={styles.label}>{cat.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
