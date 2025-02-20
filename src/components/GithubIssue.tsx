// https://github.com/vrm-c/UniVRM/issues/2582

export default function GithubIssue(props: { issue: string, title: string }) {
  const { issue, title } = props;
  return (<a href={`https://github.com/vrm-c/UniVRM/issues/${issue}`}>
    <span className="github-link icon-black" />
    {`#${issue} ${title ? title : ''}`}
  </a>)
}
