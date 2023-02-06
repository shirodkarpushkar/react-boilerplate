import {
  AppstoreOutlined,
  ContactsOutlined,
  ContainerOutlined,
  FileDoneOutlined,
  SwapOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import { MenuDataItem } from '@ant-design/pro-layout';

const menuData: Array<MenuDataItem> = [
  {
    path: '/',
    name: 'Dashboard',
    icon: <AppstoreOutlined />,
    exact: true,
  },
  {
    path: '/products',
    name: 'Products',
    icon: <TagsOutlined />,
  },
  {
    path: '/shipments',
    name: 'Shipments',
    icon: <SwapOutlined />,
  },
  {
    path: '/templates',
    name: 'Templates',
    icon: <FileDoneOutlined />,
  },
  {
    path: '/documents',
    name: 'Documents',
    icon: <ContainerOutlined />,
  },
  {
    path: '/network',
    name: 'Network',
    icon: <ContactsOutlined />,
  },
];

export default menuData;
