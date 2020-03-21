import React, { useState, useRef, useEffect} from "react"

import ContainerLayout from "../components/container-layout"
import SEO from "../components/seo"

const Courses = () => {
  const iframe = useRef(null);
  const [bamboozled, setBamboozled] = useState(JSON.parse(window.localStorage.getItem('bamboozled')));
  const [dogURL, setDogURL] = useState("");

  useEffect(() => {
    if (iframe.current) {
      iframe.current.addEventListener('load', () => {
        setTimeout(() => {
          setBamboozled(true);
          window.localStorage.setItem('bamboozled', JSON.stringify(true));
        }, 6000);
      });
    }
  }, [iframe, bamboozled]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => setDogURL(data.message))
    .catch(error => console.error(error));
  }, [])

  return (
    <ContainerLayout>
      <SEO title="Courses" />
      {!bamboozled && <iframe ref={iframe} className="thunder" width="560" height="315" src="https://www.youtube.com/embed/hB8S6oKjiw8?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
      {bamboozled && <div>
        <h1>😜 Sorry!</h1>
        <p>
          That was pretty rude of us to bamboozle you. We don't actually have any courses for you to take. However, our virtual commencement is 100% real! Hope to see you there! (To make up for the bamboozlement, please enjoy this cute doggo!)
        </p>
        <div className="doggo">
          <img src={dogURL} />
        </div>
      </div>}
    </ContainerLayout>
  )
}

export default Courses
