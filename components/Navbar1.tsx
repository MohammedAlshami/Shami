"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-3xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-evenly w-full items-center text-center">
          <div className="flex gap-4 items-center">
            <MenuItem setActive={setActive} active={active} item="Me">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/Memories">Memories</HoveredLink>
                <HoveredLink href="/Places">Places</HoveredLink>
                <HoveredLink href="/People">People</HoveredLink>
                <HoveredLink href="/Map">Map</HoveredLink>
                <HoveredLink href="/Timeline">Timeline</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Collection">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/Books">Books</HoveredLink>
                <HoveredLink href="/Art">Art</HoveredLink>
                <HoveredLink href="/Shows">Shows</HoveredLink>
                <HoveredLink href="/Music">Music</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <div className="text-2xl font-bold text-white">Shami</div>
          <div className="flex gap-4 items-center">
            <MenuItem setActive={setActive} active={active} item="Professional">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/Resume">Resume</HoveredLink>
                <HoveredLink href="/Projects">Projects</HoveredLink>
                <HoveredLink href="/Articles">Articles</HoveredLink>
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item="Organizations"
            >
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Drangue"
                  href="https://drangue.ai/"
                  src="/Logo/drangue_light_logo.svg"
                  description="Fighting Natural Disasters"
                />
                <ProductItem
                  title="DuriUI"
                  href="https://drangue.ai/"
                  src="/Logo/drangue_light_logo.svg"
                  description="React Native Components"
                />
              </div>
            </MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}
