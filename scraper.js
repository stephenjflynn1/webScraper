var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
request('http://chicago.craigslist.org/search/zip?hasPic=1',
	function(error, response, html){
		if(!error && response.statusCode == 200){

		var $ = cheerio.load(html);
		var allRecords = $('p.row');

		allRecords.each(function(index,element){
		var title = $(element).find('a.hdrlnk').text();
		console.log(title);
	})
}
});