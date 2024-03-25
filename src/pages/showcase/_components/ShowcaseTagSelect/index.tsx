/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  useCallback,
  useState,
  useEffect,
  type ComponentProps,
  type ReactNode,
  type ReactElement,
} from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import { toggleListItem } from '@site/src/data/jsUtils';
import type { Tag } from '@site/src/data/tag.d.ts';
import { TagFlags } from '@site/src/data/tagflags';

import { prepareUserState } from '../../index';
import styles from './styles.module.css';

interface Props extends ComponentProps<'input'> {
  icon: ReactElement<ComponentProps<'svg'>>;
  label: ReactNode;
  flag: TagFlags;
}

// tags
const TagQueryStringKey = 'tags';

export function readSearchTags(search: string): Tag[] {
  return new URLSearchParams(search).getAll(TagQueryStringKey) as Tag[];
}

function replaceSearchTags(search: string, newTags: Tag[]) {
  const searchParams = new URLSearchParams(search);
  searchParams.delete(TagQueryStringKey);
  newTags.forEach((tag) => searchParams.append(TagQueryStringKey, tag));
  return searchParams.toString();
}

// flags
export function readSearchFlags(search: string): number {
  const flags = new URLSearchParams(search).get("flags");
  return flags ? parseInt(flags) : 0;
}

function replaceSearchFlags(search: string, newFlags: number) {
  const searchParams = new URLSearchParams(search);
  searchParams.delete("flags");
  searchParams.append("flags", newFlags.toString());
  return searchParams.toString();
}

function ShowcaseTagSelect(
  { id, icon, label, flag, ...rest }: Props,
  ref: React.ForwardedRef<HTMLLabelElement>,
) {
  const location = useLocation();
  const history = useHistory();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // const tags = readSearchTags(location.search);
    // setSelected(tags.includes(tag));

    const flags = readSearchFlags(location.search);
    setSelected((flags & flag) != 0);
  }, [flag, location]);

  // const toggleTag = useCallback((e) => {
  //   console.log(e.target.checked);
  //   const tags = readSearchTags(location.search);
  //   const newTags = toggleListItem(tags, tag);
  //   const newSearch = replaceSearchTags(location.search, newTags);
  //   history.push({
  //     ...location,
  //     search: newSearch,
  //     state: prepareUserState(),
  //   });
  // }, [tag, location, history]);

  const toggleFlag = useCallback((e) => {
    const flags = readSearchFlags(location.search);
    const newFlags = e.target.checked ? (flags | flag) : (flags & ~flag);
    console.log(flag, e.target.checked, flags, newFlags);
    const newSearch = replaceSearchFlags(location.search, newFlags);
    history.push({
      ...location,
      search: newSearch,
      state: prepareUserState(),
    });
  }, [flag, location, history]);

  return (
    <>
      <input
        type="checkbox"
        id={id}
        className="screen-reader-only"
        onFocus={(e) => {
          if (e.relatedTarget) {
            e.target.nextElementSibling?.dispatchEvent(
              new KeyboardEvent('focus'),
            );
          }
        }}
        onBlur={(e) => {
          e.target.nextElementSibling?.dispatchEvent(new KeyboardEvent('blur'));
        }}
        onChange={toggleFlag}
        checked={selected}
        {...rest}
      />
      <label ref={ref} htmlFor={id} className={styles.checkboxLabel}>
        {label}
        {icon}
      </label>
    </>
  );
}

export default React.forwardRef(ShowcaseTagSelect);
