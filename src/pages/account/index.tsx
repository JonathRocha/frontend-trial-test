import { useUserIdFromToken } from "@/hooks/login";
import { useGetUserQuery } from "@/hooks/user";

import "@/pages/account/styles.scss";

export const Account = () => {
  const userId = useUserIdFromToken();
  const { data, loading, error } = useGetUserQuery({ variables: { id: String(userId) } });

  if (loading)
    return (
      <section className="account">
        <h1>Account</h1>
        <h3>Loading...</h3>
      </section>
    );

  if (error) {
    return <section className="account">Error</section>;
  }

  return (
    <section className="account">
      <h1>Account</h1>

      <div className="account_group">
        <label htmlFor="firstName">First name</label>
        <input type="text" id="firstName" className="account_group--field" value={data.user.firstName} readOnly />
      </div>

      <div className="account_group">
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" className="account_group--field" value={data.user.lastName} readOnly />
      </div>
    </section>
  );
};
