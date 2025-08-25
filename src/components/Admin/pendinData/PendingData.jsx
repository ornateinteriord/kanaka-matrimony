import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
<<<<<<< HEAD
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Paper,
  Stack,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { getAllUserProfiles } from "../../api/Admin";
import {  TableLoadingComponent } from "../../../App";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
=======
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { getAllAssistancePending } from "../../api/Admin";
import { toast } from "react-toastify";
import PaginationDataTable from "../../common/PaginationDataTable";
>>>>>>> 86e228c (New design)
import {
  customStyles,
  getAssistancePendingColumns,
} from "../../../utils/DataTableColumnsProvider";
<<<<<<< HEAD

const PendingData = () => {
  const { data: users = [], isLoading, isError, error } = getAllUserProfiles();
  const [search, setSearch] = useState("");

  useEffect(() => {
=======
import { LoadingTextSpinner } from "../../../utils/common";

const PendingData = () => {
  const [paginationModel, setPaginationModel] = useState({ 
    page: 0, 
    pageSize: 50 
  });
  const { 
    data, 
    isPending: isLoading, 
    isError, 
    error, 
    mutate: fetchUsers 
  } = getAllAssistancePending();
  const users = data?.content || [];
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers({ 
      page: paginationModel.page, 
      pageSize: paginationModel.pageSize 
    });
  }, [paginationModel.page, paginationModel.pageSize, fetchUsers]);

  useEffect(() => {
>>>>>>> 86e228c (New design)
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

<<<<<<< HEAD
  const filteredRecords = users.filter((record) => {
    const isAdmin = record?.user_role?.toLowerCase() === "admin";
    const isPending = record?.status?.toLowerCase() === "pending"; // Check if status is "pending"

    return (
      !isAdmin &&
      isPending && // Only include pending users
      [
        record.registration_no?.toString().toLowerCase(),
        record.first_name?.toLowerCase(),
        record.username?.toLowerCase(),
        record.mobile_no?.toString().toLowerCase(),
        record.caste?.toString().toLowerCase(),
        record.type_of_user?.toString().toLowerCase(),
      ].some((field) => field?.includes(search.toLowerCase()))
    );
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

=======
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredRows = users.filter((data) => {
    const isAdmin = data?.user_role?.toLowerCase() === "admin";
   
    return (
      !isAdmin &&
      (search === "" ||
        data.registration_no
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        data.first_name?.toLowerCase().includes(search.toLowerCase()) ||
        data.username
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        data.mobile_no
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        data.caste?.toString().toLowerCase().includes(search.toLowerCase()) ||
        data.type_of_user
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase()))
    );
  });

>>>>>>> 86e228c (New design)
  return (
    <Box p={5} marginTop={6}>
      <Typography
        variant="h4"
        color="#34495e"
        fontWeight={600}
        fontFamily="Outfit sans-serif"
        sx={{ textAlign: { xs: "center", sm: "left" }, mb: "10px" }}
      >
        Pending Data
      </Typography>

      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          label="Search"
          placeholder="Search user"
          value={search}
          onChange={handleSearch}
          sx={{ width: { xs: "100%", sm: "auto", md: "auto" } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
        />
      </Box>

<<<<<<< HEAD
      <Paper>
        <DataTable
          columns={getAssistancePendingColumns()}
          data={filteredRecords}
          customStyles={customStyles}
          pagination
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6, 10, 15, 20]}
          paginationComponentOptions={{
            rowsPerPageText: "Rows per page:",
            rangeSeparatorText: "of",
            noRowsPerPage: false,
          }}
          noDataComponent={
            <Typography padding={3}>No data available</Typography>
          }
          progressPending={isLoading}
          progressComponent={<TableLoadingComponent />}
           persistTableHead
          highlightOnHover
        />
      </Paper>
=======
      <PaginationDataTable
        columns={getAssistancePendingColumns()}
        data={filteredRows}
        customStyles={customStyles}
        isLoading={isLoading}
        totalRows={data?.totalRecords || 0}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        rowsPerPageOptions={[6, 10, 15, 20, 50, 1000]}
        noDataComponent={<Typography padding={3}>No data available</Typography>}
        progressComponent={<LoadingTextSpinner />}
        persistTableHead
        highlightOnHover
      />
>>>>>>> 86e228c (New design)
    </Box>
  );
};

<<<<<<< HEAD
export default PendingData;
=======
export default PendingData;
>>>>>>> 86e228c (New design)
