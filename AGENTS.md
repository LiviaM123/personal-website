# Wency Personal Website

## 1. Project Overview

This repository contains the personal website of **Wency Miao**.

The goal is not to create a conventional résumé website or a generic academic homepage. The website should function as an interactive personal digital space that represents different dimensions of Wency's identity, work, interests, and creative life.

The site has two main worlds:

1. **Academic**
2. **Elsewhere**

These should feel distinct, but clearly belong to the same person and the same overall website.

The website owner has little to no prior web development experience. When making major architectural or technical decisions, prefer solutions that are simple to understand, maintain, and edit later.

Do not introduce unnecessary technical complexity.

---

# 2. Core Concept

The website should communicate:

> One person, two ways to explore.

Instead of immediately presenting visitors with a résumé, biography, or navigation bar, the website should begin with an intentional entry experience.

Visitors choose which side of Wency's world they would like to explore.

The website should feel like entering and exploring a personal space rather than reading a conventional professional profile.

---

# 3. Site Architecture

The high-level structure should be:

```text
HOME / ENTRY
│
├── ACADEMIC
│   ├── About
│   ├── Research
│   ├── Experience
│   ├── Projects
│   ├── CV
│   └── Contact
│
└── ELSEWHERE
    ├── Writing
    ├── Books
    ├── Music
    ├── Places / Travel
    ├── Photography
    ├── Notes / Thoughts
    └── Creative Projects
```

This structure may evolve as the website develops.

Do not create empty sections simply because they appear in this plan. Sections should only be displayed when meaningful content exists.

---

# 4. Entry Experience

The homepage should initially be minimal.

Possible central identity:

**WENCY**

or

**WENCY MIAO**

The visitor should then be invited to choose how they would like to explore the site.

Preferred wording:

> **How would you like to explore?**

Two primary options:

## ACADEMIC

Subtitle:

> Research · Work · Projects · CV

This leads to the professional and academic side of the website.

## ELSEWHERE

Subtitle:

> Life · Ideas · Creations

This leads to the creative and personal side of the website.

"Elsewhere" is intentionally used instead of "Private."

Do not describe this section as "Private," because its content is public but more personal and creative.

---

# 5. Optional Visitor Introduction

The entry experience may eventually include a lightweight onboarding interaction.

Possible questions include:

> What brings you here?

Possible options:

- Research
- Work
- Curiosity
- Something else

An optional name field may also be explored:

> How should I address you?

However:

- do not require visitors to provide a name;
- do not collect or transmit personal information unnecessarily;
- do not add databases, analytics, authentication, or data collection solely for this feature.

If personalization is implemented, prefer temporary client-side state.

The initial version of the website does NOT need this feature.

---

# 6. Academic World

## Purpose

The Academic side presents Wency's academic background, research, professional experience, analytical work, and CV.

It should communicate an interdisciplinary identity around areas including:

- Biological Sciences
- Public Health
- Epidemiology
- Biostatistics
- Health Data
- Data Analysis
- Disease Ecology
- One Health
- Healthcare / Life Sciences
- Research

The site should not force Wency into a single narrow professional label.

---

# 7. Academic Visual Identity

The Academic world should feel:

- precise
- intelligent
- calm
- restrained
- editorial
- elegant
- modern but not trendy
- academic without looking like a university template

Possible palette:

- off-white
- ivory
- deep navy
- charcoal
- muted grey
- restrained accent colours

Typography should ideally combine:

- an elegant serif typeface for headings;
- a highly readable sans-serif typeface for interface elements and body text.

Possible directions include:

- Cormorant Garamond
- Libre Baskerville
- Source Serif
- Inter
- IBM Plex Sans

Do not introduce too many fonts.

---

# 8. Academic Content Philosophy

The Academic section should NOT simply reproduce a CV.

Experiences and projects should be presented as things visitors can explore.

Instead of:

> Job title → company → bullet points

prefer:

> Question → Context → What I did → Methods → Result → Reflection

Important projects should have dedicated pages.

---

# 9. Experience / Project Navigation

A major design feature of the website is a visual system of experience icons.

Important experiences should be represented by custom visual symbols or icons.

Examples may eventually include:

- cattle social network research
- biotechnology / exosome work
- biological research
- public health projects
- epidemiology
- healthcare research
- education / teaching
- data analysis

The icons should function as visual entry points.

Conceptually:

```text
ICON
 ↓
Experience / Project
 ↓
Dedicated detail page
```

Visitors should be able to click an icon or experience card to explore the corresponding project.

# 10. Icon Design System

Do NOT use emoji as the final icon system.

Emoji may be used temporarily during prototyping.

The final website should preferably use:

- custom SVG icons;
- consistent line weight;
- consistent proportions;
- a shared visual language;
- restrained colours;
- simple forms.

