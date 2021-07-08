export function parseSearchTerm(params, key = 'q') {
  const value = params.get(key)

  return value ? value.trim() : ''
}
