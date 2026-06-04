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

export const Main_Content_Query = `
     mainContent: mainContentComponent {
        title
        bigContent
        content
    }
`;

export const Curved_Image_Query = `
     curvedImage: curvedImageComponent {
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
