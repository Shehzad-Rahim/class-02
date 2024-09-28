import Navbar from "../navbar/page"
import Link from "next/link"
export default function Education(){
    return(
        <>
        <nav>{Navbar()}</nav>
        <div className="card">
        <div className="card-content">
            <h1>Education</h1>
            <ul>
                <li>Matric: abc school</li>
                <li>Inter: abc college</li>
                <li>Masters: abc university</li>
                <li>Certification: abc academy</li>
            </ul>
        </div>
        <div className="card-buttons flex justify-center">
            <Link href="/skills" className="button"> ➡ </Link>
            <Link href="/info" className="button"> ⬅ </Link>
        </div>
        </div>
        </>
    )
}