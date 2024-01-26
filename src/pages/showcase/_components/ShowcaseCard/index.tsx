/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Image from "@theme/IdealImage";
import { type User, type UserInfo } from "@site/src/data/users";
import { Tags, TagList, type TagType, type Tag } from "@site/src/data/tags";

import { sortBy } from "@site/src/data/jsUtils";
import Heading from "@theme/Heading";
import Tooltip from "../ShowcaseTooltip";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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
        <p className={styles.showcaseCardBody}>{user.description}</p>
      </div>
    </li>
  );
}

export default React.memo(ShowcaseCard);
