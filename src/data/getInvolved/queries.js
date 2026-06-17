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

export const All_posts_Query = `
    posts: posts(first: 2) {
        edges {
            node {
                slug
                title
                postType {
                    excerpt
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

export const Posts_Display_Query = `
    postsDisplay: postsDisplayComponent {
        postOne {
              nodes {
                ... on Post {
                    id
                    title
                    slug
                    postType {
                        excerpt
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
        
        postTwo {
              nodes {
                ... on Post {
                    id
                    title
                    slug
                    postType {
                        excerpt
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
    }

`;
