import Navbar from "../navbar/page"
import Link from "next/link"
export default function Info(){
    return(
        <>
        <nav>{Navbar()}</nav>
        <div className="card">
        <div className="card-content">
            <h1>About Me</h1>
            <ul>
                <li> <span className="text-2xl mr-3 ">Name:</span> Shehzad Rahim</li>
                <li> <span className="text-2xl mr-3 ">Profession:</span>Software Engineer</li>
                <li> <span className="text-2xl mr-3 ">Email:</span>shehzad@gmail.com</li>
                <li> <span className="text-2xl mr-3 ">Contact:</span>+923102858075</li>                
            </ul>
        </div>
        <div className="card-buttons flex justify-center">
            <Link href="/education" className="button"> ➡ </Link>
            <Link href="/" className="button"> ⬅ </Link>
        </div>
        </div>
        </>
    )
}