import './globals.css'

export const metadata = {
  title: 'Czerwone Łąki AI',
  description: 'AI Booking System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
