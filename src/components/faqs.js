import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-component";
import FAQContent from "../data/faqs.json";
import { LandingSection } from "../pages/index";

const FAQSizer = styled.div`
  width: 45%;
`;

const FAQGutterSizer = styled.div`
  width: 5%;
`;

const FAQItem = styled.div`
  width: 45%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;

  & p {
    word-break: break-word;
  }
`;

const masonryOptions = {
  columnWidth: ".faq-sizer",
  gutter: ".faq-gutter-sizer",
  itemSelector: ".faq-item",
  percentPosition: true
};

const FAQs = () => {
  const childElements = FAQContent.map((FAQ, index) => [
    <FAQSizer key={`faq-sizer-${index}`} className="faq-sizer" />,
    <FAQGutterSizer key={`faq-gutter-${index}`} className="faq-gutter-sizer" />,
    <FAQItem key={`faq-item-${index}`} className="faq-item">
      <div>
        <b>{FAQ.question}</b>
        <p dangerouslySetInnerHTML={{ __html: FAQ.answer }} />
      </div>
    </FAQItem>
  ]);

  return (
    <LandingSection id="faqs">
      <h2>FAQs</h2>
      <Masonry options={masonryOptions}>
        {childElements}
      </Masonry>
    </LandingSection>
  );
};

export default FAQs;