import type { DropDownProps } from 'antd/lib/dropdown';
import { ReactNode } from 'react';

export type HeaderDropdownProps = {
  overlayClassName?: string;
  overlay: ReactNode | (() => ReactNode) | any;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight' | 'bottomCenter';
} & Omit<DropDownProps, 'overlay'>;
