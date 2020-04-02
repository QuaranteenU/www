import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { StaticQuery , graphql } from "gatsby";


// multiple queries in here for the sizes, use a prop to figure out which datatype to use, go back to old method look in github

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "seal.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const withData = (WrappedComponent) => (
  (props) => 
    <StaticQuery query={query} render={(data) => 
      <WrappedComponent {...props} data={data}/>
    } />  
)

const SmallImg = styled(Img)`
  width: 100px;
`;

const BigImg = styled(Img)`
  width: 300px;
`;

export const Logo = () => withData(({data, ...props}) => {
  alert("Ree")
  (
    <SmallImg fluid={data.placeholderImage.childImageSharp.fluid} />
)});

export const LogoBig = () => withData(({data, ...props}) => (
    <BigImg fluid={data.placeholderImage.childImageSharp.fluid} />
));