import React from "react";
import * as css from "./helloComponentStyles.scss";
import vibrantLogo from "@images/vibrant_logo.png";
import { ShowEnvironmentComponent } from "@components/showEnvironment/showEnvironmentComponent";

export const HelloComponent = () => {
  const greeting: string = "Hello, World!";
  
  return (
    <main className={css.container}>
        <h1 className={css.greeting}>{greeting}</h1>
        <div className={css.imgContainer}>
          <img src={vibrantLogo} alt="logo"/>
        </div>        
        <ShowEnvironmentComponent />
    </main>
    );
};