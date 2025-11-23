# Tic Tac Toe - Code Optimization Challenge

## 🎯 Challenge
This project was part of a code optimization challenge to reduce the total lines of code to under 100 (excluding empty lines and comment-only lines, but including lines with both code and comments).

### Key Metrics
- **Initial Code Size**: 134 lines
- **Target**: ≤ 100 lines
- **Technologies Used**: 
  - HTML5
  - JavaScript (Vanilla + Alpine.js)
  - Tailwind CSS

## 🛠️ Implementation Strategies

### 1. Alpine.js for Declarative UI
- Replaced vanilla JavaScript DOM manipulation with Alpine.js directives
- Eliminated the need for `getElementById` and manual event listeners
- Implemented reactive state management directly in HTML

### 2. Tailwind CSS for Utility-First Styling
- Used Tailwind's utility classes to eliminate separate CSS files
- Implemented responsive design with minimal code
- Leveraged custom theme configuration for consistent styling

### 3. Code Optimization Techniques
- Combined related variable declarations
- Used ternary operators for conditional rendering
- Implemented array methods for game logic
- Minimized whitespace without sacrificing readability

## 🎮 Features
- Two-player Tic Tac Toe game
- Score tracking
- Win/draw detection
- Responsive design
- Animated winning line
- Reset game functionality

## 🚀 Getting Started
1. Clone the repository
2. Open `index.html` in a modern web browser
3. Start playing!

## 📝 Notes
- The final implementation achieves the same functionality with significantly less code
- The code remains maintainable and well-documented
- The UI/UX was preserved while optimizing the codebase

## 🔍 Files
- `index.html` - Main game interface and structure , Game logic and state management


## 📊 Performance
- Fast loading with minimal dependencies
- Optimized for modern browsers
- Lightweight implementation