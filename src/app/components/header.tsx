import Link from "next/link";

export default function Header() {
    return (
        // <div>
        //     This is header
        // </div>
        <nav>
            <ul><Link href="/">Homer Simpsonskjgh</Link></ul>
            <ul><Link href="/recipe">Recipes</Link></ul>
        </nav>
    )
}