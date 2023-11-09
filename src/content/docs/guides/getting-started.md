---
title: Getting Started
description: Quickstart guide for Daytona
---

## System Requirements

Before installing Daytona, ensure that your system meets the following requirements:

* **Host Hardware Requirements**: Your host system should have the following specifications:
    * Operating System: Your host system should run on a Linux OS with x86_64 architecture.
    * CPU: It is recommended to have a minimum of 4 vCPUs.
    * RAM: A minimum of 16GB of RAM is required.
    * Disk Space: Ensure your system has at least 200GB of available disk space.
    * Network Access: Your host system should have a public IP and open TCP ports **80**, **443**, and **30000**. If you plan to access the Kubernetes cluster from your local machine, also ensure that TCP **6443** is open.


:::note
Please note that the script has been currently tested on Debian-based distros (Ubuntu/Debian)
:::

- **Domain Configuration**: You'll need a registered domain with both the base domain and wildcard DNS   records pointing to your host's IP. Your DNS records should include:
    * domain name IN A host.ip
    * *.domain-name IN A host.ip

* **Identity Provider OAuth App**: You will need to set up an OAuth App with one of the identity providers such as [GitLab OAuth App](https://docs.gitlab.com/ee/integration/oauth_provider.html) or [GitHub OAuth App](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app). For the identity provider settings, use the following values:
    * Homepage URL: https://{{ domain-name }}
    * Authorization callback URL: https://id.{{ domain-name }}

## Setting Up Daytona

Begin by cloning the Daytona installer repository and executing the setup script with the `--install` flag to initiate the installation process.

```shell
git clone https://github.com/daytonaio/installer
cd installer
./setup.sh --install
```

### User-Specific Environment Variables

After running the script, you will be asked to provide the following three variables:

* `URL`: This is the domain name you have set in your DNS provider and pointed to the IP address of the machine where you are deploying Daytona.
* `IDP_ID`: This is the client ID obtained from your identity provider as specified in the [System Requirements](#system-requirements).
* `IDP_SECRET`: This is the client secret obtained from your identity provider as specified in the [System Requirements](#system-requirements).

```shell
./setup.sh --install
...
Enter app hostname (valid domain) (URL): daytona.example.com
Enter GitHub Client ID (IDP_ID): changeme
Enter GitHub Client Secret (IDP_SECRET): changeme
```

Alternatively, you can set all three variables via the CLI when running the script, like this:

```shell
URL="daytona.example.com" IDP_ID="changeme" IDP_SECRET="changeme" ./setup.sh --install
```

Once you have provided these values, it will ask you to deploy a DNS TXT Record in your DNS settings to create a secure certificate for your server. It will provide you with a name and a value that you need to add to your DNS settings. Once registered it may take some time to update the DNS settings.

Now, you're ready to use Daytona for your development environment. You can access your Daytona Dashboard at your domain.

## Restart/Cleanup

If you ever need to reset your Daytona setup and start fresh, you can run the script with the `--remove` parameter. This action will delete the k3s cluster along with all installed tools. Once done, you can recreate your environment from scratch using the `--install` option.

To remove your Daytona setup, use the following command:

```bash
./setup.sh --remove
```

After successfully removing your setup, you can easily recreate it by running the following command:

```bash
./setup.sh --install
```
