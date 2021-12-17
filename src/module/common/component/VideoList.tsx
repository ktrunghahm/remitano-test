import { Box } from "@mui/material";
import * as React from "react";
import { extractId } from "../utils";
import VideoItem from "./VideoItem";

interface IVideoListProps {list: string[]}

const VideoList = (props: IVideoListProps) => {

  return (
    <Box>
      {props.list.map((oneUrl) => {
        return <VideoItem id={extractId(oneUrl)}></VideoItem>;
      })}
    </Box>
  );
};

export default VideoList;
