import { Dropdown } from 'antd';
import classNames from 'classnames';
import React from 'react';
import styles from './HeaderDropdown.less';
import { HeaderDropdownProps } from './typings';

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ overlayClassName: cls, ...restProps }) => (
  <Dropdown overlayClassName={classNames(styles.container, cls)} {...restProps} />
);

export default HeaderDropdown;
