Portfolio Case Study Outline: Care Team Workflow Design
*Internal names also used: Ways of Working, IPLC (Intelligent Prioritization & Loop Closure), Opportunity Engine*

1. Project Header (Hero Section)

Project Title: [Compelling, clear title] — e.g. "From Spreadsheets to Standard Care: Member Feed, Inbox & 360 View"
Subtitle/One-liner: One product experience across three surfaces—member feed (home), Inbox, and member 360 view—to power Regular Check-ins and replace market-specific spreadsheets with a unified care model.
Key Details: Your role, timeline, team composition, platforms (web/mobile)
Hero Visual: Most impactful screen or before/after (e.g. member feed, Inbox, or 360 view)
Results Preview: 2-3 key metrics/outcomes upfront (hiring managers want to see impact immediately)

2. Context & Overview

**Company Background:** Brief intro to Cityblock Health and their mission (value-based care for underserved communities).

**The Problem (from IPLC stakeholder framing):**

- **Prioritized Panel Management:** Care teams did not have unified guidance on which member to engage next. Push factors (cadenced outreach, chase lists, signal-based outreach, follow-through on commitments) conflicted and were not integrated into one place.
  - *Contributing factors (Requirements Review):* Lack of clear prioritization guidance; scattered signals across systems (inbox tasks, workflows, member feed, scheduled appts, Sheets, Looker dashboards, Slack); inability to customize regular check-in configuration for markets (capacity, SLA for changes); unclear feasibility of care model activities within staffing; panel management tooling did not adequately prioritize member needs across panels (mental burden of dozens of needs); challenging for managers to re-assign work when staff are out; underlying task due dates may prompt excessive outreach vs. bundled interactions.
- **Comprehensive Member Interactions:** Care teams were engaging members through multiple, disconnected outreach efforts that were (1) inefficient at advancing progress on open opportunities (e.g. quality gaps) and (2) less effective at addressing members’ needs—increasing cost and inefficient use of member time.
  - *Contributing factors:* Member needs scattered across surfaces (assessments, timeline, care plan, Athena, Health Gorilla); actions to complete scattered across inbox, care plan, chase lists, member feed, welcome activities; no clear definition of “meaningful interaction”; coordination within and across teams lacking; canceled RCI workflows not re-triggered appropriately; any bilateral interaction counted toward RCI but not all were meaningful (e.g. “call me back”) and we had no way to differentiate in system.
- **Loop Closure:** No way to connect identified member needs to action taken or to loop closure in documentation/data.
  - *Contributing factors:* Tasking failed to decouple “outreach” vs “care” action-items (hard to know if lack of progress = unsuccessful outreach vs. incomplete care); attempted-but-incomplete work managed across task statuses/cancellation reasons without standardized guidance; user action/evidence of work not linked to task objects; double documentation and task closure required; manual system prone to error.
- **Operationalizing expectations:** Frontline staff and managers lacked clear responsibilities and performance expectations; productivity expectations were not integrated with panel management or cadenced outreach.
- **In practice:** Markets ran care and prioritization in spreadsheets with different ways of working; no standard model for Regular Check-ins or for closing the loop. Care teams needed one place to see what to do next and to understand each member holistically. *Baseline context:* 15% of assigned tasks overdue, 36% of unassigned tasks overdue; high-priority work at risk of not getting done without accountability.

**Guiding Principles for the solution (Requirements Review):**
- Stop developing piecemeal solutions; create patterns for surfacing members and action items and closing the loop that all current and future use cases can follow.
- Do not exacerbate scattered signals; bring all new and existing signals into Commons (quality gaps, BOI, chase lists, campaigns).
- Continue to clean up tasking as the key driver.
- Strive for clarity: all signals surfaced for care team action have clear action item(s), owners, and due dates.
- Keep it simple: do not introduce new concepts (e.g. “opportunities” as a new concept risks change fatigue); continue to use tasking as the mechanism; use regular check-ins for proactive panel management.
- Make work visible: bring all action items into Commons tasking (no more spreadsheets/Google docs) so care teams, managers, and the business can understand and track progress.
- Reduce or do not exacerbate documentation burden; make it easier to connect evidence of work to work surfaced in Commons.
- Report based on evidence of work when possible (vs. self-reported completion).
- Create observability for managers to understand performance and manage teams.

**Workgroup decisions (Requirements Review):**
- **Bundling:** Care teams should bundle and address as many action items as possible per successful interaction (including tasks assigned to teammates). Rationale: low reach rates and costly hard-to-reach members; capitalize on each connection; potential savings from comprehensive interaction outweigh RN-not-always-top-of-license opex concern. Interdependencies: correct track & primary assignments, staffing calculator, performance management and incentivizing bundling. SMEs: Ali H., Maryann S., Rachel B., Laura S., Ryan S., Rosie E., Fabiana S.
- **Tasking:** (A) Tasks stay—fundamental to surfacing work; invest in making tasking work and alleviate pain vs. running away from it. (B) Do not introduce new concepts; opportunities surface as tasks with discrete actions, owners, due dates. Rationale: surfacing as tasks creates observability and consistency; otherwise high-priority work may not get done. Tradeoff: volume of tasks may increase, but total open tasks could decrease due to removing RCI tasks and loop closure improvements. SMEs: Sam F., Ryan S., Fabiana S., Irene D., Jesse T., Ericka W., Maryann S., Matt F.

**Project Goals:**
- **Primary:** Implement and support a new model of caring for members—Regular Check-ins—through member feed, Inbox, and 360 view.
- **Secondary:** Move multiple markets off spreadsheets and disparate processes into a single, standardized care model and tooling.
- **Business goals (from IPLC):** Decrease cost per activated member; meet Quality & BOI targets; reduce TCOC; improve longitudinal engagement, opportunities closed per interaction, % opportunities closed with top-priority members; Trust & Satisfaction Score.
- **Operational (from notes):** Regular Check-ins by track (responsive, focused, intensive, Preventive Care Physician) so the least vulnerable members could self-serve and the company could hire less support per new market while directing attention to the most vulnerable; sunset underused surfaces (member feed, to-do list, Google Calendar) based on usage; simplify 360 with Health Summary and Opportunities to push initiatives (quality, programs) and improve outcomes.

**Problems explicitly out of scope for MVP (Requirements Review—full list):**
1. Standardized roles for Sr. CHPs and Sr. RN CMs across markets (career paths).
2. Timeline note quality, scanability, and findability (time spent sifting feels wasted if member doesn’t answer).
3. Tasks mapping 1:1 to value delivered; measuring and managing against value in day-to-day operations.
4. External referrals: easy way to track multiple referrals to resolve a member need start to finish.
5. Findhelp integration: external referrals not integrated back into Commons (double documentation).
6. Unifying disparate action-item systems (Workflows, Goals, Commons Companion Quality Widget, etc.—some require linear formatting).

**User journey (Requirements Review—high level):**
- *The day begins—who to engage?* User opens Commons and reviews panel prioritization signals (scheduled visits today, regular check-ins due, tasks due today with urgent/important/non-urgent, members deduped in RCI feed). Product build: Panel View / Inbox.
- *Connecting with a member—what to discuss?* User reviews unified view (360) for all action items and contextual information to prep for and conduct comprehensive interaction (care pathway/program eligibility, care plan goals and tasks, BOI/quality gaps). Product build: Defragmented View / 360.
- *Documentation and loop closure:* User documents progress; system updates members queued in panel view. Product build: Loop Closure (note templates, task due date shifts, archive reasons).
- *Performance management:* Frontline managers see daily/weekly/monthly performance. Product build: Frontline Manager Visibility dashboard (links to CHP Productivity View, RN Scorecard, CHP Scorecard).

**Your Role:** Specific responsibilities and contributions.
**Team & Collaboration:** Who you worked with (developers, researchers, PMs, care teams, market stakeholders—e.g. Fabiana, Rachel, Irene, Ryan, Rosie, Jesse, Efrain, Neves per IPLC docs).
**Constraints:** Timeline (pilot March 2025, national scale April 2025; Requirements Review Jan 15, Build Review Jan 30, Deployment Review Feb 27; MVP launch 3/3), technical limitations, regulatory considerations (HIPAA, etc.); MA compliance requirements for RCI due dates; Zus implementation dependency for some contextual prep (descoped from MVP).

---

### Implementation summary (from GitHub / PRs)

*Work completed ~Sept 2024; launched spring 2025. Below is a condensed summary of Inbox, Member feed, and 360 view–related PRs/commits for filling in the case study.*

