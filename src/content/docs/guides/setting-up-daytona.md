---
title: Setting up Daytona
description: Quickstart guide for Daytona
---

To set up your own non-commercial Daytona instance, follow the below-mentioned instructions:

### VM Setup

Begin by setting up a Virtual Machine (VM) with the necessary specifications, ensuring it has a public IP address. This can be from any cloud provider such as AWS, GCP, or Digital Ocean.

* **Choose Region:** While configuring the VM, select the region based on your geographical location.

* **Operating System:** Select the operating system Ubuntu with version 22 for compatibility.

* **CPU and RAM:** Choose a CPU option with a minimum of 16 GB of RAM to meet the system requirements. You can find more information on [System requirements](../system-requirements) page.

:::note
Please make sure to note the public IP of your VM.
:::

### Domain Setup

You will need a valid domain for setting up the Daytona instance. Once you have a domain, update the `A record` of your domain to point to the public IP of your VM.

### OAuth Setup

Next, create an OAuth application with one of the identity providers either GitLab or GitHub. This is required for users to access repositories and spin-up workspaces.

**GitHub OAuth Configuration**

Navigate to your [GitHub account settings](https://github.com/settings/profile), select the [Developer settings](https://github.com/settings/apps), and you will find the option to create **OAuth Apps**.

**Provide Application Details**

* **Application Name:** The URL name of the domain
* **Homepage URL:** The URL of the domain
* **Authorization callback URL:** https://id.{{ domain-name }}

Register the application and make sure to copy the client secret (IDP_SECRET).

## Accessing Dashboard

Now that you have created a droplet, go to the console. Begin by cloning the Daytona installer repository and executing the setup script with the `--install` flag to initiate the installation process.

```shell
git clone https://github.com/daytonaio/installer
cd installer
./setup.sh --install
```

### User-Specific Environment Variables

After running the script, you will be asked to provide the following three variables:

* `URL`: This is the domain name you have set in your DNS provider and pointed to the IP address of the machine where you are deploying Daytona.
* `IDP_ID`: This is the client ID obtained from your identity provider.
* `IDP_SECRET`: This is the client secret obtained from your identity provider.

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

If you ever need to reset your Daytona setup and start fresh, you can do so by running the script with the `--remove` parameter. This action will delete the k3s cluster along with all installed tools. Once you've done this, you can recreate your environment from scratch using the `--install` option.

To remove your Daytona setup, use the following command:

```bash
./setup.sh --remove
```

After successfully removing your setup, you can easily recreate it by running the following command:

```bash
./setup.sh --install
```
