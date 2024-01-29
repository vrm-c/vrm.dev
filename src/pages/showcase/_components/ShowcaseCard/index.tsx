import React from "react";
import clsx from "clsx";
import Markdown from "react-markdown";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import Heading from "@theme/Heading";
import { type UserInfo } from "@site/src/data/user";
import { tags } from "@site/src/data/tags";
import { type TagInfo } from "@site/src/data/tag";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

const TagComp = React.forwardRef<HTMLLIElement, TagInfo>(
  ({ tag, color, ja, en }, ref) => {
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

function getCardImage(user: UserInfo): string {
  return (
    user.preview ??
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      user.url
    )}/showcase`
  );
}

function ShowcaseCard({ user, tag }: { user: UserInfo; tag: string }) {
  const image = getCardImage(user);

  const tagObj = tags.find((x) => x.tag == tag);

  return (
    <li key={user.title} className="card shadow--md">
      <div className={clsx("card__image", styles.showcaseCardImage)}>
        <Image img={image} alt={user.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.showcaseCardHeader)}>
          <Heading as="h4" className={styles.showcaseCardTitle}>
            <Link href={user.url} className={styles.showcaseCardLink}>
              {user.title}
            </Link>
          </Heading>
        </div>
        <div className={styles.showcaseCardBody}>
          <Markdown>{user.description}</Markdown>
        </div>
      </div>
      <ul className={clsx("card__footer", styles.cardFooter)}>
        <TagComp {...tagObj} />
      </ul>
    </li>
  );
}

export default React.memo(ShowcaseCard);