**Inbox**
- **Group by member:** First idea tested—a view that groups tasks by member (collapsible rows: member → priority, due date; expand to see tasks). Gated by feature flag `groupTaskByMemberInbox`. Gives care teams a member-centric view instead of a flat task list.
- **Reorder columns:** Customizable column order and visibility (edit-columns modal, drag-and-drop, reset to defaults). Column order no longer in URL params. Improves flexibility for different roles/markets.
- **Saved views:** Users can save and load inbox views (filters, columns); soft delete for saved views; better handling of missing saved views. Supports consistent “ways of working” per team or market.
- **Filters:** Program filter; program status filter; Verbal Agreement & Activation Status columns/filters (Task Inbox + Member Search); priority secondary sort. Helps move from spreadsheets to standardized filtering in product.
- **RCI in Inbox:** “Last unsuccessful outreach” on RCI inbox row; show/hide on-hold RCIs; RCI duplicate fix on scroll; notification routing respects filtered tasks and current inbox tab. Keeps Regular Check-ins visible and actionable in the inbox.
- **Other:** Bulk task actions removed from inbox; “Add” label in Inbox removed; partner column added to inbox task queue tables. Simplifies UI and supports partner-specific workflows.

**Member feed (homepage) — later sunset**
- **Member feed route:** Tab/route `member-feed` with filter `showRegularCheckIns: true`. Surfaces members due for Regular Check-ins (prioritized by minimum contact cadence).
- **Backend:** `getMemberFeed`, `getMemberFeedPrimaryTasks`, `getMemberFeedDetails`, `getMemberFeedLatestCachedDate`; `RegularCheckInDueDateCache`, `RegularCheckinSLA`; RCI v1 caching job removed; RCI v2 feature flag deprecated (all markets on unified model). Powers a single “who to contact next” feed across markets.
- **RCI inbox row / list:** RCI-specific row component and list item styling for the member feed (e.g. `rci-inbox-row`, member feed list item). Connects feed to Inbox and 360.
- **Sunset (from notes):** Member feed was eventually replaced by the Regular Check-ins Inbox folder as the primary “who to contact next” surface; default after login became Inbox, not home/feed.

**360 view (member landing page)**
- **New 360:** “New 360” work and PatientProfileContainer updates (React Router v6 prep, route/render changes). Modernized member profile as the place to see holistic context and act.
- **Retired many widgets (from notes):** Simplified the 360 by retiring several widgets; reduced clutter and focus on what care teams use most.
- **Health Summary widget (from notes):** Created to summarize enrolled programs and clinical measures in one place.
- **Opportunities widget (from notes):** Created to organize all platform-level recommendations and eligibility for a member. This became the way Cityblock could push initiatives (e.g. quality measures for revenue, medical interventions, clinical programs) to improve health outcomes while aligning with business goals.
- **Program visibility:** Do not show graduated programs in 360; Interwell program added back to new 360. Keeps 360 relevant to current program enrollment.
- **RCI ↔ 360:** Trigger timeline note for RCIs from 360. Closes the loop between “member due for RCI” (feed/Inbox) and “document the check-in” on the member’s 360.

**Regular Check-ins (RCI) — cross-surface**
- **Market rollout:** RCI enabled for North Carolina, NY, FL, Ohio; all markets added to `REGULAR_CHECK_IN_V2_MARKET_SLUGS`. Moves markets off spreadsheets onto the same care model.
- **Disengagement / re-engagement:** Disengage/re-engage RCI logic; convert outcome of recently closed RCI for disenrolled; do not create RCIs for disengaged members; on-hold RCIs excluded from nightly job; “on hold” single-select and show/hide in inbox. Aligns RCI with member status and reduces noise.
- **Robustness:** RCI note submission logging; fix track changes; count RCI notes via note templates; refactor “attach note to RCI before checking template count”; delayed/skipped RCI notes not counted against attempt total. More reliable RCI lifecycle and reporting.
- **Content/templates:** RCI and recurring RCI in content builder task template UI; recurring RCI tasks more obvious in UI; RCI due date for task templates. Supports standardized RCI workflows in product instead of ad hoc spreadsheets.

**What it was trying to do:** Standardize care teams on one model (Regular Check-ins), give them a member feed + Inbox + 360 that work together, and replace market-specific spreadsheets with shared tooling and consistent filters/views.

**Concepts / features introduced (from notes):**
- **Group my Member:** Launched with a pilot group; feedback showed it wasn’t very popular for various reasons. Team failed fast and sunset the feature, then applied learnings to the new Inbox (e.g. member-centric organization without forcing the group-by-member as the default).
- **Tasks due today** and **Tasks due this week** in Inbox — so care teams no longer had to build daily to-do lists manually.
- **Regular Check-ins by Track:** Responsive, focused, intensive, and **Preventive Care Physician (PCP)**. The PCP track drastically reduced support hiring needed per new market: it set up the least vulnerable, healthiest members to call with issues but otherwise left them alone, so the company could hire less and direct attention to the most vulnerable and needy population. PCP was another test pilot; parts were successful and other parts were not.
- **Tasks assigned to a regular check-in** and **recurring tasks** — so work could be tied to RCI cadence and repeat in a structured way.

**Sunset Commons home page (from notes):**
- **Member feed** — replaced by the Regular Check-ins Inbox folder as the primary “who to contact next” surface.
- **To-do list** — care team members no longer had to build daily to-do lists; solved with Due Today and Regular Check-ins in the Inbox.
- **Google Calendar integration** — sunset after Pendo data showed users weren’t using it.

**What was done:** Shipped Inbox with Due today, Due this week, Regular check-ins folder (replacing member feed as primary), group-by-member option, reorderable columns, saved views, and RCI-aware filters/rows; modernized 360 (retired many widgets, added Health Summary and Opportunities); tied RCI completion to timeline notes from 360; rolled out RCI by track (including PCP) to multiple markets with disengagement and robustness fixes; sunset home to-do and Google Calendar based on usage.

**How it affected users:** Care teams get a single place to see members due for check-ins (RCI Inbox folder) and tasks due today/this week (Inbox), act on tasks by member or by list (Inbox with optional group-by-member), and document and view context on the member (360). They no longer build daily to-do lists or rely on a separate member feed or Google Calendar. Markets move off local spreadsheets onto the same views, filters, and RCI logic. PCP track reduced operational load for healthy members so teams could focus on the most vulnerable.

**Relevant PRs (from your list — run `gh pr view <number>` for details):**

| # | Title (abbreviated) | Area |
|---|----------------------|------|
| 26207 | Add Refresh Button on Member Research | Member Research (360/pre-call) |
| 26163 | Updating icons, fixing Text... (columns) | Inbox columns |
| 26159 | [PLAT-4526] Fix /home redirect | Home / member feed |
| 26122 | Adding RCI and recurring RCI to content builder task template UI | RCI |
| 26102 | Return total tasks and completed... (workflow) | Inbox / workflow |
| 26098 | Jaz/cos 634 do not show graduated programs in 360 | 360 |
| 26088 | [COS-608] Remove RCIv1 caching job | RCI |
| 26072 | [QH] Adding Verbal Agreement & Activation Status Columns/Filters (Task Inbox, Member Search) | Inbox |
| 26029 | Trigger timeline note for rcis from 360 | RCI ↔ 360 |
| 26028 | [QH] Added Verbal Agreement... | Inbox |
| 26020 | Timeline filter update - attempted and successful calls | 360 / timeline |
| 26013 | [QH] Added Activation Status... | Inbox |
| 25999 | Jaz/cos 614 hide acuity | 360 / visibility |
| 25996 | [COS-630] Reduce RCI error logging and prevent RCI creation for disengaged members | RCI |
| 25995 | [COS-627] Refactor updateRegularCheckInOnNoteSubmission... | RCI |
| 25994 | Make recurring RCI tasks more obvious in the UI | RCI |
| 25980 | Use Mosaic SDK for Member Research | Member Research |
| 25968 | [COS-629] Move RCI attribute check | RCI |
| 25965 | [COS-624] Remove home page... | Home / member feed |
| 25964 | Saving space on left rail | Left rail / nav (home, inbox) |
| 25962 | Left rail menu: use MenuO... | Left rail |
| 25959 | Adding isStarredAssignee (assign task) | Inbox / tasks |
| 25952 | enable rci due date for task templates | RCI |
| 25931 | Standardize Member Research | Member Research |
| 25904 | COS-618 - fix disengaged column on member page | Member page / 360 |
| 25894 | [PLAT-4527] React Router v5 compat - patient-profile-container part 3 | 360 |
| 25886 | Use Mosaic SDK for Autofill Note Template | 360 / notes |
| 25862 | added functionality to convert outcome of recently closed RCI for disenrolled | RCI |
| 25859 | COS-593 - Make sure NC patients do not get RCIs depending on attribute | RCI + NC |
| 25838 | Jaz/change count regular check in notes to join note templates | RCI |
| 25831 | Adding North Carolina to the RCI market slugs | RCI + NC |

