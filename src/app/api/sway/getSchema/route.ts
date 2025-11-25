import { NextRequest, NextResponse } from 'next/server';
import { fetchGraphQL } from '../utils';

export async function GET(request: NextRequest) {

  const query = 'query Introspection { __schema { types { name fields { name } } } }';

  try {
    const data = await fetchGraphQL(process.env.SWAY_API_JWT as string, query);
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: "Server error", details: err }, { status: 500 });
  }

}
