#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.resolve(__dirname);

// Detect agent & determine destination
function detectDest() {
  const home = process.env.HOME || '~';

  // Agent-specific skill directories, ordered by preference
  const candidates = [
    // Kimi Code
    { name: 'Kimi Code', dir: path.join(home, '.agents', 'skills', 'guare-smart-but-scattered') },
    // Claude Code
    { name: 'Claude Code', dir: path.join(home, '.claude', 'skills', 'guare-smart-but-scattered') },
    // GitHub Copilot CLI
    { name: 'GitHub Copilot CLI', dir: path.join(home, '.copilot', 'skills', 'guare-smart-but-scattered') },
    // Amp
    { name: 'Amp', dir: path.join(home, '.agents', 'skills', 'guare-smart-but-scattered') },
    // Fallback: project-local
    { name: 'project-local', dir: path.join(process.cwd(), '.agents', 'skills', 'guare-smart-but-scattered') },
  ];

  // Prefer an already-installed location
  for (const c of candidates) {
    if (fs.existsSync(path.dirname(c.dir))) {
      return c;
    }
  }

  // If none exist, try creating ~/.agents/skills (most common)
  const fallback = path.join(home, '.agents', 'skills', 'guare-smart-but-scattered');
  return { name: 'Kimi Code / Amp', dir: fallback };
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === 'package.json' || entry.name === 'install.js' || entry.name === '.git' || entry.name === 'README.en.md') continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// --- Main ---
const dest = detectDest();

console.log(`📦 Installing guare-smart-but-scattered skill...`);
console.log(`   Detected agent: ${dest.name}`);
console.log(`   Destination: ${dest.dir}`);
console.log('');

copyRecursive(SOURCE_DIR, dest.dir);

console.log('✅ Installation complete!');
console.log('');
console.log(`   The skill is now available at:`);
console.log(`   ${dest.dir}`);
console.log('');
console.log('📖 Usage:');
console.log(`   In your AI agent, activate with the slash command:`);
console.log(`   /guare-smart-but-scattered <your question>`);
console.log('');
console.log('   Or ask in natural language:');
console.log(`   "Use the guare-smart-but-scattered skill."`);
console.log('');
