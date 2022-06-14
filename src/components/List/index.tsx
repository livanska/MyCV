import React from 'react';
import { withTranslation } from 'react-i18next';
import List from './List';
import { IListContainerProps } from './types';

class ListContainer extends React.Component<IListContainerProps> {
  render(): React.ReactNode {
    const { data, t }: IListContainerProps = this.props;
    return <List items={data} title={t('skills.additional')} />;
  }
}
export default withTranslation()(ListContainer);
