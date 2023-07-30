/* --- Types ----------------------------------------------------------------------------------- */

export type AetherFilterOperator = '$eq' | '$ne' | '$lt' | '$lte' | '$gt' | '$gte'

export type AetherQueryValue<T> = T | { [K in AetherFilterOperator]?: T }

export type AetherQueryObject<T> = {
  [K in keyof T]?: AetherQueryValue<T[K]>
} & {
  $and?: AetherFilter<T>[]
  $or?: AetherFilter<T>[]
}

export type AetherFilter<T> = AetherQueryObject<T>

/** --- translateFieldValue() ------------------------------------------------------------------ */
/** -i- translates the field value to what airtable expects: e.g. true for booleans, 3 for number or "hello" for strings */
export const translateFieldValue = (value: unknown): string => {
  if (typeof value === 'boolean') return value ? '1' : '0'
  if (typeof value === 'number') return value.toString()
  if (typeof value === 'string') return `"${value}"`
  throw new Error(`Value ${value} is not yet supported by 'translateFieldValue()'`)
}

/** --- translateOperator() -------------------------------------------------------------------- */
/** -i- translates a mongoose-like filter operator (like $eq, $ne, $lt, $gt, ...) to an Airtable filterByFormula statement */
export const translateOperator = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  operator: AetherFilterOperator | (string & {}),
  field: string,
  value: unknown
): string => {
  const translatedValue = translateFieldValue(value)
  switch (operator) {
    case '$eq':
      return `{${field}} = ${translatedValue}`
    case '$ne':
      return `{${field}} != ${translatedValue}`
    case '$lt':
      return `{${field}} < ${translatedValue}`
    case '$lte':
      return `{${field}} <= ${translatedValue}`
    case '$gt':
      return `{${field}} > ${translatedValue}`
    case '$gte':
      return `{${field}} >= ${translatedValue}`
    default:
      throw new Error(`Operator ${operator} is not supported by 'aetherQueryToFilterFormula()'`)
  }
}

/** --- translateQuery() ----------------------------------------------------------------------- */
/** -i- translates a mongoose-like filter object (like { $or: [{ name: 'John' }, { name: 'Jane' }] }) to an Airtable filterByFormula statement */
export const translateQuery = <T = any>(query: AetherFilter<T>): string => {
  // Handle '$and' filters -- like { $and: [{ name: 'John' }, { name: 'Jane' }] }
  if (Array.isArray(query.$and)) {
    const $andStatements = query.$and?.map((subQuery: AetherFilter<T>) => `(${translateQuery(subQuery)})`) // prettier-ignore
    return `AND(${$andStatements!.join(', ')})`
  }
  // Handle '$or' filters -- like { $or: [{ name: 'John' }, { name: 'Jane' }] }
  if (Array.isArray(query.$or)) {
    const $orStatements = query.$or?.map((subQuery: AetherFilter<T>) => `(${translateQuery(subQuery)})`) // prettier-ignore
    return `OR(${$orStatements!.join(', ')})`
  }
  // Handle other field filters -- like { name: 'John' }
  const fieldFilters = Object.entries(query)
  const filterStatements = fieldFilters.map(([field, value]) => {
    // If the filter entry isn't an object, it's a simple field filter - So treat it as $eq
    if (typeof value !== 'object') return translateOperator('$eq', field, value)
    // If the filter entry is an object, it's a complex field filter - So translate it
    const subFilterEntries = Object.entries(value!)
    const subFilterStatements = subFilterEntries.map(([operator, operand]) => {
      return `${translateOperator(operator, field, operand)}`
    })
    return `AND(${subFilterStatements.join(', ')})`
  })
  return `AND(${filterStatements.join(', ')})`
}

/** --- aetherQueryToFilterFormula() ----------------------------------------------------------- */
/** -i- translates a mongoose-like filter object to a filterByFormula string Airtable can understand */
export const aetherQueryToFilterFormula = <T = any>(query: AetherFilter<T>) => {
  return translateQuery<T>(query)
}
