'use client';

import { LogoutButton } from "@/components/auth/logout-button";
import { SettingsButton } from "@/components/settings/settings-button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import { PageTitle } from "./page-title";
import { ProUpgradeButton } from "@/components/settings/pro-upgrade-button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface AppHeaderProps {
  children?: React.ReactNode;
  showUpgradeButton?: boolean;
}

export function AppHeader({ children, showUpgradeButton = true }: AppHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 border-b border-slate-700/50 backdrop-blur-xl fixed top-0 left-0 right-0 z-40 bg-slate-900/80">
      <div className="max-w-[2000px] mx-auto h-full px-4 flex items-center justify-between">
        {/* Left Section - Logo and Title */}
        <div className="flex items-center gap-3 min-w-0 flex-shrink">
          <Logo className="text-xl flex-shrink-0 text-white" />
          <div className="h-5 w-px bg-slate-600 hidden sm:block flex-shrink-0" />
          <div className="flex items-center min-w-0 max-w-[140px] sm:max-w-[300px] lg:max-w-[600px]">
            <div className="truncate max-w-[80ch] overflow-hidden text-ellipsis text-slate-200">
              <PageTitle />
            </div>
          </div>
        </div>

        {/* Right Section - Navigation Items */}
        <div className="flex items-center flex-shrink-0">
          {children ? (
            children
          ) : (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2">
                {showUpgradeButton && (
                  <>
                    <ProUpgradeButton />
                    <div className="h-4 w-px bg-slate-600 ml-3" />
                  </>
                )}
                
                <div className="flex items-center gap-1">
                  <Link 
                    href="/profile" 
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-lg",
                      "text-sm font-medium text-slate-300 hover:text-white",
                      "hover:bg-slate-800/50 transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                    )}
                  >
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Profile</span>
                  </Link>
                  <SettingsButton />
                  <LogoutButton />
                </div>
              </nav>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-9 w-9 text-slate-300 hover:text-white hover:bg-slate-800/50"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-slate-900 border-slate-700">
                  <SheetHeader>
                    <SheetTitle className="text-white">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 pt-6">
                    {showUpgradeButton && <ProUpgradeButton className="w-full" />}
                    <Link
                      href="/profile"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg",
                        "text-sm font-medium text-slate-300 hover:text-white",
                        "hover:bg-slate-800/50 transition-all duration-200"
                      )}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <div className="px-4">
                      <SettingsButton className="w-full justify-start" />
                    </div>
                    <div className="px-4">
                      <LogoutButton className="w-full justify-start" />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </>
          )}
        </div>
      </div>
    </header>
  );
}