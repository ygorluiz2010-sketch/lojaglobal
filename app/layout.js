export const metadata = {
  title: "Loja Global",
  description: "Marketplace estilo Shopee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
