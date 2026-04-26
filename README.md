# darshkodwani.com — Personal Website

Source for [darshkodwani.com](https://darshkodwani.com), hosted on GitHub Pages.

## Structure

```
/
├── index.html          # Home page
├── about_me.html       # About page
├── research.html       # Research & publications
├── teaching.html       # Teaching & lectures
├── media.html          # Media appearances
├── agent.html          # AI assistant chat interface
├── css/                # Stylesheets
├── assets/             # Images and static assets
├── Images/
├── Documents/
├── robots.txt
├── sitemap.xml
└── CNAME               # Custom domain: darshkodwani.com
```

## AI Agent

The site includes an AI assistant at `/agent.html` that answers questions about Darsh. The chat UI lives here but all backend logic runs in a separate private Cloudflare Worker — see [darsh-ai-worker](https://github.com/DarshKodwani/darsh-ai-worker).

The worker is deliberately excluded from this repo (see `.gitignore`) because this repo is public. The worker contains the system prompt, agent logic, and API integrations.

## Deployment

This repo auto-deploys to GitHub Pages on every push to `main`. The custom domain is configured via `CNAME` and DNS settings in Cloudflare.

## What's NOT here

- `worker/` — the Cloudflare Worker backend (private repo: [darsh-ai-worker](https://github.com/DarshKodwani/darsh-ai-worker))
- API keys — all secrets live in Cloudflare Worker environment
