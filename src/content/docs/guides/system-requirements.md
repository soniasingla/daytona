---
title: System Requirements
description: Quickstart Guide for Daytona
---

Before installing Daytona, ensure that your system meets the following requirements:

## Host Hardware Requirements

Your host system should have the following specifications:

* Operating System: Your host system should run on a Linux OS with x86_64 architecture.
* CPU: It is recommended to have a minimum of 4 vCPUs.
* RAM: A minimum of 16GB of RAM is required.
* Disk Space: Ensure your system has at least 200GB of available disk space.
* Network Access: Your host system should have a public IP and open TCP ports **80**, **443**, and **30000**. If you plan to access the Kubernetes cluster from your local machine, also ensure that TCP **6443** is open.


:::note
Please note that the script has been currently tested on Debian-based distros (Ubuntu/Debian)
:::

## Domain Configuration

You'll need a registered domain with both the base domain and wildcard DNS   records pointing to your host's IP. Your DNS records should include:

* domain name IN A host.ip
* *.domain-name IN A host.ip

## Identity Provider OAuth App

You will need to set up an OAuth App with one of the identity providers such as [GitLab OAuth App](https://docs.gitlab.com/ee/integration/oauth_provider.html) or [GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app). For the identity provider settings, use the following values:

* Homepage URL: https://{{ domain-name }}
* Authorization callback URL: https://id.{{ domain-name }}
