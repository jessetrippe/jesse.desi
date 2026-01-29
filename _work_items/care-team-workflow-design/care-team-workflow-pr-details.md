# Care Team Workflow Design — PR Details

Reference document with problem/solution and context for all PRs associated with this project. Sourced from the portfolio case study and `gh pr view` output. Run `gh pr view <number>` in the Commons repo for full PR body and comments.

---

## Main PRs (implementation summary)

*These PRs are in the primary implementation summary for the case study.*

### Inbox & member search

| # | Title | Area |
|---|--------|------|
| 26072 | [QH] Adding Verbal Agreement & Activation Status Columns/Filters (Task Inbox, Member Search) | Inbox |
| 26028 | [QH] Added Verbal Agreement... | Inbox |
| 26013 | [QH] Added Activation Status... | Inbox |
| 26102 | Return total tasks and completed... (workflow) | Inbox / workflow |
| 26163 | Updating icons, fixing Text... (columns) | Inbox columns |

**Details:**
- **26072, 26028, 26013 — Verbal Agreement & Activation Status:** Care teams were using outside sheets to track activated vs non-activated members. Shipped columns and filters for Verbal Agreement and Activation Status on Task Inbox and Member Search so this lives in product instead of spreadsheets.
- **26102 — Workflow task counts:** Workflow details showed rounding errors because the UI derived counts from a single percentage. Backend now passes total and completed task counts plus the percentage; UI uses counts for display.
- **26163 — Icons & layout:** Updated Inbox/column icons (rounded vs circle) and fixed empty state layout (e.g. Texts) so the UI felt consistent and readable.

---

### Home / member feed & Ways of Working

| # | Title | Area |
|---|--------|------|
| 25965 | [COS-624] Remove home page... | Home / member feed |
| 26159 | [PLAT-4526] Fix /home redirect | Home / member feed |

**Details:**
- **25965 (COS-624) — Default to Inbox:** As part of Ways of Working, the team turned off the redirect that sent people to the member feed. Default after login is always Inbox; change was held to EOW so users could be communicated to.
- **26159 — /home redirect:** The /home redirect had been removed in an earlier PR; added it back so existing links and expectations still work.

---

### 360 view & member page

| # | Title | Area |
|---|--------|------|
| 26098 | Jaz/cos 634 do not show graduated programs in 360 | 360 |
| 25999 | Jaz/cos 614 hide acuity | 360 / visibility |
| 26020 | Timeline filter update - attempted and successful calls | 360 / timeline |
| 25964 | Saving space on left rail | Left rail / nav |
| 25962 | Left rail menu: use MenuO... | Left rail |
| 25904 | COS-618 - fix disengaged column on member page | Member page / 360 |
| 25894 | [PLAT-4527] React Router v5 compat - patient-profile-container part 3 | 360 |

**Details:**
- **26098 (COS-634) — Graduated programs:** Bad data in `patient_program_status_v2` made some programs appear active after members had graduated. Cleaned up records so the 360 only shows current program status.
- **25999 (COS-614) — Hide acuity by market:** Acuity in Health Summary was always on; some markets don't use it. Acuity section is now hidden when market/partner/program aren't in the allowed set (e.g. NC, MA, IN and specific partners/programs).
- **26020 (PBL-123) — Timeline: successful vs attempted calls:** Care teams needed to filter timeline calls by status. Added filter for successful vs attempted calls so they can quickly see successful connections and outreach attempts.
- **25964, 25962 — Left rail & member info:** Saved space and improved clarity on the left rail: N/A → "--", copy/paste for Medicaid/NMI, consent as list items, tooltip on gender pronouns, "Need to know" label, birthdate under name for safety. Refactored actions menu to use `MenuOption` instead of `ListItem`.
- **25904 (COS-618) — Disengaged column:** Adding the disengaged column broke the member page; fixed typing so the column works on the member page.
- **25894 — React Router compat:** Patient profile (360) migrated to react-router-dom-v5-compat as part of the React Router v6 migration (routes, Navigate, useParams, etc.).

---

### RCI ↔ 360

