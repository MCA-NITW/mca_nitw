import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../../components/PageContent/PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  return <PageContent title={error.title} message={error.message} />;
};

export default ErrorPage;
