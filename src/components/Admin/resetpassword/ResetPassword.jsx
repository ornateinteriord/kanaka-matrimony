<<<<<<< HEAD
import React, { useState } from "react";
import DataTable from "react-data-table-component";
=======
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from "lodash";
import PaginationDataTable from "../../common/PaginationDataTable";
>>>>>>> 86e228c (New design)
import {
  TextField,
  InputAdornment,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
<<<<<<< HEAD
  Paper,
  
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { getAllUserProfiles, UserResetPassword } from "../../api/Admin";
import { LoadingComponent, TableLoadingComponent } from "../../../App";
=======
  Box,
  useMediaQuery
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { getAllUserProfiles, UserResetPassword } from "../../api/Admin";
>>>>>>> 86e228c (New design)
import { toast } from "react-toastify";
import {
  customStyles,
  getResetPasswordColumns,
} from "../../../utils/DataTableColumnsProvider";
import "./Resetpassword.scss";
<<<<<<< HEAD

const ResetPassword = () => {
=======
import { LoadingTextSpinner } from "../../../utils/common";
import { useGetSearchProfiles } from "../../api/User";

const ResetPassword = () => {
  // State management
>>>>>>> 86e228c (New design)
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
<<<<<<< HEAD
  const { data: users = [], isLoading, isError, error } = getAllUserProfiles();
  const { mutateAsync: resetPassword, isPending } = UserResetPassword();

  if (isError) {
    toast.error(error.message);
  }

  const filteredRecords = users.filter((record) => {
    const isAdmin = record?.user_role?.toLowerCase() === "admin";
    return (
      !isAdmin &&
      [
        record.first_name,
        record.last_name,
        record.username,
        record.registration_no,
        record.password,
      ].some(
        (field) =>
          field && field.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  });

  const handleSearch = (e) => setSearch(e.target.value);
=======
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 50 });
  
  // API calls
  const { 
    data, 
    isPending: isLoading, 
    isError, 
    error, 
    mutate: fetchUsers 
  } = getAllUserProfiles();
  
  const { 
    data: searchedResult = [], 
    isFetching: isSearchLoading, 
    refetch: searchUser 
  } = useGetSearchProfiles(search, true);
  
  const { mutateAsync: resetPassword, isPending } = UserResetPassword();
  const isMobile = useMediaQuery('(max-width:600px)');

  // Data handling
  const users = data?.content || [];
  const displayData = search ? searchedResult : users;

  // Debounced search
  const debouncedSearch = useCallback(
    debounce((searchValue) => {
      if (searchValue) searchUser();
    }, 500),
    [searchUser]
  );

  // Effects
  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  useEffect(() => {
    if (!search) {
      fetchUsers({ page: paginationModel.page, pageSize: paginationModel.pageSize });
    }
  }, [paginationModel.page, paginationModel.pageSize, fetchUsers, search]);

  useEffect(() => {
    if (isError) toast.error(error.message);
  }, [isError, error]);

  // Handlers
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

>>>>>>> 86e228c (New design)
  const handleOpenDialog = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedUser(null);
    setNewPassword("");
    setConfirmPassword("");
    setOpenDialog(false);
  };

  const handlePasswordReset = async () => {
    if (!selectedUser) return;
<<<<<<< HEAD
=======
    
>>>>>>> 86e228c (New design)
    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both password fields");
      return;
    }
<<<<<<< HEAD
=======
    
>>>>>>> 86e228c (New design)
    if (newPassword !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
<<<<<<< HEAD
=======

>>>>>>> 86e228c (New design)
    try {
      await resetPassword({
        regno: selectedUser.registration_no,
        password: newPassword,
<<<<<<< HEAD
      });
      handleCloseDialog();
=======
      }, {
        onSuccess: () => {
          toast.success("Password reset successfully");
          fetchUsers({ page: paginationModel.page, pageSize: paginationModel.pageSize });
          handleCloseDialog();
        },
        onError: (error) => {
          toast.error(error.message);
        }
      });
>>>>>>> 86e228c (New design)
    } catch (error) {
      console.error(error);
    }
  };

