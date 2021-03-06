$(function() {

    function setup() {
        $("#testimonials > div").hide();
    }

    QUnit.test( "One field match", function( assert ) {

        setup();

        var data = {
            "country": "GB"
        };

        var options = {
            fields: ["country"]
        };

        $("#testimonials > div").tagger(data, options);

        // assertions
        assert.ok( $("#testimonials > div:visible").length === 2, "Passed!" );
    });

    QUnit.test( "Two field AND match", function( assert ) {

        setup();

        var data = {
            country: "GB",
            city: "Stirling"
        };

        var options = {
            fields: ["country", "city"],
            operator: "AND"
        };

        $("#testimonials > div").tagger(data, options);

        // assertions
        assert.ok( $("#testimonials > div:visible").length === 1, "Passed!" );
    });

    QUnit.test( "Two field OR match", function( assert ) {

        setup();

        var data = {
            country: "GB",
            language: "ja"
        };

        var options = {
            fields: ["country", "language"],
            operator: "OR"
        };

        $("#testimonials > div").tagger(data, options);

        // assertions
        assert.ok( $("#testimonials > div:visible").length === 3, "Passed!" );
    });

    QUnit.test( "Test limit", function( assert ) {

        setup();

        var data = {
            country: "GB",
            language: "ja"
        };

        var options = {
            fields: ["country", "language"],
            operator: "OR",
            limit: 1
        };

        $("#testimonials > div").tagger(data, options);

        // assertions
        assert.ok( $("#testimonials > div:visible").length === 1, "Passed!" );
    });

    QUnit.test( "Test when undefined", function( assert ) {

        setup();

        var data = {
            country: "GB",
            language: "ja"
        };

        var options = {
            fields: ["idontexist"]
        };

        $("#testimonials > div").tagger(data, options);

        // assertions
        assert.ok( $("#testimonials > div:visible").length === 0, "Passed!" );
    });

    QUnit.test( "Test use_default=false hides all", function( assert ) {

        setup();

        // will show the first elements as a default element
        // this is so that we can ensure that the use_default setting has hidden it
        $("#testimonials > div").first().show();

        var data = {
            country: "GB",
            language: "ja"
        };

        var options = {
            fields: ["idontexist"],
            use_default: true // this will ensure all are hidden
        };

        $("#testimonials > div").tagger(data, options);

        // assertions
        assert.ok( $("#testimonials > div:visible").length === 1, "Passed!" );
    });
})