| # | Title | Area |
|---|--------|------|
| 26029 | Trigger timeline note for rcis from 360 | RCI ↔ 360 |

**Details:**
- **26029 (COS-611) — Trigger RCI note from 360:** Care teams needed to start an RCI note from the 360. Implemented query params that open the timeline and create a new note with the RCI template prefilled, so the loop from "member due for RCI" to "document check-in on 360" is seamless.

---

### Regular Check-ins (RCI) — behavior & rollout

| # | Title | Area |
|---|--------|------|
| 25831 | Adding North Carolina to the RCI market slugs | RCI + NC |
| 25859 | COS-593 - Make sure NC patients do not get RCIs depending on attribute | RCI + NC |
| 25996 | [COS-630] Reduce RCI error logging and prevent RCI creation for disengaged members | RCI |
| 25995 | [COS-627] Refactor updateRegularCheckInOnNoteSubmission... | RCI |
| 25862 | added functionality to convert outcome of recently closed RCI for disenrolled | RCI |
| 25968 | [COS-629] Move RCI attribute check | RCI |
| 25838 | Jaz/change count regular check in notes to join note templates | RCI |
| 26088 | [COS-608] Remove RCIv1 caching job | RCI |

**Details:**
- **25831, 25859 (COS-593) — NC market:** Enabled RCI for NC (e.g. market slugs for 5/8 launch). Daily job no longer creates RCIs for NC members who are difficultToReach, disengaged, or optsOutOfCityblockServices.
- **25996 (COS-630) — Disengaged members:** RCI service errors were too noisy and we might have been creating RCIs for disengaged members. Stopped creating RCIs for activated disengaged members and downgraded the common expected "error" to a log so monitoring is accurate.
- **25995 (COS-627); 25862 (COS-585) — Note submission & lifecycle:** Refactored `updateRegularCheckInOnNoteSubmission`: attach note to RCI before checking template count so notes close out immediately instead of waiting for the nightly job; added smaller helpers and transaction support. When users publish a successful RCI note retroactively (event time before previous unsuccessful completion), outcome now flips from unsuccessful to successful.
- **25968 (COS-629) — RCI attribute checks:** RCI logic lived in `PatientInfoService.edit` but many callers use `editAttributes`, so checks were skipped. Centralized logic in `handleRegularCheckInOnPatientAttributeEdit` in the RCI service and call it from `editAttributes` so attribute changes (e.g. disengaged, opts out) always update RCI correctly.
- **25838 — Count RCI notes:** `countRegularCheckInNotes` hadn't been updated for the `note_templates` table. Moved the function to the note_templates module and updated the query and all references.
- **26088 (COS-608) — Remove RCIv1 caching job:** RCI due date caching moved to a different system. Removed the deprecated `cache-regular-check-in-due-date` job, Terraform, and member-feed references.

---

### RCI — task templates & UI

| # | Title | Area |
|---|--------|------|
| 26122 | Adding RCI and recurring RCI to content builder task template UI | RCI |
| 25994 | Make recurring RCI tasks more obvious in the UI | RCI |
| 25952 | enable rci due date for task templates | RCI |

**Details:**
- **26122 (COS-601) — RCI and recurring RCI in task templates:** Backend already supported RCI on task templates but there was no UI. Added UI for associating Regular Check-in and recurring (repeating) tasks in task templates and goal templates, plus backend for repeating tasks tied to RCIs.
- **25994 (COS-615) — Recurring RCI in task detail:** Users couldn't tell recurring vs one-off RCI tasks. Added a description in the task detail view so recurring RCI tasks are clearly indicated.
- **25952 (COS-628) — RCI due date on workflow tasks:** New boolean on task template; when starting a workflow we find the RCI and set the task due date to the RCI due date so workflow tasks align with Regular Check-ins.

---

### Member Research (360 / pre-call)

| # | Title | Area |
|---|--------|------|
| 26207 | Add Refresh Button on Member Research | Member Research (360/pre-call) |
| 25980 | Use Mosaic SDK for Member Research | Member Research |
| 25931 | Standardize Member Research | Member Research |

