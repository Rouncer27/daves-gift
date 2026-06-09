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

export const Contact_Information_Query = `
    contactInformation: contactInformation {
        content
        displayContactInfo
        displaySocialMedia
        title
    }
`;

export const Contact_Form_Display_Query = `
    contactFormDisplay: contactFormComponent {
        intro
        displayContactForm
    }
`;
