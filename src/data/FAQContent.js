import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const FAQContent = [
  {
    question: "🔥 Is this actually happening?",
    answer: (
      <React.Fragment>
        Yes. We've been mentioned in{" "}
        <OutboundLink href="https://www.theverge.com/2020/3/31/21200972/college-students-graduation-minecraft-coronavirus-school-closures">
          The Verge
        </OutboundLink>
        ,{" "}
        <OutboundLink href="https://campustechnology.com/articles/2020/04/02/seniors-invited-to-participate-in-minecraft-graduation-ceremony.aspx">
          Campus Technology
        </OutboundLink>
        ,{" "}
        <OutboundLink href="https://www.chronicle.com/article/Virtual-BingoMinecraft/248450">
          The Chronicle of Higher Education
        </OutboundLink>
        ,{" "}
        <OutboundLink href="https://www.campusreform.org/?ID=14673">
          Campus Reform
        </OutboundLink>
        , and{" "}
        <OutboundLink href="https://thejournal.com/articles/2020/04/02/seniors-invited-to-participate-in-minecraft-graduation-ceremony.aspx">
          The Journal
        </OutboundLink>
        .
      </React.Fragment>
    ),
  },
  {
    question: "📅 When?",
    answer: (
      <React.Fragment>
        May 22<sup>nd</sup>, 2020. (May 30<sup>th</sup> for QUA)
      </React.Fragment>
    ),
  },
  {
    question: "🌎 Where?",
    answer: "Wherever you are ;)",
  },
  {
    question: "📹 Will there be graduation pictures?",
    answer: (
      <React.Fragment>
        Yes! There will be a livestream at{" "}
        <OutboundLink href="https://twitch.tv/quaranteenu" target="_blank">
          twitch.tv/QuaranteenU
        </OutboundLink>{" "}
        and your name will be read publicly in chat.
      </React.Fragment>
    ),
  },
  {
    question: "💲 How much does it cost to attend?",
    answer: (
      <React.Fragment>
        Our event is free! However, you'll need to get a copy of{" "}
        <OutboundLink
          href="https://www.minecraft.net/en-us/store/minecraft-java-edition/"
          target="_blank"
        >
          Minecraft Java Edition
        </OutboundLink>
        . Alternatively, an NPC with your name can walk in your place!
      </React.Fragment>
    ),
  },
  {
    question: "👀 What's the IP?",
    answer: (
      <React.Fragment>
        You can join the server at <strong>play.quaranteen.university</strong>.
        Currently the commencement area is under construction and only builders
        are allowed, but feel free to check out the rest of the server!
      </React.Fragment>
    ),
  },
  {
    question: "🎓 Who can attend?",
    answer: (
      <React.Fragment>
        We ask that only Class of 2020 graduates walk (
        <Link to="/academy">high school seniors included</Link>) &mdash; we're
        using the honor system here. If you are a proud parent or friend, there
        will be seats for you in the audience.
      </React.Fragment>
    ),
  },
  {
    question: "💙 School spirit colors?",
    answer: "Zoom Blue.",
  },
];

export default FAQContent;
