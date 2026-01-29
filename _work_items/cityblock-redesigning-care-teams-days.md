---
layout: default
title: "Cityblock: Redesigning Care Teams' Days"
description: "A unified workflow system for 200+ care team members across 6 markets, replacing spreadsheets with a standardized care model."
order: 0
featured: 
meta: [Cityblock Health, Design, 2024-2025]
---

## Hero Section

![HERO IMAGE: Final Inbox design showing Due Today sub-inbox and Regular Check-Ins folder side by side, with a few tasks visible.]

**Replacing Spreadsheets with a Unified Care Model**

I led the design of a new daily workflow system for 200+ care team members across 6 markets. The project unified member outreach, task management, and documentation into one experience and eliminated hours of manual work every day.

| | |
|---|---|
| **Role** | Lead Product Designer (solo designer) |
| **Timeline** | September 2024 to March 2025 |
| **Team** | 2 Product Managers, 4 Engineers, Operations Partners |
| **Platform** | Web (desktop-primary) |

### Impact at a Glance
- Roughly 100 hours of daily labor redirected from spreadsheet management to patient care (200+ users saving 30-60 min/day)
- 6 markets aligned on a single care model (previously each had their own system)
- 3 legacy features sunset based on usage data
- Shipped to national scale within 6 months

---

## The Problem

![PROBLEM VISUAL: A diagram or annotated screenshot showing the scattered signals problem. Arrows pointing to Inbox, Member Feed, Spreadsheets, Slack, Looker dashboards. Or a photo of an actual market spreadsheet (anonymized).]

I assumed the problem was the tools. I was wrong.

When I started shadowing care teams, I expected to find clunky software. Instead, I found nurses and community health partners spending the first hour of every shift on logistics. Not because the tools were broken, but because nothing told them where to start.

The tools existed. They just didn't connect.

Before a single member was called, care team members pulled up their inbox, cross-referenced spreadsheets, checked Slack for urgent requests, toggled between Commons, Athena, Health Gorilla, and Zus, and built a personal to-do list of who to call and in what order. This wasn't a workaround for a few users. It was the standard workflow across every market.

These are nurses and community health partners caring for Medicaid and Medicare populations with complex medical, behavioral, and social needs. Every minute spent building a to-do list was a minute not spent on care.

> "I have to piece together my day from 5 different places. My inbox, the member feed, spreadsheets, Slack messages, and my own notes."

> "By the time I find everything I need to know about a member, they've already hung up."

### The Core Issues

**1. No single source of truth for who to call next**

Prioritization signals were scattered across the inbox, member feed, market spreadsheets, Looker dashboards, and Slack. Care teams toggled between 4-5 external platforms just to gather basic member information before a call.

- 15% of assigned tasks were overdue
- 36% of unassigned tasks were overdue

**2. Every market worked differently**

Massachusetts had invented their own Regular Check-In system using spreadsheets and RN assessments to determine member acuity. It worked well, but the data wasn't dynamic. A member who became unhealthy wouldn't get flagged for weeks. Meanwhile, other markets had no check-in system at all. There was no standard model for how often to contact members or what constituted a successful interaction.

**3. Disconnected outreach wasted member time**

Care teams made multiple calls to the same member for different reasons. A nurse calling about medication, then a community health partner calling about a social need, then someone else about a quality gap. No way to bundle everything into one meaningful conversation.

**4. No way to close the loop**

Work completed wasn't connected to work surfaced. If a care team member addressed a quality gap during a call, they still had to manually close the task, update the note, and remember to document it correctly. Manual processes meant errors and burden.

---

## My Role

I was the sole designer on this project with significant autonomy over product decisions. Our product managers were stretched thin, so I operated as a hybrid designer-PM, owning not just the design work but many of the product decisions themselves.

