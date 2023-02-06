import useGoBack from 'hooks/useGoBack';
import { useState } from 'react';

const useModalNavVisibility = (initState = true) => {
  const [visible, setVisible] = useState(initState);
  const goBack = useGoBack();
  const hide = () => {
    goBack();
    setVisible(false);
  };
  const onCancel = () => hide();
  const show = () => setVisible(true);

  return {
    forceRender: true,
    visible,
    setVisible,
    show,
    hide,
    onCancel,
    centered: true,
  };
};
export default useModalNavVisibility;
