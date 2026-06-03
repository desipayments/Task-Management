import React from "react";
import { Link } from "wouter";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="OneBalance"
            className="h-8 w-8 object-contain"
          />
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block">
            TaskBalance
          </span>
        </Link>
      </div>
    </header>
  );
}
