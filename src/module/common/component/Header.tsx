import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Route, Routes } from "react-router";
import LoginBox from "../../guest/component/LoginBox";
import BadgeBox from "../../user/component/BadgeBox";
import { ROUTES } from "../router";

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <AppBar variant="elevation" position="sticky">
      <Toolbar>
        <Box width={800} margin={"auto"} display="flex" alignItems={"center"}>
          <Box marginRight={2}>
            <HomeIcon fontSize="large" />
          </Box>
          <Typography>
            <FormattedMessage id="funnyMovies" />
          </Typography>
          <Box flex={1}>
            <Routes>
              <Route path={ROUTES.login} element={<LoginBox />}></Route>
              <Route path={ROUTES.user} element={<BadgeBox />}></Route>
              <Route path={ROUTES.share} element={<BadgeBox />}></Route>
            </Routes>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
