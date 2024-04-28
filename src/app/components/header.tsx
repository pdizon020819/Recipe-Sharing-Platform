import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";

export default function Header() {
    return (
        <div className="bg-blue-200 fixed h-screen w-10">
            <nav className="mt-20">
                <ul className="mb-5 text-2xl p-2 hover:bg-white"><Link href="/"><IoHome /></Link></ul>
                <ul className="mb-5 text-2xl p-2 hover:bg-white"><Link href="/recipe"><BiSolidFoodMenu /></Link></ul>
            </nav>
        </div>

    )
}