import { Box } from "@mui/material";
import * as React from "react";
import { getList } from "../../../mockService/share";
import { extractId } from "../utils";
import VideoItem from "./VideoItem";

interface IVideoListProps {}

const VideoList = (props: IVideoListProps) => {
  const list = React.useMemo(() => {
    return getList();
  }, []);

  return (
    <Box>
      {list.map((oneUrl) => {
        return <VideoItem id={extractId(oneUrl)}></VideoItem>;
      })}
    </Box>
  );
};

export default VideoList;
