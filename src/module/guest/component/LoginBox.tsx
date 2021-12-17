import { Box, Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authenIn, saveUserInfo } from "../../authen/redux/authenReducer";
import {
  InputContainer,
  StyledInputBase,
} from "../../common/component/elements";
import { ROUTES } from "../../common/router";

interface ILoginBoxProps {}

interface LoginFormData {
  email: string;
  password: string;
}

const LoginBox = (props: ILoginBoxProps) => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { email: "", password: "" },
  });
  const { enqueueSnackbar } = useSnackbar();

  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (data: LoginFormData) => {
      dispatch(authenIn());
      dispatch(saveUserInfo(data.email));
      navigate({ pathname: ROUTES.user });
      enqueueSnackbar(intl.formatMessage({ id: "loginSuccess" }), {
        variant: "success",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    },
    [dispatch, enqueueSnackbar, intl, navigate]
  );

  const onInvalid = useCallback(
    (data) => {
      enqueueSnackbar(intl.formatMessage({ id: "invalidLogin" }), {
        variant: "error",
        anchorOrigin: { vertical: "top", horizontal: "center" },
      });
    },
    [enqueueSnackbar, intl]
  );

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      component="form"
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <Controller
        name="email"
        rules={{ required: true }}
        render={({ field }) => (
          <InputContainer>
            <StyledInputBase
              placeholder={intl.formatMessage({ id: "enterEmail" })}
              {...field}
            />
          </InputContainer>
        )}
        control={control}
      />
      <Controller
        name="password"
        rules={{ required: true }}
        render={({ field }) => (
          <InputContainer>
            <StyledInputBase
              placeholder={intl.formatMessage({ id: "enterPassword" })}
              type="password"
              {...field}
            />
          </InputContainer>
        )}
        control={control}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        style={{ textTransform: "none" }}
      >
        <FormattedMessage id="loginRegister" />
      </Button>
    </Box>
  );
};

export default LoginBox;
