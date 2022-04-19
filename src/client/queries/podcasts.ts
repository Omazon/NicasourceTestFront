const podcasts = `
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
`;
export default podcasts;