---
---
var data = {};
data.posts = [
  {% for post in site.posts %}
    {
      "title": "{{ post.title }}",
      "category": "{{ post.category }}",
      "date": "{{ post.date }}",
      "url": "{{ post.url }}"
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
];