**Details:**
- **26207 (AIT-974) — Refresh:** Pre-called member research was cached with no way to refresh. Added a refresh button so users can get updated research.
- **25980 (AIT-884) — Mosaic SDK & feedback:** No way to leave feedback on member research. Added thumbs up/down and comments to the Member Research widget and wired it to Mosaic when the FF is on; fixed a bug where thumbs selection cleared after submitting a comment.
- **25931 (AIT-828) — Standardize UI & workflow selection:** Pre-call member research lived only on the Outreach page (for OSes). Extended it to the Timeline (for TOC workflows) and added workflow selection—defaulting to OS on Outreach and TOC on Timeline—so both workflows get the right data.

---

### 360 / notes tooling

| # | Title | Area |
|---|--------|------|
| 25886 | Use Mosaic SDK for Autofill Note Template | 360 / notes |

**Details:**
- **25886 (AIT-902) — Mosaic SDK for autofill:** No backend path for the new Mosaic SDK. Added a feature flag, Mosaic client service, and a path that uses the SDK when the flag is on for autofill note template.

---

### Inbox / tasks (main table)

| # | Title | Area |
|---|--------|------|
| 25959 | Adding isStarredAssignee (assign task) | Inbox / tasks |

**Details:**
- **25959 — isStarredAssignee:** Added assignee/starred assignee support for task assignment in Inbox.

---

## Additional PRs (full list with details from `gh pr view`)

*These PRs were in the extended list; details below are from the `gh pr view` paste.*

### IPLC / launch

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26445 | COS-537 - Remove IPLC feature flag, references | COS-537 | IPLC / WoW |

**Problem:** IPLC launch had been successful with the feature flag having widespread adoption. No longer needed to gate the feature.

**Solution:** Removed the FF and all references/logic. Removed a lot of unused code as a result.

**Tested:** Locally, existing tests.

---

### RCI / Regular Check-ins

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26739 | Fix task templates for two workflows | — | RCI / workflow |
| 26738 | RCI cadence migration | — | RCI |
| 26635 | Sh fix rci date test | — | RCI |
| 26598 | added a new single select for on hold rcis | — | Inbox / RCI |
| 26551 | PC program RCI cadence nits | COS-664 | RCI |
| 26526 | COS-664 - Update RCI cadence logic for preventive care members | COS-664 | RCI |
| 26491 | RCI Quick Actions: Updated conditional for acuity-checkin template only tufts | COS-694 | RCI |
| 26319 | Clearer Logs for Deceased Member RCIs | — | RCI |
| 26255 | Deleting RCI for deceased members and no longer create a new RCI | COS-652 | RCI |
| 26240 | added functionality to show or hide on hold rcis in the inbox | COS-384 | Inbox / RCI |

**26739 — Fix task templates for two workflows**  
- **Problem:** Initial task templates were forgotten for two of the open gap workflows.  
- **Solution:** Added the missing task templates. Context: Slack thread, spreadsheet (links in PR).  
- **Reviewer:** “LGTM”; Datadog: 2 test services passed.

**26738 — RCI cadence migration**  
- **Problem:** New migrations were hitting constraints that no longer reflected reality.  
- **Solution:** Updated the constraints.

**26635 — Sh fix rci date test**  
- **Problem:** RCI test needed to use Jest date-mocking correctly.  
- **Solution:** Updated RCI test to use Jest date-mocking functions. Context: Slack.  
- **Note:** 11/80 checks failing at merge time (likely flaky).

**26598 — Single select for on-hold RCIs**  
- **Problem:** In Inbox → Regular check-in, the option “TOC program in progress” didn’t work; when selected, on-hold TOC members were not displayed.  
- **Solution:** Replaced the eye icon/button with a new single-select menu: Include on-hold, Hide on-hold, Only on-hold TOC, Only on-hold disenrolling. Design from @jessetrippe.  
- **Reviewer:** “Much nicer than the eyeball. Great work Jasmine!”  
- **Tested:** Manually.

**26551 — PC program RCI cadence nits**  
- **Problem:** Nits from a previous review (COS-664).  
- **Solution:** Addressed the nits.

