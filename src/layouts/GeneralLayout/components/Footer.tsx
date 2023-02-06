import { DefaultFooter } from '@ant-design/pro-layout';
import { Divider, Space, Typography } from 'antd';

const Footer = () => (
  <DefaultFooter
    // @ts-ignore
    copyright={
      <Space>
        2022 Ant Design, Inc. All rights reserved. Version: {process.env.REACT_APP_VERSION}
        <span>
          <Typography.Link type="secondary" href="https://website.com/privacy">
            Privacy
          </Typography.Link>
          <Divider type="vertical" />
          <Typography.Link type="secondary" href="https://website.com/terms">
            Terms
          </Typography.Link>
        </span>
      </Space>
    }
  />
);

export default Footer;