Possible visual inspiration:

- scientific diagrams
- archival symbols
- botanical illustrations
- museum catalogues
- cartographic symbols
- seals and emblems
- minimal line drawings

Icons should feel like part of one designed collection rather than unrelated illustrations.

SVG is preferred over raster images where appropriate.

---

# 11. Experience Interaction

On desktop, experience icons or cards may use subtle hover interactions.

Examples:

- slight movement;
- slight scale change;
- title reveal;
- short description reveal;
- subtle border or shadow change;
- "Explore" indicator.

Animations should remain restrained.

Avoid excessive:

- bouncing;
- glowing;
- parallax;
- spinning;
- dramatic transitions;
- cursor effects.

Every interaction must also work on touch devices where hover is unavailable.

---

# 12. Project Detail Pages

Important projects should have dedicated pages.

A typical research project page may include:

## Title

Project name.

## Context

Where and when the project took place.

## Question

What problem or question was being investigated?

## Data

What data or material was used?

## Methods

For example:

- R
- Python
- Social Network Analysis
- statistical modelling
- epidemiological methods

## Findings

Important results.

## Visuals

Possible:

- figures
- diagrams
- network visualisations
- posters
- photographs

## Reflection

What Wency learned and why the project matters.

Project pages should be readable by intelligent visitors who are not necessarily specialists.

---

# 13. Example Flagship Academic Project

One likely flagship project is Wency's undergraduate research involving social networks and cattle.

Possible presentation:

**Social Networks & Weight Gain in Beef Cattle**

Context:

Imperial College London / North Wyke Farm Platform.

Possible themes:

- RFID-derived social associations
- social network analysis
- animal health
- productive outcomes
- statistical modelling

This project may eventually use a custom visual symbol combining:

- cattle imagery;
- nodes;
- network connections.

Do not invent scientific results or project details when content has not been supplied.

Use placeholders and ask Wency when information is missing.

---

# 14. Elsewhere

## Purpose

Elsewhere represents the parts of Wency's identity beyond formal academic and professional work.

It may eventually contain:

- Writing
- Fiction
- Books
- Reading
- Music
- Instruments
- Travel
- Places
- Photography
- Art
- Design
- Notes
- Personal observations
- Creative experiments
- Personal projects

Elsewhere should NOT feel like a second résumé.

It should feel exploratory.

---

# 15. Elsewhere Visual Identity

Elsewhere may be more:

- playful
- atmospheric
- expressive
- curious
- intimate
- experimental

than Academic.

It may use:

- illustration
- texture
- unconventional layout
- more expressive typography
- gentle animation
- botanical elements
- archival imagery
- handwritten or sketch-like elements
- photography

However, it should still feel connected to the Academic world.

The two sections should not look like websites belonging to two unrelated people.

---

# 16. Relationship Between Academic and Elsewhere

The central concept is:

> Two dimensions of the same person.

Avoid framing the site as:

> Professional Wency vs Private Wency.

Prefer the idea:

> Wency, depending on where you choose to look.

Visitors should always have a subtle way to move between the two worlds.

Possible navigation:

> Academic ↗

or

> Elsewhere ↗

or a shared symbol / logo.

Switching worlds should feel intentional but effortless.

---

# 17. Overall Design Direction

The website should feel like a combination of:

- personal archive
- editorial publication
- research portfolio
- small digital museum
- visual notebook

Possible conceptual keywords:

**Archive · Constellation · Cabinet · Field Notes · Index · Atlas**

These are inspirations, not labels that must appear in the interface.

---

# 18. Things to Avoid

Avoid making the website look like:

- a generic developer portfolio;
- a startup landing page;
- a LinkedIn profile;
- a résumé copied onto a webpage;
- a university faculty template;
- an AI-generated landing page.

Avoid excessive:

- gradients;
- neon colours;
- giant rounded cards;
- glassmorphism;
- generic stock illustrations;
- unnecessary dashboards;
- generic AI-style icons;
- decorative animations.

Avoid filling every area of the screen.

Whitespace is intentional.

---

# 19. Mobile Design

The website must work well on:

- desktop;
- tablet;
- mobile.

Do not design interactions that depend exclusively on hover.

The icon-based navigation should remain understandable on small screens.

Mobile layout should not simply shrink the desktop layout.

---

# 20. Accessibility

Maintain reasonable accessibility.

Important requirements:

- semantic HTML;
- readable font sizes;
- sufficient colour contrast;
- keyboard-accessible navigation;
- visible focus states;
- alt text for meaningful images;
- reduced-motion support where practical.

Do not sacrifice usability for visual experimentation.

---

# 21. Technical Direction

Preferred initial stack:

**Astro**

Preferred goals:

