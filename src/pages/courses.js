import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { VideoContainer, VideoIframe } from "../styles/global";

const Doggo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.iframe = React.createRef();
    this.state = {
      bamboozled: false,
      dogURL: "",
    };
  }

  componentDidMount() {
    this.setState({
      bamboozled: JSON.parse(window.localStorage.getItem("bamboozled")),
    });
    if (this.iframe.current) {
      this.iframe.current.addEventListener("load", () => {
        setTimeout(() => {
          this.setState({ bamboozled: true });
          window.localStorage.setItem("bamboozled", JSON.stringify(true));
        }, 6000);
      });
    }

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => this.setState({ dogURL: data.message }))
      .catch(error => console.error(error));
  }

  render() {
    const { bamboozled, dogURL } = this.state;
    return (
      <Layout>
        <SEO title="Courses" route="courses" />
        {!bamboozled && (
          <VideoContainer>
            <VideoIframe
              title="You Fool"
              ref={this.iframe}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hB8S6oKjiw8?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoContainer>
        )}
        {bamboozled && (
          <div>
            <h1>
              <span role="img" aria-label="sorry">
                🤔
              </span>{" "}
              Bamboozled
            </h1>
            <p>
              Sorry about that. We don't actually have courses. However, our
              virtual commencement is 100% real! We hope to see you there!
              Please accept this randomized dog picture as reparation for our
              academic deceit.
            </p>
            <Doggo>
              <img src={dogURL} alt="doggo" />
            </Doggo>
          </div>
        )}
      </Layout>
    );
  }
}

export default Courses;
