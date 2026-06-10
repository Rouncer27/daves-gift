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

export const Partners_Intro_Query = `
     partnersIntro: partnersIntroComponent {
        title
        content
    }
`;

export const With_Us_Query = `
     withUs: withUsComponent {
        title
        content
        titleBottom
        contentBottom
        buttonText
        buttonUrl
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

export const Collaborators_Query = `
     collaborators: collaboratorsComponent {
        title
        content
        collaborators {
            name
            content
            logo {
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

export const Callout_Query = `
     callout: calloutComponent {
        title
        content
        buttonText
        buttonType
        buttonEmail       
    }
`;

export const Donors_Query = `
     donors: donorsComponent {
        title
        donors {
            logo {
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
