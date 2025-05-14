import React, { useState } from "react";
import "../Component/Faqstyle.css";
import FAQ from "./FAQ";


export default function FrequentlyAsked() {
  const [faqs, setFaqs] = useState([
    {
      question: "Who can use this carbon calculator?",
      answer:
        "Our carbon calculator is designed for individuals, businesses, and organizations. Whether you want to evaluate personal lifestyle emissions, track a company’s carbon footprint, or calculate the impact of specific projects, this tool is versatile and user-friendly.",
      open: true
    },
    {
      question: "What are the benefits of reducing my carbon footprint?",
      answer: "Reducing your carbon footprint helps combat climate change, improves air and water quality, conserves resources, and fosters a healthier environment for future generations. Additionally, it can lead to cost savings through energy efficiency and provide a positive reputation boost for businesses.",
      open: false
    },
    {
        question: "What are carbon credits, and how can they help reduce emissions?",
        answer:
          "Carbon credits are permits that allow the holder to emit a certain amount of greenhouse gases. One credit typically equals one ton of carbon dioxide. By purchasing or earning carbon credits, individuals or organizations can offset their emissions by investing in environmental projects, such as reforestation or renewable energy.",
        open: true
      },
      {
        question: "Does reducing carbon emissions have financial benefits",
        answer:
          "Yes, reducing emissions can lead to significant cost savings by improving energy efficiency, reducing waste, and optimizing processes. Additionally, businesses may gain financial incentives through government programs, carbon credits, and enhanced customer loyalty.",
        open: true
      },
    {
      question:
        "How do carbon emissions contribute to climate change?",
      answer: "Carbon emissions, primarily in the form of carbon dioxide (CO2), trap heat in the Earth’s atmosphere, leading to global warming and climate change. This results in extreme weather patterns, rising sea levels, and ecological disruptions.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <h1 className='faqheading'>Frequently Asked Questions</h1>

      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}