**PR-derived narrative (from `gh pr view` output)**

*Use these problem/solution bullets in Design Process, Final Solution, or Impact sections.*

**Inbox & member search**
- **Verbal Agreement & Activation Status (26072, 26028, 26013):** Care teams were using outside sheets to track activated vs non-activated members. Shipped columns and filters for Verbal Agreement and Activation Status on Task Inbox and Member Search so this lives in product instead of spreadsheets.
- **Workflow task counts (26102):** Workflow details showed rounding errors because the UI derived counts from a single percentage. Backend now passes total and completed task counts plus the percentage; UI uses counts for display.
- **Icons & layout (26163):** Updated Inbox/column icons (rounded vs circle) and fixed empty state layout (e.g. Texts) so the UI felt consistent and readable.

**Home / member feed & Ways of Working**
- **Default to Inbox (25965, COS-624):** As part of Ways of Working, the team turned off the redirect that sent people to the member feed. Default after login is always Inbox; change was held to EOW so users could be communicated to.
- **/home redirect (26159):** The /home redirect had been removed in an earlier PR; added it back so existing links and expectations still work.

**360 view & member page**
- **Graduated programs (26098, COS-634):** Bad data in `patient_program_status_v2` made some programs appear active after members had graduated. Cleaned up records so the 360 only shows current program status.
- **Hide acuity by market (25999, COS-614):** Acuity in Health Summary was always on; some markets don't use it. Acuity section is now hidden when market/partner/program aren't in the allowed set (e.g. NC, MA, IN and specific partners/programs).
- **Timeline: successful vs attempted calls (26020, PBL-123):** Care teams needed to filter timeline calls by status. Added filter for successful vs attempted calls so they can quickly see successful connections and outreach attempts.
- **Left rail & member info (25964, 25962):** Saved space and improved clarity on the left rail: N/A → "--", copy/paste for Medicaid/NMI, consent as list items, tooltip on gender pronouns, "Need to know" label, birthdate under name for safety. Refactored actions menu to use `MenuOption` instead of `ListItem`.
- **Disengaged column (25904, COS-618):** Adding the disengaged column broke the member page; fixed typing so the column works on the member page.
- **React Router compat (25894):** Patient profile (360) migrated to react-router-dom-v5-compat as part of the React Router v6 migration (routes, Navigate, useParams, etc.).

**RCI ↔ 360**
- **Trigger RCI note from 360 (26029, COS-611):** Care teams needed to start an RCI note from the 360. Implemented query params that open the timeline and create a new note with the RCI template prefilled, so the loop from "member due for RCI" to "document check-in on 360" is seamless.

**Regular Check-ins (RCI) — behavior & rollout**
- **NC market (25831, 25859, COS-593):** Enabled RCI for NC (e.g. market slugs for 5/8 launch). Daily job no longer creates RCIs for NC members who are difficultToReach, disengaged, or optsOutOfCityblockServices.
- **Disengaged members (25996, COS-630):** RCI service errors were too noisy and we might have been creating RCIs for disengaged members. Stopped creating RCIs for activated disengaged members and downgraded the common expected "error" to a log so monitoring is accurate.
- **Note submission & lifecycle (25995, COS-627; 25862, COS-585):** Refactored `updateRegularCheckInOnNoteSubmission`: attach note to RCI before checking template count so notes close out immediately instead of waiting for the nightly job; added smaller helpers and transaction support. When users publish a successful RCI note retroactively (event time before previous unsuccessful completion), outcome now flips from unsuccessful to successful.
- **RCI attribute checks (25968, COS-629):** RCI logic lived in `PatientInfoService.edit` but many callers use `editAttributes`, so checks were skipped. Centralized logic in `handleRegularCheckInOnPatientAttributeEdit` in the RCI service and call it from `editAttributes` so attribute changes (e.g. disengaged, opts out) always update RCI correctly.
- **Count RCI notes (25838):** `countRegularCheckInNotes` hadn't been updated for the `note_templates` table. Moved the function to the note_templates module and updated the query and all references.
- **Remove RCIv1 caching job (26088, COS-608):** RCI due date caching moved to a different system. Removed the deprecated `cache-regular-check-in-due-date` job, Terraform, and member-feed references.

**RCI — task templates & UI**
- **RCI and recurring RCI in task templates (26122, COS-601):** Backend already supported RCI on task templates but there was no UI. Added UI for associating Regular Check-in and recurring (repeating) tasks in task templates and goal templates, plus backend for repeating tasks tied to RCIs.
- **Recurring RCI in task detail (25994, COS-615):** Users couldn't tell recurring vs one-off RCI tasks. Added a description in the task detail view so recurring RCI tasks are clearly indicated.
- **RCI due date on workflow tasks (25952, COS-628):** New boolean on task template; when starting a workflow we find the RCI and set the task due date to the RCI due date so workflow tasks align with Regular Check-ins.

**Member Research (360 / pre-call)**
- **Refresh (26207, AIT-974):** Pre-called member research was cached with no way to refresh. Added a refresh button so users can get updated research.
- **Mosaic SDK & feedback (25980, AIT-884):** No way to leave feedback on member research. Added thumbs up/down and comments to the Member Research widget and wired it to Mosaic when the FF is on; fixed a bug where thumbs selection cleared after submitting a comment.
- **Standardize UI & workflow selection (25931, AIT-828):** Pre-call member research lived only on the Outreach page (for OSes). Extended it to the Timeline (for TOC workflows) and added workflow selection—defaulting to OS on Outreach and TOC on Timeline—so both workflows get the right data.

**360 / notes tooling**
- **Mosaic SDK for autofill (25886, AIT-902):** No backend path for the new Mosaic SDK. Added a feature flag, Mosaic client service, and a path that uses the SDK when the flag is on for autofill note template.

*The narrative bullets above were derived from `gh pr view` output for these PRs. Use the table for quick reference or linking.*

**Additional PRs from full list** (parsed from your CSV; full titles below). *We already have narrative for the main table above; these are extras to consider for completeness.*

| # | Full title | Area |
|---|-------------|------|
| **26445** | **COS-537 - Remove IPLC feature flag, references** | **IPLC / WoW** |
| 26739 | Fix task templates for two workflows | RCI / workflow |
| 26738 | RCI cadence migration | RCI |
| 26722 | SURF-507: Backfill LTR Scores | LTR / Inbox |
| 26654 | SURF-500: Add hasHistoryOfAcscVisits and hasHistoryOfBhVisits To EOC timeline events | 360 / timeline |
| 26635 | Sh fix rci date test | RCI |
| 26598 | added a new single select for on hold rcis | Inbox / RCI |
| 26578 | Initial fix for sticky columns | Inbox |
| 26551 | PC program RCI cadence nits | RCI |
| 26526 | COS-664 - Update RCI cadence logic for preventive care members | RCI |
| 26509 | Fixing the imports in server side and move some of the shared functions to the shared file | member-feed / server |
| 26507 | SURF-445: Add hasHistoryOfAcscVisits, hasHistoryOfBhVisits and hasLtrScoreAboveThreshold To BRT | timeline / BRT |
| 26503 | [SURF-475-A] Create TOC tab FF | 360 / TOC |
| 26500 | Update Member Research Zus Queries | Member Research |
| 26497 | Adding NavSection property to expand when items inside are active | Left nav |
| 26491 | RCI Quick Actions: Updated conditional for acuity-checkin template only tufts | RCI |
| 26489 | SURF-444: Add LTR Score To Timeline Events | 360 / timeline |
| 26466 | SURF-443: Add LTR Score to Inbox and Patient Panel | Inbox |
| 26433 | [PLAT-4527] React Router v5 compat - patient-profile-container part 4 | 360 |
| 26416 | [PLAT-4176] Remove FormattedMessage - patient-profile-container | 360 |
| 26404 | [PLAT-4744] fix care plan & assessment sub nav | 360 |
| 26385 | Adding VA back for non-Activated members | Inbox / member |
| 26344 | Switching template tags to template title instead of slug | Task template |
| 26343 | Large refactor to implement new editor behavior | Care plan / 360 |
| 26341 | Update Autofill Notes via Mosaic to Include Newer Inputs | Member Research / 360 |
| 26340 | add gender pronouns to autofill prompt | 360 / autofill |
| 26330 | [CS-3809] Diagnosis opportunities "Previously documented conditions" evidence section - Mock data, behind FF | 360 |
| 26328 | Fix Assigned To filter for pods | Inbox |
| 26319 | Clearer Logs for Deceased Member RCIs | RCI |
| 26309 | [PLAT-4688] Timeline load more button | 360 / timeline |
| 26301 | [PLAT-4688] Timeline: hide Note Draft spinner | 360 / timeline |
| 26296 | [COS-659] Designate some quality measure actions as clinical only | 360 / quality |
| 26295 | Refactor Member Research | Member Research |
| 26291 | Removing ListItem link | Left nav |
| 26290 | Add CKD to Health Summary Widget V2 | 360 |
| 26278 | COS-657 fast follows | RCI |
| 26255 | Deleting RCI for deceased members and no longer create a new RCI | RCI |
| 26254 | Moving the Update button to the rightContent of the ListItem | Left rail / UI |
| 26240 | added functionality to show or hide on hold rcis in the inbox | Inbox / RCI |
| 26204 | Member panel care pathways and programs filter performance updates | Member panel / 360 |
| 26203 | TOC events deep link to the "Encounters and Notes" section in the embedded ZAP | 360 / TOC |
| 26164 | Adding Guardian and HIE consent to left rail | Left rail |
| 26126 | Assigned to filter reenabled with constraints | Inbox |
| 26682 | [PLAT-4176] Remove FormattedMessage - Member left nav & team | Left nav |

