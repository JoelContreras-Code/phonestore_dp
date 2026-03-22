export const metadata = {
  title: 'TechStore',
  description: 'Plataforma ecommerce de productos tecnológicos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
