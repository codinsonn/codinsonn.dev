import React, { useEffect } from 'react'

/* --- Transform links ------------------------------------------------------------------------- */

const transformLinks = (replaceMap: Record<string, string>) => {
  const $allLinks = Array.from(document.querySelectorAll('a[href]'))
  const $allSrcs = Array.from(document.querySelectorAll('img[src]'))
  const $allLinksAndSrcs = [...$allLinks, ...$allSrcs]
  $allLinksAndSrcs.forEach(($link) => {
    // Replace hrefs
    const href = $link.getAttribute('href') || ''
    if (href && replaceMap[href]) $link.setAttribute('href', replaceMap[href])
    // Replace src attributes
    const src = $link.getAttribute('src') || ''
    if (src && replaceMap[src]) $link.setAttribute('src', replaceMap[src])
  })
}

/* --- <StorybookLinkTransformer/> ------------------------------------------------------------- */

const StorybookLinkTransformer = (props) => {
  // Props
  const { children } = props

  // -- Memoizations --

  useEffect(() => {
    transformLinks({
      '/.storybook/public/TransformToolsExampleRNSVG.png': '/TransformToolsExampleRNSVG.png', // prettier-ignore
      '?path=/packages/@registries/README.md': '?path=/docs/aetherspace-automation--page',
      '?path=/packages/@aetherspace/schemas/README.md': '?path=/docs/aetherspace-single-sources-of-truth--page', // prettier-ignore
      '?path=/.github/workflows/README.md': '?path=/docs/aetherspace-deployment--page',
    })
  }, [])

  // -- Render --

  return <>{children}</>
}

/* --- Exports --------------------------------------------------------------------------------- */

export default StorybookLinkTransformer