*The PR list above (and the full `gh pr view` output you shared) informed the scope described in this case study: Inbox (columns, saved views, RCI sub-inbox, on-hold show/hide, sticky columns, Assigned To), member feed, 360 (RCI widget, left rail, programs/pathways, note editor, timeline), RCI behavior (cadence, preventive care, deceased/on-hold, task templates), Member Research/Zus/autofill, LTR score surfacing, and platform cleanup (IPLC FF removal, React Router, FormattedMessage→Text). You can trim the table or remove it for the final portfolio; the narrative sections draw on this scope without listing every PR.*

**Commands to find more PRs** (run from Commons repo; results are from anyone, merged in your date range):

```bash
# Broad: merged May 2024 – June 2025
gh pr list --state merged --limit 500 --search "merged:2024-05-01..2025-06-30"

# By keyword (run each; merge/trim duplicates)
gh pr list --state merged --limit 100 --search "inbox merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "RCI merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "member feed merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "360 merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "regular check-in merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "saved view merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "column merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "left rail merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "patient profile merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "IPLC merged:2024-09-01..2025-06-30"
gh pr list --state merged --limit 100 --search "COS-6 merged:2024-09-01..2025-06-30"
```

To pull full details for the “missed” list (single line):

```bash
for n in 26739 26738 26722 26654 26635 26598 26578 26551 26526 26509 26507 26503 26500 26497 26491 26489 26466 26445 26433 26416 26404 26385 26344 26343 26341 26340 26330 26328 26319 26309 26301 26296 26295 26291 26290 26278 26255 26254 26240 26204 26203 26164 26126 26682; do echo "--- PR #$n ---"; gh pr view $n; echo; done
```

---

3. Research & Discovery

Research approach: Understand how each market performs today; compare which solutions and ways of working were more or less successful; identify the most successful markets and bring those features and patterns into the product (instead of keeping them in spreadsheets).

User Research Methods (from IPLC Deployment Review):
- **User interviews:** 17 interviews across 9 markets (9 CHP, 6 RNCM, 2 TOC RN)—IN, IL, FL, MA, NY, OH—focused on Inbox & Tasking, Care Plan, Open Opportunities, Regular Check-ins.
- **Call shadowing:** 8 sessions in IN, IL, MA, OH to observe gaps and inefficiencies.
- **Concept testing:** 4 interviews (2 CHP, 1 CTL, 1 RNCM) in OH, NY, MA presenting initial solution concepts; feedback and design iteration.
- **Advanced Inbox pilot:** 23 users (6 RNCM, 10 CHP, 7 other) across MA, NY, FL, IN, OH; feedback via Slack; 3 bugs identified and fixed.
- **Post-launch user testing:** Quick validation plan—30 min sessions, gorilla-style; 5–10 participants (mix IN & MA, CHPs, RNCMs, CTLs); recruiting via Pilot Group/Slack. Quick pulse survey (3–5 questions) for broader sentiment.

Key Findings (from concept testing & post-launch):
- **Panel / Inbox:** Decoupling check-ins from the task feed would make tasking more useful (“Separating check-ins from tasks would help… I wouldn’t miss anything important.”). Users value urgency indicators over due dates (“If I get an alert for an urgent task, I address it by the end of the day.”). Customization is necessary for diverse workflows (“So many different ways one person [organizes] work… that’s what makes it complicated.”).
- **360 view:** Centralizing opportunities, tasks, and appointments would likely improve efficiency (“It’s nice to have the APV right in front of me… I’m not looking through the miscellaneous tasks at the bottom.”). Floating note would reduce burden (“I wouldn’t have to save drafts and reopen them. This would save me time.”). Over-cluttering could obscure priorities (“If we’re just throwing in a bunch of goal-related tasks… I don’t see a lot of folks utilizing it.”). Users still rely on timeline for notes (“I’d still go to the timeline to create a note and make sure nothing gets missed.”).
- **Concept testing (WIP Design Review):** On member-level task prioritization: “this will be helpful because some teams don’t know where to start” (CTM). On bringing quality chase lists into Commons tasking: “This will help make things more efficient for the market teams as it’s time consuming to create & maintain chase lists” (CTM). On surfacing welcome activities in unified view: “would be helpful for users not to have to toggle back and forth between Commons and the welcome activities checklist, and would act as a reminder to complete certain activities” (CTM).
- **Post-launch:** Interface overload—users felt overwhelmed by 360 widgets and RCI folder (7-day rolling view described as unhelpful, continuous sense of incompletion). Task view preferences differed (consolidated vs separate tabs; 7-day vs “this week” Mon–Sun). Many wanted RCIs to fall off after two attempts; “on hold” RCIs in Inbox caused anxiety. 360 task widget was disliked—users prefer tasks in context of goals. RCI icon/value was unclear; many didn’t set due date to “next regular check-in” in scenarios.

**User Personas:** Primary users (care teams, care coordinators, CHPs, RNCMs, CTLs, TOC RNs) with needs/frustrations above.

