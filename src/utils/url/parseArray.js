import compact from 'lodash/compact'

export function parseArray(params, key, validOptions = null) {
  const value = params.get(key) || ''
  let values = value.split(',')

  if (validOptions) {
    values = values.filter((v) => validOptions.includes(v))
  }

  return compact(values)
}

export function parseIntArray(params, key) {
  const value = parseArray(params, key)

  return compact(value.map((i) => Math.floor(Number(i))))[0]
}
