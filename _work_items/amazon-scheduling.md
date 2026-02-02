---
layout: default
title: "Amazon Work Scheduling"
description: "Replacing brittle spreadsheets with a scheduling tool for Amazon's network of 3rd-party delivery companies."
order: 5
featured: amazon-scheduling-final-01.webp
meta: [Amazon Logistics, Design, 2018]
---

In 2018, Amazon launched a last-mile delivery program powered by independent courier companies. These companies needed to schedule drivers, communicate capacity to Amazon, and manage time-off requests. But there was no tool for this.

Most companies were using Google Sheets. The spreadsheets were brittle, hard to maintain across multiple locations, and disconnected from Amazon's systems. Schedulers spent hours each week on manual data entry that should have been automatic.

The original request was to move the daily and weekly offline process of accepting Amazon-offered routes online to reduce errors and manual touchpoints. We built a scrappy solution in 2017 to accomplish this, then began planning a more robust, user-centered solution for mid-2018.

I worked with a product manager and development team to design a scheduling tool that replaced the spreadsheets and integrated directly with Amazon's route planning systems.

---

## Field Research

I partnered with a UX researcher to develop online and offline surveys to test usage and assumptions. I visited sites across North America and the UK to observe and interview users about how they schedule drivers. I sent the online survey to companies in locations I couldn't travel to.

The findings confirmed what we suspected: spreadsheets were the norm because they were free and synced across locations. But they created constant headaches.

Users also found the process of submitting driver rosters to Amazon repetitive and low-value. They were entering the same information in multiple places.

