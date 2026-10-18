import { useState } from "react";
import { useSearchParams } from "react-router";

// Shared submit flow for Login and Signup: read the form, call the API, show
// the server's error message, and hand the signed-in user back to App along
// with the page that sent the visitor here (?next=/alumni).
const useAuthForm = (submit, onAuthenticated, validate) => {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const onSubmit = async event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const problem = validate?.(values);
    if (problem) {
      setError(problem);
      return;
    }
    setError("");
    setPending(true);
    try {
      const user = await submit(values);
      onAuthenticated(user, searchParams.get("next"));
    } catch (err) {
      setError(err.message || "Something went wrong");
      setPending(false);
    }
  };

  return { onSubmit, error, pending };
};

export default useAuthForm;
