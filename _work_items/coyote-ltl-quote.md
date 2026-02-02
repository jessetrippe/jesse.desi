---
layout: default
title: "Coyote LTL Quote"
description: "A quoting and booking tool for less-than-truckload shipments, built in 4 months to keep Coyote competitive."
order: 9
featured: ltl-1.webp
meta: [Coyote Logistics, Design, Development, Summer 2015]
---

Coyote was losing significant business because it lacked a less-than-truckload (LTL) quoting and shipping tool. I worked with a business analyst, a product manager, an overseas development team, and various stakeholders, some familiar with LTL and others brand new to it. The tool was built over 4 months within Coyote.com.

Requirements shifted throughout the project. It started as a tool for potential customers to quote shipments, then was restricted to existing customers who could quote and book LTL shipments. My role included requirements gathering, user testing, front-end development, and design.

---

## Sketches

Even with a tight three-month development timeline, walking stakeholders through paper sketches exposed the lack of shared knowledge and unified vision. It forced agreement on what would and would not be included. The quick quote for unauthorized users was eventually cut.

![LTL Quote Sketch 1](/images/projects/ltl-sketch-1.webp){: height="2000" width="1467" loading="lazy"}
![LTL Quote Sketch 2](/images/projects/ltl-sketch-2.webp){: height="2000" width="1533" loading="lazy"}
![LTL Quote Sketch 3](/images/projects/ltl-sketch-3.webp){: height="2000" width="1534" loading="lazy"}
![LTL Quote Sketch 4](/images/projects/ltl-sketch-4.webp){: height="2000" width="1539" loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Wireframes

We decided early on to use a step-form wizard. While I designed the workflow, the in-house development team implemented a third-party API to collect and present carrier quotes. Combining API findings with evolving stakeholder requirements meant constant changes to form fields.

![LTL Quote Wireframe 1](/images/projects/ltl-wf-0.webp){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 2](/images/projects/ltl-wf-1.webp){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 3](/images/projects/ltl-wf-2.webp){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 4](/images/projects/ltl-wf-3.webp){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 5](/images/projects/ltl-wf-4.webp){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 6](/images/projects/ltl-wf-5.webp){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 7](/images/projects/ltl-wf-6.webp){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 8](/images/projects/ltl-wf-7.webp){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 9](/images/projects/ltl-wf-8.webp){: height="768" width="839" loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Early Design

I built a working prototype on Bootstrap that roughly matched our app and began user testing. Initially I combined pickup and delivery details with the summary in one step, but testing proved this confusing. Each step moved to its own page.

The design also featured an early version of a timeline that had navigation issues during testing. I implemented a new design that improved on this.

![LTL Quote Early Design](/images/projects/ltl-initial-3b.webp){: height="1093" width="1200" loading="lazy"}
{: class="gallery"}

---

## Final Design

Once API requirements were resolved, the Pune team built a rough version of the wizard which I refined with animations and transitions. I ran additional user tests and found usability issues with shipping to saved addresses versus creating new ones, which we resolved.

The tool released first to beta users, then to all Coyote shippers. It's now used countless times daily.

![Coyote LTL Quote Final 1](/images/projects/ltl-1.webp){: class="border border-gray-200" height="996" width="1200" loading="lazy"}
![Coyote LTL Quote Final 2](/images/projects/ltl-2.webp){: class="border border-gray-200" height="1033" width="1200" loading="lazy"}
![Coyote LTL Quote Final 3](/images/projects/ltl-3.webp){: class="border border-gray-200" height="1033" width="1200" loading="lazy"}
![Coyote LTL Quote Final 4](/images/projects/ltl-4.webp){: class="border border-gray-200" height="1033" width="1200" loading="lazy"}
![Coyote LTL Quote Final 5](/images/projects/ltl-5.webp){: class="border border-gray-200" height="1033" width="1200" loading="lazy"}
![Coyote LTL Quote Final 6](/images/projects/ltl-6.webp){: class="border border-gray-200" height="957" width="1200" loading="lazy"}
{: class="gallery"}
