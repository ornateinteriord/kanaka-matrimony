import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import DataTable from "react-data-table-component";
=======
import PaginationDataTable from "../../common/PaginationDataTable";
>>>>>>> 86e228c (New design)
import {
  Box,
  Typography,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
<<<<<<< HEAD
import { getAllUserProfiles } from "../../api/Admin";
=======
import { getAllAssistanceSuccess, getAllUserProfiles } from "../../api/Admin";
>>>>>>> 86e228c (New design)
import {
  customStyles,
  getAssistanceSuccessColumns,
} from "../../../utils/DataTableColumnsProvider";
<<<<<<< HEAD
import {  TableLoadingComponent } from "../../../App";

const SuccessData = () => {
  const { data: users = [], isLoading, isError, error } = getAllUserProfiles();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [search, setSearch] = useState("");

  useEffect(() => {
=======
import { LoadingTextSpinner } from "../../../utils/common";


const SuccessData = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 50 });
  const { data, isPending: isLoading, isError, error, mutate: fetchUsers } = getAllAssistanceSuccess();
  const users = data?.content || [];
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers({ page: paginationModel.page, pageSize: paginationModel.pageSize });
  }, [paginationModel.page, paginationModel.pageSize, fetchUsers]);

  useEffect(() => {
>>>>>>> 86e228c (New design)
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

<<<<<<< HEAD
  const filterCurrentRowData = users.filter((data) => {
    const isAdmin = data?.user_role?.toLowerCase() === "admin";
    const isActive = data?.status?.toLowerCase() === "active";

    return (
      !isAdmin &&
      isActive &&
=======
  const filteredRows = users.filter((data) => {
    const isAdmin = data?.user_role?.toLowerCase() === "admin";
   
    return (
      !isAdmin &&
>>>>>>> 86e228c (New design)
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

<<<<<<< HEAD
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedRecords = filterCurrentRowData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

=======
>>>>>>> 86e228c (New design)
  return (
    <div style={{ padding: "20px", paddingLeft: "30px", paddingTop: "100px" }}>
      <Typography
        variant="h4"
        gutterBottom
        color="#34495e"
        fontWeight={600}
        fontFamily={"Outfit sans-serif"}
        sx={{ textAlign: { xs: "center", sm: "left" }, mb: "10px" }}
      >
        Success Data
      </Typography>
<<<<<<< HEAD

=======
>>>>>>> 86e228c (New design)
      <Box display="flex" alignItems="center" gap={2}>
        <TextField
          placeholder="Search user"
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleSearch}
<<<<<<< HEAD
          sx={{ width: { xs: "100%", sm: "auto", md: "auto" },mb:"20px" }}
=======
          sx={{ width: { xs: "100%", sm: "auto", md: "auto" }, mb: "20px" }}
>>>>>>> 86e228c (New design)
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" style={{ marginRight: "8px" }}>
                <FaSearch />
              </InputAdornment>
            ),
          }}
        />
      </Box>
<<<<<<< HEAD

      <Paper>
        <DataTable
          columns={getAssistanceSuccessColumns()}
          data={filterCurrentRowData}
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
        columns={getAssistanceSuccessColumns()}
        data={filteredRows}
        customStyles={customStyles}
        isLoading={isLoading}
        totalRows={data?.totalRecords || 0}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        rowsPerPageOptions={[6, 10, 15, 20, 50, 1000]}
        noDataComponent={<Typography padding={3}>No data available</Typography>}
        progressComponent={<LoadingTextSpinner />}
      />
>>>>>>> 86e228c (New design)
    </div>
  );
};

export default SuccessData;
