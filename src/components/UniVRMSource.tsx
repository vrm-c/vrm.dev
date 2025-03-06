import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { Icon } from '@iconify/react'; // Import the entire Iconify library.

type UniVRMSourceOptions = {
  path: string;
  hash?: string;
};

export default function UniVRMSource(props: UniVRMSourceOptions) {
  const { path } = props;
  const hash = props.hash ? props.hash : 'master';
  const [get, setGet] = React.useState<string>('get...');

  const url = `https://raw.githubusercontent.com/vrm-c/UniVRM/refs/heads/${hash}/Assets/${path}`;
  React.useEffect(() => {
    fetch(url, { method: 'GET' })
      .then(res => res.text())
      .then(data => {
        setGet(data)
      })
  }, [])

  return (<>
    <a href={`https://github.com/vrm-c/UniVRM/blob/${hash}/Assets/${path}`} >
      <Icon icon="mdi:github" />
    </a>
    {hash}
    <CodeBlock
      language="jsx"
      title={path}
      showLineNumbers>{get}
    </CodeBlock>
  </>);
}
