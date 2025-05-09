import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="bg-white flex justify-between text-center p-4 gap-4">
            <div className="border border-black rounded-lg p-2 text-black">
                <h4>No. of Posts</h4>
                <p>12</p>
            </div>
            <Link href={"/blog/create"}><button className="bg-blue-500 py-3 px-2 rounded-md">Create Post</button></Link>
            
        </div>
    )
}