// https://github.com/vrm-c/UniVRM/releases/tag/v0.128.2
// https://docusaurus.community/knowledge/design/icons/iconify/
// https://icon-sets.iconify.design/
import { Icon } from '@iconify/react'; // Import the entire Iconify library.

export default function GithubRelease(props: { tag: string }) {
  const { tag } = props;
  let url = `https://github.com/vrm-c/UniVRM/releases/tag/${tag}`;
  return (<span>
    <Icon icon="subway:download-1" />
    <a href={url}> {tag} </a>
  </span>)
}
