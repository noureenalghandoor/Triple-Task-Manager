"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
    const root = document.documentElement;

    root.classList.add("theme-animate");
    window.setTimeout(() => root.classList.remove("theme-animate"), 300);

    const resolved = theme === "system" ? getSystemTheme() : theme;

    root.classList.toggle("dark", resolved === "dark");
}

export function ThemeSwitcher() {
    const [theme, setTheme] = React.useState<Theme>("system");
    const [mounted, setMounted] = React.useState(false);

    const triggerRef = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        setMounted(true);

        const saved = (localStorage.getItem("theme") as Theme | null) ?? "system";
        setTheme(saved);
        applyTheme(saved);
    }, []);

    React.useEffect(() => {
        if (!mounted) return;
        if (theme !== "system") return;

        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handler = () => applyTheme("system");

        if (media.addEventListener) media.addEventListener("change", handler);
        else media.addListener(handler);

        return () => {
            if (media.removeEventListener) media.removeEventListener("change", handler);
            else media.removeListener(handler);
        };
    }, [theme, mounted]);

    const setAndPersist = (next: Theme) => {
        setTheme(next);
        localStorage.setItem("theme", next);
        applyTheme(next);
    };

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" aria-label="Toggle theme" disabled>
                <Sun className="h-4 w-4" />
            </Button>
        );
    }

    const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Laptop;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    ref={triggerRef}
                    variant="outline"
                    size="icon"
                    aria-label="Theme switcher"
                >
                    <Icon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                // ✅ Prevent Radix from re-focusing the trigger (removes lingering ring)
                onCloseAutoFocus={(e) => {
                    e.preventDefault();
                    triggerRef.current?.blur();
                }}
            >
                <DropdownMenuItem onClick={() => setAndPersist("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setAndPersist("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setAndPersist("system")}>
                    <Laptop className="mr-2 h-4 w-4" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}