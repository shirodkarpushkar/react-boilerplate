import { useEffect, useState } from 'react';
import { UseDrawerVisibilityOutput } from './typings';
import useGoBack from './useGoBack';

/**
 * Hook to create the minimal functions and properties needed for the ant design Drawer
 *
 * @param withNavigation Whether to navigate to previous route in the router when the visibility of the drawer changes
 *
 * @returns Minimal functions and properties to be used with the drawer
 */
const useDrawerVisibility = (withNavigation: boolean = false): UseDrawerVisibilityOutput => {
  const [visibility, setVisibility] = useState(false);
  const goBack = useGoBack();

  const afterVisibleChange = (visible: boolean) => {
    if (!visible && withNavigation) {
      goBack();
    }
  };

  const showDrawer = () => {
    setVisibility(true);
  };

  const closeDrawer = () => {
    // eslint-disable-next-line no-console
    console.log('closeDrawer');
    setVisibility(false);
  };

  const onClose = () => closeDrawer();

  useEffect(() => {
    if (withNavigation) {
      setVisibility(true);
    }
  }, [setVisibility, withNavigation]);

  return {
    afterVisibleChange,
    forceRender: true,
    onClose,
    showDrawer,
    closeDrawer,
    visible: visibility,
  };
};

export default useDrawerVisibility;
