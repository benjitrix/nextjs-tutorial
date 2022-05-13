import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
  return ( 
    <>
      <Head>
        <title>About</title>
        <meta name="keywords" content="projects" />
      </Head>
      <div className={styles.container}>
        <h1>About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus rem voluptatibus delectus, velit libero ea, consectetur earum perspiciatis modi magni, omnis veniam expedita fugit amet consequatur tempora illum magnam non. Laudantium, exercitationem dicta. Maiores adipisci vel nesciunt quasi provident molestias, beatae quos aliquam numquam dolor quas, totam quis necessitatibus voluptates.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque veniam maxime laudantium molestiae temporibus doloremque, consequuntur quidem ipsa delectus labore quaerat recusandae optio, minus quod doloribus iste quos. Neque, commodi!
        </p>
      </div>
    </>
  );
}
 
export default About;