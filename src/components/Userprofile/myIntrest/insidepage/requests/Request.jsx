<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { useGetReceivedInterests, useUpdateInterestStatus } from "../../../../api/User/useGetProfileDetails";
import TokenService from "../../../../token/tokenService";
import toast from "react-hot-toast";
import InterestCard from "../../../intrestCard/IntrestCard";
import { LoadingComponent } from "../../../../../App";


const Requests = () => {
=======
import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { useGetReceivedInterests, useUpdateInterestStatus } from "../../../../api/User";
import TokenService from "../../../../token/tokenService";
import toast from "react-hot-toast";
import { LoadingTextSpinner } from "../../../../../utils/common";
import UserCard from "../../../../common/UserCard";

const Requests = ({refetchCounts}) => {
>>>>>>> 86e228c (New design)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const recipient = TokenService.getRegistrationNo();

  const {
<<<<<<< HEAD
    data: receivedInterests = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetReceivedInterests(recipient);

  const { mutate: updateInterest } = useUpdateInterestStatus();
=======
    data: receivedInterests,
    isPending: isFetching,
    mutate: fetchReceivedInterests,
    isError,
    error,
  } = useGetReceivedInterests(recipient);

  const { mutate: updateInterest, } = useUpdateInterestStatus();

  useEffect(() => {
    fetchReceivedInterests({ page: currentPage - 1, pageSize: itemsPerPage });
  }, [currentPage]);
>>>>>>> 86e228c (New design)

  useEffect(() => {
    if (isError) {
      toast.error(error?.message || "Something went wrong while fetching requests");
    }
  }, [isError, error]);

<<<<<<< HEAD
=======
  const totalPages = useMemo(() => {
    return receivedInterests ? Math.ceil(receivedInterests.totalRecords / itemsPerPage) : 1;
  }, [receivedInterests]);

>>>>>>> 86e228c (New design)
  const handleInterestResponse = (senderRefNo, isAccepted) => {
    updateInterest(
      {
        sender: senderRefNo,
        recipient,
        status: isAccepted ? "accepted" : "rejected",
      },
      {
        onSuccess: () => {
          toast.success(`Request ${isAccepted ? "accepted" : "rejected"} successfully`);
<<<<<<< HEAD
          refetch();
=======
           fetchReceivedInterests({ page: currentPage - 1, pageSize: itemsPerPage });
           refetchCounts()
>>>>>>> 86e228c (New design)
        },
        onError: (error) => {
          toast.error(error?.response?.data?.message || "Failed to update request");
        },
      }
    );
  };

<<<<<<< HEAD
  // Calculate pagination values
  const totalItems = receivedInterests?.length || 0;
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  
  // Ensure current page stays within valid range
  const validCurrentPage = Math.min(currentPage, Math.max(pageCount, 1));
  
  const currentInterests = receivedInterests?.slice(
    (validCurrentPage - 1) * itemsPerPage,
    validCurrentPage * itemsPerPage
  );

  // Reset to page 1 if data changes and current page becomes invalid
  useEffect(() => {
    if (currentPage > pageCount && pageCount > 0) {
      setCurrentPage(1);
    }
  }, [pageCount, currentPage]);
=======
  const interests = receivedInterests?.content || [];
>>>>>>> 86e228c (New design)

  return (
    <Box sx={{ padding: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
<<<<<<< HEAD
          justifyContent: currentInterests?.length > 0 ? "flex-start" : "center",
          marginTop: 1,
        }}
      >
        {isLoading ? (
          <LoadingComponent />
        ) : currentInterests?.length === 0 ? (
          <Typography variant="h6">No pending requests found</Typography>
        ) : (
          currentInterests?.map((interest) => (
            <InterestCard
              key={interest._id}
              senderData={interest.sender} // Pass the entire sender profile data // Pass the entire interest data if needed
              handleResponse={handleInterestResponse}
=======
          justifyContent: {xs: "center", sm: "flex-start"},
          mr:2,
          marginTop: 1,
        }}
      >
        {isFetching ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              minHeight: "200px", // optional: ensures it takes space to center vertically
            }}
          >
            <LoadingTextSpinner />
          </Box>
        ) : interests.length === 0 ? (
          <Typography variant="h6">No pending requests found</Typography>
        ) : (
          interests.map((interest) => (
            <UserCard
              key={interest._id}
              profile={interest.sender}
              onResponse={handleInterestResponse}
              showResponseButtons={true}
>>>>>>> 86e228c (New design)
            />
          ))
        )}
      </Box>

<<<<<<< HEAD
      {pageCount > 1 && totalItems > 0 && (
        <Box sx={{ display: "flex", justifyContent: "end", marginTop: 4 }}>
          <Pagination
            count={pageCount}
            page={validCurrentPage}
            onChange={(_, page) => setCurrentPage(page)}
            shape="rounded"
            color="primary"
          />
        </Box>
      )}
=======
      {totalPages > 1 && interests.length > 0 && (
        <Box sx={{ display: "flex", justifyContent: "end", marginTop: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            shape="rounded"
            color="primary"
            size={window.innerWidth < 600 ? "small" : "medium"}
          />
        </Box>
      )}
       <Dialog open={rejectDialogOpen} onClose={handleRejectDialogClose}>
        <DialogTitle sx={{ fontWeight: 600, color: "black" }}>
          Reject Profile
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ color: "black" }}>
            Are you sure you want to reject this interest request?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleRejectDialogClose}
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              color: "black",
              borderColor: "black",
              "&:hover": {
                backgroundColor: "#f0f0f0",
                borderColor: "black",
              },
            }}
          >
            No
          </Button>
          <Button
            onClick={handleConfirmReject}
            color="error"
            variant="contained"
            disabled={isRejecting}
            sx={{
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
          >
            {isRejecting ? "Rejecting..." : "Reject"}
          </Button>
        </DialogActions>
      </Dialog>
>>>>>>> 86e228c (New design)
    </Box>
  );
};

<<<<<<< HEAD
export default Requests;
=======
export default Requests;
>>>>>>> 86e228c (New design)
