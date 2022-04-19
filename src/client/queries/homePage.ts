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
        gallery {
        image {
          sourceUrl(size: MEDIUM)
          mediaItemUrl
        }
      }
       content
    }
}
`;
export default homePage;