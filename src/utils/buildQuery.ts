export const buildQuery = (query, params) => {
  const { select, filter } = params

  if (select) {
    query = query.select(select)
  }

  if (filter) {
    Object.entries(filter).forEach(([key, value]) => {
      query = query.eq(key, value)
    })
  }

  return query
}
