import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import { shareLink } from "../../../mockService/share";
import { BootstrapInput } from "../../common/component/elements";

interface ShareFormData {
  url: string;
}

interface ISharePageProps {}

const SharePage = (props: ISharePageProps) => {
  const intl = useIntl();

  const { control, handleSubmit, reset } = useForm<ShareFormData>({
    defaultValues: { url: "" },
  });

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = React.useCallback(
    (data: ShareFormData) => {
      shareLink(data.url);
      enqueueSnackbar(intl.formatMessage({ id: "urlSaved" }), {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
      reset();
    },
    [enqueueSnackbar, intl, reset]
  );

  const onInvalid = React.useCallback(
    (data) => {
      enqueueSnackbar(intl.formatMessage({ id: "invalidInput" }), {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    },
    [enqueueSnackbar, intl]
  );

  return (
    <Box>
      <Card variant="elevation" title="ABC">
        <CardHeader
          title={intl.formatMessage({ id: "shareAYoutubeMovie" })}
        ></CardHeader>
        <CardContent>
          <Box
            width={550}
            margin="auto"
            padding={2}
            component="form"
            onSubmit={handleSubmit(onSubmit, onInvalid)}
          >
            <Grid container>
              <Grid item xs={3} display={"flex"} alignItems={"center"}>
                <Typography>
                  <FormattedMessage id="youtubeUrl" />
                </Typography>
              </Grid>
              <Grid item xs={9} paddingY={1}>
                <Controller
                  name="url"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => {
                    return (
                      <BootstrapInput
                        placeholder={intl.formatMessage({ id: "enterLink" })}
                        fullWidth
                        {...field}
                      ></BootstrapInput>
                    );
                  }}
                ></Controller>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={9}>
                <Button variant="contained" fullWidth type="submit">
                  <Typography>
                    <FormattedMessage id="share"></FormattedMessage>
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SharePage;
