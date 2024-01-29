import React from "react";
import clsx from "clsx";
import Markdown from "react-markdown";
import Link from "@docusaurus/Link";
import Image from "@theme/IdealImage";
import Heading from "@theme/Heading";
import { type UserInfo } from "@site/src/data/user";

import styles from "./styles.module.css";

function getCardImage(user: UserInfo): string {
  return (
    user.preview ??
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      user.url
    )}/showcase`
  );
}

function ShowcaseCard({ user }: { user: UserInfo }) {
  const image = getCardImage(user);
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
    </li>
  );
}

export default React.memo(ShowcaseCard);
