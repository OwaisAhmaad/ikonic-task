import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const CustomTableContainer = styled(TableContainer)(({ theme }) => ({
  maxWidth: "100%",
  padding: "10px 30px",
  marginTop: theme.spacing(2),
}));

export const CustomTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

export const CustomTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "black",
  "& th": {
    color: "white",
  },
}));

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
}));

export const CustomTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const ActionButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
export const ActionButton = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const CustomImage = styled("img")(({ theme }) => ({
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "black",
}));
