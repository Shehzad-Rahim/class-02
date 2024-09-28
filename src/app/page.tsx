import Navbar from "./navbar/page"
import Link from "next/link"
export default function Home(){
  return(
    <>
    <nav>{Navbar()}</nav>
    <div className="content flex ">
   <div className="p-32">
     <h2 className="text-4xl text-blue-800">Welcome to my Resume site</h2>
     <p className="text-2xl">This is my resume site, <br /> Here you can find out about me and <br /> my skills in Technology </p>
   </div>

   <div className="card ">
        <div className="card-content">
            <h1 className="text-blue-800">Shehzad Rahim</h1>
           <div className="details">
           "Hi, I'm Shehzad, a passionate web developer with 1 year of hands-on experience building responsive, user-friendly websites. Skilled in HTML, CSS, JavaScript, and TypeScript, I love turning ideas into functional and visually appealing web experiences. I've worked on projects ranging from simple static websites to dynamic applications, always focusing on clean code and seamless user interaction. Let's connect and create something amazing together!"
           </div>
        </div>
        <div className="card-buttons flex justify-center">
            <Link href="/info" className="button"> ➡ </Link>
            
        </div>
        </div>

   </div>
    </>
  )
}