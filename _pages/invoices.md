---
layout: default
permalink: /invoices/
description: "List of freelance invoices."
title: "Invoices"
---

<h1 class="font-bold mb-6 text-xl lg:text-2xl uppercase tracking-wider">Invoices</h1>
<ul class="flex flex-col gap-2 mb-24">
	{% for collection in site.invoices %}
		<li class=""><a href="{{ collection.url }}" class="text-blue-500">{{ collection.title }}</a></li>
	{% endfor %}
</ul>