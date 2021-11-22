import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "background-color: #fff",
    fontColor: "#000",
    displayL: "none",
    displayD: "inline",
    greenBodyColor: "#fff",
    greenBodyBorder: "solid 1px #198754",
    projectLink: "solid 1.5px #198754",
    navColor: "#111",
    navColor2: "#545454"
};

export const darkTheme = {
    body: "background-image: linear-gradient(#097744, #000)",
    fontColor: "#fff",
    displayL: "inline",
    displayD: "none",
    greenBodyColor: "#198754",
    greenBodyBorder: "none",
    projectLink: "solid 1.5px #fff",
    navColor: "#fff",
    navColor2: "#ccc"
};

export const GlobalStyles = createGlobalStyle`
    body {
        ${(props) => props.theme.body};
    }

    .bg-green {
        background-color: ${(props) => props.theme.greenBodyColor};
    }

    .bg-none {
        background-color: transparent;
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

    .height-max {
        min-height: 50vh;
    }

    #loaded-project {
        min-width: 100%;
        padding: 0;
    }

    .mainBody {
        min-height: 91vh;
    }

    .navbar-dark .navbar-nav .nav-link {
        color: ${(props) => props.theme.navColor};
    }

    .navbar-dark .navbar-nav .nav-link:hover {
        color: ${(props) => props.theme.navColor2};
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