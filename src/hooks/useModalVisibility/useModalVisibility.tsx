import { useState } from 'react';

const useModalVisibility = (initState = false) => {
  const [visible, setVisible] = useState(initState);
  const onCancel = () => setVisible(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return {
    visible,
    setVisible,
    show,
    hide,
    onCancel,
    centered: true,
  };
};
export default useModalVisibility;