**Journey Mapping / Pilot hypotheses (Pilot Scratch Pad):**
- *Prioritized Panel Management:* Leading = clicks into RCI members / care team member / day. Mid = # members with “Urgent” tasks completed; # “Urgent” task completions per member. Lagging = # tasks closed / RCI interaction / month. Topline = CPAM, longitudinal engagement, satisfaction.
- *Comprehensive Member Interactions:* Leading = unique clicks into opportunities / care team member. Mid = tasks closed / interaction; actioned gap closures / interaction. Lagging = opportunities closed / interaction. Topline = CPAM, longitudinal engagement.
- *Feature → hypothesis examples:* Surface opportunities + tasks on 360 → care team bundles more easily, fewer outreaches per member per interval (measure: total tasks + opportunities addressed / interaction; outreaches per member per interval). New Inbox UI (RCI, due today) → one surface makes it easier to identify which member to engage next (measure: VOTU, Pendo clicks to Homepage, RCIs attempted on time, tasks closed by due date, % panel with successful RCI). Quality gaps surfaced + training → non-provider roles action on more quality gaps, more than one gap per interaction (measure: # non-provider roles actioning on gaps; # un-actioned gaps for LE members; actioned gaps / interaction). 360 UI updates → users spend less time finding context, less time creating to-do lists (measure: Pendo time on 360; inbox/homepage use; actions on 360). Archive task status → better focus panels & inboxes, observability into archive vs complete (measure: decreased overdue/deleted volume; baseline # archived by reason).

**Competitive Analysis:** (if applicable) How other healthcare tools handle similar problems.

**Stakeholder Insights:** Clinical requirements, business needs; workgroup decisions on bundling, tasking, opportunities-as-tasks (see Context & Overview / Requirements Review).

4. Problem Definition & Synthesis

**Core Problems Identified (synthesized from research):**
- **Prioritized panel management:** No single place showed “which member to engage next”; cadence, chase lists, signals, and follow-through conflicted and lived in spreadsheets.
- **Comprehensive member interactions:** Multiple disconnected outreaches were inefficient (didn’t advance opportunities) and less effective for members—higher cost, poor use of member time.
- **Loop closure:** No way to connect identified needs → action taken → closure in documentation/data.
- **Operationalizing expectations:** Unclear responsibilities and performance expectations; productivity not integrated with panel management or cadenced outreach.

**How Might We:**
- HMW make it easier for users to identify which member to engage with next? (One surface with prioritization signals.)
- HMW help care teams bundle more opportunities per interaction and reduce outreaches per member?
- HMW give users a way to close the loop (archive vs complete) and create observability into why work was closed?
- HMW make recurring and RCI-associated tasks easy to identify and complete without overwhelming the inbox?

**Design Principles:**
1. **Decouple check-ins from the task feed** so tasking is more useful and nothing important is missed; separate RCI/due-today from a flat task list.
2. **One place for prioritization**—Inbox (and optional member feed) surfaces who to contact next; avoid forcing users to reconcile multiple systems (e.g., acuity dashboard + Inbox).
3. **Centralize context without over-cluttering**—360 view should surface opportunities, tasks, and appointments in one place, but avoid scattering goal-related tasks in a way users don’t use; keep timeline as the place for notes and loop closure.
4. **Support diverse workflows**—customization (columns, saved views, filters, “due today” vs “this week”) is necessary because “so many different ways one person [organizes] work… that’s what makes it complicated.”

**Success Metrics (from pilot/evaluation):**

- *Leading:* Clicks into RCI members / care team member / day; unique clicks into opportunities / care team member.
- *Mid-funnel:* Tasks closed / interaction; actioned gap closures / interaction; RCI attempted on time; tasks closed by due date; # non-urgent tasks completed during RCI; # non-provider roles that action on quality gaps; total action on quality / total successful connections.
- *Lagging:* Opportunities closed / interaction; % panel with successful RCI; tasks + pathway enrollments / successful connection; total completed tasks + pathway/program enrollments / total successful connections; all connection attempts per member / X business days.
- *Business:* CPAM, longitudinal engagement rate, % activated members with care plan; decrease cost per activated member; meet Quality & BOI targets; Trust & Satisfaction Score.

**Metric definitions (from Pilot Scratch Pad / Deployment Review):**
- *Total completed tasks + pathway enrollments / total successful connections:* Numerator = total completed tasks + total care pathway and program enrollments (Diabetes, Hypertension, Advanced BH, Pregnancy, other); denominator = total successful connections. Question: over what time period?
- *Connection attempts per member / business days:* Numerator = all records of connection attempts (e.g. `cbh-op-analytics-production.mrt_interactions.member_interactions`); denominator = business days.
- *Non-provider roles actioning on quality gaps:* Numerator = total team members (RNs, CHPs, Member Navigators) who have actioned on an open gap; denominator = total team members (same roles) who have had at least one “interaction attempt.” Over what time period?
- *Actioned quality gaps / successful connections:* Numerator = total actioned on quality gaps; denominator = total successful connections.
- *RCI attempted on time:* Performance against RCI minimum required attempts (1 “Successful Regular Check-In” template or 2 “Unsuccessful Regular Check-In” templates before RCI due date). Target: 100%.
- *Successful RCI connection rate:* % of members for which I am primary whose most recent RCI was successful (used “Successful Regular Check-In” template). Target: 80%.
- *Activated member with care plan:* Numerator = activated member with at least one open (not completed, archived, cancelled) goal; denominator = total activated members.
- *Archive observability:* Baseline # archived tasks by archive reason; decreased volume of overdue or deleted tasks.

5. Design Process & Solutions

**Ideation:** Sketches, workshops, brainstorming sessions with team; concept testing with care team members (OH, NY, MA) on panel view, Inbox, and unified 360 view; workgroup decisions on bundling and tasking (Requirements Review Jan 15).

**Information Architecture:** Member feed (home) for “who to contact next”; Inbox as single tool for prioritization signals (Due today, Due this week, Regular check-ins); 360 view as defragmented/unified view for prep and comprehensive interaction; loop closure via note templates and task due date shifts; Frontline Manager Visibility for performance.

**Approved MVP Requirements (Build Review Jan 30)—prioritized panel management:**
- 💻 Prioritization signals surfaced: Scheduled Visits Today (To-do section), Regular check-ins due, Tasks Due Today (urgent e.g. TOC/MIC, important e.g. self-activation/inbound comms, non-urgent aligned to next RCI). Members deduped in RCI feed.
- 💻 Prioritization in one tool: Inbox.
- 💻 Users anchor on due dates for panel prioritization.
- 💻 Stop generating tasks for regular check-ins; separate section to display RCI due today.
- 💻 Market operators can request RCI cadence by track; MA P32 leverages acuity for regular outreach; changes reflected within 1 week.
- 🚑 Managers see RCI due across team and reassign work when staff out: solved with connected sheet during pilot; future iteration in Commons.
- 🚑 Care team members have clear guidance on how to prioritize (scheduled visits, tasks due, proactive outreach): guidance via training and SOPs.

**Approved MVP Requirements—comprehensive member interactions:**
- 💻 Single Commons surface for: care plan goals and tasks, outreach campaigns, program eligibility/enrollment (CoCM, Advanced BH, Pregnancy, Pharmacy), care pathway eligibility/enrollment, quality gaps, BOI gaps.
- 💻 All signals identifiable in systems; all have clear action item(s), owners, due dates.
- 🚨 Contextual prep (problem list, last discharge, outreach history, recent campaigns) descoped due to Zus dependency.
- 🚑 Central prioritization guidance for member (what to focus on first): training and SOPs.
- 🚑 Users focus on own work and complete teammates’ action items when possible (bundling): training and SOPs.
- 🚑 Clear on what constitutes meaningful interaction; clear outreach guidance for RCI: training and SOPs.
- 💻 Members fall off RCI feed based on call attempts (analytics); way to differentiate meaningful interactions (analytics).

**Approved MVP Requirements—loop closure:**
- If user attempts RCI and is unsuccessful: (A) system counts attempt for RCI; (B) system shifts all action-items due at “next regular check-in” (by priority level) to next queued RCI due date. Prerequisite: standard pattern for outreach attempt and due date change. Rationale: automate task due date changes to reduce erroneously overdue tasks and inbox overwhelm.
- Create recurring action-items within a single container of work (e.g. HTN pathway, recurring BP task).
- Pattern to link from action-item to place in Commons where action can be taken (e.g. click link in task to open assessment).
- Reduce documentation burden and connect evidence of work (e.g. system-generated tasks programmatically completed when evidence present)—future.
- Archive reasons can be applied to all Commons tasks (e.g. member not interested, task no longer relevant).

**Key Design Decisions:**
- Member feed (home): prioritization, what to work on next; default after launch set to Inbox (not feed) so users land in one prioritization surface; /home redirect preserved for existing links.
- Inbox: one tool for Due today, Due this week, Regular check-ins; group-by-member option; reorderable columns, saved views; RCI row shows last unsuccessful outreach; show/hide on-hold RCIs; Verbal Agreement & Activation Status columns/filters so tracking lives in product.
- 360 view: member landing page, holistic view; RCI widget with due date and attempts; trigger timeline note for RCI from 360; do not duplicate full task list—users prefer tasks in context of goals/care plan; graduated programs hidden; acuity hidden by market where not used.
- Notification strategy: notification routing respects filtered tasks and current inbox tab.
- Mobile vs desktop: web primary; varying tech literacy and healthcare compliance (HIPAA) considered.

**Accessibility Considerations:** Healthcare compliance, varying tech literacy, left rail clarity (N/A → "--", copy/paste Medicaid/NMI, consent as list items, tooltip on pronouns, “Need to know” label, birthdate for safety).

**Visual Design:** High-fidelity mockups showing final solutions; WIP Design Review deck with concept-testing quotes and risks (over-clutter, customization necessity).

**Inbox Quick Hits / Backlog (from drive-files):** Remove—unused sub-inboxes. Fix—(various). Tweak—allow due date “Next regular check-in” (consequences TBD); force categorization for manually created tasks (labels or new); settings label on collapse; Filter > Due Date > tasks without due date button; tasks without due dates float to top (sort); rounded corners on Todo sub-Inbox; column choices maintained across sessions/navigation; Programs and Pathways in dedicated column and dropdowns (member table too); “Today” and “This week” as sub-Inboxes; Group by member as sub-Inbox; evaluate “Views” usage and tweak/re-train; enable workflow due dates by business days (not just calendar). New feature—assign task to entire care team. Task-specific—outreach N times / attempt tracking (1st attempt, 2nd attempt, done); Care Plan workflows “1 of 2, 2 of 10” etc.

6. Testing & Validation

**Usability Testing:**
- **Advanced Inbox pilot (pre-launch):** 23 users (6 RNCM, 10 CHP, 7 other) across MA, NY, FL, IN, OH; Inbox-specific changes enabled; feedback via Slack; 3 bugs identified and fixed.
- **Post-launch quick validation (March 2025):** 30-min gorilla-style sessions; 5–10 participants (mix IN & MA—CHPs, RNCMs, CTLs); recruiting via Pilot Group/Slack. One key scenario per feature; “What’s confusing?”, “What’s useful?”, “What’s missing?”. Quick pulse survey (3–5 questions) for broader sentiment. Timeline: Preparation March 4–6 (recruit, script, surveys); interviews March 10–14; survey March 10–14; analysis & prioritization March 17–18; presentation March 19.
- **Formal usability (post 3/19):** Planned sessions with new market users; script covered RCI (MA only), Commons Inbox update, Member 360 view, and archive-task scenario.

**User Testing Script (30 min) — key scenarios:**
- *Task 1 (RCI, MA only):* “Imagine you need to complete a Regular Check-In for a member. Where would you start?” Follow-ups: ease of tracking RCI tasks; what’s different now; is there a way to know if a task is RCI or not; useful to see due date if on hold; do they notice RCI icon; what makes RCI task different.
- *Task 2 (Inbox):* “You need to check your tasks and organize your day. What do you notice in the new Inbox?” Follow-ups: does separating RCIs from other tasks help; frustrating about layout; does separating tasks/RCIs make sense or is there nowhere to see ALL work; should RCIs hide after two attempts; is 7 days of RCIs useful or better to limit (inbox zero); Due today + 7 days vs This week (Mon–Sun).
- *Task 3 (360):* “You need to prepare for an upcoming member interaction. How would you find key information?” Follow-ups: like/dislike about new 360; harder to find; previous + next appointment value; all upcoming/overdue tasks value; would cadence (acuity/track + days) on RCI widget help.
- *Task 4 (Archive):* “A member refused to work on a task with you. What would you do next?” Follow-ups: different from before; thoughts on archive reasons; what does Archive mean.
- *Closing:* “If you could change one thing?” “Do these changes improve, are neutral to, or make harder your workflow? Scale 1–5.”

**Quick Pulse Survey (5 questions):** Q1—How satisfied or dissatisfied with new feature updates? (1–5). Q2—How easy or hard to complete tasks using new Commons Inbox? (1–5). Q3—What’s the most frustrating part? (open). Q4—Bugs or blockers? (Yes/No + describe). Q5—One thing you’d like improved or added? (open).

**Participants:** Real care team members—e.g. Sarah Kaluhiokalani (Senior CHP, MA), Jeremy Boucher (Senior CHP, MA), Jordan Washington-Freda (CHP, MA), Cheryl Newbury (RNCM, IN), Gary Hodgetts (CTL, MA), Alexa Grygorcewicz (RNCM, MA), Braylin Allen (CTL, MA), Melissa McNeil (CHP, MA), Christie Burgess (CHP, IN), Renita Swope (CTL, IN), Ron McSorley (CHP, IN), Jessica Bejian (RNCM, MA); Efrain and Jesse conducted sessions; Shoshana could connect more CTLs.

**Key Findings:**
- **What worked:** Inbox organization (tasks sorted by day/week, RCI in Commons) reduced clutter; due-today/this-week and RCI separation made it easier to organize the day; assigning tasks to “next RCI due date” and Zus in Commons were highly valued; new RCI process “tells us what to do when.”
- **What needed refinement:** Interface overload—360 widgets and RCI folder (7-day rolling view) felt overwhelming and “unhelpful,” continuous sense of incompletion; many wanted RCIs to fall off after two attempts; “on hold” RCIs in Inbox caused anxiety and eroded trust; 360 task widget disliked—users prefer tasks in context of goals; RCI icon/value unclear; many didn’t set due date to “next regular check-in” in scenarios; preference for “this week” (Mon–Sun) over rolling 7 days.

**Post-launch verbatim quotes (from user testing findings):**
- *Overwhelm on RCI Inbox folder:* “I mean, this is just like overwhelming to look at, honestly. Um, I hate it. So, and it’s not incredibly helpful for me or for anyone, I don’t think, because one, I would really love to see like when these two attempts are made that this goes away. I mean, I understand the idea is, ‘Oh, maybe you’ll try again.’ I promise you, I’m not going to try again.” (Sarah, 00:00:54). “…that’s just unnecessary for me right now. I mean, yeah, it’s important stuff, but it’s just like, you know, that could be a thing. It’s just like, whoa. Like, when I first looked at this, it took me a while to even know what I was looking at when I first started. I don’t know what – what all this is.” (Jordan, 00:31:28). “I just would like a smaller snapshot or the option to um you know focus in more on the actual work week or work you know what I mean a smaller view um instead of the bigger view but you can always have that option.” (Melissa, 00:06:46). On Due this week: “I wish it was just Monday to Friday” (Sarah, 00:18:53).
- *Reaction to changes:* “it just hasn’t helped me because I’m not a flipper and I’m not one of those people that keeps a bunch of tabs open and that kind of thing.” (Cheryl, 00:05:31).
- *360 utility:* “…now I do enjoy that they have like the next check-in date here. That’s helpful.” (Sarah, 00:05:50).
- *System trust (on-hold RCI):* “I don’t think anybody trusts that the system’s going to work because we get screwed by it. All the his attempts weren’t made or if they don’t make another attempt for this one, even though he’s on hold. I assume like we’re – I guess hoping that after March 10th passes that they’re not going to be past due, but I just don’t, I don’t trust it.” (Sarah, 00:14:34).

**Post-launch Q&A (from user testing findings):**
- *Useful to see due date if on hold?* Sort of—users appreciate more info on 360 RCI widget; but showing on-hold members in RCI Inbox was not appreciated (due date moving/overdue for work they can’t complete).
- *Notice RCI icon / valuable to denote RCI task?* Unclear; many relied on Care Plan to review tasks; all disliked 360 task widget (prefer tasks in context of goal); no user set due date to “next regular check-in” in test scenarios.
- *Separating tasks, RCIs, RCI tasks—make sense?* For some yes; for others who previously saw all work in one place, no.
- *Hide RCIs after two attempts regardless of due date?* Yes—users won’t try again after two; clutters folder; members with two attempts would grow and clutter over time.
- *7 days of RCIs useful or better limit?* Most preferred “this week” (Mon–Sun) vs rolling 7 days; one user proposed 3-day range; rolling 7 days felt like work never done.
- *Due today + 7 days vs This week (Mon–Sun)?* Users who used the view preferred limit to this week vs rolling 7 days (overwhelm, incompletion).
- *Previous + next appointment value?* Depends; for MA users, APV/HRA due or scheduled much more important than other appointment types; one of four preferred going to Appointments page.
- *All upcoming/overdue tasks on 360—value?* No—all interviewed said not providing value; they think about tasks in context of goals; one navigates conversation by goal then tasks; 360 widget felt scattered.
- *Cadence (acuity/track + days) on RCI widget?* One said would help new team members; many had cadences memorized; would not be helpful in Inbox.

**Iterations Based on Feedback:**
- Show/hide on-hold RCIs in Inbox (reduce anxiety and clutter).
- Single-select for on-hold RCIs; clearer handling of members with two attempts (addressed “fall off after two attempts” and “inbox zero” concerns in later PRs).
- Secondary sort by name in “My Tasks” when sorting by date; Verbal Agreement & Activation Status columns/filters so tracking lives in product instead of spreadsheets.
- Training and FAQs (Ways of Working) to clarify RCI templates, archiving, due dates, and credit.

**Rapid analysis framework (User Testing Plan):** Critical issues (must fix before full rollout); Quick wins (small tweaks); Feature requests (valuable but not urgent). Synthesis via Google Doc clustering themes; no full report—bullet-point insights.

**Clinical Validation:** Care team leads and managers trained (e.g. MA 2/26, IN 2/27); frontline manager visibility dashboard and performance management templates used to drive scorecard performance; pilot evaluation tied to hypotheses (e.g. “One surface that shows prioritization signals will make it easier to identify which member to engage next”).

7. Final Solution

**Core Features (walkthrough):**
- **Member feed (home):** Tab/route `member-feed` with filter `showRegularCheckIns: true`; surfaces members due for Regular Check-ins (prioritized by minimum contact cadence). Backend: `getMemberFeed`, `getMemberFeedPrimaryTasks`, `getMemberFeedDetails`, `getMemberFeedLatestCachedDate`; `RegularCheckInDueDateCache`, `RegularCheckinSLA`. RCI v1 caching job removed; RCI v2 feature flag deprecated (all markets on unified model). Post-launch default: users land in Inbox (not feed); /home redirect preserved for existing links.
- **Inbox:** Single tool for prioritization signals. Sub-inboxes: Due today, Due this week, Regular check-ins (separate section; RCI due today; members deduped). Group-by-member option (collapsible rows: member → priority, due date; expand to see tasks); reorderable columns and visibility (edit-columns modal, drag-and-drop, reset); saved views (filters, columns; soft delete). Filters: program, program status, Verbal Agreement & Activation Status (Task Inbox + Member Search); priority secondary sort. RCI row: “Last unsuccessful outreach”; show/hide on-hold RCIs; RCI duplicate fix on scroll; notification routing respects filtered tasks and current tab. Partner column; bulk task actions and “Add” label removed.
- **360 view (member landing page):** “New 360” and PatientProfileContainer (React Router v6 prep). Single surface for: care plan goals and tasks, outreach campaigns, program/care pathway eligibility and enrollment, quality gaps, BOI gaps. RCI widget: due date, number of attempts; trigger timeline note for RCI from 360 (query params open timeline and create note with RCI template prefilled). Do not show graduated programs; Interwell program in new 360; acuity hidden by market/partner/program where not used. Timeline filter: attempted vs successful calls. Left rail: N/A → "--", copy/paste Medicaid/NMI, consent as list items, tooltip on pronouns, “Need to know” label, birthdate for safety; MenuOption for actions. Member Research: refresh button, Mosaic SDK for feedback and autofill; extended to Timeline (TOC workflows) with workflow selection.
- **Loop closure:** Unsuccessful RCI attempt → system counts attempt and shifts action-items due at “next regular check-in” (by priority) to next queued RCI due date. Archive reasons on all tasks (e.g. member not interested, task no longer relevant). RCI and recurring RCI in content builder task template UI; RCI due date for task templates; recurring RCI tasks more obvious in task detail. Note templates: “Successful Regular Check-In” and “Unsuccessful Regular Check-In” used for measurement; count RCI notes via note_templates; attach note to RCI before checking template count so notes close immediately.
- **RCI behavior and rollout:** Enabled for NC, NY, FL, Ohio; all markets in `REGULAR_CHECK_IN_V2_MARKET_SLUGS`. Disengagement: do not create RCIs for disengaged members; on-hold RCIs excluded from nightly job; convert outcome of recently closed RCI for disenrolled; single-select “on hold” and show/hide in Inbox. Robustness: RCI note submission logging; RCI attribute check moved to RCI service and called from `editAttributes`; delayed/skipped RCI notes not counted against attempt total; deceased member handling (clearer logs, delete RCI, no new RCI). NC: no RCIs for difficultToReach, disengaged, optsOutOfCityblockServices.

**User Flows:**
- *Day start → who to engage:* User opens Commons (default Inbox). Reviews Due today, Due this week, Regular check-ins. Optionally uses member feed for “who to contact next” (RCI due, prioritized by cadence). Interprets prioritization signals (scheduled visits, tasks due, RCI due) with guidance from training/SOPs.
- *Prep for interaction:* User clicks into member from Inbox or feed → 360. Reviews care plan goals and tasks, RCI widget (due date, attempts), program/pathway eligibility, quality gaps, BOI; previous/next appointment. Uses Member Research (pre-call) and timeline for context. Does not rely on 360 “all tasks” widget—prefers tasks in context of goals.
- *Regular Check-in flow:* User conducts outreach; if unsuccessful, documents with “Unsuccessful Regular Check-In” template (any modality). System counts attempt and shifts tasks due at “next regular check-in” to next RCI due date. If successful, documents with “Successful Regular Check-In” template; RCI closes; member falls off RCI feed when 1 successful OR 2+ unsuccessful and due date passed. User can trigger RCI timeline note from 360 (prefilled template).
- *Archive flow:* User archives task when unable to complete (e.g. member refused); selects archive reason; task removed from active list; observability via baseline # archived by reason.

**Design System Components:** Left rail (NavSection, MenuOption, list items); Inbox (group-by-member rows, RCI inbox row, column editor, saved views); 360 (RCI widget, opportunities widget, timeline filters); task detail and edit views; archive reasons modal. Reusable patterns: data signal → task(s) in Commons → user acts → evidence/note updates task and panel.

**Interactive Prototype:** Link or embedded demo if possible (staging available early week of 2/24 for MA/IN; live 3/3).

8. Impact & Results

**Quantitative Metrics (pilot evaluation framework):**
- **Panel / prioritization:** Clicks to homepage (if zero, assume Inbox as primary); % RCI attempted on time; % tasks closed by due date; % panel with successful RCI.
- **Comprehensive interactions:** Total completed tasks + pathway enrollments / successful connection; connection attempts per member per interval; # non-urgent tasks completed during RCI; # non-provider roles actioning on quality gaps; actioned quality gaps / successful connection.
- **360 / efficiency:** Pendo—average time on 360 page; actions taken on 360; inbox and homepage use.
- **Business:** CPAM, longitudinal engagement rate, satisfaction; % activated members with care plan; opportunities closed per interaction; decrease cost per activated member; Quality & BOI targets.

*Metric definitions and baselines were set in pilot (e.g. 4-wk pre vs 4-wk post for IN and MA); leading/mid/lagging indicators defined in Deployment Review and Pilot Scratch Pad.*

**Pilot evaluation design (Deployment Review):**
- *Test market:* Indiana (with Ohio as comparison); Massachusetts (pre/post). Baseline: 4-wk average pre-pilot; follow-up: 4-wk average post-launch.
- *Hypotheses tested (examples):* “One surface that shows all prioritization signals will make it easier for a user to identify which member to engage with next” (New Inbox UI: RCI and due today subinbox). “Care team will be able to bundle non-task actions (opportunities) more easily during any outreach; care teams make fewer outreaches per member per interval” (Surface opportunities and tasks on 360). “Users will spend less time looking for contextual information to prep for calls; users will spend less time creating their own to-do lists” (360 UI updates). “Non-provider roles will action on more quality gaps; more than one quality gap per interaction” (Quality gaps surfaced as opportunities + training). “Setting expectations that leaders will audit charts will increase quality of interactions and documentation” (QA program + LCT Training Playbook). “Archive task status will better focus panels & inboxes and create observability into archive vs complete” (Archive task status).

**Qualitative Feedback:**
- *Positive (advanced pilot quotes):* “I really like this! This is so much simpler to organize tasks due!” (Kimberly Wolak, RNCM). “Looks good, I am appreciating the cleaned-up look!” (Andrew Langell, Behavioral Health Specialist). “This is great! Finally I don’t need to swim through tasks to figure out my day. Love it.” (Annett Jackson-Ricketts, RNCM). “I like the updated Inboxes in general. It looks much cleaner/neater in the settings panel… Solid update.” (Sarah Kaluhiokalani, Senior CHP). “It looks amazing so far. I think it will make tackling my tasks feel less overwhelming. I had moved away from the to-do list and started managing my tasks off the home screen. Love the to-do list separation.” (Amy Dean, RNCM). “I appreciate that I no longer have to create a ‘to do’ list for my tasks for the current day!” (Chakira Smith, CHP). “I like the look of this so far—it’s a pretty simple adjustment versus having to filter by days of the week.” (Jeremy Boucher, Senior CHP). “I love the [due-today/this week] feature! Such a simple click of a button to get today or this weeks tasks instead of filtering by date. Much appreciated time saver!” (Melissa McNeil, CHP). “[Care Plan simplification] is probably my favorite update yet!” (Sarah Kaluhiokalani).
- *Positive (Ways of Working Feedback—Good):* Being able to assign tasks to new RCI due date; Zus in Commons is AWESOME (JessBej); Inbox organization helpful—tasks sorted by day/week and RCI within Commons, less clutter (Nicole); New RCI process very organized, tells us what to do when (Vanisa).
- *Needs improvement (Ways of Working Feedback):* Members that opted out showing in RCI inbox; if staff is not primary, setting tasks to next RCI will not show up in assigned staff’s inbox (Jessica Bejian); after 2 calls completed would like member to fall off RCI list (JessBej) or green checkmark/indicator/filter (Nicole); still no place to see what DME or Home Services member is getting (JessBej); Inbox > My Tasks when sorting by date should secondary sort by name (JessBej—✅); when attaching tasks to note, easier to find tasks—more filters (JessBej); no way to see all my tasks and RCIs due in one place for clear picture of day (JessBej); archived tasks look similar to completed so confusing (JessBej); Frequently used section of template dropdown only shows 2 of 3 frequently used templates (Unsuccessful RCI, Unsuccessful non-RCI, RCI call) (JessBej); Teams page—caseload count for CHP/RNCM occasionally shows, should ALWAYS be visible (Vanisa); Cape Verdean Creole not listed in Commons Member Info (Vanisa)—✅.
- *Additional feedback (Ways of Working Feedback table):* Core Assessment—RNs don’t find helpful, CHPs do; RNs want living alone, ADLs, special needs; wording could be adjusted; “Why do you feel that way” sometimes inappropriate; Core → care plan development challenging. Track change—more work to change track; if member needs less contact may skip RCI rather than change track; “battle to get track changed”; accusation that RN requests track change to not be primary (not the case); everyone who’s diabetic = intensive feels unnecessary for all; acuity for contact frequency would help. Findhelp—info not up to date, incorrect hours; emails/texts to members not going through; need escalation process; refresher training on referral pill. If you forget RCI template and edit note later, template doesn’t “count”; need multiple templates per interaction to both count. Difficult-to-reach letters sent in IN after many unsuccessful calls then expected to continue calling. Last attempt date in RCI folder would help. Bring back accordion fields from member feed (last outreach, tasks open)—used frequently by RNs. Opportunity widget greater-than/less-than sign confusing. Slack when creating urgent task assigned to someone else. Tasking guidance to central teams—OSs escalating “urgent” that aren’t truly urgent. Many templates with similar info, variation within teams; documentation quality sometimes poor. TOC <> LCT coordination—need clarity; CHPs Slack TOC RNs 50% of time to figure out game plan. 80% successful RCI target may be impossible for BH CHPs with smaller panels. Bulk move task due dates to RCI (like bulk reassign to primary) would help. Encourage scheduling RCI to increase answer likelihood, SMS reminders. Inbox RCI folder—add Primary to row or filter by Primary for managers when staff out (requested by 3 people).

**Business Impact:** Align care teams on one model (Regular Check-ins), one surface for “who to contact next” (feed/Inbox), and loop closure (archive, RCI note templates); move markets off spreadsheets onto shared tooling; support Quality & BOI and reduce TCOC through better opportunities closed per interaction and longitudinal engagement.

**Scale:** Pilot March 2025 (IN, MA); national scale April 2025. Advanced Inbox pilot: 23 users across 5 markets; post-launch validation: 5–10 users (IN & MA). RCI enabled for NC, NY, FL, Ohio; all markets on unified RCI model post–feature flag removal. Target: ~7 Regular Check-ins due per user per day (staffing calculator and All-for-One track adjustments).

9. Reflection & Learnings

**What Worked Well:**
- Strong positive reaction to Inbox redesign (due-today/this-week, RCI separation, cleaner layout)—“overwhelmingly positive” advanced pilot feedback; quick validation plan (30-min sessions, pulse survey) surfaced actionable themes without a long report.
- **Failed fast on Group my Member:** Pilot showed it wasn’t popular; team sunset it and applied learnings to the new Inbox instead of doubling down. Kept member-centric options (e.g. group-by-member) without making them the default.
- **Data-driven sunset decisions:** Google Calendar and home to-do list were sunset based on Pendo data (users weren’t using them); member feed was replaced by RCI Inbox folder as the primary surface. Reduced surface area and cognitive load.
- Pilot structure (hypothesis → metric → pre/post) gave a clear evaluation framework; deployment review aligned stakeholders on what we’re solving and what we’re not.
- Shipping group-by-member, saved views, reorderable columns, and RCI-aware filters gave care teams flexibility to match diverse workflows.
- **PCP track (Preventive Care Physician):** Allowed the least vulnerable, healthiest members to self-serve while directing care team attention to the most needy; reduced support hiring per new market.
- Training and FAQs (Ways of Working) addressed “how do I…?” at launch and reduced reliance on ad hoc spreadsheets.

**Challenges Overcome:**
- Interface overload: users felt overwhelmed by 360 widgets and RCI folder; we iterated with show/hide on-hold RCIs, clearer RCI row behavior, and emphasis on “this week” vs rolling 7 days where possible.
- Trust: “on hold” RCIs and system glitches (e.g. attempt not counting) eroded confidence; we improved RCI note/template logic, disengagement handling, and visibility so “attempts on time” and fall-off behavior were predictable.
- 360 task widget disliked because tasks were disconnected from goals; we kept tasks in care plan context and used 360 for RCI widget, opportunities, and prep—not a duplicate task dump.

**What You'd Do Differently:**
- Launch scope: internal feedback noted “launching too much too fast”—hard to test all features, iterate from feedback, and design when many things were in flux; a more phased rollout (e.g. Inbox first, then 360, then RCI logic) could have reduced cognitive load and made cause/effect clearer.
- Relying on training for non-intuitive behavior: “We’re relying a lot on training to inform users—probably because a lot of what we’re building is not intuitive.” Earlier simplification (e.g. RCI icon meaning, “next RCI” due date) could have reduced training burden.
- “Loop closure” meant different things to different people (work primitive, team, service); earlier alignment on a narrow, measurable definition would have helped scope and communication.

**Key Takeaways:**
1. **One prioritization surface** (Inbox with Due today, Due this week, RCI folder) reduces spreadsheet-hopping and clarifies “who to contact next,” but only if the view is scannable and not overwhelming—customization (columns, views, filters) is essential. Replacing the member feed and to-do list with Inbox sub-folders removed the need for care teams to build daily to-do lists.
2. **Decoupling RCI from a flat task list** improved usefulness, but RCI-specific UX (due date, attempts, on-hold) had to be obvious and trustworthy or users disengaged or lost confidence.
3. **360 should centralize context for prep and loop closure** without duplicating the care plan task list; retiring underused widgets and adding Health Summary + Opportunities gave Cityblock a way to push initiatives (quality, programs) while keeping the page focused. Users think in goals and tasks-in-context, not a separate “all tasks” widget.
4. **Fail fast and use data:** Group my Member was sunset when the pilot showed it wasn’t popular; learnings went into the new Inbox. Google Calendar and home to-do were sunset based on Pendo. Letting go of underused surfaces reduced complexity and support burden.
5. **Pilot + quick validation** (interviews + short survey) delivered fast, prioritized insights (critical / quick wins / feature requests) without a heavy report—good fit for a fast rollout.

**Next Steps (from drive-files):**
- Formal usability with new market users post 3/19; ongoing iteration on RCI cadence, disengagement, and “fall off after two attempts.”
- Deprecate low-value surfaces (e.g. Home to-do, Google calendar) based on usage; consider IOS in member feed once unblocked; floating note, core assessment widget.
- Loop closure for opportunities (e.g. attaching evidence to tasks, goal/task templates with RCI due date); manager/supervisor view; reduce documentation burden (shorter templates, structured data).
- Ways of Working Feedback next steps: raise Core Assessment feedback to owners; make track change process easier; Shoshana to own Findhelp escalation/refresher; raise multi-template count and RCI template edit to product; incorporate difficult-to-reach letter process; add last attempt date to RCI folder (design); revisit accordion from member feed; bulk move task due dates to RCI (future); Primary column/filter in RCI Inbox for managers; TOC <> LCT coordination clarity; BH CHP 80% target consideration.

**Regular Check-In standards (from drive-files—for reference):**
- *Purpose:* Calling members at a defined cadence contributes to comprehensive case management.
- *Required activities (Successful RCI template):* Summary (member updates, new/worsening conditions, full care plan review); progress/regression on goals; review of goal pathways; action items (next-step tasks); offer ICT Team Meeting; Annual Reassessment—Due/Scheduled/Refused; CHP/RN Consultation if applicable; Next Scheduled Follow-Up (next steps, VUC education, care plan copy offer).
- *Measurement:* Successful = “Successful Regular Check-In” template used; Unsuccessful = “Unsuccessful Regular Check-In” template used.
- *Performance targets:* RCI attempts on time = 100% (1 successful or 2 unsuccessful templates before due date); Successful RCI connection rate = 80% (primary’s panel, most recent RCI successful).
- *Cadence:* NY, NC, IN, OH, FL by track (Interim Longitudinal Engagement Coding Guidelines); MA by acuity (P32H Quarterly Training). RCI surfaced in Inbox 7 calendar days before due; remain visible until 1 successful OR 2+ unsuccessful AND due date passed; then programmatically removed. Target: 7 RCIs due per user per day (staffing calculator). Launch reset: overdue RCI tasks archived at market launch; next RCI distributed across calendar (not all due launch day); MA compliance may limit flex on due dates.

10. Closing

Call to Action: Link to next project or contact info
Related Projects: (optional) Similar work


Additional Tips for Your Case Study:
Healthcare-Specific Considerations:

Handle NDA content carefully—anonymize member/patient data, get clearance for what you show
Emphasize understanding of healthcare workflows and clinical context (Regular Check-ins, care model)
Show empathy for the demanding nature of care team work
Highlight any regulatory/compliance considerations

Storytelling Approach:

Lead with impact (put results early)
Use real artifacts (photos of sticky notes, workshop sessions, actual sketches)
Keep it scannable - hiring managers spend ~60 seconds initially
Balance depth with brevity - detailed but not overwhelming
Show your thinking process, not just the finished product

Visual Best Practices:

High-quality, clear screenshots
Annotated designs explaining decisions
Real workflow examples
Before/after comparisons
Process photos showing collaborative work