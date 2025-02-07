import React from "react";
import { getAvg } from "./averageService";
import * as css from "./averageComponentStyles.scss";
import globalLogo from "@images/global_logo.png";

export const AverageComponent = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  return (
    <div className={css.container}>
      <span className={css["result-color-text"]}>Students average: {average}</span>
      <div className={css.logoContainer}>
        <img src={globalLogo} alt="logo" />
      </div>
    </div>
    );
};