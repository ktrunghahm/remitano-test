import { Box } from "@mui/system";
import * as React from "react";
import VideoList from "../../common/component/VideoList";

interface IGuestPageProps {}

const GuestPage: React.FunctionComponent<IGuestPageProps> = (props) => {
  return (
    <Box>
      <VideoList />
    </Box>
  );
};

export default GuestPage;