**26526 — COS-664 - Update RCI cadence logic for preventive care members**  
- **Problem:** Need a new variable for determining RCI cadence: `isPatientEnrolledInPreventiveCareProgram` (boolean).  
- **Solution:** Added the variable.  
- **Tested:** Unit test added.

**26491 — RCI Quick Actions: acuity-checkin template only Tufts (COS-694)**  
- **Problem:** For the RCI widget quick actions on the 360 page, acuity-checkin was available for all members but should only be used for P32. Also, the trigger did not work the first time when selecting a template.  
- **Solution:** Added a condition so this menu option only appears for Tufts partner. Do not load the note editor component until templates are loaded.  
- **Tested:** (Not specified in paste.)

**26319 — Clearer Logs for Deceased Member RCIs**  
- **Problem:** A log message said we “deleted a Regular Check-In” for a member even when that member didn’t have one to delete.  
- **Solution:** The message now only appears when an RCI is actually found and removed.

**26255 — Deleting RCI for deceased members, no new RCI (COS-652)**  
- **Problem:** When a member was marked deceased, the system kept generating and displaying RCIs. Care teams could be prompted to reach out to deceased members, and RCI reports were inaccurate.  
- **Solution:** When a member’s status is updated to deceased, any active RCIs for that member are automatically soft-deleted. Deceased members are removed from RCI lists and no longer affect care team metrics.  
- **Tested:** Added tests.

**26240 — Show or hide on-hold RCIs in Inbox (COS-384)**  
- **Problem:** End users did not want to see on-hold RCIs by default in the member feed Inbox.  
- **Solution:** Added a visible/visible-off icon button that uses local storage to persist whether to show or hide on-hold RCIs.  
- **Tested:** Manual.

---

### Inbox / tasking

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26578 | Initial fix for sticky columns | — | Inbox |
| 26509 | Fixing the imports in server side and move some of the shared functions to the shared file | COS-682 | member-feed / server |
| 26328 | Fix Assigned To filter for pods | — | Inbox |
| 26385 | Adding VA back for non-Activated members | — | Inbox / member |
| 26278 | COS-657 fast follows | COS-657 | Inbox (edit columns) |
| 26254 | Moving the Update button to the rightContent of the ListItem | — | Left rail / UI |
| 26126 | Assigned to filter reenabled with constraints | — | Inbox |

**26578 — Initial fix for sticky columns (jessetrippe)**  
- **Problem:** (Generic in PR — sticky columns in Inbox.)  
- **Solution:** Initial fix for sticky columns.  
- **Labels:** user-facing-changes.

**26509 — Server imports + shared functions (COS-682)**  
- **Problem:** Commons/server was incorrectly importing from commons/app, creating tight coupling and violating intended architectural layering.  
- **Solution:** Moved `formatUserRole` and `formatPatientRelation` to shared; moved `getNumericDateByTimeZone`, `getNumericDateByTimeZoneDashes`, `getNumericShortDateByTimeZone`, `getTimeRangeWithTimeZone` to new shared calendar-helpers; moved `formatPhoneNumber` (as `formatPhoneNumberHyphenated`), `removePhoneNumberFormat`, `isValidPhoneNumber` to shared; updated all import paths so server no longer pulls code from app.  
- **Labels:** user-facing-changes.

**26328 — Fix Assigned To filter for pods**  
- **Problem:** Users in pods could not select themselves in the Assigned To filter.  
- **Solution:** Use the presence of disabled filters (which pods don’t have) to change the behavior of the `assignedTo` onChange so pod users can select themselves.  
- **Tested:** Screen recordings in PR.

**26385 — Adding VA back for non-Activated members**  
- **Problem:** Users said they still use Verbal Agreement in many cases and need to see it on the left rail.  
- **Solution:** Added VA back only for Not Activated members. Reduces noise on the left rail while keeping current workflows for OSs.  
- **Labels:** user-facing-changes.

