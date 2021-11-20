import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    displayL: "none",
    displayD: "inline",
    greenBodyColor: "#fff",
    greenBodyBorder: "solid 1px #198754",
    projectLink: "solid 1.5px #198754"
};

export const darkTheme = {
    body: "#222",
    fontColor: "#fff",
    displayL: "inline",
    displayD: "none",
    greenBodyColor: "#198754",
    greenBodyBorder: "none",
    projectLink: "solid 1.5px #fff"
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
    }

    .bg-green {
        background-color: ${(props) => props.theme.greenBodyColor};
    }

    .border-green { 
        border: ${(props) => props.theme.greenBodyBorder};
        border-radius: 20px;
    }

    .btn-block {
        width: 100%;
    }

    .card img {
        border-radius: 20px;
    }

    .genText {
        color: ${(props) => props.theme.fontColor};
    }

    .genText:hover {
        color: ${(props) => props.theme.fontColor};
    }

    #loaded-project {
        min-width: 100%;
        padding: 0;
    }

    .mainBody {
        min-height: 80vh;
    }

    .noDecor {
        text-decoration: none;
        list-style-type: none;
    }

    .projectLink:hover {
        border-bottom: ${(props) => props.theme.projectLink};
    }

    .themeD {
        display: ${(props) => props.theme.displayD}
    }

    .themeL {
        display: ${(props) => props.theme.displayL}
    }
`