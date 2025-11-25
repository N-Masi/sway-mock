import { NextRequest, NextResponse } from 'next/server';
import { fetchGraphQL } from '../utils';

export async function GET(request: NextRequest) {

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  let query;
  let queryVars;
  if (id) {
    query = `
        query GetLeaderViewpointGroups($profileId: uuid!) {
            viewpointGroups(
            where: {
                profileViewpointGroupRels: {
                type: { _eq: LEADER },
                profile: { id: { _eq: $profileId } }
                }
            }
            ) {
            id
            title
            description
            supporterCount
            currentSlug {
                id
                slug
                isCurrent
                viewpointGroupId
            }
            slugs {
              id
              slug
              viewpointGroupId
            }
            totalUniqueSupporters
            totalUniqueVoters
            profileViewpointGroupRels {
                id
                type
                profile {
                    id
                    displayNameShort
                    bio
                }
            }
            }
        }
    `;
    queryVars = { profileId: id };
  } else {
    query = '{ viewpointGroups { id title description supporterCount currentSlug { id slug isCurrent viewpointGroupId } totalUniqueSupporters totalUniqueVoters profileViewpointGroupRels { id profile { bio id displayNameShort } type } } }';
    queryVars = {};
}

  try {
    const data = await fetchGraphQL(process.env.SWAY_API_JWT as string, query, queryVars);
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: "Server error", details: err }, { status: 500 });
  }

}
