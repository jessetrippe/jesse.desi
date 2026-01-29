# Care Team Workflow Design

---

## Hero Section

![HERO IMAGE: Final Inbox design showing Due Today sub-inbox and Regular Check-Ins folder side by side, with a few tasks visible. This should be your most polished, impactful screen.]

**Replacing Spreadsheets with a Unified Care Model**

Redesigning the daily workflow for 200+ care team members across 6 markets—unifying member outreach, task management, and documentation into one cohesive experience.

| | |
|---|---|
| **Role** | Lead Product Designer |
| **Timeline** | September 2024 – March 2025 |
| **Team** | 2 Product Managers, 4 Engineers, Operations Partners |
| **Platform** | Web (desktop-primary) |

### Impact at a Glance
- Launched to **200+ care team members** across 6 markets
- **Eliminated daily manual to-do list creation** for all users
- **Consolidated 3 surfaces** into 1 unified workflow
- Moved **6 markets off spreadsheets** onto standardized tooling

---

## Context

**Cityblock Health** provides value-based care for underserved communities—primarily Medicaid and Medicare populations. Care teams (nurses, community health partners, care coordinators) manage panels of 100-500 members with complex medical, behavioral, and social needs.

As **Lead Product Designer**, I owned the end-to-end design process: leading discovery research, facilitating stakeholder alignment, prototyping and testing solutions, and iterating based on user feedback. I worked with product managers, engineers, and clinical operations to ship a new care model across multiple markets.

---

## The Problem

![PROBLEM VISUAL: A diagram or annotated screenshot showing the "scattered signals" problem—arrows pointing to Inbox, Member Feed, Spreadsheets, Slack, Looker dashboards. Or a photo of an actual market spreadsheet (anonymized) they were using to track members.]

**Every morning, the same ritual**

Before a single member was called, care team members spent the first 30-60 minutes of their day on manual organization: pulling up their inbox, cross-referencing spreadsheets, checking Slack for urgent requests, and building a personal to-do list of who to call and in what order.

This wasn't a workaround for a few users. It was the standard workflow across every market.

These are nurses and community health partners caring for some of the most vulnerable people in the healthcare system—members with complex medical, behavioral, and social needs. Every minute spent building a to-do list was a minute not spent on care.

> "I have to piece together my day from 5 different places—my inbox, the member feed, spreadsheets, Slack messages, and my own notes."

> "By the time I find everything I need to know about a member, they've already hung up."

### The Core Issues

**1. No single source of truth for "who to call next"**
Prioritization signals were scattered across the inbox, member feed, market spreadsheets, Looker dashboards, and Slack. To prepare for a single call, care teams toggled between Commons, Athena, Health Gorilla, and other external platforms just to gather basic member information.
- 15% of assigned tasks were overdue
- 36% of unassigned tasks were overdue

**2. Disconnected outreach = wasted member time**
Care teams made multiple calls to the same member for different reasons—a nurse calling about medication, then a community health partner calling about a social need, then someone else about a quality gap. No way to "bundle" everything into one meaningful conversation. For members who are already navigating complex health situations, this fragmented experience eroded trust.

**3. No way to close the loop**
Work completed wasn't connected to work surfaced. If a care team member addressed a quality gap during a call, they still had to manually close the task, update the note, and remember to document it correctly. Manual processes created errors and burden.

**4. Every market worked differently**
Some markets ran care entirely in Google Sheets. Others had informal systems. There was no standard model for how often to contact members or what constituted a "successful" check-in. This made it nearly impossible to measure performance or share best practices across markets.

---

## Discovery & Research

I led a mixed-methods research effort to understand how care teams actually worked day-to-day—and which market approaches were most successful.

![RESEARCH PHOTO: If you have any photos from research sessions, shadowing, or workshops, place one here. Even a blurred/anonymized screen of a video call works. If no photos, use a simple table layout instead.]

| Method | Sessions | Markets | Focus |
|--------|----------|---------|-------|
| User interviews | 17 | IN, IL, FL, MA, NY, OH | Pain points, current workflows |
| Call shadowing | 8 | IN, IL, MA, OH | Observe real work in context |
| Concept testing | 4 | OH, NY, MA | Test early solution ideas |
| Pilot testing | 23 users | MA, NY, FL, IN, OH | Validate before full launch |

### Key Insights

![INSIGHT VISUAL (optional): A synthesis artifact—affinity diagram, journey map snippet, or even sticky notes from a workshop. Shows your process.]

**1. "Decoupling check-ins from tasks would help"**
Users wanted Regular Check-Ins (scheduled member outreach) separated from the general task feed. Mixing them created noise and made it hard to prioritize the day.