**26278 — COS-657 fast follows (edit columns)**  
- **Problem:** (1) Edit-columns modal was janky — had an Apply button but changes applied on drag/drop or toggle. (2) Code was confusing with sorting/toggling useEffects.  
- **Solution:** (1) Replaced Apply with a Close button and added a toast when changes are applied. (2) Combined two similar useEffects that had duplicate logic and touched the same state.  
- **Tested:** Locally, existing tests.  
- **Follow-up to:** PR 26032.

**26254 — Update button to rightContent of ListItem**  
- **Problem:** (Design/UX — button placement.)  
- **Solution:** Moved the Update button next to the RCI date / on-hold status tag.  
- **Author note:** “I wanted the update button to live next to the RCI date / on hold status tag.”

**26126 — Assigned to filter reenabled with constraints**  
- **Problem:** Users wanted to select assignees beyond “assigned by me.”  
- **Solution:** Use default filtering so the default is still the current user, but allow selecting other assignees without requiring the assignedByMe filter. Throw an error when no assignee is selected.  
- **Tested:** Screen recording in PR.

---

### LTR / SURF (scores, timeline, Inbox)

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26722 | SURF-507: Backfill LTR Scores | SURF-507 | LTR / Inbox |
| 26654 | SURF-500: Add hasHistoryOfAcscVisits and hasHistoryOfBhVisits To EOC timeline events | SURF-500 | 360 / timeline |
| 26507 | SURF-445: Add hasHistoryOfAcscVisits, hasHistoryOfBhVisits and hasLtrScoreAboveThreshold To BRT | SURF-445 | timeline / BRT |
| 26489 | SURF-444: Add LTR Score To Timeline Events | SURF-444 | 360 / timeline |
| 26466 | SURF-443: Add LTR Score to Inbox and Patient Panel | SURF-443 | Inbox |

**26722 — SURF-507: Backfill LTR Scores**  
- **Problem:** LTR scores existed but were not being surfaced in Commons.  
- **Solution:** Created a script to backfill them.  
- **Reviewer:** “LGTM. lots of good logging 👍”

**26654 — SURF-500: hasHistoryOfAcscVisits, hasHistoryOfBhVisits on EOC timeline events**  
- **Problem:** Need to see what is set for `hasHistoryOfAcscVisits` and `hasHistoryOfBhVisits` when the LTR score is ingested.  
- **Solution:** Added these fields to the timeline event.  
- **Tested:** Unit test.  
- **Labels:** user-facing-changes.

**26507 — SURF-445: Add flags to BRT**  
- **Problem:** Need to use columns in the DP `toc_workflow_trigger` table to determine whether TOC workflows should be triggered.  
- **Solution:** Added `hasHistoryOfAcscVisits`, `hasHistoryOfBhVisits`, and `hasLtrScoreAboveThreshold` to the BR conditions list.

**26489 — SURF-444: Add LTR Score To Timeline Events**  
- **Problem:** The LTR score is added to an episodeOfCare’s timelineEventObject when a score is ingested, but the score was not available in the UI.  
- **Solution:** Add the LTR score to the timeline event UI.  
- **Tested:** Unit tests.  
- **Labels:** user-facing-changes.

**26466 — SURF-443: Add LTR Score to Inbox and Patient Panel**  
- **Problem:** We had access to the LTR score but were not displaying it.  
- **Solution:** Add LTR Score to Inbox and patient panels; users in the `ltrScore` user group can view and sort by it.  
- **Tested:** Personal staging; users need LTR Score user group.  
- **Labels:** user-facing-changes.

---

### 360 / patient profile / left rail

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26503 | [SURF-475-A] Create TOC tab FF | SURF-475 | 360 / TOC |
| 26433 | [PLAT-4527] React Router v5 compat - patient-profile-container part 4 | PLAT-4527 | 360 |
| 26416 | [PLAT-4176] Remove FormattedMessage - patient-profile-container | PLAT-4176 | 360 |
| 26404 | [PLAT-4744] fix care plan & assessment sub nav | PLAT-4744 | 360 |
| 26343 | Large refactor to implement new editor behavior | — | Care plan / 360 |
| 26344 | Switching template tags to template title instead of slug | COS-679 | Task template |
| 26296 | [COS-659] Designate some quality measure actions as clinical only | COS-659 | 360 / quality |
| 26291 | Removing ListItem link | — | Left rail |
| 26290 | Add CKD to Health Summary Widget V2 | COS-575 | 360 |
| 26204 | Member panel care pathways and programs filter performance updates | COS-637 | Member panel / 360 |
| 26203 | TOC events deep link to the "Encounters and Notes" section in the embedded ZAP | CS-3780 | 360 / TOC |
| 26164 | Adding Guardian and HIE consent to left rail | — | Left rail |

