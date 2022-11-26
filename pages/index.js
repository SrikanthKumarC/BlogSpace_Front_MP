import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import LeftSidebar from '../components/LeftSidebar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import RightSidebar from '../components/RightSidebar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Space</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav home={true}/>
      <div className="mt-2 sm:grid grid-cols-6 gap-x-1 gap-y-3 grid-flow-col sm:grid-flow-row ">
        <div className=" min-h-[50px] col-span-1 "><LeftSidebar /></div>
        <div className="col-span-1 order-1  px-2 sm:pl-4"><RightSidebar /></div>
        <div className="col-span-4 order-0"><Main /></div>
      </div>
      <Footer />
    </div>
  )
}
