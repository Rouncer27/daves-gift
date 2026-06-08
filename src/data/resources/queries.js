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

export const Post_Display_Query = `
     postDisplay: postDisplayComponent {
        displayPosts
    }
`;

export const All_posts_Query = `
    posts: posts(first: 999999) {
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
