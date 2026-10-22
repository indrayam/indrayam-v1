# Working in this repository

## Before editing

- Check the current branch and working-tree status. Preserve existing user changes.
- Read the relevant HTML, CSS, JavaScript, assets, and Vercel configuration before changing them. Keep edits limited to the requested work.
- Follow the parent [`../AGENTS.md`](../AGENTS.md) when work crosses into the wider site. Never edit the parent `original/` backup unless explicitly requested.

## Site content and behavior

- Preserve the site's existing visual design, responsive behavior, accessibility, working links, and navigation unless the request explicitly calls for a change.
- Treat posts and their URLs as published content. Preserve existing post meaning, links, and URL paths when making unrelated changes; coordinate content and URL changes when requested.
- Keep legacy URL handling in `vercel.json` intact when changing archive paths. Review redirects and links affected by any URL change.
- Avoid unrelated dependencies, frameworks, or tooling. No general build or test command is documented; inspect the existing workflow before adding tools or regenerating content.
- Keep shared elements consistent across the site's pages when changing navigation, header, footer, or common styling.

## Verification

- For content or link changes, review affected pages and links, including relevant archive navigation and redirects.
- For layout or styling changes, inspect affected pages in a browser at desktop and mobile sizes. A source or syntax check alone does not verify visual behavior.
- For JavaScript changes, verify the affected interaction in a browser where possible.
- State what you inspected or rendered, and do not claim browser, redirect, or deployment verification that you did not perform.
