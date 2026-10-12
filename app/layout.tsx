import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export const metadata:Metadata={title:'Custom Cakes — Your Cake. Your Way.',description:'Premium custom cakes designed around your celebration in Bangalore.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}<Footer/></body></html>}
