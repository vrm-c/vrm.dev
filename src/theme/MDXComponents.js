import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { Icon } from '@iconify/react'; // Import the entire Iconify library.
import GitHubMilestone from '@site/src/components/GitHubMilestone.tsx'
import GitHubRelease from '@site/src/components/GitHubRelease.tsx'
import GitHubIssue from '@site/src/components/GitHubIssue.tsx'
import UniVRMSource from '@site/src/components/UniVRMSource';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  IIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
  GitHubMilestone,
  GitHubRelease,
  GitHubIssue,
  UniVRMSource,
}
