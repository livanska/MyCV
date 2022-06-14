import React from 'react';
import { withTranslation } from 'react-i18next';
import Header from './Header';
import cvContext from '../../context/context';
import { MOBILE_HEADER_HEIGHT } from '../../utils/constants';
import { IHeaderContainerProps } from './types';

class HeaderContainer extends React.Component<IHeaderContainerProps> {
  render() {
    const { t }: IHeaderContainerProps = this.props;
    const name = t('name');
    const position = t('position');
    return (
      <cvContext.Consumer>
        {({ isHeaderVisible, setHeaderVisible }) => (
          <Header
            shouldShowHeader={isHeaderVisible}
            setHeaderVisible={() => setHeaderVisible(true)}
            topPosition={isHeaderVisible ? 0 : -MOBILE_HEADER_HEIGHT + 100}
            name={name}
            position={position}
          />
        )}
      </cvContext.Consumer>
    );
  }
}
export default withTranslation()(HeaderContainer);
