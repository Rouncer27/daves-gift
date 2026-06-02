export const Hero_Query = `
     hero: heroComponent {
        title
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
