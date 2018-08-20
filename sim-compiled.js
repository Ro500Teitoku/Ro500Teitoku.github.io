(function() {
    var k, aa = this;

    function da() {
        Symbol = aa.Symbol || {};
        Symbol.iterator || (Symbol.iterator = "$jscomp$iterator");
        da = function() {}
    }

    function ea(a) {
        da();
        if (a[Symbol.iterator]) return a[Symbol.iterator]();
        if (!(a instanceof Array) && "string" != typeof a) throw Error();
        var b = 0;
        return {
            next: function() {
                return b == a.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: a[b++]
                }
            }
        }
    }
    var fa = fa || {},
        l = this;

    function ga() {}

    function ha(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ia(a) {
        return "array" == ha(a)
    }

    function ja(a) {
        var b = ha(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function r(a) {
        return "string" == typeof a
    }

    function ka(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var la = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ma = 0;

    function na(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function oa(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function u(a, b, c) {
        u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
        return u.apply(null, arguments)
    }

    function v(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var x = Date.now || function() {
        return +new Date
    };

    function y(a, b) {
        var c = a.split("."),
            d = l;
        c[0] in d || !d.execScript || d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());) c.length || void 0 === b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
    }

    function A(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ra = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.vb = function(a, c, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[c].apply(a, g)
        }
    };
    var pa = [{
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 0,
            mindef: 2,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30d8\u30c3\u30c9",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 0,
            mindef: 2,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d8\u30c3\u30c9",
            skills: {
                "\u63a1\u96c6\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2,
                2, 0, 0, 0
            ],
            part: 0,
            mindef: 6,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30d8\u30eb\u30e0",
            skills: {
                "\u5c0e\u87f2\u53cd\u5fdc\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 0,
            mindef: 6,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30d8\u30eb\u30e0",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 0,
            mindef: 8,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30d8\u30eb\u30e0",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 0,
            mindef: 8,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30d8\u30eb\u30e0",
            skills: {
                "\u65e9\u98df\u3044": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 0,
            mindef: 10,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30d8\u30eb\u30e0",
            skills: {
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 66,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, -2, -2, 1],
            part: 0,
            mindef: 8,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30d8\u30eb\u30e0",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 0,
            mindef: 12,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30d8\u30eb\u30e0",
            skills: {
                "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 0,
            mindef: 14,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30d8\u30eb\u30e0",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 0,
            mindef: 14,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30d8\u30eb\u30e0",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 0,
            mindef: 16,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30d8\u30eb\u30e0",
            skills: {
                "\u4f53\u8853": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 0,
            mindef: 18,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30d8\u30eb\u30e0",
            skills: {
                "\u6c37\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 22,
            slots: 0,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30c6\u30b9\u30bf",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30e1\u30eb\u30c6\u30b9\u30bf",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, -3, 0],
            part: 0,
            mindef: 22,
            slots: 0,
            name: "\u30b7\u30e3\u30e0\u30b4\u30fc\u30b0\u30eb",
            skills: {
                "\u611f\u77e5": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 0,
            mindef: 18,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30d8\u30eb\u30e0",
            skills: {
                "\u3053\u3084\u3057\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 0,
            mindef: 20,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30d8\u30eb\u30e0",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u529b": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 0,
            mindef: 22,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30d8\u30eb\u30e0",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3,
                -2, 0
            ],
            part: 0,
            mindef: 18,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30d8\u30eb\u30e0",
            skills: {
                "\u9583\u5149\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 0,
            mindef: 20,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30d8\u30eb\u30e0",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 0,
            mindef: 20,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30d8\u30eb\u30e0",
            skills: {
                "\u7b1b\u5439\u304d\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 0,
            mindef: 24,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30d8\u30eb\u30e0",
            skills: {
                "\uff2b\uff2f\u8853": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 0,
            mindef: 28,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30d8\u30eb\u30e0",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 0,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30b9\u30ae\u30a2\u30b2\u30d2\u30eb",
            skills: {
                "\u6b7b\u4e2d\u306b\u6d3b": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 0,
            mindef: 28,
            slots: 0,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30ed\u30dd\u30b9",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 0,
            mindef: 30,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30d8\u30eb\u30e0",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u6075": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 0,
            mindef: 30,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30d8\u30eb\u30e0",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 1,
                "\u60e8\u722a\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 0,
            mindef: 30,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30d8\u30eb\u30e0",
            skills: {
                "\u653b\u6483": 1,
                "\u706b\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 0,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30d8\u30eb\u30e0",
            skills: {
                "\u629c\u5200\u8853\u3010\u6280\u3011": 1,
                "\u89d2\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 0,
            mindef: 34,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30db\u30fc\u30f3",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1,
                "\u5e7b\u7363\u306e\u6069\u6075": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 0,
            mindef: 18,
            slots: 0,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30d8\u30c3\u30c9",
            skills: {
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 0,
            mindef: 22,
            slots: 0,
            name: "\u30c0\u30a4\u30d0\u30fc\u30b7\u30e5\u30ce",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30aa\u30e0\u30c6\u30b9\u30bf",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 22,
            slots: 0,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30c6\u30b9\u30bf",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 0,
            mindef: 32,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30d8\u30c3\u30c9\u03b1",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 0,
            mindef: 32,
            slots: 1,
            name: "\u30ec\u30b6\u30fc\u30d8\u30c3\u30c9\u03b2",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 0,
            mindef: 32,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d8\u30c3\u30c9\u03b1",
            skills: {
                "\u63a1\u96c6\u306e\u9054\u4eba": 1,
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 0,
            mindef: 32,
            slots: 1,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d8\u30c3\u30c9\u03b2",
            skills: {
                "\u63a1\u96c6\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 0,
            mindef: 36,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u7814\u7a76\u8005": 1,
                "\u5c0e\u87f2\u53cd\u5fdc\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 0,
            mindef: 36,
            slots: 1,
            name: "\u30cf\u30f3\u30bf\u30fc\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u5c0e\u87f2\u53cd\u5fdc\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 0,
            mindef: 36,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 1,
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 0,
            mindef: 36,
            slots: 1,
            name: "\u30dc\u30fc\u30f3\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 0,
            mindef: 36,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u9632\u5fa1": 1,
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1,
                0, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 0,
            mindef: 36,
            slots: 1,
            name: "\u30a2\u30ed\u30a4\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 42,
            slots: 0,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30c6\u30b9\u30bf\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2,
                "\u690d\u751f\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 42,
            slots: 1,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30c6\u30b9\u30bf\u03b2",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 42,
            slots: 0,
            name: "\u30d1\u30d4\u30e1\u30eb\u30c6\u30b9\u30bf\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2,
                "\u690d\u751f\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30e1\u30eb\u30c6\u30b9\u30bf\u03b2",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 0,
            mindef: 38,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 1,
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 0,
            mindef: 38,
            slots: 1,
            name: "\u30e9\u30f3\u30b4\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 0,
            mindef: 38,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u3053\u3084\u3057\u540d\u4eba": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 0,
            mindef: 38,
            slots: 1,
            name: "\u30bf\u30ed\u30b9\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u3053\u3084\u3057\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 0,
            mindef: 40,
            slots: 0,
            name: "\u30e2\u30b9\u30d5\u30a7\u30a4\u30af\u03b1",
            skills: {
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, -3, 0],
            part: 0,
            mindef: 40,
            slots: 0,
            name: "\u30b7\u30e3\u30e0\u30b4\u30fc\u30b0\u30eb\u03b1",
            skills: {
                "\u5730\u8cea\u5b66": 1,
                "\u611f\u77e5": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, -3, 0],
            part: 0,
            mindef: 40,
            slots: 1,
            name: "\u30b7\u30e3\u30e0\u30b4\u30fc\u30b0\u30eb\u03b2",
            skills: {
                "\u611f\u77e5": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 0,
            mindef: 40,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u65e9\u98df\u3044": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 0,
            mindef: 40,
            slots: 1,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u65e9\u98df\u3044": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 0,
            mindef: 40,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 1,
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 0,
            mindef: 40,
            slots: 2,
            name: "\u30af\u30eb\u30eb\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 0,
            mindef: 40,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1,
                "\u9583\u5149\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 0,
            mindef: 40,
            slots: 1,
            name: "\u30c4\u30a3\u30c4\u30a3\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u9583\u5149\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 0,
            mindef: 40,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1,
                "\u7b1b\u5439\u304d\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 0,
            mindef: 40,
            slots: 1,
            name: "\u30ae\u30eb\u30aa\u30b9\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u7b1b\u5439\u304d\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 0,
            mindef: 42,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 0,
            mindef: 42,
            slots: 2,
            name: "\u30d7\u30b1\u30d7\u30b1\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 0,
            mindef: 42,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 0,
            mindef: 42,
            slots: 1,
            name: "\u30dc\u30ed\u30b9\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 0,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 0,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e3\u30ca\u30d5\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 0,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 0,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e5\u30e9\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 0,
            mindef: 44,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u4f53\u8853": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3,
                0, 0
            ],
            part: 0,
            mindef: 44,
            slots: 1,
            name: "\u30ab\u30ac\u30c1\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u4f53\u8853": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 0,
            mindef: 44,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 0,
            mindef: 44,
            slots: 1,
            name: "\u30a6\u30eb\u30e0\u30fc\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 0,
            mindef: 46,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1,
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 0,
            mindef: 46,
            slots: 1,
            name: "\u30ec\u30a4\u30a2\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1,
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 0,
            mindef: 52,
            slots: 0,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1,
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1,
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 0,
            mindef: 52,
            slots: 1,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1,
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 0,
            mindef: 46,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u8010\u9707": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 0,
            mindef: 46,
            slots: 1,
            name: "\u30d0\u30eb\u30ad\u30f3\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u8010\u9707": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, 0, 0, 0],
            part: 0,
            mindef: 48,
            slots: 0,
            name: "\u30ac\u30b9\u30c8\u30db\u30fc\u30f3\u03b1",
            skills: {
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 1,
                "\u3072\u308b\u307f\u8efd\u6e1b": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, 0, 0, 0],
            part: 0,
            mindef: 48,
            slots: 1,
            name: "\u30ac\u30b9\u30c8\u30db\u30fc\u30f3\u03b2",
            skills: {
                "\u3072\u308b\u307f\u8efd\u6e1b": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 0,
            mindef: 48,
            slots: 0,
            name: "\u30ac\u30de\u30eb\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 0,
            mindef: 48,
            slots: 1,
            name: "\u30ac\u30de\u30eb\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4,
                -3, -1, -2, -3
            ],
            part: 0,
            mindef: 44,
            slots: 0,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30d8\u30c3\u30c9\u03b1",
            skills: {
                "\u5320": 1,
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1,
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 0,
            mindef: 44,
            slots: 1,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30d8\u30c3\u30c9\u03b2",
            skills: {
                "\u5320": 1,
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 0,
            mindef: 50,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u6c37\u8010\u6027": 2,
                "\u8033\u6813": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 0,
            mindef: 50,
            slots: 1,
            name: "\u30cf\u30a4\u30e1\u30bf\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u6c37\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 0,
            mindef: 50,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 0,
            mindef: 50,
            slots: 1,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 0,
            mindef: 52,
            slots: 0,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30ed\u30dd\u30b9\u03b1",
            skills: {
                "\u7b1b\u5439\u304d\u540d\u4eba": 1,
                "\u56de\u5fa9\u901f\u5ea6": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 0,
            mindef: 52,
            slots: 1,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30ed\u30dd\u30b9\u03b2",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 0,
            mindef: 56,
            slots: 0,
            name: "\u30a2\u30a4\u30eb\u30fc\u30d5\u30a7\u30a4\u30af\u03b1",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 3
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 0,
            mindef: 56,
            slots: 1,
            name: "\u77e5\u7565\u306e\u773c\u93e1\u03b1",
            skills: {
                "\u898b\u5207\u308a": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 0,
            mindef: 56,
            slots: 0,
            name: "\u30e9\u30f4\u30a1\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 0,
            mindef: 56,
            slots: 2,
            name: "\u30e9\u30f4\u30a1\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u7d0d\u5200\u8853": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 0,
            mindef: 54,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2
            },
            type: 3
        },
        {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 0,
            mindef: 54,
            slots: 1,
            name: "\u30ae\u30a8\u30ca\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 0,
            mindef: 54,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 2,
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1,
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 0,
            mindef: 54,
            slots: 1,
            name: "\u30ac\u30ed\u30f3\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 2,
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 0,
            mindef: 54,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u653b\u6483": 2,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 0,
            mindef: 54,
            slots: 1,
            name: "\u30ec\u30a6\u30b9\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u653b\u6483": 2,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 0,
            mindef: 56,
            slots: 0,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u5a01\u5687": 2,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 0,
            mindef: 56,
            slots: 2,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 0,
            mindef: 54,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u629c\u5200\u8853\u3010\u6280\u3011": 2,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u4e8b\u5834\u529b": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 0,
            mindef: 54,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u629c\u5200\u8853\u3010\u6280\u3011": 2,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 0,
            mindef: 56,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u96c6\u4e2d": 2,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 0,
            mindef: 56,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u96c6\u4e2d": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 0,
            mindef: 60,
            slots: 1,
            name: "\u30ac\u30f3\u30ad\u30f3\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1,
                "\u96f7\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 0,
            mindef: 60,
            slots: 2,
            name: "\u30ac\u30f3\u30ad\u30f3\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1,
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 0,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30bc\u30eb\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u8033\u6813": 2,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1,
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 0,
            mindef: 58,
            slots: 2,
            name: "\u30d0\u30bc\u30eb\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u8033\u6813": 2,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 0,
            mindef: 60,
            slots: 1,
            name: "\u30c0\u30de\u30b9\u30af\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u9632\u5fa1": 2,
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 0,
            mindef: 60,
            slots: 1,
            name: "\u30c0\u30de\u30b9\u30af\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u9632\u5fa1": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 0,
            mindef: 60,
            slots: 0,
            name: "\u30c9\u30fc\u30d9\u30eb\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u9f8d\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1,
                0, 0
            ],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 0,
            mindef: 60,
            slots: 1,
            name: "\u30c9\u30fc\u30d9\u30eb\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 0,
            mindef: 62,
            slots: 1,
            name: "\u30c7\u30b9\u30ae\u30a2\u30b2\u30d2\u30eb\u03b1",
            skills: {
                "\u898b\u5207\u308a": 1,
                "\u6b7b\u4e2d\u306b\u6d3b": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 0,
            mindef: 62,
            slots: 1,
            name: "\u30c7\u30b9\u30ae\u30a2\u30b2\u30d2\u30eb\u03b2",
            skills: {
                "\u6b7b\u4e2d\u306b\u6d3b": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, -1, -1, 2],
            part: 0,
            mindef: 64,
            slots: 1,
            name: "\u30b9\u30ab\u30eb\u30d5\u30a7\u30a4\u30b9\u03b1",
            skills: {
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 0,
            mindef: 64,
            slots: 1,
            name: "\u30aa\u30fc\u30b0\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u653b\u6483": 1,
                "\u6e3e\u8eab": 2,
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 0,
            mindef: 64,
            slots: 2,
            name: "\u30aa\u30fc\u30b0\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u6e3e\u8eab": 2,
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 0,
            mindef: 64,
            slots: 0,
            name: "\u30ab\u30a4\u30b6\u30fc\u30af\u30e9\u30a6\u30f3\u03b1",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u529b\u306e\u89e3\u653e": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 0,
            mindef: 64,
            slots: 1,
            name: "\u30ab\u30a4\u30b6\u30fc\u30af\u30e9\u30a6\u30f3\u03b2",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u529b\u306e\u89e3\u653e": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 0,
            mindef: 64,
            slots: 0,
            name: "\u30af\u30b7\u30e3\u30ca\u30a2\u30f3\u30af\u03b1",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u5320": 1,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 0,
            mindef: 64,
            slots: 3,
            name: "\u30af\u30b7\u30e3\u30ca\u30a2\u30f3\u30af\u03b2",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 0,
            mindef: 64,
            slots: 0,
            name: "\u30a6\u30eb\u30ba\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 0,
            mindef: 64,
            slots: 1,
            name: "\u30a6\u30eb\u30ba\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 0,
            mindef: 64,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30db\u30fc\u30f3\u03b1",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 0,
            mindef: 64,
            slots: 1,
            name: "\u30ad\u30ea\u30f3\u30db\u30fc\u30f3\u03b2",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 0,
            mindef: 72,
            slots: 1,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30d8\u30c3\u30c9\u03b1",
            skills: {
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1,
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1,
                "\u3072\u308b\u307f\u8efd\u6e1b": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 0,
            mindef: 72,
            slots: 1,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30d8\u30c3\u30c9\u03b2",
            skills: {
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1,
                "\u3072\u308b\u307f\u8efd\u6e1b": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 0,
            mindef: 62,
            slots: 1,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30a2\u30af\u30bb\u03b1",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2,
                "\u96f7\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 0,
            mindef: 62,
            slots: 3,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30a2\u30af\u30bb\u03b2",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 0,
            mindef: 70,
            slots: 1,
            name: "\u7adc\u738b\u306e\u96bb\u773c\u03b1",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 2
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 0,
            mindef: 70,
            slots: 1,
            name: "\u30b7\u30fc\u30ab\u30fc\u30d8\u30c3\u30c9\u03b1",
            skills: {
                "\u63a1\u96c6\u306e\u9054\u4eba": 1,
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1,
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 0,
            mindef: 70,
            slots: 1,
            name: "\u30b7\u30fc\u30ab\u30fc\u30d8\u30c3\u30c9\u03b2",
            skills: {
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1,
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 0,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30f3\u30ae\u30b9\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u7834\u58ca\u738b": 1,
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 1,
                0
            ],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 0,
            mindef: 58,
            slots: 2,
            name: "\u30d0\u30f3\u30ae\u30b9\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u7834\u58ca\u738b": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 0,
            mindef: 72,
            slots: 1,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30d8\u30eb\u30e0\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u6311\u6226\u8005": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 0,
            mindef: 72,
            slots: 2,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30d8\u30eb\u30e0\u03b2",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u6311\u6226\u8005": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 0,
            mindef: 40,
            slots: 2,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30d8\u30c3\u30c9\u03b1",
            skills: {
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 0,
            mindef: 46,
            slots: 1,
            name: "\u30c0\u30a4\u30d0\u30fc\u30b7\u30e5\u30ce\u03b1",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30aa\u30e0\u30c6\u30b9\u30bf\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2,
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30aa\u30e0\u30c6\u30b9\u30bf\u03b2",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 42,
            slots: 1,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30c6\u30b9\u30bf\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2,
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 0,
            mindef: 42,
            slots: 1,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30c6\u30b9\u30bf\u03b2",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 0,
            mindef: 72,
            slots: 1,
            name: "\u30a6\u30eb\u30ba\u30d8\u30eb\u30e0\u03b3",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 2,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 0,
            mindef: 72,
            slots: 1,
            name: "\u30ad\u30ea\u30f3\u30db\u30fc\u30f3\u03b3",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 3,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 2, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 0,
            mindef: 72,
            slots: 2,
            name: "\u30ab\u30a4\u30b6\u30fc\u30af\u30e9\u30a6\u30f3\u03b3",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u898b\u5207\u308a": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [0, -2, -3, 4, -2],
            part: 0,
            mindef: 72,
            slots: 1,
            name: "\u30af\u30b7\u30e3\u30ca\u30a2\u30f3\u30af\u03b3",
            skills: {
                "\u5320": 2,
				"\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 3],
            part: 0,
            mindef: 56,
            slots: 1,
            name: "\u84bc\u661f\u30ce\u5c06\u3010\u515c\u3011\u03b1",
            skills: {
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u6311\u6226\u8005": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 3, -3, 3],
            part: 0,
            mindef: 64,
            slots: 1,
            name: "\u30c0\u30f3\u30c6\u30a6\u30a3\u30c3\u30b0\u03b1",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 1,
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 0,
            mindef: 70,
            slots: 2,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30bb\u30af\u30bf\u30fc\u03b1",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 2,
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1,
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [3, 2, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 0,
            mindef: 70,
            slots: 2,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30bb\u30af\u30bf\u30fc\u03b2",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 2,
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-2, -2, 3, -2, 4],
            part: 0,
            mindef: 72,
            slots: 2,
            name: "\u30c9\u30e9\u30b1\u30f3\u30a2\u30fc\u30e1\u30c3\u30c8\u03b1",
            skills: {
                "\u98db\u71d5": 1,
                "\u7adc\u9a0e\u58eb\u306e\u8a3c": 1,
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 0, 2, 0],
            part: 0,
            mindef: 46,
            slots: 2,
            name: "\u5c01\u5370\u306e\u773c\u5e2f\u03b1",
            skills: {
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, 0, 4, 2, 0],
            part: 0,
            mindef: 46,
            slots: 3,
            name: "\u30b7\u30e3\u30c9\u30a6\u30a2\u30a4\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 3, 2],
            part: 0,
            mindef: 46,
            slots: 2,
            name: "\u30af\u30eb\u30eb\u30d5\u30a7\u30a4\u30af\u03b1",
            skills: {
                "\u904b\u642c\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 4, 0, 0, 4],
            part: 0,
            mindef: 46,
            slots: 2,
            name: "\u30e6\u30e9\u30e6\u30e9\u30d5\u30a7\u30a4\u30af\u03b1",
            skills: {
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 0,
            mindef: 32,
            slots: 0,
            name: "\u7206\u7815\u306e\u7fbd\u6839\u98fe\u308a",
            skills: {
                "\u30dc\u30de\u30fc": 3
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 0,
            mindef: 60,
            slots: 0,
            name: "\u9f8d\u5c01\u3058\u306e\u30d4\u30a2\u30b9\u03b1",
            skills: {
                "\u9f8d\u5c01\u529b\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 0,
            mindef: 6,
            slots: 0,
            name: "\u30aa\u30ea\u30b8\u30f3\u30d8\u30eb\u30e0",
            skills: {
                "\u63a2\u7d22\u8005\u306e\u5e78\u904b": 1
            },
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 1,
            mindef: 2,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30d9\u30b9\u30c8",
            skills: {},
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 1,
            mindef: 2,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d9\u30b9\u30c8",
            skills: {},
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 1,
            mindef: 6,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30e1\u30a4\u30eb",
            skills: {
                "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 1,
            mindef: 6,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30e1\u30a4\u30eb",
            skills: {
                "\u653b\u6483": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 1,
            mindef: 8,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30e1\u30a4\u30eb",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 1,
            mindef: 8,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30e1\u30a4\u30eb",
            skills: {
                "\u5a01\u5687": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 1,
            mindef: 10,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30e1\u30a4\u30eb",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 66,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, -2, -2, 1],
            part: 1,
            mindef: 8,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30e1\u30a4\u30eb",
            skills: {
                "\u6c34\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 1,
            mindef: 12,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30e1\u30a4\u30eb",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 1,
            mindef: 14,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30e1\u30a4\u30eb",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 1,
            mindef: 14,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30e1\u30a4\u30eb",
            skills: {
                "\u6ce5\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 1,
            mindef: 16,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30e1\u30a4\u30eb",
            skills: {
                "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 1,
            mindef: 18,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30e1\u30a4\u30eb",
            skills: {
                "\u8033\u6813": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 22,
            slots: 0,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30da\u30c3\u30c8",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0,
                2
            ],
            part: 1,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30e1\u30eb\u30da\u30c3\u30c8",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 1,
            mindef: 18,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30e1\u30a4\u30eb",
            skills: {
                "\u7634\u6c17\u74b0\u5883\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 1,
            mindef: 20,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30e1\u30a4\u30eb",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u529b": 1,
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 1,
            mindef: 22,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30e1\u30a4\u30eb",
            skills: {
                "\u690d\u751f\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 1,
            mindef: 18,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30e1\u30a4\u30eb",
            skills: {
                "\u4f53\u8853": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 1,
            mindef: 20,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30e1\u30a4\u30eb",
            skills: {
                "\u4e57\u308a\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 1,
            mindef: 20,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30e1\u30a4\u30eb",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 1,
            mindef: 24,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30e1\u30a4\u30eb",
            skills: {
                "\u7761\u7720\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 1,
            mindef: 28,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30e1\u30a4\u30eb",
            skills: {
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 1,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30b9\u30ae\u30a2\u30e0\u30b9\u30b1\u30eb",
            skills: {
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 1,
            mindef: 28,
            slots: 0,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30b9\u30fc\u30c4",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 1,
            mindef: 30,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30e1\u30a4\u30eb",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u6075": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3,
                0
            ],
            part: 1,
            mindef: 30,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30e1\u30a4\u30eb",
            skills: {
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1,
                "\u60e8\u722a\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 1,
            mindef: 30,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30e1\u30a4\u30eb",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 1,
                "\u706b\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 1,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30e1\u30a4\u30eb",
            skills: {
                "\uff2b\uff2f\u8853": 1,
                "\u89d2\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 1,
            mindef: 34,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30d9\u30b9\u30c8",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u6075": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 1,
            mindef: 18,
            slots: 0,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30d9\u30b9\u30c8",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 1,
            mindef: 22,
            slots: 0,
            name: "\u30c0\u30a4\u30d0\u30fc\u30b9\u30fc\u30c4",
            skills: {
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30aa\u30e0\u30da\u30c3\u30c8",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 22,
            slots: 0,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30da\u30c3\u30c8",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 1,
            mindef: 32,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30d9\u30b9\u30c8\u03b1",
            skills: {
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 1,
            mindef: 32,
            slots: 1,
            name: "\u30ec\u30b6\u30fc\u30d9\u30b9\u30c8\u03b2",
            skills: {},
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 1,
            mindef: 32,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d9\u30b9\u30c8\u03b1",
            skills: {
                "\u6c34\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 1,
            mindef: 32,
            slots: 1,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d9\u30b9\u30c8\u03b2",
            skills: {},
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 1,
            mindef: 36,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 2
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 1,
            mindef: 36,
            slots: 1,
            name: "\u30cf\u30f3\u30bf\u30fc\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 1,
            mindef: 36,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u653b\u6483": 2
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 1,
            mindef: 36,
            slots: 1,
            name: "\u30dc\u30fc\u30f3\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u653b\u6483": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 1,
            mindef: 36,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u6c34\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 1,
            mindef: 36,
            slots: 1,
            name: "\u30a2\u30ed\u30a4\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u6c34\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 42,
            slots: 0,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30da\u30c3\u30c8\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 2,
                "\u690d\u751f\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 42,
            slots: 1,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30da\u30c3\u30c8\u03b2",
            skills: {
                "\u7d0d\u5200\u8853": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 42,
            slots: 0,
            name: "\u30d1\u30d4\u30e1\u30eb\u30da\u30c3\u30c8\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 2,
                "\u690d\u751f\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30e1\u30eb\u30da\u30c3\u30c8\u03b2",
            skills: {
                "\u7d0d\u5200\u8853": 2
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 1,
            mindef: 38,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u98a8\u5727\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 1,
            mindef: 38,
            slots: 1,
            name: "\u30e9\u30f3\u30b4\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 1,
            mindef: 38,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u7634\u6c17\u74b0\u5883\u9069\u5fdc": 1,
                "\u8179\u6e1b\u308a\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 1,
            mindef: 38,
            slots: 1,
            name: "\u30bf\u30ed\u30b9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u7634\u6c17\u74b0\u5883\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 1,
            mindef: 40,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u5a01\u5687": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 1,
            mindef: 40,
            slots: 1,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u5a01\u5687": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 1,
            mindef: 40,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u898b\u5207\u308a": 1,
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 1,
            mindef: 40,
            slots: 1,
            name: "\u30af\u30eb\u30eb\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 1,
            mindef: 40,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u4f53\u8853": 1,
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 1,
            mindef: 40,
            slots: 2,
            name: "\u30c4\u30a3\u30c4\u30a3\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u4f53\u8853": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 1,
            mindef: 40,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 2
            },
            type: 3
        },
        {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 1,
            mindef: 40,
            slots: 1,
            name: "\u30ae\u30eb\u30aa\u30b9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 1,
            mindef: 42,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u690d\u751f\u5b66": 1,
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1,
                0, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 1,
            mindef: 42,
            slots: 1,
            name: "\u30d7\u30b1\u30d7\u30b1\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 1,
            mindef: 42,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 1,
            mindef: 42,
            slots: 1,
            name: "\u30dc\u30ed\u30b9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 1,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u30e9\u30f3\u30ca\u30fc": 1,
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 1,
            mindef: 44,
            slots: 2,
            name: "\u30b8\u30e3\u30ca\u30d5\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 1,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u6ce5\u8010\u6027": 1,
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 1,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e5\u30e9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u6ce5\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 1,
            mindef: 44,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba": 1,
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3,
                0, 0
            ],
            part: 1,
            mindef: 44,
            slots: 1,
            name: "\u30ab\u30ac\u30c1\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 1,
            mindef: 44,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u7832\u8853": 1,
                "\u4e57\u308a\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 1,
            mindef: 44,
            slots: 1,
            name: "\u30a6\u30eb\u30e0\u30fc\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u4e57\u308a\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 1,
            mindef: 46,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u690d\u751f\u5b66": 2,
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 1,
            mindef: 46,
            slots: 1,
            name: "\u30ec\u30a4\u30a2\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u690d\u751f\u5b66": 1,
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 1,
            mindef: 52,
            slots: 0,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u6574\u5099": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 1,
            mindef: 52,
            slots: 2,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 1,
            mindef: 46,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 1,
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 1,
            mindef: 46,
            slots: 1,
            name: "\u30d0\u30eb\u30ad\u30f3\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 0, 1, -2],
            part: 1,
            mindef: 48,
            slots: 0,
            name: "\u30d0\u30eb\u30ce\u30b9\u30de\u30f3\u30c8\u03b1",
            skills: {
                "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027": 1,
                "\u71b1\u30c0\u30e1\u30fc\u30b8\u7121\u52b9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 0, 1, -2],
            part: 1,
            mindef: 48,
            slots: 1,
            name: "\u30d0\u30eb\u30ce\u30b9\u30de\u30f3\u30c8\u03b2",
            skills: {
                "\u71b1\u30c0\u30e1\u30fc\u30b8\u7121\u52b9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 1,
            mindef: 48,
            slots: 0,
            name: "\u30ac\u30de\u30eb\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 1,
            mindef: 48,
            slots: 1,
            name: "\u30ac\u30de\u30eb\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 1,
            mindef: 44,
            slots: 0,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30cf\u30a4\u30c9\u03b1",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1,
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 2,
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 1,
            mindef: 44,
            slots: 1,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30cf\u30a4\u30c9\u03b2",
            skills: {
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 2,
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 1,
            mindef: 50,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u8033\u6813": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 1,
            mindef: 50,
            slots: 1,
            name: "\u30cf\u30a4\u30e1\u30bf\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u8033\u6813": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 1,
            mindef: 50,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u96f7\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 1,
            mindef: 50,
            slots: 1,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 1,
            mindef: 52,
            slots: 1,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30b9\u30fc\u30c4\u03b1",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 2, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 1,
            mindef: 52,
            slots: 2,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30b9\u30fc\u30c4\u03b2",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 1,
            mindef: 56,
            slots: 0,
            name: "\u30e9\u30f4\u30a1\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u71b1\u30c0\u30e1\u30fc\u30b8\u7121\u52b9": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 1,
            mindef: 56,
            slots: 2,
            name: "\u30e9\u30f4\u30a1\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 1,
            mindef: 54,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2,
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 1,
            mindef: 54,
            slots: 1,
            name: "\u30ae\u30a8\u30ca\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2,
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2,
                2, -2, -3, 0
            ],
            part: 1,
            mindef: 54,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 1,
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1,
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 1,
            mindef: 54,
            slots: 1,
            name: "\u30ac\u30ed\u30f3\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1,
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 1,
            mindef: 54,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 2,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 1,
            mindef: 54,
            slots: 1,
            name: "\u30ec\u30a6\u30b9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 2,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 1,
            mindef: 56,
            slots: 1,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u5a01\u5687": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 1,
            mindef: 56,
            slots: 1,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 1,
            mindef: 54,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\uff2b\uff2f\u8853": 2,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u4e8b\u5834\u529b": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 1,
            mindef: 54,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\uff2b\uff2f\u8853": 2,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 1,
            mindef: 56,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u9006\u6068\u307f": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 1,
            mindef: 56,
            slots: 2,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u9006\u6068\u307f": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 1,
            mindef: 60,
            slots: 1,
            name: "\u30ac\u30f3\u30ad\u30f3\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u7834\u58ca\u738b": 2,
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 1,
            mindef: 60,
            slots: 1,
            name: "\u30ac\u30f3\u30ad\u30f3\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u7834\u58ca\u738b": 1,
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 1,
            mindef: 58,
            slots: 0,
            name: "\u30d0\u30bc\u30eb\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 2,
                "\u30ac\u30fc\u30c9\u6027\u80fd": 2,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 1,
            mindef: 58,
            slots: 2,
            name: "\u30d0\u30bc\u30eb\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 2,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 1,
            mindef: 60,
            slots: 1,
            name: "\u30c0\u30de\u30b9\u30af\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u9632\u5fa1": 2,
                "\u96c6\u4e2d": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 1,
            mindef: 60,
            slots: 3,
            name: "\u30c0\u30de\u30b9\u30af\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u96c6\u4e2d": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 1,
            mindef: 60,
            slots: 1,
            name: "\u30c9\u30fc\u30d9\u30eb\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u653b\u6483": 2,
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 1,
            mindef: 60,
            slots: 1,
            name: "\u30c9\u30fc\u30d9\u30eb\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u653b\u6483": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 1,
            mindef: 62,
            slots: 0,
            name: "\u30c7\u30b9\u30ae\u30a2\u30e0\u30b9\u30b1\u30eb\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 1,
            mindef: 62,
            slots: 1,
            name: "\u30c7\u30b9\u30ae\u30a2\u30e0\u30b9\u30b1\u30eb\u03b2",
            skills: {
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1,
                1, -3, 1, -3
            ],
            part: 1,
            mindef: 64,
            slots: 1,
            name: "\u30aa\u30fc\u30b0\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1,
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 2,
                "\u6311\u6226\u8005": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 1,
            mindef: 64,
            slots: 2,
            name: "\u30aa\u30fc\u30b0\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1,
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 1,
            mindef: 64,
            slots: 0,
            name: "\u30ab\u30a4\u30b6\u30fc\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 2,
                "\u529b\u306e\u89e3\u653e": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 1,
            mindef: 64,
            slots: 2,
            name: "\u30ab\u30a4\u30b6\u30fc\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 1,
            mindef: 64,
            slots: 0,
            name: "\u30af\u30b7\u30e3\u30ca\u30c7\u30a3\u30fc\u30eb\u03b1",
            skills: {
                "\u5320": 2,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1,
                "\u96c6\u4e2d": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 1,
            mindef: 64,
            slots: 1,
            name: "\u30af\u30b7\u30e3\u30ca\u30c7\u30a3\u30fc\u30eb\u03b2",
            skills: {
                "\u5320": 2,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 1,
            mindef: 64,
            slots: 1,
            name: "\u30a6\u30eb\u30ba\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 2,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 1,
            mindef: 64,
            slots: 2,
            name: "\u30a6\u30eb\u30ba\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 2,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 1,
            mindef: 64,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30d9\u30b9\u30c8\u03b1",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 1,
            mindef: 64,
            slots: 1,
            name: "\u30ad\u30ea\u30f3\u30d9\u30b9\u30c8\u03b2",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 1,
            mindef: 72,
            slots: 1,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30cf\u30a4\u30c9\u03b1",
            skills: {
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1,
                "\u5f37\u5316\u6301\u7d9a": 2,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 1,
            mindef: 72,
            slots: 2,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30cf\u30a4\u30c9\u03b2",
            skills: {
                "\u5f37\u5316\u6301\u7d9a": 2,
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 1,
            mindef: 62,
            slots: 1,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30b9\u30fc\u30c4\u03b1",
            skills: {
                "\u6c37\u8010\u6027": 2,
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u6b7b\u4e2d\u306b\u6d3b": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 1,
            mindef: 62,
            slots: 1,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30b9\u30fc\u30c4\u03b2",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u6b7b\u4e2d\u306b\u6d3b": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 1,
            mindef: 70,
            slots: 0,
            name: "\u30b7\u30fc\u30ab\u30fc\u30d9\u30b9\u30c8\u03b1",
            skills: {
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1,
                "\u30af\u30e9\u30a4\u30de\u30fc": 1,
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 1,
            mindef: 70,
            slots: 1,
            name: "\u30b7\u30fc\u30ab\u30fc\u30d9\u30b9\u30c8\u03b2",
            skills: {
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1,
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 1,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30f3\u30ae\u30b9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u5320": 1,
                "\u65e9\u98df\u3044": 1
            },
            type: 3
        },
        {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 1,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30f3\u30ae\u30b9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u65e9\u98df\u3044": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 1,
            mindef: 72,
            slots: 1,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2,
                "\u8d85\u4f1a\u5fc3": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 1,
            mindef: 72,
            slots: 2,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2,
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 1,
            mindef: 40,
            slots: 2,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30d9\u30b9\u30c8\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 1,
            mindef: 46,
            slots: 1,
            name: "\u30c0\u30a4\u30d0\u30fc\u30b9\u30fc\u30c4\u03b1",
            skills: {
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 42,
            slots: 0,
            name: "\u30d1\u30d4\u30aa\u30e0\u30da\u30c3\u30c8\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1,
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30aa\u30e0\u30da\u30c3\u30c8\u03b2",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 42,
            slots: 0,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30da\u30c3\u30c8\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1,
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 1,
            mindef: 42,
            slots: 1,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30da\u30c3\u30c8\u03b2",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 1,
            mindef: 72,
            slots: 1,
            name: "\u30a6\u30eb\u30ba\u30e1\u30a4\u30eb\u03b3",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 1,
            mindef: 72,
            slots: 2,
            name: "\u30ad\u30ea\u30f3\u30d9\u30b9\u30c8\u03b3",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 2,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 1,
            mindef: 72,
            slots: 1,
            name: "\u30ab\u30a4\u30b6\u30fc\u30e1\u30a4\u30eb\u03b3",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u529b\u306e\u89e3\u653e": 2,
                "\u5f31\u70b9\u7279\u52b9": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [0, -2, -3, 4, -2],
            part: 1,
            mindef: 72,
            slots: 1,
            name: "\u30af\u30b7\u30e3\u30ca\u30c7\u30a3\u30fc\u30eb\u03b3",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 3,
				"\u56de\u907f\u6027\u80fd": 1,
				"\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 3],
            part: 1,
            mindef: 56,
            slots: 1,
            name: "\u84bc\u661f\u30ce\u5c06\u3010\u93a7\u3011\u03b1",
            skills: {
                "\u5320": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 3, -3, 3],
            part: 1,
            mindef: 64,
            slots: 1,
            name: "\u30c0\u30f3\u30c6\u30b3\u30fc\u30c8\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1,
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 1,
            mindef: 70,
            slots: 2,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 2,
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1,
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 1,
            mindef: 70,
            slots: 3,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30e1\u30a4\u30eb\u03b2",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 2,
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-2, -2, 3, -2, 4],
            part: 1,
            mindef: 72,
            slots: 1,
            name: "\u30c9\u30e9\u30b1\u30f3\u30e1\u30a4\u30eb\u03b1",
            skills: {
                "\u7adc\u9a0e\u58eb\u306e\u8a3c": 1,
                "\u898b\u5207\u308a": 2,
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 1,
            mindef: 6,
            slots: 0,
            name: "\u30aa\u30ea\u30b8\u30f3\u30e1\u30a4\u30eb",
            skills: {},
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 2, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 2,
            mindef: 72,
            slots: 2,
            name: "\u30a6\u30eb\u30ba\u30a2\u30fc\u30e0\u03b3",
            skills: {
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 2, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 2,
            mindef: 72,
            slots: 2,
            name: "\u30ad\u30ea\u30f3\u30a2\u30fc\u30e0\u30ed\u30f3\u30b0\u03b3",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [3, 2, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 2,
            mindef: 70,
            slots: 2,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1,
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 2, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-2, -2, 3, -2, 4],
            part: 2,
            mindef: 72,
            slots: 2,
            name: "\u30c9\u30e9\u30b1\u30f3\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u653b\u6483": 1,
                "\u898b\u5207\u308a": 2,
                "\u7adc\u9a0e\u58eb\u306e\u8a3c": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 42,
            slots: 2,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30de\u30fc\u30ce\u03b2",
            skills: {
                "\u690d\u751f\u5b66": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 42,
            slots: 2,
            name: "\u30d1\u30d4\u30e1\u30eb\u30de\u30fc\u30ce\u03b2",
            skills: {
                "\u690d\u751f\u5b66": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 2,
            mindef: 42,
            slots: 2,
            name: "\u30d7\u30b1\u30d7\u30b1\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u6bd2\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 2,
            mindef: 56,
            slots: 2,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u96c6\u4e2d": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 2,
            mindef: 60,
            slots: 2,
            name: "\u30c9\u30fc\u30d9\u30eb\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 1,
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1,
                1, 0
            ],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 2,
            mindef: 62,
            slots: 2,
            name: "\u30c7\u30b9\u30ae\u30a2\u30d5\u30a1\u30aa\u30b9\u30c8\u03b2",
            skills: {
                "\u96c6\u4e2d": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 2,
            mindef: 64,
            slots: 3,
            name: "\u30a6\u30eb\u30ba\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 2,
            mindef: 64,
            slots: 2,
            name: "\u30ad\u30ea\u30f3\u30a2\u30fc\u30e0\u30ed\u30f3\u30b0\u03b2",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 2,
            mindef: 72,
            slots: 2,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u5f37\u5316\u6301\u7d9a": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 2,
            mindef: 40,
            slots: 2,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30ab\u30d5\u30b9\u03b1",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 2,
            mindef: 2,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30b0\u30e9\u30d6",
            skills: {},
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 2,
            mindef: 2,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30b0\u30e9\u30d6",
            skills: {},
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 2,
            mindef: 6,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30a2\u30fc\u30e0",
            skills: {
                "\u6f5c\u4f0f": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 2,
            mindef: 6,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30a2\u30fc\u30e0",
            skills: {
                "\uff2b\uff2f\u8853": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 2,
            mindef: 8,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30a2\u30fc\u30e0",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [4, 0, 0, 0, 0],
            part: 2,
            mindef: 12,
            slots: 0,
            name: "\u30b1\u30b9\u30c8\u30ac\u30fc\u30c9",
            skills: {
                "\u6ed1\u8d70\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 2,
            mindef: 8,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30a2\u30fc\u30e0",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 2,
            mindef: 10,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30a2\u30fc\u30e0",
            skills: {
                "\u904b\u642c\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 66,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, -2, -2, 1],
            part: 2,
            mindef: 8,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30a2\u30fc\u30e0",
            skills: {
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 2,
            mindef: 12,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30a2\u30fc\u30e0",
            skills: {
                "\u6bd2\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 2,
            mindef: 14,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30a2\u30fc\u30e0",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 2,
            mindef: 14,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30a2\u30fc\u30e0",
            skills: {
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 2,
            mindef: 16,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30a2\u30fc\u30e0",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 2,
            mindef: 18,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30a2\u30fc\u30e0",
            skills: {
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 22,
            slots: 0,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30de\u30fc\u30ce",
            skills: {
                "\u98db\u3073\u8fbc\u307f": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30e1\u30eb\u30de\u30fc\u30ce",
            skills: {
                "\u98db\u3073\u8fbc\u307f": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 2,
            mindef: 18,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30a2\u30fc\u30e0",
            skills: {
                "\u6e80\u8db3\u611f": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 2,
            mindef: 20,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30a2\u30fc\u30e0",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u529b": 1,
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 2,
            mindef: 22,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30a2\u30fc\u30e0",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 2,
            mindef: 18,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30a2\u30fc\u30e0",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 2,
            mindef: 20,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30a2\u30fc\u30e0",
            skills: {
                "\u7832\u8853": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 2,
            mindef: 20,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30a2\u30fc\u30e0",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 2,
            mindef: 24,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30a2\u30fc\u30e0",
            skills: {
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 2,
            mindef: 28,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30a2\u30fc\u30e0",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 2,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30b9\u30ae\u30a2\u30d5\u30a1\u30aa\u30b9\u30c8",
            skills: {
                "\u96c6\u4e2d": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 2,
            mindef: 28,
            slots: 0,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30a2\u30fc\u30e0",
            skills: {
                "\u7832\u6483\u624b": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 2,
            mindef: 30,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30a2\u30fc\u30e0",
            skills: {
                "\u98db\u71d5": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u6075": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 2,
            mindef: 30,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30a2\u30fc\u30e0",
            skills: {
                "\u4f53\u8853": 1,
                "\u60e8\u722a\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 2,
            mindef: 30,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30a2\u30fc\u30e0",
            skills: {
                "\u706b\u7adc\u306e\u529b": 1,
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 2,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30a2\u30fc\u30e0",
            skills: {
                "\u89d2\u7adc\u306e\u529b": 1,
                "\u706b\u4e8b\u5834\u529b": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-3,
                -2, 4, -2, 2
            ],
            part: 2,
            mindef: 34,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30a2\u30fc\u30e0\u30ed\u30f3\u30b0",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u6075": 1,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 2,
            mindef: 18,
            slots: 0,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30ab\u30d5\u30b9",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 2,
            mindef: 22,
            slots: 0,
            name: "\u30c0\u30a4\u30d0\u30fc\u30a2\u30fc\u30e0",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30aa\u30e0\u30de\u30fc\u30ce",
            skills: {
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 22,
            slots: 0,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30de\u30fc\u30ce",
            skills: {
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 2,
            mindef: 32,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30b0\u30e9\u30d6\u03b1",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 2,
            mindef: 32,
            slots: 1,
            name: "\u30ec\u30b6\u30fc\u30b0\u30e9\u30d6\u03b2",
            skills: {},
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 2,
            mindef: 32,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30b0\u30e9\u30d6\u03b1",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 2,
            mindef: 32,
            slots: 1,
            name: "\u30c1\u30a7\u30fc\u30f3\u30b0\u30e9\u30d6\u03b2",
            skills: {},
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 2,
            mindef: 36,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u6f5c\u4f0f": 2
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 2,
            mindef: 36,
            slots: 1,
            name: "\u30cf\u30f3\u30bf\u30fc\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u6f5c\u4f0f": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 2,
            mindef: 36,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u653b\u6483": 1,
                "\uff2b\uff2f\u8853": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 2,
            mindef: 36,
            slots: 1,
            name: "\u30dc\u30fc\u30f3\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\uff2b\uff2f\u8853": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 2,
            mindef: 36,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u9632\u5fa1": 1,
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 2,
            mindef: 36,
            slots: 1,
            name: "\u30a2\u30ed\u30a4\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 42,
            slots: 1,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30de\u30fc\u30ce\u03b1",
            skills: {
                "\u690d\u751f\u5b66": 2,
                "\u98db\u3073\u8fbc\u307f": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30e1\u30eb\u30de\u30fc\u30ce\u03b1",
            skills: {
                "\u690d\u751f\u5b66": 2,
                "\u98db\u3073\u8fbc\u307f": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 2,
            mindef: 38,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 2,
            mindef: 38,
            slots: 1,
            name: "\u30e9\u30f3\u30b4\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 2,
            mindef: 38,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 1,
                "\u6e80\u8db3\u611f": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 2,
            mindef: 38,
            slots: 1,
            name: "\u30bf\u30ed\u30b9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u6e80\u8db3\u611f": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, 0, 0, 0, 0],
            part: 2,
            mindef: 40,
            slots: 0,
            name: "\u30b1\u30b9\u30c8\u30ac\u30fc\u30c9\u03b1",
            skills: {
                "\u6ed1\u8d70\u5f37\u5316": 1,
                "\u96c6\u4e2d": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, 0, 0, 0, 0],
            part: 2,
            mindef: 40,
            slots: 1,
            name: "\u30b1\u30b9\u30c8\u30ac\u30fc\u30c9\u03b2",
            skills: {
                "\u6ed1\u8d70\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 2,
            mindef: 40,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 1,
                "\u5a01\u5687": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 2,
            mindef: 40,
            slots: 1,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 2,
            mindef: 40,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u904b\u642c\u306e\u9054\u4eba": 1,
                "\u898b\u5207\u308a": 1
            },
            type: 3
        },
        {
            maxdef: 78,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 2,
            mindef: 40,
            slots: 1,
            name: "\u30af\u30eb\u30eb\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u904b\u642c\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 2,
            mindef: 40,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2,
                "\u5e83\u57df\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 2,
            mindef: 40,
            slots: 1,
            name: "\u30c4\u30a3\u30c4\u30a3\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 2,
            mindef: 40,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 2,
            mindef: 40,
            slots: 1,
            name: "\u30ae\u30eb\u30aa\u30b9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 2,
            mindef: 42,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1,
                "\u6bd2\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 2,
            mindef: 42,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 1,
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 2,
            mindef: 42,
            slots: 1,
            name: "\u30dc\u30ed\u30b9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 2,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 2,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e3\u30ca\u30d5\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 2,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1,
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 2,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e5\u30e9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 2,
            mindef: 44,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 2,
            mindef: 44,
            slots: 1,
            name: "\u30ab\u30ac\u30c1\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 2,
            mindef: 44,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u7832\u8853": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 2,
            mindef: 44,
            slots: 1,
            name: "\u30a6\u30eb\u30e0\u30fc\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u7832\u8853": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 2,
            mindef: 46,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 2,
            mindef: 46,
            slots: 1,
            name: "\u30ec\u30a4\u30a2\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 2,
            mindef: 52,
            slots: 0,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u98a8\u5727\u8010\u6027": 2,
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 2,
            mindef: 52,
            slots: 1,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1,
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 2,
            mindef: 46,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1,
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 2,
            mindef: 46,
            slots: 1,
            name: "\u30d0\u30eb\u30ad\u30f3\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1,
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 2,
            mindef: 48,
            slots: 0,
            name: "\u30ac\u30de\u30eb\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30dc\u30de\u30fc": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 2,
            mindef: 48,
            slots: 1,
            name: "\u30ac\u30de\u30eb\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30dc\u30de\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 2,
            mindef: 44,
            slots: 0,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30af\u30ed\u30a6\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1,
                "\u30dc\u30de\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 2,
            mindef: 44,
            slots: 1,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30af\u30ed\u30a6\u03b2",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 2,
            mindef: 50,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u9632\u5fa1": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 2,
            mindef: 50,
            slots: 1,
            name: "\u30cf\u30a4\u30e1\u30bf\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u9632\u5fa1": 2
            },
            type: 3
        },
        {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 2,
            mindef: 50,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 2,
            mindef: 50,
            slots: 1,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 2,
            mindef: 52,
            slots: 0,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u7832\u6483\u624b": 2,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 2,
            mindef: 52,
            slots: 1,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u7832\u6483\u624b": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 2,
            mindef: 56,
            slots: 1,
            name: "\u30e9\u30f4\u30a1\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u6ed1\u8d70\u5f37\u5316": 1,
                "\u5e83\u57df\u5316": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 2,
            mindef: 56,
            slots: 1,
            name: "\u30e9\u30f4\u30a1\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u6ed1\u8d70\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 2,
            mindef: 54,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1,
                "\u98db\u71d5": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 2,
            mindef: 54,
            slots: 1,
            name: "\u30ae\u30a8\u30ca\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1,
                "\u98db\u71d5": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 2,
            mindef: 54,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1,
                "\u898b\u5207\u308a": 1,
                "\u4f53\u8853": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 2,
            mindef: 54,
            slots: 1,
            name: "\u30ac\u30ed\u30f3\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1,
                "\u4f53\u8853": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 2,
            mindef: 54,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u653b\u6483": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 2,
            mindef: 54,
            slots: 1,
            name: "\u30ec\u30a6\u30b9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 2,
            mindef: 56,
            slots: 1,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1,
                "\u96c6\u4e2d": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 2,
            mindef: 56,
            slots: 1,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u96c6\u4e2d": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 2,
            mindef: 54,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u8010\u9707": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u4e8b\u5834\u529b": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 2,
            mindef: 54,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u4e8b\u5834\u529b": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 2,
            mindef: 56,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1,
                "\u96c6\u4e2d": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 2,
            mindef: 60,
            slots: 1,
            name: "\u30ac\u30f3\u30ad\u30f3\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u9632\u5fa1": 1,
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1,
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2,
                0, 0
            ],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 2,
            mindef: 60,
            slots: 1,
            name: "\u30ac\u30f3\u30ad\u30f3\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1,
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 2,
            mindef: 58,
            slots: 0,
            name: "\u30d0\u30bc\u30eb\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u629c\u5200\u8853\u3010\u6280\u3011": 2,
                "\u8033\u6813": 1,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 2,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30bc\u30eb\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u629c\u5200\u8853\u3010\u6280\u3011": 2,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 2,
            mindef: 60,
            slots: 0,
            name: "\u30c0\u30de\u30b9\u30af\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u5320": 1,
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 2,
            mindef: 60,
            slots: 1,
            name: "\u30c0\u30de\u30b9\u30af\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 2,
            mindef: 60,
            slots: 0,
            name: "\u30c9\u30fc\u30d9\u30eb\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 1,
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1,
                0, 0
            ],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 2,
            mindef: 62,
            slots: 1,
            name: "\u30c7\u30b9\u30ae\u30a2\u30d5\u30a1\u30aa\u30b9\u30c8\u03b1",
            skills: {
                "\u96c6\u4e2d": 2,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 2,
            mindef: 64,
            slots: 0,
            name: "\u30aa\u30fc\u30b0\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u653b\u6483": 1,
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1,
                "\u6311\u6226\u8005": 2
            },
            type: 3
        },
        {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 2,
            mindef: 64,
            slots: 1,
            name: "\u30aa\u30fc\u30b0\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1,
                "\u6311\u6226\u8005": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 2,
            mindef: 64,
            slots: 1,
            name: "\u30ab\u30a4\u30b6\u30fc\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u5f31\u70b9\u7279\u52b9": 2
            },
            type: 3
        },
        {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 2,
            mindef: 64,
            slots: 1,
            name: "\u30ab\u30a4\u30b6\u30fc\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u5f31\u70b9\u7279\u52b9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 2,
            mindef: 64,
            slots: 0,
            name: "\u30af\u30b7\u30e3\u30ca\u30cf\u30c8\u30a5\u30fc\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2,
                "\u5320": 1,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 2,
            mindef: 64,
            slots: 1,
            name: "\u30af\u30b7\u30e3\u30ca\u30cf\u30c8\u30a5\u30fc\u03b2",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 2,
            mindef: 64,
            slots: 1,
            name: "\u30a6\u30eb\u30ba\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u56de\u5fa9\u901f\u5ea6": 1,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 2,
            mindef: 64,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30a2\u30fc\u30e0\u30ed\u30f3\u30b0\u03b1",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 2,
            mindef: 72,
            slots: 1,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30af\u30ed\u30a6\u03b1",
            skills: {
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1,
                "\u3072\u308b\u307f\u8efd\u6e1b": 1,
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 2,
            mindef: 72,
            slots: 1,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30af\u30ed\u30a6\u03b2",
            skills: {
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1,
                "\u3072\u308b\u307f\u8efd\u6e1b": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 2,
            mindef: 62,
            slots: 1,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u6c34\u8010\u6027": 2,
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 2,
            mindef: 62,
            slots: 1,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 2,
            mindef: 70,
            slots: 1,
            name: "\u30b7\u30fc\u30ab\u30fc\u30b0\u30e9\u30d6\u03b1",
            skills: {
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1,
                "\u5265\u304e\u53d6\u308a\u9244\u4eba": 1,
                "\u9583\u5149\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 2,
            mindef: 70,
            slots: 1,
            name: "\u30b7\u30fc\u30ab\u30fc\u30b0\u30e9\u30d6\u03b2",
            skills: {
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1,
                "\u9583\u5149\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 2,
            mindef: 58,
            slots: 0,
            name: "\u30d0\u30f3\u30ae\u30b9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u7834\u58ca\u738b": 1,
                "\u529b\u306e\u89e3\u653e": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 2,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30f3\u30ae\u30b9\u30a2\u30fc\u30e0\u03b2",
            skills: {
                "\u529b\u306e\u89e3\u653e": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 2,
            mindef: 72,
            slots: 1,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u5f37\u5316\u6301\u7d9a": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 2,
            mindef: 46,
            slots: 1,
            name: "\u30c0\u30a4\u30d0\u30fc\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 42,
            slots: 0,
            name: "\u30d1\u30d4\u30aa\u30e0\u30de\u30fc\u30ce\u03b1",
            skills: {
                "\u898b\u5207\u308a": 2,
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1,
                0, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30aa\u30e0\u30de\u30fc\u30ce\u03b2",
            skills: {
                "\u898b\u5207\u308a": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 42,
            slots: 0,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30de\u30fc\u30ce\u03b1",
            skills: {
                "\u898b\u5207\u308a": 2,
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 2,
            mindef: 42,
            slots: 1,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30de\u30fc\u30ce\u03b2",
            skills: {
                "\u898b\u5207\u308a": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 2,
            mindef: 72,
            slots: 1,
            name: "\u30ab\u30a4\u30b6\u30fc\u30a2\u30fc\u30e0\u03b3",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u898b\u5207\u308a": 3
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [0, -2, -3, 4, -2],
            part: 2,
            mindef: 72,
            slots: 3,
            name: "\u30af\u30b7\u30e3\u30ca\u30cf\u30c8\u30a5\u30fc\u03b3",
            skills: {
                "\u96c6\u4e2d": 2,
				"\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 3],
            part: 2,
            mindef: 56,
            slots: 1,
            name: "\u84bc\u661f\u30ce\u5c06\u3010\u7bed\u624b\u3011\u03b1",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 2,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 3, -3, 3],
            part: 2,
            mindef: 64,
            slots: 1,
            name: "\u30c0\u30f3\u30c6\u30b0\u30ed\u30fc\u30d6\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1,
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 2,
            mindef: 70,
            slots: 1,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30a2\u30fc\u30e0\u03b1",
            skills: {
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1,
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 2,
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 2,
            mindef: 6,
            slots: 0,
            name: "\u30aa\u30ea\u30b8\u30f3\u30a2\u30fc\u30e0",
            skills: {},
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 3,
            mindef: 2,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30d9\u30eb\u30c8",
            skills: {},
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 3,
            mindef: 2,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d9\u30eb\u30c8",
            skills: {},
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 3,
            mindef: 6,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30b3\u30a4\u30eb",
            skills: {
                "\u8ffd\u8de1\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 3,
            mindef: 6,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30b3\u30a4\u30eb",
            skills: {
                "\u7b1b\u5439\u304d\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 3,
            mindef: 8,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30b3\u30a4\u30eb",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 3,
            mindef: 8,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30b3\u30a4\u30eb",
            skills: {
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 3,
            mindef: 10,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30b3\u30a4\u30eb",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 66,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, -2, -2, 1],
            part: 3,
            mindef: 8,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30b3\u30a4\u30eb",
            skills: {
                "\u6bd2\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 3,
            mindef: 12,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30b3\u30a4\u30eb",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 3,
            mindef: 14,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30b3\u30a4\u30eb",
            skills: {
                "\u6ce5\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 3,
            mindef: 14,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30b3\u30a4\u30eb",
            skills: {
                "\u6c37\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 3,
            mindef: 16,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30b3\u30a4\u30eb",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 3,
            mindef: 18,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30b3\u30a4\u30eb",
            skills: {
                "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 22,
            slots: 0,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30a2\u30f3\u30ab",
            skills: {
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30e1\u30eb\u30a2\u30f3\u30ab",
            skills: {
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 3,
            mindef: 18,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30b3\u30a4\u30eb",
            skills: {
                "\u5265\u304e\u53d6\u308a\u9244\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 3,
            mindef: 20,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30b3\u30a4\u30eb",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u529b": 1,
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 3,
            mindef: 22,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30b3\u30a4\u30eb",
            skills: {
                "\u6bd2\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 3,
            mindef: 18,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30b3\u30a4\u30eb",
            skills: {
                "\u5e83\u57df\u5316": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 3,
            mindef: 20,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30b3\u30a4\u30eb",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        },
        {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 3,
            mindef: 20,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30b3\u30a4\u30eb",
            skills: {
                "\u7634\u6c17\u74b0\u5883\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 3,
            mindef: 24,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30b3\u30a4\u30eb",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 3,
            mindef: 28,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30b3\u30a4\u30eb",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 3,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30b9\u30ae\u30a2\u30ca\u30fc\u30d9\u30eb",
            skills: {
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 3,
            mindef: 28,
            slots: 0,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30b3\u30a4\u30eb",
            skills: {
                "\u5730\u8cea\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 3,
            mindef: 30,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30b3\u30a4\u30eb",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u6075": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 3,
            mindef: 30,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30b3\u30a4\u30eb",
            skills: {
                "\u898b\u5207\u308a": 1,
                "\u60e8\u722a\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 3,
            mindef: 30,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30b3\u30a4\u30eb",
            skills: {
                "\u706b\u7adc\u306e\u529b": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 3,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30b3\u30a4\u30eb",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1,
                "\u89d2\u7adc\u306e\u529b": 1
            },
            type: 3
        },
        {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 3,
            mindef: 34,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30d5\u30fc\u30d7",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u6075": 1,
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 3,
            mindef: 18,
            slots: 0,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30b3\u30fc\u30c8",
            skills: {
                "\u5c0e\u87f2\u53cd\u5fdc\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 3,
            mindef: 22,
            slots: 0,
            name: "\u30c0\u30a4\u30d0\u30fc\u30d9\u30eb\u30c8",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30aa\u30e0\u30a2\u30f3\u30ab",
            skills: {
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 22,
            slots: 0,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30a2\u30f3\u30ab",
            skills: {
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 3,
            mindef: 32,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30d9\u30eb\u30c8\u03b1",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 3,
            mindef: 32,
            slots: 1,
            name: "\u30ec\u30b6\u30fc\u30d9\u30eb\u30c8\u03b2",
            skills: {},
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 3,
            mindef: 32,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d9\u30eb\u30c8\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 3,
            mindef: 32,
            slots: 1,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d9\u30eb\u30c8\u03b2",
            skills: {},
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 3,
            mindef: 36,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u63a1\u96c6\u306e\u9054\u4eba": 1,
                "\u6f5c\u4f0f": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 3,
            mindef: 36,
            slots: 1,
            name: "\u30cf\u30f3\u30bf\u30fc\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u63a1\u96c6\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 3,
            mindef: 36,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u7b1b\u5439\u304d\u540d\u4eba": 1,
                "\u91e3\u308a\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 3,
            mindef: 36,
            slots: 1,
            name: "\u30dc\u30fc\u30f3\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u7b1b\u5439\u304d\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 3,
            mindef: 36,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u6c34\u8010\u6027": 1,
                "\u6bd2\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 3,
            mindef: 36,
            slots: 1,
            name: "\u30a2\u30ed\u30a4\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u6bd2\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 42,
            slots: 1,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30a2\u30f3\u30ab\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 1,
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2,
                1, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 42,
            slots: 2,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30a2\u30f3\u30ab\u03b2",
            skills: {
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30e1\u30eb\u30a2\u30f3\u30ab\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 1,
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 1,
                0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 42,
            slots: 2,
            name: "\u30d1\u30d4\u30e1\u30eb\u30a2\u30f3\u30ab\u03b2",
            skills: {
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 3,
            mindef: 38,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1,
                1, 2
            ],
            part: 3,
            mindef: 38,
            slots: 1,
            name: "\u30e9\u30f3\u30b4\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 3,
            mindef: 38,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 1,
                "\u5265\u304e\u53d6\u308a\u9244\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 3,
            mindef: 38,
            slots: 1,
            name: "\u30bf\u30ed\u30b9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u5265\u304e\u53d6\u308a\u9244\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 3,
            mindef: 40,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u65e9\u98df\u3044": 1,
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 3,
            mindef: 40,
            slots: 1,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u4e0d\u5c48": 1
            },
            type: 3
        },
        {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 3,
            mindef: 40,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 3,
            mindef: 40,
            slots: 1,
            name: "\u30af\u30eb\u30eb\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 3,
            mindef: 40,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 3,
            mindef: 40,
            slots: 1,
            name: "\u30c4\u30a3\u30c4\u30a3\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u5e83\u57df\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2,
                0, 1
            ],
            part: 3,
            mindef: 40,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u7634\u6c17\u74b0\u5883\u9069\u5fdc": 1,
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 3,
            mindef: 40,
            slots: 1,
            name: "\u30ae\u30eb\u30aa\u30b9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u7634\u6c17\u74b0\u5883\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 3,
            mindef: 42,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 3,
            mindef: 42,
            slots: 1,
            name: "\u30d7\u30b1\u30d7\u30b1\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 3,
            mindef: 42,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1,
                "\u6ce5\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 3,
            mindef: 42,
            slots: 1,
            name: "\u30dc\u30ed\u30b9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u6ce5\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 3,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u7832\u8853": 1,
                "\u706b\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 3,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e3\u30ca\u30d5\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u706b\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 3,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u6c37\u8010\u6027": 2
            },
            type: 3
        },
        {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 3,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e5\u30e9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u6c37\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 3,
            mindef: 44,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 3,
            mindef: 44,
            slots: 2,
            name: "\u30ab\u30ac\u30c1\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 3,
            mindef: 44,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 3,
            mindef: 44,
            slots: 1,
            name: "\u30a6\u30eb\u30e0\u30fc\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 3,
            mindef: 46,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u6bd2\u8010\u6027": 2,
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 3,
            mindef: 46,
            slots: 1,
            name: "\u30ec\u30a4\u30a2\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u6bd2\u8010\u6027": 1,
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 3,
            mindef: 52,
            slots: 0,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u5320": 1,
                "\u6bd2\u8010\u6027": 1,
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 3,
            mindef: 52,
            slots: 1,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u5320": 1,
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 3,
            mindef: 46,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 3,
            mindef: 46,
            slots: 1,
            name: "\u30d0\u30eb\u30ad\u30f3\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 3,
            mindef: 48,
            slots: 0,
            name: "\u30ac\u30de\u30eb\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u7832\u8853": 2,
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 3,
            mindef: 48,
            slots: 1,
            name: "\u30ac\u30de\u30eb\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u7832\u8853": 2
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 3,
            mindef: 44,
            slots: 0,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30b9\u30d1\u30a4\u30f3\u03b1",
            skills: {
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1,
                "\u8010\u9707": 1,
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 3,
            mindef: 44,
            slots: 1,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30b9\u30d1\u30a4\u30f3\u03b2",
            skills: {
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1,
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 3,
            mindef: 50,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u9632\u5fa1": 1,
                "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 3,
            mindef: 50,
            slots: 1,
            name: "\u30cf\u30a4\u30e1\u30bf\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 3,
            mindef: 50,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u98a8\u5727\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 3,
            mindef: 50,
            slots: 1,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 3,
            mindef: 52,
            slots: 0,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 1,
                "\u5730\u8cea\u5b66": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 3,
            mindef: 52,
            slots: 1,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u5730\u8cea\u5b66": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 3,
            mindef: 56,
            slots: 0,
            name: "\u30e9\u30f4\u30a1\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 2,
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 3,
            mindef: 56,
            slots: 1,
            name: "\u30e9\u30f4\u30a1\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u7d0d\u5200\u8853": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 3,
            mindef: 54,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u98a8\u5727\u8010\u6027": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 3,
            mindef: 54,
            slots: 1,
            name: "\u30ae\u30a8\u30ca\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 3,
            mindef: 54,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1,
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1,
                "\u898b\u5207\u308a": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 3,
            mindef: 54,
            slots: 1,
            name: "\u30ac\u30ed\u30f3\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1,
                "\u898b\u5207\u308a": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 3,
            mindef: 54,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u96c6\u4e2d": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 3,
            mindef: 54,
            slots: 1,
            name: "\u30ec\u30a6\u30b9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 3,
            mindef: 56,
            slots: 0,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u98a8\u5727\u8010\u6027": 2,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u8cab\u901a\u5f3e\u30fb\u7adc\u306e\u4e00\u77e2\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 3,
            mindef: 56,
            slots: 1,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u98a8\u5727\u8010\u6027": 2,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 3,
            mindef: 54,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2,
                "\u629c\u5200\u8853\u3010\u6280\u3011": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 3,
            mindef: 54,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 3,
            mindef: 56,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u7834\u58ca\u738b": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u9006\u6068\u307f": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 3,
            mindef: 56,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u9006\u6068\u307f": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1,
                1, 0
            ],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 3,
            mindef: 60,
            slots: 2,
            name: "\u30ac\u30f3\u30ad\u30f3\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u7834\u58ca\u738b": 1,
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1,
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 3,
            mindef: 60,
            slots: 2,
            name: "\u30ac\u30f3\u30ad\u30f3\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u7834\u58ca\u738b": 1,
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        },
        {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 3,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30bc\u30eb\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba": 1,
                "\u8033\u6813": 2,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 3,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30bc\u30eb\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u8033\u6813": 2,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 3,
            mindef: 60,
            slots: 1,
            name: "\u30c0\u30de\u30b9\u30af\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u96c6\u4e2d": 1,
                "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 3,
            mindef: 60,
            slots: 3,
            name: "\u30c0\u30de\u30b9\u30af\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u96c6\u4e2d": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [2, 0,
                0
            ],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 3,
            mindef: 60,
            slots: 1,
            name: "\u30c9\u30fc\u30d9\u30eb\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u9f8d\u8010\u6027": 2,
                "\u653b\u6483": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 3,
            mindef: 60,
            slots: 1,
            name: "\u30c9\u30fc\u30d9\u30eb\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u9f8d\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 3,
            mindef: 62,
            slots: 0,
            name: "\u30c7\u30b9\u30ae\u30a2\u30ca\u30fc\u30d9\u30eb\u03b1",
            skills: {
                "\u96c6\u4e2d": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 3,
            mindef: 62,
            slots: 2,
            name: "\u30c7\u30b9\u30ae\u30a2\u30ca\u30fc\u30d9\u30eb\u03b2",
            skills: {
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 3,
            mindef: 64,
            slots: 0,
            name: "\u30aa\u30fc\u30b0\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u653b\u6483": 2,
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1,
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 3,
            mindef: 64,
            slots: 1,
            name: "\u30aa\u30fc\u30b0\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u653b\u6483": 2,
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 3,
            mindef: 64,
            slots: 0,
            name: "\u30ab\u30a4\u30b6\u30fc\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u5f31\u70b9\u7279\u52b9": 1,
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 3,
            mindef: 64,
            slots: 1,
            name: "\u30ab\u30a4\u30b6\u30fc\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 3,
            mindef: 64,
            slots: 0,
            name: "\u30af\u30b7\u30e3\u30ca\u30a2\u30f3\u30c0\u03b1",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 3,
            mindef: 64,
            slots: 2,
            name: "\u30af\u30b7\u30e3\u30ca\u30a2\u30f3\u30c0\u03b2",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 3,
            mindef: 64,
            slots: 1,
            name: "\u30a6\u30eb\u30ba\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u7634\u6c17\u8010\u6027": 1,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 3,
            mindef: 64,
            slots: 2,
            name: "\u30a6\u30eb\u30ba\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 3,
            mindef: 64,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30d5\u30fc\u30d7\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3,
                -2, 4, -2, 2
            ],
            part: 3,
            mindef: 64,
            slots: 3,
            name: "\u30ad\u30ea\u30f3\u30d5\u30fc\u30d7\u03b2",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 3,
            mindef: 72,
            slots: 1,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30b9\u30d1\u30a4\u30f3\u03b1",
            skills: {
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1,
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 3,
            mindef: 72,
            slots: 2,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30b9\u30d1\u30a4\u30f3\u03b2",
            skills: {
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 3,
            mindef: 62,
            slots: 1,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u9f8d\u8010\u6027": 2,
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 1, 1],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 3,
            mindef: 62,
            slots: 3,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 3,
            mindef: 70,
            slots: 1,
            name: "\u30b7\u30fc\u30ab\u30fc\u30d9\u30eb\u30c8\u03b1",
            skills: {
                "\u904b\u642c\u306e\u9054\u4eba": 1,
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1,
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 3,
            mindef: 70,
            slots: 1,
            name: "\u30b7\u30fc\u30ab\u30fc\u30d9\u30eb\u30c8\u03b2",
            skills: {
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1,
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 3,
            mindef: 58,
            slots: 2,
            name: "\u30d0\u30f3\u30ae\u30b9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u529b\u306e\u89e3\u653e": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 3,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30f3\u30ae\u30b9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u5320": 1,
                "\u529b\u306e\u89e3\u653e": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 3,
            mindef: 72,
            slots: 1,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u5320": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 3,
            mindef: 72,
            slots: 2,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 3,
            mindef: 40,
            slots: 2,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30b3\u30fc\u30c8\u03b1",
            skills: {
                "\u5c0e\u87f2\u53cd\u5fdc\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 3,
            mindef: 46,
            slots: 1,
            name: "\u30c0\u30a4\u30d0\u30fc\u30d9\u30eb\u30c8\u03b1",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30aa\u30e0\u30a2\u30f3\u30ab\u03b1",
            skills: {
                "\u9632\u5fa1": 2,
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30aa\u30e0\u30a2\u30f3\u30ab\u03b2",
            skills: {
                "\u9632\u5fa1": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 42,
            slots: 1,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30a2\u30f3\u30ab\u03b1",
            skills: {
                "\u9632\u5fa1": 2,
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 3,
            mindef: 42,
            slots: 1,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30a2\u30f3\u30ab\u03b2",
            skills: {
                "\u9632\u5fa1": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 1, 1],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 3,
            mindef: 72,
            slots: 3,
            name: "\u30a6\u30eb\u30ba\u30b3\u30a4\u30eb\u03b3",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 2,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 3,
            mindef: 72,
            slots: 2,
            name: "\u30ad\u30ea\u30f3\u30d5\u30fc\u30d7\u03b3",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 3,
            mindef: 72,
            slots: 2,
            name: "\u30ab\u30a4\u30b6\u30fc\u30b3\u30a4\u30eb\u03b3",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u529b\u306e\u89e3\u653e": 3
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [0, -2, -3, 4, -2],
            part: 3,
            mindef: 72,
            slots: 2,
            name: "\u30af\u30b7\u30e3\u30ca\u30a2\u30f3\u30c0\u03b3",
            skills: {
                "\u5320": 2,
				"\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 3],
            part: 3,
            mindef: 56,
            slots: 1,
            name: "\u84bc\u661f\u30ce\u5c06\u3010\u8170\u5f53\u3066\u3011\u03b1",
            skills: {
                "\u5320": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 3, -3, 3],
            part: 3,
            mindef: 64,
            slots: 1,
            name: "\u30c0\u30f3\u30c6\u30d9\u30eb\u30c8\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1,
                "\u529b\u306e\u89e3\u653e": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 3,
            mindef: 70,
            slots: 2,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1,
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1,
                "\u6574\u5099": 2
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 2, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 3,
            mindef: 70,
            slots: 2,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30b3\u30a4\u30eb\u03b2",
            skills: {
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1,
                "\u6574\u5099": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-2, -2, 3, -2, 4],
            part: 3,
            mindef: 72,
            slots: 1,
            name: "\u30c9\u30e9\u30b1\u30f3\u30b3\u30a4\u30eb\u03b1",
            skills: {
                "\u5f37\u5316\u6301\u7d9a": 1,
                "\u898b\u5207\u308a": 2,
                "\u7adc\u9a0e\u58eb\u306e\u8a3c": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 3,
            mindef: 6,
            slots: 0,
            name: "\u30aa\u30ea\u30b8\u30f3\u30b3\u30a4\u30eb",
            skills: {},
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 4,
            mindef: 2,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30d1\u30f3\u30c4",
            skills: {},
            type: 3
        }, {
            maxdef: 68,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 4,
            mindef: 2,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d1\u30f3\u30c4",
            skills: {},
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 4,
            mindef: 6,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u8089\u713c\u304d\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 4,
            mindef: 6,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 4,
            mindef: 8,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 5, 0, 0, 0],
            part: 4,
            mindef: 12,
            slots: 0,
            name: "\u30ac\u30e9\u30a4\u30fc\u30d6\u30fc\u30c4",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 4,
            mindef: 8,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u3057\u3083\u304c\u307f\u79fb\u52d5\u901f\u5ea6\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 2,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 4,
            mindef: 10,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 66,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, -2, -2, 1],
            part: 4,
            mindef: 8,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 4,
            mindef: 12,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u690d\u751f\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 4,
            mindef: 14,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 4,
            mindef: 14,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u96c6\u4e2d": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 4,
            mindef: 16,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 4,
            mindef: 18,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u7832\u6483\u624b": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 22,
            slots: 0,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30ac\u30f3\u30d0",
            skills: {
                "\u63a2\u7d22\u8005\u306e\u5e78\u904b": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30e1\u30eb\u30ac\u30f3\u30d0",
            skills: {
                "\u63a2\u7d22\u8005\u306e\u5e78\u904b": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 4,
            mindef: 18,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 4,
            mindef: 20,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u529b": 1,
                "\u7832\u8853": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 4,
            mindef: 22,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 4,
            mindef: 18,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u7761\u7720\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 4,
            mindef: 20,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 4,
            mindef: 20,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 4,
            mindef: 24,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 4,
            mindef: 28,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 4,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30b9\u30ae\u30a2\u30d5\u30a7\u30eb\u30bc",
            skills: {
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 4,
            mindef: 28,
            slots: 0,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30d6\u30fc\u30c4",
            skills: {
                "\u7814\u7a76\u8005": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 4,
            mindef: 30,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u6c37\u8010\u6027": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u6075": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 4,
            mindef: 30,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u7d0d\u5200\u8853": 1,
                "\u60e8\u722a\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 4,
            mindef: 30,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba": 1,
                "\u706b\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 4,
            mindef: 32,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30b0\u30ea\u30fc\u30f4",
            skills: {
                "\u8010\u9707": 1,
                "\u89d2\u7adc\u306e\u529b": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 4,
            mindef: 34,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30ec\u30ac\u30fc\u30b9",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u6075": 1,
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 4,
            mindef: 18,
            slots: 0,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30d6\u30fc\u30c4",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 4,
            mindef: 22,
            slots: 0,
            name: "\u30c0\u30a4\u30d0\u30fc\u30d6\u30fc\u30c4",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 22,
            slots: 0,
            name: "\u30d1\u30d4\u30aa\u30e0\u30ac\u30f3\u30d0",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 22,
            slots: 0,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30ac\u30f3\u30d0",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 4,
            mindef: 32,
            slots: 0,
            name: "\u30ec\u30b6\u30fc\u30d1\u30f3\u30c4\u03b1",
            skills: {
                "\u30af\u30e9\u30a4\u30de\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1,
                0, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 0, 0, 0],
            part: 4,
            mindef: 32,
            slots: 1,
            name: "\u30ec\u30b6\u30fc\u30d1\u30f3\u30c4\u03b2",
            skills: {},
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 4,
            mindef: 32,
            slots: 0,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d1\u30f3\u30c4\u03b1",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 70,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, 0, 0],
            part: 4,
            mindef: 32,
            slots: 1,
            name: "\u30c1\u30a7\u30fc\u30f3\u30d1\u30f3\u30c4\u03b2",
            skills: {},
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 4,
            mindef: 36,
            slots: 0,
            name: "\u30cf\u30f3\u30bf\u30fc\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 1,
                "\u8ffd\u8de1\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 0],
            part: 4,
            mindef: 36,
            slots: 1,
            name: "\u30cf\u30f3\u30bf\u30fc\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u8ffd\u8de1\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 4,
            mindef: 36,
            slots: 0,
            name: "\u30dc\u30fc\u30f3\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 2
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, 2, 0, 2],
            part: 4,
            mindef: 36,
            slots: 1,
            name: "\u30dc\u30fc\u30f3\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 4,
            mindef: 36,
            slots: 0,
            name: "\u30a2\u30ed\u30a4\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 2
            },
            type: 3
        }, {
            maxdef: 74,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -2, -2, 0],
            part: 4,
            mindef: 36,
            slots: 1,
            name: "\u30a2\u30ed\u30a4\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1,
                0, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 42,
            slots: 1,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30ac\u30f3\u30d0\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1,
                "\u63a2\u7d22\u8005\u306e\u5e78\u904b": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 42,
            slots: 2,
            name: "\u30aa\u30a6\u30d3\u30fc\u30c8\u30ac\u30f3\u30d0\u03b2",
            skills: {
                "\u63a2\u7d22\u8005\u306e\u5e78\u904b": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0,
                0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30e1\u30eb\u30ac\u30f3\u30d0\u03b1",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1,
                "\u63a2\u7d22\u8005\u306e\u5e78\u904b": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 42,
            slots: 2,
            name: "\u30d1\u30d4\u30e1\u30eb\u30ac\u30f3\u30d0\u03b2",
            skills: {
                "\u63a2\u7d22\u8005\u306e\u5e78\u904b": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 4,
            mindef: 38,
            slots: 0,
            name: "\u30e9\u30f3\u30b4\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1,
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 1, 1, 1, 2],
            part: 4,
            mindef: 38,
            slots: 1,
            name: "\u30e9\u30f3\u30b4\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 4,
            mindef: 38,
            slots: 0,
            name: "\u30bf\u30ed\u30b9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u5320": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, -1, 0, 0, 2],
            part: 4,
            mindef: 38,
            slots: 1,
            name: "\u30bf\u30ed\u30b9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 5, 0, 0, 0],
            part: 4,
            mindef: 40,
            slots: 0,
            name: "\u30ac\u30e9\u30a4\u30fc\u30d6\u30fc\u30c4\u03b1",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 2,
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 5, 0, 0, 0],
            part: 4,
            mindef: 40,
            slots: 1,
            name: "\u30ac\u30e9\u30a4\u30fc\u30d6\u30fc\u30c4\u03b2",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1,
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 4,
            mindef: 40,
            slots: 0,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u3057\u3083\u304c\u307f\u79fb\u52d5\u901f\u5ea6\uff35\uff30": 1,
                "\u6e80\u8db3\u611f": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-2, 2, -1, -1, 1],
            part: 4,
            mindef: 40,
            slots: 1,
            name: "\u30b8\u30e3\u30b0\u30e9\u30b9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u3057\u3083\u304c\u307f\u79fb\u52d5\u901f\u5ea6\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 4,
            mindef: 40,
            slots: 0,
            name: "\u30af\u30eb\u30eb\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1,
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 0, 1, 0],
            part: 4,
            mindef: 40,
            slots: 1,
            name: "\u30af\u30eb\u30eb\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 4,
            mindef: 40,
            slots: 0,
            name: "\u30c4\u30a3\u30c4\u30a3\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u7761\u7720\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 0, -3, -2, 0],
            part: 4,
            mindef: 40,
            slots: 1,
            name: "\u30c4\u30a3\u30c4\u30a3\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u7761\u7720\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 4,
            mindef: 40,
            slots: 0,
            name: "\u30ae\u30eb\u30aa\u30b9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 2, 0, 1],
            part: 4,
            mindef: 40,
            slots: 1,
            name: "\u30ae\u30eb\u30aa\u30b9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 4,
            mindef: 42,
            slots: 0,
            name: "\u30d7\u30b1\u30d7\u30b1\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u690d\u751f\u5b66": 2,
                "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 3, -3, 0, 1],
            part: 4,
            mindef: 42,
            slots: 1,
            name: "\u30d7\u30b1\u30d7\u30b1\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u690d\u751f\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 4,
            mindef: 42,
            slots: 0,
            name: "\u30dc\u30ed\u30b9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2,
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, -1, 3, -1, 0],
            part: 4,
            mindef: 42,
            slots: 2,
            name: "\u30dc\u30ed\u30b9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 4,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e3\u30ca\u30d5\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u7832\u8853": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [3, -3, -1, -1, 0],
            part: 4,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e3\u30ca\u30d5\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7": 1,
                "\u7832\u8853": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 4,
            mindef: 44,
            slots: 0,
            name: "\u30b8\u30e5\u30e9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u96c6\u4e2d": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 0, 0],
            part: 4,
            mindef: 44,
            slots: 1,
            name: "\u30b8\u30e5\u30e9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u96c6\u4e2d": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 4,
            mindef: 44,
            slots: 0,
            name: "\u30ab\u30ac\u30c1\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u4f53\u8853": 1,
                "\u96f7\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, -3, 3, 0, 0],
            part: 4,
            mindef: 44,
            slots: 2,
            name: "\u30ab\u30ac\u30c1\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 4,
            mindef: 44,
            slots: 0,
            name: "\u30a6\u30eb\u30e0\u30fc\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1,
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 0, 1, 0],
            part: 4,
            mindef: 44,
            slots: 2,
            name: "\u30a6\u30eb\u30e0\u30fc\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 4,
            mindef: 46,
            slots: 0,
            name: "\u30ec\u30a4\u30a2\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -2, 0, -3],
            part: 4,
            mindef: 46,
            slots: 1,
            name: "\u30ec\u30a4\u30a2\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 4,
            mindef: 52,
            slots: 0,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1,
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 0, -3, 0, -4],
            part: 4,
            mindef: 52,
            slots: 1,
            name: "\u30ea\u30aa\u30cf\u30fc\u30c8\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u685c\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 4,
            mindef: 46,
            slots: 0,
            name: "\u30d0\u30eb\u30ad\u30f3\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [0, 2, 0, -1, -2],
            part: 4,
            mindef: 46,
            slots: 1,
            name: "\u30d0\u30eb\u30ad\u30f3\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 4,
            mindef: 48,
            slots: 0,
            name: "\u30ac\u30de\u30eb\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1,
                "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 0, -3, 0, 2],
            part: 4,
            mindef: 48,
            slots: 1,
            name: "\u30ac\u30de\u30eb\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 4,
            mindef: 44,
            slots: 0,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30d5\u30c3\u30c8\u03b1",
            skills: {
                "\u30dc\u30de\u30fc": 2,
                "\u8033\u6813": 1,
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 76,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [4, -3, -1, -2, -3],
            part: 4,
            mindef: 44,
            slots: 1,
            name: "\u30be\u30e9\u30de\u30b0\u30ca\u30d5\u30c3\u30c8\u03b2",
            skills: {
                "\u30dc\u30de\u30fc": 2,
                "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 4,
            mindef: 50,
            slots: 0,
            name: "\u30cf\u30a4\u30e1\u30bf\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u6c37\u8010\u6027": 1,
                "\u7832\u6483\u624b": 1
            },
            type: 3
        },
        {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [0, -1, -2, 3, 0],
            part: 4,
            mindef: 50,
            slots: 1,
            name: "\u30cf\u30a4\u30e1\u30bf\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u7832\u6483\u624b": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 4,
            mindef: 50,
            slots: 0,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u9632\u5fa1": 2,
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, 3, -1, 0],
            part: 4,
            mindef: 50,
            slots: 1,
            name: "\u30a4\u30f3\u30b4\u30c3\u30c8\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u9632\u5fa1": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 4,
            mindef: 52,
            slots: 1,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30d6\u30fc\u30c4\u03b1",
            skills: {
                "\u7814\u7a76\u8005": 1,
                "\u5730\u8cea\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 0, 2, 0, 2],
            part: 4,
            mindef: 52,
            slots: 1,
            name: "\u30d6\u30ea\u30b2\u30a4\u30c9\u30d6\u30fc\u30c4\u03b2",
            skills: {
                "\u7814\u7a76\u8005": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 4,
            mindef: 56,
            slots: 1,
            name: "\u30e9\u30f4\u30a1\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u6563\u5f3e\u30fb\u525b\u5c04\u5f37\u5316": 1,
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -2, 2],
            part: 4,
            mindef: 56,
            slots: 1,
            name: "\u30e9\u30f4\u30a1\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u6563\u5f3e\u30fb\u525b\u5c04\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 4,
            mindef: 54,
            slots: 0,
            name: "\u30ae\u30a8\u30ca\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u6c37\u8010\u6027": 2,
                "\u629c\u5200\u8853\u3010\u6280\u3011": 1,
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [-1, 2, -3, 3, 0],
            part: 4,
            mindef: 54,
            slots: 1,
            name: "\u30ae\u30a8\u30ca\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u6c37\u8010\u6027": 2,
                "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 4,
            mindef: 54,
            slots: 0,
            name: "\u30ac\u30ed\u30f3\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u7d0d\u5200\u8853": 1,
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1,
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, -2, -3, 0],
            part: 4,
            mindef: 54,
            slots: 1,
            name: "\u30ac\u30ed\u30f3\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u7d0d\u5200\u8853": 1,
                "\u60e8\u722a\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 4,
            mindef: 54,
            slots: 0,
            name: "\u30ec\u30a6\u30b9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba": 1,
                "\u5f31\u70b9\u7279\u52b9": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3,
                0, 0
            ],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -2, 1, -3],
            part: 4,
            mindef: 54,
            slots: 1,
            name: "\u30ec\u30a6\u30b9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 4,
            mindef: 56,
            slots: 0,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u96c6\u4e2d": 1,
                "\u30af\u30e9\u30a4\u30de\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 2, 2, -3, -4],
            part: 4,
            mindef: 56,
            slots: 1,
            name: "\u30ea\u30aa\u30bd\u30a6\u30eb\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u96c6\u4e2d": 1,
                "\u706b\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 4,
            mindef: 54,
            slots: 0,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u8010\u9707": 2,
                "\uff2b\uff2f\u8853": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, -2, 0, -3, 2],
            part: 4,
            mindef: 54,
            slots: 2,
            name: "\u30c7\u30a3\u30a2\u30d6\u30ed\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u8010\u9707": 2,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 4,
            mindef: 56,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u901a\u5e38\u5f3e\u30fb\u901a\u5e38\u77e2\u5f37\u5316": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1,
                "\u706b\u4e8b\u5834\u529b": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, -3, 0, -4, 2],
            part: 4,
            mindef: 56,
            slots: 1,
            name: "\u30c7\u30a3\u30a2\u30cd\u30ed\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u901a\u5e38\u5f3e\u30fb\u901a\u5e38\u77e2\u5f37\u5316": 1,
                "\u89d2\u7adc\u306e\u5965\u7fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 4,
            mindef: 60,
            slots: 1,
            name: "\u30ac\u30f3\u30ad\u30f3\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 2,
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [4, -3, 1, -2, -2],
            part: 4,
            mindef: 60,
            slots: 1,
            name: "\u30ac\u30f3\u30ad\u30f3\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1,
                "\u7206\u939a\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 4,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30bc\u30eb\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u30dc\u30de\u30fc": 2,
                "\u629c\u5200\u8853\u3010\u6280\u3011": 1,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [3, 1, -4, -2, -2],
            part: 4,
            mindef: 58,
            slots: 1,
            name: "\u30d0\u30bc\u30eb\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u30dc\u30de\u30fc": 2,
                "\u7206\u9c57\u7adc\u306e\u5b88\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 4,
            mindef: 60,
            slots: 1,
            name: "\u30c0\u30de\u30b9\u30af\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u9632\u5fa1": 2,
                "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 0, 0, 0],
            part: 4,
            mindef: 60,
            slots: 1,
            name: "\u30c0\u30de\u30b9\u30af\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u9632\u5fa1": 2
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 4,
            mindef: 60,
            slots: 0,
            name: "\u30c9\u30fc\u30d9\u30eb\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u653b\u6483": 2,
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 86,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-2, 0, -1, -1, 4],
            part: 4,
            mindef: 60,
            slots: 1,
            name: "\u30c9\u30fc\u30d9\u30eb\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u653b\u6483": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 4,
            mindef: 62,
            slots: 0,
            name: "\u30c7\u30b9\u30ae\u30a2\u30d5\u30a7\u30eb\u30bc\u03b1",
            skills: {
                "\u5320": 2,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 88,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, 2, -2, 3, -4],
            part: 4,
            mindef: 62,
            slots: 2,
            name: "\u30c7\u30b9\u30ae\u30a2\u30d5\u30a7\u30eb\u30bc\u03b2",
            skills: {
                "\u5320": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 4,
            mindef: 64,
            slots: 1,
            name: "\u30aa\u30fc\u30b0\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u6e3e\u8eab": 1,
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1,
                "\u6311\u6226\u8005": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2,
                0, 0
            ],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 1, -3],
            part: 4,
            mindef: 64,
            slots: 1,
            name: "\u30aa\u30fc\u30b0\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u6e3e\u8eab": 1,
                "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 4,
            mindef: 64,
            slots: 0,
            name: "\u30ab\u30a4\u30b6\u30fc\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u529b\u306e\u89e3\u653e": 2,
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 4,
            mindef: 64,
            slots: 1,
            name: "\u30ab\u30a4\u30b6\u30fc\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u529b\u306e\u89e3\u653e": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 4,
            mindef: 64,
            slots: 0,
            name: "\u30af\u30b7\u30e3\u30ca\u30da\u30a4\u30eb\u03b1",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 2,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1,
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [0, 2, -3, 4, -2],
            part: 4,
            mindef: 64,
            slots: 1,
            name: "\u30af\u30b7\u30e3\u30ca\u30da\u30a4\u30eb\u03b2",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 2,
                "\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 4,
            mindef: 64,
            slots: 1,
            name: "\u30a6\u30eb\u30ba\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1,
                "\u7634\u6c17\u8010\u6027": 2,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 4,
            mindef: 64,
            slots: 2,
            name: "\u30a6\u30eb\u30ba\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u7634\u6c17\u8010\u6027": 2,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 4,
            mindef: 64,
            slots: 0,
            name: "\u30ad\u30ea\u30f3\u30ec\u30ac\u30fc\u30b9\u03b1",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 2,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u96f7\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 4,
            mindef: 64,
            slots: 2,
            name: "\u30ad\u30ea\u30f3\u30ec\u30ac\u30fc\u30b9\u03b2",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 2,
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2,
                2, -4
            ],
            part: 4,
            mindef: 72,
            slots: 1,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30d5\u30c3\u30c8\u03b1",
            skills: {
                "\u5f37\u5316\u6301\u7d9a": 1,
                "\u3072\u308b\u307f\u8efd\u6e1b": 1,
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-3, 2, 2, 2, -4],
            part: 4,
            mindef: 72,
            slots: 2,
            name: "\u30bc\u30ce\u30e9\u30fc\u30b8\u30d5\u30c3\u30c8\u03b2",
            skills: {
                "\u51a5\u706f\u9f8d\u306e\u795e\u79d8": 1,
                "\u3072\u308b\u307f\u8efd\u6e1b": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [1,
                0, 0
            ],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 4,
            mindef: 62,
            slots: 1,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30d6\u30fc\u30c4\u03b1",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u98db\u71d5": 1,
                "\u706b\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 15,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 4,
            mindef: 62,
            slots: 1,
            name: "\u30ae\u30eb\u30c9\u30af\u30ed\u30b9\u30d6\u30fc\u30c4\u03b2",
            skills: {
                "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d": 1,
                "\u98db\u71d5": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 4,
            mindef: 70,
            slots: 0,
            name: "\u30b7\u30fc\u30ab\u30fc\u30d1\u30f3\u30c4\u03b1",
            skills: {
                "\u6ed1\u8d70\u5f37\u5316": 1,
                "\u6f5c\u4f0f": 2,
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 2, 2, 2],
            part: 4,
            mindef: 70,
            slots: 1,
            name: "\u30b7\u30fc\u30ab\u30fc\u30d1\u30f3\u30c4\u03b2",
            skills: {
                "\u6f5c\u4f0f": 2,
                "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 4,
            mindef: 58,
            slots: 0,
            name: "\u30d0\u30f3\u30ae\u30b9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u7834\u58ca\u738b": 1,
                "\u65e9\u98df\u3044": 2
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [1, 1, -3, 2, -3],
            part: 4,
            mindef: 58,
            slots: 2,
            name: "\u30d0\u30f3\u30ae\u30b9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u65e9\u98df\u3044": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 4,
            mindef: 72,
            slots: 1,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 2,
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [4, -2, 3, -4, -2],
            part: 4,
            mindef: 72,
            slots: 2,
            name: "\u30de\u30e0\u30ac\u30a4\u30e9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 78,
            slotlevels: [1,
                1, 0
            ],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 1, 4, 1, 1],
            part: 4,
            mindef: 40,
            slots: 2,
            name: "\u30d6\u30ed\u30c3\u30b5\u30e0\u30d6\u30fc\u30c4\u03b1",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 3,
            resist: [1, 4, 1, 1, 1],
            part: 4,
            mindef: 46,
            slots: 1,
            name: "\u30c0\u30a4\u30d0\u30fc\u30d6\u30fc\u30c4\u03b1",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2,
                0, 2
            ],
            part: 4,
            mindef: 42,
            slots: 0,
            name: "\u30d1\u30d4\u30aa\u30e0\u30ac\u30f3\u30d0\u03b1",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2,
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 1,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 42,
            slots: 1,
            name: "\u30d1\u30d4\u30aa\u30e0\u30ac\u30f3\u30d0\u03b2",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 42,
            slots: 0,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30ac\u30f3\u30d0\u03b1",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2,
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 80,
            slotlevels: [1, 0, 0],
            period: {
                gathering: 11,
                village: 99
            },
            sex: 2,
            resist: [-1, -1, 2, 0, 2],
            part: 4,
            mindef: 42,
            slots: 1,
            name: "\u30af\u30a4\u30f3\u30d3\u30fc\u30c8\u30ac\u30f3\u30d0\u03b2",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-4, 4, 1, -1, -3],
            part: 4,
            mindef: 72,
            slots: 2,
            name: "\u30a6\u30eb\u30ba\u30b0\u30ea\u30fc\u30d6\u03b3",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
                "\u56de\u5fa9\u901f\u5ea6": 1,
                "\u5c4d\u5957\u9f8d\u306e\u547d\u8108": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [-3, -2, 4, -2, 2],
            part: 4,
            mindef: 72,
            slots: 1,
            name: "\u30ad\u30ea\u30f3\u30ec\u30ac\u30fc\u30b9\u03b3",
            skills: {
                "\u5e7b\u7363\u306e\u6069\u5bf5": 1,
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2,
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 1, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 1, -3, 1],
            part: 4,
            mindef: 72,
            slots: 2,
            name: "\u30ab\u30a4\u30b6\u30fc\u30b0\u30ea\u30fc\u30f4\u03b3",
            skills: {
                "\u708e\u738b\u9f8d\u306e\u6b66\u6280": 1,
                "\u898b\u5207\u308a": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 50,
                village: 99
            },
            sex: 3,
            resist: [0, -2, -3, 4, -2],
            part: 4,
            mindef: 72,
            slots: 1,
            name: "\u30af\u30b7\u30e3\u30ca\u30da\u30a4\u30eb\u03b3",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2,
				"\u92fc\u9f8d\u306e\u98db\u7fd4": 1
            },
            type: 3
        }, {
            maxdef: 82,
            slotlevels: [3, 0, 0],
            period: {
                gathering: 13,
                village: 99
            },
            sex: 3,
            resist: [2, 2, 0, 0, 3],
            part: 4,
            mindef: 56,
            slots: 1,
            name: "\u84bc\u661f\u30ce\u5c06\u3010\u5177\u8db3\u3011\u03b1",
            skills: {
                "\u706b\u7adc\u306e\u5965\u7fa9": 1,
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 84,
            slotlevels: [1, 1, 0],
            period: {
                gathering: 14,
                village: 99
            },
            sex: 3,
            resist: [3, -3, 3, -3, 3],
            part: 4,
            mindef: 64,
            slots: 2,
            name: "\u30c0\u30f3\u30c6\u30ec\u30b6\u30fc\u03b1",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 2
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 1, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 4,
            mindef: 70,
            slots: 2,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1,
                "\u4f53\u529b\u5897\u5f37": 2,
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 90,
            slotlevels: [2, 2, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [3, 1, 1, -3, -2],
            part: 4,
            mindef: 70,
            slots: 2,
            name: "\u30a8\u30f3\u30d7\u30ec\u30b9\u30b0\u30ea\u30fc\u30f4\u03b2",
            skills: {
                "\u708e\u5983\u9f8d\u306e\u6069\u5bf5": 1,
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        }, {
            maxdef: 92,
            slotlevels: [2, 0, 0],
            period: {
                gathering: 16,
                village: 99
            },
            sex: 3,
            resist: [-2, -2, 3, -2, 4],
            part: 4,
            mindef: 72,
            slots: 1,
            name: "\u30c9\u30e9\u30b1\u30f3\u30b0\u30ea\u30fc\u30f4\u03b1",
            skills: {
                "\u653b\u6483": 2,
                "\u7adc\u9a0e\u58eb\u306e\u8a3c": 1,
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 72,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 1,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 4,
            mindef: 6,
            slots: 0,
            name: "\u30aa\u30ea\u30b8\u30f3\u30b0\u30ea\u30fc\u30f4",
            skills: {},
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6bd2\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6bd2\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6bd2\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6bd2\u8010\u6027": 2
            },
            type: 3
        },
        {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6bd2\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6bd2\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u653b\u6483\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u653b\u6483": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u653b\u6483\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u653b\u6483": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u653b\u6483\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u653b\u6483": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9632\u5fa1\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u9632\u5fa1": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9632\u5fa1\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u9632\u5fa1": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9632\u5fa1\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u9632\u5fa1": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u75fa\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u75fa\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u75fa\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7720\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7761\u7720\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7720\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7761\u7720\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7720\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7761\u7720\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7d76\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7d76\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7d76\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6c17\u7d76\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9632\u98a8\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9632\u98a8\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u98a8\u5727\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9632\u98a8\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u98a8\u5727\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u4f53\u529b\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u4f53\u529b\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 2
            },
            type: 3
        },
        {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u4f53\u529b\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u4f53\u529b\u5897\u5f37": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6cbb\u7652\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0,
                0
            ],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6cbb\u7652\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6cbb\u7652\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u706b\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u706b\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u706b\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u706b\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u706b\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u706b\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0,
                0, 0, 0, 0
            ],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6c34\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6c34\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6c34\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6c34\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6c34\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6c34\u8010\u6027": 3
            },
            type: 3
        },
        {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u96f7\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u96f7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u96f7\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u96f7\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u96f7\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u96f7\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u706b\u708e\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u706b\u708e\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0,
                0
            ],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u706b\u708e\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6d41\u6c34\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6d41\u6c34\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6d41\u6c34\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u96f7\u5149\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u96f7\u5149\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u96f7\u5149\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6bd2\u6483\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6bd2\u6483\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6bd2\u6483\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u75fa\u6483\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u75fa\u6483\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0,
                0
            ],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u75fa\u6483\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7761\u6483\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7761\u6483\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7761\u6483\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\uff2b\uff2f\u306e\u8b77\u77f3\u2160",
            skills: {
                "\uff2b\uff2f\u8853": 1
            },
            type: 3
        },
        {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\uff2b\uff2f\u306e\u8b77\u77f3\u2161",
            skills: {
                "\uff2b\uff2f\u8853": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\uff2b\uff2f\u306e\u8b77\u77f3\u2162",
            skills: {
                "\uff2b\uff2f\u8853": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u596a\u6c17\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u596a\u6c17\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u596a\u6c17\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7832\u8853\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7832\u8853": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7832\u8853\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7832\u8853": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7832\u8853\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7832\u8853": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7121\u98df\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7121\u98df\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7121\u98df\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9244\u58c1\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9244\u58c1\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9244\u58c1\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u53cb\u611b\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u5e83\u57df\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u53cb\u611b\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u5e83\u57df\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u53cb\u611b\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u5e83\u57df\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6301\u7d9a\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6301\u7d9a\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6301\u7d9a\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u65e9\u98df\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u65e9\u98df\u3044": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u65e9\u98df\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u65e9\u98df\u3044": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u65e9\u98df\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u65e9\u98df\u3044": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u52a0\u8b77\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u52a0\u8b77\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0,
                0, 0
            ],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u52a0\u8b77\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u91c7\u914d\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u91c7\u914d\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u91c7\u914d\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u690d\u5b66\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u690d\u751f\u5b66": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0,
                0, 0
            ],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u690d\u5b66\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u690d\u751f\u5b66": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u690d\u5b66\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u690d\u751f\u5b66": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5730\u5b66\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u5730\u8cea\u5b66": 1
            },
            type: 3
        },
        {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5730\u5b66\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u5730\u8cea\u5b66": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5730\u5b66\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u5730\u8cea\u5b66": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6295\u77f3\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6295\u77f3\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6295\u77f3\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6f5c\u4f0f\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6f5c\u4f0f": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6f5c\u4f0f\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6f5c\u4f0f": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6f5c\u4f0f\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6f5c\u4f0f": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7159\u5fa9\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7159\u5fa9\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7159\u5fa9\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6cbc\u6e21\u308a\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6cbc\u6e21\u308a\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6cbc\u6e21\u308a\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6606\u866b\u5b66\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0,
                0
            ],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6606\u866b\u5b66\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6606\u866b\u5b66\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0,
                0, 0, 0
            ],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5a01\u5687\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u5a01\u5687": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5a01\u5687\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u5a01\u5687": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5a01\u5687\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u5a01\u5687": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7832\u6483\u624b\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7832\u6483\u624b": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7832\u6483\u624b\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7832\u6483\u624b": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5c0f\u98df\u306e\u8b77\u77f3",
            skills: {
                "\u6e80\u8db3\u611f": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8ffd\u8de1\u306e\u8b77\u77f3",
            skills: {
                "\u8ffd\u8de1\u306e\u9054\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u4e0d\u5c48\u306e\u8b77\u77f3",
            skills: {
                "\u4e0d\u5c48": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0,
                0, 0, 0
            ],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7b1b\u5439\u304d\u306e\u8b77\u77f3",
            skills: {
                "\u7b1b\u5439\u304d\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u88c5\u586b\u306e\u8b77\u77f3",
            skills: {
                "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u88c2\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u88c2\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u88c2\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u88c2\u50b7\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u65e9\u5fa9\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u65e9\u5fa9\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u65e9\u5fa9\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 3
            },
            type: 3
        },
        {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6c37\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6c37\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6c37\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6c37\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u6c37\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6c37\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u5c5e\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u5c5e\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0,
                0
            ],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u5c5e\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6c37\u7d50\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6c37\u7d50\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6c37\u7d50\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9054\u4eba\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u898b\u5207\u308a": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9054\u4eba\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u898b\u5207\u308a": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9054\u4eba\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u898b\u5207\u308a": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u56de\u907f\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u56de\u907f\u6027\u80fd": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u56de\u907f\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u56de\u907f\u6027\u80fd": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u56de\u907f\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u56de\u907f\u6027\u80fd": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7d0d\u5200\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7d0d\u5200\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7d0d\u5200\u8853": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7d0d\u5200\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7d0d\u5200\u8853": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 4,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7814\u78e8\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7814\u78e8\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0,
                0
            ],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7814\u78e8\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7206\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7206\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7206\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u9f8d\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u9f8d\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u9f8d\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u9f8d\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u9f8d\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u9f8d\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7834\u9f8d\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7834\u9f8d\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7834\u9f8d\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7206\u7834\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7206\u7834\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0,
                0, 0, 0, 0
            ],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7206\u7834\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u629c\u5200\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u629c\u5200\u8853\u3010\u6280\u3011": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u629c\u5200\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u629c\u5200\u8853\u3010\u6280\u3011": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7279\u5c04\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7279\u5c04\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5f37\u8d70\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5f37\u8d70\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u4f53\u8853\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u4f53\u8853": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u4f53\u8853\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u4f53\u8853": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u4f53\u8853\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u4f53\u8853": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u65e9\u6c17\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u65e9\u6c17\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8df3\u8e8d\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8df3\u8e8d\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7206\u5e2b\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30dc\u30de\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7206\u5e2b\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30dc\u30de\u30fc": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7206\u5e2b\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u30dc\u30de\u30fc": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8338\u597d\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8338\u597d\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u899a\u9192\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u899a\u9192\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5320\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u5320": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5320\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u5320": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5320\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u5320": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6ce5\u6d74\u3073\u306e\u8b77\u77f3",
            skills: {
                "\u6ce5\u8010\u6027": 1,
                "\u98db\u3073\u8fbc\u307f": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u4ed5\u639b\u3051\u5f3e\u306e\u8b77\u77f3",
            skills: {
                "\u3053\u3084\u3057\u540d\u4eba": 1,
                "\u9583\u5149\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u72e9\u731f\u751f\u6d3b\u306e\u8b77\u77f3",
            skills: {
                "\u8089\u713c\u304d\u540d\u4eba": 1,
                "\u91e3\u308a\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8abf\u9054\u306e\u8b77\u77f3",
            skills: {
                "\u904b\u642c\u306e\u9054\u4eba": 1,
                "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 5,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u63a1\u96c6\u9244\u4eba\u306e\u8b77\u77f3",
            skills: {
                "\u63a1\u96c6\u306e\u9054\u4eba": 1,
                "\u5265\u304e\u53d6\u308a\u9244\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u9632\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u9632\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u9632\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027": 0
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8033\u6813\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u8033\u6813": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8033\u6813\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u8033\u6813": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8033\u6813\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u8033\u6813": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u9707\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u8010\u9707": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u9707\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u8010\u9707": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u75db\u6483\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u75db\u6483\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u96c6\u4e2d\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u96c6\u4e2d": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u96c6\u4e2d\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u96c6\u4e2d": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u91cd\u6483\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7834\u58ca\u738b": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u91cd\u6483\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7834\u58ca\u738b": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9006\u4e0a\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u9006\u6068\u307f": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9006\u4e0a\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u9006\u6068\u307f": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0,
                0, 0, 0, 0
            ],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5e95\u529b\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u706b\u4e8b\u5834\u529b": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5e95\u529b\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u706b\u4e8b\u5834\u529b": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 6,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6574\u5099\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6574\u5099": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6574\u5099\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6574\u5099": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6574\u5099\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u6574\u5099": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5168\u958b\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u529b\u306e\u89e3\u653e": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5168\u958b\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u529b\u306e\u89e3\u653e": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6311\u6226\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6311\u6226\u8005": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6311\u6226\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6311\u6226\u8005": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7121\u50b7\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7121\u50b7\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6e3e\u8eab\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u6e3e\u8eab": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6e3e\u8eab\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u6e3e\u8eab": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u885d\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u3072\u308b\u307f\u8efd\u6e1b": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u885d\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u3072\u308b\u307f\u8efd\u6e1b": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7634\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u7634\u6c17\u8010\u6027": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7634\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u7634\u6c17\u8010\u6027": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8010\u7634\u306e\u8b77\u77f3\u2162",
            skills: {
                "\u7634\u6c17\u8010\u6027": 3
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u901a\u5e38\u5f3e\u306e\u8b77\u77f3",
            skills: {
                "\u901a\u5e38\u5f3e\u30fb\u901a\u5e38\u77e2\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5fc3\u982d\u6ec5\u5374\u306e\u8b77\u77f3",
            skills: {
                "\u7634\u6c17\u74b0\u5883\u9069\u5fdc": 1,
                "\u71b1\u30c0\u30e1\u30fc\u30b8\u7121\u52b9": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9a0e\u624b\u306e\u8b77\u77f3",
            skills: {
                "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba": 1,
                "\u4e57\u308a\u540d\u4eba": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 7,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8abf\u67fb\u9054\u4eba\u306e\u8b77\u77f3",
            skills: {
                "\u7814\u7a76\u8005": 1,
                "\u5c0e\u87f2\u53cd\u5fdc\u8ddd\u96e2\uff35\uff30": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8d85\u5fc3\u306e\u8b77\u77f3",
            skills: {
                "\u8d85\u4f1a\u5fc3": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0,
                0, 0
            ],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6602\u63da\u306e\u8b77\u77f3\u2160",
            skills: {
                "\u5f37\u5316\u6301\u7d9a": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6602\u63da\u306e\u8b77\u77f3\u2161",
            skills: {
                "\u5f37\u5316\u6301\u7d9a": 2
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8cab\u901a\u5f3e\u306e\u8b77\u77f3",
            skills: {
                "\u8cab\u901a\u5f3e\u30fb\u7adc\u306e\u4e00\u77e2\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6563\u5f3e\u306e\u8b77\u77f3",
            skills: {
                "\u6563\u5f3e\u30fb\u525b\u5c04\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6bd2\u74f6\u306e\u8b77\u77f3",
            skills: {
                "\u6bd2\u30d3\u30f3\u8ffd\u52a0": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u9ebb\u75fa\u74f6\u306e\u8b77\u77f3",
            skills: {
                "\u9ebb\u75fa\u30d3\u30f3\u8ffd\u52a0": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7761\u7720\u74f6\u306e\u8b77\u77f3",
            skills: {
                "\u7761\u7720\u30d3\u30f3\u8ffd\u52a0": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u7206\u7834\u74f6\u306e\u8b77\u77f3",
            skills: {
                "\u7206\u7834\u30d3\u30f3\u8ffd\u52a0": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u98a8\u6c34\u306e\u8b77\u77f3",
            skills: {
                "\u611f\u77e5": 1,
                "\u63a2\u7d22\u8005\u306e\u5e78\u904b": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u75be\u98a8\u306e\u8b77\u77f3",
            skills: {
                "\u6ed1\u8d70\u5f37\u5316": 1,
                "\u98db\u71d5": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u6e1b\u9f8d\u306e\u8b77\u77f3",
            skills: {
                "\u9f8d\u5c01\u529b\u5f37\u5316": 1,
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            type: 3
        }, {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 8,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u5805\u5b88\u306e\u8b77\u77f3",
            skills: {
                "\u30ac\u30fc\u30c9\u5f37\u5316": 1,
                "\u6b7b\u4e2d\u306b\u6d3b": 1
            },
            type: 3
        },
        {
            maxdef: 0,
            slotlevels: [0, 0, 0],
            period: {
                gathering: 3,
                village: 99
            },
            sex: 3,
            resist: [0, 0, 0, 0, 0],
            part: 5,
            mindef: 0,
            slots: 0,
            name: "\u8ffd\u3044\u98a8\u306e\u8b77\u77f3",
            skills: {
                "\u653b\u6483": 1,
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            type: 3
        }
    ];
    var qa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function ra(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var C = Array.prototype,
        sa = C.indexOf ? function(a, b, c) {
            return C.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        D = C.forEach ? function(a, b, c) {
            C.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        E = C.filter ? function(a, b, c) {
            return C.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = r(a) ?
                    a.split("") : a, h = 0; h < d; h++)
                if (h in g) {
                    var m = g[h];
                    b.call(c, m, h, a) && (e[f++] = m)
                }
            return e
        },
        F = C.map ? function(a, b, c) {
            return C.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        ta = C.reduce ? function(a, b, c, d) {
            d && (b = u(b, d));
            return C.reduce.call(a, b, c)
        } : function(a, b, c, d) {
            var e = c;
            D(a, function(c, g) {
                e = b.call(d, e, c, g, a)
            });
            return e
        },
        ua = C.every ? function(a, b, c) {
            return C.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = r(a) ?
                    a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        };

    function va(a) {
        var b = G,
            c = 0;
        D(a, function(a, e, f) {
            b.call(void 0, a, e, f) && ++c
        }, void 0);
        return c
    }

    function H(a, b) {
        var c = wa(a, b);
        return 0 > c ? null : r(a) ? a.charAt(c) : a[c]
    }

    function wa(a, b) {
        for (var c = a.length, d = r(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function I(a, b) {
        return 0 <= sa(a, b)
    }

    function xa(a, b) {
        var c = sa(a, b),
            d;
        (d = 0 <= c) && C.splice.call(a, c, 1);
        return d
    }

    function ya(a, b) {
        var c = wa(a, b);
        return 0 <= c ? (C.splice.call(a, c, 1), !0) : !1
    }

    function Aa(a) {
        return C.concat.apply(C, arguments)
    }

    function Ba(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ca(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (ja(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function Da(a, b, c) {
        return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
    }

    function Ea(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++],
                f = ka(e) ? "o" + (e[la] || (e[la] = ++ma)) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    }

    function Fa(a, b) {
        a.sort(b || Ga)
    }

    function Ga(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    var J;
    a: {
        var Ha = l.navigator;
        if (Ha) {
            var Ia = Ha.userAgent;
            if (Ia) {
                J = Ia;
                break a
            }
        }
        J = ""
    };

    function K(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Ja(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ka(a, b) {
        var c = {},
            d;
        for (d in a) c[d] = b.call(void 0, a[d], d, a);
        return c
    }

    function La(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Pa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function Qa(a, b, c) {
        for (var d in a)
            if (b.call(c, a[d], d, a)) return d
    }

    function Ra(a, b) {
        var c = Qa(a, b, void 0);
        return c && a[c]
    }
    var Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ta(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Sa.length; f++) c = Sa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function Ua(a) {
        var b = arguments.length;
        if (1 == b && ia(arguments[0])) return Ua.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };

    function M() {
        return -1 != J.indexOf("Edge")
    };
    var Va = -1 != J.indexOf("Opera") || -1 != J.indexOf("OPR"),
        N = -1 != J.indexOf("Edge") || -1 != J.indexOf("Trident") || -1 != J.indexOf("MSIE"),
        Wa = -1 != J.indexOf("Gecko") && !(-1 != J.toLowerCase().indexOf("webkit") && !M()) && !(-1 != J.indexOf("Trident") || -1 != J.indexOf("MSIE")) && !M(),
        Xa = -1 != J.toLowerCase().indexOf("webkit") && !M();

    function Ya() {
        var a = J;
        if (Wa) return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (N && M()) return /Edge\/([\d\.]+)/.exec(a);
        if (N) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Xa) return /WebKit\/(\S+)/.exec(a)
    }

    function Za() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }
    var $a = function() {
            if (Va && l.opera) {
                var a = l.opera.version;
                return "function" == ha(a) ? a() : a
            }
            var a = "",
                b = Ya();
            b && (a = b ? b[1] : "");
            return N && !M() && (b = Za(), b > parseFloat(a)) ? String(b) : a
        }(),
        ab = {};

    function O(a) {
        var b;
        if (!(b = ab[a])) {
            b = 0;
            for (var c = qa(String($a)).split("."), d = qa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "",
                    m = /(\d*)(\D*)/g,
                    q = /(\d*)(\D*)/g;
                do {
                    var t = m.exec(g) || ["", "", ""],
                        p = q.exec(h) || ["", "", ""];
                    if (0 == t[0].length && 0 == p[0].length) break;
                    b = ra(0 == t[1].length ? 0 : parseInt(t[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || ra(0 == t[2].length, 0 == p[2].length) || ra(t[2], p[2])
                } while (0 == b)
            }
            b = ab[a] = 0 <= b
        }
        return b
    }
    var bb = l.document,
        cb = Za(),
        db = !bb || !N || !cb && M() ? void 0 : cb || ("CSS1Compat" == bb.compatMode ? parseInt($a, 10) : 5);
    !Wa && !N || N && N && (M() || 9 <= db) || Wa && O("1.9.1");
    N && O("9");
    Ua("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    N && O(8);

    function P(a) {
        return "object" === typeof a && a && 0 === a.gb ? a.content : String(a).replace(eb, fb)
    }
    var gb = /['()]/g;

    function hb(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function ib(a) {
        if ("object" === typeof a && 2 === a.gb) return String(a).replace(jb, kb);
        a = encodeURIComponent(String(String(a)));
        gb.lastIndex = 0;
        return gb.test(a) ? a.replace(gb, hb) : a
    }
    var lb = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function fb(a) {
        return lb[a]
    }
    var mb = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function kb(a) {
        return mb[a]
    }
    var eb = /[\x00\x22\x26\x27\x3c\x3e]/g,
        jb = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;

    function pb(a) {
        for (var b = '<style id="checkedskillstyle"></style>' + (a.lb ? '<div class="alert alert-danger">\u30ed\u30fc\u30ab\u30eb\u30b9\u30c8\u30ec\u30fc\u30b8\u304c\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002<br>\u6709\u52b9\u306b\u3057\u3066\u304b\u3089\u30da\u30fc\u30b8\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044</div>' : "") + '<ul class="nav nav-tabs"><li id=\'tab-search\' class="active"><a href="#">\u691c\u7d22</a></li><li id=\'tab-myset\'><a href="#">\u30de\u30a4\u30bb\u30c3\u30c8</a></li><li id=\'tab-excludeinclude\'><a href="#">\u88c5\u5099\u8a2d\u5b9a</a></li></ul><br><div id="panecontainer" class="showsearchpane"><div id=\'searchpane\' class="pane">',
                c = "<select id='weapon'>", d = a.nb, e = d.length, f = 0; f < e; f++) var g = d[f],
            c = c + ('<option value="' + P(g.name) + '">' + P(g.name) + "</option>");
        c = "<div class=filters><select id='sex'><option value=1>\u7537\u6027</option><option value=2>\u5973\u6027</option></select></div><input type=hidden value=20 id='period-gathering'><div class=filters>" + (c + "</select>") + '</div><div class=filters>\u7d50\u679c\u4ef6\u6570<input id="limit" value="200"></div><br style="clear:both"><div class=filters>\u6700\u4f4e\u9632\u5fa1\u529b<input id="mindef" value="0"></div><div class=filters>' +
            qb({
                label: "\u706b\u8010\u6027",
                id: "minres_fire"
            }) + "</div><div class=filters>" + qb({
                label: "\u6c34\u8010\u6027",
                id: "minres_water"
            }) + "</div><div class=filters>" + qb({
                label: "\u96f7\u8010\u6027",
                id: "minres_thunder"
            }) + "</div><div class=filters>" + qb({
                label: "\u6c37\u8010\u6027",
                id: "minres_ice"
            }) + "</div><div class=filters>" + qb({
                label: "\u9f8d\u8010\u6027",
                id: "minres_dragon"
            }) + "</div><div id=skilllistcontainer>";
        d = "";
        a = a.i;
        e = a.length;
        for (f = 0; f < e; f++)
            for (var g = a[f], d = d + ('<div class="panel panel-default skillgenre"><div class="panel-body">' +
                    P(g.aa) + "</div></div>"), g = g.i, h = g.length, m = 0; m < h; m++) {
                for (var q = g[m], d = d + ('<select name="skillcb-' + P(q.D) + "\" skillpointname='" + P(q.D) + '\' class="skillitem" onchange="onChangeSkill()"><option value="' + P(q.D) + 'LV0" exclude=1>' + P(q.D) + 'LV0</option><option value="" selected>' + P(q.D) + "</option>"), q = q.Qa, t = q.length, p = 0; p < t; p++) var w = q[p],
                    d = d + ('<option value="' + P(w.name) + '">' + P(w.name) + "</option>");
                d += "</select>"
            }
        return b + (c + (d + "<div style='clear:both'><button id=searchbutton><span class='glyphicon glyphicon-search'></span>\u691c\u7d22</button> <button id=extraskillsearchbutton><span class='glyphicon glyphicon-search'></span>\u8ffd\u52a0\u30b9\u30ad\u30eb\u691c\u7d22</button> <button id=resetbutton>\u30ea\u30bb\u30c3\u30c8</button></div><div id=results></div>") +
            "</div>") + "</div><div id='mysetpane' class=\"pane\"></div><div id='excludeincludepane' class=\"pane\"></div></div>"
    }

    function rb(a) {
        var b = "";
        a = a.i;
        for (var c = a.length, d = 0; d < c; d++) b += ".skill-" + P(a[d]) + ",";
        return b + "\n    .dummy-cls {\n      background: #ffc;\n    }\n  "
    }

    function qb(a) {
        a = P(a.label) + '<select id="' + P(a.id) + '"><option value="-100">--</option>';
        for (var b = 0; 51 > b; b++) a += "<option value=" + P(b - 25) + ">" + P(b - 25) + "</option>";
        return a + "</select>"
    }

    function sb(a) {
        return P(a.Ta) + "\u306e\u691c\u7d22\u7d50\u679c " + P(a.count) + "\u4ef6(" + P(a.Wa) + "sec)"
    }

    function tb(a) {
        var b = "";
        if (0 < a.i.length) {
            for (var c = "", d = a.i, e = d.length, f = 0; f < e; f++) c += P(d[f]) + " ";
            b += sb({
                Ta: c,
                count: a.c.length,
                Wa: a.time
            });
            b += a.c.length >= a.ca ? '<div class="alert alert-warning">\u4e00\u81f4\u3059\u308b\u7d50\u679c\u304c' + P(a.ca) + "\u3092\u8d8a\u3048\u307e\u3057\u305f\u305f\u3081\u3001\u691c\u7d22\u3092\u6253\u3061\u5207\u308a\u307e\u3057\u305f\u3002<br>\u9632\u5fa1\u529b\u306e\u9ad8\u3044\u7d44\u307f\u5408\u308f\u305b\u304c\u542b\u307e\u308c\u3066\u3044\u306a\u3044\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002<br>\u3088\u308a\u591a\u304f\u306e\u7d50\u679c\u3092\u898b\u308b\u305f\u3081\u306b\u306f\u3001\u7d50\u679c\u4ef6\u6570\u306e\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002</div>" : ""
        }
        return b +=
            0 < a.c.length ? ub({
                Ua: a.c,
                qa: "resultitem"
            }) : '<div class="alert alert-warning">\u4e00\u81f4\u3059\u308b\u88c5\u5099\u304c\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002</div>' + (a.jb ? '<div class="alert alert-warning"><a href="#" onclick="return onTabClicked(\'excludeinclude\');">\u88c5\u5099\u56fa\u5b9a/\u9664\u5916\u306e\u8a2d\u5b9a</a>\u304c\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u8a2d\u5b9a\u3092\u5916\u3059\u3053\u3068\u3067\u4e00\u81f4\u3059\u308b\u7d50\u679c\u304c\u898b\u3064\u304b\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002</div>' :
                "") + (a.ib ? '<div class="alert alert-warning">\u8010\u6027\u30fb\u9632\u5fa1\u529b\u306e\u8a2d\u5b9a\u304c\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u8a2d\u5b9a\u3092\u5916\u3059\u3053\u3068\u3067\u4e00\u81f4\u3059\u308b\u7d50\u679c\u304c\u898b\u3064\u304b\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002</div>' : "")
    }

    function ub(a) {
        for (var b = '<div class=" table-responsive"><table class="table table-hover" id="results-table"><tr><th>\u9632\u5fa1</th><th>\u982d</th><th>\u80f4</th><th>\u8155</th><th>\u8170</th><th>\u811a</th><th>\u8b77\u77f3</th></tr>', c = a.Ua, d = c.length, e = 0; e < d; e++) {
            for (var f = c[e], b = b + ("<tr id='" + P(a.qa) + "-overview-" + P(e) + '\' class="resultitem resultitemoverview" onclick=\'toggleResult("' + P(a.qa) + '", ' + P(e) + ")'><td class='totaldefence'>" + P(f.I) + "</td>"), g = 0; 6 > g; g++) b += "<td class='equipmentitem'>" +
                vb({
                    f: f.f[g]
                }) + "</td>";
            b += "</tr>";
            if (f.i) {
                for (var b = b + ('<tr class="resultitem skillnamerow resultitemoverview" onclick=\'toggleResult("' + P(a.qa) + '", ' + P(e) + ')\'><td colspan=7><span class="weaponslot">' + (f.f[6] ? P(f.f[6].name) : "") + "</span>"), f = f.i, g = f.length, h = 0; h < g; h++) b += P(f[h]) + " ";
                b += "</td></tr>"
            }
            b += "<tr id='" + P(a.qa) + "-details-" + P(e) + '\' class="resultitem resultdetailsrow" style="display:none"><td colspan=7></td></tr>'
        }
        return b + "</table></div>"
    }

    function wb(a) {
        for (var b = '<table class="table table-striped" style="width:auto"><tr><th>\u30dd\u30a4\u30f3\u30c8</th>' + (a.c[6] ? "<th>\u6b66\u5668</th>" : "") + "<th>\u982d</th><th>\u80f4</th><th>\u8155</th><th>\u8170</th><th>\u811a</th><th>\u8b77\u77f3</th><th>\u88c5\u98fe\u54c1</th><th>\u5408\u8a08</th></tr>", c = a.i, d = c.length, e = 0; e < d; e++) {
            for (var f = c[e], b = b + ('<tr><td><a href="/skills/name/' + ib(f.name) + '" target="_blank">' + P(f.name) + "</a></td>" + (a.c[6] ? "<td>" + (a.c[6].i[f.name] ? P(a.c[6].i[f.name]) : "") +
                    "</td>" : "")), g = 0; 6 > g; g++) b += "<td>" + (a.c[g] ? a.c[g].P ? a.c[1].i[f.name] ? '<span class="body-dup-point">' + P(a.c[1].i[f.name]) + "</span>" : "" : a.c[g].i[f.name] ? P(a.c[g].i[f.name]) : "" : "") + "</td>";
            b += "<td>" + (a.C[f.name] ? P(a.C[f.name]) : "") + "</td><td>" + P(f.h) + "</td></tr>"
        }
        b += "<tr><td>\u30b9\u30ed\u30c3\u30c8</td>" + (a.c[6] ? "<td>" + (a.c[6].B ? P(a.c[6].B[0]) + "-" + P(a.c[6].B[1]) + "-" + P(a.c[6].B[2]) : P(a.c[6].A)) + "</td>" : "");
        for (c = 0; 6 > c; c++) b += "<td>" + (a.c[c] ? a.c[c].P ? '<span class="body-dup-point">' + P(a.c[1].A) + "</span>" :
            a.c[c].B ? P(a.c[c].B[0]) + "-" + P(a.c[c].B[1]) + "-" + P(a.c[c].B[2]) : P(a.c[c].A) : "") + "</td>";
        b += '<td></td><td></td></tr></table><table class="table table-striped" style="width:auto"><tr><th>\u706b</th><th>\u6c34</th><th>\u96f7</th><th>\u6c37</th><th>\u9f8d</th><th>|</th><th>\u30b9\u30ed\u30c3\u30c8</th><th>LV1</th><th>LV2</th><th>LV3</th></tr><tr>';
        c = a.U;
        d = c.length;
        for (e = 0; e < d; e++) b += "<td>" + P(c[e]) + "</td>";
        return b += "<td>|</td><td>\u7a7a\u304d</td><td>" + P(a.Aa[1]) + "</td><td>" + P(a.Aa[2]) + "</td><td>" + P(a.Aa[3]) +
            "</td></tr></table>" + (a.sa ? '<br style="clear:both">' + (a.ba ? "<div>" + xb({
                id: a.ba
            }) + "<br><button onclick=\"onRemoveMySetClick('" + P(a.ba) + "')\">\u30de\u30a4\u30bb\u30c3\u30c8\u304b\u3089\u524a\u9664</button></div>" : a.ia ? "<div><button onclick=\"onRemoveMySetClick('" + P(a.ia) + "')\">\u30de\u30a4\u30bb\u30c3\u30c8\u304b\u3089\u524a\u9664</button></div>" : "") : "")
    }

    function xb(a) {
        return "" + ('<a class="mysetlink" href="/sim/show/' + P(a.id) + '" target="_blank">URL: /sim/show/' + P(a.id) + "</a>")
    }

    function vb(a) {
        return "" + (a.f ? a.link ? '<a href="/equipments/name/' + ib(a.f.link || a.f.name) + '" target="_blank">' + P(a.f.name) + "</a>" : P(a.f.name) : "\u306a\u3057")
    }

    function yb(a) {
        return "" + zb({
            f: a.f,
            C: a.C,
            N: a.N,
            G: !0,
            Xa: !0
        })
    }

    function Ab(a) {
        var b = "";
        if (a.O && 0 < a.O.length) {
            for (var c = a.O, d = c.length, e = 0; e < d; e++) var f = c[e],
                b = b + (f ? ".eq" + f.replace(/[ +]/g, "_") + ".glyphicon-pushpin," : "");
            b += "#dummy{color:green}"
        }
        if (a.F) {
            a = a.F;
            c = a.length;
            for (d = 0; d < c; d++)
                for (var e = a[d], f = e.length, g = 0; g < f; g++) var h = e[g],
                    b = b + (h ? ".eq" + h.replace(/[ +]/g, "_") + ".glyphicon-minus-sign," : "");
            b += "#dummy{color:red}"
        }
        return b
    }

    function Bb(a) {
        for (var b = '<div class="includeexclude-section"><div class="panel panel-default"><div class="panel-heading">' + P(a.ea) + ' \u56fa\u5b9a</div><div class="panel-body"><a href="#" onclick="return onPinEquipmentRemove(this);" equip="' + P(a.fa) + '" part="' + P(a.o) + '"><span class="glyphicon glyphicon-remove"></span></a><select class="pin-select" name="pinned' + P(a.o) + '" part=' + P(a.o) + ' onchange="onPinEquipmentChange(this);"><option value="">\u306a\u3057</option>', c = a.c, d = c.length, e = 0; e < d; e++) var f =
            c[e],
            b = b + ('<option value="' + P(f.name) + '"' + (f.name == a.fa ? " selected" : "") + ">" + P(f.name) + "</option>");
        b += '<option value="">\u306a\u3057</option></select></div><div class="panel-heading">' + P(a.ea) + ' \u9664\u5916</div><div class="panel-body">';
        c = a.F;
        d = c.length;
        for (e = 0; e < d; e++) f = c[e], b += '<div><a href="#" onclick="return onExcludeEquipment(this);" equip="' + P(f) + '" part="' + P(a.o) + '"><span class="glyphicon glyphicon-remove"></span></a> ' + P(f) + "</div>";
        return b + "</div></div></div>"
    }

    function Cb(a) {
        var b = '<div class="includeexclude-container">' + Bb({
            ea: "\u982d",
            o: 0,
            c: a.c[0],
            fa: a.O[0],
            F: a.F[0]
        }) + Bb({
            ea: "\u80f4",
            o: 1,
            c: a.c[1],
            fa: a.O[1],
            F: a.F[1]
        }) + Bb({
            ea: "\u8155",
            o: 2,
            c: a.c[2],
            fa: a.O[2],
            F: a.F[2]
        }) + Bb({
            ea: "\u8170",
            o: 3,
            c: a.c[3],
            fa: a.O[3],
            F: a.F[3]
        }) + Bb({
            ea: "\u811a",
            o: 4,
            c: a.c[4],
            fa: a.O[4],
            F: a.F[4]
        }) + Bb({
            ea: "\u8b77\u77f3",
            o: 5,
            c: a.c[5],
            fa: a.O[5],
            F: a.F[5]
        }) + "</div>";
        a = a.C;
        for (var c = a.length, d = 0; d < c; d++)
            for (var e = a[d], b = b + ('<div class="panel panel-default skillgenre"><div class="panel-body">' +
                    P(e.aa) + "</div></div>"), e = e.C, f = e.length, g = 0; g < f; g++) {
                for (var h = e[g], b = b + ('<div class="deco-setting">' + P(h.name) + "<select deconame='" + P(h.name) + "' onchange=\"onDecoCountChange(this.getAttribute('deconame'), parseInt(this.value));\">"), m = h.max + 1, q = 0; q < m; q++) b += '<option value="' + P(q) + '" ' + (q == h.count ? "selected" : "") + ">" + P(q) + "</option>";
                b += "</select></div>"
            }
        return b + '<br style=clear:both><button onclick="setAllDecoCount(7)">\u5168\u3066\u306e\u88c5\u98fe\u54c1\u306e\u6240\u6301\u6570\u3092\u6700\u5927\u306b\u3059\u308b</button><button onclick="setAllDecoCount(0)">\u5168\u3066\u306e\u88c5\u98fe\u54c1\u306e\u6240\u6301\u6570\u30920\u306b\u3059\u308b</button><hr><div><div>\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u88c5\u98fe\u54c1\u306e\u6240\u6301\u6570\u306e\u30c7\u30fc\u30bf\u3092\u4e0b\u8a18\u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u306b\u66f8\u304d\u51fa\u3057\u307e\u3059\u3002\u30b3\u30d4\u30fc\u3057\u305f\u3082\u306e\u3092\u3069\u3053\u304b\u3067\u4fdd\u5b58\u3057\u3066\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u884c\u3048\u307e\u3059\u3002\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u3057\u305f\u30c7\u30fc\u30bf\u306f\u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u306b\u8cbc\u308a\u4ed8\u3051\u3066\u3001\u30a4\u30f3\u30dd\u30fc\u30c8\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3053\u3068\u3067\u88c5\u98fe\u54c1\u306e\u6240\u6301\u6570\u3092\u8aad\u307f\u8fbc\u3081\u307e\u3059\u3002</div><div><button onclick="exportDecos()">\u30a8\u30af\u30b9\u30dd\u30fc\u30c8</button></div><textarea id="decoimportexport" style="width:100%"></textarea><div><button onclick="importDecos()">\u30a4\u30f3\u30dd\u30fc\u30c8</button></div></div>'
    }

    function Db(a) {
        var b = "<tr><td>" + P(a.ja) + "</td><td>" + (a.f ? P(a.f.I) : "0") + "</td><td>" + vb({
            f: a.f,
            link: !0
        }) + "</td>";
        a = a.G ? "<td>" + (a.f ? '<a href="#" onclick="return onPinEquipment(this);" equip="' + P(a.f.name) + '" part="' + P(a.f.o) + '"><span class="pinex eq' + a.f.name.replace(/[ +]/g, "_") + ' glyphicon glyphicon-pushpin"></span></a> <a href="#" onclick="return onExcludeEquipment(this);" equip="' + P(a.f.name) + '" part="' + P(a.f.o) + '"><span class="pinex eq' + a.f.name.replace(/[ +]/g, "_") + ' glyphicon glyphicon-minus-sign"></span></a>' :
            "") + "</td>" : "";
        return b + a + "<tr>"
    }

    function zb(a) {
        var b = '<table class="saved-result-element table table-striped" style="width:auto;"><tr><th>\u90e8\u4f4d</th><th>\u9632\u5fa1\u529b</th><th>\u540d\u524d</th>' + (a.G ? "<th>\u56fa\u5b9a\u30fb\u9664\u5916</th>" : "") + Db({
            ja: "\u982d",
            f: a.f[0],
            G: a.G
        }) + Db({
            ja: "\u80f4",
            f: a.f[1],
            G: a.G
        }) + Db({
            ja: "\u8155",
            f: a.f[2],
            G: a.G
        }) + Db({
            ja: "\u8170",
            f: a.f[3],
            G: a.G
        }) + Db({
            ja: "\u811a",
            f: a.f[4],
            G: a.G
        }) + Db({
            ja: "\u8b77\u77f3",
            f: a.f[5],
            G: a.G
        });
        if (a.Xa) {
            b += "<tr><td>\u88c5\u98fe\u54c1</td><td colspan='" + (a.G ? "3" : "2") +
                "'>";
            if (a.C)
                for (var c = a.C, d = c.length, e = 0; e < d; e++) var f = c[e],
                    b = b + (P(f.M.name) + "* " + P(f.count) + " ");
            if (a.N && a.N.length)
                for (b += (a.C && a.C.length ? "<br>" : "") + "\u80f4 ", a = a.N, c = a.length, d = 0; d < c; d++) e = a[d], b += P(e.M.name) + "* " + P(e.count) + " ";
            b += " </td></tr>"
        }
        return b + "</table>"
    }

    function Eb(a) {
        for (var b = "", c = a.bb, d = c.length, e = 0; e < d; e++) b += P(c[e]) + " ";
        b = "" + sb({
            Ta: b,
            count: a.i.length,
            Wa: a.time
        });
        a = a.i;
        c = a.length;
        if (0 < c)
            for (d = 0; d < c; d++) e = a[d], b += '<div class="extraskillrow"><a href="#" class="extraskills skill-' + P(e) + '" onclick="return onExtraSkillClick(\'' + P(e) + "')\">" + P(e) + "</a></div>";
        else b += "<div>\u8ffd\u52a0\u3067\u304d\u308b\u30b9\u30ad\u30eb\u306f\u3042\u308a\u307e\u305b\u3093\u3067\u3057\u305f</div>";
        return b
    };

    function Fb(a) {
        if ("function" == typeof a.T) return a.T();
        if (r(a)) return a.split("");
        if (ja(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return La(a)
    }

    function Gb(a) {
        if ("function" == typeof a.S) return a.S();
        if ("function" != typeof a.T) {
            if (ja(a) || r(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++) b.push(c);
                return b
            }
            return Pa(a)
        }
    }

    function Hb(a, b) {
        if ("function" == typeof a.forEach) a.forEach(b, void 0);
        else if (ja(a) || r(a)) D(a, b, void 0);
        else
            for (var c = Gb(a), d = Fb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
    };

    function G(a) {
        return a
    };
    var Ib = "StopIteration" in l ? l.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Jb() {}
    Jb.prototype.next = function() {
        throw Ib;
    };
    Jb.prototype.oa = function() {
        return this
    };

    function Kb(a) {
        if (a instanceof Jb) return a;
        if ("function" == typeof a.oa) return a.oa(!1);
        if (ja(a)) {
            var b = 0,
                c = new Jb;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Ib;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Lb(a, b) {
        if (ja(a)) try {
            D(a, b, void 0)
        } catch (c) {
            if (c !== Ib) throw c;
        } else {
            a = Kb(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (d) {
                if (d !== Ib) throw d;
            }
        }
    }

    function Mb(a) {
        if (ja(a)) return Ba(a);
        a = Kb(a);
        var b = [];
        Lb(a, function(a) {
            b.push(a)
        });
        return b
    };

    function Nb(a, b) {
        this.b = {};
        this.a = [];
        this.v = this.j = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) Ob(this, arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof Nb ? (c = a.S(), d = a.T()) : (c = Pa(a), d = La(a));
            for (var e = 0; e < c.length; e++) Ob(this, c[e], d[e])
        }
    }
    k = Nb.prototype;
    k.T = function() {
        Pb(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    k.S = function() {
        Pb(this);
        return this.a.concat()
    };
    k.clear = function() {
        this.b = {};
        this.v = this.j = this.a.length = 0
    };
    k.remove = function(a) {
        return Qb(this.b, a) ? (delete this.b[a], this.j--, this.v++, this.a.length > 2 * this.j && Pb(this), !0) : !1
    };

    function Pb(a) {
        if (a.j != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Qb(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.j != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Qb(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    }

    function Rb(a, b) {
        return Qb(a.b, b) ? a.b[b] : void 0
    }

    function Ob(a, b, c) {
        Qb(a.b, b) || (a.j++, a.a.push(b), a.v++);
        a.b[b] = c
    }
    k.forEach = function(a, b) {
        for (var c = this.S(), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, Rb(this, e), e, this)
        }
    };
    k.clone = function() {
        return new Nb(this)
    };
    k.oa = function(a) {
        Pb(this);
        var b = 0,
            c = this.v,
            d = this,
            e = new Jb;
        e.next = function() {
            if (c != d.v) throw Error("The map has changed since the iterator was created");
            if (b >= d.a.length) throw Ib;
            var e = d.a[b++];
            return a ? e : d.b[e]
        };
        return e
    };

    function Qb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function Vb(a, b) {
        var c = arguments;
        return a.replace(/\{(\d+)\}/g, function(a, b) {
            return c[parseInt(b, 10) + 1]
        })
    }

    function Wb() {
        if (!document.location.hash) return {};
        var a = {};
        D(document.location.hash.split("#")[1].split("&"), function(b) {
            b = b.split("=");
            a[b[0]] = decodeURI(b[1])
        });
        return a
    }

    function Xb(a, b) {
        var c = "#skills=" + encodeURI(a.join(","));
        K(b, function(a, b) {
            c += "&" + b + "=" + encodeURI(a)
        });
        document.location = c
    }

    function Yb() {
        var a = {};
        K(Zb, function(b, c) {
            var d = Q(c);
            a[b[0]] = b[1]("checkbox" == d.type ? d.checked : d.value)
        });
        return a
    }

    function Q(a) {
        return document.getElementById(a)
    }

    function $b() {};
    var ac, bc, cc, dc, ec;
    ec = ["\u80f4\u7cfb\u7d71\u500d\u5316", "\u80f4\u7cfb\u7d71\u500d\u52a0"];
    dc = new RegExp("(.*)(" + ec.join("|") + ")(.+)");
    cc = /(\u5263\u58eb|\u30ac\u30f3\u30ca\u30fc)(\d)\u30b9\u30ed\u30c3\u30c8(.+)/;
    bc = /LV(\d(?:-\d)?(?:-\d)?)\u30b9\u30ed\u30c3\u30c8(.+)/;
    ac = "\u982d \u80f4 \u8155 \u8170 \u8db3 \u8b77\u77f3".split(" ");
    var R = null,
        fc = null;

    function gc(a) {
        switch (a) {
            case 2:
                return "\u30ac\u30f3\u30ca\u30fc";
            case 1:
                return "\u5263\u58eb";
            default:
                return ""
        }
    }

    function hc(a, b, c, d) {
        return d.part == b && d.slots == a && d.type & c
    }

    function ic(a, b, c) {
        return c.part == b && c.slotlevels[0] == a[0] && c.slotlevels[1] == a[1] && c.slotlevels[2] == a[2]
    }

    function jc(a, b, c) {
        return c.part == a && c.type == b && Qa(c.skills, function(a, b) {
            return I(ec, b)
        })
    }

    function kc(a) {
        a = F(a, function(a) {
            return a.maxdef
        });
        return Math.max.apply(Math, a)
    }

    function lc(a) {
        a = F(a, function(a) {
            return a.I
        });
        return Math.max.apply(Math, a)
    }

    function mc(a, b) {
        if (!a) return null;
        var c = null,
            d = nc(a, b);
        if (!d) {
            var e = ac[b],
                f = a.match(cc);
            if (f && f[3] == e) var g = "\u30ac\u30f3\u30ca\u30fc" == f[1] ? 2 : 1,
                f = Number(f[2]),
                e = E(R, v(hc, f, b, g)),
                c = kc(e),
                c = new oc(b, g, f, null, c, e);
            else if ((f = a.match(dc)) && f[3] == e) g = "\u30ac\u30f3\u30ca\u30fc" == f[1] ? 2 : 1, e = E(R, v(jc, b, g)), c = kc(e), c = new pc(f[2], b, g, c);
            else if ((f = a.match(bc)) && f[2] == e) {
                g = f[1].split("-");
                f = g.length;
                for (g = F(g, function(a) {
                        return parseInt(a, 10)
                    }); 3 > g.length;) g.push(0);
                e = E(R, v(ic, g, b));
                c = kc(e);
                c = new oc(b, 3, f,
                    g, c, e)
            }
        }
        if (!c) {
            var f = 0,
                e = {},
                c = 1,
                h = g = null;
            d && (f = d.slots, e = d.skills, c = d.maxdef, g = d.resist, h = d.slotlevels);
            c = new S(a, b, f, h, e, c, g)
        }
        return c
    }

    function qc(a, b) {
        for (var c = [b], d = 0; d < b.length; d++)
            if (b[d] instanceof a) {
                var e = [];
                D(b[d].c, function(a) {
                    Ca(e, F(c, function(b) {
                        b = Ba(b);
                        b[a.o] = a;
                        return b
                    }))
                });
                c = e
            }
        return c
    }

    function S(a, b, c, d, e, f, g) {
        this.name = a;
        this.o = b;
        this.A = c;
        this.B = d;
        this.i = e;
        this.I = f || 0;
        this.U = g || [0, 0, 0, 0, 0];
        this.P = !!Qa(e, function(a, b) {
            return I(ec, b)
        })
    }
    S.prototype.link = null;

    function rc(a) {
        return new S(a.name, a.part, a.slots, a.slotlevels, a.skills, a.maxdef, a.resist)
    }

    function nc(a, b) {
        return H(R, v(function(a, b, e) {
            return e.part == b && e.name == a
        }, a, b))
    }
    var sc = {
            rb: 0,
            pb: 1,
            ob: 2,
            tb: 3,
            sb: 4,
            qb: 5,
            ub: 6
        },
        tc = !0;

    function uc(a, b) {
        var c = a.name,
            d = a.slots,
            e = a.slotlevels,
            f = a.skills;
        tc && 5 == a.part && (c = vc(f, d));
        S.call(this, c, a.part, d, e, f, a.maxdef, a.resist);
        this.W = b
    }
    A(uc, S);

    function vc(a, b) {
        var c = "";
        K(a, function(a, b) {
            c += b + ":" + a + " "
        });
        0 < b && (c += Vb("\u30b9\u30ed{0}", b));
        return c
    }

    function wc(a, b) {
        var c = a[0],
            d = Ja(c.i, function(a, c) {
                return I(b, c)
            }),
            e = Math.max.apply(Math, F(a, function(a) {
                return a.I
            }));
        S.call(this, "", c.o, c.A, c.B, d, e);
        this.W = c.W;
        this.c = a
    }
    A(wc, S);

    function xc(a, b, c) {
        return a.A != b.A || a.o != b.o ? !1 : ua(c, function(c) {
            return a.i[c] == b.i[c]
        })
    }

    function yc(a, b) {
        for (var c = [], d; d = a.shift();) {
            for (var e = [], f = 0; f < a.length && a[f].W == d.W; f++) xc(d, a[f], b) && e.push(a[f]);
            0 < e.length ? (D(e, function(b) {
                xa(a, b)
            }), e.push(d), d = new wc(e, b), c.push(d)) : c.push(d)
        }
        return c
    }
    var zc = v(qc, wc);

    function Ac(a, b) {
        var c = b ? "LV" + E(b, G).join("-") : a;
        S.call(this, Vb("\u6b66\u5668\u30b9\u30ed{0}", a ? c : "\u306a\u3057"), 6, a, b || null, {}, 0)
    }
    A(Ac, S);

    function pc(a, b, c, d, e) {
        S.call(this, Vb("{0}{1}{2}", gc(c), a, ac[b]), b, 0, null, [], d);
        this.P = !0;
        this.link = a;
        this.c = e || null
    }
    A(pc, S);
    var Bc = v(qc, pc);

    function oc(a, b, c, d, e, f) {
        var g = d ? "LV" + E(d, G).join("-") : c;
        S.call(this, Vb("{0}{1}\u30b9\u30ed\u30c3\u30c8{2}", gc(b), g, ac[a]), a, c, d, [], e);
        this.W = c;
        this.link = "\u30b9\u30ed\u30c3\u30c8\u5225\u88c5\u5099" + ac[a];
        this.c = f || null
    }
    A(oc, S);
    var Cc = v(qc, oc);

    function Dc(a) {
        return H(fc, function(b) {
            return b.name == a
        }) || fc[0]
    }

    function Ec(a) {
        for (var b = 0, c = 0; c < a.length; c++) {
            var d = a[c];
            d && (d.P && (d = a[1]), d && (b += d.A))
        }
        return b
    }

    function Fc(a, b, c) {
        if (b.A > c.A || b.o != c.o) return !1;
        if (b.B && c.B)
            for (var d = 0; 3 > d; d++)
                if (b.B[d] > c.B[d]) return !1;
        return ua(a, function(a) {
            return (b.i[a] || 0) <= (c.i[a] || 0)
        })
    }

    function Gc() {
        var a = Hc.prototype.ta,
            b = [0, 1, 2, 3, 4],
            c = [];
        R[0].slotlevels ? D(b, function(a) {
            for (var b = 3; 0 < b; b--)
                for (var f = b; 0 <= f; f--)
                    for (var g = f; 0 <= g; g--) H(R, v(ic, [b, f, g], a)) && c.push(new oc(a, 3, !!b + !!f + !!g, [b, f, g], 0))
        }) : D([1, 2], function(d) {
            D(b, function(b) {
                for (var f = 1; 3 >= f; f++) c.push(new oc(b, d, f, null, 0));
                1 != b && c.push(new pc(a, b, d, 0))
            })
        });
        return c
    };

    function Ic(a) {
        this.name = a.name;
        this.D = a.skill;
        this.h = a.points;
        this.type = a.type
    }

    function Jc() {
        var a = Kc(),
            b = {};
        D(a, function(a) {
            D(a.i, function(a) {
                a.D in b || (b[a.D] = []);
                b[a.D].push(a)
            })
        });
        return b
    }
    var Lc = null;

    function Mc(a) {
        Lc || (Lc = Jc());
        return Lc[a] || []
    }

    function Nc(a, b) {
        return 0 < b ? (Oc[a] || 100) * b : 0
    }

    function Pc(a) {
        var b = 0,
            c;
        for (c in a) b += Nc(c, a[c]);
        return b
    }

    function Qc(a, b) {
        K(b, function(b, d) {
            T(a, d, b)
        })
    }

    function T(a, b, c) {
        a[b] = (a[b] || 0) + c
    }
    var Rc = null,
        Oc = null,
        Sc = {};

    function Tc(a, b) {
        Rc = [];
        K(a, function(a, b) {
            Rc.push({
                aa: b,
                i: F(a, function(a) {
                    a = new Ic(a);
                    return Sc[a.name] = a
                })
            })
        });
        Oc = b
    }

    function Uc(a, b) {
        Rc = F(a, function(a) {
            return {
                aa: a.genre,
                i: F(a.skills, function(a) {
                    a = new Ic(a);
                    return Sc[a.name] = a
                })
            }
        });
        Oc = b
    }

    function Kc() {
        if (!Rc) {
            alert("skill data not set!");
            debugger
        }
        return Rc
    }

    function Vc(a) {
        return Sc[a]
    }

    function Wc() {
        return E(La(Sc), function(a) {
            return !!(a.type & 3)
        })
    }

    function Xc(a) {
        var b = Kc(),
            c = [];
        D(b, function(a) {
            Ca(c, a.i)
        });
        var d = {};
        D(a, function(a) {
            for (var b = 0; b < c.length; b++)
                if (c[b].name == a) {
                    var g = c[b].D;
                    d[g] = d[g] ? Math.max(c[b].h, d[g]) : c[b].h
                }
        });
        return d
    }

    function Yc(a) {
        var b = F(Pa(a), function(b) {
            var d = a[b],
                e = Mc(b),
                f = null;
            0 > d ? D(e, function(a) {
                0 >= a.h && d <= a.h && (!f || a.h < f.h) && (f = a)
            }) : D(e, function(a) {
                0 <= a.h && d >= a.h && (!f || a.h > f.h) && (f = a)
            });
            return {
                name: b,
                h: d,
                Ja: f
            }
        });
        Fa(b, function(a, b) {
            return b.h - a.h
        });
        return b
    };

    function Zc(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function $c() {}

    function ad(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (ia(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), ad(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), bd(d, c), c.push(":"), ad(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    bd(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) &&
                        !isNaN(b) ? b : "null");
                    break;
                case "boolean":
                    c.push(b);
                    break;
                case "function":
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var cd = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        dd = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function bd(a, b) {
        b.push('"', a.replace(dd, function(a) {
            var b = cd[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), cd[a] = b);
            return b
        }), '"')
    };

    function ed(a) {
        this.a = a
    }

    function U(a, b) {
        var c = fd;
        if (void 0 !== b) {
            var c = c.a,
                d;
            d = [];
            ad(new $c, b, d);
            d = d.join("");
            try {
                c.X.setItem(a, d)
            } catch (e) {
                if (0 == c.X.length) throw "Storage mechanism: Storage disabled";
                throw "Storage mechanism: Quota exceeded";
            }
        } else c.a.remove(a)
    }
    ed.prototype.remove = function(a) {
        this.a.remove(a)
    };

    function gd() {};

    function hd() {}
    A(hd, gd);
    hd.prototype.clear = function() {
        var a = Mb(this.oa(!0)),
            b = this;
        D(a, function(a) {
            b.remove(a)
        })
    };

    function id(a) {
        this.X = a
    }
    A(id, hd);
    id.prototype.remove = function(a) {
        this.X.removeItem(a)
    };
    id.prototype.oa = function(a) {
        var b = 0,
            c = this.X,
            d = new Jb;
        d.next = function() {
            if (b >= c.length) throw Ib;
            var d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!r(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    id.prototype.clear = function() {
        this.X.clear()
    };
    id.prototype.key = function(a) {
        return this.X.key(a)
    };

    function jd() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.X = a
    }
    A(jd, id);
    var fd = new ed(new jd);

    function kd(a, b) {
        this.a = a;
        this.b = b
    }

    function V(a) {
        var b;
        a: {
            var c = fd,
                d;
            try {
                var e = c.a.X.getItem(a.a);
                if (!r(e) && null !== e) throw "Storage mechanism: Invalid value was encountered";
                d = e
            } catch (f) {
                b = void 0;
                break a
            }
            if (null !== d) try {
                b = Zc(d);
                break a
            } catch (g) {
                throw "Storage: Invalid value was encountered";
            }
            b = void 0
        }
        return b || a.b
    };
    var ld = new kd("deco");

    function md(a) {
        return !!a.part
    };

    function nd(a, b) {
        this.name = a;
        this.h = b
    }

    function pd(a, b, c, d, e, f) {
        this.name = a;
        this.i = b;
        this.A = c;
        this.level = d;
        this.b = e;
        this.a = f;
        this.Ea = !1;
        K(this.i, function(a, b) {
            var c = new nd(b, a);
            0 < a ? this.m = c : 0 > a && (this.u = c)
        }, this)
    }
    var X = null,
        qd = {},
        rd = {},
        sd = {};

    function td(a) {
        X = F(a, function(a) {
            return new pd(a.name, a.skills, a.slots, a.level, a.period.village, a.period.gathering)
        });
        Fa(X, function(a, c) {
            return a.m.name != c.m.name ? a.m.name < c.m.name ? -1 : 1 : a.m.h != c.m.h ? a.m.h > c.m.h ? -1 : 1 : 0
        });
        X[X.length - 1].Ea = !0;
        for (a = 0; a < X.length - 1; a++) X[a].m.name != X[a + 1].m.name && (X[a].Ea = !0);
        D(X, function(a) {
            if (a.u) {
                var c = a.m.name,
                    d = a.u.h / a.m.h;
                if (!qd[c] || d > qd[c].h) qd[c] = new nd(a.u.name, d)
            }
        });
        K(qd, function(a, c) {
            var d = qd[a.name];
            d && d.name == c && (sd[c] = a.name)
        });
        D(X, function(a) {
            a.level && (rd[a.m.name] =
                a)
        })
    }

    function ud(a) {
        return H(X, function(b) {
            return b.name == a
        })
    }

    function vd(a, b, c) {
        function d(b) {
            return b.u && a[b.u.name]
        }
        var e = E(X, function(d) {
            return (d.b <= b || d.a <= c) && !!a[d.m.name]
        });
        Fa(e, function(a, b) {
            if (d(a) && d(b)) {
                if (a.u.name != b.u.name) {
                    var c = Nc(a.u.name, 1),
                        e = Nc(b.u.name, 1);
                    return c == e ? a.u.name < b.u.name ? -1 : 1 : c < e ? -1 : 1
                }
                if (a.u.h != b.u.h) return a.u.h < b.u.h ? -1 : 1
            } else {
                if (d(a)) return -1;
                if (d(b)) return 1
            }
            return a.m.name != b.m.name ? (c = Nc(a.m.name, 1), e = Nc(b.m.name, 1), c == e ? a.m.name < b.m.name ? -1 : 1 : c < e ? -1 : 1) : a.m.h == b.m.h ? 0 : a.m.h > b.m.h ? -1 : 1
        });
        return e
    }

    function wd(a) {
        return rd[a]
    };

    function xd(a, b, c, d, e, f, g) {
        1 < b ? (c = yd(c), d = yd(d)) : (c = yd(Aa(c, d)), d = []);
        this.f = Ba(a);
        this.L = b;
        this.C = c;
        this.N = d;
        this.ba = e && e.match(/^[a-zA-Z0-9_\-=]+$/) ? e : null;
        this.I = this.a = 0;
        this.U = [0, 0, 0, 0, 0];
        D(this.f, function(a) {
            if (a) {
                this.I += a.I;
                this.a <<= 3;
                this.a += a.o + 1;
                for (var b = 0; b < this.U.length; b++) this.U[b] += a.U[b]
            }
        }, this);
        this.ia = f || "";
        this.sa = !!g;
        this.i = null;
        this.sa && (this.i = zd(this))
    }

    function zd(a) {
        var b = [],
            c = Ad(a);
        a = Bd(a);
        Qc(c, a);
        D(Yc(c), function(a) {
            a.Ja && b.push(a.Ja.name)
        });
        return b
    }

    function Cd(a, b) {
        return a.a == b.a ? a.I == b.I ? 0 : a.I > b.I ? -1 : 1 : a.a < b.a ? -1 : 1
    }

    function Ad(a) {
        for (var b = {}, c = 0; c < a.f.length; c++) a.f[c] && K(a.f[c].i, function(a, c) {
            T(b, c, a)
        });
        a.f[1] && K(a.f[1].i, function(a, c) {
            T(b, c, a * (this.L - 1))
        }, a);
        return b
    }

    function Bd(a) {
        function b(a, b) {
            K(b.M.i, function(f, g) {
                T(c, g, f * a * b.count)
            })
        }
        var c = {};
        D(a.N, v(b, a.L));
        D(a.C, v(b, 1));
        return c
    }
    xd.prototype.b = 5;

    function Dd(a) {
        function b(a) {
            return {
                name: a.M.name,
                count: a.count
            }
        }
        for (var c = [], d = 0; d < a.b; d++) c.push(a.f[d] ? a.f[d].name : null);
        var d = null,
            e = a.f[5];
        e && (d = {
            slots: e.A,
            skills: e.i
        });
        return {
            equipments: c,
            charm: d,
            weapon: a.f[6].name,
            decos: a.C ? F(a.C, b) : null,
            bodyDecos: a.N ? F(a.N, b) : null,
            mySetId: a.ba,
            myLocalSetId: a.ia
        }
    }

    function Ed(a, b, c, d, e, f, g, h) {
        this.$ = 1 == b ? 1 : 2;
        this.ga = e;
        this.Z = f;
        this.b = Xc(g);
        this.v = Pa(this.b);
        this.H = a;
        this.ha = d;
        this.a = this.Na();
        this.ca = h;
        this.j = c;
        this.K = Pa(this.b);
        this.Y = this.c = null
    }
    k = Ed.prototype;
    k.Na = function() {
        var a = F(V(Y), mc);
        return Aa(a, [null, this.ha])
    };
    k.za = 0;
    k.da = null;

    function Fd(a) {
        for (var b = V(Y), c = 0; c < b.length; c++) {
            var d;
            if (d = b[c]) {
                d = b[c];
                var e = c,
                    f = a.j,
                    g = a.$,
                    h = nc(d, e);
                d = !(h ? h.type & f && h.sex & g : mc(d, e))
            }
            if (d) return !1
        }
        return !0
    }
    k.hb = function(a, b, c) {
        return this.filter(a, b, c) ? (a = this.V - this.J[a.part] + a.maxdef >= this.za) ? a : !1 : !1
    };
    k.filter = function(a) {
        return a.type & this.j && a.sex & this.$ ? a.period && a.period.gathering > this.Z && a.period.village > this.ga ? !1 : !0 : !1
    };

    function Gd(a) {
        for (var b = {}, c = 0; c < a.v.length; c++) {
            for (var d = a.v[c], e = a.b[d], f = 0; f < a.a.length; f++) {
                var g = a.a[f];
                g && (g.P && (g = a.a[1]), g && (e -= g.i[d] || 0))
            }
            b[d] = e
        }
        return b
    }

    function Hd(a, b) {
        var c = Gd(a);
        if (b) {
            var d = {},
                e;
            for (e in c)
                if (!(0 >= c[e])) {
                    var f = qd[e] || null;
                    f && f.name in c && (d[f.name] = f.h * c[e], c[f.name] += f.h * c[e])
                }
            for (e in d) 0 >= c[e] || (f = qd[e] || null) && f.name in c && (c[f.name] += f.h * d[e])
        }
        for (e = d = 0; e < a.v.length; e++) f = a.v[e], d += Nc(f, c[f]);
        return d = Math.round(1E3 * d) / 1E3
    }

    function Id(a, b) {
        this.b = a;
        this.a = b
    }
    Id.prototype.L = 1;

    function Jd(a) {
        for (var b = [0, 0, 0, 0], c = 0; c < a.length; c++) {
            var d = a[c];
            if (d) {
                if (!d.B) debugger;
                b[d.B[0]]++;
                b[d.B[1]]++;
                b[d.B[2]]++
            }
        }
        b[0] = 0;
        return b
    }
    Id.prototype.Ya = function(a, b, c, d, e) {
        var f;
        a: {
            a = [0, 0, 0, 0];
            for (f in c)
                if (!(0 >= c[f])) {
                    b = rd[f];
                    if (!b || c[f] > (void 0 === this.a[b.name] ? 7 : this.a[b.name])) {
                        f = !1;
                        break a
                    }
                    a[b.level] += c[f]
                }
            f = 0;
            for (b = 3; 0 < b; b--)
                if (f += this.b[b] - a[b], 0 > f) {
                    f = !1;
                    break a
                }
            f = !0
        }
        if (!f) return !1;
        f = [];
        for (var g in c)
            for (a = rd[g], b = 0; b < c[g]; b++) f.push(a);
        e(f);
        return !0
    };

    function Kd(a, b, c) {
        this.a = a.concat();
        this.b = [0, 0, 0, 0];
        this.J = b;
        this.v = 0;
        this.L = c;
        1 == this.L && (this.a[this.J]++, this.J = 0);
        this.K = [];
        for (a = 0; a < Ld(this.a); a++) this.K.push(null);
        this.H = 0;
        this.wa = [];
        this.j = {}
    }

    function Ld(a) {
        for (var b = 0, c = 1; c < a.length; c++) b += a[c] * c;
        return b
    }

    function Md(a, b) {
        var c = 0;
        switch (b) {
            case 1:
                c = 3 * (a.a[3] - a.b[3]);
                c += 2 * (a.a[2] - a.b[2]);
                c += a.a[1] - a.b[1];
                break;
            case 2:
                var c = Math.max(0, a.b[1] - a.a[1]),
                    d = a.a[2] - a.b[2],
                    e = a.a[3] - a.b[3];
                if (0 > d) {
                    e += d;
                    if (0 > e) return 0;
                    c && (c += d);
                    d = 0
                }
                d += e;
                c = Math.max(0, c - e);
                return d -= Math.ceil(c / 2);
            case 3:
                c = Math.max(0, a.b[1] - a.a[1]);
                d = a.a[2] - a.b[2];
                e = a.a[3] - a.b[3];
                0 > d && (e += d, c && (c += d), d = 0);
                if (0 > e) debugger;
                c -= 2 * d;
                0 < c && (e -= Math.ceil(c / 3));
                return e
        }
        return c
    }

    function Nd(a, b, c) {
        a.b[b.A] += c;
        for (var d = 0; d < c; d++) a.K[a.H] = b, a.H++;
        T(a.j, b.m.name, b.m.h * c);
        b.u && T(a.j, b.u.name, b.u.h * c)
    }

    function Od(a) {
        a.H--;
        var b = a.K[a.H];
        a.b[b.A]--;
        T(a.j, b.m.name, -b.m.h);
        b.u && T(a.j, b.u.name, -b.u.h)
    }

    function yd(a) {
        a = E(a, function(a) {
            return a
        });
        var b = [];
        a.sort(function(a, b) {
            return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
        });
        for (var c = null, d = 0; d < a.length; d++) c && c.M == a[d] ? c.count++ : (c = {
            M: a[d],
            count: 1
        }, b.push(c));
        return b
    }
    Kd.prototype.Ya = function(a, b, c, d, e) {
        function f() {
            if (h()) return !0;
            p.J ? (m(0), t || ta(F(p.a, function(a, b) {
                return b * a
            }), function(a, b) {
                return a + b
            }, 0) >= d && q(0)) : q(0);
            return t
        }

        function g() {
            !w && Qa(c, function(a, c) {
                if (0 <= a) return !1;
                var d = sd[c];
                return !!d && d in b
            }) && (w = !0, f())
        }

        function h() {
            (t = !Ra(c, function(a, b) {
                return a > (p.j[b] || 0)
            })) && e(Da(p.K, 0, p.H));
            return t
        }

        function m(b) {
            if (!t && !h()) {
                var d = a[b];
                if (d) {
                    var e = Math.ceil((c[d.m.name] - (p.j[d.m.name] || 0)) / d.m.h / p.L),
                        e = Math.max(Math.min(e, Math.floor((p.J - p.v) / d.A)),
                            0),
                        f = p;
                    f.v += d.A * e;
                    for (var w = 0; w < e; w++) f.wa.push(d);
                    T(f.j, d.m.name, d.m.h * e * f.L);
                    d.u && T(f.j, d.u.name, d.u.h * e * f.L);
                    for (d = e; 0 < d; d--) q(0), m(b + 1), e = p, f = e.wa.pop(), e.v -= f.A, T(e.j, f.m.name, -f.m.h * e.L), f.u && T(e.j, f.u.name, -f.u.h * e.L);
                    m(b + 1)
                } else g()
            }
        }

        function q(b) {
            if (!t) {
                var d = a[b];
                if (d) {
                    var e = Math.ceil((c[d.m.name] - (p.j[d.m.name] || 0)) / d.m.h),
                        f = Md(p, d.A);
                    if (d.Ea) {
                        if (!(e > f || (e = Math.max(e, 0), Nd(p, d, e), h() || (q(b + 1), t))))
                            for (d = e; 0 < d; d--) Od(p)
                    } else if (e = Math.max(Math.min(e, f), 0), Nd(p, d, e), !h()) {
                        for (d = e; 0 < d; d--) {
                            q(b +
                                1);
                            if (t) return;
                            Od(p)
                        }
                        q(b + 1)
                    }
                } else g()
            }
        }
        var t = !1,
            p = this,
            w = !1;
        return f()
    };
    k = Ed.prototype;
    k.Ka = !1;
    k.Ga = function() {
        var a = u(this.filter, this);
        this.J = this.H.Oa(this.j, a);
        this.V = 0;
        D(this.J, function(a) {
            this.V += a
        }, this);
        0 < this.za && (a = u(this.hb, this));
        a = Pd(this.H, this.j, a, this.b);
        this.c = a[0];
        this.Ka || (this.c = yc(this.c, this.K));
        this.Y = a[1]
    };
    k.Da = function(a) {
        for (var b = 0, c = 0; 5 > c; c++) b += a[c] ? a[c].I : this.J[c];
        return b >= this.za
    };

    function Qd(a) {
        if (!a.da) return !1;
        for (var b = 0; 5 > b; b++)
            if (-50 <= a.da[b]) return !0;
        a.da = null;
        return !1
    }
    k.kb = function(a) {
        if (!this.da) return !0;
        for (var b = 0; 5 > b; b++)
            if (!(-50 > this.da[b])) {
                for (var c = 0, d = 0; 5 > d; d++) c += a[d] ? a[d].U[b] : 0;
                if (c < this.da[b]) return !1
            }
        return !0
    };

    function Rd(a, b) {
        function c() {
            do var a = p.next().done || f.length >= h.ca; while (!(a || 200 < x() - q));
            a |= b(a ? 100 : Math.floor(f.length / h.ca * 100), f);
            q = x();
            a || setTimeout(c, 0)
        }

        function d(a, b, c) {
            function m(z) {
                for (;;) switch (n) {
                    case 0:
                        Na = !1;
                        Sb = [
                            [],
                            [],
                            [],
                            [],
                            [],
                            []
                        ];
                        if (!(f.length >= h.ca)) {
                            n = 1;
                            break
                        }
                        n = -1;
                        return {
                            value: void 0,
                            done: !0
                        };
                    case 1:
                        ob = Ec(h.a);
                        if (!(c <= ob)) {
                            n = 2;
                            break
                        }
                        od = Hd(h, !0);
                        Tb = !1;
                        if (od <= ob) {
                            var pf = Gd(h),
                                Oa = h.La(h.a),
                                qf = u(h.eb, h, f, Oa);
                            Tb = Oa.Ya(g, h.b, pf, c, qf)
                        }
                        if (!Tb) {
                            n = 3;
                            break
                        }
                        n = 4;
                        return {
                            value: !0,
                            done: !1
                        };
                    case 4:
                        if (void 0 ===
                            z) {
                            n = 5;
                            break
                        }
                        n = -1;
                        throw z;
                    case 5:
                        return n = -1, {
                            value: void 0,
                            done: !0
                        };
                    case 3:
                    case 2:
                        if (!(a >= b)) {
                            n = 6;
                            break
                        }
                        n = -1;
                        return {
                            value: void 0,
                            done: !0
                        };
                    case 6:
                        if (I(h.a, null)) {
                            n = 7;
                            break
                        }
                        n = -1;
                        return {
                            value: void 0,
                            done: !0
                        };
                    case 7:
                        W = a;
                    case 8:
                        if (!(W < b)) {
                            n = 10;
                            break
                        }
                        B = h.c[W];
                        if (!h.a[B.o]) {
                            n = 11;
                            break
                        }
                        n = 9;
                        break;
                    case 11:
                        za = v(Fc, h.K, B);
                        ba = H(Sb[B.o], za);
                        if (!ba) {
                            n = 12;
                            break
                        }
                        n = 9;
                        break;
                    case 12:
                        if (!Sd(h.a, c, ob, B)) {
                            n = 13;
                            break
                        }
                        n = 10;
                        break;
                    case 13:
                        h.a[B.o] = B;
                        L = !1;
                        ca = Hd(h);
                        if (!(ca < c || 0 < B.A)) {
                            n = 14;
                            break
                        }
                        Ub = !0;
                        t = function() {
                            function a(g,
                                n) {
                                for (;;) switch (b) {
                                    case 0:
                                        if (1 != B.o) {
                                            b = 1;
                                            break
                                        }
                                        f = ea(e(0, W + 1, ca));
                                    case 2:
                                        if ((c = f.next(g)).done) {
                                            b = 3;
                                            break
                                        }
                                        b = 4;
                                        return {
                                            value: c.value,
                                            done: !1
                                        };
                                    case 4:
                                        if (void 0 === n) {
                                            b = 5;
                                            break
                                        }
                                        b = -1;
                                        throw n;
                                    case 5:
                                        b = 2;
                                        break;
                                    case 3:
                                    case 1:
                                        f = ea(d(W + 1, h.c.length, ca));
                                    case 6:
                                        if ((c = f.next(g)).done) {
                                            b = 7;
                                            break
                                        }
                                        b = 8;
                                        return {
                                            value: c.value,
                                            done: !1
                                        };
                                    case 8:
                                        if (void 0 === n) {
                                            b = 9;
                                            break
                                        }
                                        b = -1;
                                        throw n;
                                    case 9:
                                        b = 6;
                                        break;
                                    case 7:
                                        b = -1;
                                    default:
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                }
                            }
                            var b = 0,
                                c, f, g = {
                                    next: function(b) {
                                        return a(b, void 0)
                                    },
                                    throw: function(b) {
                                        return a(void 0,
                                            b)
                                    }
                                };
                            da();
                            g[Symbol.iterator] = function() {
                                return this
                            };
                            return g
                        }();
                    case 16:
                        if (!Ub && p.done) {
                            n = 18;
                            break
                        }
                        p = t.next();
                        L |= p.value;
                        if (!(200 < x() - q)) {
                            n = 19;
                            break
                        }
                        n = 20;
                        return {
                            value: L || Na,
                            done: !1
                        };
                    case 20:
                        if (void 0 === z) {
                            n = 21;
                            break
                        }
                        n = -1;
                        throw z;
                    case 21:
                    case 19:
                    case 17:
                        Ub = !1;
                        n = 16;
                        break;
                    case 18:
                        n = 15;
                        break;
                    case 14:
                        $b(F(h.a, function(a) {
                            return a ? a.name : "None"
                        }));
                    case 15:
                        L || Sb[B.o].push(B), h.a[B.o] = null, Na |= L;
                    case 9:
                        W++;
                        n = 8;
                        break;
                    case 10:
                        return n = 22, {
                            value: Na,
                            done: !1
                        };
                    case 22:
                        if (void 0 === z) {
                            n = 23;
                            break
                        }
                        n = -1;
                        throw z;
                    case 23:
                        n = -1;
                    default:
                        return {
                            value: void 0,
                            done: !0
                        }
                }
            }
            var n = 0,
                p, t, Ub, ca, L, ba, za, B, W, Tb, od, ob, Sb, Na, Oa = {
                    next: function() {
                        return m(void 0)
                    },
                    throw: function(a) {
                        return m(a)
                    }
                };
            da();
            Oa[Symbol.iterator] = function() {
                return this
            };
            return Oa
        }

        function e(a, b, c) {
            function f(z) {
                for (;;) switch (g) {
                    case 0:
                        B = !1, za = h.Y, ba = a;
                    case 1:
                        if (!(ba < za.length)) {
                            g = 3;
                            break
                        }
                        L = za[ba];
                        if (h.a[L.o]) {
                            g = 4;
                            break
                        }
                        ca = !0;
                        h.a[L.o] = L;
                        t = Hd(h);
                        if (t != c || h.a[1].A) {
                            g = 5;
                            break
                        }
                        h.a[L.o] = null;
                        g = 3;
                        break;
                    case 5:
                        p = function() {
                            function a(m, n) {
                                for (;;) switch (c) {
                                    case 0:
                                        g = ea(d(b,
                                            h.c.length, t));
                                    case 1:
                                        if ((f = g.next(m)).done) {
                                            c = 2;
                                            break
                                        }
                                        c = 3;
                                        return {
                                            value: f.value,
                                            done: !1
                                        };
                                    case 3:
                                        if (void 0 === n) {
                                            c = 4;
                                            break
                                        }
                                        c = -1;
                                        throw n;
                                    case 4:
                                        c = 1;
                                        break;
                                    case 2:
                                        g = ea(e(ba + 1, b, t));
                                    case 5:
                                        if ((f = g.next(m)).done) {
                                            c = 6;
                                            break
                                        }
                                        c = 7;
                                        return {
                                            value: f.value,
                                            done: !1
                                        };
                                    case 7:
                                        if (void 0 === n) {
                                            c = 8;
                                            break
                                        }
                                        c = -1;
                                        throw n;
                                    case 8:
                                        c = 5;
                                        break;
                                    case 6:
                                        c = -1;
                                    default:
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                }
                            }
                            var c = 0,
                                f, g, m = {
                                    next: function(b) {
                                        return a(b, void 0)
                                    },
                                    throw: function(b) {
                                        return a(void 0, b)
                                    }
                                };
                            da();
                            m[Symbol.iterator] = function() {
                                return this
                            };
                            return m
                        }();
                    case 6:
                        if (!ca && m.done) {
                            g = 8;
                            break
                        }
                        m = p.next();
                        B |= m.value;
                        if (!(200 < x() - q)) {
                            g = 9;
                            break
                        }
                        g = 10;
                        return {
                            value: B,
                            done: !1
                        };
                    case 10:
                        if (void 0 === z) {
                            g = 11;
                            break
                        }
                        g = -1;
                        throw z;
                    case 11:
                    case 9:
                    case 7:
                        ca = !1;
                        g = 6;
                        break;
                    case 8:
                        h.a[L.o] = null;
                    case 4:
                    case 2:
                        ba++;
                        g = 1;
                        break;
                    case 3:
                        return g = 12, {
                            value: B,
                            done: !1
                        };
                    case 12:
                        if (void 0 === z) {
                            g = 13;
                            break
                        }
                        g = -1;
                        throw z;
                    case 13:
                        g = -1;
                    default:
                        return {
                            value: void 0,
                            done: !0
                        }
                }
            }
            var g = 0,
                m, p, t, ca, L, ba, za, B, W = {
                    next: function() {
                        return f(void 0)
                    },
                    throw: function(a) {
                        return f(a)
                    }
                };
            da();
            W[Symbol.iterator] =
                function() {
                    return this
                };
            return W
        }
        a.Ga();
        var f = [],
            g = vd(a.b, a.ga, a.Z),
            h = a;
        $b(a.c.map(function(a) {
            return a.name
        }));
        $b(g.map(function(a) {
            return a.name
        }));
        var m = Hd(a),
            q = x(),
            t = !!a.a[1],
            p = function() {
                function a(g, n) {
                    for (;;) switch (b) {
                        case 0:
                            if (!t) {
                                b = 1;
                                break
                            }
                            f = ea(e(0, 0, m));
                        case 2:
                            if ((c = f.next(g)).done) {
                                b = 3;
                                break
                            }
                            b = 4;
                            return {
                                value: c.value,
                                done: !1
                            };
                        case 4:
                            if (void 0 === n) {
                                b = 5;
                                break
                            }
                            b = -1;
                            throw n;
                        case 5:
                            b = 2;
                            break;
                        case 3:
                        case 1:
                            f = ea(d(0, h.c.length, m));
                        case 6:
                            if ((c = f.next(g)).done) {
                                b = 7;
                                break
                            }
                            b = 8;
                            return {
                                value: c.value,
                                done: !1
                            };
                        case 8:
                            if (void 0 === n) {
                                b = 9;
                                break
                            }
                            b = -1;
                            throw n;
                        case 9:
                            b = 6;
                            break;
                        case 7:
                            b = -1;
                        default:
                            return {
                                value: void 0,
                                done: !0
                            }
                    }
                }
                var b = 0,
                    c, f, g = {
                        next: function(b) {
                            return a(b, void 0)
                        },
                        throw: function(b) {
                            return a(void 0, b)
                        }
                    };
                da();
                g[Symbol.iterator] = function() {
                    return this
                };
                return g
            }();
        c()
    }
    k.eb = function(a, b, c) {
        var d = zc(this.a),
            d = E(d, u(this.Da, this));
        Qd(this) ? D(d, function(d) {
            d = Cc(d);
            d = E(d, u(this.Da, this));
            D(d, function(d) {
                d = Bc(d);
                d = E(d, u(this.kb, this));
                d = E(d, u(this.Da, this));
                D(d, function(d) {
                    d = this.Ba(d, c, b.wa, b.L);
                    a.push(d)
                }, this)
            }, this)
        }, this) : D(d, function(d) {
            d = this.Ba(d, c, b.wa, b.L);
            a.push(d)
        }, this)
    };
    k.Ba = function(a, b, c, d) {
        return new xd(a, d, b, c)
    };
    k.La = function() {
        for (var a = this.a, b = 1, c = 0, d = [0, 0, 0, 0], e = 0; e < a.length; e++) {
            var f = a[e];
            f && (1 == f.o ? c = f.A : f.P ? b++ : d[f.A]++)
        }
        return new Kd(d, c, b)
    };

    function Sd(a, b, c, d) {
        for (var e = 0, f = 0; 6 > f; f++) !a[f] || a[f].P && !a[1] || e++;
        a = Math.round(12 * (d.W * (6 - e) + c));
        b = Math.round(12 * b);
        return a < b
    };

    function Td() {
        this.Fa()
    }
    k = Td.prototype;
    k.Fa = function() {
        fc = this.Ca();
        R = pa;
        td(this.M);
        Tc(this.i, this.Ha)
    };
    k.Ca = function() {
        for (var a = [], b = 0; 3 >= b; b++) a.push(new Ac(b));
        return a
    };
    k.ta = "\u80f4\u7cfb\u7d71\u500d\u5316";
    k.Ha = null;
    k.i = null;
    k.f = null;
    k.M = null;
    k.Oa = function(a, b) {
        var c = [0, 0, 0, 0, 0];
        D(pa, function(a, e, f) {
            b(a, e, f) && (c[a.part] = Math.max(a.maxdef, c[a.part]))
        });
        return c
    };
    k.Ma = function() {
        return {}
    };
    k.Ra = function() {
        var a;
        if (a = V(ld)) a = E(a, md);
        else {
            a = [];
            for (var b = 1; 3 >= b; b++) a.push({
                name: b + "\u30b9\u30ed\u304a\u5b88\u308a",
                part: 5,
                slots: b,
                skills: {}
            })
        }
        return a
    };

    function Pd(a, b, c, d) {
        function e(a) {
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = a[c].B ? a[c].B.join("") : null;
                b[d] || (b[d] = []);
                b[d].push(a[c])
            }
            return La(b)
        }
        var f = [
                [
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    []
                ]
            ],
            g = [
                [],
                [],
                [],
                [],
                []
            ],
            h = [],
            m = V(Y),
            q = V(Ud),
            t = E(pa, function(a, b, d) {
                if (!c(a, b, d)) return !1;
                b = a.part;
                return I(q[b], a.name) ? !1 : this.ta in a.skills ? (b = new uc(a, 0), b.P = !0, g[a.part].push(b), !1) : m[b] ? !1 : !0
            }, a);
        Ca(t, a.Ra());
        for (var p = 0; p < t.length; p++) {
            var w = t[p];
            f[w.part][w.slots].push(new uc(w,
                w.slots));
            var Ma = !1,
                nb = {},
                z;
            for (z in d) 0 < w.skills[z] && (nb[z] = w.skills[z], Ma = !0);
            Ma && (w = new uc(w, Pc(nb) + w.slots), h.push(w))
        }
        K(sc, function(a) {
            if (6 != a)
                for (var c = 1; 3 >= c; c++) {
                    var d = e(f[a][c]);
                    D(d, function(d) {
                        if (1 == d.length) H(h, function(a) {
                            return d[0].name == a.name
                        }) || h.push(d[0]);
                        else if (1 < d.length) {
                            var e = lc(d),
                                e = new oc(a, b, c, d[0].B, e, d);
                            h.push(e)
                        }
                    })
                }
        });
        h = E(h, function(a) {
            return 5 <= a.o ? !0 : !I(q[a.o], a.name)
        });
        Fa(h, function(a, b) {
            var c = a.W,
                d = b.W;
            return c > d ? -1 : c < d ? 1 : 0
        });
        d = [];
        for (p = 0; p < g.length; p++) g[p].length &&
            (t = lc(g[p]), w = new pc(a.ta, p, b, t, g[p]), I(q[w.o], w.name) || d.push(w));
        return [h, d]
    };
    var Vd = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function Wd(a) {
        if (Xd) {
            Xd = !1;
            var b = l.location;
            if (b) {
                var c = b.href;
                if (c && (c = (c = Wd(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname) throw Xd = !0, Error();
            }
        }
        return a.match(Vd)
    }
    var Xd = Xa;

    function Yd(a, b) {
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="),
                f = null,
                g = null;
            0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
            b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
        }
    };

    function Zd(a, b, c) {
        this.j = this.a = null;
        this.b = a || null;
        this.v = !!c
    }

    function $d(a) {
        a.a || (a.a = new Nb, a.j = 0, a.b && Yd(a.b, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    k = Zd.prototype;
    k.add = function(a, b) {
        $d(this);
        this.b = null;
        a = ae(this, a);
        var c = Rb(this.a, a);
        c || Ob(this.a, a, c = []);
        c.push(b);
        this.j++;
        return this
    };
    k.remove = function(a) {
        $d(this);
        a = ae(this, a);
        return Qb(this.a.b, a) ? (this.b = null, this.j -= Rb(this.a, a).length, this.a.remove(a)) : !1
    };
    k.clear = function() {
        this.a = this.b = null;
        this.j = 0
    };
    k.S = function() {
        $d(this);
        for (var a = this.a.T(), b = this.a.S(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.T = function(a) {
        $d(this);
        var b = [];
        if (r(a)) {
            var c = a;
            $d(this);
            c = ae(this, c);
            Qb(this.a.b, c) && (b = Aa(b, Rb(this.a, ae(this, a))))
        } else
            for (a = this.a.T(), c = 0; c < a.length; c++) b = Aa(b, a[c]);
        return b
    };
    k.toString = function() {
        if (this.b) return this.b;
        if (!this.a) return "";
        for (var a = [], b = this.a.S(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.T(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.b = a.join("&")
    };
    k.clone = function() {
        var a = new Zd;
        a.b = this.b;
        this.a && (a.a = this.a.clone(), a.j = this.j);
        return a
    };

    function ae(a, b) {
        var c = String(b);
        a.v && (c = c.toLowerCase());
        return c
    };

    function be(a) {
        this.a = a
    }
    var ce = /\s*;\s*/;

    function de(a, b) {
        for (var c = b + "=", d = (a.a.cookie || "").split(ce), e = 0, f; f = d[e]; e++) {
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == b) return ""
        }
    }
    be.prototype.remove = function(a, b, c) {
        var d = void 0 !== de(this, a),
            e = 0;
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test("")) throw Error('Invalid cookie value ""');
        void 0 !== e || (e = -1);
        c = c ? ";domain=" + c : "";
        b = b ? ";path=" + b : "";
        e = 0 > e ? "" : 0 == e ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(x() + 1E3 * e)).toUTCString();
        this.a.cookie = a + "=" + c + b + e + "";
        return d
    };
    be.prototype.S = function() {
        return ee(this).keys
    };
    be.prototype.T = function() {
        return ee(this).values
    };
    be.prototype.clear = function() {
        for (var a = ee(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };

    function ee(a) {
        a = (a.a.cookie || "").split(ce);
        for (var b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    }
    var fe = new be(document);
    fe.b = 3950;

    function ge() {
        0 != he && (ie[this[la] || (this[la] = ++ma)] = this);
        this.v = this.v;
        this.K = this.K
    }
    var he = 0,
        ie = {};
    ge.prototype.v = !1;
    ge.prototype.pa = function() {
        if (this.K)
            for (; this.K.length;) this.K.shift()()
    };
    var je = !N || N && (M() || 9 <= db),
        ke = N && !O("9");
    !Xa || O("528");
    Wa && O("1.9b") || N && O("8") || Va && O("9.5") || Xa && O("528");
    Wa && !O("8") || N && O("9");

    function le(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.Va = !0
    }
    le.prototype.b = function() {
        this.Va = !1
    };

    function me(a) {
        me[" "](a);
        return a
    }
    me[" "] = ga;

    function ne(a, b) {
        le.call(this, a ? a.type : "");
        this.j = this.state = this.a = this.target = null;
        if (a) {
            this.type = a.type;
            this.target = a.target || a.srcElement;
            this.a = b;
            var c = a.relatedTarget;
            if (c && Wa) try {
                me(c.nodeName)
            } catch (d) {}
            this.state = a.state;
            this.j = a;
            a.defaultPrevented && this.b()
        }
    }
    A(ne, le);
    ne.prototype.b = function() {
        ne.ra.b.call(this);
        var a = this.j;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, ke) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var oe = "closure_listenable_" + (1E6 * Math.random() | 0),
        pe = 0;

    function qe(a, b, c, d, e) {
        this.listener = a;
        this.a = null;
        this.src = b;
        this.type = c;
        this.va = !!d;
        this.ya = e;
        this.key = ++pe;
        this.ka = this.ua = !1
    }

    function re(a) {
        a.ka = !0;
        a.listener = null;
        a.a = null;
        a.src = null;
        a.ya = null
    };

    function se(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    }
    se.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var g = te(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ua = !1)) : (b = new qe(b, this.src, f, !!d, e), b.ua = c, a.push(b));
        return b
    };
    se.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = te(e, b, c, d);
        return -1 < b ? (re(e[b]), C.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };

    function ue(a, b) {
        var c = b.type;
        c in a.a && xa(a.a[c], b) && (re(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    }

    function te(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ka && f.listener == b && f.va == !!c && f.ya == d) return e
        }
        return -1
    };
    var ve = "closure_lm_" + (1E6 * Math.random() | 0),
        we = {},
        xe = 0;

    function ye(a, b, c, d, e) {
        if (ia(b))
            for (var f = 0; f < b.length; f++) ye(a, b[f], c, d, e);
        else if (c = ze(c), a && a[oe]) a.R.add(String(b), c, !1, d, e);
        else {
            if (!b) throw Error("Invalid event type");
            var f = !!d,
                g = Ae(a);
            g || (a[ve] = g = new se(a));
            c = g.add(b, c, !1, d, e);
            c.a || (d = Be(), c.a = d, d.src = a, d.listener = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Ce(b.toString()), d), xe++)
        }
    }

    function Be() {
        var a = De,
            b = je ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function Ee(a, b, c, d, e) {
        if (ia(b))
            for (var f = 0; f < b.length; f++) Ee(a, b[f], c, d, e);
        else(c = ze(c), a && a[oe]) ? a.R.remove(String(b), c, d, e) : a && (a = Ae(a)) && (b = a.a[b.toString()], a = -1, b && (a = te(b, c, !!d, e)), (c = -1 < a ? b[a] : null) && Fe(c))
    }

    function Fe(a) {
        if ("number" != typeof a && a && !a.ka) {
            var b = a.src;
            if (b && b[oe]) ue(b.R, a);
            else {
                var c = a.type,
                    d = a.a;
                b.removeEventListener ? b.removeEventListener(c, d, a.va) : b.detachEvent && b.detachEvent(Ce(c), d);
                xe--;
                (c = Ae(b)) ? (ue(c, a), 0 == c.b && (c.src = null, b[ve] = null)) : re(a)
            }
        }
    }

    function Ce(a) {
        return a in we ? we[a] : we[a] = "on" + a
    }

    function Ge(a, b, c, d) {
        var e = !0;
        if (a = Ae(a))
            if (b = a.a[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.va == c && !f.ka && (f = He(f, d), e = e && !1 !== f)
                }
        return e
    }

    function He(a, b) {
        var c = a.listener,
            d = a.ya || a.src;
        a.ua && Fe(a);
        return c.call(d, b)
    }

    function De(a, b) {
        if (a.ka) return !0;
        if (!je) {
            var c;
            if (!(c = b)) a: {
                c = ["window", "event"];
                for (var d = l, e; e = c.shift();)
                    if (null != d[e]) d = d[e];
                    else {
                        c = null;
                        break a
                    }
                c = d
            }
            e = c;
            c = new ne(e, this);
            d = !0;
            if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                a: {
                    var f = !1;
                    if (0 == e.keyCode) try {
                        e.keyCode = -1;
                        break a
                    } catch (g) {
                        f = !0
                    }
                    if (f || void 0 == e.returnValue) e.returnValue = !0
                }
                e = [];
                for (f = c.a; f; f = f.parentNode) e.push(f);
                for (var f = a.type, h = e.length - 1; 0 <= h; h--) {
                    c.a = e[h];
                    var m = Ge(e[h], f, !0, c),
                        d = d && m
                }
                for (h = 0; h < e.length; h++) c.a = e[h],
                m = Ge(e[h], f, !1,
                    c),
                d = d && m
            }
            return d
        }
        return He(a, new ne(b, this))
    }

    function Ae(a) {
        a = a[ve];
        return a instanceof se ? a : null
    }
    var Ie = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function ze(a) {
        if ("function" == ha(a)) return a;
        a[Ie] || (a[Ie] = function(b) {
            return a.handleEvent(b)
        });
        return a[Ie]
    };

    function Je() {
        ge.call(this);
        this.R = new se(this);
        this.$a = this;
        this.ma = null
    }
    A(Je, ge);
    Je.prototype[oe] = !0;
    Je.prototype.addEventListener = function(a, b, c, d) {
        ye(this, a, b, c, d)
    };
    Je.prototype.removeEventListener = function(a, b, c, d) {
        Ee(this, a, b, c, d)
    };

    function Z(a, b) {
        var c, d = a.ma;
        if (d)
            for (c = []; d; d = d.ma) c.push(d);
        var d = a.$a,
            e = b,
            f = e.type || e;
        if (r(e)) e = new le(e, d);
        else if (e instanceof le) e.target = e.target || d;
        else {
            var g = e,
                e = new le(f, d);
            Ta(e, g)
        }
        var g = !0,
            h;
        if (c)
            for (var m = c.length - 1; 0 <= m; m--) h = e.a = c[m], g = Ke(h, f, !0, e) && g;
        h = e.a = d;
        g = Ke(h, f, !0, e) && g;
        g = Ke(h, f, !1, e) && g;
        if (c)
            for (m = 0; m < c.length; m++) h = e.a = c[m], g = Ke(h, f, !1, e) && g
    }
    Je.prototype.pa = function() {
        Je.ra.pa.call(this);
        if (this.R) {
            var a = this.R,
                b = 0,
                c;
            for (c in a.a) {
                for (var d = a.a[c], e = 0; e < d.length; e++) ++b, re(d[e]);
                delete a.a[c];
                a.b--
            }
        }
        this.ma = null
    };

    function Ke(a, b, c, d) {
        b = a.R.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ka && g.va == c) {
                var h = g.listener,
                    m = g.ya || g.src;
                g.ua && ue(a.R, g);
                e = !1 !== h.call(m, d) && e
            }
        }
        return e && 0 != d.Va
    };

    function Le(a, b, c) {
        if ("function" == ha(a)) c && (a = u(a, c));
        else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
    };

    function Me() {}
    Me.prototype.a = null;

    function Ne(a) {
        var b;
        (b = a.a) || (b = {}, Oe(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };
    var Pe;

    function Qe() {}
    A(Qe, Me);

    function Re(a) {
        return (a = Oe(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }

    function Oe(a) {
        if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.b = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.b
    }
    Pe = new Qe;

    function Se(a) {
        Je.call(this);
        this.ab = new Nb;
        this.$ = a || null;
        this.b = !1;
        this.Z = this.a = null;
        this.J = this.la = "";
        this.j = this.ha = this.H = this.ga = !1;
        this.Y = 0;
        this.V = null;
        this.Ia = Te;
        this.na = this.cb = !1
    }
    A(Se, Je);
    var Te = "",
        Ue = /^https?$/i,
        Ve = ["POST", "PUT"],
        We = [];
    k = Se.prototype;
    k.fb = function() {
        if (!this.v && (this.v = !0, this.pa(), 0 != he)) {
            var a = this[la] || (this[la] = ++ma);
            delete ie[a]
        }
        xa(We, this)
    };
    k.send = function(a, b, c, d) {
        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.la + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.la = a;
        this.J = "";
        this.ga = !1;
        this.b = !0;
        this.a = this.$ ? Re(this.$) : Re(Pe);
        this.Z = this.$ ? Ne(this.$) : Ne(Pe);
        this.a.onreadystatechange = u(this.Sa, this);
        try {
            this.ha = !0, this.a.open(b, String(a), !0), this.ha = !1
        } catch (e) {
            Xe(this, e);
            return
        }
        a = c || "";
        var f = this.ab.clone();
        d && Hb(d, function(a, b) {
            Ob(f, b, a)
        });
        d = H(f.S(), Ye);
        c = l.FormData && a instanceof l.FormData;
        !I(Ve,
            b) || d || c || Ob(f, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) {
            this.a.setRequestHeader(b, a)
        }, this);
        this.Ia && (this.a.responseType = this.Ia);
        "withCredentials" in this.a && (this.a.withCredentials = this.cb);
        try {
            Ze(this), 0 < this.Y && ((this.na = $e(this.a)) ? (this.a.timeout = this.Y, this.a.ontimeout = u(this.Za, this)) : this.V = Le(this.Za, this.Y, this)), this.H = !0, this.a.send(a), this.H = !1
        } catch (g) {
            Xe(this, g)
        }
    };

    function $e(a) {
        return N && O(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout
    }

    function Ye(a) {
        return "content-type" == a.toLowerCase()
    }
    k.Za = function() {
        "undefined" != typeof fa && this.a && (this.J = "Timed out after " + this.Y + "ms, aborting", Z(this, "timeout"), this.a && this.b && (this.b = !1, this.j = !0, this.a.abort(), this.j = !1, Z(this, "complete"), Z(this, "abort"), af(this)))
    };

    function Xe(a, b) {
        a.b = !1;
        a.a && (a.j = !0, a.a.abort(), a.j = !1);
        a.J = b;
        bf(a);
        af(a)
    }

    function bf(a) {
        a.ga || (a.ga = !0, Z(a, "complete"), Z(a, "error"))
    }
    k.pa = function() {
        this.a && (this.b && (this.b = !1, this.j = !0, this.a.abort(), this.j = !1), af(this, !0));
        Se.ra.pa.call(this)
    };
    k.Sa = function() {
        this.v || (this.ha || this.H || this.j ? cf(this) : this.mb())
    };
    k.mb = function() {
        cf(this)
    };

    function cf(a) {
        if (a.b && "undefined" != typeof fa && (!a.Z[1] || 4 != df(a) || 2 != ef(a)))
            if (a.H && 4 == df(a)) Le(a.Sa, 0, a);
            else if (Z(a, "readystatechange"), 4 == df(a)) {
            a.b = !1;
            try {
                var b = ef(a),
                    c;
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        c = !0;
                        break a;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = Wd(String(a.la))[1] || null;
                        if (!f && self.location) var g = self.location.protocol,
                            f = g.substr(0, g.length - 1);
                        e = !Ue.test(f ? f.toLowerCase() : "")
                    }
                    d = e
                }
                if (d) Z(a, "complete"), Z(a, "success");
                else {
                    var h;
                    try {
                        h = 2 < df(a) ? a.a.statusText : ""
                    } catch (m) {
                        h = ""
                    }
                    a.J = h + " [" + ef(a) + "]";
                    bf(a)
                }
            } finally {
                af(a)
            }
        }
    }

    function af(a, b) {
        if (a.a) {
            Ze(a);
            var c = a.a,
                d = a.Z[0] ? ga : null;
            a.a = null;
            a.Z = null;
            b || Z(a, "ready");
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }

    function Ze(a) {
        a.a && a.na && (a.a.ontimeout = null);
        "number" == typeof a.V && (l.clearTimeout(a.V), a.V = null)
    }

    function df(a) {
        return a.a ? a.a.readyState : 0
    }

    function ef(a) {
        try {
            return 2 < df(a) ? a.a.status : -1
        } catch (b) {
            return -1
        }
    };
    var ff, gf;
    gf = function() {
        return de(fe, "csrftoken") || ""
    };
    ff = function(a, b, c) {
        var d = {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-CSRFToken": gf()
            },
            e = new Nb(b);
        b = Gb(e);
        if ("undefined" == typeof b) throw Error("Keys are undefined");
        for (var f = new Zd(null, 0, void 0), e = Fb(e), g = 0; g < b.length; g++) {
            var h = b[g],
                m = e[g];
            if (ia(m)) {
                var q = f;
                q.remove(h);
                0 < m.length && (q.b = null, Ob(q.a, ae(q, h), Ba(m)), q.j += m.length)
            } else f.add(h, m)
        }
        b = f.toString();
        f = new Se;
        We.push(f);
        c && f.R.add("complete", c, !1, void 0, void 0);
        f.R.add("ready", f.fb, !0, void 0, void 0);
        f.send(a, "POST", b, d)
    };

    function hf(a) {
        if (a.classList) return a.classList;
        a = a.className;
        return r(a) && a.match(/\S+/g) || []
    }

    function jf(a) {
        return a.classList ? a.classList.contains("skillselected") : I(hf(a), "skillselected")
    }

    function kf(a) {
        a.classList ? a.classList.remove("skillselected") : jf(a) && (a.className = E(hf(a), function(a) {
            return "skillselected" != a
        }).join(" "))
    };

    function lf(a, b, c) {
        a = [a, b, c];
        a.sort();
        a.reverse();
        b = va(a);
        return new Ac(b, a)
    }
    var Zb = {
            weapon: ["w", String],
            "period-gathering": ["g", Number],
            sex: ["s", Number],
            limit: ["l", Number],
            mindef: ["d", Number],
            minres_fire: ["rf", Number],
            minres_water: ["rw", Number],
            minres_thunder: ["rt", Number],
            minres_ice: ["ri", Number],
            minres_dragon: ["rd", Number]
        },
        mf = new kd("myset", []),
        nf = new kd("gender", 1),
        Ud = new kd("exclude", [
            [],
            [],
            [],
            [],
            [],
            []
        ]),
        of = new kd("decocount", {}),
        Y = new kd("pinned", [null, null, null, null, null, null]),
        rf = [];

    function sf(a) {
        var b = Q("results");
        a = '<div class="progress progress-striped active"><div class="progress-bar"  role="progressbar" aria-valuenow="' + P(a) + '" aria-valuemin="0" aria-valuemax="100" style="width:' + P(a) + '%"><span class="sr-only">\u691c\u7d22\u4e2d: ' + P(a) + "%</span></div></div>";
        b.innerHTML = a
    }

    function tf(a) {
        Q("mysetpane").innerHTML = ub({
            Ua: a,
            qa: "myset"
        })
    }

    function uf(a) {
        try {
            vf[a]()
        } catch (b) {
            window.alert(b)
        }
        Q("panecontainer").className = "show" + a + "pane";
        document.querySelector(".nav-tabs .active").className = "";
        Q("tab-" + a).className = "active";
        return !1
    }

    function wf(a, b, c, d, e) {
        Hc.xa();
        var f = H(V(Y), G) || H(V(Ud), function(a) {
            return !!a.length
        });
        return tb({
            i: a,
            c: b,
            time: c,
            ca: e,
            jb: f,
            ib: d
        })
    }

    function xf() {
        var a = F(document.getElementsByClassName("skillitem"), function(a) {
            return a.value
        });
        return a = E(a, G)
    }

    function yf() {
        var a = F(document.getElementsByClassName("skillitem"), function(a) {
            return a.options[a.selectedIndex].getAttribute("exclude") ? "" : a.value
        });
        return a = E(a, G)
    }

    function zf() {
        var a = F(document.getElementsByClassName("skillitem"), function(a) {
            return a.options[a.selectedIndex].getAttribute("exclude") ? a.getAttribute("skillpointname") : ""
        });
        return a = E(a, G)
    }

    function Af() {
        var a = V(Ud),
            b = V(Y),
            c = F(R, rc),
            c = Aa(c, Gc()),
            d = [
                [],
                [],
                [],
                [],
                [],
                []
            ];
        D(c, function(a) {
            d[a.o].push(a)
        });
        var c = Kc(),
            e = V( of ),
            f = [];
        D(c, function(a) {
            var b = F(a.i, function(a) {
                return a.D
            });
            Ea(b);
            b = E(F(b, wd), G);
            b = F(b, function(a) {
                var b = Hc.xa().a[a.m.name];
                return {
                    name: a.name,
                    count: Math.min(void 0 === e[a.name] ? 7 : e[a.name], b),
                    max: b
                }
            });
            b.length && f.push({
                aa: a.aa,
                C: b
            })
        });
        Q("dynamic-style").innerHTML = Ab({
            O: b,
            F: a
        });
        Q("excludeincludepane").innerHTML = Cb({
            O: b,
            F: a,
            c: d,
            C: f
        })
    }

    function Bf() {
        var a = document.querySelectorAll("select.skillitem");
        D(a, function(a) {
            a.value ? a.classList ? a.classList.add("skillselected") : jf(a) || (a.className += 0 < a.className.length ? " skillselected" : "skillselected") : kf(a)
        });
        a = document.querySelectorAll("select.skillitem option");
        a = E(a, function(a) {
            return a.selected && a.value
        });
        a = F(a, function(a) {
            return a.value
        });
        Q("checkedskillstyle").innerHTML = rb({
            i: a
        })
    }

    function Cf(a) {
        var b = Ad(a),
            c = Bd(a);
        Qc(b, c);
        var b = Yc(b),
            d = Jd(a.f);
        D(a.C, function(a) {
            d[a.M.level] -= a.count
        });
        0 > d[1] && (d[2] += d[1], d[1] = 0);
        0 > d[2] && (d[3] += d[2], d[2] = 0);
        return wb({
            i: b,
            c: a.f,
            C: c,
            ba: a.ba,
            ia: a.ia,
            sa: a.sa,
            U: a.U,
            Aa: d
        })
    }

    function Df(a, b, c, d) {
        var e = Dc(c.w),
            f = c.l || 200;
        return new Ef(Hc.xa(), c.s, 3, e, c.g, c.d, [c.rf, c.rw, c.rt, c.ri, c.rd], a, b, f, d)
    }
    var vf = {
        search: ga,
        myset: function() {
            var a = F(V(mf), Ff);
            tf(a)
        },
        excludeinclude: Af
    };

    function Gf(a, b, c, d, e, f, g) {
        xd.call(this, a, b, c, d, e, f, g)
    }
    A(Gf, xd);
    Gf.prototype.b = 6;

    function Ff(a) {
        function b(a) {
            if (!a) return [];
            var b = [];
            D(a, function(a) {
                for (var c = ud(a.name), d = 0; d < a.count; d++) b.push(c)
            });
            return b
        }
        var c = F(a.equipments, mc),
            d = E(c, function(a) {
                return a && a.P
            }).length + 1,
            e = null;
        a.weapon && (e = Dc(a.weapon));
        c.push(e);
        return new Gf(c, d, b(a.decos), b(a.bodyDecos), a.mySetId, a.myLocalSetId, !0)
    }

    function Hc() {
        this.Fa();
        var a = {};
        D(Kc(), function(b) {
            D(b.i, function(b) {
                a[b.D] = Math.max(b.h, a[b.D] || 0)
            })
        });
        this.a = a
    }
    A(Hc, Td);
    (function() {
        var a = Hc;
        a.xa = function() {
            return a.Pa ? a.Pa : a.Pa = new a
        }
    })();
    k = Hc.prototype;
    k.Ha = {
        "\u65e9\u98df\u3044": 1,
        "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1,
        "\u8010\u9707": 1,
        "LV1\u30b9\u30ed\u30c3\u30c8": 1,
        "\u6bd2\u30d3\u30f3\u8ffd\u52a0": 1,
        "\u7634\u6c17\u8010\u6027": 1,
        "\u8cab\u901a\u5f3e\u30fb\u7adc\u306e\u4e00\u77e2\u5f37\u5316": 1,
        "\u7d0d\u5200\u8853": 1,
        "\u629c\u5200\u8853\u3010\u6280\u3011": 1,
        "\u8ffd\u8de1\u306e\u9054\u4eba": 1,
        "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1,
        "\u9006\u6068\u307f": 1,
        "\u9f8d\u8010\u6027": 1,
        "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1,
        "\u7cbe\u970a\u306e\u52a0\u8b77": 1,
        "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 1,
        "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 1,
        "\u7121\u5c5e\u6027\u5f37\u5316": 1,
        "LV2\u30b9\u30ed\u30c3\u30c8": 1,
        "\u6bd2\u5c5e\u6027\u5f37\u5316": 1,
        "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
        "\u7761\u7720\u8010\u6027": 1,
        "\u6c17\u7d76\u8010\u6027": 1,
        "\u7832\u8853": 1,
        "\u3072\u308b\u307f\u8efd\u6e1b": 1,
        "\u5f37\u5316\u6301\u7d9a": 1,
        "\u6bd2\u8010\u6027": 1,
        "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30": 1,
        "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1,
        "\u30e9\u30f3\u30ca\u30fc": 1,
        "\u9ebb\u75fa\u8010\u6027": 1,
        "\u96f7\u8010\u6027": 1,
        "\u5320": 1,
        "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 1,
        "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1,
        "\u30ac\u30fc\u30c9\u5f37\u5316": 1,
        "\u6e3e\u8eab": 1,
        "\u5fc3\u773c\uff0f\u5f3e\u5c0e\u5f37\u5316": 1,
        "\u6c34\u8010\u6027": 1,
        "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1,
        "\u8033\u6813": 1,
        "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 1,
        "\u7206\u7834\u30d3\u30f3\u8ffd\u52a0": 1,
        "\u6ed1\u8d70\u5f37\u5316": 1,
        "\u4f53\u529b\u5897\u5f37": 1,
        "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027": 1,
        "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 1,
        "\u653b\u6483": 1,
        "\u8d85\u4f1a\u5fc3": 1,
        "\u6f5c\u4f0f": 1,
        "\u5f13\u6e9c\u3081\u6bb5\u968e\u89e3\u653e": 1,
        "\u6c37\u8010\u6027": 1,
        "\u7834\u58ca\u738b": 1,
        "\uff2b\uff2f\u8853": 1,
        "\u7832\u6483\u624b": 1,
        "\u88c2\u50b7\u8010\u6027": 1,
        "\u6563\u5f3e\u30fb\u525b\u5c04\u5f37\u5316": 1,
        "\u9f8d\u5c01\u529b\u5f37\u5316": 1,
        "\u901a\u5e38\u5f3e\u30fb\u901a\u5e38\u77e2\u5f37\u5316": 1,
        "\u98a8\u5727\u8010\u6027": 1,
        "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1,
        "\u6c34\u5834\u9069\u5fdc": 1,
        "\u706b\u4e8b\u5834\u529b": 1,
        "\u6311\u6226\u8005": 1,
        "\u56de\u5fa9\u901f\u5ea6": 1,
        "LV3\u30b9\u30ed\u30c3\u30c8": 1,
        "\u96c6\u4e2d": 1,
        "\u6e80\u8db3\u611f": 1,
        "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 1,
        "\u6574\u5099": 1,
        "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
        "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
        "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
        "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 1,
        "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1,
        "\u5730\u8cea\u5b66": 1,
        "\u5f31\u70b9\u7279\u52b9": 1,
        "\u529b\u306e\u89e3\u653e": 1,
        "\u4f53\u8853": 1,
        "\u4e0d\u5c48": 1,
        "\u706b\u8010\u6027": 1,
        "\u9ebb\u75fa\u30d3\u30f3\u8ffd\u52a0": 1,
        "\u30dc\u30de\u30fc": 1,
        "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1,
        "\u7b1b\u5439\u304d\u540d\u4eba": 1,
        "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 1,
        "\u898b\u5207\u308a": 1,
        "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1,
        "\u56de\u907f\u6027\u80fd": 1,
        "\u690d\u751f\u5b66": 1,
        "\u30ac\u30fc\u30c9\u6027\u80fd": 1,
        "\u9632\u5fa1": 1,
        "\u98db\u71d5": 1,
        "\u7761\u7720\u30d3\u30f3\u8ffd\u52a0": 1,
        "\u8179\u6e1b\u308a\u8010\u6027": 1,
        "\u525b\u5203\u7814\u78e8": 1,
        "\u5a01\u5687": 1,
        "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1,
        "\u5e83\u57df\u5316": 1,
        "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1,
        "\u6b7b\u4e2d\u306b\u6d3b": 1
    };
    k.i = [{
            genre: "\u30af\u30a8\u30b9\u30c8",
            skills: [{
                    skill: "\u30af\u30e9\u30a4\u30de\u30fc",
                    points: 1,
                    type: 3,
                    name: "\u30af\u30e9\u30a4\u30de\u30fcLv1"
                }, {
                    skill: "\u3057\u3083\u304c\u307f\u79fb\u52d5\u901f\u5ea6\uff35\uff30",
                    points: 1,
                    type: 3,
                    name: "\u3057\u3083\u304c\u307f\u79fb\u52d5\u901f\u5ea6\uff35\uff30Lv1"
                }, {
                    skill: "\u7814\u7a76\u8005",
                    points: 1,
                    type: 3,
                    name: "\u7814\u7a76\u8005Lv1"
                }, {
                    skill: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d",
                    points: 1,
                    type: 3,
                    name: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914dLv1"
                }, {
                    skill: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d",
                    points: 2,
                    type: 3,
                    name: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914dLv2"
                }, {
                    skill: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d",
                    points: 3,
                    type: 3,
                    name: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914dLv3"
                }, {
                    skill: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d",
                    points: 4,
                    type: 3,
                    name: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914dLv4"
                }, {
                    skill: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d",
                    points: 5,
                    type: 3,
                    name: "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914dLv5"
                }, {
                    skill: "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9",
                    points: 1,
                    type: 3,
                    name: "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9Lv1"
                }, {
                    skill: "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9",
                    points: 2,
                    type: 3,
                    name: "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9Lv2"
                }, {
                    skill: "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9",
                    points: 3,
                    type: 3,
                    name: "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9Lv3"
                }, {
                    skill: "\u30b8\u30e3\u30f3\u30d7\u9244\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u30b8\u30e3\u30f3\u30d7\u9244\u4ebaLv1"
                }, {
                    skill: "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fc",
                    points: 1,
                    type: 3,
                    name: "\u30cf\u30cb\u30fc\u30cf\u30f3\u30bf\u30fcLv1"
                }, {
                    skill: "\u30e9\u30f3\u30ca\u30fc",
                    points: 1,
                    type: 3,
                    name: "\u30e9\u30f3\u30ca\u30fcLv1"
                }, {
                    skill: "\u30e9\u30f3\u30ca\u30fc",
                    points: 2,
                    type: 3,
                    name: "\u30e9\u30f3\u30ca\u30fcLv2"
                }, {
                    skill: "\u30e9\u30f3\u30ca\u30fc",
                    points: 3,
                    type: 3,
                    name: "\u30e9\u30f3\u30ca\u30fcLv3"
                }, {
                    skill: "\u4f53\u8853",
                    points: 1,
                    type: 3,
                    name: "\u4f53\u8853Lv1"
                }, {
                    skill: "\u4f53\u8853",
                    points: 2,
                    type: 3,
                    name: "\u4f53\u8853Lv2"
                }, {
                    skill: "\u4f53\u8853",
                    points: 3,
                    type: 3,
                    name: "\u4f53\u8853Lv3"
                },
                {
                    skill: "\u4f53\u8853",
                    points: 4,
                    type: 3,
                    name: "\u4f53\u8853Lv4"
                }, {
                    skill: "\u4f53\u8853",
                    points: 5,
                    type: 3,
                    name: "\u4f53\u8853Lv5"
                }, {
                    skill: "\u7b1b\u5439\u304d\u540d\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u7b1b\u5439\u304d\u540d\u4ebaLv1"
                }, {
                    skill: "\u5265\u304e\u53d6\u308a\u9244\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u5265\u304e\u53d6\u308a\u9244\u4ebaLv1"
                }, {
                    skill: "\u5730\u8cea\u5b66",
                    points: 1,
                    type: 3,
                    name: "\u5730\u8cea\u5b66Lv1"
                }, {
                    skill: "\u5730\u8cea\u5b66",
                    points: 2,
                    type: 3,
                    name: "\u5730\u8cea\u5b66Lv2"
                }, {
                    skill: "\u5730\u8cea\u5b66",
                    points: 3,
                    type: 3,
                    name: "\u5730\u8cea\u5b66Lv3"
                }, {
                    skill: "\u5a01\u5687",
                    points: 1,
                    type: 3,
                    name: "\u5a01\u5687Lv1"
                }, {
                    skill: "\u5a01\u5687",
                    points: 2,
                    type: 3,
                    name: "\u5a01\u5687Lv2"
                }, {
                    skill: "\u5a01\u5687",
                    points: 3,
                    type: 3,
                    name: "\u5a01\u5687Lv3"
                }, {
                    skill: "\u5c0e\u87f2\u53cd\u5fdc\u8ddd\u96e2\uff35\uff30",
                    points: 1,
                    type: 3,
                    name: "\u5c0e\u87f2\u53cd\u5fdc\u8ddd\u96e2\uff35\uff30Lv1"
                }, {
                    skill: "\u611f\u77e5",
                    points: 1,
                    type: 3,
                    name: "\u611f\u77e5Lv1"
                }, {
                    skill: "\u63a1\u96c6\u306e\u9054\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u63a1\u96c6\u306e\u9054\u4ebaLv1"
                },
                {
                    skill: "\u63a2\u7d22\u8005\u306e\u5e78\u904b",
                    points: 1,
                    type: 3,
                    name: "\u63a2\u7d22\u8005\u306e\u5e78\u904bLv1"
                }, {
                    skill: "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u6606\u866b\u6a19\u672c\u306e\u9054\u4ebaLv1"
                }, {
                    skill: "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba",
                    points: 2,
                    type: 3,
                    name: "\u6606\u866b\u6a19\u672c\u306e\u9054\u4ebaLv2"
                }, {
                    skill: "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba",
                    points: 3,
                    type: 3,
                    name: "\u6606\u866b\u6a19\u672c\u306e\u9054\u4ebaLv3"
                }, {
                    skill: "\u690d\u751f\u5b66",
                    points: 1,
                    type: 3,
                    name: "\u690d\u751f\u5b66Lv1"
                }, {
                    skill: "\u690d\u751f\u5b66",
                    points: 2,
                    type: 3,
                    name: "\u690d\u751f\u5b66Lv2"
                }, {
                    skill: "\u690d\u751f\u5b66",
                    points: 3,
                    type: 3,
                    name: "\u690d\u751f\u5b66Lv3"
                }, {
                    skill: "\u690d\u751f\u5b66",
                    points: 4,
                    type: 3,
                    name: "\u690d\u751f\u5b66Lv4"
                }, {
                    skill: "\u6ed1\u8d70\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u6ed1\u8d70\u5f37\u5316Lv1"
                }, {
                    skill: "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58",
                    points: 1,
                    type: 3,
                    name: "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58Lv1"
                }, {
                    skill: "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58",
                    points: 2,
                    type: 3,
                    name: "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58Lv2"
                }, {
                    skill: "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58",
                    points: 3,
                    type: 3,
                    name: "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58Lv3"
                }, {
                    skill: "\u8179\u6e1b\u308a\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u8179\u6e1b\u308a\u8010\u6027Lv1"
                }, {
                    skill: "\u8179\u6e1b\u308a\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u8179\u6e1b\u308a\u8010\u6027Lv2"
                }, {
                    skill: "\u8179\u6e1b\u308a\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u8179\u6e1b\u308a\u8010\u6027Lv3"
                }, {
                    skill: "\u8ffd\u8de1\u306e\u9054\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u8ffd\u8de1\u306e\u9054\u4ebaLv1"
                }, {
                    skill: "\u904b\u642c\u306e\u9054\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u904b\u642c\u306e\u9054\u4ebaLv1"
                }, {
                    skill: "\u91e3\u308a\u540d\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u91e3\u308a\u540d\u4ebaLv1"
                }, {
                    skill: "\u7832\u6483\u624b",
                    points: 1,
                    type: 3,
                    name: "\u7832\u6483\u624bLv1"
                }, {
                    skill: "\u7832\u6483\u624b",
                    points: 2,
                    type: 3,
                    name: "\u7832\u6483\u624bLv2"
                }
            ]
        }, {
            genre: "\u30a2\u30a4\u30c6\u30e0",
            skills: [{
                    skill: "\u65e9\u98df\u3044",
                    points: 1,
                    type: 3,
                    name: "\u65e9\u98df\u3044Lv1"
                },
                {
                    skill: "\u65e9\u98df\u3044",
                    points: 2,
                    type: 3,
                    name: "\u65e9\u98df\u3044Lv2"
                }, {
                    skill: "\u65e9\u98df\u3044",
                    points: 3,
                    type: 3,
                    name: "\u65e9\u98df\u3044Lv3"
                }, {
                    skill: "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30",
                    points: 1,
                    type: 3,
                    name: "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30Lv1"
                }, {
                    skill: "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30",
                    points: 2,
                    type: 3,
                    name: "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30Lv2"
                }, {
                    skill: "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30",
                    points: 3,
                    type: 3,
                    name: "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30Lv3"
                },
                {
                    skill: "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30",
                    points: 1,
                    type: 3,
                    name: "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30Lv1"
                }, {
                    skill: "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30",
                    points: 2,
                    type: 3,
                    name: "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30Lv2"
                }, {
                    skill: "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30",
                    points: 3,
                    type: 3,
                    name: "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30Lv3"
                }, {
                    skill: "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316Lv1"
                }, {
                    skill: "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316Lv2"
                }, {
                    skill: "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316Lv3"
                }, {
                    skill: "\u30ad\u30ce\u30b3\u5927\u597d\u304d",
                    points: 1,
                    type: 3,
                    name: "\u30ad\u30ce\u30b3\u5927\u597d\u304dLv1"
                }, {
                    skill: "\u30ad\u30ce\u30b3\u5927\u597d\u304d",
                    points: 2,
                    type: 3,
                    name: "\u30ad\u30ce\u30b3\u5927\u597d\u304dLv2"
                }, {
                    skill: "\u30ad\u30ce\u30b3\u5927\u597d\u304d",
                    points: 3,
                    type: 3,
                    name: "\u30ad\u30ce\u30b3\u5927\u597d\u304dLv3"
                }, {
                    skill: "\u3053\u3084\u3057\u540d\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u3053\u3084\u3057\u540d\u4ebaLv1"
                }, {
                    skill: "\u6e80\u8db3\u611f",
                    points: 1,
                    type: 3,
                    name: "\u6e80\u8db3\u611fLv1"
                }, {
                    skill: "\u5e83\u57df\u5316",
                    points: 1,
                    type: 3,
                    name: "\u5e83\u57df\u5316Lv1"
                }, {
                    skill: "\u5e83\u57df\u5316",
                    points: 2,
                    type: 3,
                    name: "\u5e83\u57df\u5316Lv2"
                }, {
                    skill: "\u5e83\u57df\u5316",
                    points: 3,
                    type: 3,
                    name: "\u5e83\u57df\u5316Lv3"
                }, {
                    skill: "\u5e83\u57df\u5316",
                    points: 4,
                    type: 3,
                    name: "\u5e83\u57df\u5316Lv4"
                }, {
                    skill: "\u5e83\u57df\u5316",
                    points: 5,
                    type: 3,
                    name: "\u5e83\u57df\u5316Lv5"
                }, {
                    skill: "\u8089\u713c\u304d\u540d\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u8089\u713c\u304d\u540d\u4ebaLv1"
                }, {
                    skill: "\u9583\u5149\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u9583\u5149\u5f37\u5316Lv1"
                }, {
                    skill: "\u30dc\u30de\u30fc",
                    points: 1,
                    type: 3,
                    name: "\u30dc\u30de\u30fcLv1"
                }, {
                    skill: "\u30dc\u30de\u30fc",
                    points: 2,
                    type: 3,
                    name: "\u30dc\u30de\u30fcLv2"
                },
                {
                    skill: "\u30dc\u30de\u30fc",
                    points: 3,
                    type: 3,
                    name: "\u30dc\u30de\u30fcLv3"
                }, {
                    skill: "\u6574\u5099",
                    points: 1,
                    type: 3,
                    name: "\u6574\u5099Lv1"
                }, {
                    skill: "\u6574\u5099",
                    points: 2,
                    type: 3,
                    name: "\u6574\u5099Lv2"
                }, {
                    skill: "\u6574\u5099",
                    points: 3,
                    type: 3,
                    name: "\u6574\u5099Lv3"
                }
            ]
        }, {
            genre: "\u6226\u95d8(\u751f\u5b58)",
            skills: [{
                    skill: "\u56de\u907f\u6027\u80fd",
                    points: 1,
                    type: 3,
                    name: "\u56de\u907f\u6027\u80fdLv1"
                }, {
                    skill: "\u56de\u907f\u6027\u80fd",
                    points: 2,
                    type: 3,
                    name: "\u56de\u907f\u6027\u80fdLv2"
                }, {
                    skill: "\u56de\u907f\u6027\u80fd",
                    points: 3,
                    type: 3,
                    name: "\u56de\u907f\u6027\u80fdLv3"
                }, {
                    skill: "\u56de\u907f\u6027\u80fd",
                    points: 4,
                    type: 3,
                    name: "\u56de\u907f\u6027\u80fdLv4"
                }, {
                    skill: "\u56de\u907f\u6027\u80fd",
                    points: 5,
                    type: 3,
                    name: "\u56de\u907f\u6027\u80fdLv5"
                }, {
                    skill: "\u56de\u907f\u8ddd\u96e2\uff35\uff30",
                    points: 1,
                    type: 3,
                    name: "\u56de\u907f\u8ddd\u96e2\uff35\uff30Lv1"
                }, {
                    skill: "\u56de\u907f\u8ddd\u96e2\uff35\uff30",
                    points: 2,
                    type: 3,
                    name: "\u56de\u907f\u8ddd\u96e2\uff35\uff30Lv2"
                }, {
                    skill: "\u56de\u907f\u8ddd\u96e2\uff35\uff30",
                    points: 3,
                    type: 3,
                    name: "\u56de\u907f\u8ddd\u96e2\uff35\uff30Lv3"
                }, {
                    skill: "\u98db\u3073\u8fbc\u307f",
                    points: 1,
                    type: 3,
                    name: "\u98db\u3073\u8fbc\u307fLv1"
                }, {
                    skill: "\u30ac\u30fc\u30c9\u6027\u80fd",
                    points: 1,
                    type: 3,
                    name: "\u30ac\u30fc\u30c9\u6027\u80fdLv1"
                }, {
                    skill: "\u30ac\u30fc\u30c9\u6027\u80fd",
                    points: 2,
                    type: 3,
                    name: "\u30ac\u30fc\u30c9\u6027\u80fdLv2"
                }, {
                    skill: "\u30ac\u30fc\u30c9\u6027\u80fd",
                    points: 3,
                    type: 3,
                    name: "\u30ac\u30fc\u30c9\u6027\u80fdLv3"
                }, {
                    skill: "\u30ac\u30fc\u30c9\u6027\u80fd",
                    points: 4,
                    type: 3,
                    name: "\u30ac\u30fc\u30c9\u6027\u80fdLv4"
                },
                {
                    skill: "\u30ac\u30fc\u30c9\u6027\u80fd",
                    points: 5,
                    type: 3,
                    name: "\u30ac\u30fc\u30c9\u6027\u80fdLv5"
                }, {
                    skill: "\u30ac\u30fc\u30c9\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u30ac\u30fc\u30c9\u5f37\u5316Lv1"
                }, {
                    skill: "\u7cbe\u970a\u306e\u52a0\u8b77",
                    points: 1,
                    type: 3,
                    name: "\u7cbe\u970a\u306e\u52a0\u8b77Lv1"
                }, {
                    skill: "\u7cbe\u970a\u306e\u52a0\u8b77",
                    points: 2,
                    type: 3,
                    name: "\u7cbe\u970a\u306e\u52a0\u8b77Lv2"
                }, {
                    skill: "\u7cbe\u970a\u306e\u52a0\u8b77",
                    points: 3,
                    type: 3,
                    name: "\u7cbe\u970a\u306e\u52a0\u8b77Lv3"
                }, {
                    skill: "\u7d0d\u5200\u8853",
                    points: 1,
                    type: 3,
                    name: "\u7d0d\u5200\u8853Lv1"
                }, {
                    skill: "\u7d0d\u5200\u8853",
                    points: 2,
                    type: 3,
                    name: "\u7d0d\u5200\u8853Lv2"
                }, {
                    skill: "\u7d0d\u5200\u8853",
                    points: 3,
                    type: 3,
                    name: "\u7d0d\u5200\u8853Lv3"
                }, {
                    skill: "\u6f5c\u4f0f",
                    points: 1,
                    type: 3,
                    name: "\u6f5c\u4f0fLv1"
                }, {
                    skill: "\u6f5c\u4f0f",
                    points: 2,
                    type: 3,
                    name: "\u6f5c\u4f0fLv2"
                }, {
                    skill: "\u6f5c\u4f0f",
                    points: 3,
                    type: 3,
                    name: "\u6f5c\u4f0fLv3"
                }, {
                    skill: "\u3072\u308b\u307f\u8efd\u6e1b",
                    points: 1,
                    type: 3,
                    name: "\u3072\u308b\u307f\u8efd\u6e1bLv1"
                }, {
                    skill: "\u3072\u308b\u307f\u8efd\u6e1b",
                    points: 2,
                    type: 3,
                    name: "\u3072\u308b\u307f\u8efd\u6e1bLv2"
                }, {
                    skill: "\u3072\u308b\u307f\u8efd\u6e1b",
                    points: 3,
                    type: 3,
                    name: "\u3072\u308b\u307f\u8efd\u6e1bLv3"
                }, {
                    skill: "\u56de\u5fa9\u901f\u5ea6",
                    points: 1,
                    type: 3,
                    name: "\u56de\u5fa9\u901f\u5ea6Lv1"
                }, {
                    skill: "\u56de\u5fa9\u901f\u5ea6",
                    points: 2,
                    type: 3,
                    name: "\u56de\u5fa9\u901f\u5ea6Lv2"
                }, {
                    skill: "\u56de\u5fa9\u901f\u5ea6",
                    points: 3,
                    type: 3,
                    name: "\u56de\u5fa9\u901f\u5ea6Lv3"
                }, {
                    skill: "\u6b7b\u4e2d\u306b\u6d3b",
                    points: 1,
                    type: 3,
                    name: "\u6b7b\u4e2d\u306b\u6d3bLv1"
                }
            ]
        },
        {
            genre: "\u7279\u6b8a\u653b\u6483\u8010\u6027",
            skills: [{
                    skill: "\u8033\u6813",
                    points: 1,
                    type: 3,
                    name: "\u8033\u6813Lv1"
                }, {
                    skill: "\u8033\u6813",
                    points: 2,
                    type: 3,
                    name: "\u8033\u6813Lv2"
                }, {
                    skill: "\u8033\u6813",
                    points: 3,
                    type: 3,
                    name: "\u8033\u6813Lv3"
                }, {
                    skill: "\u8033\u6813",
                    points: 4,
                    type: 3,
                    name: "\u8033\u6813Lv4"
                }, {
                    skill: "\u8033\u6813",
                    points: 5,
                    type: 3,
                    name: "\u8033\u6813Lv5"
                }, {
                    skill: "\u98a8\u5727\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u98a8\u5727\u8010\u6027Lv1"
                }, {
                    skill: "\u98a8\u5727\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u98a8\u5727\u8010\u6027Lv2"
                },
                {
                    skill: "\u98a8\u5727\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u98a8\u5727\u8010\u6027Lv3"
                }, {
                    skill: "\u98a8\u5727\u8010\u6027",
                    points: 4,
                    type: 3,
                    name: "\u98a8\u5727\u8010\u6027Lv4"
                }, {
                    skill: "\u98a8\u5727\u8010\u6027",
                    points: 5,
                    type: 3,
                    name: "\u98a8\u5727\u8010\u6027Lv5"
                }, {
                    skill: "\u8010\u9707",
                    points: 1,
                    type: 3,
                    name: "\u8010\u9707Lv1"
                }, {
                    skill: "\u8010\u9707",
                    points: 2,
                    type: 3,
                    name: "\u8010\u9707Lv2"
                }, {
                    skill: "\u8010\u9707",
                    points: 3,
                    type: 3,
                    name: "\u8010\u9707Lv3"
                }, {
                    skill: "\u88c2\u50b7\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u88c2\u50b7\u8010\u6027Lv1"
                },
                {
                    skill: "\u88c2\u50b7\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u88c2\u50b7\u8010\u6027Lv2"
                }, {
                    skill: "\u88c2\u50b7\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u88c2\u50b7\u8010\u6027Lv3"
                }, {
                    skill: "\u7634\u6c17\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u7634\u6c17\u8010\u6027Lv1"
                }, {
                    skill: "\u7634\u6c17\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u7634\u6c17\u8010\u6027Lv2"
                }, {
                    skill: "\u7634\u6c17\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u7634\u6c17\u8010\u6027Lv3"
                }, {
                    skill: "\u6c17\u7d76\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u6c17\u7d76\u8010\u6027Lv1"
                },
                {
                    skill: "\u6c17\u7d76\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u6c17\u7d76\u8010\u6027Lv2"
                }, {
                    skill: "\u6c17\u7d76\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u6c17\u7d76\u8010\u6027Lv3"
                }, {
                    skill: "\u9ebb\u75fa\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u9ebb\u75fa\u8010\u6027Lv1"
                }, {
                    skill: "\u9ebb\u75fa\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u9ebb\u75fa\u8010\u6027Lv2"
                }, {
                    skill: "\u9ebb\u75fa\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u9ebb\u75fa\u8010\u6027Lv3"
                }, {
                    skill: "\u6bd2\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u6bd2\u8010\u6027Lv1"
                },
                {
                    skill: "\u6bd2\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u6bd2\u8010\u6027Lv2"
                }, {
                    skill: "\u6bd2\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u6bd2\u8010\u6027Lv3"
                }, {
                    skill: "\u7761\u7720\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u7761\u7720\u8010\u6027Lv1"
                }, {
                    skill: "\u7761\u7720\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u7761\u7720\u8010\u6027Lv2"
                }, {
                    skill: "\u7761\u7720\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u7761\u7720\u8010\u6027Lv3"
                }, {
                    skill: "\u6c34\u5834\u9069\u5fdc",
                    points: 1,
                    type: 3,
                    name: "\u6c34\u5834\u9069\u5fdcLv1"
                }, {
                    skill: "\u6c34\u5834\u9069\u5fdc",
                    points: 2,
                    type: 3,
                    name: "\u6c34\u5834\u9069\u5fdcLv2"
                }, {
                    skill: "\u6c34\u5834\u9069\u5fdc",
                    points: 3,
                    type: 3,
                    name: "\u6c34\u5834\u9069\u5fdcLv3"
                }, {
                    skill: "\u6ce5\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u6ce5\u8010\u6027Lv1"
                }, {
                    skill: "\u7634\u6c17\u74b0\u5883\u9069\u5fdc",
                    points: 1,
                    type: 3,
                    name: "\u7634\u6c17\u74b0\u5883\u9069\u5fdcLv1"
                }, {
                    skill: "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027Lv1"
                }, {
                    skill: "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027Lv2"
                }, {
                    skill: "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027Lv3"
                }, {
                    skill: "\u71b1\u30c0\u30e1\u30fc\u30b8\u7121\u52b9",
                    points: 1,
                    type: 3,
                    name: "\u71b1\u30c0\u30e1\u30fc\u30b8\u7121\u52b9Lv1"
                }, {
                    skill: "\u7206\u7834\u3084\u3089\u308c\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u7206\u7834\u3084\u3089\u308c\u8010\u6027Lv1"
                }, {
                    skill: "\u7206\u7834\u3084\u3089\u308c\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u7206\u7834\u3084\u3089\u308c\u8010\u6027Lv2"
                }, {
                    skill: "\u7206\u7834\u3084\u3089\u308c\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u7206\u7834\u3084\u3089\u308c\u8010\u6027Lv3"
                }, {
                    skill: "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027",
                    points: 1,
                    type: 3,
                    name: "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027Lv1"
                }, {
                    skill: "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027",
                    points: 2,
                    type: 3,
                    name: "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027Lv2"
                }, {
                    skill: "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027",
                    points: 3,
                    type: 3,
                    name: "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027Lv3"
                }
            ]
        }, {
            genre: "\u30d1\u30e9\u30e1\u30fc\u30bf\u5909\u5316",
            skills: [{
                skill: "\u653b\u6483",
                points: 1,
                type: 3,
                name: "\u653b\u6483Lv1"
            }, {
                skill: "\u653b\u6483",
                points: 2,
                type: 3,
                name: "\u653b\u6483Lv2"
            }, {
                skill: "\u653b\u6483",
                points: 3,
                type: 3,
                name: "\u653b\u6483Lv3"
            }, {
                skill: "\u653b\u6483",
                points: 4,
                type: 3,
                name: "\u653b\u6483Lv4"
            }, {
                skill: "\u653b\u6483",
                points: 5,
                type: 3,
                name: "\u653b\u6483Lv5"
            }, {
                skill: "\u653b\u6483",
                points: 6,
                type: 3,
                name: "\u653b\u6483Lv6"
            }, {
                skill: "\u653b\u6483",
                points: 7,
                type: 3,
                name: "\u653b\u6483Lv7"
            }, {
                skill: "\u9632\u5fa1",
                points: 1,
                type: 3,
                name: "\u9632\u5fa1Lv1"
            }, {
                skill: "\u9632\u5fa1",
                points: 2,
                type: 3,
                name: "\u9632\u5fa1Lv2"
            }, {
                skill: "\u9632\u5fa1",
                points: 3,
                type: 3,
                name: "\u9632\u5fa1Lv3"
            }, {
                skill: "\u9632\u5fa1",
                points: 4,
                type: 3,
                name: "\u9632\u5fa1Lv4"
            }, {
                skill: "\u9632\u5fa1",
                points: 5,
                type: 3,
                name: "\u9632\u5fa1Lv5"
            }, {
                skill: "\u9632\u5fa1",
                points: 6,
                type: 3,
                name: "\u9632\u5fa1Lv6"
            }, {
                skill: "\u9632\u5fa1",
                points: 7,
                type: 3,
                name: "\u9632\u5fa1Lv7"
            }, {
                skill: "\u706b\u8010\u6027",
                points: 1,
                type: 3,
                name: "\u706b\u8010\u6027Lv1"
            }, {
                skill: "\u706b\u8010\u6027",
                points: 2,
                type: 3,
                name: "\u706b\u8010\u6027Lv2"
            }, {
                skill: "\u706b\u8010\u6027",
                points: 3,
                type: 3,
                name: "\u706b\u8010\u6027Lv3"
            }, {
                skill: "\u6c34\u8010\u6027",
                points: 1,
                type: 3,
                name: "\u6c34\u8010\u6027Lv1"
            }, {
                skill: "\u6c34\u8010\u6027",
                points: 2,
                type: 3,
                name: "\u6c34\u8010\u6027Lv2"
            }, {
                skill: "\u6c34\u8010\u6027",
                points: 3,
                type: 3,
                name: "\u6c34\u8010\u6027Lv3"
            }, {
                skill: "\u6c37\u8010\u6027",
                points: 1,
                type: 3,
                name: "\u6c37\u8010\u6027Lv1"
            }, {
                skill: "\u6c37\u8010\u6027",
                points: 2,
                type: 3,
                name: "\u6c37\u8010\u6027Lv2"
            }, {
                skill: "\u6c37\u8010\u6027",
                points: 3,
                type: 3,
                name: "\u6c37\u8010\u6027Lv3"
            }, {
                skill: "\u96f7\u8010\u6027",
                points: 1,
                type: 3,
                name: "\u96f7\u8010\u6027Lv1"
            }, {
                skill: "\u96f7\u8010\u6027",
                points: 2,
                type: 3,
                name: "\u96f7\u8010\u6027Lv2"
            }, {
                skill: "\u96f7\u8010\u6027",
                points: 3,
                type: 3,
                name: "\u96f7\u8010\u6027Lv3"
            }, {
                skill: "\u9f8d\u8010\u6027",
                points: 1,
                type: 3,
                name: "\u9f8d\u8010\u6027Lv1"
            }, {
                skill: "\u9f8d\u8010\u6027",
                points: 2,
                type: 3,
                name: "\u9f8d\u8010\u6027Lv2"
            }, {
                skill: "\u9f8d\u8010\u6027",
                points: 3,
                type: 3,
                name: "\u9f8d\u8010\u6027Lv3"
            }, {
                skill: "\u4f53\u529b\u5897\u5f37",
                points: 1,
                type: 3,
                name: "\u4f53\u529b\u5897\u5f37Lv1"
            }, {
                skill: "\u4f53\u529b\u5897\u5f37",
                points: 2,
                type: 3,
                name: "\u4f53\u529b\u5897\u5f37Lv2"
            }, {
                skill: "\u4f53\u529b\u5897\u5f37",
                points: 3,
                type: 3,
                name: "\u4f53\u529b\u5897\u5f37Lv3"
            }]
        }, {
            genre: "\u6226\u95d8(\u5c5e\u6027\u30fb\u7570\u5e38)",
            skills: [{
                    skill: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv1"
                }, {
                    skill: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv2"
                }, {
                    skill: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv3"
                }, {
                    skill: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 4,
                    type: 3,
                    name: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv4"
                }, {
                    skill: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 5,
                    type: 3,
                    name: "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv5"
                }, {
                    skill: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv1"
                }, {
                    skill: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv2"
                }, {
                    skill: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv3"
                }, {
                    skill: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 4,
                    type: 3,
                    name: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv4"
                }, {
                    skill: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 5,
                    type: 3,
                    name: "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv5"
                },
                {
                    skill: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv1"
                }, {
                    skill: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv2"
                }, {
                    skill: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv3"
                }, {
                    skill: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 4,
                    type: 3,
                    name: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv4"
                }, {
                    skill: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 5,
                    type: 3,
                    name: "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv5"
                }, {
                    skill: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv1"
                }, {
                    skill: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv2"
                }, {
                    skill: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv3"
                }, {
                    skill: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 4,
                    type: 3,
                    name: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv4"
                }, {
                    skill: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 5,
                    type: 3,
                    name: "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv5"
                }, {
                    skill: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv1"
                }, {
                    skill: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv2"
                }, {
                    skill: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv3"
                },
                {
                    skill: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 4,
                    type: 3,
                    name: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv4"
                }, {
                    skill: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316",
                    points: 5,
                    type: 3,
                    name: "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316Lv5"
                }, {
                    skill: "\u6bd2\u5c5e\u6027\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u6bd2\u5c5e\u6027\u5f37\u5316Lv1"
                }, {
                    skill: "\u6bd2\u5c5e\u6027\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u6bd2\u5c5e\u6027\u5f37\u5316Lv2"
                }, {
                    skill: "\u6bd2\u5c5e\u6027\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u6bd2\u5c5e\u6027\u5f37\u5316Lv3"
                },
                {
                    skill: "\u7206\u7834\u5c5e\u6027\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u7206\u7834\u5c5e\u6027\u5f37\u5316Lv1"
                }, {
                    skill: "\u7206\u7834\u5c5e\u6027\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u7206\u7834\u5c5e\u6027\u5f37\u5316Lv2"
                }, {
                    skill: "\u7206\u7834\u5c5e\u6027\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u7206\u7834\u5c5e\u6027\u5f37\u5316Lv3"
                }, {
                    skill: "\u7761\u7720\u5c5e\u6027\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u7761\u7720\u5c5e\u6027\u5f37\u5316Lv1"
                }, {
                    skill: "\u7761\u7720\u5c5e\u6027\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u7761\u7720\u5c5e\u6027\u5f37\u5316Lv2"
                }, {
                    skill: "\u7761\u7720\u5c5e\u6027\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u7761\u7720\u5c5e\u6027\u5f37\u5316Lv3"
                }, {
                    skill: "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316Lv1"
                }, {
                    skill: "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316Lv2"
                }, {
                    skill: "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316",
                    points: 3,
                    type: 3,
                    name: "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316Lv3"
                }, {
                    skill: "\u9f8d\u5c01\u529b\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u9f8d\u5c01\u529b\u5f37\u5316Lv1"
                }, {
                    skill: "\uff2b\uff2f\u8853",
                    points: 1,
                    type: 3,
                    name: "\uff2b\uff2f\u8853Lv1"
                }, {
                    skill: "\uff2b\uff2f\u8853",
                    points: 2,
                    type: 3,
                    name: "\uff2b\uff2f\u8853Lv2"
                }, {
                    skill: "\uff2b\uff2f\u8853",
                    points: 3,
                    type: 3,
                    name: "\uff2b\uff2f\u8853Lv3"
                }, {
                    skill: "\u7834\u58ca\u738b",
                    points: 1,
                    type: 3,
                    name: "\u7834\u58ca\u738bLv1"
                }, {
                    skill: "\u7834\u58ca\u738b",
                    points: 2,
                    type: 3,
                    name: "\u7834\u58ca\u738bLv2"
                }, {
                    skill: "\u7834\u58ca\u738b",
                    points: 3,
                    type: 3,
                    name: "\u7834\u58ca\u738bLv3"
                },
                {
                    skill: "\u30b9\u30bf\u30df\u30ca\u596a\u53d6",
                    points: 1,
                    type: 3,
                    name: "\u30b9\u30bf\u30df\u30ca\u596a\u53d6Lv1"
                }, {
                    skill: "\u30b9\u30bf\u30df\u30ca\u596a\u53d6",
                    points: 2,
                    type: 3,
                    name: "\u30b9\u30bf\u30df\u30ca\u596a\u53d6Lv2"
                }, {
                    skill: "\u30b9\u30bf\u30df\u30ca\u596a\u53d6",
                    points: 3,
                    type: 3,
                    name: "\u30b9\u30bf\u30df\u30ca\u596a\u53d6Lv3"
                }
            ]
        }, {
            genre: "\u6226\u95d8(\u653b\u6483)",
            skills: [{
                    skill: "\u898b\u5207\u308a",
                    points: 1,
                    type: 3,
                    name: "\u898b\u5207\u308aLv1"
                }, {
                    skill: "\u898b\u5207\u308a",
                    points: 2,
                    type: 3,
                    name: "\u898b\u5207\u308aLv2"
                },
                {
                    skill: "\u898b\u5207\u308a",
                    points: 3,
                    type: 3,
                    name: "\u898b\u5207\u308aLv3"
                }, {
                    skill: "\u898b\u5207\u308a",
                    points: 4,
                    type: 3,
                    name: "\u898b\u5207\u308aLv4"
                }, {
                    skill: "\u898b\u5207\u308a",
                    points: 5,
                    type: 3,
                    name: "\u898b\u5207\u308aLv5"
                }, {
                    skill: "\u898b\u5207\u308a",
                    points: 6,
                    type: 3,
                    name: "\u898b\u5207\u308aLv6"
                }, {
                    skill: "\u898b\u5207\u308a",
                    points: 7,
                    type: 3,
                    name: "\u898b\u5207\u308aLv7"
                }, {
                    skill: "\u5f31\u70b9\u7279\u52b9",
                    points: 1,
                    type: 3,
                    name: "\u5f31\u70b9\u7279\u52b9Lv1"
                }, {
                    skill: "\u5f31\u70b9\u7279\u52b9",
                    points: 2,
                    type: 3,
                    name: "\u5f31\u70b9\u7279\u52b9Lv2"
                }, {
                    skill: "\u5f31\u70b9\u7279\u52b9",
                    points: 3,
                    type: 3,
                    name: "\u5f31\u70b9\u7279\u52b9Lv3"
                }, {
                    skill: "\u6e3e\u8eab",
                    points: 1,
                    type: 3,
                    name: "\u6e3e\u8eabLv1"
                }, {
                    skill: "\u6e3e\u8eab",
                    points: 2,
                    type: 3,
                    name: "\u6e3e\u8eabLv2"
                }, {
                    skill: "\u6e3e\u8eab",
                    points: 3,
                    type: 3,
                    name: "\u6e3e\u8eabLv3"
                }, {
                    skill: "\u629c\u5200\u8853\u3010\u6280\u3011",
                    points: 1,
                    type: 3,
                    name: "\u629c\u5200\u8853\u3010\u6280\u3011Lv1"
                }, {
                    skill: "\u629c\u5200\u8853\u3010\u6280\u3011",
                    points: 2,
                    type: 3,
                    name: "\u629c\u5200\u8853\u3010\u6280\u3011Lv2"
                },
                {
                    skill: "\u629c\u5200\u8853\u3010\u6280\u3011",
                    points: 3,
                    type: 3,
                    name: "\u629c\u5200\u8853\u3010\u6280\u3011Lv3"
                }, {
                    skill: "\u8d85\u4f1a\u5fc3",
                    points: 1,
                    type: 3,
                    name: "\u8d85\u4f1a\u5fc3Lv1"
                }, {
                    skill: "\u8d85\u4f1a\u5fc3",
                    points: 2,
                    type: 3,
                    name: "\u8d85\u4f1a\u5fc3Lv2"
                }, {
                    skill: "\u8d85\u4f1a\u5fc3",
                    points: 3,
                    type: 3,
                    name: "\u8d85\u4f1a\u5fc3Lv3"
                }, {
                    skill: "\u4e57\u308a\u540d\u4eba",
                    points: 1,
                    type: 3,
                    name: "\u4e57\u308a\u540d\u4ebaLv1"
                }, {
                    skill: "\u98db\u71d5",
                    points: 1,
                    type: 3,
                    name: "\u98db\u71d5Lv1"
                }, {
                    skill: "\u7121\u5c5e\u6027\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u7121\u5c5e\u6027\u5f37\u5316Lv1"
                }, {
                    skill: "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316",
                    points: 1,
                    type: 3,
                    name: "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316Lv1"
                }, {
                    skill: "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316",
                    points: 2,
                    type: 3,
                    name: "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316Lv2"
                }, {
                    skill: "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316",
                    points: 3,
                    type: 3,
                    name: "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316Lv3"
                }, {
                    skill: "\u525b\u5203\u7814\u78e8",
                    points: 1,
                    type: 3,
                    name: "\u525b\u5203\u7814\u78e8Lv1"
                },
                {
                    skill: "\u5f13\u6e9c\u3081\u6bb5\u968e\u89e3\u653e",
                    points: 1,
                    type: 3,
                    name: "\u5f13\u6e9c\u3081\u6bb5\u968e\u89e3\u653eLv1"
                }, {
                    skill: "\u6bd2\u30d3\u30f3\u8ffd\u52a0",
                    points: 1,
                    type: 3,
                    name: "\u6bd2\u30d3\u30f3\u8ffd\u52a0Lv1"
                }, {
                    skill: "\u9ebb\u75fa\u30d3\u30f3\u8ffd\u52a0",
                    points: 1,
                    type: 3,
                    name: "\u9ebb\u75fa\u30d3\u30f3\u8ffd\u52a0Lv1"
                }, {
                    skill: "\u7761\u7720\u30d3\u30f3\u8ffd\u52a0",
                    points: 1,
                    type: 3,
                    name: "\u7761\u7720\u30d3\u30f3\u8ffd\u52a0Lv1"
                }, {
                    skill: "\u7206\u7834\u30d3\u30f3\u8ffd\u52a0",
                    points: 1,
                    type: 3,
                    name: "\u7206\u7834\u30d3\u30f3\u8ffd\u52a0Lv1"
                }, {
                    skill: "\u706b\u4e8b\u5834\u529b",
                    points: 1,
                    type: 3,
                    name: "\u706b\u4e8b\u5834\u529bLv1"
                }, {
                    skill: "\u706b\u4e8b\u5834\u529b",
                    points: 2,
                    type: 3,
                    name: "\u706b\u4e8b\u5834\u529bLv2"
                }, {
                    skill: "\u706b\u4e8b\u5834\u529b",
                    points: 3,
                    type: 3,
                    name: "\u706b\u4e8b\u5834\u529bLv3"
                }, {
                    skill: "\u706b\u4e8b\u5834\u529b",
                    points: 4,
                    type: 3,
                    name: "\u706b\u4e8b\u5834\u529bLv4"
                }, {
                    skill: "\u706b\u4e8b\u5834\u529b",
                    points: 5,
                    type: 3,
                    name: "\u706b\u4e8b\u5834\u529bLv5"
                }, {
                    skill: "\u9006\u6068\u307f",
                    points: 1,
                    type: 3,
                    name: "\u9006\u6068\u307fLv1"
                }, {
                    skill: "\u9006\u6068\u307f",
                    points: 2,
                    type: 3,
                    name: "\u9006\u6068\u307fLv2"
                }, {
                    skill: "\u9006\u6068\u307f",
                    points: 3,
                    type: 3,
                    name: "\u9006\u6068\u307fLv3"
                }, {
                    skill: "\u9006\u6068\u307f",
                    points: 4,
                    type: 3,
                    name: "\u9006\u6068\u307fLv4"
                }, {
                    skill: "\u9006\u6068\u307f",
                    points: 5,
                    type: 3,
                    name: "\u9006\u6068\u307fLv5"
                }, {
                    skill: "\u4e0d\u5c48",
                    points: 1,
                    type: 3,
                    name: "\u4e0d\u5c48Lv1"
                }, {
                    skill: "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8",
                    points: 1,
                    type: 3,
                    name: "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8Lv1"
                },
                {
                    skill: "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8",
                    points: 2,
                    type: 3,
                    name: "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8Lv2"
                }, {
                    skill: "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8",
                    points: 3,
                    type: 3,
                    name: "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8Lv3"
                }, {
                    skill: "\u529b\u306e\u89e3\u653e",
                    points: 1,
                    type: 3,
                    name: "\u529b\u306e\u89e3\u653eLv1"
                }, {
                    skill: "\u529b\u306e\u89e3\u653e",
                    points: 2,
                    type: 3,
                    name: "\u529b\u306e\u89e3\u653eLv2"
                }, {
                    skill: "\u529b\u306e\u89e3\u653e",
                    points: 3,
                    type: 3,
                    name: "\u529b\u306e\u89e3\u653eLv3"
                }, {
                    skill: "\u529b\u306e\u89e3\u653e",
                    points: 4,
                    type: 3,
                    name: "\u529b\u306e\u89e3\u653eLv4"
                }, {
                    skill: "\u529b\u306e\u89e3\u653e",
                    points: 5,
                    type: 3,
                    name: "\u529b\u306e\u89e3\u653eLv5"
                }, {
                    skill: "\u6311\u6226\u8005",
                    points: 1,
                    type: 3,
                    name: "\u6311\u6226\u8005Lv1"
                }, {
                    skill: "\u6311\u6226\u8005",
                    points: 2,
                    type: 3,
                    name: "\u6311\u6226\u8005Lv2"
                }, {
                    skill: "\u6311\u6226\u8005",
                    points: 3,
                    type: 3,
                    name: "\u6311\u6226\u8005Lv3"
                }, {
                    skill: "\u6311\u6226\u8005",
                    points: 4,
                    type: 3,
                    name: "\u6311\u6226\u8005Lv4"
                }, {
                    skill: "\u6311\u6226\u8005",
                    points: 5,
                    type: 3,
                    name: "\u6311\u6226\u8005Lv5"
                },
                {
                    skill: "\u5320",
                    points: 1,
                    type: 3,
                    name: "\u5320Lv1"
                }, {
                    skill: "\u5320",
                    points: 2,
                    type: 3,
                    name: "\u5320Lv2"
                }, {
                    skill: "\u5320",
                    points: 3,
                    type: 3,
                    name: "\u5320Lv3"
                }, {
                    skill: "\u5320",
                    points: 4,
                    type: 3,
                    name: "\u5320Lv4"
                }, {
                    skill: "\u5320",
                    points: 5,
                    type: 3,
                    name: "\u5320Lv5"
                }, {
                    skill: "\u5fc3\u773c\uff0f\u5f3e\u5c0e\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u5fc3\u773c\uff0f\u5f3e\u5c0e\u5f37\u5316Lv1"
                }, {
                    skill: "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35",
                    points: 1,
                    type: 3,
                    name: "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35Lv1"
                },
                {
                    skill: "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35",
                    points: 2,
                    type: 3,
                    name: "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35Lv2"
                }, {
                    skill: "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35",
                    points: 3,
                    type: 3,
                    name: "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35Lv3"
                }, {
                    skill: "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30",
                    points: 1,
                    type: 3,
                    name: "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30Lv1"
                }, {
                    skill: "\u7832\u8853",
                    points: 1,
                    type: 3,
                    name: "\u7832\u8853Lv1"
                }, {
                    skill: "\u7832\u8853",
                    points: 2,
                    type: 3,
                    name: "\u7832\u8853Lv2"
                }, {
                    skill: "\u7832\u8853",
                    points: 3,
                    type: 3,
                    name: "\u7832\u8853Lv3"
                }, {
                    skill: "\u96c6\u4e2d",
                    points: 1,
                    type: 3,
                    name: "\u96c6\u4e2dLv1"
                }, {
                    skill: "\u96c6\u4e2d",
                    points: 2,
                    type: 3,
                    name: "\u96c6\u4e2dLv2"
                }, {
                    skill: "\u96c6\u4e2d",
                    points: 3,
                    type: 3,
                    name: "\u96c6\u4e2dLv3"
                }, {
                    skill: "\u7279\u6b8a\u5c04\u6483\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u7279\u6b8a\u5c04\u6483\u5f37\u5316Lv1"
                }, {
                    skill: "\u7279\u6b8a\u5c04\u6483\u5f37\u5316",
                    points: 2,
                    type: 3,
                    name: "\u7279\u6b8a\u5c04\u6483\u5f37\u5316Lv2"
                }, {
                    skill: "\u5f37\u5316\u6301\u7d9a",
                    points: 1,
                    type: 3,
                    name: "\u5f37\u5316\u6301\u7d9aLv1"
                }, {
                    skill: "\u5f37\u5316\u6301\u7d9a",
                    points: 2,
                    type: 3,
                    name: "\u5f37\u5316\u6301\u7d9aLv2"
                }, {
                    skill: "\u5f37\u5316\u6301\u7d9a",
                    points: 3,
                    type: 3,
                    name: "\u5f37\u5316\u6301\u7d9aLv3"
                }, {
                    skill: "\u6563\u5f3e\u30fb\u525b\u5c04\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u6563\u5f3e\u30fb\u525b\u5c04\u5f37\u5316Lv1"
                }, {
                    skill: "\u901a\u5e38\u5f3e\u30fb\u901a\u5e38\u77e2\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u901a\u5e38\u5f3e\u30fb\u901a\u5e38\u77e2\u5f37\u5316Lv1"
                }, {
                    skill: "\u8cab\u901a\u5f3e\u30fb\u7adc\u306e\u4e00\u77e2\u5f37\u5316",
                    points: 1,
                    type: 3,
                    name: "\u8cab\u901a\u5f3e\u30fb\u7adc\u306e\u4e00\u77e2\u5f37\u5316Lv1"
                }
            ]
        }, {
            genre: "\u30b7\u30ea\u30fc\u30ba\u30b9\u30ad\u30eb",
            skills: [{
                    skill: "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7",
                    points: 2,
                    type: 3,
                    name: "\u596e\u8d77"
                }, {
                    skill: "\u86ee\u984e\u7adc\u306e\u95d8\u5fd7",
                    points: 4,
                    type: 3,
                    name: "\u30b9\u30bf\u30df\u30ca\u4e0a\u9650\u7a81\u7834(\u86ee\u984e)"
                }, {
                    skill: "\u89d2\u7adc\u306e\u5965\u7fa9",
                    points: 2,
                    type: 3,
                    name: "\u920d\u5668\u4f7f\u3044"
                }, {
                    skill: "\u89d2\u7adc\u306e\u5965\u7fa9",
                    points: 4,
                    type: 3,
                    name: "\u7121\u5c5e\u6027\u5f37\u5316"
                }, {
                    skill: "\u706b\u7adc\u306e\u5965\u7fa9",
                    points: 2,
                    type: 3,
                    name: "\u4f1a\u5fc3\u6483\u3010\u5c5e\u6027\u3011"
                }, {
                    skill: "\u706b\u7adc\u306e\u5965\u7fa9",
                    points: 4,
                    type: 3,
                    name: "\u5fc3\u773c\uff0f\u5f3e\u5c0e\u5f37\u5316(\u706b\u7adc)"
                }, {
                    skill: "\u685c\u706b\u7adc\u306e\u5965\u7fa9",
                    points: 3,
                    type: 3,
                    name: "\u6bd2\u30c0\u30e1\u30fc\u30b8\u5f37\u5316"
                }, {
                    skill: "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5",
                    points: 2,
                    type: 3,
                    name: "\u5e78\u904b"
                }, {
                    skill: "\u98a8\u6f02\u7adc\u306e\u6069\u5bf5",
                    points: 4,
                    type: 3,
                    name: "\u5f13\u6e9c\u3081\u6bb5\u968e\u89e3\u653e"
                }, {
                    skill: "\u60e8\u722a\u7adc\u306e\u5965\u7fa9",
                    points: 2,
                    type: 3,
                    name: "\u629c\u5200\u8853\u3010\u529b\u3011"
                }, {
                    skill: "\u60e8\u722a\u7adc\u306e\u5965\u7fa9",
                    points: 4,
                    type: 3,
                    name: "\u525b\u5203\u7814\u78e8"
                }, {
                    skill: "\u7206\u939a\u7adc\u306e\u5b88\u8b77",
                    points: 3,
                    type: 3,
                    name: "\u30ac\u30fc\u30c9\u5f37\u5316"
                }, {
                    skill: "\u7194\u5c71\u9f8d\u306e\u5965\u7fa9",
                    points: 3,
                    type: 3,
                    name: "\u4f1a\u5fc3\u6483\u3010\u7279\u6b8a\u3011"
                }, {
                    skill: "\u6ec5\u5c3d\u9f8d\u306e\u98e2\u9913",
                    points: 3,
                    type: 3,
                    name: "\u52a0\u901f\u518d\u751f"
                }, {
                    skill: "\u92fc\u9f8d\u306e\u98db\u7fd4",
                    points: 3,
                    type: 3,
                    name: "\u98a8\u5727\u5b8c\u5168\u7121\u52b9"
                }, {
                    skill: "\u708e\u738b\u9f8d\u306e\u6b66\u6280",
                    points: 3,
                    type: 3,
                    name: "\u9054\u4eba\u82b8(\u708e\u738b\u9f8d)"
                }, {
                    skill: "\u5c4d\u5957\u9f8d\u306e\u547d\u8108",
                    points: 3,
                    type: 3,
                    name: "\u8d85\u56de\u5fa9\u529b"
                }, {
                    skill: "\u7206\u9c57\u7adc\u306e\u5b88\u8b77",
                    points: 3,
                    type: 3,
                    name: "\u6839\u6027"
                }, {
                    skill: "\u5e7b\u7363\u306e\u6069\u5bf5",
                    points: 3,
                    type: 3,
                    name: "\u6355\u7372\u540d\u4eba"
                },
                {
                    skill: "\u51a5\u706f\u9f8d\u306e\u795e\u79d8",
                    points: 3,
                    type: 3,
                    name: "\u696d\u7269\uff0f\u5f3e\u4e38\u7bc0\u7d04"
                }, {
                    skill: "\u30ae\u30eb\u30c9\u306e\u5c0e\u304d",
                    points: 4,
                    type: 3,
                    name: "\u5f37\u904b"
                }, {
                    skill: "\u8abf\u67fb\u56e3\u306e\u5c0e\u304d",
                    points: 4,
                    type: 3,
                    name: "\u5265\u304e\u53d6\u308a\u540d\u4eba"
                }, {
                    skill: "\u708e\u5983\u9f8d\u306e\u6069\u5bf5",
                    points: 2,
                    type: 3,
                    name: "\u30b9\u30bf\u30df\u30ca\u4e0a\u9650\u7a81\u7834(\u708e\u5983\u9f8d)"
                }, {
                    skill: "\u708e\u5983\u9f8d\u306e\u6069\u5bf5",
                    points: 4,
                    type: 3,
                    name: "\u5fc3\u773c\uff0f\u5f3e\u5c0e\u5f37\u5316(\u708e\u5983\u9f8d)"
                }, {
                    skill: "\u7adc\u9a0e\u58eb\u306e\u8a3c",
                    points: 2,
                    type: 3,
                    name: "\u98db\u71d5\u3010\u5c5e\u6027\u3011"
                }, {
                    skill: "\u7adc\u9a0e\u58eb\u306e\u8a3c",
                    points: 4,
                    type: 3,
                    name: "\u9054\u4eba\u82b8(\u7adc\u9a0e\u58eb)"
                }
            ]
        }, {
            genre: "\u6c4e\u7528\u30b9\u30ed\u30c3\u30c8\u30b9\u30ad\u30eb",
            skills: [{
                    skill: "LV1\u30b9\u30ed\u30c3\u30c8",
                    points: 1,
                    type: 3,
                    name: "LV1\u30b9\u30ed\u30c3\u30c8Lv1"
                }, {
                    skill: "LV1\u30b9\u30ed\u30c3\u30c8",
                    points: 2,
                    type: 3,
                    name: "LV1\u30b9\u30ed\u30c3\u30c8Lv2"
                },
                {
                    skill: "LV1\u30b9\u30ed\u30c3\u30c8",
                    points: 3,
                    type: 3,
                    name: "LV1\u30b9\u30ed\u30c3\u30c8Lv3"
                }, {
                    skill: "LV1\u30b9\u30ed\u30c3\u30c8",
                    points: 4,
                    type: 3,
                    name: "LV1\u30b9\u30ed\u30c3\u30c8Lv4"
                }, {
                    skill: "LV1\u30b9\u30ed\u30c3\u30c8",
                    points: 5,
                    type: 3,
                    name: "LV1\u30b9\u30ed\u30c3\u30c8Lv5"
                }, {
                    skill: "LV1\u30b9\u30ed\u30c3\u30c8",
                    points: 6,
                    type: 3,
                    name: "LV1\u30b9\u30ed\u30c3\u30c8Lv6"
                }, {
                    skill: "LV1\u30b9\u30ed\u30c3\u30c8",
                    points: 7,
                    type: 3,
                    name: "LV1\u30b9\u30ed\u30c3\u30c8Lv7"
                }, {
                    skill: "LV2\u30b9\u30ed\u30c3\u30c8",
                    points: 1,
                    type: 3,
                    name: "LV2\u30b9\u30ed\u30c3\u30c8Lv1"
                }, {
                    skill: "LV2\u30b9\u30ed\u30c3\u30c8",
                    points: 2,
                    type: 3,
                    name: "LV2\u30b9\u30ed\u30c3\u30c8Lv2"
                }, {
                    skill: "LV2\u30b9\u30ed\u30c3\u30c8",
                    points: 3,
                    type: 3,
                    name: "LV2\u30b9\u30ed\u30c3\u30c8Lv3"
                }, {
                    skill: "LV2\u30b9\u30ed\u30c3\u30c8",
                    points: 4,
                    type: 3,
                    name: "LV2\u30b9\u30ed\u30c3\u30c8Lv4"
                }, {
                    skill: "LV2\u30b9\u30ed\u30c3\u30c8",
                    points: 5,
                    type: 3,
                    name: "LV2\u30b9\u30ed\u30c3\u30c8Lv5"
                }, {
                    skill: "LV2\u30b9\u30ed\u30c3\u30c8",
                    points: 6,
                    type: 3,
                    name: "LV2\u30b9\u30ed\u30c3\u30c8Lv6"
                },
                {
                    skill: "LV2\u30b9\u30ed\u30c3\u30c8",
                    points: 7,
                    type: 3,
                    name: "LV2\u30b9\u30ed\u30c3\u30c8Lv7"
                }, {
                    skill: "LV3\u30b9\u30ed\u30c3\u30c8",
                    points: 1,
                    type: 3,
                    name: "LV3\u30b9\u30ed\u30c3\u30c8Lv1"
                }, {
                    skill: "LV3\u30b9\u30ed\u30c3\u30c8",
                    points: 2,
                    type: 3,
                    name: "LV3\u30b9\u30ed\u30c3\u30c8Lv2"
                }, {
                    skill: "LV3\u30b9\u30ed\u30c3\u30c8",
                    points: 3,
                    type: 3,
                    name: "LV3\u30b9\u30ed\u30c3\u30c8Lv3"
                }, {
                    skill: "LV3\u30b9\u30ed\u30c3\u30c8",
                    points: 4,
                    type: 3,
                    name: "LV3\u30b9\u30ed\u30c3\u30c8Lv4"
                }, {
                    skill: "LV3\u30b9\u30ed\u30c3\u30c8",
                    points: 5,
                    type: 3,
                    name: "LV3\u30b9\u30ed\u30c3\u30c8Lv5"
                }, {
                    skill: "LV3\u30b9\u30ed\u30c3\u30c8",
                    points: 6,
                    type: 3,
                    name: "LV3\u30b9\u30ed\u30c3\u30c8Lv6"
                }, {
                    skill: "LV3\u30b9\u30ed\u30c3\u30c8",
                    points: 7,
                    type: 3,
                    name: "LV3\u30b9\u30ed\u30c3\u30c8Lv7"
                }
            ]
        }
    ];
    k.M = [{
            skills: {
                "\u8033\u6813": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9632\u97f3\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u6bd2\u30d3\u30f3\u8ffd\u52a0": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6bd2\u74f6\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u9ebb\u75fa\u30d3\u30f3\u8ffd\u52a0": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u75fa\u74f6\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u7761\u7720\u30d3\u30f3\u8ffd\u52a0": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7720\u74f6\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u7206\u7834\u30d3\u30f3\u8ffd\u52a0": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7206\u74f6\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u5c5e\u6027\u89e3\u653e\uff0f\u88c5\u586b\u62e1\u5f35": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u89e3\u653e\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u5320": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5320\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u3072\u308b\u307f\u8efd\u6e1b": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u885d\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u901a\u5e38\u5f3e\u30fb\u901a\u5e38\u77e2\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5f37\u5f3e\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u8cab\u901a\u5f3e\u30fb\u7adc\u306e\u4e00\u77e2\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8cab\u901a\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u6563\u5f3e\u30fb\u525b\u5c04\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6563\u5f3e\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u9f8d\u5c01\u529b\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9f8d\u5c01\u73e0\u3010\uff13\u3011",
            level: 3
        }, {
            skills: {
                "\u98a8\u5727\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9632\u98a8\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u8010\u9707": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u9707\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u8d85\u4f1a\u5fc3": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8d85\u5fc3\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u5f31\u70b9\u7279\u52b9": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u75db\u6483\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u96c6\u4e2d": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u77ed\u7e2e\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u629c\u5200\u8853\u3010\u6280\u3011": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u629c\u5200\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u7834\u58ca\u738b": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u91cd\u6483\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\uff2b\uff2f\u8853": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\uff2b\uff2f\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u98db\u71d5": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u98db\u71d5\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u529b\u306e\u89e3\u653e": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5168\u958b\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u6311\u6226\u8005": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6311\u6226\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u30d5\u30eb\u30c1\u30e3\u30fc\u30b8": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7121\u50b7\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u706b\u4e8b\u5834\u529b": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5e95\u529b\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u9006\u6068\u307f": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9006\u4e0a\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u7832\u5f3e\u88c5\u586b\u6570\uff35\uff30": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5897\u5f3e\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u30e9\u30f3\u30ca\u30fc": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5f37\u8d70\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u4f53\u8853": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u4f53\u8853\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u6025\u901f\u56de\u5fa9": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u65e9\u6c17\u73e0\u3010\uff12\u3011",
            level: 2
        },
        {
            skills: {
                "\u56de\u907f\u6027\u80fd": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u56de\u907f\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u56de\u907f\u8ddd\u96e2\uff35\uff30": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8df3\u8e8d\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u6e3e\u8eab": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6e3e\u8eab\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u6ed1\u8d70\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6ed1\u8d70\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u5f37\u5316\u6301\u7d9a": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6602\u63da\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u5f13\u6e9c\u3081\u6bb5\u968e\u89e3\u653e": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5f37\u5f13\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u525b\u5203\u7814\u78e8": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u525b\u5203\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u5fc3\u773c\uff0f\u5f3e\u5c0e\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5fc3\u773c\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u30ac\u30fc\u30c9\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5f37\u58c1\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u7121\u5c5e\u6027\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7121\u6483\u73e0\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "\u6bd2\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u6bd2\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u9ebb\u75fa\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u9ebb\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7761\u7720\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u7720\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6c17\u7d76\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u7d76\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7206\u7834\u3084\u3089\u308c\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u7206\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u88c2\u50b7\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u88c2\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u9632\u5fa1\u529b\uff24\uff2f\uff37\uff2e\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u9632\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u653b\u6483": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u653b\u6483\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u9632\u5fa1": 1
            },
            slots: 1,
            period: {
                gathering: 11,
                village: 99
            },
            name: "\u9632\u5fa1\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u4f53\u529b\u5897\u5f37": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u4f53\u529b\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u56de\u5fa9\u901f\u5ea6": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u65e9\u5fa9\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u706b\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 11,
                village: 99
            },
            name: "\u8010\u706b\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6c34\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 11,
                village: 99
            },
            name: "\u8010\u6c34\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6c37\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u6c37\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u96f7\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u96f7\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u9f8d\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u9f8d\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u5c5e\u6027\u3084\u3089\u308c\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u5c5e\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u706b\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 11,
                village: 99
            },
            name: "\u706b\u708e\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6c34\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 11,
                village: 99
            },
            name: "\u6d41\u6c34\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6c37\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6c37\u7d50\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u96f7\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u96f7\u5149\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u9f8d\u5c5e\u6027\u653b\u6483\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7834\u9f8d\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6bd2\u5c5e\u6027\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6bd2\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u9ebb\u75fa\u5c5e\u6027\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9ebb\u75fa\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7761\u7720\u5c5e\u6027\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7761\u7720\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7206\u7834\u5c5e\u6027\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7206\u7834\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u898b\u5207\u308a": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9054\u4eba\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u30b9\u30bf\u30df\u30ca\u596a\u53d6": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u596a\u6c17\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u4e0d\u5c48": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9006\u5883\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7b1b\u5439\u304d\u540d\u4eba": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9f13\u7b1b\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7279\u6b8a\u5c04\u6483\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7279\u5c04\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7832\u8853": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7832\u8853\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7832\u6483\u624b": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7832\u624b\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u8179\u6e1b\u308a\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7121\u98df\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u30ac\u30fc\u30c9\u6027\u80fd": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u9244\u58c1\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7d0d\u5200\u8853": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u901f\u7d0d\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u5e83\u57df\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u53cb\u611b\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528\u5f37\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6301\u7d9a\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6e80\u8db3\u611f": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7bc0\u98df\u73e0\u3010\uff11\u3011",
            level: 1
        },
        {
            skills: {
                "\u65e9\u98df\u3044": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u65e9\u98df\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7825\u77f3\u4f7f\u7528\u9ad8\u901f\u5316": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7814\u78e8\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u30dc\u30de\u30fc": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7206\u5e2b\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u30ad\u30ce\u30b3\u5927\u597d\u304d": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8338\u597d\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7cbe\u970a\u306e\u52a0\u8b77": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u52a0\u8b77\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u30aa\u30c8\u30e2\u3078\u306e\u91c7\u914d": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u91c7\u914d\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u690d\u751f\u5b66": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u690d\u5b66\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u5730\u8cea\u5b66": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5730\u5b66\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u30b9\u30ea\u30f3\u30ac\u30fc\u88c5\u586b\u6570\uff35\uff30": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6295\u77f3\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6f5c\u4f0f": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6f5c\u4f0f\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7dbf\u80de\u5b50\u8349\u306e\u77e5\u8b58": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7159\u5fa9\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6c34\u5834\u9069\u5fdc": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6cbc\u6e21\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6606\u866b\u6a19\u672c\u306e\u9054\u4eba": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6a19\u672c\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u8ffd\u8de1\u306e\u9054\u4eba": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u55c5\u899a\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u5a01\u5687": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u5a01\u5687\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u4f53\u529b\u56de\u5fa9\u91cf\uff35\uff30": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6cbb\u7652\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6b7b\u4e2d\u306b\u6d3b": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u7aae\u5730\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u6574\u5099": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u6574\u5099\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "\u7634\u6c17\u8010\u6027": 1
            },
            slots: 1,
            period: {
                gathering: 13,
                village: 99
            },
            name: "\u8010\u7634\u73e0\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "LV1\u30b9\u30ed\u30c3\u30c8": 1
            },
            slots: 1,
            period: {
                gathering: 1,
                village: 99
            },
            name: "\u88c5\u98fe\u54c1\u3010\uff11\u3011",
            level: 1
        }, {
            skills: {
                "LV2\u30b9\u30ed\u30c3\u30c8": 1
            },
            slots: 1,
            period: {
                gathering: 1,
                village: 99
            },
            name: "\u88c5\u98fe\u54c1\u3010\uff12\u3011",
            level: 2
        }, {
            skills: {
                "LV3\u30b9\u30ed\u30c3\u30c8": 1
            },
            slots: 1,
            period: {
                gathering: 1,
                village: 99
            },
            name: "\u88c5\u98fe\u54c1\u3010\uff13\u3011",
            level: 3
        }
    ];
    k.ta = "\u80f4\u7cfb\u7d71\u500d\u52a0";
    k.Oa = function(a, b) {
        var c = [0, 0, 0, 0, 0, 0];
        D(pa, function(a, e, f) {
            b(a, e, f) && (c[a.part] = Math.max(a.maxdef, c[a.part]))
        });
        return c
    };
    k.Fa = function() {
        fc = this.Ca();
        R = pa;
        td(this.M);
        Uc(this.i, this.Ha)
    };
    k.Ra = function() {
        return []
    };
    k.Ma = function() {
        var a = V( of );
        return Ka(a, function(a) {
            return parseInt(a, 10)
        })
    };
    k.Ca = function() {
        for (var a = [], b = 3; 0 <= b; b--)
            for (var c = b; 0 <= c; c--)
                for (var d = c; 0 <= d; d--) a.push(lf(b, c, d));
        a.reverse();
        return a
    };
    Hc.xa();

    function Ef(a, b, c, d, e, f, g, h, m, q, t) {
        this.na = t && !(0 < f || -50 < Math.max.apply(Math, g));
        Ed.call(this, a, b, c, d, 99, e, h, q);
        this.za = f || 0;
        this.da = g;
        this.la = this.H.Ma();
        this.ma = m
    }
    A(Ef, Ed);
    k = Ef.prototype;
    k.Ka = !0;
    k.Na = function() {
        var a = F(V(Y), mc);
        return Aa(a, [this.ha])
    };
    k.Ba = function(a, b, c, d) {
        return new Gf(a, d, b, c)
    };
    k.Ga = function() {
        Ef.ra.Ga.call(this);
        this.na && (this.c = E(this.c, function(a, b, c) {
            for (var d = 0; d < b; d++)
                if (Fc(this.K, a, c[d])) return !1;
            return !0
        }, this))
    };
    k.La = function(a) {
        return new Id(Jd(a), this.la)
    };
    k.filter = function(a, b, c) {
        return Ef.ra.filter.call(this, a, b, c) ? ua(this.ma, function(b) {
            return !(b in a.skills)
        }) : !1
    };
    y("renderPage", function() {
        var a = Wb(),
            b = a.skills ? a.skills.split(",") : [],
            c = Kc(),
            c = F(c, function(a) {
                var b = [];
                D(a.i, function(a) {
                    var c = H(b, function(b) {
                        return b.D == a.D
                    });
                    c || (c = {
                        D: a.D,
                        Qa: []
                    }, b.push(c));
                    c.Qa.push(a)
                });
                return {
                    aa: a.aa,
                    i: b
                }
            }),
            d = Q("ui"),
            e;
        try {
            U("testtesttest", "testtesttest"), fd.remove("testtesttest"), e = !0
        } catch (f) {
            e = !1
        }
        d.innerHTML = pb({
            lb: !e,
            nb: fc,
            i: c
        });
        "s" in a || (a.s = V(nf));
        K(Zb, function(b, c) {
            if (b[0] in a) {
                var d = Q(c);
                "checkbox" == d.type ? d.checked = "true" == a[b[0]] : d.value = a[b[0]]
            }
        });
        c = document.querySelectorAll("select.skillitem option");
        D(c, function(a) {
            I(b, a.value) && (a.selected = !0)
        });
        Bf();
        Q("searchbutton").onclick = function() {
            var a = Yb();
            U(nf.a, a.s);
            var b = xf(),
                c = yf(),
                d = zf();
            Xb(b, a);
            var e = x(),
                f = Df(c, d, a, !1);
            Fd(f) ? (Q("searchbutton").disabled = !0, sf(0), Rd(f, function(c, d) {
                if (100 <= c) {
                    var m = Q("results");
                    Fa(d, Cd);
                    rf = d;
                    var q = 0 < a.d || -50 < a.rf || -50 < a.rw || -50 < a.rt || -50 < a.ri || -50 < a.rd;
                    m.innerHTML = wf(b, d, (x() - e) / 1E3, q, f.ca);
                    Q("searchbutton").disabled = !1
                } else sf(c);
                return !1
            })) : window.alert("\u88c5\u5099\u3067\u304d\u306a\u3044\u9632\u5177\u304c\u56fa\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059")
        };
        Q("extraskillsearchbutton").onclick = function() {
            function a(z) {
                z >= f.length ? (Q("extraskillsearchbutton").disabled = !1, Q("results").innerHTML = Eb({
                    bb: c,
                    time: (x() - nb) / 1E3,
                    i: Ma
                })) : Rd(Df(Aa(d, [f[z].name]), e, b, !0), function(b, c) {
                    100 > b || (sf((z + 1) / f.length * 100), 0 < c.length && Ma.push(f[z].name), setTimeout(function() {
                        a(z + 1)
                    }, 0))
                })
            }
            var b = Yb();
            b.l = 1;
            var c = xf(),
                d = yf(),
                e = zf(),
                f = Wc(),
                w = F(d, Vc),
                f = E(f, function(a) {
                    return I(d, a.name) || 0 > a.h ? !1 : !H(w, function(b) {
                        return b.D == a.D && b.h > a.h
                    })
                }),
                Ma = [];
            Q("extraskillsearchbutton").disabled = !0;
            sf(0);
            var nb = x();
            a(0)
        };
        D(Pa(vf), function(a) {
            document.querySelector("#tab-" + a + " a").onclick = v(uf, a)
        });
        Q("resetbutton").onclick = function() {
            var a = document.querySelectorAll("select.skillitem");
            D(a, function(a) {
                a.value = ""
            });
            Bf()
        };
        Af()
    });
    y("renderSavedResultPage", function(a) {
        a = Ff(a);
        Q("ui").innerHTML = zb({
            f: a.f,
            C: a.C,
            N: a.N,
            G: !1,
            Xa: !0
        }) + "<div id=details class=saved-result-element></div>";
        Q("details").innerHTML = Cf(a)
    });
    y("renderInspectPage", function() {
        var a = Q("ui"),
            b;
        b = window.localStorage.getItem("myset") || "";
        b = "\u30de\u30a4\u30bb\u30c3\u30c8\u30c7\u30fc\u30bf(\u30c7\u30d0\u30c3\u30b0\u7528)<pre>" + P(b) + "</pre>";
        a.innerHTML = b
    });
    y("toggleResult", function(a, b) {
        var c = Q(a + "-details-" + b),
            d = c.style.display;
        c.style.display = d ? "" : "none";
        if ("none" == d) {
            var c = c.getElementsByTagName("td")[0],
                e;
            "myset" == a ? (d = Ff(V(mf)[b]), e = yb(d), e += Cf(d)) : (d = rf[b], e = yb(d), d = e += Cf(d), e = "<div><button id='resultitem-myset-button-" + P(b) + "' onclick='onAddMyset(" + P(b) + ")'>\u30de\u30a4\u30bb\u30c3\u30c8\u306b\u8ffd\u52a0</button></div>", e = d + e);
            c.innerHTML = e
        }
    });
    y("onAddMyset", function(a) {
        var b = rf[a],
            c = {
                data: JSON.stringify(Dd(b)),
                skills: JSON.stringify(zd(b))
            },
            d = Q("resultitem-myset-button-" + a);
        d.disabled = 1;
        ff("/sim/register", c, function(a) {
            var c = d.parentNode,
                g;
            a = a.target;
            try {
                g = a.a ? a.a.responseText : ""
            } catch (h) {
                g = ""
            }
            b.ba = g;
            b.ia = "__" + Math.random().toString(36);
            a = V(mf);
            a.push(Dd(b));
            for (var m = 0; m < a.length; m++) a[m].myLocalSetId || (a[m].myLocalSetId = "__" + Math.random().toString(36));
            U(mf.a, a);
            g = "\u30de\u30a4\u30bb\u30c3\u30c8\u306b\u8ffd\u52a0\u3057\u307e\u3057\u305f<br>" +
                xb({
                    id: g
                });
            c.innerHTML = g;
            a = F(a, Ff);
            tf(a)
        })
    });
    y("onRemoveMySetClick", function(a) {
        var b = V(mf);
        ya(b, function(b) {
            return b.mySetId == a
        }) || ya(b, function(b) {
            return b.myLocalSetId == a
        });
        U(mf.a, b);
        b = F(b, Ff);
        tf(b)
    });
    y("onPinEquipment", function(a) {
        var b = a.getAttribute("equip");
        a = parseInt(a.getAttribute("part"), 10);
        var c = V(Y);
        c[a] = c[a] == b ? null : b;
        U(Y.a, c);
        Af();
        return !1
    });
    y("onPinEquipmentChange", function(a) {
        var b = a.value;
        a = parseInt(a.getAttribute("part"), 10);
        var c = V(Y);
        c[a] = b || null;
        U(Y.a, c);
        Af();
        return !1
    });
    y("onPinEquipmentRemove", function(a) {
        a = parseInt(a.getAttribute("part"), 10);
        var b = V(Y);
        b[a] = null;
        U(Y.a, b);
        Af();
        return !1
    });
    y("onExcludeEquipment", function(a) {
        var b = a.getAttribute("equip");
        a = parseInt(a.getAttribute("part"), 10);
        var c = V(Ud);
        I(c[a], b) ? xa(c[a], b) : c[a].push(b);
        U(Ud.a, c);
        Af();
        return !1
    });
    y("onChangeSkill", Bf);
    y("onExtraSkillClick", function(a) {
        var b = H(document.querySelectorAll("select.skillitem option"), function(b) {
            return b.innerText == a && b.value
        });
        b || alert("no element found for " + a);
        b.selected = !0;
        Bf();
        return !1
    });
    y("onDecoCountChange", function(a, b) {
        var c = V( of ) || {};
        c[a] = b;
        U( of .a, c)
    });
    y("setAllDecoCount", function(a) {
        var b = V( of ) || {},
            c = document.querySelectorAll(".deco-setting select");
        D(c, function(c) {
            var e = c.getElementsByTagName("option"),
                f = H(e, function(b) {
                    return b.value == a
                }),
                g = a;
            f || (g = parseInt(e[e.length - 1].value, 10));
            c.value = g;
            b[c.getAttribute("deconame")] = g
        });
        U( of .a, b)
    });
    y("onTabClicked", uf);
    y("importDecos", function() {
        try {
            var a = Q("decoimportexport").value;
            if (a) {
                var b = JSON.parse(a);
                ka(b) && (b = Ka(b, function(a) {
                    return parseInt(a, 10)
                }), U( of .a, b), Af())
            }
        } catch (c) {
            alert(c)
        }
    });
    y("exportDecos", function() {
        var a = V( of );
        Q("decoimportexport").value = JSON.stringify(a)
    });
    tc = !1;
})()