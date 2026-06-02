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

export const Intro_Query = `
     intro: introComponent {
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

export const Image_Links_Query = `
     imageLinks: imageLinksComponent {
        title
        links {
            title
            link {
                edges {
                    node {
                        uri
                    }
                }
            }
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
    }
`;
