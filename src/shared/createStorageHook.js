import { useEffect, useState } from 'react';
import isAPISupported from './isAPISupported';

/**
 *
 * @param {"session" | "local"} type
 */
const createStorageHook = (type) => {
  const storageName = `${type}Storage`;

  if (!isAPISupported(storageName)) {
    console.warn(`${storageName} is not supported`);
  }

  const storage = window[storageName];

  return (storageKey, defaultValue = '') => {
    const [value, setValue] = useState(JSON.stringify(defaultValue));

    useEffect(() => {
      storage.setItem(storageKey, JSON.stringify(value));
    }, [storageKey, value]);

    return [value, setValue];
  };
};

export default createStorageHook;
