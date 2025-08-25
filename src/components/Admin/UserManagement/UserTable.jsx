<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
=======
import React, { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import PaginationDataTable from "../../common/PaginationDataTable";
>>>>>>> 86e228c (New design)
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  Box,
  Stack,
  InputAdornment,
<<<<<<< HEAD
  Paper,
  useTheme,
  useMediaQuery,
  CircularProgress
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { getAllUserProfiles } from "../../api/Admin";
import {  TableLoadingComponent } from "../../../App";
import toast from "react-hot-toast";
import { customStyles, getUserTableColumns } from "../../../utils/DataTableColumnsProvider";
=======
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { getAllUserProfiles } from "../../api/Admin";
import toast from "react-hot-toast";
import { customStyles, getUserTableColumns } from "../../../utils/DataTableColumnsProvider";
import { LoadingTextSpinner } from "../../../utils/common";
import { useGetSearchProfiles } from "../../api/User";
>>>>>>> 86e228c (New design)

const UserTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
<<<<<<< HEAD
  const { data: users = [], isLoading, isError, error } = getAllUserProfiles();
  const [filteredUsers, setFilteredUsers] = useState([]);
=======
  // State management
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 50 });
>>>>>>> 86e228c (New design)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserType, setSelectedUserType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("status");

<<<<<<< HEAD
=======
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
  } = useGetSearchProfiles(searchTerm, true);

  const users = data?.content || [];
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchValue) => {
      if (searchValue) {
        searchUser();
      } else {
        fetchUsers({ page: paginationModel.page, pageSize: paginationModel.pageSize });
      }
    }, 500),
    [searchUser, fetchUsers, paginationModel]
  );

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Fetch users when pagination changes
  useEffect(() => {
    if (!searchTerm) {
      fetchUsers({ page: paginationModel.page, pageSize: paginationModel.pageSize });
    }
  }, [paginationModel.page, paginationModel.pageSize, fetchUsers, searchTerm]);

  // Handle API errors
>>>>>>> 86e228c (New design)
  useEffect(() => {
    if (isError) {
      toast.error(error.message);
    }
  }, [isError, error]);

