import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import contactStyle from '../public/css/contact.module.css';

export default function Contact() {
  return (
    <Layout>
      <h1 className={contactStyle.contactContainer}>Contact us</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}