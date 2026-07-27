# Skills Component

## Purpose

Showcases the technologies, tools, and technical disciplines used to build modern software solutions.

The section is organized into categories rather than a flat list of technologies, allowing visitors to quickly understand the breadth of experience.

---

## Architecture

Skills
├── Skills.jsx
├── SkillCategory.jsx
└── SkillItem.jsx

### Responsibilities

### Skills.jsx

- Renders the section
- Reads skills data from portfolio.js
- Maps each category into a SkillCategory component

### SkillCategory.jsx

- Displays a skill category
- Renders the category heading
- Maps individual skills into SkillItem components

### SkillItem.jsx

- Displays a single technology badge
- Pure presentation component

---

## Data Source

portfolio.js

The Skills component contains no hardcoded technologies.

All content is centralized in the portfolio object.

---

## Responsive Design

Desktop

- Multi-column grid
- Cards displayed side-by-side

Tablet

- Grid automatically reduces columns

Mobile

- Single-column layout
- Skill badges wrap naturally

---

## Design Decisions

Categories improve readability over a long list of logos.

Small reusable components simplify maintenance.

Centralized data allows technologies to be updated without modifying component code.

---

## Future Enhancements

- Technology icons
- Proficiency indicators
- Expandable categories
- Skill search/filter
- Animation on scroll
