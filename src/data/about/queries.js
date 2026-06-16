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

export const Video_Embed_Query = `
     videoEmbed: videoEmbedComponent {
        videoEmbed
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

export const Story_Query = `
    story: storyComponent {
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

export const Directors_Query = `
    directors: directorsComponent {
        title
        directors {
            name
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
    }
`;
