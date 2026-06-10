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

export const All_Events_Query = `
    events: events(first: 999999) {
        edges {
            node {
                slug
                title
                eventAcf {
                    excerpt
                    mainContent
                    featuredImage {
                        node {
                            altText
                            sourceUrl
                        }
                    }
                }
            }
        }
    }

`;
