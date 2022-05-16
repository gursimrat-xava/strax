import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import AdminHeader from './adminheader';
import AdminFooter from './adminfooter';


export default function Adminlayout({children}) {
  return (
    <div >
      <AdminHeader />
        <main>
            {children}
        </main>
      <AdminFooter />
    </div>
  )
}
