import { LanguageContext } from "@/contexts/language";
import { useUserIdFromToken } from "@/hooks/login";
import { useGetUserQuery } from "@/hooks/user";
import { strings } from "@/pages/account/strings";
import { UnexpectedError } from "@/pages/errors";
import { useContext } from "react";

import "@/pages/account/styles.scss";

export const Account = () => {
  const userId = useUserIdFromToken();
  const { data, loading, error } = useGetUserQuery({ variables: { id: String(userId) } });
  const { language } = useContext(LanguageContext);
  const localizedTexts = strings[language];

  if (loading)
    return (
      <section className="account">
        <h1>{localizedTexts.title}</h1>
        <h3>{localizedTexts.loading}</h3>
      </section>
    );

  if (error) {
    return <UnexpectedError />;
  }

  return (
    <section className="account">
      <h1>{localizedTexts.title}</h1>

      <div className="account_group">
        <label htmlFor="firstName">{localizedTexts.inputs.firstName.label}</label>
        <input type="text" id="firstName" className="account_group--field" value={data.user.firstName} readOnly />
      </div>

      <div className="account_group">
        <label htmlFor="lastName">{localizedTexts.inputs.lastName.label}</label>
        <input type="text" id="lastName" className="account_group--field" value={data.user.lastName} readOnly />
      </div>
    </section>
  );
};
