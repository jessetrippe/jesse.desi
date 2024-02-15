---
layout: default
permalink: /invoices/
description: "List of freelance invoices."
title: "Invoices"
---

<h1 class="font-bold mb-6 text-xl lg:text-2xl uppercase tracking-wider">Invoices</h1>
<ul class="flex flex-col mb-24 list-decimal divide-y list-inside w-1/2 text-sm">
	{% for collection in site.invoices %}
		<li class="py-2"><a href="{{ collection.url }}" class="text-blue-500">{{ collection.title }}</a></li>
	{% endfor %}
</ul>