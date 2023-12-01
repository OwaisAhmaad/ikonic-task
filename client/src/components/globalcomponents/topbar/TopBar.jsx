import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import {
  AppbarContainer,
  InRightLeftContainer,
  LeftContainer,
  RightContainer,
} from "../../../styles/globalcomponents/topbarstyling/styleTopBar";

const TopBar = () => {
  return (
    <AppbarContainer>
      <LeftContainer>FrontEnd</LeftContainer>
      <RightContainer>
        <InRightLeftContainer>
          <NotificationsNoneRoundedIcon
            sx={{ fontSize: 22, cursor: "pointer" }}
          />
          <EmailRoundedIcon sx={{ fontSize: 22, cursor: "pointer" }} />
        </InRightLeftContainer>
        <AccountCircleRoundedIcon sx={{ fontSize: 32, cursor: "pointer" }} />
      </RightContainer>
    </AppbarContainer>
  );
};

export default TopBar;
