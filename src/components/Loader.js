const Loader = ({ isFetching, isError, children }) => {
  if (isFetching) return <>Loading...</>;
  if (isError) return <>Error</>;
  return <>{children}</>;
};
