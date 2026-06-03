
# FED27 COURSE 06 WRITTEN ASSIGMENT

Alejandro Atehortua Galeano

# 1. Building a Scalable Checklist App Using Design System Thinking (C2)

## 0. Introduction

This project was developed as a scalable checklist application using React, TypeScript, Vite, and Storybook. The main objective was to apply design system thinking by creating reusable UI components, extracting design tokens from a Figma design, and maintaining code quality using ESLint and Prettier.

Although the application is intentionally simple and contains no business logic, it demonstrates the core principles of a design system. The project includes reusable presentational components, centralized design tokens, automatic dark mode, and Storybook documentation. Together, these elements create a maintainable and scalable frontend foundation.

## 1. Design System Thinking

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

## 2. Component Architecture

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

## 3. Code Quality

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

## 4. User Experience

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

## 5. Reflection

### If you had two more weeks, what would you improve and why?

If I had two more weeks, I would:

Add more component states (disabled, error, loading).
Create Storybook stories for all components.
Add automated tests using React Testing Library.
Build a token pipeline with Style Dictionary.
Implement full checklist functionality with local storage.

These improvements would make the design system more robust and production-ready.

## 6. Conclusion

This project demonstrates how design system thinking can be applied to a practical frontend application.

By defining design tokens, building reusable components, documenting them with Storybook, and enforcing code quality with ESLint and Prettier, I created a scalable and maintainable design system.

The resulting solution provides a consistent and accessible user experience and establishes a strong foundation for future development.

# 2. Automated Testing & Code Quality (S12)

## 1. Why is automated testing important in modern frontend development?

Automated testing is an essential part of modern frontend development because it helps developers verify that applications behave as expected. As projects grow, manually checking every feature after each change becomes time-consuming and unreliable. Automated tests provide a faster and more consistent way to identify problems before they reach users.

One of the main benefits of automated testing is that it reduces the risk of introducing bugs when new features are added. Frontend applications often contain many interconnected components, and a small change in one area can unintentionally affect another. Automated tests quickly detect these regressions and help developers maintain confidence when modifying existing code.

Automated testing also supports collaboration within development teams. Multiple developers can work on the same codebase while relying on a shared suite of tests to verify that changes do not break existing functionality. This creates a safer development environment and improves overall productivity.

In addition, automated tests contribute to higher code quality. Developers are encouraged to write smaller, more predictable functions and components that are easier to test. This often results in cleaner architecture, better separation of concerns, and improved maintainability.

For these reasons, automated testing has become a standard practice in professional frontend development workflows.

## 2. What is the difference between unit testing, component/DOM testing, and end-to-end testing?

Automated testing can be divided into several levels, each focusing on different parts of an application.

### Unit Testing

Unit tests verify the smallest pieces of code in isolation. These are typically functions, utility methods, or individual logic units.

For example, a unit test could verify that a function correctly calculates the total number of completed tasks in a checklist application.

Unit tests are usually fast, easy to write, and help identify logic errors early in development.

### Component/DOM Testing

Component testing focuses on how a user interface component behaves when rendered.

Instead of testing only internal logic, component tests verify that users see the correct output and can interact with the component as expected.

Examples include:

> Checking that a button displays the correct text.
> Verifying that an input field updates when a user types.
> Confirming that a checkbox changes state when clicked.

These tests provide confidence that individual UI components function correctly within the browser environment.

### End-to-End Testing (E2E)

End-to-end testing evaluates the entire application from the user's perspective.

An E2E test simulates real user actions such as:

> Opening the application.
> Logging in.
> Creating a task.
> Marking the task as completed.

These tests verify that all parts of the system work together correctly, including frontend, backend, routing, and APIs.

Although E2E tests provide the highest level of confidence, they are usually slower and more complex than unit or component tests.

A balanced testing strategy often combines all three types of testing.

## 3. In what situations would you use Vitest?

Vitest is a modern testing framework designed specifically for projects built with Vite. Since many React applications use Vite as their build tool, Vitest integrates naturally into the development workflow.

Vitest is particularly useful for:

### Testing Utility Functions

Developers can verify that helper functions return the correct values under different conditions.

Examples include:

> Data formatting functions.
> Validation logic.
> Calculations.

### Testing React Components

Vitest works well together with React Testing Library, allowing developers to test rendered components and user interactions.

Examples include:

> Button click events.
> Form validation.
> Conditional rendering.

### Fast Development Feedback

Vitest provides very fast test execution because it uses the same infrastructure as Vite. Developers receive immediate feedback while coding, which improves productivity.

### Continuous Integration

Vitest can run automatically in CI/CD pipelines to ensure that code changes pass all tests before deployment.

For frontend projects built with React and Vite, Vitest is often the preferred choice because of its speed, simplicity, and excellent integration with modern tooling.

## 4. How can automated tests improve maintainability when a codebase grows?

As applications become larger, maintaining code quality becomes increasingly challenging. Automated tests help manage this complexity in several ways.

First, tests act as a safety net. Developers can refactor existing code with greater confidence because tests immediately indicate whether something has broken.

Second, tests serve as documentation. Reading a test often makes it easier to understand how a function or component is expected to behave. New team members can learn the codebase more quickly by reviewing existing tests.

Third, automated tests reduce debugging time. Instead of manually reproducing issues across different parts of the application, developers can run the test suite and quickly identify the source of a problem.

Fourth, tests encourage modular design. Code that is easier to test is often more organized and easier to maintain. This leads to better separation between business logic, presentation logic, and reusable components.

As a result, teams can continue adding features while keeping the application stable and manageable over time.

## 5. What risks can occur when applications are developed without automated testing?

Developing applications without automated testing introduces several risks.

One major risk is the increased likelihood of regressions. Developers may unintentionally break existing functionality without realizing it. These problems might only be discovered after deployment, affecting users directly.

Another risk is slower development. As projects grow, developers become hesitant to modify existing code because they cannot easily verify the impact of their changes. This creates technical debt and reduces productivity.

Collaboration also becomes more difficult. Team members may introduce conflicting changes, and there is no automated mechanism to verify that everything still works correctly.

Without tests, bug detection depends heavily on manual testing. This process is slower, less consistent, and more prone to human error.

Additionally, onboarding new developers becomes harder because there is no automated documentation describing expected behavior.

Over time, these issues can lead to lower code quality, increased maintenance costs, and a less reliable user experience.

## 6. Conclusion

Automated testing plays a critical role in modern frontend development. It improves code quality, supports team collaboration, and reduces the risk of introducing bugs.

Different testing levels serve different purposes. Unit tests verify individual pieces of logic, component tests validate user interface behavior, and end-to-end tests ensure that the complete application works correctly from the user's perspective.

Tools such as Vitest make testing fast and efficient for React and Vite projects. As applications grow, automated tests provide a safety net that improves maintainability and allows teams to develop with greater confidence.

By incorporating automated testing into the development process, frontend teams can build more reliable, scalable, and maintainable applications.




