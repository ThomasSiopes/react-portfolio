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
    navColor2: "#545454",
    navBar: "#f0f0f0",
    btnInverse1: "#ccc",
    btnInverse2: "#eee"
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
    navColor2: "#ccc",
    navBar: "#087040",
    btnInverse1: "#157347",
    btnInverse2: "#198754"
};

export const GlobalStyles = createGlobalStyle`
    body {
        ${(props) => props.theme.body};
    }

    .bg-green {
        background-color: ${(props) => props.theme.greenBodyColor};
    }

    .bg-navbar {
        background-color: ${(props) => props.theme.navBar};
    }

    .bg-none {
        background-color: transparent;
    }

    .border-green { 
        border: ${(props) => props.theme.greenBodyBorder};
        border-radius: 20px;
    }

    .border-start {
        border-color: transparent transparent transparent #087442!important;
    }

    .btn-block {
        width: 100%;
    }

    .btn-contact, .btn-contact-sm {
        border: none;
        border-radius: 0;
        box-shadow: none;
        transition: .3s;
        font-size: 32px;
    }

    .btn-contact-sm {
        margin-top: -1rem;
    }

    .btn-contact:hover {
        padding-left: 1.5rem;
        margin-right: -1.5rem;
    }

    .btn-contact-sm:hover {
        padding-top: 1.5rem;
        padding-bottom: 0.7rem;
        margin-bottom: -1.5rem;
    }

    .btn-github, .btn-github:hover, .btn-github:active, .btn-github:focus {
        background-color: #333;
    }

    .btn-linkedin, .btn-linkedin:hover, .btn-linkedin:active, .btn-linkedin:focus {
        background-color: #0a66c2;
    }

    .btn-email, .btn-email:hover, .btn-email:active, .btn-email:focus {
        background-color: #719;
    }

    .btn-github:focus, .btn-linkedin:focus, .btn-email:focus {
        box-shadow: none;
    }

    .btn-success-inverse {
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.btnInverse1};
        border-color: ${(props) => props.theme.btnInverse1};
    }

    .btn-success-inverse:hover, .btn-success-inverse:active {
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.btnInverse2};
        border-color: ${(props) => props.theme.btnInverse2};
    }

    .card img {
        border-radius: 20px;
    }

    .component {
        min-height: 100vh;
    }

    #contact-buttons { 
        padding-top: 38vh;
        max-width: 6vh;
    }

    #filters li {
        display: inline-block;
    }

    .font-questrial {
        font-family: 'Questrial', sans-serif;
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

    img {
        max-width: 100%;
    }

    #loaded-project {
        min-width: 100%;
        padding: 0;
    }

    .mainBody {
        min-height: 91vh;
    }

    .mt-nav {
        margin-top: 10vh;
    }

    .navBar {
        max-width: 100%;
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

    // Switch

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
      
    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    
    input:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }
    
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }
      
    .slider.round:before {
        border-radius: 50%;
    }
`