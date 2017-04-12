# Tagger jQuery Plugin

A jQuery plugin to allow custom content to be shown depending on data such as
country, city, language etc.

## Usage

Below gives an example of testimonials showing one on page load (first) before any
JavaScript is executed. The plugin will then show/hide divs based on the data provided
and the options set.

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
        fields: ["country", language],

        // This determines whether to only show when all tags match (AND) or when
        // at least one tag matches (OR). Also, matches can be inverted (NOR and NAND)
        operator: "AND"

        // This is how many to display
        limit: 1,

        // When no matches are present, show first n as default. Set to zero to
        // leave as empty when no matches found.
        default_limit: 1,
    };

    $('#testimonials > div').tagger(data, options);
});
</script>

</body>
</html>
```
