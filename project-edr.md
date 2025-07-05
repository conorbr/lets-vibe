# Engineering Design Review: Lets Vibe CLI Documentation Scaffolder

**Project Name:** lets-vibe  
**Author:** Conor Breen  
**Date:** 2025-07-05  
**Reviewers:** (TBD)  
**Status:** Draft

---

## 1. Objective

The goal of this design is to create a global CLI tool that scaffolds a consistent and professional documentation structure for new software projects. This tool, named `lets-vibe`, will help developers start projects with clearly defined architectural, planning, and implementation documents.

This tool aims to automate best practices for early-stage engineering documentation with a simple one-command interface.

---

## 2. Background

Most side-projects and even production systems suffer from poor documentation, leading to lost context, tech debt, and onboard friction. The goal of `lets-vibe` is to enforce a clear starting documentation scaffold, reducing friction and increasing professionalism — even in solo or early-stage projects.

This tool draws inspiration from:

- `create-react-app` for scaffolding convention
- ADR/EDR documentation patterns used in larger software teams
- Dev-friendly CLI tools that are installable via `npm`

---

## 3. Requirements

### Functional

- [x] Can be run via `npx lets-vibe <project-name>` or `lets-vibe <project-name>` (if globally installed)
- [x] Creates a new project folder with:
  - `README.md`
  - `v-docs/01_idea.md`
  - `v-docs/02_architecture.md`
  - `v-docs/03_local_setup.md`
  - `v-docs/04_deployment.md`
  - `v-docs/adr/README.md`
  - `v-docs/edr/README.md`
  - `v-docs/implementation/README.md`
- [x] Each file pre-populated with a clear template

### Non-functional

- [x] Lightweight dependency footprint (e.g., commander, fs-extra, chalk)
- [x] Executable from terminal
- [x] Works cross-platform (Mac, Linux, Windows)
- [x] Minimal output with clear success/failure messages

---

## 4. Design Overview

The CLI tool will be implemented as a Node.js script published to the npm registry.

### CLI Name

`lets-vibe`

### Directory Layout (Generated)

```text
<project-name>/
  README.md
  v-docs/
    01_idea.md
    02_architecture.md
    03_local_setup.md
    04_deployment.md
    adr/
      README.md
    edr/
      README.md
    implementation/
      README.md
```

### CLI Flags (MVP)

- `--overwrite`: Overwrite existing files or directories managed by lets-vibe.
- `--dry-run`: Show what would be created without writing to disk.
- `--yes`: Non-interactive mode (auto-confirm prompts, useful for CI).
- `--cursor`: Generate a default `.cursor.json` file to pre-configure the project for the Cursor code-editor context.
- `--template-dir <path>`: Load templates from a local folder (experimental, day-2 feature).

### Dependencies

Runtime dependencies (MIT-licensed):

- `commander` – argument parsing & help text
- `fs-extra` – promise-based FS utilities
- `chalk` – colorized console output

### Error Handling & Overwrite Semantics

1. If the target `<project-name>` directory exists:

   - Default: abort with a clear error.
   - With `--overwrite`: overwrite only files managed by lets-vibe, preserving user code.

2. Any other FS errors are caught and surfaced with friendly messages; CLI exits with non-zero status.

### Cross-Platform Guarantee

The CLI will be tested via a GitHub Actions matrix on `ubuntu-latest`, `macos-latest`, and `windows-latest` to ensure consistent behavior.

### Future Work

- Generic AI IDE configuration: extend `--cursor` into a broader `--ai-config` flag capable of generating other assistant manifests (e.g., `.cody.json`) in a single pass. Planned for a day-2 release.
