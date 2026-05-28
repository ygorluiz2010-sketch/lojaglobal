export const metadata = {
  title: "Loja Global",
  description: "Marketplace internacional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
