import { FC } from "react";
import { getApp } from "firebase/app";

export const LoginForm: FC = () => {
  return <p>{JSON.stringify(getApp())}</p>;
};
