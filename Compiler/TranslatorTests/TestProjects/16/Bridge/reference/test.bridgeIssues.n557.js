﻿Bridge.assembly({ name: "TestProject", version: "0.0.0.0", compiler: "15.2.0" }, function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N557.Bridge557", {
        statics: {
            test1: function () {
                var text = document.createTextNode('');
            },
            test2: function () {
                var text = document.createTextNode("Some text");
            }
        }
    });
});
