import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import { FaBriefcase, FaMapMarkerAlt, FaCrown, FaHeart } from "react-icons/fa";
import { calculateAge, isSilverOrPremiumUser } from "../../utils/common";

const UserCard = ({
  profile,
  connection = null,
  onViewMore = () => { },
  onCancelRequest = () => { },
  onRemoveConnection = () => { },
  interestId = null,
  showCancelButton = false,
  onResponse = () => { },
  showResponseButtons = false,
  showRemoveButton = false,
}) => {
  const age = profile?.age || calculateAge(profile?.date_of_birth);
  const isPremium = isSilverOrPremiumUser(
    profile?.type_of_user || profile?.type_of_use
  );

  return (
    <Box
      sx={{
        width: { xs: 270, sm: 270, md: 255, lg: 270 },
        borderRadius: "20px",
        background: "linear-gradient(160deg, #0d1b2a 0%, #1a2e45 100%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
        },
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Gold accent top line */}
      <Box
        sx={{
          height: "3px",
          background: "linear-gradient(90deg, #b8860b, #ffd700, #b8860b)",
        }}
      />

      {/* Header with subtle pattern */}
      <Box
        sx={{
          position: "relative",
          pt: 2.5,
          pb: 5,
          px: 2,
          textAlign: "center",
          background:
            "radial-gradient(ellipse at top center, rgba(184,134,11,0.12) 0%, transparent 70%)",
        }}
      >
        {/* Premium badge */}
        {isPremium && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              background: "linear-gradient(90deg, #b8860b, #ffd700)",
              color: "#0d1b2a",
              borderRadius: "20px",
              px: 1.2,
              py: 0.3,
              fontSize: "0.62rem",
              fontWeight: 800,
            }}
          >
            <FaCrown size={9} />
            PREMIUM
          </Box>
        )}

        {/* Connection direction badge */}
        {connection && (
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              background:
                connection?.direction === "sent"
                  ? "rgba(100,160,255,0.2)"
                  : "rgba(100,220,130,0.2)",
              border:
                connection?.direction === "sent"
                  ? "1px solid #64a0ff"
                  : "1px solid #64dc82",
              color:
                connection?.direction === "sent" ? "#64a0ff" : "#64dc82",
              borderRadius: "20px",
              px: 1.2,
              py: 0.3,
              fontSize: "0.62rem",
              fontWeight: 700,
            }}
          >
            {connection?.direction === "sent" ? "↗ Sent" : "↙ Received"}
          </Box>
        )}

        {/* Avatar */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              border: "3px solid #ffd700",
              boxShadow: "0 0 20px rgba(255,215,0,0.3)",
              overflow: "hidden",
              backgroundColor: "#1a2e45",
            }}
          >
            <Avatar
              src={profile?.image}
              alt={profile?.first_name}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Info body */}
      <Box
        sx={{
          px: 2.5,
          pb: 2.5,
          mt: "-24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "#ffffff",
            letterSpacing: 0.3,
          }}
        >
          {profile?.first_name} {profile?.last_name}
        </Typography>

        <Typography
          sx={{
            fontSize: "0.78rem",
            color: "#ffd700",
            fontWeight: 600,
            mb: 1.5,
          }}
        >
          {age ? `${age} yrs` : ""}
        </Typography>

        {/* Occupation */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.8,
            mb: 0.6,
          }}
        >
          <FaBriefcase size={12} color="#ffd700" />
          <Typography sx={{ color: "#b0bec5", fontSize: "0.77rem" }}>
            {profile?.occupation || "Not specified"}
          </Typography>
        </Box>

        {/* Location */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.8,
            mb: 1.8,
          }}
        >
          <FaMapMarkerAlt size={12} color="#ffd700" />
          <Typography sx={{ color: "#b0bec5", fontSize: "0.77rem" }}>
            {[profile?.city, profile?.state].filter(Boolean).join(", ") ||
              "Location N/A"}
          </Typography>
        </Box>

        {/* Stats */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,215,0,0.15)",
            borderRadius: "12px",
            py: 1.2,
            mb: 2,
          }}
        >
          <ProfileInfo label="Height" value={profile?.height || "—"} />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "rgba(255,215,0,0.2)" }}
          />
          <ProfileInfo label="Religion" value={profile?.religion || "—"} />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "rgba(255,215,0,0.2)" }}
          />
          <ProfileInfo label="Caste" value={profile?.caste || "—"} />
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {showResponseButtons && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                fullWidth
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "rgba(239,83,80,0.6)",
                  color: "#ef5350",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    background: "rgba(239,83,80,0.1)",
                    borderColor: "#ef5350",
                  },
                }}
                onClick={() => onResponse(profile?.registration_no, false)}
              >
                Decline
              </Button>
              <Button
                fullWidth
                size="small"
                variant="contained"
                sx={{
                  background: "linear-gradient(90deg, #b8860b, #ffd700)",
                  color: "#0d1b2a",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 700,
                  boxShadow: "none",
                  "&:hover": {
                    background: "linear-gradient(90deg, #9a7109, #e6c200)",
                  },
                }}
                onClick={() => onResponse(profile?.registration_no, true)}
              >
                Accept
              </Button>
            </Box>
          )}

          <Button
            fullWidth
            size="small"
            onClick={() => onViewMore(profile)}
            sx={{
              background: "linear-gradient(90deg, #b8860b, #ffd700)",
              color: "#0d1b2a",
              borderRadius: "10px",
              textTransform: "none",
              fontWeight: 700,
              py: 1,
              fontSize: "0.85rem",
              boxShadow: "0 4px 12px rgba(255,215,0,0.25)",
              display: "flex",
              gap: 0.8,
              alignItems: "center",
              "&:hover": {
                background: "linear-gradient(90deg, #9a7109, #e6c200)",
                boxShadow: "0 6px 16px rgba(255,215,0,0.35)",
              },
            }}
          >
            <FaHeart size={12} />
            View Profile
          </Button>

          {showRemoveButton && (
            <Button
              fullWidth
              size="small"
              variant="outlined"
              onClick={() => onRemoveConnection(interestId)}
              sx={{
                borderColor: "rgba(239,83,80,0.5)",
                color: "#ef5350",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { background: "rgba(239,83,80,0.08)" },
              }}
            >
              Remove
            </Button>
          )}

          {showCancelButton && (
            <Button
              fullWidth
              size="small"
              variant="outlined"
              onClick={() => onCancelRequest(interestId)}
              sx={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "#90a4ae",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { background: "rgba(255,255,255,0.05)" },
              }}
            >
              Cancel Request
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UserCard;

export const ProfileInfo = ({ label, value }) => (
  <Box
    sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: 0.5 }}
  >
    <Typography
      variant="caption"
      sx={{ fontWeight: 700, color: "#ffd700", fontSize: "0.7rem", lineHeight: 1.3 }}
    >
      {value}
    </Typography>
    <Typography variant="caption" sx={{ color: "#78909c", fontSize: "0.62rem" }}>
      {label}
    </Typography>
  </Box>
);
