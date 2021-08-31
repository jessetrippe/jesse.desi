---
layout: default
title: "Coyote LTL Quote"
description: "A less than truckload (LTL) quoting and shipping tool so Coyote Logistics could remain competitive in the market."
order: 7
featured: ltl-1.png
meta: [Coyote Logistics, Design, Development, Summer 2015]
---

Coyote was losing significant business because it lacked a less than truckload (LTL) quoting and shipping tool. I worked with a Business Analyst, a Product Manager, an overseas development team, and various stakeholders&mdash;some familiar and others brand new to the world of LTL. The tool was built over the course of 4 months within Coyote.com, Coyote's web app for shippers and carriers.

The requirements shifted often, first as a tool for potential customers to quote shipments, and later restricted to customers already partnered with Coyote to quote and book LTL shipments. My role included requirements gathering, user testing, front-end development, and design.

---

## Sketches

Even though the business had a tight timeline of three months for development, walking stakeholders through paper and pen sketches exposed the lack of shared knowledge and unified vision for this tool. It forced the stakeholders to come to an agreement on what would and would not be included. Eventually, the quick quote for unauthorized users was cut from this project.

![LTL Quote Sketch 1](/images/projects/ltl-sketch-1.jpg){: height="2000" width="1467" loading="lazy"}
![LTL Quote Sketch 2](/images/projects/ltl-sketch-2.jpg){: height="2000" width="1533" loading="lazy"}
![LTL Quote Sketch 3](/images/projects/ltl-sketch-3.jpg){: height="2000" width="1534" loading="lazy"}
![LTL Quote Sketch 4](/images/projects/ltl-sketch-4.jpg){: height="2000" width="1539" loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Wireframes

Early on we decided on a step form wizard. While I was designing workflow for this, our in-house development team started work on implementing a 3rd party API to collect and present carrier quotes. Combining the team's API findings and the stakeholders' evolving requirements based on mockup discussion and feedback meant much time was spent adding, moving, and removing fields from our form.

![LTL Quote Wireframe 1](/images/projects/ltl-wf-0.png){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 2](/images/projects/ltl-wf-1.png){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 3](/images/projects/ltl-wf-2.png){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 4](/images/projects/ltl-wf-3.png){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 5](/images/projects/ltl-wf-4.png){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 6](/images/projects/ltl-wf-5.png){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 7](/images/projects/ltl-wf-6.png){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 8](/images/projects/ltl-wf-7.png){: height="768" width="839" loading="lazy"}
![LTL Quote Wireframe 9](/images/projects/ltl-wf-8.png){: height="768" width="839" loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Early Design

I built a working prototype on Bootstrap that roughly matched our app and began user testing various form designs. Initially, I designed a step that combined pickup and delivery details with the summary but user testing proved this to be quite confusing so each step was moved to its own page.

This design also featured an unrefined version of the timeline that had navigation issue during user testing so a new design was implemented that improved on this slightly.

![LTL Quote Early Design](/images/projects/ltl-initial-3b.png){: height="1093" width="1200" loading="lazy"}
{: class="gallery"}

---

## Final Design

Once the API requirements had been resolved, the Pune team built out a rough version of the step form wizard which I later refined and added animations and transitions to. I also ran a few user tests and revealed usability issues regarding shipping to an already saved address verse creating a new one which was worked out.

The tool was released first to a limited set of beta users and later to all of Coyote's shippers. It's now being used countless times daily.

![Coyote LTL Quote Final 1](/images/projects/ltl-1.png){: class="border border-gray-200" height="996" width="1200" loading="lazy"}
![Coyote LTL Quote Final 2](/images/projects/ltl-2.png){: class="border border-gray-200" height="1033" width="1200" loading="lazy"}
![Coyote LTL Quote Final 3](/images/projects/ltl-3.png){: class="border border-gray-200" height="1033" width="1200" loading="lazy"}
![Coyote LTL Quote Final 4](/images/projects/ltl-4.png){: class="border border-gray-200" height="1033" width="1200" loading="lazy"}
![Coyote LTL Quote Final 5](/images/projects/ltl-5.png){: class="border border-gray-200" height="1033" width="1200" loading="lazy"}
![Coyote LTL Quote Final 6](/images/projects/ltl-6.png){: class="border border-gray-200" height="957" width="1200" loading="lazy"}
{: class="gallery"}

