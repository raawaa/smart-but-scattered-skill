# 🧠 Smart but Scattered — Executive Skills Agent Skill

[🇬🇧 English](README.en.md) | [🇨🇳 中文](README.md)

> **AI agent skill** — knowledge base from *Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential* by Peg Dawson, EdD & Richard Guare, PhD.

---

## What Is This?

This repository packages the core frameworks from *Smart but Scattered* into a machine-readable **agent skill** — a structured knowledge base that AI coding agents can load on demand to give you research-backed parenting and teaching advice.

Instead of asking you to remember all 11 executive skills, the ABC model, and the 10 principles, you just tell your AI agent to load this skill. The agent does the rest.

## What's Inside

```
├── SKILL.md              ← Entry point: core frameworks, chapter & topic index
├── cheatsheet.md          ← Quick-reference tables & decision guides
├── glossary.md            ← 35 key terms with definitions
├── patterns.md            ← 15 intervention design patterns with step-by-step methods
└── chapters/              ← 25 on-demand chapter summaries (ch00–ch24)
    ├── ch00-introduction.md
    ├── ch01-how-did-such-a-smart-kid.md
    ├── ch02-identifying-strengths.md
    ...
    └── ch24-whats-ahead.md
```

### The 11 Executive Skills Covered

| Skill | Domain | Definition |
|-------|--------|------------|
| Response Inhibition | Doing | Think before acting; resist urges |
| Working Memory | Thinking | Hold info in mind while performing tasks |
| Emotional Control | Doing | Manage emotions to achieve goals |
| Sustained Attention | Doing | Maintain focus despite distraction/boredom |
| Task Initiation | Doing | Begin tasks without procrastination |
| Planning/Prioritization | Thinking | Create a roadmap; decide what matters |
| Organization | Thinking | Create/maintain systems for materials |
| Time Management | Thinking | Estimate, allocate, and respect time |
| Goal-Directed Persistence | Doing | Follow through despite competing interests |
| Flexibility | Doing | Revise plans in face of obstacles |
| Metacognition | Thinking | Self-monitor and self-evaluate |

## How to Use

> **❗ Important**: This skill's description is in English, so AI agents may not auto-activate when you speak other languages. **Always trigger it manually using a slash command** (see below) to ensure the skill is loaded.

### Quick Trigger (Recommended)

Once installed, start any conversation about your child by activating the skill with a slash command:

```
/guare-smart-but-scattered My 8-year-old avoids homework and fidgets at his desk.
```

Or reference a specific topic:
```
/guare-smart-but-scattered Tell me about the ABC intervention model.
```

Or load a specific chapter:
```
/guare-smart-but-scattered Read ch14 — I need the sustained attention strategies.
```

### Install (Unified)

**One command for all AI agents:**

```bash
# Global install (recommended — available in all projects)
npx skills add raawaa/smart-but-scattered-skill -g -y
```

```bash
# Project-level install
npx skills add raawaa/smart-but-scattered-skill -y
```

Auto-detects your installed agents (Kimi Code, Claude Code, GitHub Copilot, Cursor, 70+ total) and installs to the correct directory. Restart your agent afterward.

### Update

```bash
npx skills update guare-smart-but-scattered -g -y
```

### Manual Install (Fallback)

**Kimi Code / Amp:**
```bash
cp -r smart-but-scattered-skill ~/.agents/skills/guare-smart-but-scattered
```

**Claude Code:**
```bash
cp -r smart-but-scattered-skill ~/.claude/skills/guare-smart-but-scattered
```

**GitHub Copilot CLI:**
```bash
cp -r smart-but-scattered-skill ~/.copilot/skills/guare-smart-but-scattered
gh copilot skills reload
```

## Target Audience

- **Parents** of children aged 4–14 who struggle with organization, focus, emotional control, or task completion
- **Teachers** looking for classroom intervention strategies
- **Clinicians** (therapists, school psychologists) who work with executive skill deficits
- **ADHD families** — the executive skills framework is the leading non-pharmacological approach

## License

MIT — free to use, share, and modify.

## Attribution

This skill is a **transformative knowledge extraction** — it distills the frameworks, principles, and techniques from *Smart but Scattered* into a structured reference format. It is **not a replacement for the book**. If you find this valuable, consider buying the original:

- Dawson, P., & Guare, R. (2009). *Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential*. Guilford Press.

## Contributing

Found an error or want to improve a chapter? Open an issue or PR. This skill is designed to be iterated on — updates are straightforward.

---

## Update Workflow

After modifying the skill locally (`~/.agents/skills/guare-smart-but-scattered/`), sync to this repo:

```bash
cd ~/Code/smart-but-scattered-skill

# Copy latest skill files
cp ~/.agents/skills/guare-smart-but-scattered/SKILL.md .
cp ~/.agents/skills/guare-smart-but-scattered/*.md .
cp -r ~/.agents/skills/guare-smart-but-scattered/chapters/ .

# Commit and push
git add -A
git commit -m "chore: update skill content — <brief description>"
git push
```
