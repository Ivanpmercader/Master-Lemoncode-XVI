import { FC } from "react";
import myEnvObj from "@config/config";
import defaultImg from "@images/default-image.png";
import "./helloComponentStyles.scss";

export const HelloComponent: FC = () => {
    const apiBase = myEnvObj.API_URL;
    return <>
        <div className="container">
            <header>
                <h1 className="title">WELCOME TO VITE PROJECT SEED</h1>
                <div className="img-container">
                    <img src={defaultImg} alt="default image" />
                </div>
            </header>
            <main>
                <p>It's a simple boilerplate since where you can init a proyect using Typescript, Sass, React and environment variable like this: {apiBase}</p>
            </main>
        </div>
    </>
}


