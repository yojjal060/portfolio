import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yojjal Sharma - Portfolio',
  description: 'Created with Passion',
  generator: 'heart',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
