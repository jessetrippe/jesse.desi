---
layout: default
title: "Amazon Work Scheduling"
description: "Amazon Logistics' 3rd-party delivery partners needed a driver scheduling tool that adhered to industry best-practices."
order: 3
featured: amazon-scheduling-final-01.png
meta: [Amazon Logistics, Design, 2018]
---

In 2018 Amazon launched a last-mile delivery program powered by entrepreneurs. These new companies needed a way to manage their drivers' schedules and communicate their capacity and schedules to Amazon. The needs of each user (Amazon station operators, schedulers, and drivers) is often at odds with one another, forcing the team—consisting of a Product Manager, a development team, and myself—to focus on how our tool could make meaningful strides to achieve the larger organization's goals.

The request was to move the daily and weekly offline process of accepting Amazon offered routes online in order to reduce errors and manual touch-points. We built a scrappy solution in 2017 to accomplish this task and began planning a more robust, user-centered solution to launch mid-2018.

---

## Field Research

After launching the scrappy version, I worked with a UX Researcher to develop an online and offline survey to test usage and assumptions. I visited various sites across North America and the UK to observe and interview users about their usage of the tool and how they schedule their drivers. I sent an online version of the survey to companies in locations I was unable to travel to.

Most companies were using complex, brittle, online spreadsheets to schedule their drivers mostly because the tools were free and synced across multiple site locations. Separately, users found the process of providing Amazon their roster of drivers repetitive, redundant, and of little value to them.

