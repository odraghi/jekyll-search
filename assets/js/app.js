var app = new Vue({
  el: '#app',
  data: {
    posts: data.posts, // data is a global var initialized in data.js
    search: '',
    count: 0,
    results: [],
    found: false,
    idx: {}
  },
  created: function () {
    this.idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('category');
        this.field('date');
      });

    for (var key in this.posts) { // Add the data to lunr
        this.idx.add({
          'id': key,
          'title': this.posts[key].title,
          'category': this.posts[key].category,
          'date': this.posts[key].date
        });
    };
  },
  methods: {
    onChange: function () {
      var indexes = this.idx.search(this.search); // Get lunr to perform a search
      this.results = [];
      this.count++;
      for (var i = 0; i < indexes.length; i++) {  // Iterate over the results
          var item = this.posts[indexes[i].ref];
          this.results.push(item);
      }
      this.found = (this.results.length == 0) ? false:true;
    }
  }
});
