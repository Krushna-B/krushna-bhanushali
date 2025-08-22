"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button} from "@/components/ui/button";
import { Send, Menu,Sun, Laptop,Moon} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";




 const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#work", label: "My Work" },
    {href:'#skills', label: "Skills"}
    ];

    const colorThemes = [
        { label: "Light", value: "light", icon: <Sun className="mr-2 h-4 w-4" /> },
        { label: "Dark", value: "dark", icon: <Moon className="mr-2 h-4 w-4" /> },
        { label: "System", value: "system", icon: <Laptop className="mr-2 h-4 w-4" /> },
    ];

export default function NavBar(){
    const { theme, setTheme } = useTheme();
   

    return( 
        

    <nav
      className={` fixed top-0 left-0 z-50 w-full bg-background/100 backdrop-blur-lg px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center`}
    >
            
            <div className="hidden md:flex items-end ">
                <NavigationMenu>
                <NavigationMenuList>
                    {navItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink
                        href={item.href}
                        className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
                        >
                        {item.label}
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
                </NavigationMenu>
            </div>

             <div className="hidden md:flex justify-end">
                <Button asChild variant="ghost" size="sm" className="text-sm">
                <Link href="#contact" className="flex items-center">
                    Contact Me<Send className="h-4 w-4" />
                </Link>
                </Button>
                
                {/* <div className="pl-5">
                 <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                    <Button variant="default" size="sm">
                       {theme === "dark" ? (
                            <Moon className="h-6 w-6" />
                        ) : (
                            <Sun className="h-6 w-6" />
                        )}
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-40">
                        {colorThemes.map( (item) => (
                        <DropdownMenuItem key={item.label} onSelect={() => setTheme(item.value)}>
                          <div className="flex items-center">
                            {item.icon}
                            <span>{item.label}</span>
                            </div>
                        </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                </div> */}
         </div>
       

             <div className="md:hidden">
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                    <Menu className="h-6 w-6 text-foreground" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                    {navItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                        <Link
                        href={item.href}
                        className="block w-full px-4 py-2 text-foreground hover:bg-muted"
                        >
                        {item.label}
                        </Link>
                    </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </nav>        
    );
}



           