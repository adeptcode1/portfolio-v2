# Architecture

## Frontend

React

Component Based Architecture

Reusable UI Components

React Router

## Backend (Future)

Laravel

REST API

MySQL

Authentication

## Hosting

Apache

Static React Build

Laravel API

## Design Principles

- Separation of concerns
- Reusable components
- Small focused files
- Semantic HTML
- Accessibility first

## Hero Architecture

Hero

├── HeroButtons

├── TechStack

└── Portfolio Data

### Responsibilities

Hero.jsx

Responsible for page layout.

HeroButtons.jsx

Responsible for CTA buttons.

TechStack.jsx

Displays technology badges.

portfolio.js

Acts as the single source of truth for portfolio content.

## Skills Architecture

The Skills section follows the same architecture established by the Hero and About sections.

Portfolio Data
│
▼
Skills.jsx
│
▼
SkillCategory.jsx
│
▼
SkillItem.jsx

Each layer has a single responsibility.

Data remains centralized within portfolio.js while presentation is delegated to reusable components.
