# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-07-05

### Added

- Initial public release of `lets-vibe`.
- CLI flags: `--overwrite`, `--dry-run`, `--yes`, `--cursor`, `--template-dir`.
- Supports scaffolding into a new directory or the current directory (`.`).
- Generates `v-docs/` structure with markdown templates (Idea, Architecture, Local Setup, Deployment, ADR, EDR, Implementation).
- Optional `.cursor.json` generation for Cursor AI IDE.

## [0.2.0] - 2025-07-05

### Added

- Comprehensive template upgrades: richer Idea, Architecture, Local Setup, Deployment docs.
- New Engineering Design Review (EDR) template with metadata, risk analysis, trade-off matrix.
- Enhanced ADR guide linking back to EDRs.
- Implementation workspace additions: `modules.md` and `roadmap.md` templates.

### Changed

- README now includes best-practice usage guidelines.
- `.cursor.json` now references `v-docs` via `include` field.
