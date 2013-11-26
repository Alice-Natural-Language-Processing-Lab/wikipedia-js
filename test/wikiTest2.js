var vows        = require("vows"),
    wikiClient  = require("../lib/wikiClient"),
    expect      = require("expect.js"),
    _           = require("underscore");

_.str = require("underscore.string");
_.mixin(_.str.exports());

vows.describe("Wikipedia search checks").addBatch({

  // html
  "When searching (in html) for Napoleon's wiki summary":{
    topic: function(){
      var options = {query: "Napoleon Bonaparte", format: "html", summaryOnly: true};
      wikiClient.searchArticle(options, this.callback);
    },

    "A valid set of paragraphs is returned": function(err, response){
      expect(err).to.be(null);
      expect(_(response).startsWith("<p><strong>Napoleon Bonaparte</strong>")).to.be(true);
//      console.log(response);
//      console.log("*************************************************************************************\n\n\n\n");
    }
  }
}).run();

