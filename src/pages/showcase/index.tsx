import React from "react";
import Markdown from "react-markdown";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useHistory, useLocation } from "@docusaurus/router";
import Translate, { translate } from "@docusaurus/Translate";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

import Heading from "@theme/Heading";
import Layout from "@theme/Layout";

import { sortedUsers, type User, type UserInfo } from "@site/src/data/users";
import { Tags, TagList, type TagType } from "@site/src/data/tags";

import ShowcaseCard from "./_components/ShowcaseCard";
import ShowcaseFilterToggle, {
  type Operator,
  readOperator,
} from "./_components/ShowcaseFilterToggle";
import ShowcaseTagSelect, {
  readSearchTags,
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

const TITLE = translate({ message: "Docusaurus Site Showcase" });
const DESCRIPTION = translate({
  message: "List of websites people are building with Docusaurus",
});
const SUBMIT_URL = "https://github.com/facebook/docusaurus/discussions/7826";

function filterUsers(
  users: User[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null
) {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    users = users.filter((user) =>
      user[currentLocale].title.toLowerCase().includes(searchName.toLowerCase())
    );
  }
  if (selectedTags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    // if (user.tags.length === 0) {
    //   return false;
    // }
    if (operator === "AND") {
      return selectedTags.every((tag) => user.tag == tag);
    }
    return selectedTags.some((tag) => user.tag == tag);
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
        {TagList.map((tag, i) => {
          const { ja, en, color } = Tags[tag];
          const id = `showcase_checkbox_id_${tag}`;
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
                  tag={tag}
                  id={id}
                  label={label}
                  icon={
                    tag === "favorite" ? (
                      <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                    ) : (
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          marginLeft: 8,
                        }}
                      />
                    )
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

function Row(props: { user: User; lang: string }) {
  const { user, lang } = props;
  const info = user[lang];
  const tag = Tags[user.tag];
  // const debug = true;
  const debug = false;
  return (
    <>
      <tr>
        <td style={{ borderLeft: `solid 4px ${tag.color}` }}>{tag[lang]}</td>
        <td>
          <a href={info.url}>{info.title}</a>
        </td>
        <td>
          <Markdown>{info.description}</Markdown>
        </td>
        <td>{user.vrm}</td>
      </tr>
      {debug && user["en"] && (
        <tr>
          <td style={{ borderLeft: `solid 4px ${tag.color}` }}>{tag["en"]}</td>
          <td>
            <a href={user["en"].url}>{user["en"].title}</a>
          </td>
          <td>
            <Markdown>{user["en"].description}</Markdown>
          </td>
          <td>{user.vrm}</td>
        </tr>
      )}
    </>
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
  const [selectedTags, setSelectedTags] = React.useState<TagType[]>([]);
  const [searchName, setSearchName] = React.useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  React.useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return React.useMemo(
    () => filterUsers(sortedUsers, selectedTags, operator, searchName),
    [selectedTags, operator, searchName]
  );
}

// function ShowcaseCard({ user }: { user: User }) {
//   return <>{user.ja.title}</>;
// }

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
      {filteredUsers.length === sortedUsers.length ? (
        <>
          <div className="container margin-top--lg">
            <Heading as="h2" className={styles.showcaseHeader}>
              <Translate id="showcase.usersList.allUsers">All sites</Translate>
            </Heading>
            <ul className={clsx("clean-list", styles.showcaseList)}>
              {sortedUsers.map((user) => (
                <ShowcaseCard
                  key={user[currentLocale].title}
                  user={user[currentLocale]}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="container">
          <div
            className={clsx("margin-bottom--md", styles.showcaseFavoriteHeader)}
          />
          <ul className={clsx("clean-list", styles.showcaseList)}>
            {filteredUsers.map((user) => (
              <ShowcaseCard
                key={user[currentLocale].title}
                user={user[currentLocale]}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function (props: any) {
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
        <h1>VRMファイルが使えるアプリケーションは？</h1>

        <div style={{ margin: "1em" }}>
          登録、更新の依頼は
          <a href="https://github.com/vrm-c/vrm.dev/issues">こちら</a>へ。
        </div>

        <ShowcaseFilters />
        <div
          style={{ display: "flex", marginLeft: "auto" }}
          className="container"
        >
        </div>

        <ShowcaseCards />
      </main>
    </Layout>
  );
}
