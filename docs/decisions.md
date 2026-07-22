# Architecture Decisions

## 2026-07-21

### Why React?

React provides a component-based architecture that is widely used in the industry. It aligns with my learning goals and supports future integration with a Laravel backend.

---

### Why JavaScript instead of TypeScript?

JavaScript keeps the initial learning curve manageable. Once the portfolio is complete and I'm comfortable with React, I can evaluate migrating to TypeScript.

---

### Why Apache?

The production environment uses Apache, allowing the React application to be deployed as static assets while leaving room for future PHP and Laravel integration.

# Hero Component

## Purpose

The hero section introduces visitors to Christopher Schaeffer and communicates the primary value proposition of the portfolio.

---

## Child Components

HeroButtons

TechStack

---

## Data Source

portfolio.js

---

## Responsibilities

Display:

- Name
- Headline
- Description
- CTA Buttons
- Technology Stack
- Portrait

---

## Future Improvements

- Framer Motion animations
- Animated gradient
- Scroll indicator
- Responsive portrait sizing
