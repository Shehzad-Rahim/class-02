import Navbar from "../navbar/page";
import Link from "next/link";

export default function Experience(){
    return(
        <>
        <nav> {Navbar()}</nav>
        <div className="card">
        <div className="card-content">
            <h1>My Experience</h1>
           <p className="mt-2">One year experience in web development</p>
           <p className="mt-2">Two years experience in mobile reassambeling</p>
        </div>
        <div className="card-buttons flex justify-center">
            <Link href="/skills" className="button"> ⬅ </Link>
        </div>
        </div>
        </>
    )
}