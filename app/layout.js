import './globals.css';

export const metadata = {
  title: 'Phonestore DP | Tecnología al mejor precio',
  description:
    'Phonestore DP — Tu tienda de confianza en celulares, tablets, electrodomésticos y accesorios tecnológicos. Envíos a todo el país.',
  keywords:
    'celulares, smartphones, tablets, electrodomésticos, accesorios tecnológicos, phonestore, tienda tecnología',
  openGraph: {
    title: 'Phonestore DP | Tecnología al mejor precio',
    description: 'Celulares, tablets, electrodomésticos y accesorios con las mejores promociones.',
    url: 'https://phonestore-dp.com',
    siteName: 'Phonestore DP',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
