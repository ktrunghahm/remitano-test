import { Box } from "@mui/system";
import * as React from "react";
import { FormattedMessage } from "react-intl";

interface IGuestPageProps {}

const GuestPage: React.FunctionComponent<IGuestPageProps> = (props) => {
  return (
    <Box>
      <FormattedMessage id="test" />
    </Box>
  );
};

export default GuestPage;
