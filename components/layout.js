import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';


export default function Layout({children}) {
  return (
    <div className="container">
      <Header />
        <main>
            {children}
        </main>
      <Footer />
    </div>
  )
}
