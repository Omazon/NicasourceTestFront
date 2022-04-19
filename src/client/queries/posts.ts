const posts = `
 posts {
    nodes {
      title
      excerpt
      date
      author {
        node {
          firstName
          lastName
        }
      }
      categories {
        nodes {
          name
        }
      }
      link
      id
    }
  }
`;
export default posts;