**26503 — [SURF-475-A] Create TOC tab FF**  
- **Problem:** Need a feature flag for new TOC page work.  
- **Solution:** Created FF `patientTocTab`.

**26433 — React Router v5 compat, patient-profile-container part 4 (PLAT-4527)**  
- **Problem:** Part of React Router v6 migration; need to migrate patient-profile-container from `react-router-dom` to `react-router-dom-v5-compat`.  
- **Solution:** Migrated usages; RR v5 compat allows incremental migration while keeping v5 in place. Changes: removed `<Switch>`; descendant routes are now relative (e.g. `<Route path="path" />`).  
- **Related:** #25871, #25879, #25894.  
- **Tested:** E2E tests.  
- **Labels:** user-facing-changes.

**26416 — Remove FormattedMessage, patient-profile-container (PLAT-4176)**  
- **Problem:** `<FormattedMessage>` allows type-unsafe values for `id` (typos not caught). Should be replaced with `<Text>`.  
- **Solution:** Replaced several uses of FormattedMessage with Text in patient-profile-container.  
- **Related:** #26326.  
- **Labels:** user-facing-changes.

**26404 — [PLAT-4744] fix care plan & assessment sub nav**  
- **Problem:** Sub navs in Care Plan and Assessments were not rendering.  
- **Solution:** Fixed the `subNav` prop for Care Plan and Assessments. Root cause: in patient profile, subNavs were set as functions that return React components (e.g. `subNav: () => <AssessmentsSubNav />`). NavItem expects `ReactNode`; a function passed typecheck but React threw when rendering. Fix: set props to the ReactNode, e.g. `subNav: <AssessmentsSubNav />`.  
- **Tested:** Locally.  
- **Labels:** user-facing-changes.

**26343 — Large refactor to implement new editor behavior**  
- **Problem:** (1) Adding a note template to the note editor always created empty space at the top. (2) Too much whitespace, especially around the new divider. (3) “Select a note template” placeholder was misleading (user is adding a template). (4) User feedback: template titles were distracting and had to be deleted every time.  
- **Solution:** Only add separator when the note editor already has content; add the separator at the top of the template content. Refactor to address template title/UX feedback.  
- **Labels:** user-facing-changes.

**26344 — COS-679: Template tags — title instead of slug**  
- **Problem:** Template tags were showing slug names.  
- **Solution:** Use template title instead of slug.  
- **Tested:** Before/after in PR.  
- **Labels:** user-facing-changes.

**26296 — COS-659: Designate some quality measure actions as clinical only**  
- **Problem:** Some non-clinical staff were closing quality gaps that should only be closed by clinical staff, causing compliance issues. List in spreadsheet.  
- **Solution:** Hard-coded list of quality measure actions that are clinical-only. Prepended “Clinical Only: ” to the description of each. Future: could hide or disable these for non-clinical users.  
- **Tested:** Looked at existing quality measures locally.  
- **Labels:** user-facing-changes.

**26291 — Removing ListItem link**  
- **Problem:** Accidentally added an HREF to ListItem; intent was to keep the action only on the rightContent button.  
- **Solution:** Removed the ListItem link.  
- **Labels:** user-facing-changes.

**26290 — Add CKD to Health Summary Widget V2 (COS-575)**  
- **Problem:** CKD Interwell signal was inconsistent: no entry in patient program status; multiple member signals with ambiguous sub-statuses; shown as an opportunity but is informational, not actionable.  
- **Solution:** Always exclude CKD Interwell from general MemberSignalConfigOptions. Show CKD Interwell only in Health Summary V2 “Programs” section, styled like other programs (Eligible, Declined, Enrolled). Removed CKD from other program lists and opportunity sections. Goal: present CKD as informational program status, not actionable opportunity.  
- **Labels:** user-facing-changes.

