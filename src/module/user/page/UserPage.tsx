import { Box } from "@mui/material";
import * as React from "react";
import VideoList from "../../common/component/VideoList";

interface IUserPageProps {}

const UserPage = (props: IUserPageProps) => {
  return (
    <Box>
      <VideoList />
    </Box>
  );
};

export default UserPage;
