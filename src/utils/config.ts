/*eslint-disable */
/**
 * Gets variables from the environment
 *
 * @param name Name of the environment variable
 * @param defValue Default value to return if the environment variable is not set
 *
 * @returns The value of the environment variable or the default value
 */
export const getVariableFromEnv = (name: string, defValue: string = ''): string => {
  return process.env['REACT_APP_' + name] ?? defValue;
};
