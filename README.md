# Mock Dashboard of Sway

## How to run

1. Clone the repo: `git clone git@github.com:N-Masi/sway-mock.git`

2. Enter the project directory: `cd sway-mock`

3. Create an .env.local file in this directory (`touch .env.local`) and populate with 

        SWAY_API_JWT=<valid_jwt_token>

4. Run the app: `npm run dev`

5. Open the app in the browser: [http://localhost:3000](http://localhost:3000)

## Product Brief

The product I have built is a dashboard for influencers on Sway. It is important for them to track KPIs for all of the *viewpoint groups* where they are a *leader*. As such, the dashboard hierarchy is built with viewpoint groups at the highest level. From there, the leader-user can see the *influence targets* associated with each viewpoint groups. These elections/propositions are the level at which most metrics are tracked. There is also a generic leadership overview dashboard, that tracks summary metrics on the leader.

1. In politics, influence is most clearly exerted in the ability to change an election outcome. In this sense, the network of supporters gains material political power when they reach a critical mass for determining an election. As such, I focus on the number of supporters the leader has in each jurisdiction where there is a influence target.

2. Metrics that matter most:

    a. Number of supporters a leader has in each jurisdiction where there is an influence target for a viewpoint group they lead.

    b. Priorities of supporters. As such, the influence targets within each 

    c. Total number of supporters a user has.

    d. Geographic distribution of support. Heatmap of supporters in US per jurisdiction.

3. 
    **Insight:** The leader's ability to influence election outcomes (metrics a & b). **Action:** Which influence targets they need to continue expanding their coalition in, based on a combination of its importance to their followers and how far away they are from reaching an electoral critical mass. 

    **Insight:** The leader's overall amount of distribution of support. **Action:** Where to continue prioritizing their efforts.

4. Out of scope:
* User login and authentication. To demonstrate the utility of the dashboard, I have made it such that you can select to view the dashboard for any leader in the database.
* Non-hardcoded API access. Dynamically generating JWT tokens and monitoring expiration is downstream of handling logins.
* Supporter dashboard. Not in the assignment specifications.

## Design Tradeoffs

* ...
* ...
* ...

## Future Evolution

**Simplifications:** ...

**Assumptions:**
* Voter turnout will be approximately equal from year to year for the same election. 

**Breaks at scale:**

**New capabilities:**

**Build next:**

## Postmortem:

* Time spent on product brief: 30 minutes
* Time spent on development: X hours
* Time spent on reflection (future evolution): X minutes
