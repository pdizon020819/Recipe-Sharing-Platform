import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { BiSolidFoodMenu, BiSolidCategory } from "react-icons/bi";

export default function Header() {
    return (
        <div className="bg-test2 fixed h-screen w-10 shadow-2xl">
            <nav className="mt-20">
                <ul className="mb-5 text-2xl text-test4 p-2 hover:bg-test4 hover:text-test2"><Link href="/"><IoHome /></Link></ul>
                <ul className="mb-5 text-2xl text-test4 p-2 hover:bg-test4 hover:text-test2"><Link href="/recipe"><BiSolidFoodMenu /></Link></ul>
                <ul className="mb-5 text-2xl text-test4 p-2 hover:bg-test4 hover:text-test2"><Link href="/categories"><BiSolidCategory /></Link></ul>
            </nav>
        </div>

    )
}