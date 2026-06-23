# 🧠 Smart but Scattered — 执行技能 Agent Skill（中文版）

> **AI agent 技能包** — 基于 *Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential*（Peg Dawson, EdD & Richard Guare, PhD）一书的知识萃取。

---

## 这是什么？

这是一个为 AI 编程助手（如 Claude Code、GitHub Copilot CLI、Amp 等）设计的 **agent skill（技能包）**，将《Smart but Scattered》一书中的执行技能框架结构化为 AI 可直接引用的知识体系。

当你跟 AI 聊到孩子写作业拖拉、情绪失控、丢三落四、做事磨蹭等行为问题时，AI 可以借助这个 skill 诊断对应的执行技能短板，并提供基于循证的干预方案。你不用自己记住 11 项执行技能和 ABC 模型——让 AI 来查。

## 目录结构

```
├── SKILL.md              ← 主入口：核心框架、章节索引、主题索引
├── cheatsheet.md          ← 快速参考表和决策指南
├── glossary.md            ← 35 个关键术语定义
├── patterns.md            ← 15 个干预设计模式（含步骤说明）
└── chapters/              ← 25 个章节摘要（按需加载，ch00–ch24）
    ├── ch00-introduction.md
    ├── ch01-how-did-such-a-smart-kid.md
    ├── ch02-identifying-strengths.md
    ...
    └── ch24-whats-ahead.md
```

### 涵盖的 11 项执行技能

| 技能 | 领域 | 定义 |
|------|------|------|
| 反应抑制 (Response Inhibition) | 行动 | 三思而后行；抵制冲动 |
| 工作记忆 (Working Memory) | 思维 | 执行任务时在脑中保持信息 |
| 情绪控制 (Emotional Control) | 行动 | 管理情绪以达成目标 |
| 持续注意力 (Sustained Attention) | 行动 | 克服分心和无聊保持专注 |
| 任务启动 (Task Initiation) | 行动 | 不拖延地开始任务 |
| 规划/优先级 (Planning/Prioritization) | 思维 | 制定路线图；判断轻重缓急 |
| 组织能力 (Organization) | 思维 | 建立和维护物品管理系统 |
| 时间管理 (Time Management) | 思维 | 估算、分配和遵守时间 |
| 目标导向坚持 (Goal-Directed Persistence) | 行动 | 面对竞争兴趣不放弃 |
| 灵活性 (Flexibility) | 行动 | 遇到障碍时调整计划 |
| 元认知 (Metacognition) | 思维 | 自我监控和自我评估 |

## 使用方法

### 在 Claude Code 中使用

1. **安装** — 将文件夹复制到 Claude Code 的 skills 目录：
   ```bash
   cp -r smart-but-scattered-skill ~/.claude/skills/guare-smart-but-scattered
   ```

2. **使用** — 在对话中对 Claude 说：
   > "Use the guare-smart-but-scattered skill. My 8-year-old avoids homework and fidgets at his desk."

   或者指定主题：
   > "Load guare-smart-but-scattered and tell me about the ABC intervention model."

   或者加载特定章节：
   > "Read ch14 from guare-smart-but-scattered — I need the sustained attention strategies."

### 在 GitHub Copilot CLI 中使用

```bash
# 安装
cp -r smart-but-scattered-skill ~/.copilot/skills/guare-smart-but-scattered
# 重载技能
gh copilot skills reload
```

然后在会话中：
```
#skills guare-smart-but-scattered
```

### 在 Amp 中使用

```bash
cp -r smart-but-scattered-skill ~/.agents/skills/guare-smart-but-scattered
```

## 适用人群

- **家长** — 孩子 4–14 岁，在整理、专注、情绪控制或任务完成方面有困难
- **教师** — 寻找课堂干预策略
- **临床工作者**（治疗师、学校心理学家）— 处理执行技能缺陷
- **ADHD 家庭** — 执行技能框架是领先的非药物干预方法

## 许可证

MIT — 可自由使用、分享和修改。

## 版权说明

本技能包是对《Smart but Scattered》一书中的框架、原则和技术的 **转换性知识萃取（transformative knowledge extraction）**，以结构化参考格式呈现。**它不替代原书**。如果你觉得有帮助，建议购买原书：

- Dawson, P., & Guare, R. (2009). *Smart but Scattered: The Revolutionary "Executive Skills" Approach to Helping Kids Reach Their Potential*. Guilford Press.

## 贡献

发现错误或想改进某个章节？欢迎提交 Issue 或 PR。

---

## 更新工作流

在本地修改 skill 后（`~/.agents/skills/guare-smart-but-scattered/`），同步到本仓库：

```bash
cd ~/Code/smart-but-scattered-skill

# 复制最新的 skill 文件
cp ~/.agents/skills/guare-smart-but-scattered/SKILL.md .
cp ~/.agents/skills/guare-smart-but-scattered/*.md .
cp -r ~/.agents/skills/guare-smart-but-scattered/chapters/ .

# 提交并推送
git add -A
git commit -m "chore: update skill content — <简短说明>"
git push
```
