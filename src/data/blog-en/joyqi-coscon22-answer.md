---
title: "Joyqi's Talk at COSCon'22: The Story Behind Open-Sourcing Answer"
pubDatetime: 2022-10-30T13:36:03.000Z
description: "On October 30, 2022, my technical co-founder Joyqi — co-founder of the open-source Q&A community software Answer — was invited to give a talk at COSCon'22, the China Open Source Conference, sharing his thinking behind the Answer project. Below is a transcript of his talk."
author: "Sunny Gao"
tags: ["segmentfault", "answer", "Open Source"]
draft: false
ogImage: "/images/posts/joyqi-coscon22-answer/cover.jpeg"
---

**On October 30, 2022, my technical co-founder Joyqi — co-founder of the open-source Q&A community software Answer — was invited to give a talk at COSCon'22, the China Open Source Conference, sharing his thinking behind the Answer project. Below is a transcript of his talk.**

---

Hi everyone, I'm Joyqi from SegmentFault. It's a real pleasure to have this opportunity to share with you at the China Open Source Conference.

SegmentFault is a developer community built around Q&A, where a huge number of working engineers exchange ideas and contribute knowledge. We want to harness developers' collective intelligence and let knowledge flow more freely.

Development of SegmentFault began roughly ten years ago — the very first line of code came from my own hands. In building this community, we overcame enormous difficulties, but we also accumulated enormous experience. For example:

- **We were the first developer community in China to adopt the Q&A format.** At the time it was a very novel medium for content, and we promoted this efficient form of knowledge exchange across major platforms in China, where it won unanimous recognition from users;
- **We abandoned the old forum-style approach of organizing content by fixed boards and categories, and adopted flexible tags instead.** In this age of information explosion, new topics can emerge at any moment — sometimes by the minute, sometimes by the second. With the old board/category model, administrators would have to create these topics manually and would quickly fall behind. So we let content creators decide how content gets aggregated, using tags, letting users genuinely participate in the community's governance and grow together with it;
- **Through a well-designed reputation system and growth path, users can accumulate reputation and unlock more community management features, becoming the true owners of the community**;
- …

These concepts are now everywhere on the internet, but as pioneers of them, we adopted them early, practiced them more, and therefore thought about them more deeply — and we received a great deal of help along the way. At the same time, we came to realize that the flow of knowledge shouldn't be confined to a single channel; it exists broadly across society. Many of our partners expressed a strong need for their own knowledge-exchange platforms in the course of working with us — it was one of the most frequent requests we received. So, drawing on our own thinking about this kind of platform, we wanted to empower the people who truly need it — and at the same time give back to the community. That, after all, is the core of the open-source spirit.

Today, I'd like to share with you an open-source Q&A community software built with all the dedication of the **SegmentFault team. Its name is simple and direct: "Answer."** As you can see, Answer's logo is a simple smiley face in the shape of a speech bubble.

As you can see, we've listed some of our goals for the software below:

![](/images/posts/joyqi-coscon22-answer/img-1.png)

**Our goal is to build an elegant, lightweight open-source Q&A software.** Most community software of this kind is very heavy to operate, and **we want users to be able to run it at a very low cost — whether it's a tech community, a user Q&A community, or a fan community for a product**… Many companies run fan communities like this today, and with Answer you can freely build all kinds of communities organized around Q&A content.

As I just said, we want to achieve this at the lowest possible cost. That cost is not only about the mental cost for users, but also very practical things like the hardware cost of running a community and the human cost of maintaining it…

- On mental cost: this includes how easy the product is to pick up, internationalization support, and so on — we want the product to take care of these for users;
- On hardware cost: for example, we chose Go — a highly efficient language in the open-source world — for development. Through choices like this, we hope to keep users' hardware resource usage excellent;
- On human cost: by turning our community operations experience into product features, we hope to help every organization keep its community active and achieve open community governance even with limited staffing;
- …

These are just a few examples.

Before introducing Answer's main features, I'd also like to introduce the development team behind the project from an open-source perspective — **SegmentFault is the founding development team behind this project**. In fact, SegmentFault has grown in an open-source way since its very beginning and has always been closely tied to open source. Several of our founders are very active in the open-source community — myself and the other founders have long been rooted in open source, each with our own open-source projects.

