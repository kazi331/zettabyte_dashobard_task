"use client"
import Navigation from "@/components/shared/Navigation";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/context/useSidebar";
import { expandedMarginLeft, collapsedMarginLeft } from "@/lib";
import { ReactNode, useState } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => setIsOpen(prev => !prev);
    return (
        <SidebarProvider value={{ isOpen, toggleSidebar }}>
            <div className="min-h-full">
                <Sidebar />
                <main className={`flex-1 min-h-screen transition-all ${isOpen ? expandedMarginLeft : collapsedMarginLeft}`}>
                    <Navigation />
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}
