import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const TeamImage = ({ name }) => {
  const query = useStaticQuery(graphql`
    query {
      Warren: file(relativePath: { eq: "team/Warren.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Rudhra: file(relativePath: { eq: "team/Rudhra.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Carey: file(relativePath: { eq: "team/Carey.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Jithvan: file(relativePath: { eq: "team/default.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Nicholas: file(relativePath: { eq: "team/Nicholas.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Sofiya: file(relativePath: { eq: "team/Sofiya.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Taylor: file(relativePath: { eq: "team/Taylor.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Prathyusha: file(relativePath: { eq: "team/default.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Timothy: file(relativePath: { eq: "team/default.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      Krishna: file(relativePath: { eq: "team/default.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={query[name].childImageSharp.fluid} />
}

TeamImage.propTypes = {
  size: PropTypes.string.isRequired
};

export default TeamImage;