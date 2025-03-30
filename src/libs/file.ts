import { execSync } from 'node:child_process';
import path from 'node:path';

export const repoRoot = execSync('git rev-parse --show-toplevel').toString().trim();

export const distDir = path.join(repoRoot, 'dist');
