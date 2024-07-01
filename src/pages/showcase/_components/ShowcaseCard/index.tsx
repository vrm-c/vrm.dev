import React from "react";
import clsx from "clsx";
import Markdown from "react-markdown";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import Heading from "@theme/Heading";
import { type User, type UserInfo } from "@site/src/data/user";
import { tags } from "@site/src/data/tags";
import { TagFlags } from "@site/src/data/tagflags";
import { type TagInfo } from "@site/src/data/tag";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

const TagComp = React.forwardRef<HTMLLIElement, TagInfo>(
  ({ flag, color, ja, en }, ref) => {
    const {
      i18n: { currentLocale },
    } = useDocusaurusContext();

    return (
      <li ref={ref} className={styles.tag} title={ja}>
        <span className={styles.textLabel}>
          {currentLocale == "ja" ? ja : en}
        </span>
        <span
          className={styles.colorLabel}
          style={{ backgroundColor: color }}
        />
      </li>
    );
  }
);

// function getCardImage(user: UserInfo): string {
//   return (
//     user.preview ??
//     `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
//       user.url
//     )}/showcase`
//   );
// }

function getLocaleValue(user: User,
  key: 'title' | 'description' | 'preview' | 'url',
  locale: string): string {
  if (locale == 'ja') {
    if (user.ja && user.ja[key]) {
      return user.ja[key];
    }
    else if (user.en && user.en[key]) {
      // fallback
      return user.en[key];
    }
    else {
      // for debug
      return "no description";
    }
  }
  else if (locale == 'en') {
    if (user.en && user.en[key]) {
      return user.en[key];
    }
    else if (user.ja && user.ja[key]) {
      // fallback
      return user.ja[key];
    }
    else {
      // for debug
      return "no description";
    }
  }
}

function ShowcaseCard({ user, locale }: { user: User, locale: string }) {
  const tagObjs = tags.filter((x) => {
    return (x.flag & user.flags) != 0;
  });

  const preview = getLocaleValue(user, 'preview', locale);

  return (
    <li key={getLocaleValue(user, 'title', locale)} className="card shadow--md">
      <div className={clsx("card__image", styles.showcaseCardImage)}>
        {preview ? <Image img={preview} alt={getLocaleValue(user, 'title', locale)} /> : ""}
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={getLocaleValue(user, 'url', locale)} className={styles.showcaseCardLink}>
              {getLocaleValue(user, 'title', locale)}
            </Link>
          </Heading>
        </div>
        <div className={styles.showcaseCardBody}>
          <Markdown>{getLocaleValue(user, 'description', locale)}</Markdown>
        </div>
      </div>
      <ul className={clsx("card__footer", styles.cardFooter)}>
        {tagObjs.map((tagObj, i) => <TagComp key={i} {...tagObj} />)}
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