**What I did:**
- Organized and led discovery research across 6 markets (17 interviews, 8 shadowing sessions)
- Created the research plan and interview scripts
- Delegated some interviews to 2 researchers and another designer; synthesized all findings
- Made the call to kill the Group by Member feature after pilot feedback
- Designed all wireframes, mockups, and final UI
- Set up the pilot group, gathered feedback directly via Slack, and iterated
- Presented to the design team for critique; incorporated feedback I found valid, pushed back on the rest
- Worked with engineering to navigate a critical architecture decision (more on this below)

---

## Discovery & Research

![RESEARCH PHOTO: If you have any photos from research sessions, shadowing, or workshops, place one here. Even a blurred/anonymized screen of a video call works.]

| Method | Sessions | Markets | Focus |
|--------|----------|---------|-------|
| User interviews | 17 | IN, IL, FL, MA, NY, OH | Pain points, current workflows |
| Call shadowing | 8 | IN, IL, MA, OH | Observe real work in context |
| Concept testing | 4 | OH, NY, MA | Test early solution ideas |
| Pilot testing | 23 users | MA, NY, FL, IN, OH | Validate before full launch |

### What Surprised Me

I went into research expecting users to ask for more features. Instead, I learned three things that reshaped the project.

**1. The manual work was staggering.**

I knew care teams used spreadsheets. I didn't realize they spent 30-60 minutes every morning just organizing their day. Multiply that by 200+ people and you get roughly 100 hours of labor per day spent on logistics instead of care. The problem wasn't missing functionality. It was scattered functionality.

**2. Most of what we'd built wasn't being used.**

The member feed, the to-do list, the Google Calendar integration. All underutilized. Users had given up on the platform and built their own systems in spreadsheets. This reframed the project: we didn't need to add features. We needed to consolidate and remove.

**3. Users thought they needed more context than they actually did.**

Care teams were over-preparing for calls because they didn't trust the system to surface what mattered. They'd open 4-5 tabs across different platforms just in case. The 360 view wasn't helping. It was adding to the noise.

### Key Research Insights

**"Decoupling check-ins from tasks would help"**

Users wanted Regular Check-Ins (scheduled member outreach) separated from the general task feed. Mixing them created noise and made it hard to prioritize.

**"So many different ways one person organizes work"**

Customization wasn't a nice-to-have. It was essential. Workflows varied dramatically by role, market, and individual preference.

**"I'd still go to the timeline to create a note"**

Users had strong existing mental models. Solutions needed to work with their habits, not against them.

---

## The Political Challenge

The hardest part of this project wasn't the design. It was getting six markets with different workflows to adopt one model.

**Massachusetts was the toughest.**

They had invented Regular Check-Ins. They ran a tight, successful operation and were reluctant to change anything. Their attitude: "We're already doing this right. Why change?" My approach wasn't to fight this. It was to say: "You're right. Let's take what you've built and bake it into the product so everyone can benefit, and so your team stops maintaining spreadsheets."

**Other markets had the opposite problem.**

Regular Check-Ins were completely foreign. This wasn't a feature rollout. It was behavior change at scale. New workflows, new training, new performance expectations.

**How we got alignment:**

Product management created a process called Solving at Scale that designated single-threaded owners from each market. These individuals had to sign off on every step. This gave each market ownership over the final solution, which meant they were bought in before we shipped.

---

## Design Principles

Based on research, I established four principles to guide every decision:

| Principle | What it means |
|-----------|---------------|
| **One place for prioritization** | Stop forcing users to reconcile multiple systems. Surface who to call next in a single view. |
| **Decouple check-ins from tasks** | Regular Check-Ins are fundamentally different from tasks. Treat them that way. |
| **Support diverse workflows** | Build flexibility (columns, views, filters) because workflows vary by role, market, and individual. |
| **Remove before adding** | Most features weren't being used. Consolidate and cut before building new. |

---

## Design Process

### Attempt 1: Group by Member

**The hypothesis:** If tasks were grouped by member instead of shown in a flat list, users could more easily see everything they needed to do for each person.

![PROTOTYPE: Group by Member design. The collapsible rows showing a member name with tasks nested underneath.]

**What I did:**
1. Built a working prototype with collapsible member rows
2. Recruited a small pilot group of active users via Slack
3. Turned on the feature for one week
4. Gathered feedback directly in the channel

