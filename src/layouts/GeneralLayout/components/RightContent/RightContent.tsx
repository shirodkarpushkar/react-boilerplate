import { QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Tooltip, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
import { RightContentProps } from './typings';

export type SiderTheme = 'light' | 'dark';

const RightContent: React.FC<RightContentProps> = ({ settings }) => {
  const navigate = useNavigate();
  const { navTheme, layout } = settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right} ${styles.dark}`;
  }

  return (
    <div className={className}>
      <div className={styles.accountd}>
        <Typography.Text className={styles.accounttext}>Guest User</Typography.Text>
      </div>
      <Tooltip title="Help">
        <Button type="text" icon={<QuestionCircleOutlined />} />
      </Tooltip>
      <Tooltip title="Settings">
        <Button type="text" icon={<SettingOutlined />} onClick={() => navigate('../settings')} />
      </Tooltip>
    </div>
  );
};
export default RightContent;
