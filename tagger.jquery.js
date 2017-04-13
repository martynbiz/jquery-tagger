$(function() {

    $.fn.tagger = function(data, options) {

        // set default options
        $.extend({
            fields: [],
            limit: 99999999,
        }, options);

        // selectors may be multiple separted by commas
        var fullSelector = $(this).selector;
        selector = fullSelector.split(",");

        for(var i=0; i<selector.length; i++) selector[i] = selector[i].trim();

        // this will be all the queries of fields and values
        var queries = [];

        var field, value;
        for(var i=0; i<options.fields.length; i++) {

            // get the field e.g. "city"
            field = options.fields[i];

            if (field && field !== "") {

                value = data[field] !== undefined ?
                    data[field].toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'') :
                    "undefined";

                queries.push('[data-tagger*="' + options.fields[i] + '-' + value + '"]');
            }
        }

        // build query by operator, AND is default
        var joinStr;
        if (options.operator === "OR") {
            for(var i=0; i<selector.length; i++)
                selector[i] = selector[i] + queries.join(", " + selector[i]);
        } else {
            for(var i=0; i<selector.length; i++)
                selector[i] = selector[i] + queries.join("");
        }

        var queryStr = selector.join(", ");
        var matches = $(queryStr);

        // we'll only re-arrange when there are matches
        if (matches.length > 0 || !options.use_default) {

            // first off, hide all...
            $(fullSelector).hide();

            // slice of matches
            matches.slice(0, options.limit).show();
        }

        console.log(queryStr);
    }
});