![Amazon Scheduling Field Research 1](/images/projects/amazon-scheduling-fr-01.jpg){: height="1125" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 2](/images/projects/amazon-scheduling-fr-02.jpg){: height="1273" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 3](/images/projects/amazon-scheduling-fr-03.jpg){: height="768" width="965" loading="lazy"}
![Amazon Scheduling Field Research 4](/images/projects/amazon-scheduling-fr-04.jpg){: height="1125" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 5](/images/projects/amazon-scheduling-fr-05.jpg){: height="1125" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 6](/images/projects/amazon-scheduling-fr-06.jpg){: height="1125" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 7](/images/projects/amazon-scheduling-fr-07.jpg){: height="992" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 8](/images/projects/amazon-scheduling-fr-08.jpg){: height="1539" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 9](/images/projects/amazon-scheduling-fr-09.jpg){: height="1782" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 10](/images/projects/amazon-scheduling-fr-10.jpg){: height="1125" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 11](/images/projects/amazon-scheduling-fr-13.jpg){: height="1247" width="1500" loading="lazy"}
![Amazon Scheduling Field Research 12](/images/projects/amazon-scheduling-fr-14.jpg){: height="1228" width="1500" loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Brainstorming

We kicked off a design sprint to begin defining the long-term vision. Using survey results and research findings, the Product Manager, development team, and myself brainstormed using "how might me". We formed a problem statement that encompassed our users' challenges and organized "how might we" statements into categories, and eventually into features, and then set out to conduct a competitive analysis to see how some of these problems were already being solved.

![Amazon Scheduling Brainstorm 1](/images/projects/amazon-scheduling-brainstorming-01.jpg){: height="865" width="1500" loading="lazy"}
![Amazon Scheduling Brainstorm 2](/images/projects/amazon-scheduling-brainstorming-02.jpg){: height="1335" width="1500" loading="lazy"}
![Amazon Scheduling Brainstorm 3](/images/projects/amazon-scheduling-brainstorming-03.jpg){: height="1075" width="1740" loading="lazy"}
![Amazon Scheduling Brainstorm 4](/images/projects/amazon-scheduling-brainstorming-04.jpg){: height="1075" width="1645" loading="lazy"}
![Amazon Scheduling Brainstorm 5](/images/projects/amazon-scheduling-brainstorming-05.jpg){: height="875" width="1500" loading="lazy"}
![Amazon Scheduling Brainstorm 6](/images/projects/amazon-scheduling-brainstorming-06.jpg){: height="1910" width="1883" loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Competitive Research

I interviewed teams across Amazon who are already solving this problem and researched other 3rd party tools. After presenting my findings to the product, design, and tech teams, we came to the conclusion that building a robust, Amazon Shipping scheduling tool would solve both the users' and Amazon's needs.

![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-01.jpg){: height="525" width="893" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-04.jpg){: height="518" width="522" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-07.png){: height="529" width="937" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-10.png){: height="946" width="1640" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-13.png){: height="840" width="1400" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-02.jpg){: height="520" width="854" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-05.jpg){: height="517" width="520" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-08.png){: height="668" width="904" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-11.png){: height="1096" width="1707" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-03.jpg){: height="527" width="525" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-06.png){: height="2688" width="2484" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-09.png){: height="1214" width="1500" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-12.png){: height="967" width="1500" loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Wireframe Exploration

We then began sketching solutions that involved both desktop and mobile experiences, and both driver and scheduler participation in the process. After a full day of sketching and countless iterations, I decided on a direction. We built a presentation with storyboards that highlighted the happy path solution and quickly mocked up low-fidelity wireframes present to leadership.

![Amazon Scheduling Wireframe 1](/images/projects/amazon-scheduling-wf-01.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 2](/images/projects/amazon-scheduling-wf-02.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 3](/images/projects/amazon-scheduling-wf-03.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 4](/images/projects/amazon-scheduling-wf-04.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 5](/images/projects/amazon-scheduling-wf-05.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 6](/images/projects/amazon-scheduling-wf-07.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 7](/images/projects/amazon-scheduling-wf-11.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 8](/images/projects/amazon-scheduling-wf-13.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 9](/images/projects/amazon-scheduling-wf-14.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 10](/images/projects/amazon-scheduling-wf-17.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 11](/images/projects/amazon-scheduling-wf-18.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 12](/images/projects/amazon-scheduling-wf-19.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 13](/images/projects/amazon-scheduling-wf-23.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 14](/images/projects/amazon-scheduling-wf-28.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 15](/images/projects/amazon-scheduling-wf-29.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 16](/images/projects/amazon-scheduling-wf-30.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 17](/images/projects/amazon-scheduling-wf-31.png){: height="967" width="1280" loading="lazy"}
![Amazon Scheduling Wireframe 18](/images/projects/amazon-scheduling-wf-37.png){: height="967" width="1280" loading="lazy"}
{: class="gallery grid-cols-3"}

---

## Component Design

After getting leadership buy-in I started working on the final design and iterating on each of the components. The design team already had an established pattern library but many of the components weren't addressed (e.g. we had an input form date-picker but not a browsable calendar, we had basic tables but nothing that could represent work within a cell, etc.).

For the calendar, I started with the pattern library's date-picker and began iterating. The new calendar had to show week number, day selected, week selected, and notifications or tasks on a given day. At first, I created a few versions and took them into the field. I tried to stick closely to the large, blockie, bright style of the rest of the pattern library which the design team was in favor of with colors representing different severity of tasks.

After taking it to the field, discussing the tasks required on each day with users, we eliminated the severity and stuck with an on/off for tasks. I saw the calendar was taking up unproportional amount of space so I played with simply using an input field. This ultimately wouldn't work as the days needed communicate tasks.

I interviewed a handful of users to discuss the importance of the week number. All of the users I interviewed said the date picker provided little to no importance so I removed it. After removing it the space seemed to work but the calendar's bright color blocks were still drawing too much attention on an already busy page. I began creating a new version that dialed down the size and brightness of our indicators. I did some scrappy user-testing in the office and users were still able to tell which days needed attention and which did not. I built a working prototype in CodePen for the engineering team and stayed close while they built it.

Also during testing, I found that users weren't able to quickly see which tasks were required on the page - the outstanding work section was getting lost and then, even when users were spotting it, some were confused about what action to take. I created a few different versions to dial-up visuals on those sections and added tooltips to explain what they're for. We also added hours and locations to the table of drivers after receiving user feedback and iterated on how to show over-time hours.

![Amazon Scheduling Component 1](/images/projects/amazon-scheduling-calendar-picker.png){: height="970" width="841" loading="lazy"}
![Amazon Scheduling Component 2](/images/projects/amazon-scheduling-calendar-in-context.png){: height="800" width="1306" loading="lazy"}
![Amazon Scheduling Component 3](/images/projects/amazon-scheduling-calendar-no-week.png){: height="560" width="651" loading="lazy"}
![Amazon Scheduling Component 4](/images/projects/amazon-scheduling-calendar-on-off.png){: height="560" width="798" loading="lazy"}
![Amazon Scheduling Component 5](/images/projects/amazon-scheduling-calendar-color-block.png){: height="1202" width="794" loading="lazy"}
![Amazon Scheduling Component 6](/images/projects/amazon-scheduling-calendar-final.png){: height="950" width="870" loading="lazy"}
![Amazon Scheduling Component 7](/images/projects/amazon-scheduling-calendar-no-date-picker.png){: height="2276" width="2265" loading="lazy"}
![Amazon Scheduling Component 8](/images/projects/amazon-scheduling-outstanding-iteration.png){: class="col-span-2" height="373" width="1167" loading="lazy"}
{: class="gallery grid-cols-2"}

---

## Final Design

After getting leadership buy-in I built a prototype using our team's pattern library, Sketch, and Invision and took to the field for testing. We also conducted multiple interviews at bi-weekly video conference meetings with schedulers.

User feedback was overall positive and helped us prioritize and add additional features we hadn't yet thought of. I made many changes based on their feedback—mostly with accompanying training text, help material, and empty states—as many were confused by the naming of certain processes and tasks.

The product team, development team, and I developed a launch plan that released the necessary features first, with additional screens and features coming out in phases. With each feature release, we headed back into the field for research and to confirm future feature priority. The development team began connecting the prototype to the backend which the development team had been building throughout this process.

In Fall of 2018, we completed the launch of the desktop scheduling experience which consisted of a weekly scheduling template, a weekly and daily scheduling view, the ability to schedule time-off, and the ability to filter each view based on various parameters. The team is now focusing on the driver facing mobile experience to receive and makes changes to schedules. This is being readied for mid-2019.

![Amazon Scheduling Final 1](/images/projects/amazon-scheduling-final-01.png){: height="1928" width="2560" loading="lazy"}
![Amazon Scheduling Final 2](/images/projects/amazon-scheduling-final-02.png){: height="1928" width="2560" loading="lazy"}
![Amazon Scheduling Final 3](/images/projects/amazon-scheduling-final-03.png){: height="1928" width="2560" loading="lazy"}
![Amazon Scheduling Final 4](/images/projects/amazon-scheduling-final-04.png){: height="1928" width="2560" loading="lazy"}
![Amazon Scheduling Final 5](/images/projects/amazon-scheduling-final-05.png){: height="2048" width="2880" loading="lazy"}
{: class="gallery"}

