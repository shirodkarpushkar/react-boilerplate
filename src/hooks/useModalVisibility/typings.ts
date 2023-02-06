import { Dispatch, SetStateAction } from 'react';

export interface UseModalVisibilityReturnType {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  show: () => void;
  hide: () => void;
  onCancel: () => void;
  centered: boolean;
  forceRender?: boolean;
}