**2. "So many different ways one person organizes work"**
Customization wasn't a nice-to-have—it was essential. Workflows varied dramatically by role, market, and individual preference. A rigid design would fail.

**3. "I'd still go to the timeline to create a note"**
Users had strong existing mental models. Solutions needed to work with their habits, not against them.

**4. Successful markets had informal "Regular Check-In" systems**
The best-performing markets were already calling members at defined cadences (30/60/90 days based on medical needs)—but tracking it all in spreadsheets. This pattern worked; it just needed to be productized.

---

## Design Principles

Based on research, I established four principles to guide every design decision:

| Principle | What it means |
|-----------|---------------|
| **One place for prioritization** | Stop forcing users to reconcile multiple systems. Surface "who to call next" in a single view. |
| **Decouple check-ins from tasks** | Regular Check-Ins are fundamentally different from tasks. Treat them that way. |
| **Support diverse workflows** | Build flexibility (columns, views, filters) because "so many different ways one person organizes work." |
| **Centralize context without cluttering** | The 360 view should help users prep for calls—not become a dumping ground for every data point. |

---

## Design Process

### Attempt 1: Group by Member

**The hypothesis:** If tasks were grouped by member instead of shown in a flat list, users could more easily see everything they needed to do for each person.

![PROTOTYPE: Group by Member design—the collapsible rows showing a member name with tasks nested underneath. This is the "failed" version, which makes the story stronger.]

**What I did:**
1. Built a working prototype with collapsible member rows
2. Recruited a small pilot group of active users via Slack
3. Turned on the feature for one week
4. Gathered feedback directly in the channel

**What happened:**
The feature wasn't popular. Users found it harder to scan than a flat list, and it didn't match their mental model of working through tasks by due date. When they needed to see "what's due today," grouping by member added friction.

**What I learned:**
Member-centric organization was valuable as an *option*, not a default. I carried this insight into the final Inbox design—group-by-member became an optional view mode, not the primary experience.

> This was a deliberate "fail fast" moment. I tested a hypothesis cheaply, learned it was wrong, and pivoted quickly rather than building out a full feature nobody wanted.

---

## The Solution: Three Connected Surfaces

Rather than one monolithic redesign, I designed three surfaces that work together: **Inbox** (daily command center), **360 View** (member context), and **Regular Check-Ins** (the new care model).

![SYSTEM DIAGRAM: A simple flow showing how the three surfaces connect. User starts in Inbox → clicks into member → sees 360 View → documents check-in → returns to Inbox. Can be a simple sketch or polished diagram.]

---

### Surface 1: Inbox

The Inbox is where care teams spend most of their day. It needed to answer one question clearly: **"What should I do next?"**

#### Before

