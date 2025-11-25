# Mock Dashboard of Sway

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

1. In politics, influence is most clearly exerted in the ability to change an election outcome. In this sense, the network of supporters gains material political power when they reach a critical mass for determining an election. As such, I focus on the number of supporters the leader has in each jurisdiction where there is a influence target.

2. Metrics that matter most:

    a. Number of supporters.

    b. Number of voters.

    c. Ratio of voters to supporters.

    d. Geographic distribution of support. Heatmap of supporters in US per jurisdiction.

3. 
    **Insight:** The leader's ability to influence election outcomes (metrics a & b). **Action:** Which influence targets they need to continue expanding their coalition in, based on a combination of its importance to their followers and how far away they are from reaching an electoral critical mass. 

    **Insight:** The leader's overall amount of distribution of support. **Action:** Where to continue prioritizing their efforts.

4. Out of scope:
* User login and authentication. To demonstrate the utility of the site, I have made it such that can you view the dynamically generated dashboard for any leader in the database.
* Non-hardcoded API access. Dynamically generating JWT tokens and monitoring expiration is downstream of handling logins.
* Supporter dashboard. Not in the assignment specifications.

## Design Tradeoffs

* Spent so much time building out the infrastructure to select any user (rather than hardcode one) that I had less time to work on visualizations.
* ...
* ...

## Future Evolution

**Simplifications:** ...

**Assumptions:**
* I couldn't find the answer in the docs, so I am assuming totalUniqueVoters is a subset of totalUniqueSupporters

**Breaks at scale:**

**New capabilities:**

**Build next:**
