# lets-vibe

<p align="center">
  <img src="https://i.imgflip.com/9zfy0f.gif" alt="OK Let's Vibe" width="600"/>
</p>

A CLI tool that scaffolds a clear, professional documentation structure for new software projects.

## Installation

```bash
# Run directly with npx (recommended)
npx lets-vibe <project-name>

# Or install globally
npm install -g lets-vibe
lets-vibe <project-name>
```

## Features

- Generates a `v-docs/` directory with ready-to-edit markdown templates.
- Cross-platform: macOS, Linux, Windows.
- Helpful flags: `--dry-run`, `--overwrite`, `--yes`, `--cursor`, `--no-templates`.

## Getting the Most Out of lets-vibe

1. **Start early** – run the CLI at project inception so the Idea & Architecture docs guide discussions from day one.
2. **Use flags together** – generate a project and pre-create Cursor context in one go:

   ```bash
   npx lets-vibe my-app --cursor
   ```

3. **Dry-run before committing** – preview changes when adding docs to an existing repo:

   ```bash
   lets-vibe . --dry-run
   ```

4. **Iterate on templates, don't ignore them** – replace every `{{placeholder}}` in the generated markdown; unfinished TODOs are a signal to revisit requirements.
5. **Link docs in pull requests** – when a PR implements an EDR decision, reference the EDR/ADR IDs so reviewers have context.
6. **Keep `modules.md` & `roadmap.md` fresh** – update ownership and timelines in the same PR that changes code or backlog.
7. **CI tip** – add a workflow step that fails if `grep -R "{{.*}}" v-docs | wc -l` returns non-zero, ensuring placeholders get filled.

## License

MIT © Conor Breen

```bash
# Generate docs **with** templates (default)
npx lets-vibe my-app

# Skip copying templates
npx lets-vibe my-app --no-templates
```
