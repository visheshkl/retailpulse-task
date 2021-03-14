# Codeforces Contest API Webapp 
### This webapp [https://cflist.vercel.app/] is made for the task "Front-End Task" for Retail Pulse.

### Live hosted link :- [https://cflist.vercel.app/]

## Problem Statement :-
Develop a single page web app (preferably ReactJS). The app should list and search for contests that are fetched from the API (https://codeforces.com/api/contest.list). 

## List of all major libraries used :-
1. ReactJs (Frontend framework)
2. NextJs (Frontend framework)
3. Chart.js ( To draw relevant charts )

## Functions of the webapp :-
1. Main screen which would show a list of contests. 
2. Users should be able to filter results by a dropdown filter for contest type (ICPC/CF) and search contests by name.
3. Pagination (client side) for the results of the search, the user should be able to select page size 
4. As the user start to type in the search area, the table should be dynamically filtered (client side filtering) 
5. Make a graph of durationSeconds against the contest name. It should allow dynamic filtering on the basis of contest Phase and contest Status.


## List of all brownie points :-
1. - [x] Search should not trigger on every keystroke of the user (Debounce).
2. - [x] Clicking on the contest name would redirect to a contest details page, with a route like contest/{contest_id} that displays the details of the contest. (Id, name, description, type, phase).
3. - [x] Mark some contests as favorites. A separate filter to view contests that were marked as favorites. 
4. - [x] Tooltips and visualizations in graphs.

## Additional Features :-
1. The complete web-app is responsive.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
