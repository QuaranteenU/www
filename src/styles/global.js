import styled, { createGlobalStyle, css } from "styled-components";
import navTogglerIconPath from '../images/navbar-toggler-icon.svg';

export const ContentWrapperStyle = css`
  flex: 1 0 auto;
  margin-top: 25px;
`;

export const Section = styled.section`
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const VideoContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
`;

export const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const GlobalStyle = createGlobalStyle`
  /* BOOTSTRAP OVERRIDES */

  .navbar-toggler {
    border-color: white !important;
  }

  .navbar-toggler-icon {
    background-image: url("${navTogglerIconPath}") !important;
  }

  .navbar-nav {
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .navbar a {
    color: white;
    transition: transform 0.25s;
  }

  .navbar a:hover {
    color: white;
    text-decoration: none;    
  }

  .navbar-light .navbar-nav .nav-link {
    color: white !important;
  }

  .navbar, .navbar-nav .dropdown-menu {
    background: ${props => props.theme.palette.mainBrand};
    color: white;
    font-size: 1.25rem;
    padding: 5px;
    z-index: 999;
  }

  .dropdown-toggle:after {
    transition: vertical-align 0.3s;
  }

  .dropdown-toggle:hover:after {
    vertical-align: 0;
  }

  .navbar-nav .dropdown-item:focus, .navbar-nav .dropdown-item:hover {
    color: unset;
    text-decoration: unset;
    background-color: unset;
  }

  @media only screen and (min-width: 768px) {
    .navbar {
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar-nav {
      align-items: flex-start !important;
    }
  }

  .btn.btn-primary {
    background-color: ${props => props.theme.palette.mainBrand};
    border-color: ${props => props.theme.palette.mainBrand};
  }

  /* CUSTOM STYLES */

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  html, body {
    height: 100%; 
  }

  body {
    background-color: ${props => props.theme.global.bg};
    color: ${props => props.theme.global.color};
    transition: background 0.2s ease-out;
  }

  .text-muted {
    color: ${props => props.theme.global.muted} !important;
  }
  
  a {
    color: ${props => props.theme.global.link};
  }
  
  a:hover {
    color: ${props => props.theme.global.linkHover};
  }

  .swal-icon.swal-icon--custom {
    width: 250px;
    margin: 0 auto;
  }

  .swal-button.swal-button--confirm:hover {
    animation: wiggle 0.5s infinite;
  }

  .hvr-underline-from-center {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }

  .hvr-underline-from-center:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: white;
    height: 4px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before, .hvr-underline-from-center[aria-current="page"]:before {
    left: 0;
    right: 0;
  }
  
  /* ANIMATIONS */

  @keyframes fontalicious {
    0% {
      font-family: helvetica;
    }
    10% {
      font-family: times;
    }
    20% {
      font-family: fantasy;
    }
    30% {
      font-family: monospace;
    }
    40% {
      font-family: Palatino;
    }
    50% {
      font-family: Tahoma;
    }
    60% {
      font-family: impact;
    }
    70% {
      font-family: cursive;
    }
    80% {
      font-family: monospace;
    }
    90% {
      font-family: fantasy;
    }
    99% {
      font-family: futura;
    }
    100% {
    }
  }

  .fontalicious {
    animation-name: fontalicious;
    animation-duration: 1s;
  }

  @keyframes wiggle {
      0% { transform: rotate(0deg); }
     25% { transform: rotate(5deg); }
     75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
  }

  .wiggle:hover {
    animation: wiggle 0.5s infinite;
  }
`;