![Amazon Scheduling Field Research 1](/images/projects/amazon-scheduling-fr-01.webp){: height="1125" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-01-640.webp 640w, /images/projects/amazon-scheduling-fr-01-1280.webp 1280w"}
![Amazon Scheduling Field Research 2](/images/projects/amazon-scheduling-fr-02.webp){: height="1273" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-02-640.webp 640w, /images/projects/amazon-scheduling-fr-02-1280.webp 1280w"}
![Amazon Scheduling Field Research 3](/images/projects/amazon-scheduling-fr-03.webp){: height="768" width="965" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-03-640.webp 640w"}
![Amazon Scheduling Field Research 4](/images/projects/amazon-scheduling-fr-04.webp){: height="1125" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-04-640.webp 640w, /images/projects/amazon-scheduling-fr-04-1280.webp 1280w"}
![Amazon Scheduling Field Research 5](/images/projects/amazon-scheduling-fr-05.webp){: height="1125" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-05-640.webp 640w, /images/projects/amazon-scheduling-fr-05-1280.webp 1280w"}
![Amazon Scheduling Field Research 6](/images/projects/amazon-scheduling-fr-06.webp){: height="1125" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-06-640.webp 640w, /images/projects/amazon-scheduling-fr-06-1280.webp 1280w"}
![Amazon Scheduling Field Research 7](/images/projects/amazon-scheduling-fr-07.webp){: height="992" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-07-640.webp 640w, /images/projects/amazon-scheduling-fr-07-1280.webp 1280w"}
![Amazon Scheduling Field Research 8](/images/projects/amazon-scheduling-fr-08.webp){: height="1539" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-08-640.webp 640w, /images/projects/amazon-scheduling-fr-08-1280.webp 1280w"}
![Amazon Scheduling Field Research 9](/images/projects/amazon-scheduling-fr-09.webp){: height="1782" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-09-640.webp 640w, /images/projects/amazon-scheduling-fr-09-1280.webp 1280w"}
![Amazon Scheduling Field Research 10](/images/projects/amazon-scheduling-fr-10.webp){: height="1125" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-10-640.webp 640w, /images/projects/amazon-scheduling-fr-10-1280.webp 1280w"}
![Amazon Scheduling Field Research 11](/images/projects/amazon-scheduling-fr-13.webp){: height="1247" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-13-640.webp 640w, /images/projects/amazon-scheduling-fr-13-1280.webp 1280w"}
![Amazon Scheduling Field Research 12](/images/projects/amazon-scheduling-fr-14.webp){: height="1228" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-fr-14-640.webp 640w, /images/projects/amazon-scheduling-fr-14-1280.webp 1280w"}
{: class="gallery grid-cols-3"}

---

## Brainstorming

We ran a design sprint to define the long-term vision. Using research findings, the team brainstormed using "how might we" statements, grouped them into themes, and prioritized features. I then conducted competitive research to see how existing scheduling tools solved similar problems.

![Amazon Scheduling Brainstorm 1](/images/projects/amazon-scheduling-brainstorming-01.webp){: height="865" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-brainstorming-01-640.webp 640w, /images/projects/amazon-scheduling-brainstorming-01-1280.webp 1280w"}
![Amazon Scheduling Brainstorm 2](/images/projects/amazon-scheduling-brainstorming-02.webp){: height="1335" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-brainstorming-02-640.webp 640w, /images/projects/amazon-scheduling-brainstorming-02-1280.webp 1280w"}
![Amazon Scheduling Brainstorm 3](/images/projects/amazon-scheduling-brainstorming-03.webp){: height="1075" width="1740" loading="lazy" srcset="/images/projects/amazon-scheduling-brainstorming-03-640.webp 640w, /images/projects/amazon-scheduling-brainstorming-03-1280.webp 1280w"}
![Amazon Scheduling Brainstorm 4](/images/projects/amazon-scheduling-brainstorming-04.webp){: height="1075" width="1645" loading="lazy" srcset="/images/projects/amazon-scheduling-brainstorming-04-640.webp 640w, /images/projects/amazon-scheduling-brainstorming-04-1280.webp 1280w"}
![Amazon Scheduling Brainstorm 5](/images/projects/amazon-scheduling-brainstorming-05.webp){: height="875" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-brainstorming-05-640.webp 640w, /images/projects/amazon-scheduling-brainstorming-05-1280.webp 1280w"}
![Amazon Scheduling Brainstorm 6](/images/projects/amazon-scheduling-brainstorming-06.webp){: height="1910" width="1883" loading="lazy" srcset="/images/projects/amazon-scheduling-brainstorming-06-640.webp 640w, /images/projects/amazon-scheduling-brainstorming-06-1280.webp 1280w"}
{: class="gallery grid-cols-3"}

---

## Competitive Research

I interviewed teams across Amazon who had built scheduling tools and researched third-party solutions. The conclusion: we needed to build a purpose-built tool that served both the delivery companies and Amazon's operational needs.

![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-01.webp){: height="525" width="893" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-01-640.webp 640w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-04.webp){: height="518" width="522" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-07.webp){: height="529" width="937" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-07-640.webp 640w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-10.webp){: height="946" width="1640" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-10-640.webp 640w, /images/projects/amazon-scheduling-cr-10-1280.webp 1280w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-13.webp){: height="840" width="1400" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-13-640.webp 640w, /images/projects/amazon-scheduling-cr-13-1280.webp 1280w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-02.webp){: height="520" width="854" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-02-640.webp 640w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-05.webp){: height="517" width="520" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-08.webp){: height="668" width="904" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-08-640.webp 640w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-11.webp){: height="1096" width="1707" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-11-640.webp 640w, /images/projects/amazon-scheduling-cr-11-1280.webp 1280w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-03.webp){: height="527" width="525" loading="lazy"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-06.webp){: height="2688" width="2484" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-06-640.webp 640w, /images/projects/amazon-scheduling-cr-06-1280.webp 1280w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-09.webp){: height="1214" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-09-640.webp 640w, /images/projects/amazon-scheduling-cr-09-1280.webp 1280w"}
![Amazon Scheduling Competitive Research](/images/projects/amazon-scheduling-cr-12.webp){: height="967" width="1500" loading="lazy" srcset="/images/projects/amazon-scheduling-cr-12-640.webp 640w, /images/projects/amazon-scheduling-cr-12-1280.webp 1280w"}
{: class="gallery grid-cols-3"}

---

## Wireframe Exploration

We sketched solutions for both desktop (schedulers) and mobile (drivers). After a full day of iteration, I selected a direction and built storyboards and wireframes to present to leadership.

![Amazon Scheduling Wireframe 1](/images/projects/amazon-scheduling-wf-01.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-01-640.webp 640w, /images/projects/amazon-scheduling-wf-01-1280.webp 1280w"}
![Amazon Scheduling Wireframe 2](/images/projects/amazon-scheduling-wf-02.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-02-640.webp 640w, /images/projects/amazon-scheduling-wf-02-1280.webp 1280w"}
![Amazon Scheduling Wireframe 3](/images/projects/amazon-scheduling-wf-03.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-03-640.webp 640w, /images/projects/amazon-scheduling-wf-03-1280.webp 1280w"}
![Amazon Scheduling Wireframe 4](/images/projects/amazon-scheduling-wf-04.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-04-640.webp 640w, /images/projects/amazon-scheduling-wf-04-1280.webp 1280w"}
![Amazon Scheduling Wireframe 5](/images/projects/amazon-scheduling-wf-05.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-05-640.webp 640w, /images/projects/amazon-scheduling-wf-05-1280.webp 1280w"}
![Amazon Scheduling Wireframe 6](/images/projects/amazon-scheduling-wf-07.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-07-640.webp 640w, /images/projects/amazon-scheduling-wf-07-1280.webp 1280w"}
![Amazon Scheduling Wireframe 7](/images/projects/amazon-scheduling-wf-11.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-11-640.webp 640w, /images/projects/amazon-scheduling-wf-11-1280.webp 1280w"}
![Amazon Scheduling Wireframe 8](/images/projects/amazon-scheduling-wf-13.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-13-640.webp 640w, /images/projects/amazon-scheduling-wf-13-1280.webp 1280w"}
![Amazon Scheduling Wireframe 9](/images/projects/amazon-scheduling-wf-14.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-14-640.webp 640w, /images/projects/amazon-scheduling-wf-14-1280.webp 1280w"}
![Amazon Scheduling Wireframe 10](/images/projects/amazon-scheduling-wf-17.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-17-640.webp 640w, /images/projects/amazon-scheduling-wf-17-1280.webp 1280w"}
![Amazon Scheduling Wireframe 11](/images/projects/amazon-scheduling-wf-18.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-18-640.webp 640w, /images/projects/amazon-scheduling-wf-18-1280.webp 1280w"}
![Amazon Scheduling Wireframe 12](/images/projects/amazon-scheduling-wf-19.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-19-640.webp 640w, /images/projects/amazon-scheduling-wf-19-1280.webp 1280w"}
![Amazon Scheduling Wireframe 13](/images/projects/amazon-scheduling-wf-23.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-23-640.webp 640w, /images/projects/amazon-scheduling-wf-23-1280.webp 1280w"}
![Amazon Scheduling Wireframe 14](/images/projects/amazon-scheduling-wf-28.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-28-640.webp 640w, /images/projects/amazon-scheduling-wf-28-1280.webp 1280w"}
![Amazon Scheduling Wireframe 15](/images/projects/amazon-scheduling-wf-29.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-29-640.webp 640w, /images/projects/amazon-scheduling-wf-29-1280.webp 1280w"}
![Amazon Scheduling Wireframe 16](/images/projects/amazon-scheduling-wf-30.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-30-640.webp 640w, /images/projects/amazon-scheduling-wf-30-1280.webp 1280w"}
![Amazon Scheduling Wireframe 17](/images/projects/amazon-scheduling-wf-31.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-31-640.webp 640w, /images/projects/amazon-scheduling-wf-31-1280.webp 1280w"}
![Amazon Scheduling Wireframe 18](/images/projects/amazon-scheduling-wf-37.webp){: height="967" width="1280" loading="lazy" srcset="/images/projects/amazon-scheduling-wf-37-640.webp 640w, /images/projects/amazon-scheduling-wf-37-1280.webp 1280w"}
{: class="gallery grid-cols-3"}

---

## Component Design

The existing pattern library didn't have components for scheduling: no browsable calendar, no way to show tasks within table cells, no overtime indicators. I designed these from scratch, testing iterations in the field.

The calendar went through several rounds. I started with the pattern library's date-picker and iterated. The new calendar had to show week number, day selected, week selected, and notifications or tasks on a given day. Early versions used color-coded severity indicators, but after taking them to the field and discussing with users, we eliminated severity and stuck with a binary on/off for tasks.

The calendar was taking up too much space, so I tried using just an input field. This wouldn't work since days needed to communicate tasks. I interviewed users about the importance of week number. All said it provided little to no value, so I removed it. The space worked better, but the bright color blocks were still drawing too much attention. I created a version that dialed down the size and brightness of indicators, then did scrappy user-testing in the office. Users could still tell which days needed attention.

During testing, I found users couldn't quickly identify outstanding work on the page. I iterated on the visual hierarchy and added tooltips to clarify actions. We also added hours and locations to the driver table based on user feedback and iterated on how to show overtime hours. I built a working prototype in CodePen and worked closely with engineering during implementation.

![Amazon Scheduling Component 1](/images/projects/amazon-scheduling-calendar-picker.webp){: height="970" width="841" loading="lazy" srcset="/images/projects/amazon-scheduling-calendar-picker-640.webp 640w"}
![Amazon Scheduling Component 2](/images/projects/amazon-scheduling-calendar-in-context.webp){: height="800" width="1306" loading="lazy" srcset="/images/projects/amazon-scheduling-calendar-in-context-640.webp 640w, /images/projects/amazon-scheduling-calendar-in-context-1280.webp 1280w"}
![Amazon Scheduling Component 3](/images/projects/amazon-scheduling-calendar-no-week.webp){: height="560" width="651" loading="lazy" srcset="/images/projects/amazon-scheduling-calendar-no-week-640.webp 640w"}
![Amazon Scheduling Component 4](/images/projects/amazon-scheduling-calendar-on-off.webp){: height="560" width="798" loading="lazy" srcset="/images/projects/amazon-scheduling-calendar-on-off-640.webp 640w"}
![Amazon Scheduling Component 5](/images/projects/amazon-scheduling-calendar-color-block.webp){: height="1202" width="794" loading="lazy" srcset="/images/projects/amazon-scheduling-calendar-color-block-640.webp 640w"}
![Amazon Scheduling Component 6](/images/projects/amazon-scheduling-calendar-final.webp){: height="950" width="870" loading="lazy" srcset="/images/projects/amazon-scheduling-calendar-final-640.webp 640w"}
![Amazon Scheduling Component 7](/images/projects/amazon-scheduling-calendar-no-date-picker.webp){: height="2276" width="2265" loading="lazy" srcset="/images/projects/amazon-scheduling-calendar-no-date-picker-640.webp 640w, /images/projects/amazon-scheduling-calendar-no-date-picker-1280.webp 1280w"}
![Amazon Scheduling Component 8](/images/projects/amazon-scheduling-outstanding-iteration.webp){: class="col-span-2" height="373" width="1167" loading="lazy" srcset="/images/projects/amazon-scheduling-outstanding-iteration-640.webp 640w"}
{: class="gallery grid-cols-2"}

---

## Final Design

I built a prototype using the pattern library, Sketch, and InVision and tested it in the field. We also conducted interviews at bi-weekly video conference meetings with schedulers. User feedback was positive and helped prioritize additional features. Most changes were around training text, help content, and empty states since users were confused by some terminology.

We developed a launch plan that released core features first, with additional screens coming out in phases. With each release, we returned to the field to validate and reprioritize. Engineering connected the prototype to the backend they had been building throughout the process.

The desktop scheduling tool launched in Fall 2018 with weekly templates, daily and weekly views, time-off scheduling, and filtering. It replaced the spreadsheet workflows for hundreds of delivery companies across North America. The team then focused on a driver-facing mobile experience to receive and make changes to schedules, planned for mid-2019.

![Amazon Scheduling Final 1](/images/projects/amazon-scheduling-final-01.webp){: height="1928" width="2560" loading="lazy" srcset="/images/projects/amazon-scheduling-final-01-640.webp 640w, /images/projects/amazon-scheduling-final-01-1280.webp 1280w"}
![Amazon Scheduling Final 2](/images/projects/amazon-scheduling-final-02.webp){: height="1928" width="2560" loading="lazy" srcset="/images/projects/amazon-scheduling-final-02-640.webp 640w, /images/projects/amazon-scheduling-final-02-1280.webp 1280w"}
![Amazon Scheduling Final 3](/images/projects/amazon-scheduling-final-03.webp){: height="1928" width="2560" loading="lazy" srcset="/images/projects/amazon-scheduling-final-03-640.webp 640w, /images/projects/amazon-scheduling-final-03-1280.webp 1280w"}
![Amazon Scheduling Final 4](/images/projects/amazon-scheduling-final-04.webp){: height="1928" width="2560" loading="lazy" srcset="/images/projects/amazon-scheduling-final-04-640.webp 640w, /images/projects/amazon-scheduling-final-04-1280.webp 1280w"}
![Amazon Scheduling Final 5](/images/projects/amazon-scheduling-final-05.webp){: height="2048" width="2880" loading="lazy" srcset="/images/projects/amazon-scheduling-final-05-640.webp 640w, /images/projects/amazon-scheduling-final-05-1280.webp 1280w"}
{: class="gallery"}
