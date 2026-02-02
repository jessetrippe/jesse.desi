---
layout: default
title: "Carta Public Communications"
description: "A tool for public company administrators to communicate stock-related information to thousands of stakeholders without leaving Carta."
order: 1
featured: carta-communication-mvp-1.webp
meta: [Carta, Design, 2022–2023]
---

Public companies on Carta needed to send stock-related communications to stakeholders: IPO announcements, ESPP details, required disclosures. But there was no way to do this inside Carta.

Administrators were exporting employee lists, filtering them in Excel, and sending emails through Mailchimp or Salesforce. When filtering got complex, they'd email Carta support and wait for someone to pull the right list. This created delays, errors, and a security risk: Carta had no visibility into what was being sent or to whom.

I designed a communications tool that let administrators select recipients using Carta's existing relationship data, compose messages, and send them directly from the platform. The tool launched in phases, starting with an MVP that replaced the export-filter-email workflow, then expanding to support multiple editors, role-based permissions, and recipient management.

---

## Kickoff and research

I interviewed account managers to understand the problem and researched competitor tools including Mailchimp and Carta's own Investor Updates feature.

The key question was whether to optimize for bulk selection (using Carta's relationship data to filter large groups) or individual selection (building a list one person at a time). Research pointed to bulk selection: administrators were typically sending to hundreds or thousands of stakeholders, not handpicking individuals.

I explored several approaches using Carta's pattern library and presented options to the product manager and team.

![Carta Communications Market Research 1](/images/projects/carta-communications-market-1.webp){: loading="lazy"}
![Carta Communications Market Research 2](/images/projects/carta-communications-market-2.webp){: loading="lazy"}
![Carta Communications Market Research 3](/images/projects/carta-communications-market-3.webp){: loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Design exploration

I presented multiple filtering approaches to the team along with my recommendation. The challenge was balancing power (complex filters for edge cases) with simplicity (most sends are straightforward).

![Carta Communications Filter Exploration 1](/images/projects/carta-communication-filter-1.webp){: loading="lazy"}
![Carta Communications Filter Exploration 2](/images/projects/carta-communication-filter-2.webp){: loading="lazy"}
![Carta Communications Filter Exploration 3](/images/projects/carta-communication-filter-3.webp){: loading="lazy"}
![Carta Communications Filter Exploration 4](/images/projects/carta-communication-filter-4.webp){: loading="lazy"}
![Carta Communications Filter Exploration 5](/images/projects/carta-communication-filter-5.webp){: loading="lazy"}
![Carta Communications Filter Exploration 6](/images/projects/carta-communication-filter-6.webp){: loading="lazy"}
![Carta Communications Filter Exploration 7](/images/projects/carta-communication-filter-7.webp){: loading="lazy"}
![Carta Communications Filter Exploration 8](/images/projects/carta-communication-filter-8.webp){: loading="lazy"}
{: class="gallery grid-cols-3"}

---

## MVP Design

We split the project into three phases to ship quickly and gather feedback. The MVP focused on the core workflow: select recipients, compose message, send. I designed with future features in mind (advanced filtering, resend, remove recipients, unsend) so the architecture wouldn't need to change later.

![Carta Communications MVP Solution 1](/images/projects/carta-communication-mvp-1.webp){: class="col-span-2" loading="lazy"}
![Carta Communications MVP Solution 2](/images/projects/carta-communication-mvp-2.webp){: class="col-span-2" loading="lazy"}
![Carta Communications MVP Solution 3](/images/projects/carta-communication-mvp-3.webp){: class="col-span-2" loading="lazy"}
![Carta Communications MVP Solution 4](/images/projects/carta-communication-mvp-4.webp){: class="col-span-2" loading="lazy"}
![Carta Communications MVP Solution 5](/images/projects/carta-communication-mvp-5.webp){: class="col-span-2" loading="lazy"}
![Carta Communications MVP Solution 6](/images/projects/carta-communication-mvp-6.webp){: class="col-span-2" loading="lazy"}
![Carta Communications MVP Solution 7](/images/projects/carta-communication-mvp-7.webp){: loading="lazy"}
![Carta Communications MVP Solution 8](/images/projects/carta-communication-mvp-8.webp){: loading="lazy"}
![Carta Communications MVP Solution 1](/images/projects/carta-communication-mvp-stakeholder-1.webp){: loading="lazy"}
![Carta Communications MVP Solution 2](/images/projects/carta-communication-mvp-stakeholder-2.webp){: loading="lazy"}
![Carta Communications MVP Solution 3](/images/projects/carta-communication-mvp-stakeholder-3.webp){: loading="lazy"}
{: class="gallery grid-cols-2"}

---

## Usability Study and Feedback

I ran a usability study with six customer administrators. I created a study plan and script, then scheduled 30-minute sessions. Each session included a walkthrough of the designs followed by a task completion exercise. The study validated the core workflow, identified missing features that would block adoption, and collected ideas for future features.

I consolidated findings and presented them to the team, which helped prioritize features. I also shared the results at a company-wide all-hands meeting. Based on feedback, I revised the designs and the team built the MVP.

<video controls playsinline class="my-10 w-full h-auto" loading="lazy">
	<source src="/images/projects/carta-communication-tom-feedback.mp4" type="video/mp4">
</video>

---

## Phase Two Features

Phase Two added collaboration features: multiple editors on a single communication, role-based permissions (editor vs. viewer), Carta administrator access, the ability to remove recipients after sending, and improved empty states.

## Multi-Editor Support

![Carta Communications Phase 2 Features](/images/projects/communications-phase2-multi-1.webp){: loading="lazy"}
![Carta Communications Phase 2 Features](/images/projects/communications-phase2-multi-2.webp){: loading="lazy"}
{: class="gallery grid-cols-2"}

## Viewer Role

![Carta Communications Phase 2 Features](/images/projects/communications-phase2-viewer.webp){: loading="lazy"}
{: class="gallery grid-cols-2"}

## Carta Administrator Role

![Carta Communications Phase 2 Features](/images/projects/communications-phase2-admin-1.webp){: loading="lazy"}
![Carta Communications Phase 2 Features](/images/projects/communications-phase2-admin-2.webp){: loading="lazy"}
{: class="gallery grid-cols-2"}

## Remove Recipients

![Carta Communications Phase 2 Features](/images/projects/communications-phase2-remove-1.webp){: loading="lazy"}
![Carta Communications Phase 2 Features](/images/projects/communications-phase2-remove-2.webp){: loading="lazy"}
![Carta Communications Phase 2 Features](/images/projects/communications-phase2-remove-3.webp){: loading="lazy"}
![Carta Communications Phase 2 Features](/images/projects/communications-phase2-remove-4.webp){: loading="lazy"}
{: class="gallery grid-cols-2"}

## Empty State

![Carta Communications Phase 2 Features](/images/projects/communications-phase2-empty.webp){: loading="lazy"}
{: class="gallery grid-cols-2"}
