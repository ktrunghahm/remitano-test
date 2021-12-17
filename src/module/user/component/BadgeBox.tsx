import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppState } from "../../../redux/reducer";
import { authenOut, saveUserInfo } from "../../authen/redux/authenReducer";
import { ROUTES } from "../../common/router";

interface IBadgeBoxProps {}

const BadgeBox = (props: IBadgeBoxProps) => {
  const appState = useSelector((appState: AppState) => appState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = React.useCallback(() => {
    dispatch(authenOut());
    dispatch(saveUserInfo());
  }, [dispatch]);

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
      <Typography>
        <FormattedMessage
          id="welcome"
          values={{ email: appState.authen.email }}
        />
      </Typography>
      &emsp;
      <Button
        onClick={() => {
          navigate({ pathname: ROUTES.share });
        }}
        variant="contained"
        color="secondary"
        style={{ textTransform: "none" }}
      >
        <Typography>
          <FormattedMessage id="shareAMovie" />
        </Typography>
      </Button>
      &emsp;
      <Button
        onClick={logout}
        color="inherit"
        variant="outlined"
        style={{ textTransform: "none", color: "white" }}
      >
        <Typography>
          <FormattedMessage id="logout" />
        </Typography>
      </Button>
    </Box>
  );
};

export default BadgeBox;
