**Pilot Scratch Pad** 

**Timeline:** Pilot plan by deployment review: 2/27

**Comparison:** IN is pilot market. Pre/post vs. control? Is there another market that could serve as a good analog for IN in terms of volume, population, etc., e.g. OH?

**Comprehensive Member Interactions**   
*Problem* Care teams are engaging members through **multiple, disconnected outreach efforts** that are (1) **inefficient** at advancing progress on open opportunities (e.g., quality gaps) and (2) **less effective** at addressing members’ needs.  This results in **increased cost** to the organization and inefficient use of our members’ time  
*Success*: Outreach within and across care teams is **efficient and coordinated**. Each successful connection **resolves multiple member needs in a single interaction**, driving value for member and advancing progress on open opportunities while more efficiently utilizing care team and member time

* *Leading Indicators:*  
  * Unique Clicks into Opportunities / Care Team Member  
* *Mid-Funnel Indicators:*  
  * Tasks Closed / Interaction / Care Team Member  
  * Actioned on Gap Closures / Interaction / Care Team Member  
* *Lagging Indicators:*  
  * Opportunities Closed / Interaction / Care Team Member  
* *Topline Business KPIs*  
  * CPAM  
  * Longitudinal Engagement Rate

Care pathways specific 

* \# enrollments in care pathways (per MSP)  
* % enrolled members with medication reconciliation within 30 days  
* % enrolled members with SAP within 30 days

