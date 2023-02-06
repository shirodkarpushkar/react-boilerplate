import ProLayout, { MenuDataItem } from '@ant-design/pro-layout';
import { BackTop } from 'antd';
import menuData from 'config/menuData';
import { ReactNode } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Footer } from './components';
import RightContent from './components/RightContent';

const settings = {
  primaryColor: '#f47b20;',
  contentWidth: 'Fluid',
  fixSiderbar: true,
  fixedHeader: true,
  iconfontUrl: '',
  layout: 'side',
  menu: { locale: true },
  navTheme: 'dark',
  title: 'Ant Design',
};

const menuItemRender = (menuItem: MenuDataItem, defaultDom: ReactNode) => {
  if (menuItem.isUrl || menuItem.children || !menuItem.path) {
    return defaultDom;
  }

  return <Link to={menuItem.path}>{defaultDom}</Link>;
};

const rightContentRender = () => <RightContent settings={{ navTheme: 'dark', layout: 'side' }} />;

const GeneralLayout = () => {
  const location = useLocation();

  return (
    <ProLayout
      location={location}
      menuDataRender={() => menuData}
      menuItemRender={menuItemRender}
      itemRender={() => null}
      footerRender={Footer}
      rightContentRender={rightContentRender}
      {...settings}
    >
      <Outlet />
      <BackTop />
    </ProLayout>
  );
};

export default GeneralLayout;
