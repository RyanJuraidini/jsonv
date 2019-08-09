(function(j, q, h) {
    var A = !+"\v1", n = A ? "\r" : "\n", E = function() {
        return null;
    }, p = 0, t = "plaintext", a = "sunlight-", D, s, b = {
        tabWidth: 4,
        classPrefix: a,
        showWhitespace: false,
        maxHeight: false
    }, m = {}, r = {}, c = {
        beforeHighlightNode: [],
        beforeHighlight: [],
        beforeTokenize: [],
        afterTokenize: [],
        beforeAnalyze: [],
        afterAnalyze: [],
        afterHighlight: [],
        afterHighlightNode: []
    };
    D = (function() {
        function F(G) {
            return function(I) {
                var H = q.createElement("span");
                H.className = I.options.classPrefix + G;
                H.appendChild(I.createTextNode(I.tokens[I.index]));
                return I.addNode(H) || true;
            }
            ;
        }
        return {
            handleToken: function(G) {
                return F(G.tokens[G.index].name)(G);
            },
            handle_default: function(G) {
                return G.addNode(G.createTextNode(G.tokens[G.index]));
            },
            handle_ident: function(G) {
                var H = function(J, K) {
                    var I;
                    J = J || [];
                    for (I = 0; I < J.length; I++) {
                        if (typeof (J[I]) === "function") {
                            if (J[I](G)) {
                                return F("named-ident")(G);
                            }
                        } else {
                            if (K && K(J[I])(G.tokens)) {
                                return F("named-ident")(G);
                            }
                        }
                    }
                    return false;
                };
                return H(G.language.namedIdentRules.custom) || H(G.language.namedIdentRules.follows, function(I) {
                    return k(G.index - 1, -1, I, G.language.caseInsensitive);
                }) || H(G.language.namedIdentRules.precedes, function(I) {
                    return k(G.index + 1, 1, I, G.language.caseInsensitive);
                }) || H(G.language.namedIdentRules.between, function(I) {
                    return f(G.index, I.opener, I.closer, G.language.caseInsensitive);
                }) || F("ident")(G);
            }
        };
    }());
    r = {
        analyzer: o(D),
        customTokens: [],
        namedIdentRules: {},
        punctuation: /[^\w\s]/,
        numberParser: w,
        caseInsensitive: false,
        doNotParse: /\s/,
        contextItems: {},
        embeddedLanguages: {}
    };
    s = (function() {
        var F = null;
        if (q.defaultView && q.defaultView.getComputedStyle) {
            F = q.defaultView.getComputedStyle;
        } else {
            F = function(H, G) {
                return H.currentStyle || {};
            }
            ;
        }
        return function(G, H) {
            return F(G, null)[H];
        }
        ;
    }());
    function u(K) {
        var I = 0, N = 1, G = 1, F, H = h, M, L;
        K = K.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        F = K.length;
        M = F > 0 ? K.charAt(0) : H;
        function J(O) {
            var P;
            if (O === 0) {
                return "";
            }
            O = O || 1;
            P = K.substring(I + 1, I + O + 1);
            return P === "" ? H : P;
        }
        return {
            toString: function() {
                return "length: " + F + ", index: " + I + ", line: " + N + ", column: " + G + ", current: [" + M + "]";
            },
            peek: function(O) {
                return J(O);
            },
            substring: function() {
                return K.substring(I);
            },
            peekSubstring: function() {
                return K.substring(I + 1);
            },
            read: function(P) {
                var R = J(P), Q, O;
                if (R === "") {
                    return R;
                }
                if (R !== H) {
                    I += R.length;
                    G += R.length;
                    if (L) {
                        N++;
                        G = 1;
                        L = false;
                    }
                    Q = R.substring(0, R.length - 1).replace(/[^\n]/g, "").length;
                    if (Q > 0) {
                        N += Q;
                        G = 1;
                    }
                    O = l(R);
                    if (O === "\n") {
                        L = true;
                    }
                    M = O;
                } else {
                    I = F;
                    M = H;
                }
                return R;
            },
            text: function() {
                return K;
            },
            getLine: function() {
                return N;
            },
            getColumn: function() {
                return G;
            },
            isEof: function() {
                return I >= F;
            },
            isSol: function() {
                return G === 1;
            },
            isSolWs: function() {
                var O = I, P;
                if (G === 1) {
                    return true;
                }
                while ((P = K.charAt(--O)) !== "") {
                    if (P === "\n") {
                        return true;
                    }
                    if (!/\s/.test(P)) {
                        return false;
                    }
                }
                return true;
            },
            isEol: function() {
                return L;
            },
            EOF: H,
            current: function() {
                return M;
            }
        };
    }
    function o(H) {
        function G() {}
        G.prototype = H;
        return new G();
    }
    function y(H, G) {
        var F;
        for (F = 0; F < G.length; F++) {
            H.appendChild(G[F]);
        }
    }
    function l(F) {
        return F.charAt ? F.charAt(F.length - 1) : F[F.length - 1];
    }
    function i(G, I, F) {
        var H;
        if (G.indexOf && !F) {
            return G.indexOf(I) >= 0;
        }
        for (H = 0; H < G.length; H++) {
            if (G[H] === I) {
                return true;
            }
            if (F && typeof (G[H]) === "string" && typeof (I) === "string" && G[H].toUpperCase() === I.toUpperCase()) {
                return true;
            }
        }
        return false;
    }
    function g(F, G) {
        var H;
        if (!G) {
            return F;
        }
        for (H in G) {
            F[H] = G[H];
        }
        return F;
    }
    function x(F) {
        return g({}, F);
    }
    function C(F) {
        return F.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function k(I, H, G, F) {
        G = G.slice(0);
        return function(M) {
            var L = I, J, K, N;
            if (H === 1) {
                G.reverse();
            }
            for (J = 0; J < G.length; J++) {
                N = M[L + (J * H)];
                K = G[G.length - 1 - J];
                if (N === h) {
                    if (K.optional !== h && K.optional) {
                        L -= H;
                    } else {
                        return false;
                    }
                } else {
                    if (N.name === K.token && (K.values === h || i(K.values, N.value, F))) {
                        continue;
                    } else {
                        if (K.optional !== h && K.optional) {
                            L -= H;
                        } else {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        ;
    }
    function f(H, G, I, F) {
        return function(L) {
            var J = H, K, M = false;
            while ((K = L[--J]) !== h) {
                if (K.name === I.token && i(I.values, K.value)) {
                    if (K.name === G.token && i(G.values, K.value, F)) {
                        M = true;
                        break;
                    }
                    return false;
                }
                if (K.name === G.token && i(G.values, K.value, F)) {
                    M = true;
                    break;
                }
            }
            if (!M) {
                return false;
            }
            J = H;
            while ((K = L[++J]) !== h) {
                if (K.name === G.token && i(G.values, K.value, F)) {
                    if (K.name === I.token && i(I.values, K.value, F)) {
                        M = true;
                        break;
                    }
                    return false;
                }
                if (K.name === I.token && i(I.values, K.value, F)) {
                    M = true;
                    break;
                }
            }
            return M;
        }
        ;
    }
    function e(H, M, I, F) {
        var L = H.reader.current(), K, G, N, O = H.reader.getLine(), J = H.reader.getColumn();
        M = M || [];
        if (H.language.caseInsensitive) {
            L = L.toUpperCase();
        }
        if (!M[L]) {
            return null;
        }
        M = M[L];
        for (K = 0; K < M.length; K++) {
            G = M[K].value;
            N = L + H.reader.peek(G.length);
            if (G === N || M[K].regex.test(N)) {
                return H.createToken(I, H.reader.current() + H.reader[F ? "peek" : "read"](G.length - 1), O, J);
            }
        }
        return null;
    }
    function z(K, F, J, I) {
        var H = 1, G;
        J = J || 1;
        while (G = K[F + (J * H++)]) {
            if (!I(G)) {
                return G;
            }
        }
        return h;
    }
    function v(L, K, F) {
        var G = {}, H, J, I;
        for (H = 0; H < L.length; H++) {
            J = F ? L[H].toUpperCase() : L[H];
            I = J.charAt(0);
            if (!G[I]) {
                G[I] = [];
            }
            G[I].push({
                value: J,
                regex: new RegExp("^" + C(J) + K,F ? "i" : "")
            });
        }
        return G;
    }
    function w(I) {
        var L = I.reader.current(), K, G = I.reader.getLine(), J = I.reader.getColumn(), F = true, H;
        if (!/\d/.test(L)) {
            if (L !== "." || !/\d/.test(I.reader.peek())) {
                return null;
            }
            K = L + I.reader.read();
            F = false;
        } else {
            K = L;
            if (L === "0" && I.reader.peek() !== ".") {
                F = false;
            }
        }
        while ((H = I.reader.peek()) !== I.reader.EOF) {
            if (!/[A-Za-z0-9]/.test(H)) {
                if (H === "." && F && /\d$/.test(I.reader.peek(2))) {
                    K += I.reader.read();
                    F = false;
                    continue;
                }
                break;
            }
            K += I.reader.read();
        }
        return I.createToken("number", K, G, J);
    }
    function B(F, H, G) {
        var J = c[F] || [], I;
        for (I = 0; I < J.length; I++) {
            J[I].call(H, G);
        }
    }
    function d(F) {
        this.options = g(x(b), F);
    }
    d.prototype = (function() {
        var J = (function() {
            function W(Z) {
                return Z.language.identFirstLetter && Z.language.identFirstLetter.test(Z.reader.current());
            }
            function S(Z) {
                return e(Z, Z.language.keywords, "keyword");
            }
            function X(aa) {
                var ab, Z;
                if (aa.language.customTokens === h) {
                    return null;
                }
                for (ab in aa.language.customTokens) {
                    Z = e(aa, aa.language.customTokens[ab], ab);
                    if (Z !== null) {
                        return Z;
                    }
                }
                return null;
            }
            function V(Z) {
                return e(Z, Z.language.operators, "operator");
            }
            function R(Z) {
                var aa = Z.reader.current();
                if (Z.language.punctuation.test(C(aa))) {
                    return Z.createToken("punctuation", aa, Z.reader.getLine(), Z.reader.getColumn());
                }
                return null;
            }
            function Q(ab) {
                var ad, aa, Z = ab.reader.getLine(), ac = ab.reader.getColumn();
                if (!W(ab)) {
                    return null;
                }
                ad = ab.reader.current();
                while ((aa = ab.reader.peek()) !== ab.reader.EOF) {
                    if (!ab.language.identAfterFirstLetter.test(aa)) {
                        break;
                    }
                    ad += ab.reader.read();
                }
                return ab.createToken("ident", ad, Z, ac);
            }
            function Y(Z) {
                if (Z.defaultData.text === "") {
                    Z.defaultData.line = Z.reader.getLine();
                    Z.defaultData.column = Z.reader.getColumn();
                }
                Z.defaultData.text += Z.reader.current();
                return null;
            }
            function P(Z) {
                var af = Z.reader.current(), ab, aa, ae, ag, ai, ac, ad, ah;
                for (ab in Z.language.scopes) {
                    aa = Z.language.scopes[ab];
                    for (ae = 0; ae < aa.length; ae++) {
                        ag = aa[ae][0];
                        ah = af + Z.reader.peek(ag.length - 1);
                        if (ag !== ah && (!Z.language.caseInsensitive || ah.toUpperCase() !== ag.toUpperCase())) {
                            continue;
                        }
                        ai = Z.reader.getLine(),
                        ac = Z.reader.getColumn();
                        Z.reader.read(ag.length - 1);
                        ad = H(aa[ae], ab);
                        return ad(Z, ad, ah, ai, ac);
                    }
                }
                return null;
            }
            function T(Z) {
                return Z.language.numberParser(Z);
            }
            function U(ab) {
                var ac = ab.language.customParseRules, aa, Z;
                if (ac === h) {
                    return null;
                }
                for (aa = 0; aa < ac.length; aa++) {
                    Z = ac[aa](ab);
                    if (Z) {
                        return Z;
                    }
                }
                return null;
            }
            return function(Z) {
                if (Z.language.doNotParse.test(Z.reader.current())) {
                    return Y(Z);
                }
                return U(Z) || X(Z) || S(Z) || P(Z) || Q(Z) || T(Z) || V(Z) || R(Z) || Y(Z);
            }
            ;
        }());
        function H(S, T) {
            var Q = S[2] || []
              , P = S[1].length
              , U = typeof (S[1]) === "string" ? new RegExp(C(S[1])) : S[1].regex
              , R = S[3] || false;
            return function(Z, V, X, W, ab, Y) {
                var aa = false;
                X = X || "";
                Y = Y ? 1 : 0;
                function ac(af) {
                    var ad, ag = Z.reader.current(), ae;
                    for (ae = 0; ae < Q.length; ae++) {
                        ad = (af ? ag : "") + Z.reader.peek(Q[ae].length - af);
                        if (ad === Q[ae]) {
                            X += Z.reader.read(ad.length - af);
                            return true;
                        }
                    }
                    ad = (af ? ag : "") + Z.reader.peek(P - af);
                    if (U.test(ad)) {
                        aa = true;
                        return false;
                    }
                    X += af ? ag : Z.reader.read();
                    return true;
                }
                if (!Y || ac(true)) {
                    while (Z.reader.peek() !== Z.reader.EOF && ac(false)) {}
                }
                if (Y) {
                    X += Z.reader.current();
                    Z.reader.read();
                } else {
                    X += R || Z.reader.peek() === Z.reader.EOF ? "" : Z.reader.read(P);
                }
                if (!aa) {
                    Z.continuation = V;
                }
                return Z.createToken(T, X, W, ab);
            }
            ;
        }
        function L(R) {
            var Q, P;
            for (Q = 0; Q < R.language.embeddedLanguages.length; Q++) {
                if (!m[R.language.embeddedLanguages[Q].language]) {
                    continue;
                }
                P = x(R.language.embeddedLanguages[Q]);
                if (P.switchTo(R)) {
                    P.oldItems = x(R.items);
                    R.embeddedLanguageStack.push(P);
                    R.language = m[P.language];
                    R.items = g(R.items, x(R.language.contextItems));
                    break;
                }
            }
        }
        function O(P) {
            var Q = l(P.embeddedLanguageStack), R;
            if (Q && Q.switchBack(P)) {
                P.language = m[Q.parentLanguage];
                R = P.embeddedLanguageStack.pop();
                P.items = x(R.oldItems);
                R.oldItems = {};
            }
        }
        function N(T, W, U, Q) {
            var V = [], S, P, R;
            B("beforeTokenize", this, {
                code: T,
                language: W
            });
            S = {
                reader: u(T),
                language: W,
                items: x(W.contextItems),
                token: function(X) {
                    return V[X];
                },
                getAllTokens: function() {
                    return V.slice(0);
                },
                count: function() {
                    return V.length;
                },
                options: Q,
                embeddedLanguageStack: [],
                defaultData: {
                    text: "",
                    line: 1,
                    column: 1
                },
                createToken: function(Y, aa, X, Z) {
                    return {
                        name: Y,
                        line: X,
                        value: A ? aa.replace(/\n/g, "\r") : aa,
                        column: Z,
                        language: this.language.name
                    };
                }
            };
            if (U.continuation) {
                P = U.continuation;
                U.continuation = null;
                V.push(P(S, P, "", S.reader.getLine(), S.reader.getColumn(), true));
            }
            while (!S.reader.isEof()) {
                L(S);
                R = J(S);
                if (R !== null) {
                    if (S.defaultData.text !== "") {
                        V.push(S.createToken("default", S.defaultData.text, S.defaultData.line, S.defaultData.column));
                        S.defaultData.text = "";
                    }
                    if (R[0] !== h) {
                        V = V.concat(R);
                    } else {
                        V.push(R);
                    }
                }
                O(S);
                S.reader.read();
            }
            if (S.defaultData.text !== "") {
                V.push(S.createToken("default", S.defaultData.text, S.defaultData.line, S.defaultData.column));
            }
            B("afterTokenize", this, {
                code: T,
                parserContext: S
            });
            return S;
        }
        function F(T, R, Q) {
            var P = []
              , S = function() {
                var U, V;
                if (Q.showWhitespace) {
                    U = String.fromCharCode(183);
                    V = new Array(Q.tabWidth).join(String.fromCharCode(8212)) + String.fromCharCode(8594);
                } else {
                    U = String.fromCharCode(160);
                    V = new Array(Q.tabWidth + 1).join(U);
                }
                return function(Z) {
                    var aa = Z.value.split(" ").join(U), X, ab, Y, W;
                    while ((X = aa.indexOf("\t")) >= 0) {
                        ab = aa.lastIndexOf(n, X);
                        Y = ab === -1 ? X : X - ab - 1;
                        W = Q.tabWidth - (Y % Q.tabWidth);
                        aa = aa.substring(0, X) + V.substring(Q.tabWidth - W) + aa.substring(X + 1);
                    }
                    return aa;
                }
                ;
            }();
            return {
                tokens: (R.tokens || []).concat(T.getAllTokens()),
                index: R.index ? R.index + 1 : 0,
                language: null,
                getAnalyzer: E,
                options: Q,
                continuation: T.continuation,
                addNode: function(U) {
                    P.push(U);
                },
                createTextNode: function(U) {
                    return q.createTextNode(S(U));
                },
                getNodes: function() {
                    return P;
                },
                resetNodes: function() {
                    P = [];
                },
                items: T.items
            };
        }
        function K(Q, P, R) {
            var T = m[P], S;
            R = R || {};
            if (T === h) {
                T = m[t];
            }
            B("beforeHighlight", this, {
                code: Q,
                language: T,
                previousContext: R
            });
            S = F(N.call(this, Q, T, R, this.options), R, this.options);
            I.call(this, S, R.index ? R.index + 1 : 0);
            B("afterHighlight", this, {
                analyzerContext: S
            });
            return S;
        }
        function M(Q) {
            var P = q.createElement("span");
            P.className = Q.options.classPrefix + Q.language.name;
            return P;
        }
        function I(X, Y) {
            var P, W, Q, U, R, S, T, V;
            B("beforeAnalyze", this, {
                analyzerContext: X
            });
            if (X.tokens.length > 0) {
                X.language = m[X.tokens[0].language] || m[t];
                P = [];
                W = 0;
                Q = M(X);
                for (U = Y; U < X.tokens.length; U++) {
                    T = m[X.tokens[U].language] || m[t];
                    if (T.name !== X.language.name) {
                        y(Q, X.getNodes());
                        X.resetNodes();
                        P.push(Q);
                        X.language = T;
                        Q = M(X);
                    }
                    X.index = U;
                    R = X.tokens[U].name;
                    S = "handle_" + R;
                    V = X.getAnalyzer.call(X) || X.language.analyzer;
                    V[S] ? V[S](X) : V.handleToken(X);
                }
                y(Q, X.getNodes());
                P.push(Q);
                X.resetNodes();
                for (U = 0; U < P.length; U++) {
                    X.addNode(P[U]);
                }
            }
            B("afterAnalyze", this, {
                analyzerContext: X
            });
        }
        return {
            matchSunlightNode: function() {
                var P;
                return function(Q) {
                    if (!P) {
                        P = new RegExp("(?:\\s|^)" + this.options.classPrefix + "highlight-(\\S+)(?:\\s|$)");
                    }
                    return P.exec(Q.className);
                }
                ;
            }(),
            isAlreadyHighlighted: function() {
                var P;
                return function(Q) {
                    if (!P) {
                        P = new RegExp("(?:\\s|^)" + this.options.classPrefix + "highlighted(?:\\s|$)");
                    }
                    return P.test(Q.className);
                }
                ;
            }(),
            highlight: function(Q, P) {
                return K.call(this, Q, P);
            },
            highlightNode: function G(S) {
                var V, R, Y, U, Q, T, X, P, W;
                if (this.isAlreadyHighlighted(S) || (V = this.matchSunlightNode(S)) === null) {
                    return;
                }
                R = V[1];
                Y = 0;
                B("beforeHighlightNode", this, {
                    node: S
                });
                for (U = 0; U < S.childNodes.length; U++) {
                    if (S.childNodes[U].nodeType === 3) {
                        X = K.call(this, S.childNodes[U].nodeValue, R, X);
                        p++;
                        Y = Y || p;
                        Q = X.getNodes();
                        S.replaceChild(Q[0], S.childNodes[U]);
                        for (T = 1; T < Q.length; T++) {
                            S.insertBefore(Q[T], Q[T - 1].nextSibling);
                        }
                    } else {
                        if (S.childNodes[U].nodeType === 1) {
                            G.call(this, S.childNodes[U]);
                        }
                    }
                }
                S.className += " " + this.options.classPrefix + "highlighted";
                if (s(S, "display") === "block") {
                    P = q.createElement("div");
                    P.className = this.options.classPrefix + "container";
                    W = q.createElement("div");
                    W.className = this.options.classPrefix + "code-container";
                    if (this.options.maxHeight !== false) {
                        W.style.overflowY = "auto";
                        W.style.maxHeight = this.options.maxHeight + (/^\d+$/.test(this.options.maxHeight) ? "px" : "");
                    }
                    P.appendChild(W);
                    S.parentNode.insertBefore(W, S);
                    S.parentNode.removeChild(S);
                    W.appendChild(S);
                    W.parentNode.insertBefore(P, W);
                    W.parentNode.removeChild(W);
                    P.appendChild(W);
                }
                B("afterHighlightNode", this, {
                    container: P,
                    codeContainer: W,
                    node: S,
                    count: Y
                });
            }
        };
    }());
    j.Sunlight = {
        version: "1.22.0",
        Highlighter: d,
        createAnalyzer: function() {
            return o(D);
        },
        globalOptions: b,
        highlightAll: function(H) {
            var G = new d(H), F = q.getElementsByTagName("*"), I;
            for (I = 0; I < F.length; I++) {
                G.highlightNode(F[I]);
            }
        },
        registerLanguage: function(F, J) {
            var I, H, G;
            if (!F) {
                throw 'Languages must be registered with an identifier, e.g. "php" for PHP';
            }
            J = g(g({}, r), J);
            J.name = F;
            J.keywords = v(J.keywords || [], "\\b", J.caseInsensitive);
            J.operators = v(J.operators || [], "", J.caseInsensitive);
            for (I in J.customTokens) {
                J.customTokens[I] = v(J.customTokens[I].values, J.customTokens[I].boundary, J.caseInsensitive);
            }
            H = [];
            for (G in J.embeddedLanguages) {
                H.push({
                    parentLanguage: J.name,
                    language: G,
                    switchTo: J.embeddedLanguages[G].switchTo,
                    switchBack: J.embeddedLanguages[G].switchBack
                });
            }
            J.embeddedLanguages = H;
            m[J.name] = J;
        },
        isRegistered: function(F) {
            return m[F] !== h;
        },
        bind: function(F, G) {
            if (!c[F]) {
                throw 'Unknown event "' + F + '"';
            }
            c[F].push(G);
        },
        util: {
            last: l,
            regexEscape: C,
            eol: n,
            clone: x,
            escapeSequences: ["\\n", "\\t", "\\r", "\\\\", "\\v", "\\f"],
            contains: i,
            matchWord: e,
            createHashMap: v,
            createBetweenRule: f,
            createProceduralRule: k,
            getNextNonWsToken: function(G, F) {
                return z(G, F, 1, function(H) {
                    return H.name === "default";
                });
            },
            getPreviousNonWsToken: function(G, F) {
                return z(G, F, -1, function(H) {
                    return H.name === "default";
                });
            },
            getNextWhile: function(H, F, G) {
                return z(H, F, 1, G);
            },
            getPreviousWhile: function(H, F, G) {
                return z(H, F, -1, G);
            },
            whitespace: {
                token: "default",
                optional: true
            },
            getComputedStyle: s
        }
    };
    j.Sunlight.registerLanguage(t, {
        punctuation: /(?!x)x/,
        numberParser: E
    });
}(this, document));
(function(b, a, d) {
    if (b === d) {
        throw "Include sunlight.js before including plugin files";
    }
    function c(g) {
        var e = function f(h) {
            if (!h.lastChild) {
                return null;
            }
            if (h.lastChild.nodeType === 3) {
                return h.lastChild;
            }
            return f(h.lastChild);
        }(g) || {
            lastChild: ""
        };
        return g.innerHTML.replace(/[^\n]/g, "").length - /\n$/.test(e.nodeValue);
    }
    b.bind("afterHighlightNode", function(g) {
        var n, o, j, m, e, h, k, l, f;
        if (!this.options.lineNumbers) {
            return;
        }
        if (this.options.lineNumbers === "automatic" && b.util.getComputedStyle(g.node, "display") !== "block") {
            return;
        }
        n = a.createElement("pre");
        o = c(g.node);
        e = this.options.lineHighlight.length > 0;
        if (e) {
            j = a.createElement("div");
            j.className = this.options.classPrefix + "line-highlight-overlay";
        }
        n.className = this.options.classPrefix + "line-number-margin";
        k = a.createTextNode(b.util.eol);
        for (h = this.options.lineNumberStart; h <= this.options.lineNumberStart + o; h++) {
            l = a.createElement("a");
            f = (g.node.id ? g.node.id : this.options.classPrefix + g.count) + "-line-" + h;
            l.setAttribute("name", f);
            l.setAttribute("href", "#" + f);
            l.appendChild(a.createTextNode(h));
            n.appendChild(l);
            n.appendChild(k.cloneNode(false));
            if (e) {
                m = a.createElement("div");
                if (b.util.contains(this.options.lineHighlight, h)) {
                    m.className = this.options.classPrefix + "line-highlight-active";
                }
                j.appendChild(m);
            }
        }
        g.codeContainer.insertBefore(n, g.codeContainer.firstChild);
        if (e) {
            g.codeContainer.appendChild(j);
        }
        g.codeContainer.style.borderWidth = "1px";
        g.codeContainer.style.borderStyle = "solid";
    });
    b.globalOptions.lineNumbers = "automatic";
    b.globalOptions.lineNumberStart = 1;
    b.globalOptions.lineHighlight = [];
}(this["Sunlight"], document));
(function(a, e) {
    if (a === e || a.registerLanguage === e) {
        throw "Include sunlight.js before including language files";
    }
    var d = ["int", "bool", "double", "float", "char", "byte", "sbyte", "uint", "long", "ulong", "char", "decimal", "short", "ushort"]
      , c = d.concat(["in", "out", "string", "object"]);
    function b(g) {
        var f = /^T([A-Z0-9]\w*)?$/;
        return function(h) {
            return !f.test(h.tokens[h.index].value) && g(h);
        }
        ;
    }
    a.registerLanguage("csharp", {
        keywords: d.concat(["extern alias", "public", "private", "protected", "internal", "static", "sealed", "abstract", "partial", "virtual", "override", "new", "implicit", "explicit", "extern", "override", "operator", "const", "readonly", "volatile", "class", "interface", "enum", "struct", "event", "delegate", "null", "true", "false", "string", "object", "void", "for", "foreach", "do", "while", "fixed", "unchecked", "using", "lock", "namespace", "checked", "unsafe", "if", "else", "try", "catch", "finally", "break", "continue", "goto", "case", "throw", "return", "switch", "yield return", "yield break", "in", "out", "ref", "params", "as", "is", "typeof", "this", "sizeof", "stackalloc", "var", "default", "from", "select", "where", "groupby", "orderby"]),
        customParseRules: [function(g) {
            var k = "xmlDocCommentMeta", j = "xmlDocCommentContent", i, f, h = {
                line: 0,
                column: 0,
                value: "",
                name: null
            };
            if (g.reader.current() !== "/" || g.reader.peek(2) !== "//") {
                return null;
            }
            i = [g.createToken(k, "///", g.reader.getLine(), g.reader.getColumn())];
            g.reader.read(2);
            while ((f = g.reader.peek()) !== g.reader.EOF) {
                if (f === "<" && h.name !== k) {
                    if (h.value !== "") {
                        i.push(g.createToken(h.name, h.value, h.line, h.column));
                    }
                    h.line = g.reader.getLine();
                    h.column = g.reader.getColumn();
                    h.name = k;
                    h.value = g.reader.read();
                    continue;
                }
                if (f === ">" && h.name === k) {
                    h.value += g.reader.read();
                    i.push(g.createToken(h.name, h.value, h.line, h.column));
                    h.name = null;
                    h.value = "";
                    continue;
                }
                if (f === "\n") {
                    break;
                }
                if (h.name === null) {
                    h.name = j;
                    h.line = g.reader.getLine();
                    h.column = g.reader.getColumn();
                }
                h.value += g.reader.read();
            }
            if (h.name === j) {
                i.push(g.createToken(h.name, h.value, h.line, h.column));
            }
            return i.length > 0 ? i : null;
        }
        , function(h) {
            var m, k, g, j = false, f = h.reader.getLine(), i = h.reader.getColumn(), l;
            if (!/^(get|set)\b/.test(h.reader.current() + h.reader.peek(3))) {
                return null;
            }
            m = a.util.createProceduralRule(h.count() - 1, -1, [{
                token: "punctuation",
                values: ["}", "{", ";"]
            }, a.util.whitespace, {
                token: "keyword",
                values: ["public", "private", "protected", "internal"],
                optional: true
            }]);
            if (!m(h.getAllTokens())) {
                return null;
            }
            k = "get".length;
            g = h.reader.peek(k);
            while (g.length === k) {
                if (!/\s$/.test(g)) {
                    if (!/[\{;]$/.test(g)) {
                        return null;
                    }
                    j = true;
                    break;
                }
                g = h.reader.peek(++k);
            }
            if (!j) {
                return null;
            }
            l = h.reader.current() + h.reader.read(2);
            return h.createToken("keyword", l, f, i);
        }
        , function(f) {
            var k, m, h, j, l, g, o = f.reader.getLine(), i = f.reader.getColumn(), n;
            if (!/^value\b/.test(f.reader.current() + f.reader.peek(5))) {
                return null;
            }
            k = "value".length;
            m = f.reader.peek(k);
            while (m.length === k) {
                if (!/\s$/.test(m)) {
                    n = f.reader.peek(k + 1);
                    if (m.charAt(m.length - 1) === "=" && n.charAt(n.length - 1) !== "=") {
                        return null;
                    }
                    h = true;
                    break;
                }
                m = f.reader.peek(++k);
            }
            if (!h) {
                return null;
            }
            l = f.count() - 1;
            g = [0, 0];
            tokenLoop: while ((j = f.token(l--)) !== e) {
                if (j.name === "punctuation") {
                    if (j.value === "{") {
                        g[0]++;
                    } else {
                        if (j.value === "}") {
                            g[1]++;
                        }
                    }
                } else {
                    if (j.name === "keyword") {
                        switch (j.value) {
                        case "set":
                            break tokenLoop;
                        case "class":
                        case "public":
                        case "private":
                        case "protected":
                        case "internal":
                            return null;
                        }
                    }
                }
            }
            if (j === e) {
                return null;
            }
            if (g[1] >= g[0]) {
                return null;
            }
            f.reader.read(4);
            return f.createToken("keyword", "value", o, i);
        }
        ],
        scopes: {
            string: [['"', '"', a.util.escapeSequences.concat(['\\"'])], ['@"', '"', ['""']]],
            "char": [["'", "'", ["\\'", "\\\\"]]],
            comment: [["//", "\n", null, true], ["/*", "*/"]],
            pragma: [["#", "\n", null, true]]
        },
        identFirstLetter: /[A-Za-z_@]/,
        identAfterFirstLetter: /\w/,
        namedIdentRules: {
            custom: [b(function(j) {
                var h = j.index, i, g = false, f;
                while ((i = j.tokens[--h]) !== e) {
                    if (i.name === "punctuation" && i.value === "{") {
                        return false;
                    }
                    if (i.name === "keyword" && i.value === "case") {
                        return false;
                    }
                    if (i.name === "keyword" && (i.value === "class" || i.value === "where")) {
                        f = j.tokens[h + 1].name === "default" ? j.tokens[h + 2] : j.tokens[h + 1];
                        if (f.name === "punctuation" && f.value === ",") {
                            continue;
                        }
                        break;
                    }
                    if (i.name === "operator" && i.value === ":") {
                        g = true;
                    }
                }
                if (!g) {
                    return false;
                }
                return true;
            }), b(function(j) {
                var h = j.index, i, g = false, f = [0, 0];
                while ((i = j.tokens[--h]) !== e) {
                    if (i.name === "keyword" && i.value === "class") {
                        return false;
                    }
                    if (i.name === "operator") {
                        switch (i.value) {
                        case "<":
                        case "<<":
                            f[0] += i.value.length;
                            continue;
                        case ">":
                        case ">>":
                            if (f[0] === 0) {
                                return false;
                            }
                            f[1] += i.value.length;
                            continue;
                        }
                        break;
                    }
                    if ((i.name === "keyword" && a.util.contains(c, i.value)) || i.name === "default" || (i.name === "punctuation" && i.value === ",")) {
                        continue;
                    }
                    if (i.name === "ident") {
                        g = true;
                        continue;
                    }
                    break;
                }
                if (!g || f[0] === 0) {
                    return false;
                }
                h = j.index;
                while ((i = j.tokens[++h]) !== e) {
                    if (i.name === "operator" && (i.value === ">" || i.value === ">>")) {
                        return true;
                    }
                    if ((i.name === "keyword" && a.util.contains(c, i.value)) || (i.name === "operator" && a.util.contains(["<", "<<", ">", ">>"], i.value)) || (i.name === "punctuation" && i.value === ",") || i.name === "ident" || i.name === "default") {
                        continue;
                    }
                    return false;
                }
                return false;
            }), b(function(i) {
                var h = a.util.getPreviousNonWsToken(i.tokens, i.index), g, f;
                if (h !== e) {
                    if (h.name === "ident" || (h.name === "keyword" && a.util.contains(d.concat(["string", "object", "void"]), h.value)) || (h.name === "operator" && h.value === ".")) {
                        return false;
                    }
                }
                h = a.util.getNextNonWsToken(i.tokens, i.index);
                if (!h || h.name !== "operator" || h.value !== "<") {
                    return false;
                }
                g = i.index;
                f = [0, 0];
                while ((h = i.tokens[++g]) !== e) {
                    if (h.name === "operator") {
                        switch (h.value) {
                        case "<":
                            f[0]++;
                            break;
                        case "<<":
                            f[0] += 2;
                            break;
                        case ">":
                            f[1]++;
                            break;
                        case ">>":
                            f[1] += 2;
                            break;
                        default:
                            return false;
                        }
                        if (f[0] === f[1]) {
                            break;
                        }
                        continue;
                    }
                    if (h.name === "default" || h.name === "ident" || (h.name === "keyword" && a.util.contains(c, h.value)) || (h.name === "punctuation" && h.value === ",")) {
                        continue;
                    }
                    return false;
                }
                if (f[0] !== f[1]) {
                    return false;
                }
                h = i.tokens[++g];
                if (!h || (h.name !== "default" && h.name !== "ident")) {
                    return false;
                }
                if (h.name === "default") {
                    h = i.tokens[++g];
                    if (!h || h.name !== "ident") {
                        return false;
                    }
                }
                return true;
            }), function(g) {
                var h = a.util.getPreviousNonWsToken(g.tokens, g.index), f;
                if (!h || h.name !== "keyword" || h.value !== "using") {
                    return false;
                }
                f = a.util.getNextNonWsToken(g.tokens, g.index);
                if (!f || f.name !== "operator" || f.value !== "=") {
                    return false;
                }
                return true;
            }
            , b(function(j) {
                var i = a.util.getNextNonWsToken(j.tokens, j.index), g, f, k = false, h;
                if (i && i.name === "operator" && (i.value === "=" || i.value === ".")) {
                    return false;
                }
                g = j.index;
                f = [0, 0];
                k = false;
                while ((i = j.tokens[--g]) !== e) {
                    if (i.name === "punctuation") {
                        if (i.value === "[") {
                            f[0]++;
                            continue;
                        }
                        if (i.value === "]") {
                            f[1]++;
                            continue;
                        }
                        if (i.value === ",") {
                            k = true;
                        }
                        if (i.value === "{" || i.value === "}" || i.value === ";") {
                            break;
                        }
                    }
                }
                if (f[0] === 0 || f[0] === f[1]) {
                    return false;
                }
                g = j.index;
                h = -1;
                while ((i = j.tokens[++g]) !== e) {
                    if (i.name === "punctuation") {
                        if (i.value === "[") {
                            f[0]++;
                            continue;
                        }
                        if (i.value === "]") {
                            h = g;
                            f[1]++;
                            continue;
                        }
                        if (i.value === "{" || i.value === "}" || i.value === ";") {
                            break;
                        }
                    }
                }
                if (h < 0 || f[0] !== f[1]) {
                    return false;
                }
                i = a.util.getNextNonWsToken(j.tokens, h);
                if (i && (i.name === "keyword" || i.name === "ident")) {
                    return true;
                }
                return false;
            }), b(function(i) {
                var f = a.util.getNextNonWsToken(i.tokens, i.index), h, g, j;
                if (f && f.name === "operator" && f.value === ".") {
                    return false;
                }
                g = i.index;
                j = i.tokens[g];
                while ((h = i.tokens[--g]) !== e) {
                    if (h.name === "keyword" && (h.value === "new" || h.value === "is")) {
                        return true;
                    }
                    if (h.name === "default") {
                        continue;
                    }
                    if (h.name === "ident") {
                        if (j && j.name === "ident") {
                            return false;
                        }
                        j = h;
                        continue;
                    }
                    if (h.name === "operator" && h.value === ".") {
                        if (j && j.name !== "ident") {
                            return false;
                        }
                        j = h;
                        continue;
                    }
                    break;
                }
                return false;
            }), function() {
                var f = [[a.util.whitespace, {
                    token: "punctuation",
                    values: [")"]
                }, a.util.whitespace, {
                    token: "ident"
                }], [a.util.whitespace, {
                    token: "punctuation",
                    values: [")"]
                }, a.util.whitespace, {
                    token: "keyword",
                    values: ["this"]
                }]];
                return b(function(j) {
                    var i, h, k, g = function(m) {
                        for (var l = 0; l < f.length; l++) {
                            if (a.util.createProceduralRule(j.index + 1, 1, f[l], false)(m)) {
                                return true;
                            }
                        }
                        return false;
                    }(j.tokens);
                    if (!g) {
                        return false;
                    }
                    h = j.index;
                    while (i = j.tokens[--h]) {
                        if (i.name === "punctuation" && i.value === "(") {
                            k = a.util.getPreviousNonWsToken(j.tokens, h);
                            if (k && k.name === "keyword") {
                                return false;
                            }
                            return true;
                        }
                    }
                    return false;
                });
            }(), function(i) {
                var f = a.util.getNextNonWsToken(i.tokens, i.index), h, g;
                if (!f || f.name !== "punctuation" || f.value !== ";") {
                    return false;
                }
                g = i.index;
                while (h = i.tokens[--g]) {
                    if (h.name !== "ident" && h.name !== "default" && (h.name !== "operator" || h.value !== ".")) {
                        if (h.name !== "operator" || h.value !== "=") {
                            return false;
                        }
                        return a.util.createProceduralRule(g - 1, -1, [{
                            token: "keyword",
                            values: ["using"]
                        }, {
                            token: "default"
                        }, {
                            token: "ident"
                        }, a.util.whitespace])(i.tokens);
                    }
                }
                return false;
            }
            , b(function(h) {
                var g, j = [[{
                    token: "keyword",
                    values: ["class", "interface", "event", "struct", "enum", "delegate", "public", "private", "protected", "internal", "static", "virtual", "sealed", "params"]
                }, a.util.whitespace], [{
                    token: "keyword",
                    values: ["typeof", "default"]
                }, a.util.whitespace, {
                    token: "punctuation",
                    values: ["("]
                }, a.util.whitespace], [{
                    token: "keyword",
                    values: ["as"]
                }, a.util.whitespace]], f = [[a.util.whitespace, {
                    token: "punctuation",
                    values: ["["]
                }, a.util.whitespace, {
                    token: "punctuation",
                    values: ["]"]
                }], [{
                    token: "default"
                }, {
                    token: "ident"
                }]];
                for (g = 0; g < j.length; g++) {
                    if (a.util.createProceduralRule(h.index - 1, -1, j[g], false)(h.tokens)) {
                        return true;
                    }
                }
                for (g = 0; g < f.length; g++) {
                    if (a.util.createProceduralRule(h.index + 1, 1, f[g], false)(h.tokens)) {
                        return true;
                    }
                }
                return false;
            })]
        },
        operators: ["++", "+=", "+", "--", "-=", "-", "*=", "*", "/=", "/", "%=", "%", "&&", "||", "|=", "|", "&=", "&", "^=", "^", ">>=", ">>", "<<=", "<<", "<=", "<", ">=", ">", "==", "!=", "!", "~", "??", "?", "::", ":", ".", "=>", "="]
    });
}(this["Sunlight"]));
