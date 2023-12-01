import React, { useState } from "react";
import {
  CustomTableContainer,
  CustomTable,
  CustomTableHead,
  CustomTableCell,
  CustomTableRow,
  ActionButton,
  ActionButtonContainer,
  CustomImage,
} from "../../../styles/postscomponents/poststable/stylepostsTable";

import { TableRow, TableCell, TableBody } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { useGetPosts } from "../../../customhooks/posthooks/useGetPosts";
import CircularProgress from "@mui/material/CircularProgress";
import { TablePagination } from "@mui/material";
const PostsTable = ({ onDeleteClick }) => {
  const { postData, isLoading, isSuccess, handleView, handleEdit } =
    useGetPosts();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const slicedData = postData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "8vh",
        }}
      >
        <CircularProgress sx={{ color: "black" }} />
      </div>
    );
  }
  if (isSuccess) {
    return (
      <>
        <CustomTableContainer>
          <CustomTable>
            <CustomTableHead>
              <TableRow>
                <CustomTableCell>ID</CustomTableCell>
                <CustomTableCell>User</CustomTableCell>
                <CustomTableCell>Post Name</CustomTableCell>
                <CustomTableCell>Content</CustomTableCell>
                <CustomTableCell>Actions</CustomTableCell>
              </TableRow>
            </CustomTableHead>
            <TableBody>
              {slicedData
                .slice()
                .reverse()
                .map((post, index) => (
                  <CustomTableRow key={post.id}>
                    <TableCell>{post.id}</TableCell>

                    <TableCell>
                      <CustomImage src={post?.user?.photo} alt="" />
                    </TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.content}</TableCell>
                    <TableCell>
                      <ActionButtonContainer>
                        <ActionButton onClick={() => handleView(post.id)}>
                          <VisibilityRoundedIcon
                            sx={{
                              fontSize: "20px",
                              color: "green",
                              cursor: "pointer",
                            }}
                          />
                        </ActionButton>
                        <ActionButton onClick={() => handleEdit(post.id)}>
                          <ModeEditRoundedIcon
                            sx={{
                              fontSize: "20px",
                              color: "blue",
                              cursor: "pointer",
                            }}
                          />
                        </ActionButton>
                        <ActionButton onClick={() => onDeleteClick(post.id)}>
                          <DeleteRoundedIcon
                            sx={{
                              fontSize: "20px",
                              color: "red",
                              cursor: "pointer",
                            }}
                          />
                        </ActionButton>
                      </ActionButtonContainer>
                    </TableCell>
                  </CustomTableRow>
                ))}
            </TableBody>
          </CustomTable>
        </CustomTableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={postData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    );
  }
};

export default PostsTable;
