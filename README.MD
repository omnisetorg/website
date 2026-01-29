# OmniSet Website

<div align="center">
  <img src="public/img/logo.svg" width="120" alt="OmniSet Logo">
  <h3>Your perfect Linux environment with one command</h3>
  <p>Static website built with Astro + Tailwind CSS v4</p>
</div>

## Quick Start (OmniSet Tool)

```bash
curl -sL https://omniset.org/install | bash
```

## Website Development

This is the source code for [omniset.org](https://omniset.org), built with [Astro](https://astro.build) for programmatic SEO.

### Prerequisites

- Node.js 18+
- npm

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding New Content

To add a new page in any section:

1. Create a JSON file in the appropriate `src/content/` folder
2. Follow the schema defined in `src/content/config.ts`
3. Run `npm run build` to generate the new page

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Deployment**: GitHub Pages (static)
- **SEO**: Auto-generated sitemap, JSON-LD structured data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Links

- Website: [https://omniset.org](https://omniset.org)
- OmniSet Install Repo: [github.com/omnisetorg/Install](https://github.com/omnisetorg/Install)
- Issues: [GitHub Issues](https://github.com/omnisetorg/omniset/issues)
