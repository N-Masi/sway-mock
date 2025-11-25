import { NextRequest, NextResponse } from 'next/server';
import { fetchGraphQL } from '../utils';

export async function GET(request: NextRequest) {

  const { searchParams } = new URL(request.url);
  const role = searchParams.get("role");

  // enum Role {
  //   ADMINISTRATOR,
  //   BOOKMARKER,
  //   DEFAULT,
  //   LEADER,
  //   SUPPORTER,
  // }

  let query;
  let queryVars;
  if (role) {
    // query = `
    //     query GetLeaderProfiles($profileRole: ProfileViewpointGroupRelTypesEnum) {
    //       profiles(
    //         where: {
    //           profileViewpointGroupRels: {
    //             type: { _eq: $profileRole }
    //           }
    //         }
    //       ) {
    //         id
    //         displayNameShort
    //         displayNameLong
    //         bio
    //         avatarMedia {
    //           id
    //           link
    //         }
    //         profileViewpointGroupRels {
    //           viewpointGroup {
    //             id
    //             title
    //           }
    //         }
    //       }
    //     }
    // `;
    query = `
      query GetLeaderProfiles($profileRole: ProfileViewpointGroupRelTypesEnum) {
        profiles(
          where: {
            profileViewpointGroupRels: {
              type: { _eq: $profileRole }
            }
          }
        ) {
          id
          displayNameShort
          displayNameLong
          bio
          avatarMedia {
            id
            link
          }
          profileViewpointGroupRels(
            where: {
              type: { _eq: $profileRole }
            }
          ) 
            {
            viewpointGroup {
              id
              title
              currentSlug {
                id
                slug
                viewpointGroupId
              }
              isPublic
            }
          }
        }
      }
    `
    queryVars = { profileRole: role };
  } else {
    query = '{ profiles { id displayNameLong } }';
    queryVars = {};
  }

  try {
    const data = await fetchGraphQL(process.env.SWAY_API_JWT as string, query, queryVars);
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: "Server error", details: err }, { status: 500 });
  }

}
