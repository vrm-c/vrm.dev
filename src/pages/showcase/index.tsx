import React from "react";
import Layout from '@theme/Layout';
import Markdown from 'react-markdown'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {
  sortedUsers,
  type User,
  type UserInfo,
} from '@site/src/data/users';
import {
  Tags,
  TagList,
  type TagType,
} from '@site/src/data/tags';

function Row(props: { user: User, lang: string }) {
  const { user, lang } = props;
  const info = user[lang];
  const tag = Tags[user.tag];
  // const debug = true;
  const debug = false;
  return (<>
    <tr>
      <td style={{ borderLeft: `solid 4px ${tag.color}` }}>{tag[lang]}</td>
      <td><a href={info.url}>{info.title}</a></td>
      <td><Markdown>{info.description}</Markdown></td>
      <td>{user.vrm}</td>
    </tr>
    {debug && user["en"] && (
      <tr>
        <td style={{ borderLeft: `solid 4px ${tag.color}` }}>{tag["en"]}</td>
        <td><a href={user["en"].url}>{user["en"].title}</a></td>
        <td><Markdown>{user["en"].description}</Markdown></td>
        <td>{user.vrm}</td>
      </tr>)}
  </>);
}

export default function(props) {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  return (<Layout {...props}>
    <main style={{
      width: '100%',
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
    }}>

      <h1>
        VRMファイルが使えるアプリケーションは？
      </h1>

      <div style={{ margin: '1em' }}>登録、更新の依頼は<a href="https://github.com/vrm-c/vrm.dev/issues">こちら</a>へ。</div>

      <table>
        <tr><th>Type</th><th>URL</th><th>Description</th><th>VRM</th></tr>
        {sortedUsers.map((user) => <Row lang={currentLocale} user={user} />)}
      </table>

    </main>
  </Layout>);
}
