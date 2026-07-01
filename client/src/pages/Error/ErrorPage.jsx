import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import PageContent from "../../components/PageContent/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = typeof error.data === "string" ? error.data : message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return <PageContent title={title} message={message} />;
};

export default ErrorPage;
