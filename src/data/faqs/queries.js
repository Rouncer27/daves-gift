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
        title
        faqs {
            question
            answer
        }
    }
`;

export const Faqs_Client_Query = `
   	faqsClient: faqsClientComponent {
        title
        faqs {
            question
            answer
        }
    }
`;

export const Faqs_Donor_Query = `
   	faqsDonor: faqsDonorComponent {
        title
        faqs {
            question
            answer
        }
    }
`;
