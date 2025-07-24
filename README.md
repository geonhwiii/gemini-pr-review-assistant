# 🔍 Gemini PR Review Assistant

AI-powered pull request review and analysis using Gemini CLI

## 📖 Overview

Gemini PR Review Assistant is a command-line tool that leverages Google's Gemini AI to provide comprehensive pull request reviews. It analyzes code changes, identifies potential issues, and provides detailed feedback on security, performance, code quality, and best practices.

## ✨ Features

- 🤖 **AI-Powered Reviews**: Uses Gemini 2.5 Flash for intelligent code analysis
- 🔗 **GitHub PR Integration**: Automatically detects and analyzes actual pull requests
- 💬 **PR Comment Integration**: Posts review results directly as PR comments
- 🔒 **Security Analysis**: Identifies potential security vulnerabilities
- ⚡ **Performance Insights**: Highlights performance issues and optimization opportunities
- 🎯 **Code Quality Assessment**: Evaluates code structure, readability, and maintainability
- 🌐 **Multi-language Support**: Korean and English UI/review messages
- 📊 **Comprehensive Analysis**: Reviews commit history, file changes, and code diffs
- 🎨 **Beautiful CLI**: Clean, colorful output with loading animations

## 🚀 Installation

### Prerequisites

**All of the following are required:**

1. **Node.js** (>=16.0.0)
2. **GitHub CLI** - Install and authenticate:
   ```bash
   brew install gh  # macOS
   # Visit https://cli.github.com for other platforms
   gh auth login    # Authenticate with GitHub (required)
   ```
3. **Gemini CLI** - Install and authenticate:
   ```bash
   npm install -g @google/gemini-cli
   gemini # Follow authentication prompts
   ```

### Install PR Review Assistant

```bash
npm install -g gemini-pr-review-assistant
```

## 📋 Usage

### Basic Commands

```bash
# Review current branch against main
aipr

# Review specific branch
aipr feature/login

# Compare with specific base branch
aipr --diff develop

# Review and post comment to PR
aipr --post-comment

# Configure language settings
aipr --configure

# Show help
aipr --help
```

### Examples

```bash
# Review current branch changes
aipr

# Review feature branch against main
aipr feature/user-auth

# Compare current branch with develop
aipr --diff develop

# Review and automatically post to PR
aipr --post-comment

# Review specific branch and post comment
aipr feature/payments --post-comment
```

## 🎯 Review Categories

The AI provides analysis in these key areas:

### 🔒 Security Issues
- Authentication and authorization flaws
- Input validation problems
- Data exposure risks
- Injection vulnerabilities

### ⚡ Performance Issues
- Inefficient algorithms
- Memory leaks
- Database query optimization
- Bundle size concerns

### ✨ Code Quality
- Code structure and organization
- Readability and maintainability
- Error handling
- Documentation quality

### 💡 Best Practices
- Coding standards compliance
- Design patterns usage
- Testing coverage
- Configuration management

## ⚙️ Configuration

On first run, you'll be prompted to select your preferred language:

- **Korean (한국어)**: Korean UI and review messages
- **English**: English UI and review messages

You can change this anytime with:
```bash
aipr --configure
```

Configuration is stored in `~/.gemini-pr-review-config.json`

## 📁 Project Structure

```
gemini-pr-review-assistant/
├── bin/
│   ├── aipr              # Main executable script
│   └── postinstall.js    # Setup script
├── package.json
├── README.md
└── LICENSE
```

## 🔧 Development

### Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Make script executable: `chmod +x bin/aipr`
4. Link globally: `npm link`

### Testing

```bash
# Test in a git repository
cd /path/to/your/project
aipr --help
aipr
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Google Gemini CLI](https://www.npmjs.com/package/@google/gemini-cli)
- Inspired by [gemini-commit-assistant](https://github.com/c17an/gemini-commit-assistant)

## 🐛 Issues & Support

If you encounter any issues or have suggestions:

1. Check existing [issues](https://github.com/geonhwiii/gemini-pr-review-assistant/issues)
2. Create a new issue with detailed information
3. Include your environment details and error messages

---

**Happy Reviewing! 🎉**