
import { List, ListItem, Box, Button, Typography } from "@mui/material";
import { getMenuItems } from "../../utils/menudata/MenuData"; 
import '../variables/Variables.scss'

const SidebarMenu = ({
  selectedItem,
  setSelectedItem,
  handleDashboardClick,
  handleProfileClick,
  handleMatchesClick,
  handleInterestClick,
  handleViewAllClick,
  handleSearchClick,
  handleOpenLogoutDialog,
  userProfile,
}) => {
  const menuItems = getMenuItems({
    handleDashboardClick,
    handleProfileClick,
    handleMatchesClick,
    handleInterestClick,
    handleViewAllClick,
    handleSearchClick,
    handleOpenLogoutDialog,
  });

  return (
    <Box sx={{ overflow: "auto" }}>
      <List>
        <ListItem>
          <Box sx={{ textAlign: "center", py: 0 }}>
            <Typography
              variant="h5"
              marginLeft={2}
              textTransform={"capitalize"}
            >
              {userProfile?.first_name}
              <Typography sx={{color:"#fff"}}>
                Id: {userProfile?.registration_no} 
              </Typography>
            </Typography>
          </Box>
        </ListItem>

        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => {
              item.onClick();
              setSelectedItem(item.text);
            }}
            sx={{
              backgroundColor:
                selectedItem === item.text ? "var(--blue-btn-color)" : "transparent",
              "&:hover": {
                backgroundColor:
                  selectedItem === item.text ? "var(--blue-btn-hover-color)" : "transparent",
              },
              borderRadius: "2px",
              mx: 0,
              my: 2,
            }}
          >
            <Button
              variant="text"
              startIcon={item.icon}
              sx={{
                color: "#fff",
                fontSize: "1.2rem",
                textTransform: "capitalize",
                marginLeft: "10px",
                width: "100%",
                justifyContent: "flex-start",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {item.text}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SidebarMenu;
