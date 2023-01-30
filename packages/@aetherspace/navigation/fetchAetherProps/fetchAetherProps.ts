import axios from 'axios'

/* --- fetchAetherProps() ---------------------------------------------------------------------- */

export const fetchAetherProps = async (query: string, variables: any) => {
  const { data } = await axios.post('/api/graphql', { query, variables })
  return data
}
