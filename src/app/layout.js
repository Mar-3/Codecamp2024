import { Inter } from 'next/font/google'
import { Navbar } from '../../ui/Navbar'
import './globals.css'
import NoticesProvider from '@contexts/NoticesContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skinnarila Notice Board',
  description: 'Find services and hobbies around you!',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
        <body className='main'>
          <Navbar/>
            <NoticesProvider>
              {children}
            </NoticesProvider>
        </body>
    </html>
  )
}
