import Link from "next/link";
import Profile from "./profile";

function Navbar() {
    return (
        <div className="flex justify-between items-center h-20">
            <Link href="/">
                <h1 className="text-xl font-bold">Logo</h1>
            </Link>
            <Profile />
        </div>
    );
}
export default Navbar;