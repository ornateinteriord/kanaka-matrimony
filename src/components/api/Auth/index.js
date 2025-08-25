import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import TokenService from "../../token/tokenService";
import { get, post } from "../authHooks";

<<<<<<< HEAD

export const useSignupMutation = ()=>{
=======
export const useSignupMutation = ()=>{
  const navigate = useNavigate();
>>>>>>> 86e228c (New design)
  return useMutation({
      mutationFn: async (data) => {
        return await post("/api/auth/signup", data);
      },
      onSuccess: (response) => {
        if (response.success) {
<<<<<<< HEAD
          toast.success(response.message);
=======
          TokenService.setToken(response.token);
       window.dispatchEvent(new Event("storage")); 
          toast.success(response.message);
          navigate("/activation-pending");
>>>>>>> 86e228c (New design)
        } else {
          console.error(response.message);
        }
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    });
}
export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data) => {
      return await post("/api/auth/login", data);
    },
<<<<<<< HEAD
    onSuccess: (response) => {
      if (response?.success && response?.token) {
        TokenService.setToken(response.token);
        window.dispatchEvent(new Event("storage")); // For sync

        toast.success(response.message );

        const role = TokenService.getRole();
=======

    onSuccess: (response) => {
      if (response?.success && response?.token) {
        TokenService.setToken(response.token);
        window.dispatchEvent(new Event("storage")); 

        const userStatus = response?.user?.status;
        const role = TokenService.getRole();

        if (userStatus !== "active") {
          toast.info(response.message || "Your account is not yet active");
        navigate("/activation-pending");
          return;
        }

        toast.success(response.message );

>>>>>>> 86e228c (New design)
        switch (role) {
          case "FreeUser":
          case "PremiumUser":
          case "SilverUser":
<<<<<<< HEAD
            case "Assistance":
            
=======
          case "Assistance":
>>>>>>> 86e228c (New design)
            navigate("/user/userDashboard");
            break;
          case "Admin":
            navigate("/admin/dashboard");
            break;
<<<<<<< HEAD
          default:
            console.error("Invalid role:", role);
=======
          case "promoter":
            navigate("/PromotAdmin");
            break;
          default:
>>>>>>> 86e228c (New design)
            localStorage.clear();
            toast.error("Invalid user role");
        }
      } else {
<<<<<<< HEAD
        toast.error(response?.message || "Login failed");
        console.error("Login failed:", response?.message);
      }
    },
    onError: (err) => {
      const message =
        err?.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    },
=======
        toast.error(response?.message);
        console.error("Login failed:", response?.message);
      }
    },

    onError: (error) => {
      toast.error(error?.message);
      console.error("Login error:", error);
    }
>>>>>>> 86e228c (New design)
  });
};


export const useResetpassword = () => {
  return useMutation({
    mutationFn: async (data) => {
<<<<<<< HEAD
      return await post("/api/auth/reset-password", data);
      
    },
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message);
      } else {
        console.error(response.message);
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    }
=======
      const response = await post("/api/auth/reset-password", data);
      if (!response.success) {
        throw new Error(response.message);
      }
      return response;
    },
    onSuccess: (response) => {
      toast.success(response.message);
    },
   onError: (error) => {
  const errorMessage =
    error?.response?.data?.message || "Something went wrong";
  toast.error(errorMessage);
}
>>>>>>> 86e228c (New design)
  });
};

export const useGetDashboardStats = () => {
  return useQuery({
    queryKey: ["dashboardstats"],
    queryFn: async () => {
      const data = await get("/api/auth/dashboardstats")
      return data;
    },
  });
};
export const useGetRecentRegisters = () => {
  return useQuery({
    queryKey: ["recentregisters"],
    queryFn: async () => {
      const data = await get("/api/auth/recentregisters")
      return data;
    },
  });
};
