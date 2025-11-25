import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {

  const query = '{ profiles { id displayNameLong } }';

  try {
    const data = await fetchGraphQL(process.env.SWAY_API_JWT as string, query);
    console.log(data);
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: "Server error", details: err }, { status: 500 });
  }

}
