import React from "react";
import * as css from "./showEnvironmentComponentStyles.scss";

export const ShowEnvironmentComponent = () => {

  const slogan: string = process.env.SLOGAN || "No API URL found";
  
  return (<p className={css.slogan}>{slogan}</p>);
};