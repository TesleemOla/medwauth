import Link from "next/link";
import AuthButton from "./AuthButton";



const NavBar =()=>{
    return(
        <nav className="py-4">
            <Link href="/">
                HomePage
            </Link>
            <AuthButton typer="signIn" />
            <AuthButton typer="signOut" />
            
        </nav>
    )
}


export default NavBar
