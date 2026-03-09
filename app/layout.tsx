export const metadata = {
  title: "SSGPT6",
  description: "Simple AI for Real Life"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  )
}