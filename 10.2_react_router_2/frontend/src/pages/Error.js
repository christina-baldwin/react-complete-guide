import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation.js";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong!";

  if (error.status === 500) {
    // need to access the message on the parsed data as before this data was still a string and we need an object.
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
