import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Container({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn('max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8', className)}>{children}</div>
    )
}