**26204 — COS-637: Member panel care pathways and programs filter performance**  
- **Problem:** Programs and pathways filter on the member page was very slow because it made n queries per number of patients.  
- **Solution:** Use the count of patient IDs in the programs to filter patient IDs instead of n queries.  
- **Tested:** TBD (reviewer noted tricky to test locally; staging/production testing recommended).  
- **Labels:** user-facing-changes.

**26203 — CS-3780: TOC events deep link to Encounters and Notes in embedded ZAP**  
- **Problem:** Zus enabled deep linking in the embedded ZAP. We don’t have a good path from Episode of Care to the encounter lens resource shown in the UI, but we can deep link to the “Encounters & Notes” section so encounters are upfront and the full list is visible (avoids TOC staff thinking the encounter is missing when it’s not in the short overview list).  
- **Solution:** (1) Zus page accepts query params to set the path passed into the embedded ZAP. (2) EOC timeline events use the query param to navigate to the encounters page.  
- **Tested:** Locally; screen recording in PR.  
- **Labels:** user-facing-changes.

**26164 — Adding Guardian and HIE consent to left rail**  
- **Problem:** Partner was lowercase; HIE consent was missing when absent; needed to hide Risk category, Verbal agreement, Written consent when value is YES or action not required; add guardian to left rail; add copy to clipboard for birthdate in Actions; tweak Member Activation modal text.  
- **Solution:** Addressed all of the above. Before/after in PR.  
- **Labels:** user-facing-changes.

---

### Member Research / autofill / Zus

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26500 | Update Member Research Zus Queries | — | Member Research |
| 26341 | Update Autofill Notes via Mosaic to Include Newer Inputs | ENG-84 | Member Research / 360 |
| 26340 | add gender pronouns to autofill prompt | — | 360 / autofill |
| 26295 | Refactor Member Research | AIT-931 | Member Research |

**26500 — Update Member Research Zus Queries**  
- **Problem:** Zus queries were still throwing errors, likely due to fragment usage.  
- **Solution:** Removed fragment usage.  
- **Tested:** Postman.

**26341 — ENG-84: Update Autofill Notes via Mosaic to Include Newer Inputs**  
- **Problem:** Autofill notes were not including all new inputs in the Mosaic run.  
- **Solution:** Updated the inputs passed to (and expected from) Mosaic. Both old and new versions work until cleanup after release.  
- **Tested:** Frontend runs.