**What happened:**

The feature wasn't popular. Users found it harder to scan than a flat list, and it didn't match their mental model of working through tasks by due date. When they needed to see what's due today, grouping by member added friction.

**What I learned:**

Member-centric organization was valuable as an option, not a default. I carried this insight into the final Inbox design. Group-by-member became an optional view mode, not the primary experience.

This was a deliberate fail fast moment. I tested a hypothesis cheaply, learned it was wrong, and pivoted rather than building out a full feature nobody wanted.

---

### A Hard Architecture Decision

Early in the project, I had to weigh in on a critical technical decision: should Regular Check-Ins be modeled as a type of Task, or as a separate entity entirely?

**My position:** Treat them as tasks. Build recurring tasks, parent-child task relationships, and let RCIs inherit that infrastructure. This would scale better and let us reuse the pattern for future use cases.

**Engineering's position:** Build RCIs as a separate entity. Faster to ship, simpler to reason about, fewer edge cases in the short term.

**What happened:** I disagreed and committed. Engineering's approach was the right call for our timeline and constraints. But I still believe the task-based model would have scaled better long-term. This is a one-way door decision we'll live with.

This is the kind of trade-off that doesn't show up in a Figma file. Design isn't just pixels. It's advocating for system thinking even when you don't win.

---

## The Solution: Three Connected Surfaces

Rather than one monolithic redesign, I designed three surfaces that work together: Inbox (daily command center), 360 View (member context), and Regular Check-Ins (the new care model).

![SYSTEM DIAGRAM: A simple flow showing how the three surfaces connect. User starts in Inbox, clicks into member, sees 360 View, documents check-in, returns to Inbox.]

---

### Surface 1: Inbox

The Inbox is where care teams spend most of their day. It needed to answer one question clearly: What should I do next?

#### Before

![BEFORE: Old Inbox design. Flat task list, limited filtering, no sub-inboxes.]

**Problems with the old design:**
- Flat list of all tasks with no separation between urgent and routine
- Users had to manually filter by due date every morning
- Regular Check-Ins mixed in with everything else
- Tracking activation status required a separate spreadsheet

#### After

![AFTER: New Inbox design with Due Today sub-inbox selected. Show the left nav with sub-inboxes (Due Today, Due This Week, Regular Check-Ins) and the main task list.]

**Due Today / Due This Week sub-inboxes**

Eliminated the need for users to build their own daily to-do lists. One click shows exactly what's due.

![DETAIL: Close-up of the sub-inbox navigation showing Due Today, Due This Week, Regular Check-Ins tabs/folders.]

**Regular Check-Ins folder**

Separated from tasks entirely. Shows members due for scheduled outreach, not individual tasks. Users can see at a glance who needs a call this week.

![DETAIL: Regular Check-Ins folder view showing member rows with due dates, attempt counts, and on-hold status.]

**Reorderable columns and saved views**

Users can customize which columns appear and in what order, then save their preferred setup. Supports diverse workflows across roles and markets.

![DETAIL: Column editor modal showing drag-and-drop reordering, or a before/after of two different saved views for different roles.]

**Verbal Agreement and Activation Status columns**

Moved tracking that previously lived in spreadsheets into the product. Care teams can now filter and sort by activation status directly in the Inbox.

#### Key Design Decision

I made the Inbox the default landing page after login, replacing the member feed. Pendo data showed users were already spending most of their time in the Inbox, and the member feed had low engagement. Defaulting to Inbox reduced clicks and matched actual behavior.

---

### Surface 2: 360 View

The 360 View is the member profile where care teams go to prepare for a call or understand a member's full context.

#### Before

![BEFORE: Old 360 View with many widgets visible. Care Team, Acuity, Workflows, Meds, etc. Cluttered appearance.]

**Problems with the old design:**
- Too many widgets competing for attention
- Important information (like program enrollment) buried
- No clear way to see what actions were needed for this member
- Users opened 4-5 external platforms anyway because they didn't trust the page had everything

