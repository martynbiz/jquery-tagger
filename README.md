# Tagger jQuery Plugin

A jQuery plugin to allow custom content to be shown depending on data such as
country, city, language etc. Tags are added to data-tagger attribute and selected
elements of matching tags are displayed. Can be used, for example, to show custom
content to users based on their location, language, etc.

## Usage

Below gives an example where a single elements is shown on load without any javascript.
When the tagger plugin is run, it will show only those elements that match the provided
data. If no matches are found, it will not show/hide any.

```html
<html>
<head>
    <style>
    #testimonials > div {
        display: none;
    }
    #testimonials > div:first-child {
        display: block;
    }
    </style>
</head>

<body>
    <div id="testimonials">
        <div data-tagger="">
            <blockquote>Default</blockquote>
        </div>
        <div data-tagger="language-en-gb,country-uk">
            <blockquote>Blockquote 1</blockquote>
        </div>
        <div data-tagger="language-en-gb,country-france">
            <blockquote>Blockquote 2</blockquote>
        </div>
    </div>

    <script>
    $(function() {

        // for test puposes
        var data = {
            country: "UK",
            language: "en-GB",
            city: "Glasgow"
        };

        var options = {

            // these are the fields to query on. The two fields here used in combination
            // with the data will look for 'country-uk' and 'language-en-gb', but city
            // will not be queried as it is not included here
            fields: ["country", "language"],

            // This determines whether to only show when all tags match (AND) or when
            // at least one tag matches (OR).
            operator: "AND"

            // This is how many to display
            limit: 1,

            // when set to true, it will leave the elements as they are if a match
            // is not made. if false, the plugin will hide all elements when no match
            // is made
            use_default: true
        };

        $('#testimonials > div').tagger(data, options);
    });
    </script>
</body>
</html>
```

## Location data example

Below is an example of location data and language data being loaded into the plugin:

```javascript
$(function() {

    var response = {
        language: window.navigator.userLanguage || window.navigator.language
    };

    // get client data from ipinfo.io
    $.get("https://ipinfo.io", function(data) {
        Object.assign(response, data);

        $("#testimonials > div").tagger({
            fields: ["country", "city"],
            operator: "AND",
            limit: 3
        });
    }, "jsonp");
});
```

## Tests

Some qunit tests have been written and can be found in tests/ dir.
