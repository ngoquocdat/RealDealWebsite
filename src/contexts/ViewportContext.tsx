import { createContext, useContext, ReactNode, useMemo } from "react";

import { useMediaQuery } from "@mui/material";

export interface ViewportContext {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  currentViewport: "desktop" | "tablet" | "mobile";
}

const initialValue: ViewportContext = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  currentViewport: "desktop"
};

const viewportContext = createContext(initialValue);

const useViewport = () => useContext(viewportContext);

const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery("(min-width:320px) and (max-width:567px)");
  const isTablet = useMediaQuery("(min-width:568px) and (max-width:1024px)");
  const isDesktop = useMediaQuery("(min-width:1025px)");

  const currentViewport = useMemo(() => {
    return isMobile ? "mobile" : isTablet ? "tablet" : "desktop";
  }, [isMobile, isTablet, isDesktop]);

  return (
    <viewportContext.Provider
      value={{
        isMobile,
        isTablet,
        isDesktop,
        currentViewport
      }}
    >
      {children}
    </viewportContext.Provider>
  );
};

export { useViewport };

export default ViewportProvider;
