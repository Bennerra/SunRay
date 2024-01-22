import { Box, styled } from "@mui/material";

export const LayoutMenuItem = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.secondary.dark,
  padding: "13px 20px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  boxShadow: "0px 2px 10px 0px rgba(0, 0, 0, 0.10)",
  fontFamily: ["Roboto Slab", "serif"].join(","),
  borderRadius: "11px",
  cursor: "pointer",
}));
