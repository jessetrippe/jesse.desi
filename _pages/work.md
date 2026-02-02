---
layout: default
permalink: /work/
description: "Selected websites, designs, and apps that Jesse Trippe has designed and coded."
title: "Work"
blurb: "Some things I've built."
theme_classes: "bg-cyan-100 text-teal-900 dark:bg-cyan-900 dark:text-teal-200"
---

<section class="my-32">
	<ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mb-12">
		{% assign items = site.work_items | sort: 'order' %}
		{% for item in items %}
			<li class="">
					<a href="{{ item.url }}" class="block h-full bg-cyan-200 dark:bg-black/10 rounded-lg p-8 transform hover:scale-105 transition-transform">
						<div class="bg-cyan-300 dark:bg-cyan-400 relative h-40 overflow-hidden">
						{% assign variant = site.data.image_variants[item.featured] %}
						<img class="min-w-full min-h-full transition-all" src="/images/projects/{{ item.featured }}"{% if variant %} srcset="{{ variant.srcset }}" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"{% endif %} alt="{{ item.title }}" loading="lazy">
						</div>
						<h4 class="text-xl font-bold my-7 leading-relaxed">{{ item.title }}</h4>
						<p>{{ item.description }}</p>
				</a>
			</li>
		{% endfor %}
	</ul>
</section>
