// Simulate a synchronous analytics script
(function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://example-analytics.com/collect?url=' + encodeURIComponent(location.href), false);
  xhr.send(null);
  console.log('Analytics beacon sent');
})();