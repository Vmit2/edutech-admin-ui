import startCase from 'lodash/startCase'

export function parsePathname(pathname) {
  // Ignore the first path because it's empty.
  const paths = pathname.split('/').slice(1)
  const count = paths.length

  let partialPath = ''
  const crumbs = paths.map((path, i) => {
    const isLink = i + 1 < count
    const title = Number(path) ? 'Details' : startCase(path) // Handle detail routes integer :id
    const href = `${partialPath}/${path}`

    partialPath = href

    return {
      isLink,
      title,
      href,
    }
  })

  if (crumbs && crumbs[0].href !== '/dashboard') {
    crumbs.unshift({
      isLink: true,
      title: 'Dashboard',
      href: '/dashboard',
    })
  }

  return crumbs
}
