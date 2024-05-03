export const generateProfileApiParams = (id: string) => {
  const table = 'profiles'
  const params = {
    select: '*',
    filter: { id }
  }

  return [table, params]
}
