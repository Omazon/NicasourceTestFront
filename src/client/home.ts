import gql from 'graphql-tag';

const home = gql`
    query home {
        menu(idType: NAME, id: "Main") {
            menuItems {
                edges {
                    node {
                        label
                        id
                    }
                }
            }
        }
        themeGeneralSettings {
            generalOption{
                logo {
                    sourceUrl
                }
            }
        }
    }
`;
export default home;