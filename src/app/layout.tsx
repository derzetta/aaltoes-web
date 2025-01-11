import './globals.css'
import { GeistMono } from 'geist/font/mono'

export const metadata = {
  title: 'Aaltoes 2025',
  description: 'Aaltoes community platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        {children}
      </body>
    </html>
  )
} 