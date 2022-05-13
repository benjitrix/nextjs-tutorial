import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Project List</title>
        <meta name="keywords" content="projects" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus rem voluptatibus delectus, velit libero ea, consectetur earum perspiciatis modi magni, omnis veniam expedita fugit amet consequatur tempora illum magnam non. Laudantium, exercitationem dicta. Maiores adipisci vel nesciunt quasi provident molestias, beatae quos aliquam numquam dolor quas, totam quis necessitatibus voluptates.
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veniam maxime laudantium molestiae temporibus doloremque, consequuntur quidem ipsa delectus labore quaerat recusandae optio, minus quod doloribus iste quos. Neque, commodi!
        </p>

        <Link href="/projects"><a className={styles.btn}>See Projects Listing</a></Link>
        <Link href="/users"><a className={styles.btn}>See Users List</a></Link>
      </div>
    </>
  )
}
