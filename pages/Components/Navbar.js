import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return ( 
    <nav >
    <Image src="/todo_icon.png" width={80} height={80} />
      <h1 className="logo">Portfolio List</h1>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/projects"><a>Projects List</a></Link>
    </nav>
   );
}
 
export default Navbar;