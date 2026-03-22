'use client';
import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const slides = [
  {
    id: 1,
    tag: '🔥 Oferta del día',
    title: 'iPhone 15 Pro Max',
    subtitle: 'Hasta 30% OFF en modelos seleccionados',
    cta: 'Ver oferta',
    href: '/categoria/celulares',
    bg: 'linear-gradient(135deg, #0d2b55 0%, #1a4a8a 100%)',
    emoji: '📱',
  },
  {
    id: 2,
    tag: '⚡ Flash Sale',
    title: 'Samsung Galaxy S24',
    subtitle: 'Cuotas sin interés + envío gratis',
    cta: 'Comprar ahora',
    href: '/categoria/celulares',
    bg: 'linear-gradient(135deg, #0a1628 0%, #2d7dd2 100%)',
    emoji: '🌟',
  },
  {
    id: 3,
    tag: '🎯 Nuevo ingreso',
    title: 'iPad Pro M4',
    subtitle: 'La tablet más potente del mercado',
    cta: 'Descubrir',
    href: '/categoria/tablets',
    bg: 'linear-gradient(135deg, #1a4a8a 0%, #5ba4f5 100%)',
    emoji: '💻',
  },
];

const megaPromo = {
  tag: '🆕 Novedad',
  title: 'Samsung Galaxy Ring',
  subtitle: 'El primer anillo inteligente de Samsung. Monitorea tu salud 24/7.',
  price: 'Desde $89.999',
  cta: 'Ver producto',
  href: '/categoria/accesorios',
  emoji: '💍',
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className={styles.hero} aria-label="Promociones destacadas">
      <div className={styles.inner}>

        {/* CARRUSEL — izquierda */}
        <div className={styles.carousel} style={{ background: slide.bg }}>
          <div className={styles.slideContent}>
            <span className={styles.tag}>{slide.tag}</span>
            <div className={styles.slideEmoji} aria-hidden="true">{slide.emoji}</div>
            <h1 className={styles.slideTitle}>{slide.title}</h1>
            <p className={styles.slideSubtitle}>{slide.subtitle}</p>
            <a href={slide.href} className={styles.slideCta}>{slide.cta}</a>
          </div>

          {/* Dots */}
          <div className={styles.dots} role="tablist" aria-label="Diapositivas">
            {slides.map((s, i) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={i === current}
                aria-label={`Ir a diapositiva ${i + 1}`}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
            aria-label="Anterior"
          >‹</button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={() => setCurrent((current + 1) % slides.length)}
            aria-label="Siguiente"
          >›</button>
        </div>

        {/* MEGA PROMO — derecha */}
        <aside className={styles.megaPromo} aria-label="Producto destacado">
          <span className={styles.megaTag}>{megaPromo.tag}</span>
          <div className={styles.megaEmoji} aria-hidden="true">{megaPromo.emoji}</div>
          <h2 className={styles.megaTitle}>{megaPromo.title}</h2>
          <p className={styles.megaSubtitle}>{megaPromo.subtitle}</p>
          <p className={styles.megaPrice}>{megaPromo.price}</p>
          <a href={megaPromo.href} className={styles.megaCta}>{megaPromo.cta}</a>
        </aside>

      </div>
    </section>
  );
}
