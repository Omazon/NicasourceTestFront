import gql from 'graphql-tag';
import menu from './queries/menu'
import themeSettings from './queries/themeSettings';
import homePage from './queries/homePage';
import podcasts from './queries/podcasts';
import posts from './queries/posts';

const home = gql`
    query home {
        ${menu}
        ${themeSettings}
        ${homePage}
        ${podcasts}
        ${posts}
    }
`;
export default home;