import { Box } from "@mui/system";
import * as React from "react";
import { getList } from "../../../mockService/share";
import VideoList from "../../common/component/VideoList";

interface IGuestPageProps {}

const GuestPage: React.FunctionComponent<IGuestPageProps> = (props) => {
  const list = React.useMemo(() => {
    return getList();
  }, []);
  return (
    <Box>
      <VideoList list={list} />
    </Box>
  );
};

export default GuestPage;
