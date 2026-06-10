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

export const Four_Blocks_Query = `
     fourBlocks: fourBlocksComponent {
        titleTop
        contentTop
        buttonTopText
        imageTop {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        titleBottom
        contentBottom
        buttonBottomText
        imageBottom {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }

        buttonTopLink {
            edges {
                node {
                    slug
                    uri
                }
            }
        }
        
        buttonBottomLink {
            edges {
                node {
                    slug
                    uri
                }
            }
        }
    }
`;
