# POS | KDS Aligner

## Run The Project

### 1. Install Dependencies

Install Typescript (skip if you already have it )

```bash
npm i -g typescript
```

Install `pnpm` (skip if you already have it )

```bash
npm i -g pnpm
```

Install Project Packages

```bash
pnpm install
```

run the project

```bash
pnpm run dev
```

### 2. Fill Required Variables in .evn

go to [.env.template](.env.template) then copy it , rename the copy to `.env`, then ask project owner give it's env variables values

## Starting a Feature, Editing, or Fixing a Bug (Steps)

-   **Starting a Feature**
    -   Create a new branch from `base`. Name your branch using the format `{issue-id}-{issue-title}`.
    -   Once you've made your changes, create a merge request into `base`. You can merge it yourself if you don't require a code review.
-   **Fixing a Bug**
    -   Create a new branch from `base`. Name your branch using the format `{issue-id}-{issue-title}`.
    -   After making your changes, create a merge request into `base`.
    -   Code reviews are required before merging bugs into `base`. If you're fixing a bug that appeared in a feature you didn't work on, it's best to request a review from the relevant team member before merging it into `base`.

### Releasing and Deploying

When releasing a new version and deploying it, there are some notes and steps you should be aware of:

**Important Notes:**

-   This repository contains three types of branches:
    -   The Base Branch `base`: This is where you create any new branch.
    -   The Deployment Branches (`dev`, `super-admin`, `main`, `main-super-admin`):
        -   Each of these branches has a domain or subdomain, baseURL , App Key (may some of them share the same key ).
        -   These branches are categorized as follows:
            -   For developers and testers: `dev` , `super-admin`
            -   Production: `main`, `main-super-admin`

**Steps:**

1. Merge all ready (features, updates, fixes) branches into the `base` branch.
2. In the `base` branch, increase the version number (e.g., v1.2.0 -> v1.3.0).
3. Commit your changes and push them to the `base` branch with a release message (e.g., `git commit -m"release: v1.3.0"`).
4. Create a new tag with the same name as the new version.
    - Example: `git tag -a v1.3.0 -m"version v1.3.0: Added (feature name) Feature"`
    - Push the tag: `git push origin v1.3.0`
5. Create a new branch named `merge-{version}` (e.g., v1-3-0). Note that the branch name uses `-` instead of `.` (this branch is referred to as "The Merge Branch").
6. Merge "The Merge Branch" into `dev`, `super-admin`, so that developers, testers, reporters, and business owners can test it.
7. After approval from both testers and backend team members, you can merge that version into the production branches.
8. Once the merge is complete, you can delete "The Merge Branch". Creating a merge branch is crucial to prevent accidentally merging `base` and deleting something by mistake.
9. Notify team members that a new deployment has occurred. The notification should include:
    1. Version number (critical)
    2. Updated branches (critical)
    3. Completed tasks (optional)
        - You can gather these from the commit messages on the `base` branch that were made after the previous version was released. Copy only the names of the branches that were merged into `base`.
