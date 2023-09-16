"use client"

import * as React from "react"
import NextLink from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"

const components: { title: string; href: string; target?: string; description: string }[] = [
  {
    title: "x.com",
    href: "https://x.com/schoolboytom",
    target: "_blank",
    description:
      "My semi-formuled thoughts.",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/tomekmarciniak/",
    target: "_blank",
    description:
      "My professional self.",
  },
  {
    title: "GitHub",
    href: "https://github.com/mrcnk",
    target: "_blank",
    description:
      "My technical self.",
  }
]

export function Navbar() {
  return (
    <NavigationMenu className="py-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NextLink href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              mrcnk
            </NavigationMenuLink>
          </NextLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="https://pallad.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Pallad
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Lightweight, future-proof, and accessible Mina Protocol wallet.
                      <Badge className="mt-2">Coming Soon</Badge>
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="https://minaverse.xyz" target="_blank" title="Minaverse">
                An open source, community-driven explorer for Mina Protocol.
              </ListItem>
              <ListItem href="https://github.com/palladians/herald" target="_blank" title="Herald">
                Credential creation, issuance, and proving framework
              </ListItem>
              <ListItem href="https://palladians.xyz" target="_blank" title="Palladians">
                A collective of friends building open source, Web3 software.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Socials</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  target={component.target}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, target, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          target={target}
          rel="noopener noreferrer"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
