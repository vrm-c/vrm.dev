import React from "react";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory, useLocation } from "@docusaurus/router";
import Translate, { translate } from "@docusaurus/Translate";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Link from "@docusaurus/Link";

import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

import { users } from "@site/src/data/users";
function cmpUser(a: User, b: User): number {
  if (a.updated) {
    if (b.updated) {
      return b.updated.getTime() - a.updated.getTime();
    }
    else {
      // left
      return -1;
    }
  }
  else {
    if (b.updated) {
      // right
      return 1;
    }
    else {
      return 0;
    }
  }
}
users.sort(cmpUser);

import { type User, type UserInfo } from "@site/src/data/user";
import { tags } from "@site/src/data/tags";
import { type Tag } from "@site/src/data/tag";

import ShowcaseCard from "./_components/ShowcaseCard";
import ShowcaseFilterToggle, {
  type Operator,
  readOperator,
} from "./_components/ShowcaseFilterToggle";
import ShowcaseTagSelect, {
  readSearchFlags,
} from "./_components/ShowcaseTagSelect";
import ShowcaseTooltip from "./_components/ShowcaseTooltip";

import styles from "./styles.module.css";

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }
  return undefined;
}

function filterUsers(
  users: User[],
  selectedFlags: number,
  operator: Operator,
  searchName: string | null,
  currentLocale: string
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    users = users.filter((user) =>
      user[currentLocale].title.toLowerCase().includes(searchName.toLowerCase())
    );
  }
  if (selectedFlags === 0) {
    return users;
  }
  return users.filter((user) => {
    if (operator === "AND") {
      return (selectedFlags & user.flags) == selectedFlags;
    }
    else {
      return (selectedFlags & user.flags) != 0;
    }
  });
}

function ShowcaseFilters() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const filteredUsers = useFilteredUsers();
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <div className={clsx("margin-bottom--sm", styles.filterCheckbox)}>
        <div>
          <Heading as="h2">
            <Translate id="showcase.filters.title">Filters</Translate>
          </Heading>
          <span>{filteredUsers.length}</span>
        </div>
        <ShowcaseFilterToggle />
      </div>
      <ul className={clsx("clean-list", styles.checkboxList)}>
        {tags.map((tagInfo, i) => {
          const { flag, ja, en, color } = tagInfo;
          const id = `showcase_checkbox_id_${flag}`;
          const label = currentLocale == "ja" ? ja : en;
          const description = currentLocale == "ja" ? ja : en;

          return (
            <li key={i} className={styles.checkboxListItem}>
              <ShowcaseTooltip
                id={id}
                text={description}
                anchorEl="#__docusaurus"
              >
                <ShowcaseTagSelect
                  flag={flag}
                  id={id}
                  label={label}
                  icon={
                    <span
                      style={{
                        backgroundColor: color,
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        marginLeft: 8,
                      }}
                    />
                  }
                />
              </ShowcaseTooltip>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

const SearchNameQueryKey = "name";

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
}

function useFilteredUsers() {
  const location = useLocation<UserState>();
  const [operator, setOperator] = React.useState<Operator>("OR");
  // On SSR / first mount (hydration) no tag is selected
  const [selectedFlags, setSelectedFlags] = React.useState<number>(0);
  const [searchName, setSearchName] = React.useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  React.useEffect(() => {
    setSelectedFlags(readSearchFlags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  return React.useMemo(
    () => filterUsers(users, selectedFlags, operator, searchName, currentLocale),
    [selectedFlags, operator, searchName]
  );
}

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = React.useState<string | null>(null);
  React.useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder={translate({
          message: "Search for site name...",
          id: "showcase.searchBar.placeholder",
        })}
        value={value ?? undefined}
        onInput={(e) => {
          setValue(e.currentTarget.value);
          const newSearch = new URLSearchParams(location.search);
          newSearch.delete(SearchNameQueryKey);
          if (e.currentTarget.value) {
            newSearch.set(SearchNameQueryKey, e.currentTarget.value);
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareUserState(),
          });
          setTimeout(() => {
            document.getElementById("searchbar")?.focus();
          }, 0);
        }}
      />
    </div>
  );
}

function ShowcaseCards() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const filteredUsers = useFilteredUsers();
  if (filteredUsers.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <Heading as="h2">
            <Translate id="showcase.usersList.noResult">No result</Translate>
          </Heading>
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredUsers.length === users.length ? (
        <>
          <div className="container margin-top--lg">
            <Heading as="h2" className={styles.showcaseHeader}>
              <Translate id="showcase.usersList.allUsers">All sites</Translate>
            </Heading>
            <ul className={clsx("clean-list", styles.showcaseList)}>
              {users.map((user, i) => (
                <ShowcaseCard key={i} user={user} locale={currentLocale} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="container margin-top--lg">
          <div
            className={clsx("margin-bottom--md", styles.showcaseFavoriteHeader)}
          />
          <ul className={clsx("clean-list", styles.showcaseList)}>
            {filteredUsers.map((user, i) => (
              <ShowcaseCard key={i} user={user} locale={currentLocale} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function(props: any) {
  return (
    <Layout {...props}>
      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>What applications can use VRM files?</h1>

        <div style={{ margin: "1em" }}>
          Click <Link href="/vrm/showcase/">here</Link> to
          request registration or renewal
        </div>

        <ShowcaseFilters />
        <div
          style={{ display: "flex", marginLeft: "auto" }}
          className="container"
        ></div>

        <ShowcaseCards />
      </main>
    </Layout>
  );
}
