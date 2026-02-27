import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Nav from "./components/Nav";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
            <Nav />
            <main
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {children}
            </main>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
