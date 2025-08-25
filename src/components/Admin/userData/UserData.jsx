<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
=======
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PaginationDataTable from "../../common/PaginationDataTable";
>>>>>>> 86e228c (New design)
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Typography,
  InputAdornment,
<<<<<<< HEAD
  Paper,
  CircularProgress,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import "./UserData.css";
import { getAllUserProfiles, UpgradeUserStatus } from "../../api/Admin";
import toast from "react-hot-toast";
import { customStyles, getUserDataColumns } from "../../../utils/DataTableColumnsProvider";
import { TableLoadingComponent } from "../../../App";


const UserData = () => {
  const { data: users = [], isLoading, isError, error } = getAllUserProfiles();
  const [localUsers, setLocalUsers] = useState(users);
  const [selectedStatus, setSelectedStatus] = useState("status");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (users.length > 0) {
      setLocalUsers(users);
    }
  }, [users]);

  const upgradeUserMutation = UpgradeUserStatus();

  const handleUpgrade = async (regno, currentStatus) => {
    try {
      const newStatus = currentStatus === "active" ? "inactive" : "active";
      await upgradeUserMutation.mutateAsync(
        { regno, status: newStatus },
        {
          onSuccess: () => {
            setLocalUsers((prevUsers) =>
              prevUsers.map((user) =>
                user.registration_no === regno
                  ? { ...user, status: newStatus }
                  : user
              )
            );
          },
          onError: (error) => {
            console.error(error.message);
          },
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (isError) {
=======
  Box,
  useMediaQuery,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { getAllUserProfiles, UpgradeUserStatus } from "../../api/Admin";
import toast from "react-hot-toast";
import {
  customStyles,
  getUserDataColumns,
} from "../../../utils/DataTableColumnsProvider";
import { LoadingTextSpinner } from "../../../utils/common";
import { useGetSearchProfiles } from "../../api/User";
import { debounce } from "./../../../utils/common/debounce";

const UserData = () => {
  // State
  const [selectedStatus, setSelectedStatus] = useState("status");
  const [search, setSearch] = useState("");
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 50,
  });
  const isMobile = useMediaQuery("(max-width:600px)");

  // Get users (paginated)
  const {
    data: allUsersData,
    isPending: isFetching,
    isError,
    error,
    mutate: fetchUsers,
  } = getAllUserProfiles();

  // Get searched users
  const {
    data: searchedData = [],
    isFetching: isSearchLoading,
    refetch: searchUser,
  } = useGetSearchProfiles(search, true);

  // ✅ Normalize API data
  const users = Array.isArray(allUsersData?.content)
    ? allUsersData.content
    : [];
  const totalRecords = allUsersData?.totalRecords ?? 0;

  const searchedResult = Array.isArray(searchedData)
    ? searchedData
    : [];

  // Local cache
  const [localUsers, setLocalUsers] = useState(users);

  // Upgrade mutation
  const upgradeUserMutation = UpgradeUserStatus()

  // Debounced search
 const debouncedSearchRef = useRef(
    debounce(async (searchValue) => {
      if (searchValue.trim()) {
        try {
          await searchUser();
        } catch (err) {
          toast.error(err?.message || "Search failed");
        }
      }
    }, 500)
  );

  // Update local users whenever API data changes
  useEffect(() => {
    setLocalUsers(users);
  }, [users]);

  // Cancel debounce on unmount
   useEffect(() => {
    return () => {
      debouncedSearchRef.current.cancel();
    };
  }, []);

  // Fetch users when no search
  useEffect(() => {
    if (!search.trim()) {
      try {
        fetchUsers({
          page: paginationModel.page,
          pageSize: paginationModel.pageSize,
        });
      } catch (err) {
        toast.error(err?.message || "Failed to fetch users");
      }
    }
  }, [paginationModel, fetchUsers, search]);

  // Handle API errors
  useEffect(() => {
    if (isError && error?.message) {
>>>>>>> 86e228c (New design)
      toast.error(error.message);
    }
  }, [isError, error]);

<<<<<<< HEAD
  const filteredRows = localUsers.filter((data) => {
    const isAdmin = data?.user_role?.toLowerCase() === "admin";
    const matchesSearch = 
      search === "" ||
      data.registration_no?.toString().includes(search.toString()) ||
      data.first_name?.toLowerCase().includes(search.toLowerCase()) ||
      data.username?.toLowerCase().includes(search.toLowerCase()) ||
      data.gender?.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = (() => {
      switch(selectedStatus.toLowerCase()) {
        case "active":
          return data.status === "active";
        case "inactive":
          return data.status === "inactive";
        case "pending":
          return data.status === "pending";
        case "expires":
          return data.status === "expires";
        default:
          return true;
      }
    })();
    
    return matchesSearch && matchesStatus && !isAdmin;
  });


  return (
    <div className="upgrade-user">
      
          <Typography
            variant="h4"
            fontWeight={600}
            color="#34495e"
            fontFamily={"Outfit sans-serif"}
            marginBottom={3}
            sx={{textAlign:{xs:"center",sm:"left"}}}
          >
            Users Upgrade
          </Typography>
        
     
        <div className="search-div">
          <TextField
            label="Search"
            id="search"
            sx={{ width: { xs: '100%',sm:"auto", md: 'auto' } }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search user"
          />
          <FormControl  sx={{ 
      width: { xs: '100%', sm: '200px' },
      fontFamily: '"Outfit", sans-serif'
    }} fontFamily={"Outfit sans-serif"}>
            <Select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              sx={{ 
                height: "50px",
                width: '100%',
                '& .MuiSelect-select': { 
                  display: 'flex',
                  alignItems: 'center'
                }
              }}
            >
              <MenuItem value="status">Status</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="expires">Expires</MenuItem>
            </Select>
          </FormControl>
        </div>

      {/* DataTable */}
      <Paper sx={{mt:2}}>
        <DataTable
          columns={getUserDataColumns(upgradeUserMutation ,handleUpgrade)}
          data={filteredRows}
          customStyles={customStyles}
          pagination
          paginationPerPage={6}
          paginationRowsPerPageOptions={[6, 10, 15, 20]}
          paginationComponentOptions={{
            rowsPerPageText: 'Rows per page:',
            rangeSeparatorText: 'of',
            noRowsPerPage: false,
          }}
          noDataComponent={<Typography padding={3}>No data available</Typography>}
          progressPending={isLoading}
          progressComponent={<TableLoadingComponent/>}
           persistTableHead
          highlightOnHover
        />
      </Paper>
    </div>
=======
  // Upgrade handler
  const handleUpgrade = useCallback(
    async (regno, currentStatus) => {
      try {
        const newStatus = currentStatus === "active" ? "inactive" : "active";
        await upgradeUserMutation.mutateAsync(
          {
            regno,
            status: newStatus,
            isProfileUpdate: newStatus === "active",
          },
          {
            onSuccess: () => {
              setLocalUsers((prev) =>
                Array.isArray(prev)
                  ? prev.map((user) =>
                      user?.registration_no === regno
                        ? { ...user, status: newStatus }
                        : user
                    )
                  : []
              );
            },
            onError: (err) => {
              toast.error(err?.message || "Failed to update user status");
            },
          }
        );
      } catch (err) {
        toast.error(err?.message || "An error occurred");
      }
    },
    [upgradeUserMutation]
  );

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value || "";
    setSearch(value);

    if (!value.trim()) {
      setPaginationModel((prev) => ({ ...prev, page: 0 }));
    } else {
      debouncedSearchRef.current?.(value);
    }
  };

  // Decide which data to show
  const displayData = search.trim() ? searchedResult : localUsers;

  // Filter rows (no admins + status filter)
  const filteredRows = useMemo(() => {
    return Array.isArray(displayData)
      ? displayData.filter((data) => {
          if (!data || data?.user_role?.toLowerCase() === "admin") return false;
          if (selectedStatus === "status") return true;
          return data?.status?.toLowerCase() === selectedStatus.toLowerCase();
        })
      : [];
  }, [displayData, selectedStatus]);

  // Columns
  const columns = useMemo(
    () => getUserDataColumns(upgradeUserMutation, handleUpgrade),
    [upgradeUserMutation, handleUpgrade]
  );

  // Total rows
  const totalRows = search.trim() ? searchedResult.length : totalRecords;

  return (
    <Box className="upgrade-user" sx={{ p: 3 }}>
      <Typography
        variant="h4"
        fontWeight={600}
        color="#34495e"
        fontFamily="Outfit"
        mb={3}
        textAlign={{ xs: "center", sm: "left" }}
      >
        Users Upgrade
      </Typography>

      {/* Filters */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
        mb={3}
      >
        <TextField
          label="Search"
          fullWidth={isMobile}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
          }}
          onChange={handleSearchChange}
          value={search}
          placeholder="Search user"
        />

        <FormControl sx={{ width: isMobile ? "100%" : 200 }}>
          <Select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value || "status")}
            sx={{ height: "50px" }}
          >
            <MenuItem value="status">Status</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="expires">Expires</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* DataTable */}
      <PaginationDataTable
        columns={columns}
        data={filteredRows}
        customStyles={customStyles}
        isLoading={isFetching || isSearchLoading}
        totalRows={totalRows}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        noDataComponent={<Typography padding={3}>No data available</Typography>}
        progressComponent={<LoadingTextSpinner />}
        disablePagination={!!search.trim()}
      />
    </Box>
>>>>>>> 86e228c (New design)
  );
};

export default UserData;