import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import homeStyle from '../public/css/home.module.css';


export default function Home() {
  return (
    <Layout>
      <h1 className={homeStyle.title}>Home Page</h1>
      <h2>
        <Link href="/contact">
          <a>Contact us page</a>
        </Link>
      </h2>
    </Layout>
  )
}