import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled, { withTheme } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const SmallImg = withTheme(styled(Img)`
  width: 100px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => props.theme.global.logoTint};
    border-radius: 100%;
    pointer-events: none;
  }
`);

const MediumImg = styled(Img)`
  width: 150px;
`;

const LargeImg = styled(Img)`
  width: 300px;
`;

const Logo = ({ size }) => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "seal.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  switch (size) {
    case "small":
      return <SmallImg fluid={logo.childImageSharp.fluid} />;
    case "medium":
      return <MediumImg fluid={logo.childImageSharp.fluid} />;
    case "large":
      return <LargeImg fluid={logo.childImageSharp.fluid} />;
    default:
      console.warn(`Value: ${size} is not valid for prop size`);
      return <SmallImg fluid={logo.childImageSharp.fluid} />;
  }
};

Logo.defaultProps = {
  size: `small`,
};

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
