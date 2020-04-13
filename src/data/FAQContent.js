import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const FAQContent = [
  {
    "question": "🔥 Is this actually happening?",
    "answer": "Yes."
  },
  {
    "question": "📅 When?",
    "answer": <React.Fragment>May 22<sup>nd</sup>, 2020. (May 30<sup>th</sup> for QUA)</React.Fragment>
  },
  {
    "question": "🌎 Where?",
    "answer": "Wherever you are ;)"
  },
  {
    "question": "📹 Will there be graduation pictures?",
    "answer": <React.Fragment>Yes! There will be a livestream at <OutboundLink href="https://twitch.tv/quaranteenu" target="_blank">twitch.tv/QuaranteenU</OutboundLink> and your name will be read publicly in chat.</React.Fragment>
  },
  {
    "question": "💲 How much does it cost to attend?",
    "answer": <React.Fragment>It's free! Minecraft has a free trial too &mdash; make sure you get the <OutboundLink href="https://www.minecraft.net/en-us/store/minecraft-java-edition/" target="_blank">Java Edition</OutboundLink>!</React.Fragment>
  },
  {
    "question": "👀 What's the IP?",
    "answer": <React.Fragment>You can join the server at <strong>play.quaranteen.university</strong>. Currently the commencement area is under construction and only builders are allowed, but feel free to check out the rest of the server!</React.Fragment>
  },
  {
    "question": "🎓 Who can attend?",
    "answer": <React.Fragment>We ask that only Class of 2020 graduates walk (<Link to="/academy">high school seniors included</Link>) &mdash; we're using the honor system here. If you are a proud parent or friend, there will be seats for you in the audience.</React.Fragment>
  },
  {
    "question": "💙 School spirit colors?",
    "answer": "Zoom Blue."
  }
]

export default FAQContent;