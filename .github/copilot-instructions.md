# Concertlog - React Skills Ladder Project

## Project Purpose
This is a React learning project for a skills ladder system tracked via GitHub Projects. Engineers self-assign tasks, demonstrate React proficiency, and get code reviews from experienced developers to address mentoring gaps.

**Primary Goal**: Learning and skill demonstration, NOT production deployment
**Repository**: https://github.com/jerseycheese/concertlog
**Local Path**: `/Users/jackhaas/Projects/concertlog`

## AI Assistance Guidelines

### What Copilot SHOULD Do:
- **Explain concepts thoroughly** - Break down React patterns, hooks, state management
- **Provide learning guidance** - Suggest next steps, best practices, common pitfalls
- **Code review assistance** - Help identify areas for improvement, suggest alternatives
- **Debugging help** - Explain error messages, suggest troubleshooting approaches
- **Architecture discussions** - Explain component structure, data flow, design patterns

### What Copilot Should NOT Do:
- **Write complete code implementations** unless explicitly requested
- **Auto-complete entire functions** - let the engineer practice writing code
- **Skip explanations** - always explain the "why" behind suggestions

## React Skills Ladder Levels
Based on [CivicActions React Skills Ladder](https://github.com/CivicActions/learn-react/blob/main/SKILLS_LADDER.md):

**🏷️ 1-foundation (Introductory)**
New to React, needs frequent guidance. Complete small, well-defined tasks.
- Project setup (Vite or framework)
- JSX & rendering
- Components & props  
- Local state with `useState`
- Event handling
- Conditional rendering
- Lists & keys

**🏷️ 2-developing (Basic)**  
Growing independence, understands core concepts with limited support.
- Component structure & composition
- State updates & render cycle
- Forms (controlled vs uncontrolled)
- Side effects with `useEffect`
- Styling (Tailwind & CSS Modules)
- Debugging with React DevTools
- Basic data fetching (`fetch`/async)

**🏷️ 3-proficient (Intermediate)**
Independent developer delivering moderately complex features.
- Context API & prop-drilling strategies
- Performance basics (`memo`, deps)
- Custom hooks
- Routing (React Router)
- Forms with React Hook Form
- Testing fundamentals (RTL + Vitest/Jest)
- Server-state fundamentals (TanStack Query)

**🏷️ 4-advanced (Senior)**
Designs complex features, mentors others, influences architecture.
- Advanced hooks (`useReducer`, `useCallback`, `useMemo`, `useRef`)
- State libraries (Redux Toolkit, Zustand, Jotai)
- Code-splitting & lazy + `Suspense`
- Performance tuning & profiling
- Advanced testing (API mocking, E2E)
- TypeScript in React

**🏷️ 5-expert (Expert)**
Defines technical direction, coaches peers, designs scalable solutions.
- Advanced state management patterns
- React Server Components
- SSR/SSG/ISR & data mutations
- Component library / design system ownership
- Security in React apps (XSS, CSP)

## Project Structure (To be established)
As this develops, document the file organization that supports learning objectives:

- `/src/components/` - Reusable UI components
- `/src/hooks/` - Custom hook implementations
- `/src/context/` - Context providers and consumers
- `/src/exercises/` - Skill demonstration tasks
- `/docs/learning-notes/` - Personal learning documentation

## Development Workflow
Following the [CivicActions learn-react process](https://github.com/CivicActions/learn-react):

1. **Browse & Claim**: Find tasks in GitHub Project board, comment "/claim" on [TEMPLATE] issues
2. **Track Progress**: Set issue Status to "In Progress" while working
3. **Complete Task**: 
   - Post your repo/CodeSandbox link in issue comments
   - Move issue to "Done" when finished
4. **Get Verified**: Mentor/peer adds `verified` label as endorsement

### Learning Workflow
- Each skill demonstration should be a separate issue/task
- Document learning insights in issue comments and commit messages  
- Use GitHub Projects to visualize skill progression across levels
- Experienced developers review and verify skill achievement

## Example Interaction Patterns
**Good**: "Can you explain how useEffect works and when I should use the dependency array?"
**Good**: "I'm getting this error with my useState hook - can you help me understand what's wrong?"
**Less helpful**: "Write a complete Todo app component for me"

---
*This file guides AI to support learning objectives rather than replacing the learning process.*