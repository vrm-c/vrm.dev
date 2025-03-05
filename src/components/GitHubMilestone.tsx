// https://github.com/vrm-c/UniVRM/milestone/98

export default function GitHubMilestone(props: { milestone: string, title: string, closed: boolean }) {
  const { milestone, title, closed } = props;
  let url = `https://github.com/vrm-c/UniVRM/milestone/${milestone}`;
  if (closed) {
    url += "?closed=1"
  }
  return (<a href={url}>
    <span className="github-link icon-black" />
    {`${title ? title : milestone}`}
  </a>)
}
