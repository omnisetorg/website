# OmniSet

<div align="center">
  <img src="assets/logo.svg" width="120" alt="OmniSet Logo">
  <h3>Your perfect Linux environment with one command</h3>
</div>

OmniSet is an automated setup script that configures your Linux environment based on your needs. Whether you're a developer, gamer, student, or content creator, OmniSet can quickly set up all the tools you need.

## Quick Start

```bash
wget -qO- https://omniset.org/install | bash
```

## Features

- Pre-configured profiles for different user types (Developer, Gamer, Student, etc.)
- Custom profile creation with hand-picked tools
- Support for most Debian-based Linux distributions
- Automated installation and configuration of popular tools and applications
- Easy to use interactive mode

## Supported Profiles

- **Minimalist Dev**: Essential development tools + VSCode
- **Fullstack Dev**: Complete development environment including Docker and databases
- **Content Creator**: Media tools, editing software, and streaming applications
- **Gamer**: Steam, Discord, and gaming utilities
- **Student**: Academic and productivity tools
- **Designer**: Creative and design applications
- **Data Scientist**: Data analysis and machine learning tools

## System Requirements

- Debian-based Linux distribution (Ubuntu, Debian, Linux Mint, etc.)
- Bash shell
- Internet connection

## Usage

### Quick Install (Interactive)

```bash
wget -qO- https://omniset.org/install | bash
```

### Install Specific Profile

```bash
wget -qO- https://omniset.org/install?personality=minimalist | bash
```

### Custom Installation

```bash
wget -qO- https://omniset.org/install?tools=vscode,docker,nodejs | bash
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

OmniSet takes security seriously. We:

- Sign all releases
- Use HTTPS for downloads
- Verify package signatures
- Support script inspection before execution

To inspect the script before running:

```bash
wget -O omniset-install https://omniset.org/install
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Support

- Documentation: [https://omniset.org](#)
- Issues: [GitHub Issues](https://github.com/omnisetorg/omniset/issues)
- Discord: [Join our community](https://discord.gg/nk5HAAgQQH)