import { Link } from "react-router-dom";

export const UnexpectedError = () => {
  return (
    <section className="unexpected-error">
      <h1>Something wrong happened</h1>
      <p>Please try again later</p>
      <Link to="/account">Go to account</Link>
    </section>
  );
};
