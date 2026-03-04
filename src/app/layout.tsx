// src/app/layout.tsx
export const metadata = {
  title: "SSGPT6 Core",
  description: "SSGPT6 Core – Intelligent Digital Access Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial" }}>
        {children}
      </body>
    </html>
  );
}