<<<<<<< HEAD
=======
  // Memoized columns
  const columns = useMemo(
    () => getResetPasswordColumns(handleOpenDialog),
    [handleOpenDialog]
  );

>>>>>>> 86e228c (New design)
  return (
    <div className="reset-password-user" style={{ padding: "20px" }}>
      
        <Typography
          variant="h4"
<<<<<<< HEAD
          fontWeight={600}
=======
          fontWeight={500}
>>>>>>> 86e228c (New design)
          color="#34495e"
          fontFamily={"Outfit sans-serif"}
          sx={{textAlign:{xs:"center",sm:"left"},mb:"10px"}}
        >
          Reset Password
        </Typography>

<<<<<<< HEAD
        <div className="search-div">
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            onChange={handleSearch}
            placeholder="Search records"
            autoComplete="off"
            sx={{ width: { xs: '100%',sm:"auto", md: 'auto' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ marginRight: "8px" }}>
                  <FaSearch />
                </InputAdornment>
              ),
            }}
          />
        </div>
     

      <Paper sx={{ mt: 2 }}>
        <DataTable
          columns={getResetPasswordColumns(handleOpenDialog)}
          data={filteredRecords}
          customStyles={customStyles}
          pagination
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6, 10, 15, 20]}
          paginationComponentOptions={{
            rowsPerPageText: "Rows per page:",
            rangeSeparatorText: "of",
          }}
          progressPending={isLoading}
          progressComponent={<TableLoadingComponent />}
          noDataComponent={
            <Typography padding={3} textAlign="center">
              No records found
            </Typography>
          }
           persistTableHead
          highlightOnHover
        />
      </Paper>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle
          sx={{
            color: "#34495e",
            textTransform: "capitalize",
            fontWeight: 700,
          }}
        >
          Change Password
        </DialogTitle>
        <DialogContent>
          {isPending ? (
            <LoadingComponent />
          ) : (
            <>
              <TextField
                label="New Password"
                type="password"
                fullWidth
                margin="normal"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={isPending}
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isPending}
              />
            </>
          )}
=======
      <Box 
        sx={{ 
          mb: 3,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          onChange={handleSearch}
          value={search}
          placeholder="Search records"
          autoComplete="off"
          fullWidth={isMobile}
          sx={{ width: { xs: '100%', sm: 300 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <PaginationDataTable
        columns={columns}
        data={displayData}
        customStyles={customStyles}
        isLoading={isLoading || isSearchLoading}
        totalRows={search ? searchedResult.length : data?.totalRecords || 0}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        noDataComponent={<Typography padding={3}>No records found</Typography>}
        progressComponent={<LoadingTextSpinner />}
        disablePagination={!!search}
      />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ color: "#34495e", fontWeight: 400 }}>
          Change Password for {selectedUser?.username}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            disabled={isResetting}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isResetting}
          />
>>>>>>> 86e228c (New design)
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
<<<<<<< HEAD
            color="error"
            disabled={isPending}
=======
            disabled={isResetting}
            sx={{ 
              color: "#fff",
              backgroundColor: "#f44336",
              "&:hover": { backgroundColor: "#d32f2f" },
              fontWeight: 400,
            }}
>>>>>>> 86e228c (New design)
          >
            Cancel
          </Button>
          <Button
            onClick={handlePasswordReset}
<<<<<<< HEAD
            sx={{ color: "#34495e" }}
            disabled={isPending || !newPassword || !confirmPassword}
          >
            Submit
=======
            sx={{ color: "#fff",backgroundColor:"#4caf50","&:hover": {backgroundColor:"#388e3c",},fontWeight: 400, }}
            disabled={isPending || !newPassword || !confirmPassword || newPassword !== confirmPassword}
          >
            {isResetting ? "Submitting..." : "Submit"}
>>>>>>> 86e228c (New design)
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

<<<<<<< HEAD
export default ResetPassword;
=======
export default ResetPassword;
>>>>>>> 86e228c (New design)
