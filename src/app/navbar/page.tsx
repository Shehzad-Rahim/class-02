import Link from "next/link";

export default function Navbar() {
  return (
    <>
    <nav id="navbar" className="bg-black p-4 flex justify-center">
    
      <ul className="flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/info">About me</Link>
        </li>
        <li>
          <Link href="/education">Education</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}
