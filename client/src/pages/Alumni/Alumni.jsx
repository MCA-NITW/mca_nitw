import React, { Suspense, useEffect, useRef } from "react";
import UserList from "./UserList";
import { fallback } from "../../Layout/fallback";
import { Await, Form, useLoaderData, useSubmit } from "react-router";
import { BiSearch } from "react-icons/bi";
import { api } from "../../lib/api";

import classes from "./Alumni.module.css";

const SEARCH_DELAY_MS = 300;

const statusText = (count, q) => {
  if (count === 0) return `No alumni match "${q}"`;
  const members = count === 1 ? "1 member" : `${count} members`;
  return q ? `${members} matching "${q}"` : members;
};

const Alumni = () => {
  const { users, q } = useLoaderData();
  const submit = useSubmit();
  const timer = useRef();
  const inputRef = useRef();

  // Back/forward changes ?q= without remounting, so keep the box in sync
  useEffect(() => {
    if (inputRef.current) inputRef.current.value = q;
  }, [q]);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Search as you type: each pause re-runs the loader with ?q=, replacing
  // the history entry so Back does not step through every keystroke
  const onChange = event => {
    const form = event.currentTarget.form;
    clearTimeout(timer.current);
    timer.current = setTimeout(
      () => submit(form, { replace: true }),
      SEARCH_DELAY_MS
    );
  };

  return (
    <section className={classes.Alumni_main}>
      <Form method="get" role="search" className={classes.search}>
        <input
          ref={inputRef}
          type="search"
          name="q"
          defaultValue={q}
          onChange={onChange}
          placeholder="Name, batch, company or city"
          aria-label="Search alumni"
          className={classes.search_input}
        />
        <button
          type="submit"
          className={classes.search_btn}
          aria-label="Search"
        >
          <BiSearch />
        </button>
      </Form>
      <Suspense fallback={fallback}>
        <Await
          resolve={users}
          errorElement={
            <p className={classes.status}>
              Could not load the alumni directory. Try again in a moment.
            </p>
          }
        >
          {allUsers => (
            <>
              <p className={classes.status} aria-live="polite">
                {statusText(allUsers.length, q)}
              </p>
              <UserList allUsers={allUsers} />
            </>
          )}
        </Await>
      </Suspense>
    </section>
  );
};

export default Alumni;

export const loader = ({ request }) => {
  const q = new URL(request.url).searchParams.get("q") ?? "";
  // Return the promise unawaited so the page renders and <Await> streams the
  // list in when it arrives
  return { q, users: api.listAlumni({ q }) };
};