![BEFORE: Old Inbox design. Flat task list, limited filtering, no sub-inboxes. If you don't have the actual old design, describe it: "Legacy Inbox showing a flat list of 50+ tasks with basic column sorting."]

**Problems with the old design:**
- Flat list of all tasks—no separation between urgent and routine
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

**Reorderable columns + Saved views**
Users can customize which columns appear and in what order, then save their preferred setup. Supports diverse workflows across roles and markets.

![DETAIL: Column editor modal showing drag-and-drop reordering, or a before/after of two different saved views for different roles.]

**Verbal Agreement & Activation Status columns**
Moved tracking that previously lived in spreadsheets into the product. Care teams can now filter and sort by activation status directly in the Inbox.

#### Key Design Decision

I made the Inbox the **default landing page** after login—replacing the member feed. Pendo data showed users were already spending most of their time in the Inbox, and the member feed had low engagement. Defaulting to Inbox reduced clicks to start the day and matched actual behavior.

---

### Surface 2: 360 View

The 360 View is the member profile—where care teams go to prepare for a call or understand a member's full context.

#### Before

![BEFORE: Old 360 View with many widgets visible—Care Team, Acuity, Workflows, Meds, etc. Cluttered appearance.]

**Problems with the old design:**
- Too many widgets competing for attention
- Important information (like program enrollment) buried
- No clear way to see what actions were needed for this member
- Care team details took up significant space but were rarely used

#### After

![AFTER: New 360 View showing streamlined layout with Health Summary and Opportunities widgets prominent.]

**Retired underused widgets**
Based on Pendo usage data, I removed or collapsed widgets that care teams rarely interacted with: detailed Care Team roster, Acuity (for markets that don't use it), and several others.

**Health Summary widget**
New widget that consolidates enrolled programs and key clinical measures in one scannable section.

![DETAIL: Health Summary widget showing enrolled programs (Diabetes, Hypertension) and clinical indicators.]

**Opportunities widget**
Surfaces quality gaps, program eligibility, and care pathway recommendations. This gave Cityblock a way to push clinical initiatives (quality measures, program enrollment) while keeping the page focused on actionable items.

![DETAIL: Opportunities widget showing a quality gap and a care pathway eligibility item.]

**RCI widget with quick actions**
Shows the member's Regular Check-In status (due date, number of attempts) and lets users trigger a check-in note directly from the 360 without navigating away.

![DETAIL: RCI widget showing "Due in 3 days" with attempt count and a "Start Check-In Note" button.]

#### Key Design Decision

During testing, users asked for "all tasks" to appear on the 360 page. I built this—and it failed. The list was too long, users kept asking for more columns and filters, and it essentially became a duplicate of the Care Plan page.

I realized users didn't want a summary; they wanted the *full* task context. So I removed the task widget and let users navigate to Care Plan when they needed the complete picture. The 360 stayed focused on context and quick actions, not task management.

> "We tried to add all tasks to the 360 thinking it would help. The list got too long, and eventually it became clear users needed to see everything—so they should just go to the Care Plan."

---

### Surface 3: Regular Check-Ins

Regular Check-Ins (RCIs) are scheduled outreach calls to members at defined cadences. This was the new care model that replaced market-specific spreadsheets.

![RCI SYSTEM: Diagram or visual showing the four tracks and their cadences, or the RCI lifecycle (surfaced 7 days before → attempt → successful/unsuccessful → fall off).]

#### The Track System

I designed four tracks based on member medical needs:

| Track | Cadence | Description |
|-------|---------|-------------|
| **Intensive** | Every 30 days | Members with complex, active needs |
| **Focused** | Every 60 days | Members with moderate ongoing needs |
| **Responsive** | Every 90 days | Stable members needing periodic check-ins |
| **Preventive Care** | Minimal | Healthiest members—they call us when needed |

#### How It Works

![RCI FLOW: Visual showing the RCI appearing in Inbox 7 days before due → user attempts call → successful (falls off) or unsuccessful (shifts tasks, stays visible until 2 attempts + due date passed).]

1. **RCIs surface 7 days before due date** in the Regular Check-Ins folder
2. **User attempts the call** and documents with a template (Successful or Unsuccessful)
3. **Successful check-in:** Member falls off the list, next RCI scheduled based on track
4. **Unsuccessful attempt:** System counts the attempt and auto-shifts related task due dates to the next RCI
5. **After 2 unsuccessful attempts + due date passed:** Member falls off (prevents infinite list growth)

#### Key Design Decision: The Preventive Care Track

I introduced the Preventive Care track for the healthiest, lowest-risk members. Instead of scheduled outreach, these members could call Cityblock when they had needs—but the care team wouldn't proactively reach out on a cadence.

**Impact:** This reduced the support hiring needed for each new market. Instead of staffing for 100% of members, Cityblock could focus care team attention on the most vulnerable populations while still serving healthier members reactively.

---

### What I Sunset

Good design isn't just what you add—it's what you remove. I made deliberate decisions to sunset features that weren't providing value.

| What I Removed | Why |
|----------------|-----|
| **Home page to-do list** | Replaced by Due Today / Due This Week in Inbox |
| **Member feed as default** | Low engagement; RCI folder in Inbox served the same purpose better |
| **Google Calendar integration** | Pendo data showed almost no usage |
| **Several 360 widgets** | Low interaction rates; added visual clutter |

![SUNSET VISUAL (optional): Side-by-side of old home page with to-do list vs. new Inbox, or a simple "before had 8 widgets, after has 4" comparison.]

---

## Testing & Validation

### Advanced Pilot (Pre-Launch)

Before the full rollout, I ran an advanced pilot with 23 users across 5 markets. This group received the new Inbox changes and provided feedback via a dedicated Slack channel.

**Results:** 3 bugs identified and fixed before wider launch. Feedback was overwhelmingly positive.

![PILOT FEEDBACK: Screenshot of Slack messages from the pilot channel (anonymized if needed), or a collage of the quotes below.]

> "I really like this! This is so much simpler to organize tasks due!"
> — Kimberly Wolak, RNCM

> "This is great! Finally I don't need to swim through tasks to figure out my day. Love it."
> — Annett Jackson-Ricketts, RNCM

> "I appreciate that I no longer have to create a 'to do' list for my tasks for the current day!"
> — Chakira Smith, CHP

> "I love the [due-today/this week] feature! Such a simple click of a button to get today or this week's tasks instead of filtering by date. Much appreciated time saver!"
> — Melissa McNeil, CHP

---

### Post-Launch User Testing (March 2025)

After launch, I conducted 30-minute gorilla-style testing sessions with 10 users (CHPs, RNCMs, Care Team Leads) from Indiana and Massachusetts.

![USER TESTING: Photo from a testing session, or a screenshot of the testing script/notes (anonymized).]

#### What Worked

- **Inbox organization** reduced clutter and made planning easier
- **Due Today / This Week** eliminated manual to-do list creation
- **Assigning tasks to "next RCI due date"** was highly valued
- New RCI process **"tells us what to do when"**

#### What Needed Refinement

> "This is just overwhelming to look at, honestly. I hate it."
> — Sarah, on the 7-day RCI rolling view

> "I don't trust that the system's going to work because we get screwed by it."
> — Sarah, on on-hold RCIs

**Issues identified:**

| Issue | What I Heard | How I Addressed It |
|-------|--------------|-------------------|
| **7-day rolling view felt endless** | "I wish it was just Monday to Friday" | Explored "This Week" (Mon-Sun) vs. rolling 7 days for future iteration |
| **On-hold RCIs caused anxiety** | Showing work you can't act on eroded trust | Added show/hide toggle and filter dropdown for on-hold RCIs |
| **RCI icon meaning unclear** | Users didn't understand what made an RCI task different | Improved visual indicators and added training materials |

![ITERATION: Before/after of the on-hold RCI treatment, or the new filter dropdown for on-hold states.]

---

## Impact & Results

### Quantitative Impact

| Metric | Result |
|--------|--------|
| **Users reached** | 200+ care team members across 6 markets |
| **Markets standardized** | 6 markets moved off local spreadsheets |
| **Daily workflow** | Eliminated manual to-do list creation |
| **RCI model** | ~7 check-ins due per user per day (standardized) |

![METRICS VISUAL (if available): Any dashboard, chart, or data visualization showing adoption, usage, or before/after metrics.]

### Qualitative Impact

> "It looks amazing so far. I think it will make tackling my tasks feel less overwhelming."
> — Amy Dean, RNCM

> "[Care Plan simplification] is probably my favorite update yet!"
> — Sarah Kaluhiokalani, Senior CHP

> "I like the look of this so far—it's a pretty simple adjustment versus having to filter by days of the week."
> — Jeremy Boucher, Senior CHP

### Business Impact

- **Enabled national scale** of Regular Check-Ins (previously only some markets had any system)
- **Reduced support hiring per new market** (Preventive Care track = healthy members self-serve)
- **Created foundation for performance management** (standardized data enables manager dashboards)
- **Positioned for quality gap closure** (Opportunities widget surfaces revenue-driving initiatives)

---

## Reflection

### What Worked Well

**Fail fast with Group by Member**
I tested a hypothesis cheaply, learned it was wrong, and applied the insights to the final design. Group-by-member became an option rather than a default—a better outcome than if I'd built out the full feature first.

**Data-driven sunset decisions**
I removed the Google Calendar integration and home to-do list based on actual Pendo usage data, not assumptions. This reduced surface area without removing features people actually used.

**Pilot → feedback → fix → launch**
The advanced pilot structure (23 users, Slack feedback channel) caught 3 bugs and built confidence before the wider rollout. Low-cost validation before high-cost commitment.

### What I'd Do Differently

**Scope was too large for one launch**
We launched Inbox changes, 360 changes, and RCI logic all at once. This made it hard to isolate what was working and created training overload. A phased rollout (Inbox first → 360 → RCI) would have been cleaner.

**Relied too heavily on training**
Some behaviors weren't intuitive—like the RCI icon meaning or setting a due date to "next regular check-in." I leaned on training to cover gaps that could have been solved with better design. Earlier simplification would have reduced the training burden.

### Key Takeaways

1. **One prioritization surface beats scattered signals**—but only if it's scannable, not overwhelming. Customization (columns, views, filters) is essential when workflows vary.

2. **Removing features can be as impactful as adding them.** Sunsetting the to-do list and member feed as defaults reduced cognitive load and matched actual user behavior.

3. **Trust is fragile.** If the system behaves unexpectedly once (like on-hold RCIs not falling off correctly), users stop believing it. Reliability matters more than features.

4. **Test cheaply before building fully.** The Group by Member pilot took a week and saved months of wasted development on a feature users didn't want.

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
- [ ] Group by Member prototype (the "failed" version)
- [ ] System diagram: Inbox → 360 → Document flow

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
- [ ] RCI lifecycle flow (surface → attempt → fall off)

**Testing**
- [ ] Pilot Slack feedback (anonymized)
- [ ] User testing session photo
- [ ] Iteration: On-hold RCI filter/toggle

**Impact**
- [ ] Metrics dashboard or chart (if available)

---

*Case study by Jesse Trippe, Lead Product Designer at Cityblock Health*
