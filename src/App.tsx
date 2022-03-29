import React from 'react';
import './style.scss';
import Profile from './components/Profile/ProfileContainer';
export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

/*TODO
  - Mobile friendly Header using media query/mixins; - DONE
  - Header disappear on scroll; - DONE
  - Add fonts;
  - Add chevron down icon when header is closed;
  - Change primary colors;
  - Convert icons to font to change color;
  - Navbar alike icons scroll locations under subtitle;

  ISSUES
  - Github pages deploy return white screen;
  - Context API for ?
*/
