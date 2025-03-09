"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/register";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"/logo.svg"}
            alt="logo.svg"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold">Cosmos</span>
        </Link>
        <div className="flex bg-[hsl(0,0%,98%)] items-center space-x-4">
          <Link
            href={"https://www.linkedin.com/company/official-cosmos"}
            target="_blank"
          >
            <Button variant="outline" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
          </Link>
          <Link href={"https://github.com/official-cosmos"} target="_blank">
            <Button variant="outline" size="icon">
              <Github className="w-5 h-5" />
            </Button>
          </Link>
          <Button>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
