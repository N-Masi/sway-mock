# Mock Dashboard of Sway

![](demo.mov)
![](compressed_demo.webm)

## How to run

1. Clone the repo: `git clone git@github.com:N-Masi/sway-mock.git`

2. Enter the project directory: `cd sway-mock`

3. Install necessary modules: `npm install`

4. Create an .env.local file in this directory (`touch .env.local`) and populate with a valid JWT token to the SwayPI

        SWAY_API_JWT=<valid_jwt_token>

5. Run the app: `npm run dev`

6. Open the app in the browser: [http://localhost:3000](http://localhost:3000)

## Product Brief

The product I have built is a dashboard for influencers on Sway. It is important for them to track KPIs for all of the *viewpoint groups* where they are a *leader*. As such, the dashboard hierarchy is built with viewpoint groups at the highest level.

1. In politics, influence is most clearly exerted in the ability to change an election outcome. In this sense, the network of supporters gains material political power when they reach a critical mass for determining an election. As such, I focus on the number of supporters.

2. Metrics that matter most:

    a. Number of supporters.

    b. Number of voters.

    c. Ratio of voters to supporters.

3. 
    **Insight:** The leader's ability to influence election outcomes (metrics a & b). **Action:** Which influence targets they need to continue expanding their coalition in, based on a combination of its importance to their followers and how far away they are from reaching an electoral critical mass. 

    **Insight:** The leader's conversion from support to voting (metric c). **Action:** They can understand which which viewpoint groups they actually have high voting support in, and conversely, which viewpoint groups they need to prioritize for drumming up voting support.

4. Out of scope:
* User login and authentication. To demonstrate the utility of the site, I have made it such that can you view the dynamically generated dashboard for any leader in the database.
* Non-hardcoded API access. Dynamically generating JWT tokens and monitoring expiration is downstream of handling logins.

## Design Tradeoffs

* Spent so much time building out the infrastructure to select any user (rather than hardcode one) that I had less time to work on visualizations.

## Future Evolution

**Simplifications:** Hardcoded in image for viewpoint group `4d627244-5598-4403-8704-979140ae9cac`, as I couldn't figure out where the slugs for these images was in relation to viewpoint group IDs in the database.

**Assumptions:** I couldn't find the answer in the docs, so I am assuming totalUniqueVoters is a subset of totalUniqueSupporters.

**Breaks at scale:** With 100k leaders, the call to get the list of all of them will no longer be performant. However, this pain point will be eliminated with user login.

**New capabilities:** I would look at the cross-section of users that appear in different viewpoint groups, to see which leaders have most overlap. This can provide actionable insight toward coalition building.

**Build next:** Plotting the geographic distribution of users per jurisdiction via choropleth. I am a maintainer for a political border geojson-fetching [library](https://github.com/ibhalin/pygeoboundaries), so I would've liked to incorporate these polygons into a basemap. However, I did not have time to figure out map plotting in NextJS.
