# Visual KPI Documentation

Welcome to the Visual KPI Documentation repository. This documentation project is powered by Docusaurus, providing a user-friendly and organized platform for learning and reference.

## Table of Contents

- [Visual KPI Documentation Page](#visual-kpi-documentation-page)
- [Project Organization](#project-organization)
- [Branches Organization](#branches-organization)
- [Responsibilities](#responsibilities)
- [Processes](#processes)
  - [Create Issues](#create-issues)
  - [Perform a Review](#perform-a-review)

## Visual KPI Documentation Page

To access the Visual KPI documentation page related to the main branch of this project, use the link below:

- [Visual KPI Documentation](https://main--transpara-docs.netlify.app/)

## Project Organization

To contribute or request modifications and updates, please create an issue. When creating issues, be sure to assign relevant labels to facilitate project organization. You can find a list of existing labels [here](https://github.com/transpara/documentation/labels). Additionally, you have the option to create branches and assign collaborators to them.
All new issues are initially allocated to the "ToDo" column within the [Project](https://github.com/orgs/transpara/projects/19) board of the project repository.

## Branches Organization

The primary branch for this project is the **main** branch, from which documentation deployments are based. It's crucial to note that direct pushes to the main branch are **strongly discouraged**. Instead, for any modifications or updates, create a new branch with a descriptive name, and push all your commits to this branch.

Upon completing your work, whether it involves creating new documentation pages or enhancing the documentation's user experience, kindly request a review. After reviewing and addressing any existing bugs or issues, your new branch will be merged into the main branch.

## Responsibilities

The WriteChoice team takes responsibility for creating and maintaining the documentation. If you're creating an issue related to the documentation content, feel free to assign the issue to one of our WriteChoice members. Additional guidance and support will be provided in the future.

## Processes

Here, you will find an explanation of the processes related to the management operations inside GitHub.

### Create Issues

You will create an issue when:

- You need to fix something inside the documentation.
- A new feature was created for the software and needs to be documented.
- The documentation isn't clear and needs improvements.
- Other modifications are required.

To create an issue, you will follow the steps below:

1. Access the [Issue page](https://github.com/transpara/documentation/issues).
2. Click **New Issue**.
3. On the new page, you will provide information regarding the task to be executed:
    - Define a descriptive.
    - Describe the task to be executed.
    - Assign the task to a WriteChoice member (Heitor).
    - Add labels to the issue. You can find all used labels by Transpara [Here](https://github.com/transpara/documentation/labels). Add at least one priority label.

4. Click **Submit new** issue.

The person to whom you assigned the issue will be notified. The image below illustrates the steps:

![Create an issue](/assets/create-issue.gif "Create an issue")

### Perform a Review

When the WriteChoice team creates or updates some content, they will require a review from Transpara. If you were assigned to review a pull request (PR), you will receive an email informing the PR to review. If you are on the [Documentation repository](https://github.com/transpara/documentation), you can follow the steps below to perform a review:

1. Access the [Pull Request tab](https://github.com/transpara/documentation/pulls).
2. Select the PR you need to review.
3. On the PR page, you have access to the commit history and also can access the **😎 Deploy Preview** from the Netlify integration.

![Netlify deploy preview](/assets/deploy-preview.png "Netlify deploy preview")

4. Access the **Files Changed** tab, where you can check all files that have been changed. If you're using the split preview, the original files appear on the left (lines modified are highlighted in red) and the new version appears on the right (modifications are highlighted in green). 

![Files changed](/assets/files-changed.png "Files changed") 

5. To add a review, move your mouse over the modified file. A blue button will appear on the line beginning. By clicking on it, a review window will appear.
6. Add your review regarding the new content. You can tag users on your review by adding **@username**. After adding the review, click **Start Review**. You repeat the process as many times as necessary. 
7. After finishing your review, click **Finish your review**. The PR owner will be notified. However, we recommend always tagging the content creator to ensure they will be aware of your comments.

![Review process](/assets/files-changed.png "Review Process")

Alternatively, to add a comment on specific lines, you can add a general comment. In this case, instead of following the instructions after Step 4 above, you need to click on **Review Changes**. A preview window will appear where you can provide your review.

#### Change files directly on GitHub

If you prefer to leave the comments behind and perform modifications to the file directly on GitHub, follow the steps below, but before complete the steps from 1 to 4, described before.

5. When you access the **Files Changed**, look for the file you want to edit.
6. Click on the tree dots (...) button at the right corner of the file window and select **Edit file**. 
7. A new page will open where you can edit the file content. Make the necessary modifications.
8. After editing the file, click **Commit Changes**. You need to:
    - Provide a commit message. GitHub provides a suggestion that most of the time you can use.
    - Add a description to explain your modification. You can use the description field to tag users (@username).
    - Be sure to select **Commit directly to the *branch_name* branch**.
    - Click **Commit Changes**. A new commit will be created and everyone who has worked on the branch will be notified.

![Edit file](/assets/edit-file.gif "Edit file")