import Link from 'next/link'
import styles from '../../styles/Detail.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map(user => {
    return {
      params: { id: user.id.toString() }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: { user: data }
  }
}

const Details = ({ user }) => {
  return ( 
    <section className="details">
      <h1 className={styles.heading}>Details Page</h1> 
      <Link href='/users'>
        <h1 className={styles.heading}>
          <a className={styles.usersLink}>
          Users' List
          </a>
        </h1>
      </Link>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </section>
   );
}
 
export default Details;