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

export const Upcoming_Events_Query = `
     upcomingEvents: upcomingEventsComponent {
        title
         event {
            edges {
                node {
                    ... on Event {
                        title
                        slug
                        eventAcf {
                            excerpt
                            featuredImage {
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
                }
            }
        }
    }
`;

export const Box_Side_Query = `
     boxSide: boxSideBySideComponent {
        content
        buttonText
        buttonLink {
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
`;
