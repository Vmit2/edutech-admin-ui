export function translatePaginatedResponse(data, recordTranslator) {
  return {
    ...data,
    records: data.records.map(recordTranslator),
  }
}
