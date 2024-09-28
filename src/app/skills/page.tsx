import Navbar from "../navbar/page";
import Link from "next/link";
export default function Skills(){
    return(
        <>
        <nav> {Navbar()}</nav>
        <div className="card">
        <div className="card-content">
            <h1>My Skills in IT</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
            </ul>
        </div>
        <div className="card-buttons flex justify-center">
            <Link href="/experience" className="button"> ➡ </Link>
            <Link href="/education" className="button"> ⬅ </Link>
        </div>
        </div>
        </>
    )
}