# jekyll-search
Simple Jekyll search using  VUEJS and LUNRJS
- assets/js/lunr.min.js (from http://lunrjs.com/)
- assets/js/vue.min.js (from https://vuejs.org/)

Magics files:
- assets/js/data.js
- assets/js/app.js
- _includes/app.html
- _layouts/default.html

Ready to go with docker:
```
git clone https://github.com/odraghi/jekyll-search.git
sudo docker run --label jekyll -it \
   --volume=$PWD/jekyll-search:/srv/jekyll \
   --publish 4000:4000 jekyll/jekyll:latest \
   jekyll serve --watch --force_polling
```

Open your web browser on [localhost port 4000](http://localhost:4000/) 

Your can start writing your markdown post in _posts/

Don't forget Jekyll metadata (title, date, category) we search on that!
