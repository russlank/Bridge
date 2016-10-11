﻿Bridge.assembly({ name: "TestProject", version: "0.0.0.0", compiler: "15.2.0" }, function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1537.A", {
        getProperty: function () {
            // Classes should be in the order A -> B -> C -> PlaceMeToTheEnd
            return 1;
        }
    });

    Bridge.define("Test.BridgeIssues.N1537.B", {
        inherits: [Test.BridgeIssues.N1537.A]
    });

    Bridge.define("Test.BridgeIssues.N1537.C", {
        inherits: [Test.BridgeIssues.N1537.B]
    });

    Bridge.define("Test.BridgeIssues.N1537.PlaceMeToTheEnd");
});
