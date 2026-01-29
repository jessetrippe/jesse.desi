# **Commonplace: State of the Design System 2024**

Feb 2024 [Eva Decker](mailto:itsevadecker@gmail.com)

# Background 

As we enter 2024, there is renewed focus at Cityblock for building on and improving its existing design system, Commonplace.

I ([Eva Decker](mailto:itsevadecker@gmail.com)) spent time interviewing Cityblock designers and engineers to get a better picture about what is and isn’t working with our design system today. I’ve synthesized common themes below.

In addition, [Jesse Trippe](mailto:jesse.trippe@cityblock.com) and I conducted a product audit, capturing screenshots of all major views within Commons today. [View the audit.](https://drive.google.com/drive/folders/1GvO5sVuGWNjJq5vDO4Kru4SgVM6lbhpu)

# What’s working well today?

Although there’s plenty to improve, we’re not in terrible shape\!

## ✅ Atomic components are in decent shape

There are opportunities to improve visual and interaction details, but the **components within Commonplace are mostly doing what they were designed to do**. We’re not in the wild west.

* *“Things are in a pretty good spot.”*  
* *“Many of the components are defined, \[and\] many of the needs are known.”*  
* *“The design tokens are quite useful.”*

## ✅ The design system is well-used

Although its application isn’t always consistent, **components and tokens from the design system are being used on the majority of views** within Commons, and changes can be made with minimal effort.

* *“Really I don’t have too many complaints about the design system; I think it has served us well.”*  
* *“\[Our\] design system works pretty well most of the time, I’d say 90, 95% of the time.”*  
* *“Overall it’s really great \[...\] the design system is pretty robust.”*  
* *“The benefit to today’s structure is that components and the app are all centralized, so modifications can cascade globally relatively easily.”*  
* *“Commonplace is great; I do really like working with it a lot of the time.”*  
* *“I really like the design system.”*

## ✅ For an internal-facing clinical tool, we’re doing great

Participants reiterated that within the health tech industry, **Cityblock is an outlier for its attention to design** and development.

* *“I was thinking about leaving health tech \[as a designer\] before finding Cityblock.”*  
* *“For such a small team, there was a lot of thought put into things.”*  
* *“I was really impressed with the level of intention and thinking.”*  
* *“I think it’s pretty solid for the stage of design that we really are in.”*

# What needs improvement?

Below are six themes which emerged from the discussions with designers and engineers, and they represent major focus areas for the next few months. They include **patterns and layouts, documentation, component issues, ownership and governance, accessibility and testing,** and **aspirational planning**.

## 🔡 We need guidance around patterns

There is **widespread confusion over patterns** and a general **lack of clarity around understanding how components are used together** in service of a user.

* *“It’s not clear what our patterns are for certain things \[...\] not clear what the rules are for certain things.”*  
* *“We need definitions for common patterns across the app \[...\] this is a page, this is when to use a modal \[...\] it doesn’t necessarily need to exist in code.”*  
* *“A lot of times I feel stuck.”*  
* *“We lack a lot of documentation and patterns.”*

This **leads to inconsistency across Commons**.

* *“\[In design reviews, I’ll comment on consistency and say\] this doesn’t feel like the ‘spirit of Commonplace’, whatever that is, but I don’t have a reason to say why.”*  
* *“I really don’t even know what consistency looks like across the product \[...\] there are many different variations.”*  
* *“There’s a lack of consistency and direction on really big things, like grid or page templates or page headers.”*  
* *“We might’ve done okay with the smaller things, but it’s the big things… cards, tables… where things go haywire.”*  
* *“When you go into Commons to see, ‘what are the patterns today’... \[long pause\] there are many.”*

In addition, we have **no guidance around** **designing responsive views.**

* *“\[We have a\] lack of perspective on responsive \[...\] the design system itself is not responsive; some things are, some teams will go in and add their own breakpoints to some parts of Commons.”*  
* *“Most of our design systems don’t really consider responsiveness.”*  
* *“A lot of people use Commons within the Commons Companion extension, and that extension doesn’t get very big… I think there are display problems there.”*

So while atomic components have only minor edits and modifications required, there are **large, open questions around how to use components *together***, and when.

* *“\[There is\] a lot of desire and a lot of need to figure out how these things are assembled.”*  
* *“\[I could\] definitely use some guidelines around when you might use one thing over another thing.”*

Although some patterns may exist primarily as documentation, **common patterns could be** **offered in Figma to help designers get started** on new projects.

* *“\[We need in Figma\]* *the creation of a place to get started more easily, via templates.*”  
* *“It would be nice if there were more things that were in Figma; more combined patterns, built-up patterns.”*

## 😶‍🌫️ Documentation is minimal or missing altogether

**Official documentation today is barebones and scattered** across Storybook ([https://commonplace.design/](https://commonplace.design/)), Figma, ClickUp, Google Docs, and code.

* *“Documentation is kind of all over the place.”*  
* *“We started in ClickUp, putting in patterns… we realized we need dedicated people to do it; people don’t refer back to it. It’s not comprehensive.”*  
* *“We need better documentation, and more guidelines around usage.”*  
* *“Documentation needs extra context, like citing commonly misused components.”*

There is a **contribution barrier for designers** wanting to contribute to official docs.

* *“Maybe the goal was to have everything in Storybook, \[but\] designers don’t have access to contribute to any of those docs.”*  
* *“Storybook is perhaps not the best tool suited for documenting components; it’s very engineering-focused, and the layout and overall structure is intimidating.”*

While minimal documentation worked for a small team, **poor documentation poses problems as the team grows**.

* *“We could use more rigor and guidance around the system particularly because the team is bigger now.”*  
* *“\[There’s been\] some trouble with junior engineers and confusion around which components to use and how.”*

There are **mixed opinions about *where* the documentation should exist**, with some designers arguing to place it in Figma, and others saying that Figma is not a good medium.

* *“Most of the time the designers just live in Figma; we’re not bringing the documentation to where they are.”*  
* *“Figma isn’t a great documentation tool.”*

Within engineering, there is a strong preference for **better TypeScript types and documentation-in-code**, above a separate documentation portal.

* *“I think Storybook is pretty robust.”*  
* *“We need to get rid of all our `any` and `unknown` types.”*

## 🧱 Many components need various improvements

There are **many small issues to fix in Figma**.

* *“\[There are\] a ton of easy opportunities to raise the bar in terms of how things are structured, where things are stored, how things are stored \[in Figma\].”*  
* *“There are some components \[in Figma\] that don’t work \[because auto-layout isn’t set up correctly and the component breaks when you try to stretch it\].”*

There is **confusion around whether Figma matches code** and **confusion around which components are available.** For this and more, we have begun [tracking component status](https://docs.google.com/spreadsheets/d/1rmbVL612ejXJ2k7RFIVStrgnJEzsV9J7z4x9pLxYXFE/edit?pli=1#gid=0).

* *“It’s not always clear to me if names are the same \[between Figma and code\].”*  
* *“\[We need to\] make sure component architecture is the same across all components: consistent naming, variables, etc.”*  
* *“Sometimes I struggle to find… is there a dropdown that has a search bar in it, or is there not \[...\] does this component \[that I’m looking for\] exist?”*  
* *“The way that it’s mapped out isn’t always easy for me to find.”*

Some **components in code have redundant implementations or inconsistent APIs**, and **some components are too rigid**, which causes engineers to break and override them.

* *“Some components are prop-heavy. Does this need to be a prop?”*  
* *“Sometimes \[we\] need additional flexibility with components \[they don’t offer\].”*  
* *“Where I see adoption fail is when you have too prescriptive of a component.”*  
* *“We haven’t hit goldilocks yet… \[the system was\] too freeform, then became too rigid.”*  
* *“Some components make GraphQL queries directly \[and that logic should be moved elsewhere\]. We don’t have any sort of agreement about how we do state management.”*  
* *“The place where it gets weirdest is that components require padding that is a sum of padding of other things \[...\] once you’re composing a complicated tree of things, what padding ends up where is not obvious from looking at the component structure.”*


**Specific component callouts** include**:**

| Cards There are many types. We need better guidance. | *“Cards are a point of confusion… we have many different types of cards in the product.” “It would be helpful to know, ‘this is what cards are, this is what cards aren’t.’”* |
| :---- | :---- |
| **Buttons** Borders are inconsistent, and we could use a ghost button. | *“There’s a 2px difference in buttons with/without borders; inconsistency between code and Figma and within code due to border placement.” “\[We could really use a\] tertiary button, or ghost button \[for data-dense areas\].”* |
| **Errors** Unclear how to surface. | “*Errors can appear in input and in banners, and it’s not clear when/which to use.”* |
| **Icons**There are too many, and they’re used inconsistently. | *“A lot of components in Figma will have icons \[which are\] optional \[but\] designers see components and think, ‘oh, this requires an icon’.” “Over time, Commons has become very icon-heavy.” “\[There are\] big inconsistencies between the codebase and Figma.” “Icons are all over the place \[...\] a lot of mix between fill and strokes \[...\] how they’re named and where they’re placed \[...\] a lot of opportunity for cleanup.”* |
| **Inputs and Forms**There are too many columns. | *“\[We need\] a version of an input field that doesn’t span the container; the full-width span of inputs promotes a pattern of creating a second column for forms, when maybe a single column with shorter inputs would be more desirable.” “Do we use disabled buttons for forms?” “Some pages like Member Info serve double-duty \[...\] both for editing and viewing info \[...\] how do we surface editable information? How do we surface view-only information?”* |
| **Modals**There are too many. Unclear usage. | *“Dropdowns in modals get cut off.” “\[There are\] so many modals \[in the product today\]. If everything is a modal, the interactions are hard.” “Do we always show a confirmation modal?”* |
| **Selects** We have too many implementations. | *“We have \~4 different Select components.” “When something isn’t available do we show it anyways? \[When do we use disabled state versus hidden?\]”* |
| **Tables** The component is too rigid. | *“Certain facets are missing \[...\] it makes the design look a little funny, work a little funny.” “We didn’t have a headless version of a certain table.” “Tables are an interesting example \[...\] we’re now stuck in the halfway state with a decent number of \[legacy tables\] and a smattering of \[new tables\].”* |
| **Text** There are too many styles. | *“It’s pretty common to look at a page and see 6-7 types of styles.” “It will help with hierarchy to have fewer text styles.”* |
| **Toasts** Unclear usage. | *“What is our approach to toasts? Or deleting? Do we always show toasts after every action, or do we only show toasts after certain actions?”* |
| **Toggles and Toggletips** Unclear usage. | *“How are we using the toggle component?” “What is a toggletip?”* |

## ⚖️ There’s no clear ownership or governance process

**No one individual or team is currently responsible for design systems**, which creates problems.

* *“Many features are ‘between ownership’ and don’t have a dedicated team responsible for overseeing them \[... it’s\] a tragedy of the commons.”*  
* *“Any time we’ve attempted to establish a pattern, I don’t think there was enough attention to it \[because the person didn’t have full-time ownership and they were\] not thinking about the product as a whole.”*  
* *“Who has ownership \[of different components, of the docs, of Figma\]?”*  
* *“There’s a couple designers who like to go rogue and create a lot of new custom UX and UI and there isn’t a lot of tamping down on that \[... it\] happens quite a bit.”*

And **when there’s a desire to extend the system, it’s unclear how to do so.** [Governance advice from Brad Frost](https://bradfrost.com/blog/post/a-design-system-governance-process/) may help here.

* *“There’s not really a process \[for extending or evolving the system\].”*  
* *“Process around design systems is also lacking: when is a component added? When is it edited? What oversight is there?”*  
* *“What I see is teams using components and then layering on a bunch of CSS to it for their specific use case.”*  
* *“There are issues today with engineers overriding components.”*  
* *“Component checklists and guidance \[would be helpful\].”*  
* *“We \[engineers\] kind of all just push changes, whenever we feel like it, into the design system \[...\] it’s not very clear.”*

Generally, there’s a sentiment that **individuals don’t feel empowered to contribute changes to the system.**

* *“I don’t know that everyone feels the responsibility to fix things in Figma when they see that there’s something missing or incorrect.”*  
* *“How do we not only create ownership, but also create confidence in the rest of the design team to make small/medium/big changes to the design system?”*  
* *“It does work well in certain cases, but it feels like you can’t extend it.”*  
* *“At Twitter, championing the person who brought the request to the design system gave contributors and designers more reason to contribute.”*

And **a lack of named ownership degrades quality over time.**

* *“When you leave, what happens?”*  
* *“Once \[key individuals\] are gone, how do people continue to use or feel ownership over the library?”*  
* *“Features get built with new UI, but there isn’t much in the way of cleanup later or adoption to the design system.”*  
* *“Whenever a team needs the component to do something, they keep adding to it \[...\] because there’s no ownership. \[...\] Try to be careful about having \[a component\] do too much.”*

## 🧪 Accessibility and testing need improvement

The **test suite for today’s components is minimal** making it more likely that changes introduce bugs.

* *“Component and feature-level testing is not in a great state; it can be easy to break things when making small edits.”*  
* *“Being able to do snapshot tests \[on components\] would be quite valuable.”*  
* *“There’s fear about \[updating legacy components\].”*

There are also **accessibility problems** which will be critical to fix for any member-facing interfaces.

* *“Many components currently get wrapped in divs. The DOM depth is excessive.”*  
* *“I don’t think any of us have really tried using our design system using just a screen reader \[...\] it would be cool to have that kind of consideration.”*  
* *“I do think we need to start thinking about accessibility before we start shipping member-facing things.”*  
* *“Something that bothers me \[is\] it’s hard to navigate by keyboard.”*

## 💫 There’s an opportunity for more aspirational thinking

Today’s design system is grounded in the current codebase, but it could go beyond that. **How will the design system evolve to meet the needs of the future?**

* *“I’d like the design portion to be more aspirational than what’s in code; I don’t want design to be held back by engineering.”*  
* *“I’m curious about what shape the member-facing design system will take.”*

# Next Steps

If you’ve read to this point, thanks\! Please leave comments and additional thoughts in the doc.

Now that we’ve completed the product audit, the plan is:

1. **Conduct an [interface inventory](https://www.figma.com/file/N69mmA3BSwWoGI8wmJdFPm/March-2024-Interface-Inventory?type=design&node-id=0%3A1&mode=design&t=tDuudvW7xOPtH9Qg-1) and re-examine color and typography** to standardize the palette and type scale in Figma and code.  
2. **Document current-state inconsistencies and areas for improvement.** Expand on the [component tracker](https://docs.google.com/spreadsheets/d/1rmbVL612ejXJ2k7RFIVStrgnJEzsV9J7z4x9pLxYXFE/edit?pli=1#gid=0).  
3. **Expand and improve documentation in Storybook** to make it easy for all roles to read and contribute to.  
4. **Begin discussing and making decisions about specific patterns** based on past research, other design systems, UX standards, and Cityblock’s unique needs. Answer the unanswered questions. Find areas to plug in and ship changes.  
5. **Apply learnings and decisions to components in Figma and code.** Make incremental improvements across the app.  
6. **Continue to discuss and iterate with the team on governance and ownership.** Have an area of the design system you’re especially interested in? Icons? Cards? Modals? Let’s chat\!

# Contributions

Quotes and contributions from:

[Neves Rodrigues](mailto:neves@cityblock.com) [Efrain Calderon](mailto:efrain.calderon@cityblock.com) [Dave DeSandro](mailto:david.desandro@cityblock.com) [Tiffany Ton](mailto:tiffany.ton@cityblock.com) [Jesse Trippe](mailto:jesse.trippe@cityblock.com) [Jess Robash](mailto:jessica.robash@cityblock.com) [Stuart Kim](mailto:stuart.kim@cityblock.com) [Min Ji Lee](mailto:minji@cityblock.com) [sam schick(they,them)](mailto:sam.schick@cityblock.com) [Tara Yoo](mailto:tara.yoo@cityblock.com) @Joey Banks

Thank you\! 💌

# Additional Resources

* [Cityblock Brand Book](https://my.corebook.io/cityblock-brandguideline/introduction/why-this-guide)  
* [Commonplace component tracker](https://docs.google.com/spreadsheets/d/1rmbVL612ejXJ2k7RFIVStrgnJEzsV9J7z4x9pLxYXFE/edit?pli=1#gid=0)  
* [Astro Starlight](https://starlight.astro.build/)  
* [A Design System Governance Process | Brad Frost](https://bradfrost.com/blog/post/a-design-system-governance-process/)  
* [Commonplace](https://commonplace.design/)  
* [Feb 28 Product Audit](https://drive.google.com/drive/folders/1GvO5sVuGWNjJq5vDO4Kru4SgVM6lbhpu)