async function fetchGraphQL<T>(
    jwt: string,
    query: string,
    variables: Record<string, unknown> = {}
  ): Promise<T> {
    const response = await fetch('https://sway-production.hasura.app/v1/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      },
      body: JSON.stringify({ query, variables })
    });
    return response.json();
  }

export { fetchGraphQL };
