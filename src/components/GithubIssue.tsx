// https://github.com/vrm-c/UniVRM/issues/2582
import { Icon } from '@iconify/react'; // Import the entire Iconify library.

export default function GithubIssue(props: { issue: string, title: string }) {
  const { issue, title } = props;
  return (<a href={`https://github.com/vrm-c/UniVRM/issues/${issue}`}>
    <Icon icon="rivet-icons:caution-solid" />
    {`#${issue} ${title ? title : ''}`}
  </a>)
}