**26340 — add gender pronouns to autofill prompt**  
- **Problem:** Care team reported the autofill notes tool was not using the correct gender pronouns for a member.  
- **Solution:** (PR body said “member's insurance information” but ticket/context was pronouns.) Add the relevant member info (e.g. gender pronouns) to the patient model passed into the autofill prompt.

**26295 — AIT-931: Refactor Member Research**  
- **Problem:** (1) TOC and OS workflows both used Zus Encounters for patient data; for TOC, Episodes of Care are more accurate (EOC = hospital/emergency, Encounters = broader visits). (2) Encounters and EOC only provided limited condition info.  
- **Solution:** (1) Refactored TOC data retrieval to use Episodes of Care; OS still uses Encounters. (2) Retrieve condition references from diagnosis fields of Encounters and EOC, then enrich with a separate call for full condition details. (3) General refactor to support adding more workflows and Zus queries.  
- **Tested:** Front-end click-through with stubbed Zus data.

---

### Timeline / notes

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26309 | [PLAT-4688] Timeline load more button | PLAT-4688 | 360 / timeline |
| 26301 | [PLAT-4688] Timeline: hide Note Draft spinner | PLAT-4688 | 360 / timeline |

**26309 — PLAT-4688: Timeline load more button**  
- **Problem:** Timeline infinite scroll prefill was loading 2 pages simultaneously.  
- **Solution:** Disabled prefill for Timeline infinite scroll. Added a “Load more” button so the user must click to fetch the next page when content isn’t tall enough to trigger a scrollbar.  
- **Tested:** Screen recording in PR.  
- **Labels:** user-facing-changes.

**26301 — PLAT-4688: Timeline: hide Note Draft spinner**  
- **Problem:** Showing/revealing the Spinner was throwing off infinite scroll measurements (introduced in PR 26029).  
- **Solution:** (1) Do not render Spinner when note drafts are not open (same pattern as `isNoteDraftPublishing`, `isNoteDraftEditing`). (2) Include `threshold` in the infinite scroll prefill measurement calculation.  
- **Tested:** Before/after screen recordings in PR.  
- **Labels:** user-facing-changes.

---

### Left nav / platform

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26497 | Adding NavSection property to expand when items inside are active | — | Left nav |
| 26682 | [PLAT-4176] Remove FormattedMessage - Member left nav & team | PLAT-4176 | Left nav |

**26497 — NavSection property to expand when items inside are active**  
- **Problem:** (1) When navigating to a page via URL and the NavSection is collapsible, the page the user is on was not visible. (2) When navigating admin → panel-dashboard → hub, the panel-dashboard nav item was not highlighted. (3) A few unrelated string updates.  
- **Solution:** Added a NavSection property so the section expands when a child item is active. Fixed highlighting; applied string updates.  
- **Labels:** user-facing-changes.

**26682 — PLAT-4176: Remove FormattedMessage - Member left nav & team**  
- **Problem:** Same as 26416 — FormattedMessage allows type-unsafe `id`; should use `<Text>`.  
- **Solution:** Replaced several FormattedMessage usages with Text in member left nav and team page.  
- **Previous PRs:** #26326, #26416.  
- **Tested:** Email, phone, address, fax (examples in PR).  
- **Labels:** user-facing-changes.

---

### Other

| # | Title | Ticket | Area |
|---|--------|--------|------|
| 26330 | [CS-3809] Diagnosis opportunities "Previously documented conditions" evidence section - Mock data, behind FF | CS-3809 | 360 |

**26330 — CS-3809: Diagnosis opportunities “Previously documented conditions”**  
- **Problem:** Need a new diagnosis opportunities evidence section for “Previously documented conditions” from Zus data.  
- **Solution:** Server: added `previouslyDocumentedConditions` feature flag; added `PreviouslyDocumentedConditionEvidence` GQL type; added `previouslyDocumentedConditionsEvidence` to `FullDiagnosisOpportunity`. App: added field to diagnosis opportunities queries; added “Previously documented conditions” section to `DiagnosisOpportunityEvidenceSection` (behind FF). Component is used in Commons CDI, provider opportunities, and Companion A&P and Sidecar widgets.  
- **Design:** Figma link in PR.  
- **Tested:** Screen recording in PR.  
- **Labels:** user-facing-changes.

---

## Quick reference: all PR numbers

**Main (implementation summary):**  
25831, 25838, 25859, 25862, 25886, 25894, 25904, 25931, 25952, 25959, 25962, 25964, 25965, 25968, 25980, 25994, 25995, 25996, 25999, 26013, 26020, 26028, 26029, 26072, 26088, 26098, 26102, 26122, 26159, 26163, 26207

**Additional:**  
26126, 26164, 26203, 26204, 26240, 26254, 26255, 26278, 26290, 26291, 26295, 26296, 26301, 26309, 26319, 26328, 26330, 26340, 26341, 26343, 26344, 26385, 26404, 26416, 26433, 26445, 26466, 26489, 26491, 26497, 26500, 26503, 26507, 26509, 26526, 26551, 26578, 26598, 26635, 26654, 26682, 26722, 26738, 26739

**Fetch all additional PRs (Commons repo):**
```bash
for n in 26739 26738 26722 26654 26635 26598 26578 26551 26526 26509 26507 26503 26500 26497 26491 26489 26466 26445 26433 26416 26404 26385 26344 26343 26341 26340 26330 26328 26319 26309 26301 26296 26295 26291 26290 26278 26255 26254 26240 26204 26203 26164 26126 26682; do echo "--- PR #$n ---"; gh pr view $n; echo; done
```
