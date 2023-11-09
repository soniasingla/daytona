---
title: Accessing a Workspace
description: A guide for accessing a Workspace
---

Accessing a workspace in Daytona is a simple process, simplifying the workflow and environment setup for your projects.

## Accessing workspace with browser-based IDE

To access your workspace using a browser-based IDE, you need to prefix your GitHub or GitLab repository with `daytona.work/#`. For example,

```bash
daytona.work/#https://github.com/daytonaio/installer
```

Once launched, it will look like this:


![Daytona Browser IDE](./src/assets/browser.png)

Launching your workspace in Daytona through the browser sets up a complete development environment. The dependencies are automatically fetched, your integrated development environment (IDE) is initiated, and the application preview is opened.


## Accessing workspace with your local IDE

If you prefer to use your [local development environment](../quickstart), you can access your workspace through the command line. Daytona allows you to open a command-line interface that connects you to your remote environment. This provides a familiar command-line interface that is in sync with your workspace environment.

To view Workspace Details, Git Context, and Git Status, use the following command in your terminal:

```bash
daytona ls
```

To open your project in your preferred IDE, such as Visual Studio Code (VS Code), use the following command:

```bash
daytona code
```
