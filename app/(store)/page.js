import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryBar from '@/components/CategoryBar';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Phonestore DP | Inicio',
  description:
    'Descubre las mejores ofertas en celulares, tablets, electrodomésticos y accesorios. Phonestore DP, tecnología al mejor precio.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoryBar />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}
