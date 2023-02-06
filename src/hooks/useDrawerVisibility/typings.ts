import { DrawerProps } from 'antd';

export interface UseDrawerVisibilityOutput
  extends Pick<DrawerProps, 'afterVisibleChange' | 'forceRender' | 'onClose' | 'visible'> {
  showDrawer: () => void;
  closeDrawer: () => void;
}