<<<<<<< HEAD
  useEffect(() => {
    if (users && users.length > 0) {
      filterUsers(searchTerm, selectedUserType, selectedStatus);
=======
  // Filter users based on search and filters
  useEffect(() => {
    if (users && users.length > 0) {
      if (!searchTerm) {
        filterUsers(searchTerm, selectedUserType, selectedStatus);
      }
    } else {
      setFilteredUsers([]);
>>>>>>> 86e228c (New design)
    }
  }, [users, searchTerm, selectedUserType, selectedStatus]);

  const handleSearch = (value) => {
    setSearchTerm(value);
<<<<<<< HEAD
=======
    debouncedSearch(value);
>>>>>>> 86e228c (New design)
  };

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const formatUserRole = (role) => {
    if (!role) return '';
    if (role.toLowerCase() === "assistance") return "Assistance";
    return role.replace('User', '').replace(/^\w/, c => c.toUpperCase());
  };

<<<<<<< HEAD
  const filterUsers = (search, userType, Status) => {
=======
  const filterUsers = (search, userType, status) => {
>>>>>>> 86e228c (New design)
    let filtered = users.filter(user => {
      const isAdmin = user?.user_role?.toLowerCase() === "admin";
      return !isAdmin;
    });

<<<<<<< HEAD
    filtered = filtered.filter(user => {
      const username = user?.username?.toLowerCase() || '';
      const registration_no = user?.registration_no?.toLowerCase() || '';
      const searchLower = search.toLowerCase();
      return username.includes(searchLower) || registration_no.includes(searchLower);
    });

    if (Status !== "status") {
      filtered = filtered.filter(user => {
        const UserStatus = user?.status?.toLowerCase();
        switch (Status.toLowerCase()) {
          case "active":
            return UserStatus === "active";
          case "inactive":
            return UserStatus === "inactive";
          case "pending":
            return UserStatus === "pending";
          case "expires":
            return UserStatus === "expires";
=======
    // Apply search filter if not using API search
    if (!searchTerm && search) {
      filtered = filtered.filter(user => {
        const username = user?.username?.toLowerCase() || '';
        const registration_no = user?.registration_no?.toLowerCase() || '';
        const searchLower = search.toLowerCase();
        return username.includes(searchLower) || registration_no.includes(searchLower);
      });
    }

    // Apply status filter
    if (status !== "status") {
      filtered = filtered.filter(user => {
        const userStatus = user?.status?.toLowerCase();
        switch (status.toLowerCase()) {
          case "active":
            return userStatus === "active";
          case "inactive":
            return userStatus === "inactive";
          case "pending":
            return userStatus === "pending";
          case "expires":
            return userStatus === "expires";
>>>>>>> 86e228c (New design)
          default:
            return true;
        }
      });
    }

<<<<<<< HEAD
=======
    // Apply user type filter
>>>>>>> 86e228c (New design)
    if (userType !== "all") {
      filtered = filtered.filter(user => {
        const userRole = user?.user_role?.toLowerCase();
        switch (userType.toLowerCase()) {
          case "assistance":
            return userRole === "assistance";
          case "premium":
            return userRole === "premiumuser";
          case "silver":
            return userRole === "silveruser";
          case "free":
            return userRole === "freeuser";
          default:
            return true;
        }
      });
    }

    setFilteredUsers(filtered);
  };

<<<<<<< HEAD
  const paginationComponentOptions = {
    rowsPerPageText: 'Show',
    rangeSeparatorText: 'of',
    noRowsPerPage: false,
  };


=======
  // Determine which data to display
  const displayData = searchTerm ? searchedResult : filteredUsers;
  const isLoadingData = isLoading || isSearchLoading;
>>>>>>> 86e228c (New design)

  return (
    <Box sx={{ 
      padding: { xs: 2, sm: 3, md: 4 },
      marginTop: { xs: '60px', sm: '60px' },
      fontFamily: "Outfit, sans-serif",
      marginLeft: { xs: 0, sm: '20px' },
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <Typography 
        variant="h4"
        fontWeight={600} 
        color="#34495e" 
        fontFamily={"Outfit sans-serif"} 
        marginBottom={3}
        sx={{ textAlign: isMobile ? 'center' : 'left' }}
      >
        User Table
      </Typography>
      
      {/* Filter Options */}
      <Stack 
        direction={{ xs: "column", md: "row" }} 
        spacing={2} 
        mb={2} 
        justifyContent={'space-between'}
        alignItems={{ xs: 'stretch', md: 'center' }}
      >
        <Box sx={{ width: { xs: '100%', md: 'auto' } }}>
          <TextField
            fullWidth={isMobile}
            placeholder="Search by username or reference"
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch />
                </InputAdornment>
              ),
            }}
            sx={{ 
              width: { xs: '100%', sm: '300px' },
              marginBottom: { xs: 0, md: 0 }
            }}
<<<<<<< HEAD
            fontFamily={"Outfit sans-serif"}
=======
>>>>>>> 86e228c (New design)
          />
        </Box>
        
        <Box sx={{ 
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          width: { xs: '100%', md: 'auto' }
        }}>
<<<<<<< HEAD
          <FormControl sx={{ 
            minWidth: { xs: '100%', sm: 200 },
            fontFamily: "Outfit sans-serif"
          }}>
=======
          <FormControl sx={{ minWidth: { xs: '100%', sm: 200 } }}>
>>>>>>> 86e228c (New design)
            <Select 
              value={selectedStatus} 
              onChange={(e) => setSelectedStatus(e.target.value)}
              sx={{ height: '50px' }}
              fullWidth={isMobile}
            >
              <MenuItem value="status">Status</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="expires">Expires</MenuItem>
            </Select>
          </FormControl>
<<<<<<< HEAD
          <FormControl sx={{ 
            minWidth: { xs: '100%', sm: 200 },
            fontFamily: "Outfit sans-serif"
          }}>
=======
          <FormControl sx={{ minWidth: { xs: '100%', sm: 200 } }}>
>>>>>>> 86e228c (New design)
            <Select 
              value={selectedUserType} 
              onChange={handleUserTypeChange}
              sx={{ height: '50px' }}
              fullWidth={isMobile}
            >
              <MenuItem value="all">All Users</MenuItem>
              <MenuItem value="premium">Premium Users</MenuItem>
              <MenuItem value="silver">Silver Users</MenuItem>
              <MenuItem value="Assistance">Assistance Users</MenuItem>
              <MenuItem value="free">Free Users</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      
      {/* DataTable */}
<<<<<<< HEAD
      <Paper sx={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <DataTable
          columns={getUserTableColumns(formatUserRole)}
          data={filteredUsers}
          customStyles={customStyles}
          pagination
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6, 10, 15, 20]}
          paginationComponentOptions={paginationComponentOptions}
          noDataComponent={
            <Typography padding={3} textAlign="center" fontFamily="Outfit">
              No users found matching your criteria.
            </Typography>
          }
          progressPending={isLoading}
          progressComponent={ <TableLoadingComponent />}
          persistTableHead
          highlightOnHover
        />
      </Paper>
=======
      <PaginationDataTable
        columns={getUserTableColumns(formatUserRole)}
        data={displayData}
        customStyles={customStyles}
        isLoading={isLoadingData}
        totalRows={searchTerm ? searchedResult.length : data?.totalRecords || 0}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        rowsPerPageOptions={[6, 10, 15, 20, 50, 1000]}
        noDataComponent={
          <Typography padding={3} textAlign="center" fontFamily="Outfit">
            No users found matching your criteria.
          </Typography>
        }
        progressComponent={<LoadingTextSpinner />}
        disablePagination={!!searchTerm} // Disable pagination when searching
      />
>>>>>>> 86e228c (New design)
    </Box>
  );
};

export default UserTable;