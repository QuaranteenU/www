import React from "react"
import Masonry from 'react-masonry-component'; // https://github.com/eiriklv/react-masonry-component
import FAQContent from '../data/faqs.json';

import "../styles/faqs.css"

const masonryOptions = {
  columnWidth: '.faq-sizer',
  gutter: '.faq-gutter-sizer', // Horizontal margin for masonry columns
  itemSelector: '.faq-item',
  percentPosition: true
};

const FAQs = () => {
  const childElements = FAQContent.map((FAQ, index) => [
    <div key={`faq-sizer-${index}`} className="faq-sizer" />,
    <div key={`faq-gutter-${index}`} className="faq-gutter-sizer" />,
    <div key={`faq-item-${index}`} className="faq-item">
      <div>
        <b>{FAQ.question}</b>
        <p dangerouslySetInnerHTML={{ __html: FAQ.answer }} />
      </div>
    </div>
  ]);

  return (
    <section id="faqs" className="landing-section">
      <h2>FAQs</h2>
      <Masonry options={masonryOptions} className="faq-masonry-wrapper">
        {childElements}
      </Masonry>
    </section>
  );
};

export default FAQs;