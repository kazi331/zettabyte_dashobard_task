import { createContext, useContext } from "react";

const sidebarContext = createContext({ isOpen: true, toggleSidebar: () => { } });
export const SidebarProvider = sidebarContext.Provider;

export const useSidebar = () => {
    const sidebarState = useContext(sidebarContext);
    return sidebarState
};
