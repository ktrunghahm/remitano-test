import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { FormattedMessage } from "react-intl";

interface IVideoItemProps {
  id: string;
}

const VideoItem = (props: IVideoItemProps) => {
  return (
    <Box display={"flex"} marginY={2}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.id}?controls=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <Box width={300} marginLeft={2}>
        <Box>
          <Box color="primary.main">
            <Typography variant="h6">Movie title</Typography>
          </Box>
          <Typography variant="subtitle1">
            Shared by sample@example.com
          </Typography>
          <br />
          <Typography style={{ fontWeight: 700 }}>
            <FormattedMessage id="description" />
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
            necessitatibus dolores. Molestias sequi voluptate cum eaque tenetur
            nisi placeat quibusdam repudiandae velit debitis minus, nemo ex quas
            delectus optio quidem!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoItem;