- static-first architecture;
- minimal JavaScript;
- component-based structure;
- Markdown or MDX for content where useful;
- SVG for custom icons;
- simple deployment;
- easy future maintenance.

Possible deployment:

- GitHub Pages;
- Vercel;
- Netlify.

Do not introduce React, Vue, databases, authentication, CMS platforms, or complex state management unless there is a clear reason.

Prefer Astro components and native web technologies for the initial version.

---

# 22. Suggested Project Structure

A possible structure is:

```text
src/
├── pages/
│   ├── index.astro
│   │
│   ├── academic/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── research.astro
│   │   ├── experience.astro
│   │   └── cv.astro
│   │
│   └── elsewhere/
│       ├── index.astro
│       ├── writing.astro
│       ├── books.astro
│       ├── music.astro
│       └── places.astro
│
├── components/
│   ├── ExperienceCard.astro
│   ├── ExperienceIcon.astro
│   ├── WorldSwitcher.astro
│   ├── Navigation.astro
│   └── Footer.astro
│
├── content/
│   └── projects/
│
├── layouts/
│   ├── AcademicLayout.astro
│   └── ElsewhereLayout.astro
│
└── styles/
    └── global.css

public/
├── icons/
├── images/
└── cv/
```

This is a suggestion rather than a strict requirement.

If a simpler architecture would achieve the same result, prefer the simpler architecture.

---

# 23. Content Management

Wency should eventually be able to add a project without editing complicated component code.

Where practical, project content should therefore live in Markdown / MDX or Astro content collections.

For example:

```text
src/content/projects/
├── cattle-network.md
├── biotechnology.md
└── public-health.md
```

The interface should render these entries consistently.

---

# 24. Development Principles

When modifying this repository:

1. Preserve the two-world concept.
2. Prefer simplicity.
3. Keep components reusable.
4. Keep content separate from presentation where practical.
5. Avoid unnecessary dependencies.
6. Maintain responsive behaviour.
7. Maintain accessibility.
8. Do not replace deliberate design decisions with generic template conventions.
9. Do not invent personal information.
10. Do not invent academic achievements, employment, research findings, publications, dates, or credentials.

When information is missing, use an obvious placeholder or ask Wency.

---

# 25. Working With Wency

The website owner is a beginner in web development.

When explaining work:

- use plain language;
- explain unfamiliar technical terms briefly;
- distinguish between required and optional changes;
- do not assume knowledge of Git, npm, Astro, HTML, CSS, or JavaScript;
- give exact commands when Wency needs to run something;
- explain what a command will do before asking Wency to run it.

Do not overwhelm Wency with implementation details unless requested.

When multiple technical approaches are possible, recommend one default rather than presenting many equivalent choices.

---

# 26. Changes Requiring Confirmation

Before making a major change to any of the following, explain the proposed change and why it is useful:

- overall information architecture;
- Academic / Elsewhere concept;
- primary visual identity;
- framework;
- deployment strategy;
- deletion of major sections;
- addition of large dependencies;
- introduction of databases or external services.

Small implementation decisions do not require confirmation.

---

# 27. Development Stages

Build incrementally.

## Stage 1 — Foundation

Create a functional website with:

- entry page;
- Academic option;
- Elsewhere option;
- navigation between worlds;
- responsive layout.

Do not attempt every feature at once.

## Stage 2 — Academic

Build:

- Academic homepage;
- About;
- experience/project system;
- first project detail page;
- CV access.

## Stage 3 — Visual System

Develop:

- typography;
- colour system;
- custom SVG icon system;
- experience cards;
- subtle interactions.

## Stage 4 — Elsewhere

Develop the creative side once the Academic architecture is stable.

## Stage 5 — Refinement

Add:

- responsive refinements;
- transitions;
- accessibility improvements;
- metadata;
- SEO;
- custom domain;
- performance optimisation.

---

# 28. Current Priority

The immediate goal is NOT to build the complete website.

The immediate goal is:

> Build a clean first prototype of the entry experience and establish the technical foundation for Academic and Elsewhere.

The first version should demonstrate:

```text
WENCY

How would you like to explore?

ACADEMIC
Research · Work · Projects · CV

ELSEWHERE
Life · Ideas · Creations
```

Both choices should lead to functional placeholder pages.

Once this foundation works, develop the Academic world first.

---

# 29. Definition of Success

The website succeeds if a visitor feels that they are exploring a coherent person rather than reading a résumé.

The Academic world should communicate intellectual seriousness and competence.

Elsewhere should communicate curiosity, personality, creativity, and life beyond work.

Together they should feel unmistakably part of the same personal identity.

The final experience should be:

**distinctive without being distracting, personal without being unprofessional, and sophisticated without being difficult to use.**
