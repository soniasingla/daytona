import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Daytona',
			social: {
				github: 'https://github.com/daytonaio/',
			},
			sidebar: [
			{ label: 'Introduction', link: '/guides/introduction/' },
			{ label: 'Getting Started',
				items: [
					{ label: 'System Requirements', link: '/guides/system-requirements/' },
					{ label: 'Setting Up Daytona', link: '/guides/setting-up-daytona/' },
				]},
			{ label: 'Workspaces',
				items: [
					{ label: 'What are Workspaces?', link: '/guides/what-are-workspaces/' },
					{ label: 'Create a new Workspace', link: '/guides/create-a-new-workspace/' },
					{ label: 'Accessing a Workspace', link: '/guides/accessing-a-workspace/' },
					{ label: 'Collaboration', link: '/guides/collaboration/' },
					{ label: 'Stop a Workspace', link: '/guides/stop-a-workspace/' },
					{ label: 'Delete a Workspace', link: '/guides/delete-a-workspace/' },
			]},
			{ label: 'User Settings',
				items: [
					{ label: 'Accounts', link: '/guides/account-settings/' },
			]},
			{ label: 'References',
				items: [
					{ label: 'Guides', items: [
						{ label: 'Dev Containers: A Beginners Guide', link: 'https://www.daytona.io/dotfiles/guide-create-devcontainer-json-file'},
						{ label: 'Simplifying Dev Container Configuration', link: 'https://www.daytona.io/dotfiles/simplifying-dev-container-configuration'},
						{ label: 'Devfile and Dev Containers: What is the Difference', link: 'https://www.daytona.io/dotfiles/devfiles-development-containers-understanding-differences'},
						{ label: 'Managing Secrets with Doppler in Dev Containers', link: 'https://www.daytona.io/dotfiles/managing-secrets-with-doppler-in-devcontainers'},
						{ label: 'The Ultimate Guide to Mastering Dotfiles', link: 'https://www.daytona.io/dotfiles/ultimate-guide-to-dotfiles'},
						{ label: 'Comprehensive Guide to Selecting Git Provider', link: 'https://www.daytona.io/dotfiles/guide-selecting-git-provider'},
					]},
			]},
			{ label: 'Schedule a Call', link: 'https://daytona.zapier.app/' },
			],
		}),
	],
});