| Feature | Hypothesis | What level of confidence in this do we need to implement the feature/solution? | Measurement | *Metric Definitions (Huanlei add)* | HMW calculate  | Who is accountable for gathering this data for evaluation? | Next step post validation  | What will we do if hypothesis is invalidated? |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Surface opportunities and all open tasks on member 360   Ops. Enablers:  ‘25 Quality Playbook Bundling/Meaningful Interaction guidance [Frontline Manager Reporting](https://docs.google.com/spreadsheets/d/1m2vr-hLqIKA3baSN1qQfeXR803ji-MVTcYhK8WIvM8Q/edit?gid=0#gid=0) \- actions that support quality gap closure  LCT Training Playbook (Connecting with a Member Section \- TBD Name) | Care team will be able to bundle non-task actions (opportunities) more easily during any outreach Care teams make fewer outreaches per member per interval (e.g. month) because they are actioning on more opportunities per interaction  | Low – mostly regretless  | Total task \+ opportunities addressed/interaction  Total outreaches per member across care team per interval time (week, month) | 1\. **Numerator**: Total completed tasks \+ Total Care Pathway and other Program enrollments (Diabetes, Hypertension, Advanced BH, Pregnancy, other?) **Denominator**: Total Successful Connections **Question**: Over what time period? 2\. **Numerator**: All records of  connection attempts, i.e., `cbh-op-analytics-production.mrt_interactions.member_interactions` **Denominator**: Business days Question: Are we looking to measure via working days or business days? Additionally over what time period to consider? | Can we link all actions taken during a singular documented interaction, or same day for that member?  | Sameer/Huanlei | Iterate on bundling concept, including potentially providing role-level guidance  System prioritization at the member level (which opportunities should you address now, next, later)- can we use IOS to rank individual opportunities? |  |
| Quality gaps surfaced as opportunities in UI and training teams with clear outreach guidance    [Quality Gaps Care Team Scorecard](https://cityblock.looker.com/dashboards/3821?Partner=&Market=&User+Role=&User+Name=&Reporting+At+Date=1+week+ago+for+1+week): filter by user role CHP/RN | Non-provider roles (RNs, CHPs, member navigators) will action on more quality gaps  Non-provider roles (RNs, CHPs, member navigators) will action on more than one quality gap per interaction | Medium |  RNs, CHPs, member navigators that action on open quality gaps (n all vs rate)  Number of un-actioned quality gaps for LE members (decrease) \# of actioned quality gaps/interaction | 1\.  **Numerator**: Total team members (specifically those categorized as RNs, CHPs and Member Navigators) that have actioned on an open gap;  **Denominator**: Total team members (specifically categorized as RNs, CHPs and Member Navigators) that have had at least one “interaction attempt” **Question**: Over what time period? 2\. **Numerator**: Total actioned on quality gaps **Denominator**: Total Successful Connections **Question**: Over what time period? | Data exists in current boi pipeline | Sameer/Huanlei | HMW make it easier for user to understand what they are accountable for by role when closing boi/quality gaps (counseling, setting expectations, appt scheduling, uploading results, etc.)  Do users take action on non-assigned opportunities? If no, should all opportunities have more defined care team assigned action items? | Diagnosis with end users on what the barriers are Loop closure enhancements Engineering enhancements UX enhancements |
| 360 UI updates  | Users will spend less time looking for contextual information to prep for calls  Users will spend less time creating their own ‘to do’ lists  |  | Pendo–average time spent on 360 page (should go up) Pendo–inbox and homepage use Pendo–Actions taken on 360 page |  |  | Jesse (Megan backstops) | What is missing? Assessments, welcome activities? Are these tasks vs contextual information Is there more that we can remove from the 360 to streamline? Zus UI in 360 |  |
| Care pathway eligibility as an opportunity | Users will easily identify pathway eligibility and structure calls to include enrollment discussion | Low | \# enrollments in care pathways (rate?) | 1\. Number of Care Pathways Enrollments (same programs as in first metric) **Question**: If rate, what is the denominator? | Proportion of existing MSP target per RN met  | Huanlei/Sameer | Do users take action on non-assigned opportunities? If no, should all opportunities have more defined care team assigned action items? |  |
| Launch QA program in all markets (CTLs pull charts for review) Ops Enablers:   LCT Training Playbook (Performance Mgmt Section \- TBD Name) | Setting expectations that leaders will be auditing charts will increase quality of interactions and documentation | High | % activated members with a care plan | 1\. **Numerator**: Activated Member with a care plan; definition of activated member with care plan is any activated member with at least one open (not completed, archived, cancelled) goal **Denominator**: Total Activated Members **Question**: Over what time period? | Planned metric for frontline visibility dashboard | Huanlei/Sameer |  |  |
| Utilizing Commons ecosystem/tasking for LCT campaign outreach Ops Enablers:   LCT Training Playbook (Tasking Section) | Baking campaign LCT actions into tasking will increase care team adherence in conducting outreach (task is surfaced in central location, task completion is incentivized in overall performance mgmt) | Low | Total campaign outreach tasks completed Downstream business impact attributed to campaign (TBD) | **Question**: How are we defining total campaign outreach tasks? | Huanlei/Sameer Matt Slavin |  |  |  |

**Prioritized Panel Management/Loop Closure**  
*Problem*: Care teams do not have unified guidance or prompts on **which member should be engaged next in their day-to-day operations.**  Current push factors include cadenced outreach, market chase lists, signal-based proactive outreach, and follow-through on member commitments; however, these can conflict with each other and have not been integrated into unified expectations.  
*Success*: Care teams maximize their effectiveness each day by focusing **engagement efforts on the right member** based on the appropriate cadence, impactability, and need.

*Potential KPIs:* 

* *Leading Indicators:*  
  * \# Clicks into Regular Check-In Members / Care Team Member / Day  
* *Mid-Funnel Indicators:*  
  * \# of Members with “Urgent” Tasks Completed  
  * \# of “Urgent” Task Completions per Member  
* *Lagging Indicators:*  
  * \# Tasks Closed / Regular Check-In Interaction / Month  
* *Topline Business KPIs:*  
  * CPAM  
  * Longitudinal Engagement Rate  
  * Satisfaction Rate

| Feature | Hypothesis | Measurement | HMW measure | Next step post validation  |
| :---- | :---- | :---- | :---- | :---- |
| New Inbox UI: RCI and due today subinbox   | One surface that shows all prioritization signals will make it easier for a user to identify which member to engage with next  | Experience metric: VOTU data on how easy it is to identify which member to engage next  Pendo clicks to Homepage (if zero then we assume users are using the inbox surface)  SLA metric: RCIs attempted on time, tasks closed by due date ( Tasks Completed (Last Week)TBD based on operational metric for task performance)  Engagement metric: % panel with successful RCI | VOCT Metrics from frontline manager visibility dashboard |  |
| non-urgent  priority tasks bundled with RCI calls  | improve meaningful interaction without disrupting care team efficiency (Consider call times \- potential to increase as ‘more’ tasks could potentially be resolved in one RCI)  Fewer outreaches per member across care team over interval (week, month) | non-urgent tasks completed during RCI  Member experience metric (call length and call experience) Total outreaches per member across care team per interval time | New RCI data structure  | Does this make call length unreasonable? Tradeoff with more outreaches over given time period  |
| ~~IOS Score Column in Inbox (MVP IOS Release)  **ON HOLD**~~ | ~~Sorting RCI and due today by IOS score will focus care team efforts on the most *impactable* member~~ | ~~RCI/task closure for member with IOS score \> X (set threshold) Pre/post intervention  IOS score. (If user closes gaps, IOS score should decrease. ) Experience metric~~  | ~~New RCI data structure~~ | Consider new operational process to include IOS call list vs continue prioritization within existing RCI structure (I have 5 members with RCI due today \- I call based on who has a higher IOS score) How can IOS \+ cadence calls coexist?  |
| Archive task status | Giving users a way to archive tasks (removing work users cannot action on) will help us: Better focus member panels & inboxes, improving panel prioritization  Create foundational observability into what work was closed because users were unable to complete it (archive) vs. successfully completed it (complete) | Decreased volume of overdue tasks or deleted tasks (tasks won’t sit overdue, can now be archived if unable to complete for certain reasons) Baselining \# archived tasks, by archive reason | New archive task status \+ archive reasons |  |
| Non-completed RCI tasks to be shifted to the next RCI  | Improve meaningful interaction without disrupting care team efficiency  Fewer outreaches per member across care team over interval   |  |  |  |
| RCI associated tasks can be set as recurring | Feature needed for member care  |  |  |  |
| Automatically attaching evidence to tasks | Feature needed for member care |  |  |  |

Tasking:

- recurring tasks \- unlikely for MVP unless another engineer is identified, but in scope for national scale (and potentially a bit earlier)  
- evidence linking \- not going to happen for MVP, will happen for national scale

## Quotes from small pilot group (Inbox changes only)

“I really like this\! This is so much simpler to organize tasks due\!” \-Kimberly Wolak RNCM

“Looks good, I am appreciating the cleaned-up look\!” \-Andrew Langell Behavioral Health Specialist

“This is great\! Finally I don't need to swim through tasks to figure out my day. Love it.” \-Annett Jackson-Ricketts RNCM

“I like the updated Inboxes in general. It looks much cleaner/neater in the settings panel… Solid update.” \-Sarah Kaluhiokalani Senior CHP

“It looks amazing so far. I think it will make tackling my tasks feel less overwhelming. I had moved away from the to-do list and started managing my tasks off the home screen. Love the to-do list separation.” \-Amy Dean RNCM

“I appreciate that I no longer have to create a "to do" list for my tasks for the current day\!” \-Chakira Smith CHP

“I like the look of this so far \- it's a pretty simple adjustment versus having to filter by days of the week.” \-Jeremy Boucher Senior CHP

“I love the \[due-today/this week\] feature\! Such a simple click of a button to get today or this weeks tasks instead of filtering by date. Much appreciated time saver\!” \-Melissa McNeil CHP

## Questions to ask pilot users

We should think about research questions vs. our interview questions. Research questions could explicitly call out what we’re trying to learn \- i.e. “Has x feature helped you work faster?”  Interview questions will allow us to get there without leading interviewees or biasing them i.e. \- “Has anything changed in how you work? How? Why?” and it will allow us to uncover unknowns or other points of friction that are relevant. 

Comprehensive view

1.  