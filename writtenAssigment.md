
# FED27 COURSE 06 WRITTEN ASSIGMENT

Alejandro Atehortua Galeano

# Building a Scalable Checklist App Using Design System Thinking

## 1. Introduction

This project was developed as a scalable checklist application using React, TypeScript, Vite, and Storybook. The main objective was to apply design system thinking by creating reusable UI components, extracting design tokens from a Figma design, and maintaining code quality using ESLint and Prettier.

Although the application is intentionally simple and contains no business logic, it demonstrates the core principles of a design system. The project includes reusable presentational components, centralized design tokens, automatic dark mode, and Storybook documentation. Together, these elements create a maintainable and scalable frontend foundation.

## 2. Design System Thinking

### What design tokens did you create?

I created design tokens for the most important visual properties in the application:

Colors
Typography
Spacing
Border Radius

Examples of tokens include:

--color-primary
--color-background
--color-text
--font-size-base
--space-4
--radius-md

These tokens were defined as CSS variables in styles.css.

### Why did you use primitive and semantic tokens?

Primitive tokens represent raw values such as:

#2563EB
16px
12px

Semantic tokens give these values meaning, such as:

--color-primary
--space-md
--radius-card

This approach improves maintainability because the meaning of a token remains the same even if the underlying value changes. For example, if the primary color changes, only the primitive value needs to be updated.

### How did your Figma variables align with your codebase?

The provided Figma file was used as the visual reference for the design system. Variables defined in Figma were translated directly into CSS variables.

Examples:

Figma: Primary/Blue → Code: --color-primary
Figma: Spacing/16 → Code: --space-4
Figma: Radius/12 → Code: --radius-md

This alignment ensured that design and development used the same values and naming conventions.

## 3. Component Architecture

### Which reusable components did you build?

I created four reusable presentational components:

Button
Input
Checkbox
Card

Each component accepts props and can be reused in different contexts.

### Which components belong to the design system vs feature level?

The components I built belong to the design system because they are generic and independent of any specific feature.

Examples:

Button can be used for any action.
Input can be used for any text entry.
Checkbox can be used for any boolean option.
Card can be used to group any content.

Feature-level components would combine these components with business logic, such as a TaskList or AddTaskForm.

### How did you structure components for scalability?

All components were placed inside the src/components folder and written using TypeScript props.

This structure makes it easy to add new components and reuse existing ones without duplication.

## 4. Code Quality

### How did Storybook support your development process?

Storybook allowed me to develop and test components in isolation. Instead of running the full application, I could preview each component independently.

Benefits include:

Faster visual testing
Easier debugging
Component documentation
Reusable examples

### Why are ESLint and Prettier important?

ESLint identifies code issues and enforces coding best practices.

Prettier automatically formats code in a consistent way.

Together they provide:

Consistent formatting
Fewer syntax mistakes
Improved readability
Easier collaboration

### How did you keep your code maintainable?

I used several strategies:

Centralized design tokens
Small focused components
Strict TypeScript typing
Consistent folder structure
Separation of presentation from business logic

## 5. User Experience

### How does your solution create a consistent user experience?

The application uses shared design tokens across all components. Colors, spacing, typography, and border radius are applied consistently.

Examples:

All buttons use the same primary color.
All inputs use the same border radius.
Cards share the same surface styling.

This makes the interface predictable and visually cohesive.

### What accessibility or usability considerations did you make?

I included several accessibility and usability improvements:

Labels for all inputs and checkboxes
High contrast between text and background
Large clickable areas
Responsive layout with proper spacing
Automatic dark mode support

## 6. Reflection

### If you had two more weeks, what would you improve and why?

If I had two more weeks, I would:

Add more component states (disabled, error, loading).
Create Storybook stories for all components.
Add automated tests using React Testing Library.
Build a token pipeline with Style Dictionary.
Implement full checklist functionality with local storage.

These improvements would make the design system more robust and production-ready.

## 7. Conclusion

This project demonstrates how design system thinking can be applied to a practical frontend application.

By defining design tokens, building reusable components, documenting them with Storybook, and enforcing code quality with ESLint and Prettier, I created a scalable and maintainable design system.

The resulting solution provides a consistent and accessible user experience and establishes a strong foundation for future development.
