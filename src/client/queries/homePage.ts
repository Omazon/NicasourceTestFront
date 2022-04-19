const homePage = `
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
`;
export default homePage;