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

export const Page_Intro_Query = `
     pageIntro: pageIntroComponent {
        title
        content
    }
`;

export const Embed_Query = `
     embed: embedComponent {
        embedCode
    }
`;
