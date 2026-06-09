export const Hero_Query = `
     hero: heroComponent {
        title
        content
        image {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Faqs_Query = `
   	faqs: faqsComponent {
        faqs {
            question
            answer
        }
    }
`;
