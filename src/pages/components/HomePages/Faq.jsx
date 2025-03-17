import React from 'react';

const Faq = () => {
    const faqs = [
        {
            question: "What is EduCircle?",
            answer: "EduCircle is an online platform that provides educational resources and tools for students and teachers."
        },
        {
            question: "How can I sign up?",
            answer: "You can sign up by clicking on the 'Sign Up' button on the top right corner of the homepage and filling out the registration form."
        },
        {
            question: "Is EduCircle free to use?",
            answer: "Yes, EduCircle offers a variety of free resources. However, there are premium features that require a subscription."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact support by emailing support@educircle.com or by using the contact form on our website."
        }
    ];

    return (
        <div className="faq">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default Faq;