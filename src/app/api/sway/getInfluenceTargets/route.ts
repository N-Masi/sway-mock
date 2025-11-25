import { NextRequest, NextResponse } from 'next/server';
import { fetchGraphQL } from '../utils';

export async function GET(request: NextRequest) {

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  let query;
  let queryVars;
  if (id) {
    query = `
        query GetViewpointGroupInfluenceTargets($viewpointGroupId: uuid!) {
            viewpointGroups(where: { id: { _eq: $viewpointGroupId } }) {
                id
                title
                influenceTargetViewpointGroupRels {
                    id
                    influenceTarget {
                        id
                        name
                        description
                        jurisdiction {
                            id
                            name
                        }
                        offices {
                            id
                            title
                        }
                        measures {
                            id
                            title
                        }
                    }
                }
            }
        }
    `;
    queryVars = { viewpointGroupId: id };
  } else {
    query = '{ viewpointGroups { id } }';
    queryVars = {};
}

  try {
    const data = await fetchGraphQL(process.env.SWAY_API_JWT as string, query, queryVars);
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: "Server error", details: err }, { status: 500 });
  }

}
