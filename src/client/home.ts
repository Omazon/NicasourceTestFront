import gql from 'graphql-tag';

const home = gql`
    query home {
        menu(idType: NAME, id: "Main") {
            menuItems {
                nodes {
                    label
                    id
                }
            }
        }
        themeGeneralSettings {
            generalOption {
                logo {
                    sourceUrl
                }
                apple {
                    sourceUrl
                }
                spotify {
                    sourceUrl
                }
                google {
                    sourceUrl
                }
            }
        }
        nodeByUri(uri: "/") {
            ... on Page {
                id
                hero {
                    description
                    rightImage {
                        sourceUrl
                    }
                    title
                }
            }
        }
        podcasts {
            nodes {
                title
                excerpt
                categories {
                    nodes {
                        name
                    }
                }
                link
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                tags {
                    nodes {
                        name
                    }
                }
                date
                id
            }
        }
    }
`;
export default home;