# Navbar

## Purpose

Provides primary site navigation and access to the résumé.

## Desktop Navigation

- Sticky positioning
- Dark translucent background
- Navigation links
- Download Résumé button
- Responsive spacing

## Mobile Navigation

- React state controls whether the menu is open.
- CSS controls layout and transitions.
- The Escape key closes the menu.
- Selecting a navigation link closes the menu.
- Body scrolling is disabled while the menu is open.
- ARIA attributes communicate the menu state.
- The mobile menu replaces the desktop navigation below 820px.

## Component Responsibilities

### React

- Stores menu state
- Opens and closes the menu
- Handles Escape-key behavior
- Locks and restores page scrolling
- Updates accessibility attributes

### CSS

- Controls desktop and mobile layouts
- Displays the hamburger button
- Animates the mobile menu
- Defines responsive breakpoints

## Future Enhancements

- Active-section highlighting
- Close menu when resizing to desktop
- Focus trapping
- Navbar style change while scrolling
- Theme toggle

## Dependencies

navbar.css
