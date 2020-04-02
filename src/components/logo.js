import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const SmallImg = styled(Img)`
  width: 100px;
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
      return <SmallImg fluid={logo.childImageSharp.fluid} />
    case "large":
      return <LargeImg fluid={logo.childImageSharp.fluid} />
    default:
      console.warn(`Value: ${size} is not valid for prop size`);
      return <SmallImg fluid={logo.childImageSharp.fluid} />
  }
}

Logo.defaultProps = {
  size: `small`
};

Logo.propTypes = {
  size: PropTypes.string
};

export default Logo;