**I'm the founder and main contributor of Typecho, the open-source blogging platform.** Typecho is about 15 years old now; I started it in my senior year of university, and I've talked about it at length in previous talks. Most of SegmentFault's core members today have actually contributed to the Typecho project as well. **SegmentFault itself has released a large number of open-source projects over the course of its development** — you can see them on SegmentFault's GitHub page. You're welcome to follow them, contribute code, or report bugs — this is something we've always done and will keep doing. Building SegmentFault itself, we received support from many open-source projects, used many open-source components, and submitted plenty of improvements and code contributions to those components in return…

Our interaction with the open-source community has always been frequent. As a member of the open-source community, we've always wanted to give our strength back to it — and beyond continuous giving, we want to make an even bigger contribution. So "open source" is truly engraved in our team's DNA. **With the release of the open-source project Answer, we hope it will be genuinely useful and genuinely usable software — we want to distill everything we've learned from ten years of building SegmentFault into the newly released Answer product.**

![](/images/posts/joyqi-coscon22-answer/img-2.png)

On the slide, we've listed Answer's main features — the same kind of Q&A functionality as the SegmentFault platform, efficient content organization, and a gamified user reputation and growth system. **We've also incorporated the needs of our many vendor and enterprise users — Answer is an extensible project**, which can be extended through plugins and other mechanisms into many more use cases. We want Answer to interconnect with all kinds of internal enterprise tools through extensions. Today, companies run all sorts of internal tools — project management software, instant messaging, email, OA systems, and more — for internal communication. **We want Answer to integrate into enterprises' internal workflows through APIs and plugins. That's part of what we mean by making it useful and usable.**

It should be noted that Answer has only just been released — it's currently a preview version, but it lays the framework for what we're building going forward. As the saying goes, "a journey of a thousand miles begins with a single step." We hope the project will keep growing, driven by the whole open-source community.

Here you can see some screenshots of Answer's homepage. Friends familiar with SegmentFault will notice that its pages look a lot like SegmentFault's. Meanwhile, the mobile interface on the right shows the details of our mobile-adaptive design. As mentioned earlier, as part of lowering users' costs, we paid attention to many such details while building the product, so that all of its users can communicate without barriers at the lowest possible cost.

Answer is an open-source project, and we sincerely and warmly hope you'll get involved. We welcome all contributions! Whether it's filing issues, making suggestions, reporting bugs, contributing code, or simply giving us a follow — we hope you'll take part in building the project, so that together we can build an open-source community and support Answer's growth.

![](/images/posts/joyqi-coscon22-answer/img-3.png)

Here are a few URLs. At the top is Answer's homepage — very easy to remember: [**answer.dev**](http://answer.dev). Do check it out; basically all project information will be published there. Of course, it's quite basic for now, but the project documentation is already being planned and will be available there soon.

Below that is the main GitHub address for the project code. Our GitHub account is AnswerDev, matching the homepage, and the project is at [**https://github.com/answerdev/answer**](https://github.com/answerdev/answer), where you can find all of Answer's main code, along with some simple installation and deployment documentation.

Going forward, our main channel for official announcements will be the Twitter account [**@AnswerDev**](https://link.segmentfault.com/?enc=sz3nP0nqaGXN7n9UeK4qcQ%3D%3D.Cn9PsWhf9RIKqOn3zGjwD4qXp4jW0cmtgdQ1fdk6Uyo%3D). We want Answer to be an international project, so official community communications will primarily be in English — though we'll provide Chinese content as well — in the hope that Answer's voice can spread further around the world.

Finally, thanks once again to KAIYUANSHE for hosting the China Open Source Conference! If you have any questions, suggestions, or anything else you'd like to know, you can reach us through any of these channels. Thank you very much!

---

**Joyqi's contact:**  
**Email**: [joyqi@sifou.com](mailto:joyqi@sifou.com)  
**Twitter**: [@joyqi](https://twitter.com/joyqi)
