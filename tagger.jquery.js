$(function() {

    $.fn.tagger = function(data, options) {

        // set default options
        $.extend({
            fields: [],
            limit: 99999999,
        }, options);

        var selector = $(this).selector;
        var queries = [];

        var field, value;
        for(var i=0; i<options.fields.length; i++) {

            // get the field e.g. "city"
            field = options.fields[i];

            if (field && field !== "") {

                value = data[field] !== undefined ?
                    data[field].toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'') :
                    "undefined";

                queries.push('[data-tags*="' + options.fields[i] + '-' + value + '"]');
            }
        }

        // build query by operator, AND is default
        var matches, queryStr;
        if (options.operator === "OR") {
            queryStr = selector + queries.join("," + selector);
            matches = $(queryStr);
        } else {
            queryStr = selector + queries.join("");
            matches = $(queryStr);
        }

        // we'll only re-arrange when there are matches
        if (matches.length > 0) {

            // first off, hide all...
            $(selector).hide();

            // slice of matches
            matches.slice(0, options.limit).show();
        }

        console.log(queries, queryStr);
    }
});
