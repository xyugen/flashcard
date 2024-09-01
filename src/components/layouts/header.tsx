import React from "react";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 md:px-8 border-b border-b-muted">
            <Link href={"/"} className="flex items-center gap-2">
                <h1 className="text-2xl tracking-wide font-semibold">
                    Flashcard
                </h1>
            </Link>
            <ThemeToggle />
        </header>
    );
};

export default Header;
