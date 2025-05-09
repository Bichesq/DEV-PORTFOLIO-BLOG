import Link from "next/link";

export default function Navbar(){
    return (
        <nav>
            <div className="bg-blue-800 py-4 flex justify-between ">
                <div className="text-3xl text-white ms-4">
                    Dev Portfolio
                </div>
                <div className="flex py-2 gap-3">
                    <Link href={"/home"}>Home</Link>
                    <Link href={"/about"}>About Us</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={"/contact"}>contact</Link>
                </div>
                <div className="flex gap-3 py-2 me-4">
                    <p>Login</p>
                    <p>/</p>
                    <p>Sign Up</p>
                </div>
            </div>

        </nav>
    )
}