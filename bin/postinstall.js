#!/usr/bin/env node

const { exec } = require('child_process');
const path = require('path');

console.log('🔍 Setting up AI PR Review Assistant...');

// Make the main script executable
const scriptPath = path.join(__dirname, 'aipr');
exec(`chmod +x "${scriptPath}"`, (error) => {
    if (error) {
        console.error('❌ Failed to make script executable:', error);
        process.exit(1);
    }
    
    console.log('✅ AI PR Review Assistant installed successfully!');
    console.log('');
    console.log('🚀 Quick start:');
    console.log('  aipr                    # Review current branch');
    console.log('  aipr feature/login      # Review specific branch');
    console.log('  aipr --diff develop     # Compare with develop branch');
    console.log('  aipr --configure        # Configure language settings');
    console.log('');
    console.log('📖 For more help: aipr --help');
});