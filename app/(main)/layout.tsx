"use client";

import React from "react";
import AppBarComponent from "@/components/AppBarComponent";
import { Container, Stack } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
  drawerOpen?: boolean;
  toggleDrawer?: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  drawerOpen,
  toggleDrawer,
}) => {
  return (
    <Stack spacing={2} alignItems={"center"}>
      <AppBarComponent />
      <Container maxWidth="lg" disableGutters>
        <main>{children}</main>
      </Container>
    </Stack>
  );
};

export default Layout;
