const isAPISupported = (api) =>
  typeof window != 'undefined' ? api in window : false;

export default isAPISupported;
