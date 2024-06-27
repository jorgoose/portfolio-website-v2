---
title: FuzzGuard
publishDate: 2024-08-06 00:00:00
img: /assets/projects/fuzzguard.jpg
img_alt: Abstract representation of code being fuzz tested with digital patterns
description: |
  FuzzGuard is a Software-as-a-Service (SaaS) application designed to enhance code security through dynamic fuzz testing techniques, leveraging Large Language Models (LLMs) for automated test generation and execution.
tags:
  - Python
  - OpenAI API
  - Supabase
  - GitHub
  - Software Security
# Section for tech stack
---

<!-- Link to Project Website -->

#### [Visit FuzzGuard](https://devpost.com/software/fuzzguard)

## <!-- Horizontal Line -->

---

## Inspiration

The rise in the use of Large Language Models (LLMs) for software development has accelerated code creation, but also the speed at which vulnerabilities can appear. To address this, we explored various code testing methodologies and decided on fuzzing due to its dynamic nature and effectiveness in discovering coding errors and security loopholes.

## What is FuzzGuard?

FuzzGuard is a SaaS application designed to improve code security by using fuzz testing. It integrates with GitHub, checks your repository for code coverage, and uses an LLM to generate and execute numerous fuzz tests. The results are then displayed on our platform for easy analysis.

## How We Built It

FuzzGuard's architecture includes:

- **Python**: For code analysis, test generation, and interfacing with the OpenAI API.
- **Atheris**: Google's open-source fuzzing engine.
- **Supabase**: For data storage and management.

### Key Steps:

1. **Analysis**: Parse the repository's AST to identify functions for fuzz testing.
2. **Test Generation**: Use LLMs to create tests, providing them with context and examples.
3. **Execution**: Run the tests, gather coverage reports, and refine tests through a feedback loop.
4. **Reporting**: Store results in Supabase for frontend display.

## Challenges

Integrating LLMs into the fuzz testing pipeline and ensuring seamless GitHub integration were our primary challenges.

## Accomplishments

We're proud of developing a functional prototype that effectively integrates LLMs for fuzz testing and smoothly integrates with GitHub.

## What We Learned

We gained insights into the complexities of using LLMs for software testing and improved our skills in fuzz testing, web development, and project management.

## What's Next

We plan to:

- Expand language support beyond Python.
- Integrate FuzzGuard into GitHub actions for automated testing.

We're committed to continuously improving FuzzGuard to help developers enhance code security.

#### [Visit FuzzGuard](https://devpost.com/software/fuzzguard)