#### The Failed Attempt

We initially tried to make the 360 a one-stop shop for Regular Check-In calls. We wanted to bring timeline note creation to this page and surface every piece of context a user might need.

**What happened:** The page became overwhelming. There's simply too much information across too many systems to fit in one view without creating cognitive overload. Users told us it felt cluttered and they couldn't find what they needed.

**What I learned:** The 360 shouldn't try to be everything. It should provide enough context to start a call and make it easy to navigate deeper when needed.

#### After

![AFTER: New 360 View showing streamlined layout with Health Summary and Opportunities widgets prominent.]

**Retired underused widgets**

Based on Pendo usage data, I removed or collapsed widgets that care teams rarely interacted with: detailed Care Team roster, Acuity (for markets that don't use it), and the Tasks widget.

**Health Summary widget**

New widget that consolidates enrolled programs and key clinical measures in one scannable section.

![DETAIL: Health Summary widget showing enrolled programs (Diabetes, Hypertension) and clinical indicators.]

**Opportunities widget**

Surfaces quality gaps, program eligibility, and care pathway recommendations. This gave Cityblock a way to push clinical initiatives while keeping the page focused on actionable items.

![DETAIL: Opportunities widget showing a quality gap and a care pathway eligibility item.]

**RCI widget with quick actions**

Shows the member's Regular Check-In status (due date, number of attempts) and lets users trigger a check-in note directly from the 360.

![DETAIL: RCI widget showing Due in 3 days with attempt count and a Start Check-In Note button.]

#### Key Trade-off

Users asked for all tasks to appear on the 360 page. I built it and it failed. The list was too long, users kept asking for more columns and filters, and it essentially became a duplicate of the Care Plan page.

I removed the task widget and let users navigate to Care Plan when they needed the complete picture. The 360 stayed focused on context and quick actions, not task management.

---

### Surface 3: Regular Check-Ins

Regular Check-Ins (RCIs) are scheduled outreach calls to members at defined cadences. This was the new care model that replaced market-specific spreadsheets.

![RCI SYSTEM: Diagram or visual showing the four tracks and their cadences, or the RCI lifecycle.]

#### The Track System

I designed four tracks based on member medical needs:

| Track | Cadence | Description |
|-------|---------|-------------|
| **Intensive** | Every 30 days | Members with complex, active needs |
| **Focused** | Every 60 days | Members with moderate ongoing needs |
| **Responsive** | Every 90 days | Stable members needing periodic check-ins |
| **Preventive Care** | Minimal | Healthiest members. They call us when needed. |

#### How It Works

![RCI FLOW: Visual showing the RCI appearing in Inbox 7 days before due, user attempts call, successful or unsuccessful, fall off.]

1. RCIs surface 7 days before due date in the Regular Check-Ins folder
2. User attempts the call and documents with a template (Successful or Unsuccessful)
3. Successful check-in: Member falls off the list, next RCI scheduled based on track
4. Unsuccessful attempt: System counts the attempt and auto-shifts related task due dates to the next RCI
5. After 2 unsuccessful attempts plus due date passed: Member falls off (prevents infinite list growth)

#### Why This Matters

Massachusetts had been doing something like this in spreadsheets, but their data wasn't dynamic. A member whose health declined wouldn't get flagged for weeks because updating the spreadsheets was manual and slow.

By building RCIs into the product with real-time data, we made the system responsive. And by rolling it out to all markets, we gave teams without any check-in system a proven model to follow.

#### The Preventive Care Track

I introduced the Preventive Care track for the healthiest, lowest-risk members. Instead of scheduled outreach, these members could call Cityblock when they had needs, but the care team wouldn't proactively reach out.

Why this mattered for the business: This reduced the support hiring needed for each new market. Instead of staffing for 100% of members, Cityblock could focus care team attention on the most vulnerable populations while still serving healthier members reactively.

---

## What I Sunset

Good design isn't just what you add. It's what you remove. I made deliberate decisions to sunset features that weren't providing value.

| What I Removed | Why |
|----------------|-----|
| **Home page to-do list** | Replaced by Due Today / Due This Week in Inbox |
| **Member feed as default** | Low engagement; RCI folder served the same purpose better |
| **Google Calendar integration** | Pendo data showed almost no usage |
| **Several 360 widgets** | Low interaction rates; added visual clutter |
| **Tasks widget on 360** | Users wanted full context, not a summary, so they should go to Care Plan |

![SUNSET VISUAL (optional): Side-by-side of old home page with to-do list vs. new Inbox, or a simple before had 8 widgets, after has 4 comparison.]

These weren't arbitrary cuts. Each was based on usage data or direct user feedback. Removing them reduced cognitive load and let users focus on what actually mattered.

---

## Testing & Validation

### Advanced Pilot (Pre-Launch)

Before the full rollout, I ran an advanced pilot with 23 users across 5 markets. This group received the new Inbox changes and provided feedback via a dedicated Slack channel I monitored daily.

Results: 3 bugs identified and fixed before wider launch. Feedback was overwhelmingly positive.

![PILOT FEEDBACK: Screenshot of Slack messages from the pilot channel (anonymized if needed), or a collage of the quotes below.]

> "I really like this! This is so much simpler to organize tasks due!"
> — Kimberly Wolak, RNCM

> "This is great! Finally I don't need to swim through tasks to figure out my day. Love it."
> — Annett Jackson-Ricketts, RNCM

> "I appreciate that I no longer have to create a to do list for my tasks for the current day!"
> — Chakira Smith, CHP

> "I love the due-today/this week feature! Such a simple click of a button to get today or this week's tasks instead of filtering by date. Much appreciated time saver!"
> — Melissa McNeil, CHP

---

### Post-Launch User Testing (March 2025)

After launch, I conducted 30-minute testing sessions with 10 users (CHPs, RNCMs, Care Team Leads) from Indiana and Massachusetts.

![USER TESTING: Photo from a testing session, or a screenshot of the testing script/notes (anonymized).]

#### What Worked

- Inbox organization reduced clutter and made planning easier
- Due Today / This Week eliminated manual to-do list creation
- Assigning tasks to next RCI due date was highly valued
- New RCI process "tells us what to do when"

#### What Needed Refinement

> "This is just overwhelming to look at, honestly. I hate it."
> — Sarah, on the 7-day RCI rolling view

> "I don't trust that the system's going to work because we get screwed by it."
> — Sarah, on on-hold RCIs

**Issues identified:**

| Issue | What I Heard | How I Addressed It |
|-------|--------------|-------------------|
| 7-day rolling view felt endless | "I wish it was just Monday to Friday" | Explored This Week (Mon-Sun) vs. rolling 7 days for future iteration |
| On-hold RCIs caused anxiety | Showing work you can't act on eroded trust | Added show/hide toggle and filter dropdown for on-hold RCIs |
| RCI icon meaning unclear | Users didn't understand what made an RCI task different | Improved visual indicators and added training materials |

![ITERATION: Before/after of the on-hold RCI treatment, or the new filter dropdown for on-hold states.]

---

## Impact & Results

### Quantitative Impact

| Metric | Result |
|--------|--------|
| Daily labor redirected | Roughly 100 hours/day across org (200+ users x 30-60 min saved) |
| Markets standardized | 6 markets moved from local spreadsheets to unified model |
| Legacy features sunset | 3 (to-do list, member feed default, Google Calendar) |
| Time to national scale | 6 months from kickoff to full rollout |

![METRICS VISUAL (if available): Any dashboard, chart, or data visualization showing adoption, usage, or before/after metrics.]

### What Users Said

> "It looks amazing so far. I think it will make tackling my tasks feel less overwhelming."
> — Amy Dean, RNCM

> "Care Plan simplification is probably my favorite update yet!"
> — Sarah Kaluhiokalani, Senior CHP

> "I like the look of this so far. It's a pretty simple adjustment versus having to filter by days of the week."
> — Jeremy Boucher, Senior CHP

### Business Impact

- Enabled national scale of Regular Check-Ins (previously only Massachusetts had any system)
- Reduced support hiring per new market (Preventive Care track means healthy members self-serve)
- Created foundation for performance management (standardized data enables manager dashboards)
- Positioned for quality gap closure (Opportunities widget surfaces revenue-driving initiatives)

---

## Reflection

### What Worked Well

**Fail fast with Group by Member**

I tested a hypothesis cheaply, learned it was wrong, and applied the insights to the final design. Group-by-member became an option rather than a default. A better outcome than if I'd built out the full feature first.

**Data-driven sunset decisions**

I removed the Google Calendar integration and home to-do list based on actual Pendo usage data, not assumptions. This reduced surface area without removing features people actually used.

**Pilot, feedback, fix, launch**

The advanced pilot structure (23 users, Slack feedback channel) caught 3 bugs and built confidence before the wider rollout. Low-cost validation before high-cost commitment.

**Market alignment through ownership**

The Solving at Scale process gave each market a stake in the outcome. By the time we launched, they were bought in. Not surprised.

### What I'd Do Differently

**Sequence the rollout more carefully**

We launched Inbox changes, 360 changes, and RCI logic all at once. This was a deliberate trade-off to align markets on one model quickly, but it created training overload and made it harder to isolate what was working. Next time, I'd push for Inbox first, let it stabilize, then layer in the rest.

**Push harder on the architecture decision**

I still believe modeling RCIs as tasks would have scaled better. I made my case, disagreed, and committed, which was the right call for the team. But I'd spend more time building alignment earlier, before the decision became urgent.

**Design for trust, not just function**

The on-hold RCI anxiety taught me that showing users work they can't act on erodes confidence in the system. I should have caught this earlier. Trust is fragile. One unexpected behavior and users stop believing.

### Key Takeaways

1. One prioritization surface beats scattered signals, but only if it's scannable, not overwhelming. Customization (columns, views, filters) is essential when workflows vary.

2. Removing features can be as impactful as adding them. Sunsetting the to-do list and member feed as defaults reduced cognitive load and matched actual user behavior.

3. Trust is fragile. If the system behaves unexpectedly once (like on-hold RCIs not falling off correctly), users stop believing it. Reliability matters more than features.

4. Test cheaply before building fully. The Group by Member pilot took a week and saved months of wasted development on a feature users didn't want.

5. Alignment is design work. Getting six markets to adopt one model required as much effort as the Figma files. Design doesn't end at the screen.

---

## Visual Assets Checklist

Use this checklist to gather the screenshots and artifacts needed to complete this case study:

**Hero & Problem**
- [ ] Hero image: Final Inbox with Due Today and RCI folder visible
- [ ] Problem diagram: Scattered signals (Inbox, spreadsheets, Slack, etc.)
- [ ] Market spreadsheet example (anonymized)

**Research**
- [ ] Research session photo or video call screenshot
- [ ] Synthesis artifact (affinity diagram, journey map, sticky notes)

**Design Process**
- [ ] Group by Member prototype (the failed version)
- [ ] System diagram: Inbox to 360 to Document flow

**Inbox**
- [ ] Before: Old Inbox design
- [ ] After: New Inbox with Due Today selected
- [ ] Detail: Sub-inbox navigation
- [ ] Detail: Regular Check-Ins folder view
- [ ] Detail: Column editor or saved views

**360 View**
- [ ] Before: Old 360 with many widgets
- [ ] After: New 360 streamlined
- [ ] Detail: Health Summary widget
- [ ] Detail: Opportunities widget
- [ ] Detail: RCI widget with quick actions

**Regular Check-Ins**
- [ ] Track system diagram (4 tracks with cadences)
- [ ] RCI lifecycle flow (surface, attempt, fall off)

**Testing**
- [ ] Pilot Slack feedback (anonymized)
- [ ] User testing session photo
- [ ] Iteration: On-hold RCI filter/toggle

**Impact**
- [ ] Metrics dashboard or chart (if available)

---

*Case study by Jesse Trippe*
