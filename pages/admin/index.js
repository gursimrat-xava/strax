import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '../../components/admin/adminlayout';
import homeStyle from '../../public/css/home.module.css';
import Image from 'next/image';



export default function Home() {
  return (
    <AdminLayout>
      <div>
       Admin panel homepage here
      </div>
    </AdminLayout>
  )
}