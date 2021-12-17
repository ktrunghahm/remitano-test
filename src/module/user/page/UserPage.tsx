import { Box } from "@mui/material";
import * as React from "react";
import { getList } from "../../../mockService/share";
import VideoList from "../../common/component/VideoList";

interface IUserPageProps {}

const UserPage = (props: IUserPageProps) => {
  const list = React.useMemo(() => {
    return getList();
  }, []);
  return (
    <Box>
      <VideoList list={list} />
    </Box>
  );
};

export default UserPage;
