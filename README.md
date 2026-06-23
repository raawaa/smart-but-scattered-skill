# 🧠 Smart but Scattered — Executive Skills Agent Skill

> **AI agent skill** — knowledge base from *Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential* by Peg Dawson, EdD & Richard Guare, PhD.

---

**中文简介**: 这是一个为 AI 编程助手（如 Claude Code、GitHub Copilot CLI、Amp 等）设计的 **agent skill**（技能包），将《Smart but Scattered》一书中的执行技能框架结构化为可被 AI 直接引用的知识体系。当你在对话中提到孩子写作业拖拉、情绪失控、丢三落四等行为问题时，AI 可以利用这个 skill 诊断对应的执行技能短板，并提供基于循证的干预方案。

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

### As a Claude Code Skill

1. **Install** — Copy this folder to your Claude Code skills directory:
   ```bash
   cp -r smart-but-scattered-skill ~/.claude/skills/guare-smart-but-scattered
   ```

2. **Use** — In a conversation, tell Claude:
   > "Use the guare-smart-but-scattered skill. My 8-year-old avoids homework and fidgets at his desk."

   Or reference a specific topic:
   > "Load guare-smart-but-scattered and tell me about the ABC intervention model."

   Or load a specific chapter:
   > "Read ch14 from guare-smart-but-scattered — I need the sustained attention strategies."

### As a GitHub Copilot CLI Skill

```bash
# Install
cp -r smart-but-scattered-skill ~/.copilot/skills/guare-smart-but-scattered
# Reload skills
gh copilot skills reload
```

Then in a session:
```
#skills guare-smart-but-scattered
```

### As an Amp Skill

```bash
cp -r smart-but-scattered-skill ~/.agents/skills/guare-smart-but-scattered
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

Found an error or want to improve a chapter? Open an issue or PR. This skill is designed to be iterated on — see the [update workflow](#update-workflow) below.

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
