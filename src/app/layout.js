import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex justify-center min-h-screen w-full'>
        <div className='w-[85%] py-8 text-lg flex flex-col gap-10'>
          <Navbar />

          {children}

          <footer className='mt-auto relative z-10'>
          <Footer />
          </footer>

        </div>
      </body>
    </html>
  )
}