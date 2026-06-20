import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans, Montserrat } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StickyBar } from '@/components/sticky-bar'
import './globals.css'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elitedentalatelier.com'),
  title: {
    default: 'Élite Dental Atelier Lagos | West Africa\'s Premier Dental Institution',
    template: '%s | Élite Dental Atelier Lagos',
  },
  description:
    'West Africa\'s most acclaimed dental institution. JCI-accredited, delivering world-class implants, smile design, porcelain veneers and invisible aligners on Victoria Island, Lagos. 3,500+ smiles transformed across 18 years of excellence.',
  keywords: [
    'dental clinic Lagos',
    'dental implants Nigeria',
    'smile design Lagos',
    'veneers West Africa',
    'cosmetic dentistry Lagos',
    'JCI accredited dental',
    'invisible aligners Nigeria',
    'luxury dental Lagos',
  ],
  generator: 'Élite Dental Atelier',
}

export const viewport: Viewport = {
  themeColor: '#0D6B47',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} ${montserrat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBar />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
