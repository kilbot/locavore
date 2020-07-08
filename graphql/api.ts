import useFetch from '../lib/useFetch'

function getData(data) {
  if (!data || data.errors) return null
  return data.data
}

function getErrorMessage(error, data) {
  if (error) return error.message
  if (data && data.errors) {
    return data.errors[0].message
  }
  return null
}

export const useFoods = () => {
  const query = `query Foods {
    {
			foods {
				data {
					name
				}
			}
		}
	}`

	const size = 100
  const { data, error } = useFetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { size },
    }),
  })

  return {
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
    error,
  }
}