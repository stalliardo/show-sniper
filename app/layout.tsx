import './globals.css'
import Navbar from '@components/Navbar'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Film Sniper',
  description: 'Find what services a film is on and for how much', // TODO
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
