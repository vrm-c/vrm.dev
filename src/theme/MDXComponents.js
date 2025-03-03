import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { Icon } from '@iconify/react'; // Import the entire Iconify library.
import GithubMilestone from '@site/src/components/GithubMilestone.tsx'
import GithubRelease from '@site/src/components/GithubRelease.tsx'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  IIcon: Icon, // Make the iconify Icon component available in MDX as <icon />.
  GithubMilestone,
  GithubRelease,
}
