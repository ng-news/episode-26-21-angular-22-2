# Angular 22.2 - ng-news 26/21

A small companion to the episode covering router resources, error boundaries, and TypeScript private members in templates. Adapted from Rainer Hahnekamp's recorded Eternal holidays example. Uses local fixture data, so no Java backend, database, credentials, or external API is needed.

[Open in StackBlitz](https://stackblitz.com/github/ng-news/26-21-angular-22-2?file=src/app/app.routes.ts) · [Fork an editable copy](https://stackblitz.com/fork/github/ng-news/26-21-angular-22-2?file=src/app/app.routes.ts)

## Run

Use Node 24.15 or newer in the Node 24 line (recommended; `.nvmrc` selects Node 24). Angular also supports Node 22.22.3+ in the Node 22 line, or Node 26+. Then:

```sh
npm ci
npm start
```

Open http://localhost:4200. Production check: `npm run build`.

## Try the three features

1. **Open holidays:** navigation waits for a 1.2-second resource load. Watch the loading message above the existing page. `resources` supplies a `Holiday[]` to the page input.
2. **Broken title:** return home, then choose this option. The title constructor throws. `@boundary` shows a fallback, and the three holiday cards remain visible.
3. **Private template member:** change the private `title` signal in `src/app/holidays-page.ts`. Return home and choose Broken title again. The template reads the new value. JavaScript `#private` fields remain class-only.

The console may report the deliberately triggered error; the visible fallback and surviving cards are the behavior being demonstrated. Router resources and error boundaries are developer preview APIs in 22.2.

## Files to explore

- `src/app/app.config.ts`: enable router resources and input binding.
- `src/app/app.routes.ts`: create the resource in the route.
- `src/app/holiday.service.ts`: local delayed resource; the recording used httpResource against a backend.
- `src/app/holidays-page.ts`: input, error boundary, private signal.
- `src/app/title.ts`: optional constructor failure.

## StackBlitz

This project includes a lockfile and `.stackblitzrc` with `npm start`. Use the StackBlitz link above to open this GitHub repository in your browser. There are no dependencies outside this directory.

Official references:
- https://angular.dev/guide/routing/data-fetching-with-resources
- https://angular.dev/guide/templates/error-boundaries
- https://github.com/angular/angular/commit/48a0fd6e8a
