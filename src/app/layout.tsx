import type { Metadata } from 'next'
import { Cairo, Space_Mono } from 'next/font/google'
import { AppProvider } from '@/context/AppContext'
import './globals.css'

const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

const mono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'S2H — From Screen to Reality | Custom 3D Figures Egypt',
  description: 'Custom 3D printed figures of your favourite characters. Anime, Marvel, Football icons and more. Delivered anywhere in Egypt. Cash on delivery.',
  keywords: ['3D figures Egypt', 'custom figures Cairo', 'anime figures Egypt', 'طباعة ثلاثية الأبعاد مصر', 'فيجورات مخصصة'],
  openGraph: {
    title: 'S2H — From Screen to Reality',
    description: 'Custom 3D printed figures. Delivered anywhere in Egypt.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cairo.variable} ${mono.variable}`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
