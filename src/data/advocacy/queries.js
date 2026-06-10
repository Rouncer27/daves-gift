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

export const Advocacy_Intro_Query = `
     advocacyIntro: advocacyIntroComponent {
        title
        content
    }
`;

export const Get_Involved_Query = `
     getInvolved: getInvolvedComponent {
        title
        content
        buttonOneText
        buttonTwoText
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
        buttonOneLink {
            edges {
                node {
                    uri
                }
            }
        }
        buttonTwoLink {
            edges {
                node {
                    uri
                }
            }
        }
    }
`;

export const Image_Row_Query = `
     imageRow: imageRowComponent {
        imageOne {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        imageTwo {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        imageThree {
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
