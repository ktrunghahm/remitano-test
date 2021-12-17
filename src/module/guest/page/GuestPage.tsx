import { Box } from "@mui/system";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import GuestHeader from "../component/GuestHeader";

interface IGuestPageProps {}

const GuestPage: React.FunctionComponent<IGuestPageProps> = (props) => {
  return (
    <>
      <GuestHeader />
      <Box>
        <FormattedMessage id="test" />
      </Box>
    </>
  );
};

export default GuestPage;
