const errorHandler = (err: any) => {
  /* api error */
  if (err?.response?.bodyAsText) {
    const errorJson = JSON.parse(err.response.bodyAsText);
    return errorJson?.title || 'Something went wrong';
  }

  /* antd validation error */
  if (err?.errorFields?.[0]?.errors?.[0]) {
    return err?.errorFields?.[0]?.errors?.[0];
  }

  /* normal error message */
  if (err?.message) {
    return err.message;
  }

  return err?.response || 'Something went wrong';
};

export const getErrorJSON = (err: any) => {
  if (err?.response?.bodyAsText) {
    const errorJson = JSON.parse(err.response.bodyAsText);
    return errorJson;
  }
  return undefined;
};
export default errorHandler;
