/* CodeMirror - Minified & Bundled
   Generated on 5/3/2016 with http://codemirror.net/doc/compress.html
   Version: HEAD

   CodeMirror Library:
   - codemirror.js
 */

!function(a) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = a();
    else {
        if ("function" == typeof define && define.amd)
            return define([], a);
        (this || window).CodeMirror = a()
    }
}(function() {
    "use strict";
    function y(a, b) {
        if (!(this instanceof y))
            return new y(a,b);
        this.options = b = b ? ng(b) : {},
        ng(Ed, b, !1),
        L(b);
        var c = b.value;
        "string" == typeof c && (c = new ef(c,b.mode,null,b.lineSeparator)),
        this.doc = c;
        var d = new y.inputStyles[b.inputStyle](this)
          , e = this.display = new z(a,c,d);
        e.wrapper.CodeMirror = this,
        H(this),
        F(this),
        b.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
        b.autofocus && !p && e.input.focus(),
        P(this),
        this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            selectingText: !1,
            draggingText: !1,
            highlight: new cg,
            keySeq: null,
            specialChars: null
        };
        var i = this;
        f && 11 > g && setTimeout(function() {
            i.display.input.reset(!0)
        }, 20),
        tc(this),
        Hg(),
        Zb(this),
        this.curOp.forceUpdate = !0,
        jf(this, c),
        b.autofocus && !p || i.hasFocus() ? setTimeout(og(bd, this), 20) : cd(this);
        for (var j in Fd)
            Fd.hasOwnProperty(j) && Fd[j](this, b[j], Hd);
        U(this),
        b.finishInit && b.finishInit(this);
        for (var k = 0; k < Ld.length; ++k)
            Ld[k](this);
        _b(this),
        h && b.lineWrapping && "optimizelegibility" == getComputedStyle(e.lineDiv).textRendering && (e.lineDiv.style.textRendering = "auto")
    }
    function z(a, b, d) {
        var e = this;
        this.input = d,
        e.scrollbarFiller = vg("div", null, "CodeMirror-scrollbar-filler"),
        e.scrollbarFiller.setAttribute("cm-not-content", "true"),
        e.gutterFiller = vg("div", null, "CodeMirror-gutter-filler"),
        e.gutterFiller.setAttribute("cm-not-content", "true"),
        e.lineDiv = vg("div", null, "CodeMirror-code"),
        e.selectionDiv = vg("div", null, null, "position: relative; z-index: 1"),
        e.cursorDiv = vg("div", null, "CodeMirror-cursors"),
        e.measure = vg("div", null, "CodeMirror-measure"),
        e.lineMeasure = vg("div", null, "CodeMirror-measure"),
        e.lineSpace = vg("div", [e.measure, e.lineMeasure, e.selectionDiv, e.cursorDiv, e.lineDiv], null, "position: relative; outline: none"),
        e.mover = vg("div", [vg("div", [e.lineSpace], "CodeMirror-lines")], null, "position: relative"),
        e.sizer = vg("div", [e.mover], "CodeMirror-sizer"),
        e.sizerWidth = null,
        e.heightForcer = vg("div", null, null, "position: absolute; height: " + Zf + "px; width: 1px;"),
        e.gutters = vg("div", null, "CodeMirror-gutters"),
        e.lineGutter = null,
        e.scroller = vg("div", [e.sizer, e.heightForcer, e.gutters], "CodeMirror-scroll"),
        e.scroller.setAttribute("tabIndex", "-1"),
        e.wrapper = vg("div", [e.scrollbarFiller, e.gutterFiller, e.scroller], "CodeMirror"),
        f && 8 > g && (e.gutters.style.zIndex = -1,
        e.scroller.style.paddingRight = 0),
        h || c && p || (e.scroller.draggable = !0),
        a && (a.appendChild ? a.appendChild(e.wrapper) : a(e.wrapper)),
        e.viewFrom = e.viewTo = b.first,
        e.reportedViewFrom = e.reportedViewTo = b.first,
        e.view = [],
        e.renderedView = null,
        e.externalMeasured = null,
        e.viewOffset = 0,
        e.lastWrapHeight = e.lastWrapWidth = 0,
        e.updateLineNumbers = null,
        e.nativeBarWidth = e.barHeight = e.barWidth = 0,
        e.scrollbarsClipped = !1,
        e.lineNumWidth = e.lineNumInnerWidth = e.lineNumChars = null,
        e.alignWidgets = !1,
        e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null,
        e.maxLine = null,
        e.maxLineLength = 0,
        e.maxLineChanged = !1,
        e.wheelDX = e.wheelDY = e.wheelStartX = e.wheelStartY = null,
        e.shift = !1,
        e.selForContextMenu = null,
        e.activeTouch = null,
        d.init(e)
    }
    function A(a) {
        a.doc.mode = y.getMode(a.options, a.doc.modeOption),
        B(a)
    }
    function B(a) {
        a.doc.iter(function(a) {
            a.stateAfter && (a.stateAfter = null),
            a.styles && (a.styles = null)
        }),
        a.doc.frontier = a.doc.first,
        mb(a, 100),
        a.state.modeGen++,
        a.curOp && mc(a)
    }
    function C(a) {
        a.options.lineWrapping ? (Dg(a.display.wrapper, "CodeMirror-wrap"),
        a.display.sizer.style.minWidth = "",
        a.display.sizerWidth = null) : (Cg(a.display.wrapper, "CodeMirror-wrap"),
        K(a)),
        E(a),
        mc(a),
        Jb(a),
        setTimeout(function() {
            Q(a)
        }, 100)
    }
    function D(a) {
        var b = Vb(a.display)
          , c = a.options.lineWrapping
          , d = c && Math.max(5, a.display.scroller.clientWidth / Wb(a.display) - 3);
        return function(e) {
            if (Ae(a.doc, e))
                return 0;
            var f = 0;
            if (e.widgets)
                for (var g = 0; g < e.widgets.length; g++)
                    e.widgets[g].height && (f += e.widgets[g].height);
            return c ? f + (Math.ceil(e.text.length / d) || 1) * b : f + b
        }
    }
    function E(a) {
        var b = a.doc
          , c = D(a);
        b.iter(function(a) {
            var b = c(a);
            b != a.height && nf(a, b)
        })
    }
    function F(a) {
        a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + a.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
        Jb(a)
    }
    function G(a) {
        H(a),
        mc(a),
        setTimeout(function() {
            T(a)
        }, 20)
    }
    function H(a) {
        var b = a.display.gutters
          , c = a.options.gutters;
        xg(b);
        for (var d = 0; d < c.length; ++d) {
            var e = c[d]
              , f = b.appendChild(vg("div", null, "CodeMirror-gutter " + e));
            "CodeMirror-linenumbers" == e && (a.display.lineGutter = f,
            f.style.width = (a.display.lineNumWidth || 1) + "px")
        }
        b.style.display = d ? "" : "none",
        I(a)
    }
    function I(a) {
        var b = a.display.gutters.offsetWidth;
        a.display.sizer.style.marginLeft = b + "px"
    }
    function J(a) {
        if (0 == a.height)
            return 0;
        for (var c, b = a.text.length, d = a; c = te(d); ) {
            var e = c.find(0, !0);
            d = e.from.line,
            b += e.from.ch - e.to.ch
        }
        for (d = a; c = ue(d); ) {
            var e = c.find(0, !0);
            b -= d.text.length - e.from.ch,
            d = e.to.line,
            b += d.text.length - e.to.ch
        }
        return b
    }
    function K(a) {
        var b = a.display
          , c = a.doc;
        b.maxLine = kf(c, c.first),
        b.maxLineLength = J(b.maxLine),
        b.maxLineChanged = !0,
        c.iter(function(a) {
            var c = J(a);
            c > b.maxLineLength && (b.maxLineLength = c,
            b.maxLine = a)
        })
    }
    function L(a) {
        var b = jg(a.gutters, "CodeMirror-linenumbers");
        -1 == b && a.lineNumbers ? a.gutters = a.gutters.concat(["CodeMirror-linenumbers"]) : b > -1 && !a.lineNumbers && (a.gutters = a.gutters.slice(0),
        a.gutters.splice(b, 1))
    }
    function M(a) {
        var b = a.display
          , c = b.gutters.offsetWidth
          , d = Math.round(a.doc.height + rb(a.display));
        return {
            clientHeight: b.scroller.clientHeight,
            viewHeight: b.wrapper.clientHeight,
            scrollWidth: b.scroller.scrollWidth,
            clientWidth: b.scroller.clientWidth,
            viewWidth: b.wrapper.clientWidth,
            barLeft: a.options.fixedGutter ? c : 0,
            docHeight: d,
            scrollHeight: d + tb(a) + b.barHeight,
            nativeBarWidth: b.nativeBarWidth,
            gutterWidth: c
        }
    }
    function N(a, b, c) {
        this.cm = c;
        var d = this.vert = vg("div", [vg("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
          , e = this.horiz = vg("div", [vg("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        a(d),
        a(e),
        Nf(d, "scroll", function() {
            d.clientHeight && b(d.scrollTop, "vertical")
        }),
        Nf(e, "scroll", function() {
            e.clientWidth && b(e.scrollLeft, "horizontal")
        }),
        this.checkedZeroWidth = !1,
        f && 8 > g && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    }
    function O() {}
    function P(a) {
        a.display.scrollbars && (a.display.scrollbars.clear(),
        a.display.scrollbars.addClass && Cg(a.display.wrapper, a.display.scrollbars.addClass)),
        a.display.scrollbars = new y.scrollbarModel[a.options.scrollbarStyle](function(b) {
            a.display.wrapper.insertBefore(b, a.display.scrollbarFiller),
            Nf(b, "mousedown", function() {
                a.state.focused && setTimeout(function() {
                    a.display.input.focus()
                }, 0)
            }),
            b.setAttribute("cm-not-content", "true")
        }
        ,function(b, c) {
            "horizontal" == c ? Mc(a, b) : Lc(a, b)
        }
        ,a),
        a.display.scrollbars.addClass && Dg(a.display.wrapper, a.display.scrollbars.addClass)
    }
    function Q(a, b) {
        b || (b = M(a));
        var c = a.display.barWidth
          , d = a.display.barHeight;
        R(a, b);
        for (var e = 0; 4 > e && c != a.display.barWidth || d != a.display.barHeight; e++)
            c != a.display.barWidth && a.options.lineWrapping && ba(a),
            R(a, M(a)),
            c = a.display.barWidth,
            d = a.display.barHeight
    }
    function R(a, b) {
        var c = a.display
          , d = c.scrollbars.update(b);
        c.sizer.style.paddingRight = (c.barWidth = d.right) + "px",
        c.sizer.style.paddingBottom = (c.barHeight = d.bottom) + "px",
        c.heightForcer.style.borderBottom = d.bottom + "px solid transparent",
        d.right && d.bottom ? (c.scrollbarFiller.style.display = "block",
        c.scrollbarFiller.style.height = d.bottom + "px",
        c.scrollbarFiller.style.width = d.right + "px") : c.scrollbarFiller.style.display = "",
        d.bottom && a.options.coverGutterNextToScrollbar && a.options.fixedGutter ? (c.gutterFiller.style.display = "block",
        c.gutterFiller.style.height = d.bottom + "px",
        c.gutterFiller.style.width = b.gutterWidth + "px") : c.gutterFiller.style.display = ""
    }
    function S(a, b, c) {
        var d = c && null != c.top ? Math.max(0, c.top) : a.scroller.scrollTop;
        d = Math.floor(d - qb(a));
        var e = c && null != c.bottom ? c.bottom : d + a.wrapper.clientHeight
          , f = pf(b, d)
          , g = pf(b, e);
        if (c && c.ensure) {
            var h = c.ensure.from.line
              , i = c.ensure.to.line;
            f > h ? (f = h,
            g = pf(b, qf(kf(b, h)) + a.wrapper.clientHeight)) : Math.min(i, b.lastLine()) >= g && (f = pf(b, qf(kf(b, i)) - a.wrapper.clientHeight),
            g = i)
        }
        return {
            from: f,
            to: Math.max(g, f + 1)
        }
    }
    function T(a) {
        var b = a.display
          , c = b.view;
        if (b.alignWidgets || b.gutters.firstChild && a.options.fixedGutter) {
            for (var d = W(b) - b.scroller.scrollLeft + a.doc.scrollLeft, e = b.gutters.offsetWidth, f = d + "px", g = 0; g < c.length; g++)
                if (!c[g].hidden) {
                    a.options.fixedGutter && c[g].gutter && (c[g].gutter.style.left = f);
                    var h = c[g].alignable;
                    if (h)
                        for (var i = 0; i < h.length; i++)
                            h[i].style.left = f
                }
            a.options.fixedGutter && (b.gutters.style.left = d + e + "px")
        }
    }
    function U(a) {
        if (!a.options.lineNumbers)
            return !1;
        var b = a.doc
          , c = V(a.options, b.first + b.size - 1)
          , d = a.display;
        if (c.length != d.lineNumChars) {
            var e = d.measure.appendChild(vg("div", [vg("div", c)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
              , f = e.firstChild.offsetWidth
              , g = e.offsetWidth - f;
            return d.lineGutter.style.width = "",
            d.lineNumInnerWidth = Math.max(f, d.lineGutter.offsetWidth - g) + 1,
            d.lineNumWidth = d.lineNumInnerWidth + g,
            d.lineNumChars = d.lineNumInnerWidth ? c.length : -1,
            d.lineGutter.style.width = d.lineNumWidth + "px",
            I(a),
            !0
        }
        return !1
    }
    function V(a, b) {
        return String(a.lineNumberFormatter(b + a.firstLineNumber))
    }
    function W(a) {
        return a.scroller.getBoundingClientRect().left - a.sizer.getBoundingClientRect().left
    }
    function X(a, b, c) {
        var d = a.display;
        this.viewport = b,
        this.visible = S(d, a.doc, b),
        this.editorIsHidden = !d.wrapper.offsetWidth,
        this.wrapperHeight = d.wrapper.clientHeight,
        this.wrapperWidth = d.wrapper.clientWidth,
        this.oldDisplayWidth = ub(a),
        this.force = c,
        this.dims = da(a),
        this.events = []
    }
    function Y(a) {
        var b = a.display;
        !b.scrollbarsClipped && b.scroller.offsetWidth && (b.nativeBarWidth = b.scroller.offsetWidth - b.scroller.clientWidth,
        b.heightForcer.style.height = tb(a) + "px",
        b.sizer.style.marginBottom = -b.nativeBarWidth + "px",
        b.sizer.style.borderRightWidth = tb(a) + "px",
        b.scrollbarsClipped = !0)
    }
    function Z(a, b) {
        var c = a.display
          , d = a.doc;
        if (b.editorIsHidden)
            return oc(a),
            !1;
        if (!b.force && b.visible.from >= c.viewFrom && b.visible.to <= c.viewTo && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo) && c.renderedView == c.view && 0 == sc(a))
            return !1;
        U(a) && (oc(a),
        b.dims = da(a));
        var e = d.first + d.size
          , f = Math.max(b.visible.from - a.options.viewportMargin, d.first)
          , g = Math.min(e, b.visible.to + a.options.viewportMargin);
        c.viewFrom < f && f - c.viewFrom < 20 && (f = Math.max(d.first, c.viewFrom)),
        c.viewTo > g && c.viewTo - g < 20 && (g = Math.min(e, c.viewTo)),
        x && (f = ye(a.doc, f),
        g = ze(a.doc, g));
        var h = f != c.viewFrom || g != c.viewTo || c.lastWrapHeight != b.wrapperHeight || c.lastWrapWidth != b.wrapperWidth;
        rc(a, f, g),
        c.viewOffset = qf(kf(a.doc, c.viewFrom)),
        a.display.mover.style.top = c.viewOffset + "px";
        var i = sc(a);
        if (!h && 0 == i && !b.force && c.renderedView == c.view && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo))
            return !1;
        var j = Ag();
        return i > 4 && (c.lineDiv.style.display = "none"),
        ea(a, c.updateLineNumbers, b.dims),
        i > 4 && (c.lineDiv.style.display = ""),
        c.renderedView = c.view,
        j && Ag() != j && j.offsetHeight && j.focus(),
        xg(c.cursorDiv),
        xg(c.selectionDiv),
        c.gutters.style.height = c.sizer.style.minHeight = 0,
        h && (c.lastWrapHeight = b.wrapperHeight,
        c.lastWrapWidth = b.wrapperWidth,
        mb(a, 400)),
        c.updateLineNumbers = null,
        !0
    }
    function $(a, b) {
        for (var c = b.viewport, d = !0; (d && a.options.lineWrapping && b.oldDisplayWidth != ub(a) || (c && null != c.top && (c = {
            top: Math.min(a.doc.height + rb(a.display) - vb(a), c.top)
        }),
        b.visible = S(a.display, a.doc, c),
        !(b.visible.from >= a.display.viewFrom && b.visible.to <= a.display.viewTo))) && Z(a, b); d = !1) {
            ba(a);
            var e = M(a);
            hb(a),
            Q(a, e),
            aa(a, e)
        }
        b.signal(a, "update", a),
        (a.display.viewFrom != a.display.reportedViewFrom || a.display.viewTo != a.display.reportedViewTo) && (b.signal(a, "viewportChange", a, a.display.viewFrom, a.display.viewTo),
        a.display.reportedViewFrom = a.display.viewFrom,
        a.display.reportedViewTo = a.display.viewTo)
    }
    function _(a, b) {
        var c = new X(a,b);
        if (Z(a, c)) {
            ba(a),
            $(a, c);
            var d = M(a);
            hb(a),
            Q(a, d),
            aa(a, d),
            c.finish()
        }
    }
    function aa(a, b) {
        a.display.sizer.style.minHeight = b.docHeight + "px",
        a.display.heightForcer.style.top = b.docHeight + "px",
        a.display.gutters.style.height = b.docHeight + a.display.barHeight + tb(a) + "px"
    }
    function ba(a) {
        for (var b = a.display, c = b.lineDiv.offsetTop, d = 0; d < b.view.length; d++) {
            var h, e = b.view[d];
            if (!e.hidden) {
                if (f && 8 > g) {
                    var i = e.node.offsetTop + e.node.offsetHeight;
                    h = i - c,
                    c = i
                } else {
                    var j = e.node.getBoundingClientRect();
                    h = j.bottom - j.top
                }
                var k = e.line.height - h;
                if (2 > h && (h = Vb(b)),
                (k > .001 || -.001 > k) && (nf(e.line, h),
                ca(e.line),
                e.rest))
                    for (var l = 0; l < e.rest.length; l++)
                        ca(e.rest[l])
            }
        }
    }
    function ca(a) {
        if (a.widgets)
            for (var b = 0; b < a.widgets.length; ++b)
                a.widgets[b].height = a.widgets[b].node.parentNode.offsetHeight
    }
    function da(a) {
        for (var b = a.display, c = {}, d = {}, e = b.gutters.clientLeft, f = b.gutters.firstChild, g = 0; f; f = f.nextSibling,
        ++g)
            c[a.options.gutters[g]] = f.offsetLeft + f.clientLeft + e,
            d[a.options.gutters[g]] = f.clientWidth;
        return {
            fixedPos: W(b),
            gutterTotalWidth: b.gutters.offsetWidth,
            gutterLeft: c,
            gutterWidth: d,
            wrapperWidth: b.wrapper.clientWidth
        }
    }
    function ea(a, b, c) {
        function i(b) {
            var c = b.nextSibling;
            return h && q && a.display.currentWheelTarget == b ? b.style.display = "none" : b.parentNode.removeChild(b),
            c
        }
        for (var d = a.display, e = a.options.lineNumbers, f = d.lineDiv, g = f.firstChild, j = d.view, k = d.viewFrom, l = 0; l < j.length; l++) {
            var m = j[l];
            if (m.hidden)
                ;
            else if (m.node && m.node.parentNode == f) {
                for (; g != m.node; )
                    g = i(g);
                var o = e && null != b && k >= b && m.lineNumber;
                m.changes && (jg(m.changes, "gutter") > -1 && (o = !1),
                fa(a, m, k, c)),
                o && (xg(m.lineNumber),
                m.lineNumber.appendChild(document.createTextNode(V(a.options, k)))),
                g = m.node.nextSibling
            } else {
                var n = na(a, m, k, c);
                f.insertBefore(n, g)
            }
            k += m.size
        }
        for (; g; )
            g = i(g)
    }
    function fa(a, b, c, d) {
        for (var e = 0; e < b.changes.length; e++) {
            var f = b.changes[e];
            "text" == f ? ja(a, b) : "gutter" == f ? la(a, b, c, d) : "class" == f ? ka(b) : "widget" == f && ma(a, b, d)
        }
        b.changes = null
    }
    function ga(a) {
        return a.node == a.text && (a.node = vg("div", null, null, "position: relative"),
        a.text.parentNode && a.text.parentNode.replaceChild(a.node, a.text),
        a.node.appendChild(a.text),
        f && 8 > g && (a.node.style.zIndex = 2)),
        a.node
    }
    function ha(a) {
        var b = a.bgClass ? a.bgClass + " " + (a.line.bgClass || "") : a.line.bgClass;
        if (b && (b += " CodeMirror-linebackground"),
        a.background)
            b ? a.background.className = b : (a.background.parentNode.removeChild(a.background),
            a.background = null);
        else if (b) {
            var c = ga(a);
            a.background = c.insertBefore(vg("div", null, b), c.firstChild)
        }
    }
    function ia(a, b) {
        var c = a.display.externalMeasured;
        return c && c.line == b.line ? (a.display.externalMeasured = null,
        b.measure = c.measure,
        c.built) : Ue(a, b)
    }
    function ja(a, b) {
        var c = b.text.className
          , d = ia(a, b);
        b.text == b.node && (b.node = d.pre),
        b.text.parentNode.replaceChild(d.pre, b.text),
        b.text = d.pre,
        d.bgClass != b.bgClass || d.textClass != b.textClass ? (b.bgClass = d.bgClass,
        b.textClass = d.textClass,
        ka(b)) : c && (b.text.className = c)
    }
    function ka(a) {
        ha(a),
        a.line.wrapClass ? ga(a).className = a.line.wrapClass : a.node != a.text && (a.node.className = "");
        var b = a.textClass ? a.textClass + " " + (a.line.textClass || "") : a.line.textClass;
        a.text.className = b || ""
    }
    function la(a, b, c, d) {
        if (b.gutter && (b.node.removeChild(b.gutter),
        b.gutter = null),
        b.gutterBackground && (b.node.removeChild(b.gutterBackground),
        b.gutterBackground = null),
        b.line.gutterClass) {
            var e = ga(b);
            b.gutterBackground = vg("div", null, "CodeMirror-gutter-background " + b.line.gutterClass, "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px; width: " + d.gutterTotalWidth + "px"),
            e.insertBefore(b.gutterBackground, b.text)
        }
        var f = b.line.gutterMarkers;
        if (a.options.lineNumbers || f) {
            var e = ga(b)
              , g = b.gutter = vg("div", null, "CodeMirror-gutter-wrapper", "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px");
            if (a.display.input.setUneditable(g),
            e.insertBefore(g, b.text),
            b.line.gutterClass && (g.className += " " + b.line.gutterClass),
            !a.options.lineNumbers || f && f["CodeMirror-linenumbers"] || (b.lineNumber = g.appendChild(vg("div", V(a.options, c), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + d.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + a.display.lineNumInnerWidth + "px"))),
            f)
                for (var h = 0; h < a.options.gutters.length; ++h) {
                    var i = a.options.gutters[h]
                      , j = f.hasOwnProperty(i) && f[i];
                    j && g.appendChild(vg("div", [j], "CodeMirror-gutter-elt", "left: " + d.gutterLeft[i] + "px; width: " + d.gutterWidth[i] + "px"))
                }
        }
    }
    function ma(a, b, c) {
        b.alignable && (b.alignable = null);
        for (var e, d = b.node.firstChild; d; d = e) {
            var e = d.nextSibling;
            "CodeMirror-linewidget" == d.className && b.node.removeChild(d)
        }
        oa(a, b, c)
    }
    function na(a, b, c, d) {
        var e = ia(a, b);
        return b.text = b.node = e.pre,
        e.bgClass && (b.bgClass = e.bgClass),
        e.textClass && (b.textClass = e.textClass),
        ka(b),
        la(a, b, c, d),
        oa(a, b, d),
        b.node
    }
    function oa(a, b, c) {
        if (pa(a, b.line, b, c, !0),
        b.rest)
            for (var d = 0; d < b.rest.length; d++)
                pa(a, b.rest[d], b, c, !1)
    }
    function pa(a, b, c, d, e) {
        if (b.widgets)
            for (var f = ga(c), g = 0, h = b.widgets; g < h.length; ++g) {
                var i = h[g]
                  , j = vg("div", [i.node], "CodeMirror-linewidget");
                i.handleMouseEvents || j.setAttribute("cm-ignore-events", "true"),
                qa(i, j, c, d),
                a.display.input.setUneditable(j),
                e && i.above ? f.insertBefore(j, c.gutter || c.text) : f.appendChild(j),
                Tf(i, "redraw")
            }
    }
    function qa(a, b, c, d) {
        if (a.noHScroll) {
            (c.alignable || (c.alignable = [])).push(b);
            var e = d.wrapperWidth;
            b.style.left = d.fixedPos + "px",
            a.coverGutter || (e -= d.gutterTotalWidth,
            b.style.paddingLeft = d.gutterTotalWidth + "px"),
            b.style.width = e + "px"
        }
        a.coverGutter && (b.style.zIndex = 5,
        b.style.position = "relative",
        a.noHScroll || (b.style.marginLeft = -d.gutterTotalWidth + "px"))
    }
    function ta(a) {
        return ra(a.line, a.ch)
    }
    function ua(a, b) {
        return sa(a, b) < 0 ? b : a
    }
    function va(a, b) {
        return sa(a, b) < 0 ? a : b
    }
    function wa(a) {
        a.state.focused || (a.display.input.focus(),
        bd(a))
    }
    function ya(a, b, c, d, e) {
        var f = a.doc;
        a.display.shift = !1,
        d || (d = f.sel);
        var g = a.state.pasteIncoming || "paste" == e
          , h = f.splitLines(b)
          , i = null;
        if (g && d.ranges.length > 1)
            if (xa && xa.join("\n") == b) {
                if (d.ranges.length % xa.length == 0) {
                    i = [];
                    for (var j = 0; j < xa.length; j++)
                        i.push(f.splitLines(xa[j]))
                }
            } else
                h.length == d.ranges.length && (i = kg(h, function(a) {
                    return [a]
                }));
        for (var j = d.ranges.length - 1; j >= 0; j--) {
            var k = d.ranges[j]
              , l = k.from()
              , m = k.to();
            k.empty() && (c && c > 0 ? l = ra(l.line, l.ch - c) : a.state.overwrite && !g && (m = ra(m.line, Math.min(kf(f, m.line).text.length, m.ch + hg(h).length))));
            var n = a.curOp.updateInput
              , o = {
                from: l,
                to: m,
                text: i ? i[j % i.length] : h,
                origin: e || (g ? "paste" : a.state.cutIncoming ? "cut" : "+input")
            };
            ld(a.doc, o),
            Tf(a, "inputRead", a, o)
        }
        b && !g && Aa(a, b),
        xd(a),
        a.curOp.updateInput = n,
        a.curOp.typing = !0,
        a.state.pasteIncoming = a.state.cutIncoming = !1
    }
    function za(a, b) {
        var c = a.clipboardData && a.clipboardData.getData("text/plain");
        return c ? (a.preventDefault(),
        b.isReadOnly() || b.options.disableInput || gc(b, function() {
            ya(b, c, 0, null, "paste")
        }),
        !0) : void 0
    }
    function Aa(a, b) {
        if (a.options.electricChars && a.options.smartIndent)
            for (var c = a.doc.sel, d = c.ranges.length - 1; d >= 0; d--) {
                var e = c.ranges[d];
                if (!(e.head.ch > 100 || d && c.ranges[d - 1].head.line == e.head.line)) {
                    var f = a.getModeAt(e.head)
                      , g = !1;
                    if (f.electricChars) {
                        for (var h = 0; h < f.electricChars.length; h++)
                            if (b.indexOf(f.electricChars.charAt(h)) > -1) {
                                g = zd(a, e.head.line, "smart");
                                break
                            }
                    } else
                        f.electricInput && f.electricInput.test(kf(a.doc, e.head.line).text.slice(0, e.head.ch)) && (g = zd(a, e.head.line, "smart"));
                    g && Tf(a, "electricInput", a, e.head.line)
                }
            }
    }
    function Ba(a) {
        for (var b = [], c = [], d = 0; d < a.doc.sel.ranges.length; d++) {
            var e = a.doc.sel.ranges[d].head.line
              , f = {
                anchor: ra(e, 0),
                head: ra(e + 1, 0)
            };
            c.push(f),
            b.push(a.getRange(f.anchor, f.head))
        }
        return {
            text: b,
            ranges: c
        }
    }
    function Ca(a) {
        a.setAttribute("autocorrect", "off"),
        a.setAttribute("autocapitalize", "off"),
        a.setAttribute("spellcheck", "false")
    }
    function Da(a) {
        this.cm = a,
        this.prevInput = "",
        this.pollingFast = !1,
        this.polling = new cg,
        this.inaccurateSelection = !1,
        this.hasSelection = !1,
        this.composing = null
    }
    function Ea() {
        var a = vg("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none")
          , b = vg("div", [a], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return h ? a.style.width = "1000px" : a.setAttribute("wrap", "off"),
        o && (a.style.border = "1px solid black"),
        Ca(a),
        b
    }
    function Fa(a) {
        this.cm = a,
        this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
        this.polling = new cg,
        this.gracePeriod = !1
    }
    function Ga(a, b) {
        var c = Ab(a, b.line);
        if (!c || c.hidden)
            return null;
        var d = kf(a.doc, b.line)
          , e = xb(c, d, b.line)
          , f = rf(d)
          , g = "left";
        if (f) {
            var h = ch(f, b.ch);
            g = h % 2 ? "right" : "left"
        }
        var i = Eb(e.map, b.ch, g);
        return i.offset = "right" == i.collapse ? i.end : i.start,
        i
    }
    function Ha(a, b) {
        return b && (a.bad = !0),
        a
    }
    function Ia(a, b, c) {
        var d;
        if (b == a.display.lineDiv) {
            if (d = a.display.lineDiv.childNodes[c],
            !d)
                return Ha(a.clipPos(ra(a.display.viewTo - 1)), !0);
            b = null,
            c = 0
        } else
            for (d = b; ; d = d.parentNode) {
                if (!d || d == a.display.lineDiv)
                    return null;
                if (d.parentNode && d.parentNode == a.display.lineDiv)
                    break
            }
        for (var e = 0; e < a.display.view.length; e++) {
            var f = a.display.view[e];
            if (f.node == d)
                return Ja(f, b, c)
        }
    }
    function Ja(a, b, c) {
        function k(b, c, d) {
            for (var e = -1; e < (j ? j.length : 0); e++)
                for (var f = 0 > e ? i.map : j[e], g = 0; g < f.length; g += 3) {
                    var h = f[g + 2];
                    if (h == b || h == c) {
                        var k = of(0 > e ? a.line : a.rest[e])
                          , l = f[g] + d;
                        return (0 > d || h != b) && (l = f[g + (d ? 1 : 0)]),
                        ra(k, l)
                    }
                }
        }
        var d = a.text.firstChild
          , e = !1;
        if (!b || !zg(d, b))
            return Ha(ra(of(a.line), 0), !0);
        if (b == d && (e = !0,
        b = d.childNodes[c],
        c = 0,
        !b)) {
            var f = a.rest ? hg(a.rest) : a.line;
            return Ha(ra(of(f), f.text.length), e)
        }
        var g = 3 == b.nodeType ? b : null
          , h = b;
        for (g || 1 != b.childNodes.length || 3 != b.firstChild.nodeType || (g = b.firstChild,
        c && (c = g.nodeValue.length)); h.parentNode != d; )
            h = h.parentNode;
        var i = a.measure
          , j = i.maps
          , l = k(g, h, c);
        if (l)
            return Ha(l, e);
        for (var m = h.nextSibling, n = g ? g.nodeValue.length - c : 0; m; m = m.nextSibling) {
            if (l = k(m, m.firstChild, 0))
                return Ha(ra(l.line, l.ch - n), e);
            n += m.textContent.length
        }
        for (var o = h.previousSibling, n = c; o; o = o.previousSibling) {
            if (l = k(o, o.firstChild, -1))
                return Ha(ra(l.line, l.ch + n), e);
            n += m.textContent.length
        }
    }
    function Ka(a, b, c, d, e) {
        function i(a) {
            return function(b) {
                return b.id == a
            }
        }
        function j(b) {
            if (1 == b.nodeType) {
                var c = b.getAttribute("cm-text");
                if (null != c)
                    return "" == c && (c = b.textContent.replace(/\u200b/g, "")),
                    void (f += c);
                var l, k = b.getAttribute("cm-marker");
                if (k) {
                    var m = a.findMarks(ra(d, 0), ra(e + 1, 0), i(+k));
                    return void (m.length && (l = m[0].find()) && (f += lf(a.doc, l.from, l.to).join(h)))
                }
                if ("false" == b.getAttribute("contenteditable"))
                    return;
                for (var n = 0; n < b.childNodes.length; n++)
                    j(b.childNodes[n]);
                /^(pre|div|p)$/i.test(b.nodeName) && (g = !0)
            } else if (3 == b.nodeType) {
                var o = b.nodeValue;
                if (!o)
                    return;
                g && (f += h,
                g = !1),
                f += o
            }
        }
        for (var f = "", g = !1, h = a.doc.lineSeparator(); j(b),
        b != c; )
            b = b.nextSibling;
        return f
    }
    function La(a, b) {
        this.ranges = a,
        this.primIndex = b
    }
    function Ma(a, b) {
        this.anchor = a,
        this.head = b
    }
    function Na(a, b) {
        var c = a[b];
        a.sort(function(a, b) {
            return sa(a.from(), b.from())
        }),
        b = jg(a, c);
        for (var d = 1; d < a.length; d++) {
            var e = a[d]
              , f = a[d - 1];
            if (sa(f.to(), e.from()) >= 0) {
                var g = va(f.from(), e.from())
                  , h = ua(f.to(), e.to())
                  , i = f.empty() ? e.from() == e.head : f.from() == f.head;
                b >= d && --b,
                a.splice(--d, 2, new Ma(i ? h : g,i ? g : h))
            }
        }
        return new La(a,b)
    }
    function Oa(a, b) {
        return new La([new Ma(a,b || a)],0)
    }
    function Pa(a, b) {
        return Math.max(a.first, Math.min(b, a.first + a.size - 1))
    }
    function Qa(a, b) {
        if (b.line < a.first)
            return ra(a.first, 0);
        var c = a.first + a.size - 1;
        return b.line > c ? ra(c, kf(a, c).text.length) : Ra(b, kf(a, b.line).text.length)
    }
    function Ra(a, b) {
        var c = a.ch;
        return null == c || c > b ? ra(a.line, b) : 0 > c ? ra(a.line, 0) : a
    }
    function Sa(a, b) {
        return b >= a.first && b < a.first + a.size
    }
    function Ta(a, b) {
        for (var c = [], d = 0; d < b.length; d++)
            c[d] = Qa(a, b[d]);
        return c
    }
    function Ua(a, b, c, d) {
        if (a.cm && a.cm.display.shift || a.extend) {
            var e = b.anchor;
            if (d) {
                var f = sa(c, e) < 0;
                f != sa(d, e) < 0 ? (e = c,
                c = d) : f != sa(c, d) < 0 && (c = d)
            }
            return new Ma(e,c)
        }
        return new Ma(d || c,c)
    }
    function Va(a, b, c, d) {
        _a(a, new La([Ua(a, a.sel.primary(), b, c)],0), d)
    }
    function Wa(a, b, c) {
        for (var d = [], e = 0; e < a.sel.ranges.length; e++)
            d[e] = Ua(a, a.sel.ranges[e], b[e], null);
        var f = Na(d, a.sel.primIndex);
        _a(a, f, c)
    }
    function Xa(a, b, c, d) {
        var e = a.sel.ranges.slice(0);
        e[b] = c,
        _a(a, Na(e, a.sel.primIndex), d)
    }
    function Ya(a, b, c, d) {
        _a(a, Oa(b, c), d)
    }
    function Za(a, b, c) {
        var d = {
            ranges: b.ranges,
            update: function(b) {
                this.ranges = [];
                for (var c = 0; c < b.length; c++)
                    this.ranges[c] = new Ma(Qa(a, b[c].anchor),Qa(a, b[c].head))
            },
            origin: c && c.origin
        };
        return Rf(a, "beforeSelectionChange", a, d),
        a.cm && Rf(a.cm, "beforeSelectionChange", a.cm, d),
        d.ranges != b.ranges ? Na(d.ranges, d.ranges.length - 1) : b
    }
    function $a(a, b, c) {
        var d = a.history.done
          , e = hg(d);
        e && e.ranges ? (d[d.length - 1] = b,
        ab(a, b, c)) : _a(a, b, c)
    }
    function _a(a, b, c) {
        ab(a, b, c),
        yf(a, a.sel, a.cm ? a.cm.curOp.id : NaN, c)
    }
    function ab(a, b, c) {
        (Xf(a, "beforeSelectionChange") || a.cm && Xf(a.cm, "beforeSelectionChange")) && (b = Za(a, b, c));
        var d = c && c.bias || (sa(b.primary().head, a.sel.primary().head) < 0 ? -1 : 1);
        bb(a, db(a, b, d, !0)),
        c && c.scroll === !1 || !a.cm || xd(a.cm)
    }
    function bb(a, b) {
        b.equals(a.sel) || (a.sel = b,
        a.cm && (a.cm.curOp.updateInput = a.cm.curOp.selectionChanged = !0,
        Wf(a.cm)),
        Tf(a, "cursorActivity", a))
    }
    function cb(a) {
        bb(a, db(a, a.sel, null, !1), _f)
    }
    function db(a, b, c, d) {
        for (var e, f = 0; f < b.ranges.length; f++) {
            var g = b.ranges[f]
              , h = b.ranges.length == a.sel.ranges.length && a.sel.ranges[f]
              , i = fb(a, g.anchor, h && h.anchor, c, d)
              , j = fb(a, g.head, h && h.head, c, d);
            (e || i != g.anchor || j != g.head) && (e || (e = b.ranges.slice(0, f)),
            e[f] = new Ma(i,j))
        }
        return e ? Na(e, b.primIndex) : b
    }
    function eb(a, b, c, d, e) {
        var f = kf(a, b.line);
        if (f.markedSpans)
            for (var g = 0; g < f.markedSpans.length; ++g) {
                var h = f.markedSpans[g]
                  , i = h.marker;
                if ((null == h.from || (i.inclusiveLeft ? h.from <= b.ch : h.from < b.ch)) && (null == h.to || (i.inclusiveRight ? h.to >= b.ch : h.to > b.ch))) {
                    if (e && (Rf(i, "beforeCursorEnter"),
                    i.explicitlyCleared)) {
                        if (f.markedSpans) {
                            --g;
                            continue
                        }
                        break
                    }
                    if (!i.atomic)
                        continue;
                    if (c) {
                        var k, j = i.find(0 > d ? 1 : -1);
                        if ((0 > d ? i.inclusiveRight : i.inclusiveLeft) && (j = gb(a, j, -d, j && j.line == b.line ? f : null)),
                        j && j.line == b.line && (k = sa(j, c)) && (0 > d ? 0 > k : k > 0))
                            return eb(a, j, b, d, e)
                    }
                    var l = i.find(0 > d ? -1 : 1);
                    return (0 > d ? i.inclusiveLeft : i.inclusiveRight) && (l = gb(a, l, d, l.line == b.line ? f : null)),
                    l ? eb(a, l, b, d, e) : null
                }
            }
        return b
    }
    function fb(a, b, c, d, e) {
        var f = d || 1
          , g = eb(a, b, c, f, e) || !e && eb(a, b, c, f, !0) || eb(a, b, c, -f, e) || !e && eb(a, b, c, -f, !0);
        return g ? g : (a.cantEdit = !0,
        ra(a.first, 0))
    }
    function gb(a, b, c, d) {
        return 0 > c && 0 == b.ch ? b.line > a.first ? Qa(a, ra(b.line - 1)) : null : c > 0 && b.ch == (d || kf(a, b.line)).text.length ? b.line < a.first + a.size - 1 ? ra(b.line + 1, 0) : null : new ra(b.line,b.ch + c)
    }
    function hb(a) {
        a.display.input.showSelection(a.display.input.prepareSelection())
    }
    function ib(a, b) {
        for (var c = a.doc, d = {}, e = d.cursors = document.createDocumentFragment(), f = d.selection = document.createDocumentFragment(), g = 0; g < c.sel.ranges.length; g++)
            if (b !== !1 || g != c.sel.primIndex) {
                var h = c.sel.ranges[g];
                if (!(h.from().line >= a.display.viewTo || h.to().line < a.display.viewFrom)) {
                    var i = h.empty();
                    (i || a.options.showCursorWhenSelecting) && jb(a, h.head, e),
                    i || kb(a, h, f)
                }
            }
        return d
    }
    function jb(a, b, c) {
        var d = Pb(a, b, "div", null, null, !a.options.singleCursorHeightPerLine)
          , e = c.appendChild(vg("div", "\xa0", "CodeMirror-cursor"));
        if (e.style.left = d.left + "px",
        e.style.top = d.top + "px",
        e.style.height = Math.max(0, d.bottom - d.top) * a.options.cursorHeight + "px",
        d.other) {
            var f = c.appendChild(vg("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
            f.style.display = "",
            f.style.left = d.other.left + "px",
            f.style.top = d.other.top + "px",
            f.style.height = .85 * (d.other.bottom - d.other.top) + "px"
        }
    }
    function kb(a, b, c) {
        function j(a, b, c, d) {
            0 > b && (b = 0),
            b = Math.round(b),
            d = Math.round(d),
            f.appendChild(vg("div", null, "CodeMirror-selected", "position: absolute; left: " + a + "px; top: " + b + "px; width: " + (null == c ? i - a : c) + "px; height: " + (d - b) + "px"))
        }
        function k(b, c, d) {
            function m(c, d) {
                return Ob(a, ra(b, c), "div", f, d)
            }
            var k, l, f = kf(e, b), g = f.text.length;
            return Ug(rf(f), c || 0, null == d ? g : d, function(a, b, e) {
                var n, o, p, f = m(a, "left");
                if (a == b)
                    n = f,
                    o = p = f.left;
                else {
                    if (n = m(b - 1, "right"),
                    "rtl" == e) {
                        var q = f;
                        f = n,
                        n = q
                    }
                    o = f.left,
                    p = n.right
                }
                null == c && 0 == a && (o = h),
                n.top - f.top > 3 && (j(o, f.top, null, f.bottom),
                o = h,
                f.bottom < n.top && j(o, f.bottom, null, n.top)),
                null == d && b == g && (p = i),
                (!k || f.top < k.top || f.top == k.top && f.left < k.left) && (k = f),
                (!l || n.bottom > l.bottom || n.bottom == l.bottom && n.right > l.right) && (l = n),
                h + 1 > o && (o = h),
                j(o, n.top, p - o, n.bottom)
            }),
            {
                start: k,
                end: l
            }
        }
        var d = a.display
          , e = a.doc
          , f = document.createDocumentFragment()
          , g = sb(a.display)
          , h = g.left
          , i = Math.max(d.sizerWidth, ub(a) - d.sizer.offsetLeft) - g.right
          , l = b.from()
          , m = b.to();
        if (l.line == m.line)
            k(l.line, l.ch, m.ch);
        else {
            var n = kf(e, l.line)
              , o = kf(e, m.line)
              , p = we(n) == we(o)
              , q = k(l.line, l.ch, p ? n.text.length + 1 : null).end
              , r = k(m.line, p ? 0 : null, m.ch).start;
            p && (q.top < r.top - 2 ? (j(q.right, q.top, null, q.bottom),
            j(h, r.top, r.left, r.bottom)) : j(q.right, q.top, r.left - q.right, q.bottom)),
            q.bottom < r.top && j(h, q.bottom, null, r.top)
        }
        c.appendChild(f)
    }
    function lb(a) {
        if (a.state.focused) {
            var b = a.display;
            clearInterval(b.blinker);
            var c = !0;
            b.cursorDiv.style.visibility = "",
            a.options.cursorBlinkRate > 0 ? b.blinker = setInterval(function() {
                b.cursorDiv.style.visibility = (c = !c) ? "" : "hidden"
            }, a.options.cursorBlinkRate) : a.options.cursorBlinkRate < 0 && (b.cursorDiv.style.visibility = "hidden")
        }
    }
    function mb(a, b) {
        a.doc.mode.startState && a.doc.frontier < a.display.viewTo && a.state.highlight.set(b, og(nb, a))
    }
    function nb(a) {
        var b = a.doc;
        if (b.frontier < b.first && (b.frontier = b.first),
        !(b.frontier >= a.display.viewTo)) {
            var c = +new Date + a.options.workTime
              , d = Nd(b.mode, pb(a, b.frontier))
              , e = [];
            b.iter(b.frontier, Math.min(b.first + b.size, a.display.viewTo + 500), function(f) {
                if (b.frontier >= a.display.viewFrom) {
                    var g = f.styles
                      , h = f.text.length > a.options.maxHighlightLength
                      , i = Oe(a, f, h ? Nd(b.mode, d) : d, !0);
                    f.styles = i.styles;
                    var j = f.styleClasses
                      , k = i.classes;
                    k ? f.styleClasses = k : j && (f.styleClasses = null);
                    for (var l = !g || g.length != f.styles.length || j != k && (!j || !k || j.bgClass != k.bgClass || j.textClass != k.textClass), m = 0; !l && m < g.length; ++m)
                        l = g[m] != f.styles[m];
                    l && e.push(b.frontier),
                    f.stateAfter = h ? d : Nd(b.mode, d)
                } else
                    f.text.length <= a.options.maxHighlightLength && Qe(a, f.text, d),
                    f.stateAfter = b.frontier % 5 == 0 ? Nd(b.mode, d) : null;
                return ++b.frontier,
                +new Date > c ? (mb(a, a.options.workDelay),
                !0) : void 0
            }),
            e.length && gc(a, function() {
                for (var b = 0; b < e.length; b++)
                    nc(a, e[b], "text")
            })
        }
    }
    function ob(a, b, c) {
        for (var d, e, f = a.doc, g = c ? -1 : b - (a.doc.mode.innerMode ? 1e3 : 100), h = b; h > g; --h) {
            if (h <= f.first)
                return f.first;
            var i = kf(f, h - 1);
            if (i.stateAfter && (!c || h <= f.frontier))
                return h;
            var j = dg(i.text, null, a.options.tabSize);
            (null == e || d > j) && (e = h - 1,
            d = j)
        }
        return e
    }
    function pb(a, b, c) {
        var d = a.doc
          , e = a.display;
        if (!d.mode.startState)
            return !0;
        var f = ob(a, b, c)
          , g = f > d.first && kf(d, f - 1).stateAfter;
        return g = g ? Nd(d.mode, g) : Od(d.mode),
        d.iter(f, b, function(c) {
            Qe(a, c.text, g);
            var h = f == b - 1 || f % 5 == 0 || f >= e.viewFrom && f < e.viewTo;
            c.stateAfter = h ? Nd(d.mode, g) : null,
            ++f
        }),
        c && (d.frontier = f),
        g
    }
    function qb(a) {
        return a.lineSpace.offsetTop
    }
    function rb(a) {
        return a.mover.offsetHeight - a.lineSpace.offsetHeight
    }
    function sb(a) {
        if (a.cachedPaddingH)
            return a.cachedPaddingH;
        var b = yg(a.measure, vg("pre", "x"))
          , c = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle
          , d = {
            left: parseInt(c.paddingLeft),
            right: parseInt(c.paddingRight)
        };
        return isNaN(d.left) || isNaN(d.right) || (a.cachedPaddingH = d),
        d
    }
    function tb(a) {
        return Zf - a.display.nativeBarWidth
    }
    function ub(a) {
        return a.display.scroller.clientWidth - tb(a) - a.display.barWidth
    }
    function vb(a) {
        return a.display.scroller.clientHeight - tb(a) - a.display.barHeight
    }
    function wb(a, b, c) {
        var d = a.options.lineWrapping
          , e = d && ub(a);
        if (!b.measure.heights || d && b.measure.width != e) {
            var f = b.measure.heights = [];
            if (d) {
                b.measure.width = e;
                for (var g = b.text.firstChild.getClientRects(), h = 0; h < g.length - 1; h++) {
                    var i = g[h]
                      , j = g[h + 1];
                    Math.abs(i.bottom - j.bottom) > 2 && f.push((i.bottom + j.top) / 2 - c.top)
                }
            }
            f.push(c.bottom - c.top)
        }
    }
    function xb(a, b, c) {
        if (a.line == b)
            return {
                map: a.measure.map,
                cache: a.measure.cache
            };
        for (var d = 0; d < a.rest.length; d++)
            if (a.rest[d] == b)
                return {
                    map: a.measure.maps[d],
                    cache: a.measure.caches[d]
                };
        for (var d = 0; d < a.rest.length; d++)
            if (of(a.rest[d]) > c)
                return {
                    map: a.measure.maps[d],
                    cache: a.measure.caches[d],
                    before: !0
                }
    }
    function yb(a, b) {
        b = we(b);
        var c = of(b)
          , d = a.display.externalMeasured = new kc(a.doc,b,c);
        d.lineN = c;
        var e = d.built = Ue(a, d);
        return d.text = e.pre,
        yg(a.display.lineMeasure, e.pre),
        d
    }
    function zb(a, b, c, d) {
        return Cb(a, Bb(a, b), c, d)
    }
    function Ab(a, b) {
        if (b >= a.display.viewFrom && b < a.display.viewTo)
            return a.display.view[pc(a, b)];
        var c = a.display.externalMeasured;
        return c && b >= c.lineN && b < c.lineN + c.size ? c : void 0
    }
    function Bb(a, b) {
        var c = of(b)
          , d = Ab(a, c);
        d && !d.text ? d = null : d && d.changes && (fa(a, d, c, da(a)),
        a.curOp.forceUpdate = !0),
        d || (d = yb(a, b));
        var e = xb(d, b, c);
        return {
            line: b,
            view: d,
            rect: null,
            map: e.map,
            cache: e.cache,
            before: e.before,
            hasHeights: !1
        }
    }
    function Cb(a, b, c, d, e) {
        b.before && (c = -1);
        var g, f = c + (d || "");
        return b.cache.hasOwnProperty(f) ? g = b.cache[f] : (b.rect || (b.rect = b.view.text.getBoundingClientRect()),
        b.hasHeights || (wb(a, b.view, b.rect),
        b.hasHeights = !0),
        g = Fb(a, b, c, d),
        g.bogus || (b.cache[f] = g)),
        {
            left: g.left,
            right: g.right,
            top: e ? g.rtop : g.top,
            bottom: e ? g.rbottom : g.bottom
        }
    }
    function Eb(a, b, c) {
        for (var d, e, f, g, h = 0; h < a.length; h += 3) {
            var i = a[h]
              , j = a[h + 1];
            if (i > b ? (e = 0,
            f = 1,
            g = "left") : j > b ? (e = b - i,
            f = e + 1) : (h == a.length - 3 || b == j && a[h + 3] > b) && (f = j - i,
            e = f - 1,
            b >= j && (g = "right")),
            null != e) {
                if (d = a[h + 2],
                i == j && c == (d.insertLeft ? "left" : "right") && (g = c),
                "left" == c && 0 == e)
                    for (; h && a[h - 2] == a[h - 3] && a[h - 1].insertLeft; )
                        d = a[(h -= 3) + 2],
                        g = "left";
                if ("right" == c && e == j - i)
                    for (; h < a.length - 3 && a[h + 3] == a[h + 4] && !a[h + 5].insertLeft; )
                        d = a[(h += 3) + 2],
                        g = "right";
                break
            }
        }
        return {
            node: d,
            start: e,
            end: f,
            collapse: g,
            coverStart: i,
            coverEnd: j
        }
    }
    function Fb(a, b, c, d) {
        var l, e = Eb(b.map, c, d), h = e.node, i = e.start, j = e.end, k = e.collapse;
        if (3 == h.nodeType) {
            for (var m = 0; 4 > m; m++) {
                for (; i && ug(b.line.text.charAt(e.coverStart + i)); )
                    --i;
                for (; e.coverStart + j < e.coverEnd && ug(b.line.text.charAt(e.coverStart + j)); )
                    ++j;
                if (f && 9 > g && 0 == i && j == e.coverEnd - e.coverStart)
                    l = h.parentNode.getBoundingClientRect();
                else if (f && a.options.lineWrapping) {
                    var n = wg(h, i, j).getClientRects();
                    l = n.length ? n["right" == d ? n.length - 1 : 0] : Db
                } else
                    l = wg(h, i, j).getBoundingClientRect() || Db;
                if (l.left || l.right || 0 == i)
                    break;
                j = i,
                i -= 1,
                k = "right"
            }
            f && 11 > g && (l = Gb(a.display.measure, l))
        } else {
            i > 0 && (k = d = "right");
            var n;
            l = a.options.lineWrapping && (n = h.getClientRects()).length > 1 ? n["right" == d ? n.length - 1 : 0] : h.getBoundingClientRect()
        }
        if (f && 9 > g && !i && (!l || !l.left && !l.right)) {
            var o = h.parentNode.getClientRects()[0];
            l = o ? {
                left: o.left,
                right: o.left + Wb(a.display),
                top: o.top,
                bottom: o.bottom
            } : Db
        }
        for (var p = l.top - b.rect.top, q = l.bottom - b.rect.top, r = (p + q) / 2, s = b.view.measure.heights, m = 0; m < s.length - 1 && !(r < s[m]); m++)
            ;
        var t = m ? s[m - 1] : 0
          , u = s[m]
          , v = {
            left: ("right" == k ? l.right : l.left) - b.rect.left,
            right: ("left" == k ? l.left : l.right) - b.rect.left,
            top: t,
            bottom: u
        };
        return l.left || l.right || (v.bogus = !0),
        a.options.singleCursorHeightPerLine || (v.rtop = p,
        v.rbottom = q),
        v
    }
    function Gb(a, b) {
        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Sg(a))
            return b;
        var c = screen.logicalXDPI / screen.deviceXDPI
          , d = screen.logicalYDPI / screen.deviceYDPI;
        return {
            left: b.left * c,
            right: b.right * c,
            top: b.top * d,
            bottom: b.bottom * d
        }
    }
    function Hb(a) {
        if (a.measure && (a.measure.cache = {},
        a.measure.heights = null,
        a.rest))
            for (var b = 0; b < a.rest.length; b++)
                a.measure.caches[b] = {}
    }
    function Ib(a) {
        a.display.externalMeasure = null,
        xg(a.display.lineMeasure);
        for (var b = 0; b < a.display.view.length; b++)
            Hb(a.display.view[b])
    }
    function Jb(a) {
        Ib(a),
        a.display.cachedCharWidth = a.display.cachedTextHeight = a.display.cachedPaddingH = null,
        a.options.lineWrapping || (a.display.maxLineChanged = !0),
        a.display.lineNumChars = null
    }
    function Kb() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }
    function Lb() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }
    function Mb(a, b, c, d) {
        if (b.widgets)
            for (var e = 0; e < b.widgets.length; ++e)
                if (b.widgets[e].above) {
                    var f = Ee(b.widgets[e]);
                    c.top += f,
                    c.bottom += f
                }
        if ("line" == d)
            return c;
        d || (d = "local");
        var g = qf(b);
        if ("local" == d ? g += qb(a.display) : g -= a.display.viewOffset,
        "page" == d || "window" == d) {
            var h = a.display.lineSpace.getBoundingClientRect();
            g += h.top + ("window" == d ? 0 : Lb());
            var i = h.left + ("window" == d ? 0 : Kb());
            c.left += i,
            c.right += i
        }
        return c.top += g,
        c.bottom += g,
        c
    }
    function Nb(a, b, c) {
        if ("div" == c)
            return b;
        var d = b.left
          , e = b.top;
        if ("page" == c)
            d -= Kb(),
            e -= Lb();
        else if ("local" == c || !c) {
            var f = a.display.sizer.getBoundingClientRect();
            d += f.left,
            e += f.top
        }
        var g = a.display.lineSpace.getBoundingClientRect();
        return {
            left: d - g.left,
            top: e - g.top
        }
    }
    function Ob(a, b, c, d, e) {
        return d || (d = kf(a.doc, b.line)),
        Mb(a, d, zb(a, d, b.ch, e), c)
    }
    function Pb(a, b, c, d, e, f) {
        function g(b, g) {
            var h = Cb(a, e, b, g ? "right" : "left", f);
            return g ? h.left = h.right : h.right = h.left,
            Mb(a, d, h, c)
        }
        function h(a, b) {
            var c = i[b]
              , d = c.level % 2;
            return a == Vg(c) && b && c.level < i[b - 1].level ? (c = i[--b],
            a = Wg(c) - (c.level % 2 ? 0 : 1),
            d = !0) : a == Wg(c) && b < i.length - 1 && c.level < i[b + 1].level && (c = i[++b],
            a = Vg(c) - c.level % 2,
            d = !1),
            d && a == c.to && a > c.from ? g(a - 1) : g(a, d)
        }
        d = d || kf(a.doc, b.line),
        e || (e = Bb(a, d));
        var i = rf(d)
          , j = b.ch;
        if (!i)
            return g(j);
        var k = ch(i, j)
          , l = h(j, k);
        return null != bh && (l.other = h(j, bh)),
        l
    }
    function Qb(a, b) {
        var c = 0
          , b = Qa(a.doc, b);
        a.options.lineWrapping || (c = Wb(a.display) * b.ch);
        var d = kf(a.doc, b.line)
          , e = qf(d) + qb(a.display);
        return {
            left: c,
            right: c,
            top: e,
            bottom: e + d.height
        }
    }
    function Rb(a, b, c, d) {
        var e = ra(a, b);
        return e.xRel = d,
        c && (e.outside = !0),
        e
    }
    function Sb(a, b, c) {
        var d = a.doc;
        if (c += a.display.viewOffset,
        0 > c)
            return Rb(d.first, 0, !0, -1);
        var e = pf(d, c)
          , f = d.first + d.size - 1;
        if (e > f)
            return Rb(d.first + d.size - 1, kf(d, f).text.length, !0, 1);
        0 > b && (b = 0);
        for (var g = kf(d, e); ; ) {
            var h = Tb(a, g, e, b, c)
              , i = ue(g)
              , j = i && i.find(0, !0);
            if (!i || !(h.ch > j.from.ch || h.ch == j.from.ch && h.xRel > 0))
                return h;
            e = of(g = j.to.line)
        }
    }
    function Tb(a, b, c, d, e) {
        function j(d) {
            var e = Pb(a, ra(c, d), "line", b, i);
            return g = !0,
            f > e.bottom ? e.left - h : f < e.top ? e.left + h : (g = !1,
            e.left)
        }
        var f = e - qf(b)
          , g = !1
          , h = 2 * a.display.wrapper.clientWidth
          , i = Bb(a, b)
          , k = rf(b)
          , l = b.text.length
          , m = Xg(b)
          , n = Yg(b)
          , o = j(m)
          , p = g
          , q = j(n)
          , r = g;
        if (d > q)
            return Rb(c, n, r, 1);
        for (; ; ) {
            if (k ? n == m || n == eh(b, m, 1) : 1 >= n - m) {
                for (var s = o > d || q - d >= d - o ? m : n, t = d - (s == m ? o : q); ug(b.text.charAt(s)); )
                    ++s;
                var u = Rb(c, s, s == m ? p : r, -1 > t ? -1 : t > 1 ? 1 : 0);
                return u
            }
            var v = Math.ceil(l / 2)
              , w = m + v;
            if (k) {
                w = m;
                for (var x = 0; v > x; ++x)
                    w = eh(b, w, 1)
            }
            var y = j(w);
            y > d ? (n = w,
            q = y,
            (r = g) && (q += 1e3),
            l = v) : (m = w,
            o = y,
            p = g,
            l -= v)
        }
    }
    function Vb(a) {
        if (null != a.cachedTextHeight)
            return a.cachedTextHeight;
        if (null == Ub) {
            Ub = vg("pre");
            for (var b = 0; 49 > b; ++b)
                Ub.appendChild(document.createTextNode("x")),
                Ub.appendChild(vg("br"));
            Ub.appendChild(document.createTextNode("x"))
        }
        yg(a.measure, Ub);
        var c = Ub.offsetHeight / 50;
        return c > 3 && (a.cachedTextHeight = c),
        xg(a.measure),
        c || 1
    }
    function Wb(a) {
        if (null != a.cachedCharWidth)
            return a.cachedCharWidth;
        var b = vg("span", "xxxxxxxxxx")
          , c = vg("pre", [b]);
        yg(a.measure, c);
        var d = b.getBoundingClientRect()
          , e = (d.right - d.left) / 10;
        return e > 2 && (a.cachedCharWidth = e),
        e || 10
    }
    function Zb(a) {
        a.curOp = {
            cm: a,
            viewChanged: !1,
            startHeight: a.doc.height,
            forceUpdate: !1,
            updateInput: null,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++Yb
        },
        Xb ? Xb.ops.push(a.curOp) : a.curOp.ownsGroup = Xb = {
            ops: [a.curOp],
            delayedCallbacks: []
        }
    }
    function $b(a) {
        var b = a.delayedCallbacks
          , c = 0;
        do {
            for (; c < b.length; c++)
                b[c].call(null);
            for (var d = 0; d < a.ops.length; d++) {
                var e = a.ops[d];
                if (e.cursorActivityHandlers)
                    for (; e.cursorActivityCalled < e.cursorActivityHandlers.length; )
                        e.cursorActivityHandlers[e.cursorActivityCalled++].call(null, e.cm)
            }
        } while (c < b.length)
    }
    function _b(a) {
        var b = a.curOp
          , c = b.ownsGroup;
        if (c)
            try {
                $b(c)
            } finally {
                Xb = null;
                for (var d = 0; d < c.ops.length; d++)
                    c.ops[d].cm.curOp = null;
                ac(c)
            }
    }
    function ac(a) {
        for (var b = a.ops, c = 0; c < b.length; c++)
            bc(b[c]);
        for (var c = 0; c < b.length; c++)
            cc(b[c]);
        for (var c = 0; c < b.length; c++)
            dc(b[c]);
        for (var c = 0; c < b.length; c++)
            ec(b[c]);
        for (var c = 0; c < b.length; c++)
            fc(b[c])
    }
    function bc(a) {
        var b = a.cm
          , c = b.display;
        Y(b),
        a.updateMaxLine && K(b),
        a.mustUpdate = a.viewChanged || a.forceUpdate || null != a.scrollTop || a.scrollToPos && (a.scrollToPos.from.line < c.viewFrom || a.scrollToPos.to.line >= c.viewTo) || c.maxLineChanged && b.options.lineWrapping,
        a.update = a.mustUpdate && new X(b,a.mustUpdate && {
            top: a.scrollTop,
            ensure: a.scrollToPos
        },a.forceUpdate)
    }
    function cc(a) {
        a.updatedDisplay = a.mustUpdate && Z(a.cm, a.update)
    }
    function dc(a) {
        var b = a.cm
          , c = b.display;
        a.updatedDisplay && ba(b),
        a.barMeasure = M(b),
        c.maxLineChanged && !b.options.lineWrapping && (a.adjustWidthTo = zb(b, c.maxLine, c.maxLine.text.length).left + 3,
        b.display.sizerWidth = a.adjustWidthTo,
        a.barMeasure.scrollWidth = Math.max(c.scroller.clientWidth, c.sizer.offsetLeft + a.adjustWidthTo + tb(b) + b.display.barWidth),
        a.maxScrollLeft = Math.max(0, c.sizer.offsetLeft + a.adjustWidthTo - ub(b))),
        (a.updatedDisplay || a.selectionChanged) && (a.preparedSelection = c.input.prepareSelection(a.focus))
    }
    function ec(a) {
        var b = a.cm;
        null != a.adjustWidthTo && (b.display.sizer.style.minWidth = a.adjustWidthTo + "px",
        a.maxScrollLeft < b.doc.scrollLeft && Mc(b, Math.min(b.display.scroller.scrollLeft, a.maxScrollLeft), !0),
        b.display.maxLineChanged = !1);
        var c = a.focus && a.focus == Ag() && (!document.hasFocus || document.hasFocus());
        a.preparedSelection && b.display.input.showSelection(a.preparedSelection, c),
        (a.updatedDisplay || a.startHeight != b.doc.height) && Q(b, a.barMeasure),
        a.updatedDisplay && aa(b, a.barMeasure),
        a.selectionChanged && lb(b),
        b.state.focused && a.updateInput && b.display.input.reset(a.typing),
        c && wa(a.cm)
    }
    function fc(a) {
        var b = a.cm
          , c = b.display
          , d = b.doc;
        if (a.updatedDisplay && $(b, a.update),
        null == c.wheelStartX || null == a.scrollTop && null == a.scrollLeft && !a.scrollToPos || (c.wheelStartX = c.wheelStartY = null),
        null == a.scrollTop || c.scroller.scrollTop == a.scrollTop && !a.forceScroll || (d.scrollTop = Math.max(0, Math.min(c.scroller.scrollHeight - c.scroller.clientHeight, a.scrollTop)),
        c.scrollbars.setScrollTop(d.scrollTop),
        c.scroller.scrollTop = d.scrollTop),
        null == a.scrollLeft || c.scroller.scrollLeft == a.scrollLeft && !a.forceScroll || (d.scrollLeft = Math.max(0, Math.min(c.scroller.scrollWidth - c.scroller.clientWidth, a.scrollLeft)),
        c.scrollbars.setScrollLeft(d.scrollLeft),
        c.scroller.scrollLeft = d.scrollLeft,
        T(b)),
        a.scrollToPos) {
            var e = td(b, Qa(d, a.scrollToPos.from), Qa(d, a.scrollToPos.to), a.scrollToPos.margin);
            a.scrollToPos.isCursor && b.state.focused && sd(b, e)
        }
        var f = a.maybeHiddenMarkers
          , g = a.maybeUnhiddenMarkers;
        if (f)
            for (var h = 0; h < f.length; ++h)
                f[h].lines.length || Rf(f[h], "hide");
        if (g)
            for (var h = 0; h < g.length; ++h)
                g[h].lines.length && Rf(g[h], "unhide");
        c.wrapper.offsetHeight && (d.scrollTop = b.display.scroller.scrollTop),
        a.changeObjs && Rf(b, "changes", b, a.changeObjs),
        a.update && a.update.finish()
    }
    function gc(a, b) {
        if (a.curOp)
            return b();
        Zb(a);
        try {
            return b()
        } finally {
            _b(a)
        }
    }
    function hc(a, b) {
        return function() {
            if (a.curOp)
                return b.apply(a, arguments);
            Zb(a);
            try {
                return b.apply(a, arguments)
            } finally {
                _b(a)
            }
        }
    }
    function ic(a) {
        return function() {
            if (this.curOp)
                return a.apply(this, arguments);
            Zb(this);
            try {
                return a.apply(this, arguments)
            } finally {
                _b(this)
            }
        }
    }
    function jc(a) {
        return function() {
            var b = this.cm;
            if (!b || b.curOp)
                return a.apply(this, arguments);
            Zb(b);
            try {
                return a.apply(this, arguments)
            } finally {
                _b(b)
            }
        }
    }
    function kc(a, b, c) {
        this.line = b,
        this.rest = xe(b),
        this.size = this.rest ? of(hg(this.rest)) - c + 1 : 1,
        this.node = this.text = null,
        this.hidden = Ae(a, b)
    }
    function lc(a, b, c) {
        for (var e, d = [], f = b; c > f; f = e) {
            var g = new kc(a.doc,kf(a.doc, f),f);
            e = f + g.size,
            d.push(g)
        }
        return d
    }
    function mc(a, b, c, d) {
        null == b && (b = a.doc.first),
        null == c && (c = a.doc.first + a.doc.size),
        d || (d = 0);
        var e = a.display;
        if (d && c < e.viewTo && (null == e.updateLineNumbers || e.updateLineNumbers > b) && (e.updateLineNumbers = b),
        a.curOp.viewChanged = !0,
        b >= e.viewTo)
            x && ye(a.doc, b) < e.viewTo && oc(a);
        else if (c <= e.viewFrom)
            x && ze(a.doc, c + d) > e.viewFrom ? oc(a) : (e.viewFrom += d,
            e.viewTo += d);
        else if (b <= e.viewFrom && c >= e.viewTo)
            oc(a);
        else if (b <= e.viewFrom) {
            var f = qc(a, c, c + d, 1);
            f ? (e.view = e.view.slice(f.index),
            e.viewFrom = f.lineN,
            e.viewTo += d) : oc(a)
        } else if (c >= e.viewTo) {
            var f = qc(a, b, b, -1);
            f ? (e.view = e.view.slice(0, f.index),
            e.viewTo = f.lineN) : oc(a)
        } else {
            var g = qc(a, b, b, -1)
              , h = qc(a, c, c + d, 1);
            g && h ? (e.view = e.view.slice(0, g.index).concat(lc(a, g.lineN, h.lineN)).concat(e.view.slice(h.index)),
            e.viewTo += d) : oc(a)
        }
        var i = e.externalMeasured;
        i && (c < i.lineN ? i.lineN += d : b < i.lineN + i.size && (e.externalMeasured = null))
    }
    function nc(a, b, c) {
        a.curOp.viewChanged = !0;
        var d = a.display
          , e = a.display.externalMeasured;
        if (e && b >= e.lineN && b < e.lineN + e.size && (d.externalMeasured = null),
        !(b < d.viewFrom || b >= d.viewTo)) {
            var f = d.view[pc(a, b)];
            if (null != f.node) {
                var g = f.changes || (f.changes = []);
                -1 == jg(g, c) && g.push(c)
            }
        }
    }
    function oc(a) {
        a.display.viewFrom = a.display.viewTo = a.doc.first,
        a.display.view = [],
        a.display.viewOffset = 0
    }
    function pc(a, b) {
        if (b >= a.display.viewTo)
            return null;
        if (b -= a.display.viewFrom,
        0 > b)
            return null;
        for (var c = a.display.view, d = 0; d < c.length; d++)
            if (b -= c[d].size,
            0 > b)
                return d
    }
    function qc(a, b, c, d) {
        var f, e = pc(a, b), g = a.display.view;
        if (!x || c == a.doc.first + a.doc.size)
            return {
                index: e,
                lineN: c
            };
        for (var h = 0, i = a.display.viewFrom; e > h; h++)
            i += g[h].size;
        if (i != b) {
            if (d > 0) {
                if (e == g.length - 1)
                    return null;
                f = i + g[e].size - b,
                e++
            } else
                f = i - b;
            b += f,
            c += f
        }
        for (; ye(a.doc, c) != c; ) {
            if (e == (0 > d ? 0 : g.length - 1))
                return null;
            c += d * g[e - (0 > d ? 1 : 0)].size,
            e += d
        }
        return {
            index: e,
            lineN: c
        }
    }
    function rc(a, b, c) {
        var d = a.display
          , e = d.view;
        0 == e.length || b >= d.viewTo || c <= d.viewFrom ? (d.view = lc(a, b, c),
        d.viewFrom = b) : (d.viewFrom > b ? d.view = lc(a, b, d.viewFrom).concat(d.view) : d.viewFrom < b && (d.view = d.view.slice(pc(a, b))),
        d.viewFrom = b,
        d.viewTo < c ? d.view = d.view.concat(lc(a, d.viewTo, c)) : d.viewTo > c && (d.view = d.view.slice(0, pc(a, c)))),
        d.viewTo = c
    }
    function sc(a) {
        for (var b = a.display.view, c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            e.hidden || e.node && !e.changes || ++c
        }
        return c
    }
    function tc(a) {
        function e() {
            b.activeTouch && (c = setTimeout(function() {
                b.activeTouch = null
            }, 1e3),
            d = b.activeTouch,
            d.end = +new Date)
        }
        function h(a) {
            if (1 != a.touches.length)
                return !1;
            var b = a.touches[0];
            return b.radiusX <= 1 && b.radiusY <= 1
        }
        function i(a, b) {
            if (null == b.left)
                return !0;
            var c = b.left - a.left
              , d = b.top - a.top;
            return c * c + d * d > 400
        }
        var b = a.display;
        Nf(b.scroller, "mousedown", hc(a, yc)),
        f && 11 > g ? Nf(b.scroller, "dblclick", hc(a, function(b) {
            if (!Vf(a, b)) {
                var c = xc(a, b);
                if (c && !Fc(a, b) && !wc(a.display, b)) {
                    Hf(b);
                    var d = a.findWordAt(c);
                    Va(a.doc, d.anchor, d.head)
                }
            }
        })) : Nf(b.scroller, "dblclick", function(b) {
            Vf(a, b) || Hf(b)
        }),
        v || Nf(b.scroller, "contextmenu", function(b) {
            dd(a, b)
        });
        var c, d = {
            end: 0
        };
        Nf(b.scroller, "touchstart", function(e) {
            if (!Vf(a, e) && !h(e)) {
                clearTimeout(c);
                var f = +new Date;
                b.activeTouch = {
                    start: f,
                    moved: !1,
                    prev: f - d.end <= 300 ? d : null
                },
                1 == e.touches.length && (b.activeTouch.left = e.touches[0].pageX,
                b.activeTouch.top = e.touches[0].pageY)
            }
        }),
        Nf(b.scroller, "touchmove", function() {
            b.activeTouch && (b.activeTouch.moved = !0)
        }),
        Nf(b.scroller, "touchend", function(c) {
            var d = b.activeTouch;
            if (d && !wc(b, c) && null != d.left && !d.moved && new Date - d.start < 300) {
                var g, f = a.coordsChar(b.activeTouch, "page");
                g = !d.prev || i(d, d.prev) ? new Ma(f,f) : !d.prev.prev || i(d, d.prev.prev) ? a.findWordAt(f) : new Ma(ra(f.line, 0),Qa(a.doc, ra(f.line + 1, 0))),
                a.setSelection(g.anchor, g.head),
                a.focus(),
                Hf(c)
            }
            e()
        }),
        Nf(b.scroller, "touchcancel", e),
        Nf(b.scroller, "scroll", function() {
            b.scroller.clientHeight && (Lc(a, b.scroller.scrollTop),
            Mc(a, b.scroller.scrollLeft, !0),
            Rf(a, "scroll", a))
        }),
        Nf(b.scroller, "mousewheel", function(b) {
            Qc(a, b)
        }),
        Nf(b.scroller, "DOMMouseScroll", function(b) {
            Qc(a, b)
        }),
        Nf(b.wrapper, "scroll", function() {
            b.wrapper.scrollTop = b.wrapper.scrollLeft = 0
        }),
        b.dragFunctions = {
            enter: function(b) {
                Vf(a, b) || Kf(b)
            },
            over: function(b) {
                Vf(a, b) || (Jc(a, b),
                Kf(b))
            },
            start: function(b) {
                Ic(a, b)
            },
            drop: hc(a, Hc),
            leave: function(b) {
                Vf(a, b) || Kc(a)
            }
        };
        var j = b.input.getField();
        Nf(j, "keyup", function(b) {
            $c.call(a, b)
        }),
        Nf(j, "keydown", hc(a, Yc)),
        Nf(j, "keypress", hc(a, _c)),
        Nf(j, "focus", og(bd, a)),
        Nf(j, "blur", og(cd, a))
    }
    function uc(a, b, c) {
        var d = c && c != y.Init;
        if (!b != !d) {
            var e = a.display.dragFunctions
              , f = b ? Nf : Qf;
            f(a.display.scroller, "dragstart", e.start),
            f(a.display.scroller, "dragenter", e.enter),
            f(a.display.scroller, "dragover", e.over),
            f(a.display.scroller, "dragleave", e.leave),
            f(a.display.scroller, "drop", e.drop)
        }
    }
    function vc(a) {
        var b = a.display;
        (b.lastWrapHeight != b.wrapper.clientHeight || b.lastWrapWidth != b.wrapper.clientWidth) && (b.cachedCharWidth = b.cachedTextHeight = b.cachedPaddingH = null,
        b.scrollbarsClipped = !1,
        a.setSize())
    }
    function wc(a, b) {
        for (var c = Lf(b); c != a.wrapper; c = c.parentNode)
            if (!c || 1 == c.nodeType && "true" == c.getAttribute("cm-ignore-events") || c.parentNode == a.sizer && c != a.mover)
                return !0
    }
    function xc(a, b, c, d) {
        var e = a.display;
        if (!c && "true" == Lf(b).getAttribute("cm-not-content"))
            return null;
        var f, g, h = e.lineSpace.getBoundingClientRect();
        try {
            f = b.clientX - h.left,
            g = b.clientY - h.top
        } catch (b) {
            return null
        }
        var j, i = Sb(a, f, g);
        if (d && 1 == i.xRel && (j = kf(a.doc, i.line).text).length == i.ch) {
            var k = dg(j, j.length, a.options.tabSize) - j.length;
            i = ra(i.line, Math.max(0, Math.round((f - sb(a.display).left) / Wb(a.display)) - k))
        }
        return i
    }
    function yc(a) {
        var b = this
          , c = b.display;
        if (!(Vf(b, a) || c.activeTouch && c.input.supportsTouch())) {
            if (c.shift = a.shiftKey,
            wc(c, a))
                return void (h || (c.scroller.draggable = !1,
                setTimeout(function() {
                    c.scroller.draggable = !0
                }, 100)));
            if (!Fc(b, a)) {
                var d = xc(b, a);
                switch (window.focus(),
                Mf(a)) {
                case 1:
                    b.state.selectingText ? b.state.selectingText(a) : d ? Bc(b, a, d) : Lf(a) == c.scroller && Hf(a);
                    break;
                case 2:
                    h && (b.state.lastMiddleDown = +new Date),
                    d && Va(b.doc, d),
                    setTimeout(function() {
                        c.input.focus()
                    }, 20),
                    Hf(a);
                    break;
                case 3:
                    v ? dd(b, a) : ad(b)
                }
            }
        }
    }
    function Bc(a, b, c) {
        f ? setTimeout(og(wa, a), 0) : a.curOp.focus = Ag();
        var e, d = +new Date;
        Ac && Ac.time > d - 400 && 0 == sa(Ac.pos, c) ? e = "triple" : zc && zc.time > d - 400 && 0 == sa(zc.pos, c) ? (e = "double",
        Ac = {
            time: d,
            pos: c
        }) : (e = "single",
        zc = {
            time: d,
            pos: c
        });
        var i, g = a.doc.sel, h = q ? b.metaKey : b.ctrlKey;
        a.options.dragDrop && Jg && !a.isReadOnly() && "single" == e && (i = g.contains(c)) > -1 && (sa((i = g.ranges[i]).from(), c) < 0 || c.xRel > 0) && (sa(i.to(), c) > 0 || c.xRel < 0) ? Cc(a, b, c, h) : Dc(a, b, c, e, h)
    }
    function Cc(a, b, c, d) {
        var e = a.display
          , i = +new Date
          , j = hc(a, function(k) {
            h && (e.scroller.draggable = !1),
            a.state.draggingText = !1,
            Qf(document, "mouseup", j),
            Qf(e.scroller, "drop", j),
            Math.abs(b.clientX - k.clientX) + Math.abs(b.clientY - k.clientY) < 10 && (Hf(k),
            !d && +new Date - 200 < i && Va(a.doc, c),
            h || f && 9 == g ? setTimeout(function() {
                document.body.focus(),
                e.input.focus()
            }, 20) : e.input.focus())
        });
        h && (e.scroller.draggable = !0),
        a.state.draggingText = j,
        e.scroller.dragDrop && e.scroller.dragDrop(),
        Nf(document, "mouseup", j),
        Nf(e.scroller, "drop", j)
    }
    function Dc(a, b, c, d, e) {
        function o(b) {
            if (0 != sa(n, b))
                if (n = b,
                "rect" == d) {
                    for (var e = [], f = a.options.tabSize, k = dg(kf(g, c.line).text, c.ch, f), l = dg(kf(g, b.line).text, b.ch, f), m = Math.min(k, l), o = Math.max(k, l), p = Math.min(c.line, b.line), q = Math.min(a.lastLine(), Math.max(c.line, b.line)); q >= p; p++) {
                        var r = kf(g, p).text
                          , s = eg(r, m, f);
                        m == o ? e.push(new Ma(ra(p, s),ra(p, s))) : r.length > s && e.push(new Ma(ra(p, s),ra(p, eg(r, o, f))))
                    }
                    e.length || e.push(new Ma(c,c)),
                    _a(g, Na(j.ranges.slice(0, i).concat(e), i), {
                        origin: "*mouse",
                        scroll: !1
                    }),
                    a.scrollIntoView(b)
                } else {
                    var t = h
                      , u = t.anchor
                      , v = b;
                    if ("single" != d) {
                        if ("double" == d)
                            var w = a.findWordAt(b);
                        else
                            var w = new Ma(ra(b.line, 0),Qa(g, ra(b.line + 1, 0)));
                        sa(w.anchor, u) > 0 ? (v = w.head,
                        u = va(t.from(), w.anchor)) : (v = w.anchor,
                        u = ua(t.to(), w.head))
                    }
                    var e = j.ranges.slice(0);
                    e[i] = new Ma(Qa(g, u),v),
                    _a(g, Na(e, i), ag)
                }
        }
        function s(b) {
            var c = ++q
              , e = xc(a, b, !0, "rect" == d);
            if (e)
                if (0 != sa(e, n)) {
                    a.curOp.focus = Ag(),
                    o(e);
                    var h = S(f, g);
                    (e.line >= h.to || e.line < h.from) && setTimeout(hc(a, function() {
                        q == c && s(b)
                    }), 150)
                } else {
                    var i = b.clientY < p.top ? -20 : b.clientY > p.bottom ? 20 : 0;
                    i && setTimeout(hc(a, function() {
                        q == c && (f.scroller.scrollTop += i,
                        s(b))
                    }), 50)
                }
        }
        function t(b) {
            a.state.selectingText = !1,
            q = 1 / 0,
            Hf(b),
            f.input.focus(),
            Qf(document, "mousemove", u),
            Qf(document, "mouseup", v),
            g.history.lastSelOrigin = null
        }
        var f = a.display
          , g = a.doc;
        Hf(b);
        var h, i, j = g.sel, k = j.ranges;
        if (e && !b.shiftKey ? (i = g.sel.contains(c),
        h = i > -1 ? k[i] : new Ma(c,c)) : (h = g.sel.primary(),
        i = g.sel.primIndex),
        r ? b.shiftKey && b.metaKey : b.altKey)
            d = "rect",
            e || (h = new Ma(c,c)),
            c = xc(a, b, !0, !0),
            i = -1;
        else if ("double" == d) {
            var l = a.findWordAt(c);
            h = a.display.shift || g.extend ? Ua(g, h, l.anchor, l.head) : l
        } else if ("triple" == d) {
            var m = new Ma(ra(c.line, 0),Qa(g, ra(c.line + 1, 0)));
            h = a.display.shift || g.extend ? Ua(g, h, m.anchor, m.head) : m
        } else
            h = Ua(g, h, c);
        e ? -1 == i ? (i = k.length,
        _a(g, Na(k.concat([h]), i), {
            scroll: !1,
            origin: "*mouse"
        })) : k.length > 1 && k[i].empty() && "single" == d && !b.shiftKey ? (_a(g, Na(k.slice(0, i).concat(k.slice(i + 1)), 0), {
            scroll: !1,
            origin: "*mouse"
        }),
        j = g.sel) : Xa(g, i, h, ag) : (i = 0,
        _a(g, new La([h],0), ag),
        j = g.sel);
        var n = c
          , p = f.wrapper.getBoundingClientRect()
          , q = 0
          , u = hc(a, function(a) {
            Mf(a) ? s(a) : t(a)
        })
          , v = hc(a, t);
        a.state.selectingText = v,
        Nf(document, "mousemove", u),
        Nf(document, "mouseup", v)
    }
    function Ec(a, b, c, d) {
        try {
            var e = b.clientX
              , f = b.clientY
        } catch (b) {
            return !1
        }
        if (e >= Math.floor(a.display.gutters.getBoundingClientRect().right))
            return !1;
        d && Hf(b);
        var g = a.display
          , h = g.lineDiv.getBoundingClientRect();
        if (f > h.bottom || !Xf(a, c))
            return Jf(b);
        f -= h.top - g.viewOffset;
        for (var i = 0; i < a.options.gutters.length; ++i) {
            var j = g.gutters.childNodes[i];
            if (j && j.getBoundingClientRect().right >= e) {
                var k = pf(a.doc, f)
                  , l = a.options.gutters[i];
                return Rf(a, c, a, k, l, b),
                Jf(b)
            }
        }
    }
    function Fc(a, b) {
        return Ec(a, b, "gutterClick", !0)
    }
    function Hc(a) {
        var b = this;
        if (Kc(b),
        !Vf(b, a) && !wc(b.display, a)) {
            Hf(a),
            f && (Gc = +new Date);
            var c = xc(b, a, !0)
              , d = a.dataTransfer.files;
            if (c && !b.isReadOnly())
                if (d && d.length && window.FileReader && window.File)
                    for (var e = d.length, g = Array(e), h = 0, i = function(a, d) {
                        if (!b.options.allowDropFileTypes || -1 != jg(b.options.allowDropFileTypes, a.type)) {
                            var f = new FileReader;
                            f.onload = hc(b, function() {
                                var a = f.result;
                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(a) && (a = ""),
                                g[d] = a,
                                ++h == e) {
                                    c = Qa(b.doc, c);
                                    var i = {
                                        from: c,
                                        to: c,
                                        text: b.doc.splitLines(g.join(b.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    ld(b.doc, i),
                                    $a(b.doc, Oa(c, fd(i)))
                                }
                            }),
                            f.readAsText(a)
                        }
                    }, j = 0; e > j; ++j)
                        i(d[j], j);
                else {
                    if (b.state.draggingText && b.doc.sel.contains(c) > -1)
                        return b.state.draggingText(a),
                        void setTimeout(function() {
                            b.display.input.focus()
                        }, 20);
                    try {
                        var g = a.dataTransfer.getData("Text");
                        if (g) {
                            if (b.state.draggingText && !(q ? a.altKey : a.ctrlKey))
                                var k = b.listSelections();
                            if (ab(b.doc, Oa(c, c)),
                            k)
                                for (var j = 0; j < k.length; ++j)
                                    rd(b.doc, "", k[j].anchor, k[j].head, "drag");
                            b.replaceSelection(g, "around", "paste"),
                            b.display.input.focus()
                        }
                    } catch (a) {}
                }
        }
    }
    function Ic(a, b) {
        if (f && (!a.state.draggingText || +new Date - Gc < 100))
            return void Kf(b);
        if (!Vf(a, b) && !wc(a.display, b) && (b.dataTransfer.setData("Text", a.getSelection()),
        b.dataTransfer.effectAllowed = "copyMove",
        b.dataTransfer.setDragImage && !l)) {
            var c = vg("img", null, null, "position: fixed; left: 0; top: 0;");
            c.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            k && (c.width = c.height = 1,
            a.display.wrapper.appendChild(c),
            c._top = c.offsetTop),
            b.dataTransfer.setDragImage(c, 0, 0),
            k && c.parentNode.removeChild(c)
        }
    }
    function Jc(a, b) {
        var c = xc(a, b);
        if (c) {
            var d = document.createDocumentFragment();
            jb(a, c, d),
            a.display.dragCursor || (a.display.dragCursor = vg("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
            a.display.lineSpace.insertBefore(a.display.dragCursor, a.display.cursorDiv)),
            yg(a.display.dragCursor, d)
        }
    }
    function Kc(a) {
        a.display.dragCursor && (a.display.lineSpace.removeChild(a.display.dragCursor),
        a.display.dragCursor = null)
    }
    function Lc(a, b) {
        Math.abs(a.doc.scrollTop - b) < 2 || (a.doc.scrollTop = b,
        c || _(a, {
            top: b
        }),
        a.display.scroller.scrollTop != b && (a.display.scroller.scrollTop = b),
        a.display.scrollbars.setScrollTop(b),
        c && _(a),
        mb(a, 100))
    }
    function Mc(a, b, c) {
        (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2) || (b = Math.min(b, a.display.scroller.scrollWidth - a.display.scroller.clientWidth),
        a.doc.scrollLeft = b,
        T(a),
        a.display.scroller.scrollLeft != b && (a.display.scroller.scrollLeft = b),
        a.display.scrollbars.setScrollLeft(b))
    }
    function Qc(a, b) {
        var d = Pc(b)
          , e = d.x
          , f = d.y
          , g = a.display
          , i = g.scroller
          , j = i.scrollWidth > i.clientWidth
          , l = i.scrollHeight > i.clientHeight;
        if (e && j || f && l) {
            if (f && q && h)
                a: for (var m = b.target, n = g.view; m != i; m = m.parentNode)
                    for (var o = 0; o < n.length; o++)
                        if (n[o].node == m) {
                            a.display.currentWheelTarget = m;
                            break a
                        }
            if (e && !c && !k && null != Oc)
                return f && l && Lc(a, Math.max(0, Math.min(i.scrollTop + f * Oc, i.scrollHeight - i.clientHeight))),
                Mc(a, Math.max(0, Math.min(i.scrollLeft + e * Oc, i.scrollWidth - i.clientWidth))),
                (!f || f && l) && Hf(b),
                void (g.wheelStartX = null);
            if (f && null != Oc) {
                var p = f * Oc
                  , r = a.doc.scrollTop
                  , s = r + g.wrapper.clientHeight;
                0 > p ? r = Math.max(0, r + p - 50) : s = Math.min(a.doc.height, s + p + 50),
                _(a, {
                    top: r,
                    bottom: s
                })
            }
            20 > Nc && (null == g.wheelStartX ? (g.wheelStartX = i.scrollLeft,
            g.wheelStartY = i.scrollTop,
            g.wheelDX = e,
            g.wheelDY = f,
            setTimeout(function() {
                if (null != g.wheelStartX) {
                    var a = i.scrollLeft - g.wheelStartX
                      , b = i.scrollTop - g.wheelStartY
                      , c = b && g.wheelDY && b / g.wheelDY || a && g.wheelDX && a / g.wheelDX;
                    g.wheelStartX = g.wheelStartY = null,
                    c && (Oc = (Oc * Nc + c) / (Nc + 1),
                    ++Nc)
                }
            }, 200)) : (g.wheelDX += e,
            g.wheelDY += f))
        }
    }
    function Rc(a, b, c) {
        if ("string" == typeof b && (b = Pd[b],
        !b))
            return !1;
        a.display.input.ensurePolled();
        var d = a.display.shift
          , e = !1;
        try {
            a.isReadOnly() && (a.state.suppressEdits = !0),
            c && (a.display.shift = !1),
            e = b(a) != $f
        } finally {
            a.display.shift = d,
            a.state.suppressEdits = !1
        }
        return e
    }
    function Sc(a, b, c) {
        for (var d = 0; d < a.state.keyMaps.length; d++) {
            var e = Sd(b, a.state.keyMaps[d], c, a);
            if (e)
                return e
        }
        return a.options.extraKeys && Sd(b, a.options.extraKeys, c, a) || Sd(b, a.options.keyMap, c, a)
    }
    function Uc(a, b, c, d) {
        var e = a.state.keySeq;
        if (e) {
            if (Td(b))
                return "handled";
            Tc.set(50, function() {
                a.state.keySeq == e && (a.state.keySeq = null,
                a.display.input.reset())
            }),
            b = e + " " + b
        }
        var f = Sc(a, b, d);
        return "multi" == f && (a.state.keySeq = b),
        "handled" == f && Tf(a, "keyHandled", a, b, c),
        ("handled" == f || "multi" == f) && (Hf(c),
        lb(a)),
        e && !f && /\'$/.test(b) ? (Hf(c),
        !0) : !!f
    }
    function Vc(a, b) {
        var c = Ud(b, !0);
        return c ? b.shiftKey && !a.state.keySeq ? Uc(a, "Shift-" + c, b, function(b) {
            return Rc(a, b, !0)
        }) || Uc(a, c, b, function(b) {
            return ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) ? Rc(a, b) : void 0
        }) : Uc(a, c, b, function(b) {
            return Rc(a, b)
        }) : !1
    }
    function Wc(a, b, c) {
        return Uc(a, "'" + c + "'", b, function(b) {
            return Rc(a, b, !0)
        })
    }
    function Yc(a) {
        var b = this;
        if (b.curOp.focus = Ag(),
        !Vf(b, a)) {
            f && 11 > g && 27 == a.keyCode && (a.returnValue = !1);
            var c = a.keyCode;
            b.display.shift = 16 == c || a.shiftKey;
            var d = Vc(b, a);
            k && (Xc = d ? c : null,
            !d && 88 == c && !Qg && (q ? a.metaKey : a.ctrlKey) && b.replaceSelection("", null, "cut")),
            18 != c || /\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className) || Zc(b)
        }
    }
    function Zc(a) {
        function c(a) {
            18 != a.keyCode && a.altKey || (Cg(b, "CodeMirror-crosshair"),
            Qf(document, "keyup", c),
            Qf(document, "mouseover", c))
        }
        var b = a.display.lineDiv;
        Dg(b, "CodeMirror-crosshair"),
        Nf(document, "keyup", c),
        Nf(document, "mouseover", c)
    }
    function $c(a) {
        16 == a.keyCode && (this.doc.sel.shift = !1),
        Vf(this, a)
    }
    function _c(a) {
        var b = this;
        if (!(wc(b.display, a) || Vf(b, a) || a.ctrlKey && !a.altKey || q && a.metaKey)) {
            var c = a.keyCode
              , d = a.charCode;
            if (k && c == Xc)
                return Xc = null,
                void Hf(a);
            if (!k || a.which && !(a.which < 10) || !Vc(b, a)) {
                var e = String.fromCharCode(null == d ? c : d);
                Wc(b, a, e) || b.display.input.onKeyPress(a)
            }
        }
    }
    function ad(a) {
        a.state.delayingBlurEvent = !0,
        setTimeout(function() {
            a.state.delayingBlurEvent && (a.state.delayingBlurEvent = !1,
            cd(a))
        }, 100)
    }
    function bd(a) {
        a.state.delayingBlurEvent && (a.state.delayingBlurEvent = !1),
        "nocursor" != a.options.readOnly && (a.state.focused || (Rf(a, "focus", a),
        a.state.focused = !0,
        Dg(a.display.wrapper, "CodeMirror-focused"),
        a.curOp || a.display.selForContextMenu == a.doc.sel || (a.display.input.reset(),
        h && setTimeout(function() {
            a.display.input.reset(!0)
        }, 20)),
        a.display.input.receivedFocus()),
        lb(a))
    }
    function cd(a) {
        a.state.delayingBlurEvent || (a.state.focused && (Rf(a, "blur", a),
        a.state.focused = !1,
        Cg(a.display.wrapper, "CodeMirror-focused")),
        clearInterval(a.display.blinker),
        setTimeout(function() {
            a.state.focused || (a.display.shift = !1)
        }, 150))
    }
    function dd(a, b) {
        wc(a.display, b) || ed(a, b) || Vf(a, b, "contextmenu") || a.display.input.onContextMenu(b)
    }
    function ed(a, b) {
        return Xf(a, "gutterContextMenu") ? Ec(a, b, "gutterContextMenu", !1) : !1
    }
    function gd(a, b) {
        if (sa(a, b.from) < 0)
            return a;
        if (sa(a, b.to) <= 0)
            return fd(b);
        var c = a.line + b.text.length - (b.to.line - b.from.line) - 1
          , d = a.ch;
        return a.line == b.to.line && (d += fd(b).ch - b.to.ch),
        ra(c, d)
    }
    function hd(a, b) {
        for (var c = [], d = 0; d < a.sel.ranges.length; d++) {
            var e = a.sel.ranges[d];
            c.push(new Ma(gd(e.anchor, b),gd(e.head, b)))
        }
        return Na(c, a.sel.primIndex)
    }
    function id(a, b, c) {
        return a.line == b.line ? ra(c.line, a.ch - b.ch + c.ch) : ra(c.line + (a.line - b.line), a.ch)
    }
    function jd(a, b, c) {
        for (var d = [], e = ra(a.first, 0), f = e, g = 0; g < b.length; g++) {
            var h = b[g]
              , i = id(h.from, e, f)
              , j = id(fd(h), e, f);
            if (e = h.to,
            f = j,
            "around" == c) {
                var k = a.sel.ranges[g]
                  , l = sa(k.head, k.anchor) < 0;
                d[g] = new Ma(l ? j : i,l ? i : j)
            } else
                d[g] = new Ma(i,i)
        }
        return new La(d,a.sel.primIndex)
    }
    function kd(a, b, c) {
        var d = {
            canceled: !1,
            from: b.from,
            to: b.to,
            text: b.text,
            origin: b.origin,
            cancel: function() {
                this.canceled = !0
            }
        };
        return c && (d.update = function(b, c, d, e) {
            b && (this.from = Qa(a, b)),
            c && (this.to = Qa(a, c)),
            d && (this.text = d),
            void 0 !== e && (this.origin = e)
        }
        ),
        Rf(a, "beforeChange", a, d),
        a.cm && Rf(a.cm, "beforeChange", a.cm, d),
        d.canceled ? null : {
            from: d.from,
            to: d.to,
            text: d.text,
            origin: d.origin
        }
    }
    function ld(a, b, c) {
        if (a.cm) {
            if (!a.cm.curOp)
                return hc(a.cm, ld)(a, b, c);
            if (a.cm.state.suppressEdits)
                return
        }
        if (!(Xf(a, "beforeChange") || a.cm && Xf(a.cm, "beforeChange")) || (b = kd(a, b, !0))) {
            var d = w && !c && me(a, b.from, b.to);
            if (d)
                for (var e = d.length - 1; e >= 0; --e)
                    md(a, {
                        from: d[e].from,
                        to: d[e].to,
                        text: e ? [""] : b.text
                    });
            else
                md(a, b)
        }
    }
    function md(a, b) {
        if (1 != b.text.length || "" != b.text[0] || 0 != sa(b.from, b.to)) {
            var c = hd(a, b);
            wf(a, b, c, a.cm ? a.cm.curOp.id : NaN),
            pd(a, b, c, je(a, b));
            var d = [];
            hf(a, function(a, c) {
                c || -1 != jg(d, a.history) || (Gf(a.history, b),
                d.push(a.history)),
                pd(a, b, null, je(a, b))
            })
        }
    }
    function nd(a, b, c) {
        if (!a.cm || !a.cm.state.suppressEdits) {
            for (var e, d = a.history, f = a.sel, g = "undo" == b ? d.done : d.undone, h = "undo" == b ? d.undone : d.done, i = 0; i < g.length && (e = g[i],
            c ? !e.ranges || e.equals(a.sel) : e.ranges); i++)
                ;
            if (i != g.length) {
                for (d.lastOrigin = d.lastSelOrigin = null; e = g.pop(),
                e.ranges; ) {
                    if (zf(e, h),
                    c && !e.equals(a.sel))
                        return void _a(a, e, {
                            clearRedo: !1
                        });
                    f = e
                }
                var j = [];
                zf(f, h),
                h.push({
                    changes: j,
                    generation: d.generation
                }),
                d.generation = e.generation || ++d.maxGeneration;
                for (var k = Xf(a, "beforeChange") || a.cm && Xf(a.cm, "beforeChange"), i = e.changes.length - 1; i >= 0; --i) {
                    var l = e.changes[i];
                    if (l.origin = b,
                    k && !kd(a, l, !1))
                        return void (g.length = 0);
                    j.push(tf(a, l));
                    var m = i ? hd(a, l) : hg(g);
                    pd(a, l, m, le(a, l)),
                    !i && a.cm && a.cm.scrollIntoView({
                        from: l.from,
                        to: fd(l)
                    });
                    var n = [];
                    hf(a, function(a, b) {
                        b || -1 != jg(n, a.history) || (Gf(a.history, l),
                        n.push(a.history)),
                        pd(a, l, null, le(a, l))
                    })
                }
            }
        }
    }
    function od(a, b) {
        if (0 != b && (a.first += b,
        a.sel = new La(kg(a.sel.ranges, function(a) {
            return new Ma(ra(a.anchor.line + b, a.anchor.ch),ra(a.head.line + b, a.head.ch))
        }),a.sel.primIndex),
        a.cm)) {
            mc(a.cm, a.first, a.first - b, b);
            for (var c = a.cm.display, d = c.viewFrom; d < c.viewTo; d++)
                nc(a.cm, d, "gutter")
        }
    }
    function pd(a, b, c, d) {
        if (a.cm && !a.cm.curOp)
            return hc(a.cm, pd)(a, b, c, d);
        if (b.to.line < a.first)
            return void od(a, b.text.length - 1 - (b.to.line - b.from.line));
        if (!(b.from.line > a.lastLine())) {
            if (b.from.line < a.first) {
                var e = b.text.length - 1 - (a.first - b.from.line);
                od(a, e),
                b = {
                    from: ra(a.first, 0),
                    to: ra(b.to.line + e, b.to.ch),
                    text: [hg(b.text)],
                    origin: b.origin
                }
            }
            var f = a.lastLine();
            b.to.line > f && (b = {
                from: b.from,
                to: ra(f, kf(a, f).text.length),
                text: [b.text[0]],
                origin: b.origin
            }),
            b.removed = lf(a, b.from, b.to),
            c || (c = hd(a, b)),
            a.cm ? qd(a.cm, b, d) : af(a, b, d),
            ab(a, c, _f)
        }
    }
    function qd(a, b, c) {
        var d = a.doc
          , e = a.display
          , f = b.from
          , g = b.to
          , h = !1
          , i = f.line;
        a.options.lineWrapping || (i = of(we(kf(d, f.line))),
        d.iter(i, g.line + 1, function(a) {
            return a == e.maxLine ? (h = !0,
            !0) : void 0
        })),
        d.sel.contains(b.from, b.to) > -1 && Wf(a),
        af(d, b, c, D(a)),
        a.options.lineWrapping || (d.iter(i, f.line + b.text.length, function(a) {
            var b = J(a);
            b > e.maxLineLength && (e.maxLine = a,
            e.maxLineLength = b,
            e.maxLineChanged = !0,
            h = !1)
        }),
        h && (a.curOp.updateMaxLine = !0)),
        d.frontier = Math.min(d.frontier, f.line),
        mb(a, 400);
        var j = b.text.length - (g.line - f.line) - 1;
        b.full ? mc(a) : f.line != g.line || 1 != b.text.length || _e(a.doc, b) ? mc(a, f.line, g.line + 1, j) : nc(a, f.line, "text");
        var k = Xf(a, "changes")
          , l = Xf(a, "change");
        if (l || k) {
            var m = {
                from: f,
                to: g,
                text: b.text,
                removed: b.removed,
                origin: b.origin
            };
            l && Tf(a, "change", a, m),
            k && (a.curOp.changeObjs || (a.curOp.changeObjs = [])).push(m)
        }
        a.display.selForContextMenu = null
    }
    function rd(a, b, c, d, e) {
        if (d || (d = c),
        sa(d, c) < 0) {
            var f = d;
            d = c,
            c = f
        }
        "string" == typeof b && (b = a.splitLines(b)),
        ld(a, {
            from: c,
            to: d,
            text: b,
            origin: e
        })
    }
    function sd(a, b) {
        if (!Vf(a, "scrollCursorIntoView")) {
            var c = a.display
              , d = c.sizer.getBoundingClientRect()
              , e = null;
            if (b.top + d.top < 0 ? e = !0 : b.bottom + d.top > (window.innerHeight || document.documentElement.clientHeight) && (e = !1),
            null != e && !n) {
                var f = vg("div", "\u200b", null, "position: absolute; top: " + (b.top - c.viewOffset - qb(a.display)) + "px; height: " + (b.bottom - b.top + tb(a) + c.barHeight) + "px; left: " + b.left + "px; width: 2px;");
                a.display.lineSpace.appendChild(f),
                f.scrollIntoView(e),
                a.display.lineSpace.removeChild(f)
            }
        }
    }
    function td(a, b, c, d) {
        null == d && (d = 0);
        for (var e = 0; 5 > e; e++) {
            var f = !1
              , g = Pb(a, b)
              , h = c && c != b ? Pb(a, c) : g
              , i = vd(a, Math.min(g.left, h.left), Math.min(g.top, h.top) - d, Math.max(g.left, h.left), Math.max(g.bottom, h.bottom) + d)
              , j = a.doc.scrollTop
              , k = a.doc.scrollLeft;
            if (null != i.scrollTop && (Lc(a, i.scrollTop),
            Math.abs(a.doc.scrollTop - j) > 1 && (f = !0)),
            null != i.scrollLeft && (Mc(a, i.scrollLeft),
            Math.abs(a.doc.scrollLeft - k) > 1 && (f = !0)),
            !f)
                break
        }
        return g
    }
    function ud(a, b, c, d, e) {
        var f = vd(a, b, c, d, e);
        null != f.scrollTop && Lc(a, f.scrollTop),
        null != f.scrollLeft && Mc(a, f.scrollLeft)
    }
    function vd(a, b, c, d, e) {
        var f = a.display
          , g = Vb(a.display);
        0 > c && (c = 0);
        var h = a.curOp && null != a.curOp.scrollTop ? a.curOp.scrollTop : f.scroller.scrollTop
          , i = vb(a)
          , j = {};
        e - c > i && (e = c + i);
        var k = a.doc.height + rb(f)
          , l = g > c
          , m = e > k - g;
        if (h > c)
            j.scrollTop = l ? 0 : c;
        else if (e > h + i) {
            var n = Math.min(c, (m ? k : e) - i);
            n != h && (j.scrollTop = n)
        }
        var o = a.curOp && null != a.curOp.scrollLeft ? a.curOp.scrollLeft : f.scroller.scrollLeft
          , p = ub(a) - (a.options.fixedGutter ? f.gutters.offsetWidth : 0)
          , q = d - b > p;
        return q && (d = b + p),
        10 > b ? j.scrollLeft = 0 : o > b ? j.scrollLeft = Math.max(0, b - (q ? 0 : 10)) : d > p + o - 3 && (j.scrollLeft = d + (q ? 0 : 10) - p),
        j
    }
    function wd(a, b, c) {
        (null != b || null != c) && yd(a),
        null != b && (a.curOp.scrollLeft = (null == a.curOp.scrollLeft ? a.doc.scrollLeft : a.curOp.scrollLeft) + b),
        null != c && (a.curOp.scrollTop = (null == a.curOp.scrollTop ? a.doc.scrollTop : a.curOp.scrollTop) + c)
    }
    function xd(a) {
        yd(a);
        var b = a.getCursor()
          , c = b
          , d = b;
        a.options.lineWrapping || (c = b.ch ? ra(b.line, b.ch - 1) : b,
        d = ra(b.line, b.ch + 1)),
        a.curOp.scrollToPos = {
            from: c,
            to: d,
            margin: a.options.cursorScrollMargin,
            isCursor: !0
        }
    }
    function yd(a) {
        var b = a.curOp.scrollToPos;
        if (b) {
            a.curOp.scrollToPos = null;
            var c = Qb(a, b.from)
              , d = Qb(a, b.to)
              , e = vd(a, Math.min(c.left, d.left), Math.min(c.top, d.top) - b.margin, Math.max(c.right, d.right), Math.max(c.bottom, d.bottom) + b.margin);
            a.scrollTo(e.scrollLeft, e.scrollTop)
        }
    }
    function zd(a, b, c, d) {
        var f, e = a.doc;
        null == c && (c = "add"),
        "smart" == c && (e.mode.indent ? f = pb(a, b) : c = "prev");
        var g = a.options.tabSize
          , h = kf(e, b)
          , i = dg(h.text, null, g);
        h.stateAfter && (h.stateAfter = null);
        var k, j = h.text.match(/^\s*/)[0];
        if (d || /\S/.test(h.text)) {
            if ("smart" == c && (k = e.mode.indent(f, h.text.slice(j.length), h.text),
            k == $f || k > 150)) {
                if (!d)
                    return;
                c = "prev"
            }
        } else
            k = 0,
            c = "not";
        "prev" == c ? k = b > e.first ? dg(kf(e, b - 1).text, null, g) : 0 : "add" == c ? k = i + a.options.indentUnit : "subtract" == c ? k = i - a.options.indentUnit : "number" == typeof c && (k = i + c),
        k = Math.max(0, k);
        var l = ""
          , m = 0;
        if (a.options.indentWithTabs)
            for (var n = Math.floor(k / g); n; --n)
                m += g,
                l += "	";
        if (k > m && (l += gg(k - m)),
        l != j)
            return rd(e, l, ra(b, 0), ra(b, j.length), "+input"),
            h.stateAfter = null,
            !0;
        for (var n = 0; n < e.sel.ranges.length; n++) {
            var o = e.sel.ranges[n];
            if (o.head.line == b && o.head.ch < j.length) {
                var m = ra(b, j.length);
                Xa(e, n, new Ma(m,m));
                break
            }
        }
    }
    function Ad(a, b, c, d) {
        var e = b
          , f = b;
        return "number" == typeof b ? f = kf(a, Pa(a, b)) : e = of(b),
        null == e ? null : (d(f, e) && a.cm && nc(a.cm, e, c),
        f)
    }
    function Bd(a, b) {
        for (var c = a.doc.sel.ranges, d = [], e = 0; e < c.length; e++) {
            for (var f = b(c[e]); d.length && sa(f.from, hg(d).to) <= 0; ) {
                var g = d.pop();
                if (sa(g.from, f.from) < 0) {
                    f.from = g.from;
                    break
                }
            }
            d.push(f)
        }
        gc(a, function() {
            for (var b = d.length - 1; b >= 0; b--)
                rd(a.doc, "", d[b].from, d[b].to, "+delete");
            xd(a)
        })
    }
    function Cd(a, b, c, d, e) {
        function j() {
            var b = f + c;
            return b < a.first || b >= a.first + a.size ? !1 : (f = b,
            i = kf(a, b))
        }
        function k(a) {
            var b = (e ? eh : fh)(i, g, c, !0);
            if (null == b) {
                if (a || !j())
                    return !1;
                g = e ? (0 > c ? Yg : Xg)(i) : 0 > c ? i.text.length : 0
            } else
                g = b;
            return !0
        }
        var f = b.line
          , g = b.ch
          , h = c
          , i = kf(a, f);
        if ("char" == d)
            k();
        else if ("column" == d)
            k(!0);
        else if ("word" == d || "group" == d)
            for (var l = null, m = "group" == d, n = a.cm && a.cm.getHelper(b, "wordChars"), o = !0; !(0 > c) || k(!o); o = !1) {
                var p = i.text.charAt(g) || "\n"
                  , q = rg(p, n) ? "w" : m && "\n" == p ? "n" : !m || /\s/.test(p) ? null : "p";
                if (!m || o || q || (q = "s"),
                l && l != q) {
                    0 > c && (c = 1,
                    k());
                    break
                }
                if (q && (l = q),
                c > 0 && !k(!o))
                    break
            }
        var r = fb(a, ra(f, g), b, h, !0);
        return sa(b, r) || (r.hitSide = !0),
        r
    }
    function Dd(a, b, c, d) {
        var g, e = a.doc, f = b.left;
        if ("page" == d) {
            var h = Math.min(a.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            g = b.top + c * (h - (0 > c ? 1.5 : .5) * Vb(a.display))
        } else
            "line" == d && (g = c > 0 ? b.bottom + 3 : b.top - 3);
        for (; ; ) {
            var i = Sb(a, f, g);
            if (!i.outside)
                break;
            if (0 > c ? 0 >= g : g >= e.height) {
                i.hitSide = !0;
                break
            }
            g += 5 * c
        }
        return i
    }
    function Gd(a, b, c, d) {
        y.defaults[a] = b,
        c && (Fd[a] = d ? function(a, b, d) {
            d != Hd && c(a, b, d)
        }
        : c)
    }
    function Rd(a) {
        for (var c, d, e, f, b = a.split(/-(?!$)/), a = b[b.length - 1], g = 0; g < b.length - 1; g++) {
            var h = b[g];
            if (/^(cmd|meta|m)$/i.test(h))
                f = !0;
            else if (/^a(lt)?$/i.test(h))
                c = !0;
            else if (/^(c|ctrl|control)$/i.test(h))
                d = !0;
            else {
                if (!/^s(hift)$/i.test(h))
                    throw new Error("Unrecognized modifier name: " + h);
                e = !0
            }
        }
        return c && (a = "Alt-" + a),
        d && (a = "Ctrl-" + a),
        f && (a = "Cmd-" + a),
        e && (a = "Shift-" + a),
        a
    }
    function Vd(a) {
        return "string" == typeof a ? Qd[a] : a
    }
    function Zd(a, b, c, d, e) {
        if (d && d.shared)
            return _d(a, b, c, d, e);
        if (a.cm && !a.cm.curOp)
            return hc(a.cm, Zd)(a, b, c, d, e);
        var f = new Yd(a,e)
          , g = sa(b, c);
        if (d && ng(d, f, !1),
        g > 0 || 0 == g && f.clearWhenEmpty !== !1)
            return f;
        if (f.replacedWith && (f.collapsed = !0,
        f.widgetNode = vg("span", [f.replacedWith], "CodeMirror-widget"),
        d.handleMouseEvents || f.widgetNode.setAttribute("cm-ignore-events", "true"),
        d.insertLeft && (f.widgetNode.insertLeft = !0)),
        f.collapsed) {
            if (ve(a, b.line, b, c, f) || b.line != c.line && ve(a, c.line, b, c, f))
                throw new Error("Inserting collapsed marker partially overlapping an existing one");
            x = !0
        }
        f.addToHistory && wf(a, {
            from: b,
            to: c,
            origin: "markText"
        }, a.sel, NaN);
        var j, h = b.line, i = a.cm;
        if (a.iter(h, c.line + 1, function(a) {
            i && f.collapsed && !i.options.lineWrapping && we(a) == i.display.maxLine && (j = !0),
            f.collapsed && h != b.line && nf(a, 0),
            ge(a, new de(f,h == b.line ? b.ch : null,h == c.line ? c.ch : null)),
            ++h
        }),
        f.collapsed && a.iter(b.line, c.line + 1, function(b) {
            Ae(a, b) && nf(b, 0)
        }),
        f.clearOnEnter && Nf(f, "beforeCursorEnter", function() {
            f.clear()
        }),
        f.readOnly && (w = !0,
        (a.history.done.length || a.history.undone.length) && a.clearHistory()),
        f.collapsed && (f.id = ++Xd,
        f.atomic = !0),
        i) {
            if (j && (i.curOp.updateMaxLine = !0),
            f.collapsed)
                mc(i, b.line, c.line + 1);
            else if (f.className || f.title || f.startStyle || f.endStyle || f.css)
                for (var k = b.line; k <= c.line; k++)
                    nc(i, k, "text");
            f.atomic && cb(i.doc),
            Tf(i, "markerAdded", i, f)
        }
        return f
    }
    function _d(a, b, c, d, e) {
        d = ng(d),
        d.shared = !1;
        var f = [Zd(a, b, c, d, e)]
          , g = f[0]
          , h = d.widgetNode;
        return hf(a, function(a) {
            h && (d.widgetNode = h.cloneNode(!0)),
            f.push(Zd(a, Qa(a, b), Qa(a, c), d, e));
            for (var i = 0; i < a.linked.length; ++i)
                if (a.linked[i].isParent)
                    return;
            g = hg(f)
        }),
        new $d(f,g)
    }
    function ae(a) {
        return a.findMarks(ra(a.first, 0), a.clipPos(ra(a.lastLine())), function(a) {
            return a.parent
        })
    }
    function be(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c]
              , e = d.find()
              , f = a.clipPos(e.from)
              , g = a.clipPos(e.to);
            if (sa(f, g)) {
                var h = Zd(a, f, g, d.primary, d.primary.type);
                d.markers.push(h),
                h.parent = d
            }
        }
    }
    function ce(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b]
              , d = [c.primary.doc];
            hf(c.primary.doc, function(a) {
                d.push(a)
            });
            for (var e = 0; e < c.markers.length; e++) {
                var f = c.markers[e];
                -1 == jg(d, f.doc) && (f.parent = null,
                c.markers.splice(e--, 1))
            }
        }
    }
    function de(a, b, c) {
        this.marker = a,
        this.from = b,
        this.to = c
    }
    function ee(a, b) {
        if (a)
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d.marker == b)
                    return d
            }
    }
    function fe(a, b) {
        for (var c, d = 0; d < a.length; ++d)
            a[d] != b && (c || (c = [])).push(a[d]);
        return c
    }
    function ge(a, b) {
        a.markedSpans = a.markedSpans ? a.markedSpans.concat([b]) : [b],
        b.marker.attachLine(a)
    }
    function he(a, b, c) {
        if (a)
            for (var e, d = 0; d < a.length; ++d) {
                var f = a[d]
                  , g = f.marker
                  , h = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                if (h || f.from == b && "bookmark" == g.type && (!c || !f.marker.insertLeft)) {
                    var i = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                    (e || (e = [])).push(new de(g,f.from,i ? null : f.to))
                }
            }
        return e
    }
    function ie(a, b, c) {
        if (a)
            for (var e, d = 0; d < a.length; ++d) {
                var f = a[d]
                  , g = f.marker
                  , h = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                if (h || f.from == b && "bookmark" == g.type && (!c || f.marker.insertLeft)) {
                    var i = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                    (e || (e = [])).push(new de(g,i ? null : f.from - b,null == f.to ? null : f.to - b))
                }
            }
        return e
    }
    function je(a, b) {
        if (b.full)
            return null;
        var c = Sa(a, b.from.line) && kf(a, b.from.line).markedSpans
          , d = Sa(a, b.to.line) && kf(a, b.to.line).markedSpans;
        if (!c && !d)
            return null;
        var e = b.from.ch
          , f = b.to.ch
          , g = 0 == sa(b.from, b.to)
          , h = he(c, e, g)
          , i = ie(d, f, g)
          , j = 1 == b.text.length
          , k = hg(b.text).length + (j ? e : 0);
        if (h)
            for (var l = 0; l < h.length; ++l) {
                var m = h[l];
                if (null == m.to) {
                    var n = ee(i, m.marker);
                    n ? j && (m.to = null == n.to ? null : n.to + k) : m.to = e
                }
            }
        if (i)
            for (var l = 0; l < i.length; ++l) {
                var m = i[l];
                if (null != m.to && (m.to += k),
                null == m.from) {
                    var n = ee(h, m.marker);
                    n || (m.from = k,
                    j && (h || (h = [])).push(m))
                } else
                    m.from += k,
                    j && (h || (h = [])).push(m)
            }
        h && (h = ke(h)),
        i && i != h && (i = ke(i));
        var o = [h];
        if (!j) {
            var q, p = b.text.length - 2;
            if (p > 0 && h)
                for (var l = 0; l < h.length; ++l)
                    null == h[l].to && (q || (q = [])).push(new de(h[l].marker,null,null));
            for (var l = 0; p > l; ++l)
                o.push(q);
            o.push(i)
        }
        return o
    }
    function ke(a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            null != c.from && c.from == c.to && c.marker.clearWhenEmpty !== !1 && a.splice(b--, 1)
        }
        return a.length ? a : null
    }
    function le(a, b) {
        var c = Cf(a, b)
          , d = je(a, b);
        if (!c)
            return d;
        if (!d)
            return c;
        for (var e = 0; e < c.length; ++e) {
            var f = c[e]
              , g = d[e];
            if (f && g)
                a: for (var h = 0; h < g.length; ++h) {
                    for (var i = g[h], j = 0; j < f.length; ++j)
                        if (f[j].marker == i.marker)
                            continue a;
                    f.push(i)
                }
            else
                g && (c[e] = g)
        }
        return c
    }
    function me(a, b, c) {
        var d = null;
        if (a.iter(b.line, c.line + 1, function(a) {
            if (a.markedSpans)
                for (var b = 0; b < a.markedSpans.length; ++b) {
                    var c = a.markedSpans[b].marker;
                    !c.readOnly || d && -1 != jg(d, c) || (d || (d = [])).push(c)
                }
        }),
        !d)
            return null;
        for (var e = [{
            from: b,
            to: c
        }], f = 0; f < d.length; ++f)
            for (var g = d[f], h = g.find(0), i = 0; i < e.length; ++i) {
                var j = e[i];
                if (!(sa(j.to, h.from) < 0 || sa(j.from, h.to) > 0)) {
                    var k = [i, 1]
                      , l = sa(j.from, h.from)
                      , m = sa(j.to, h.to);
                    (0 > l || !g.inclusiveLeft && !l) && k.push({
                        from: j.from,
                        to: h.from
                    }),
                    (m > 0 || !g.inclusiveRight && !m) && k.push({
                        from: h.to,
                        to: j.to
                    }),
                    e.splice.apply(e, k),
                    i += k.length - 1
                }
            }
        return e
    }
    function ne(a) {
        var b = a.markedSpans;
        if (b) {
            for (var c = 0; c < b.length; ++c)
                b[c].marker.detachLine(a);
            a.markedSpans = null
        }
    }
    function oe(a, b) {
        if (b) {
            for (var c = 0; c < b.length; ++c)
                b[c].marker.attachLine(a);
            a.markedSpans = b
        }
    }
    function pe(a) {
        return a.inclusiveLeft ? -1 : 0
    }
    function qe(a) {
        return a.inclusiveRight ? 1 : 0
    }
    function re(a, b) {
        var c = a.lines.length - b.lines.length;
        if (0 != c)
            return c;
        var d = a.find()
          , e = b.find()
          , f = sa(d.from, e.from) || pe(a) - pe(b);
        if (f)
            return -f;
        var g = sa(d.to, e.to) || qe(a) - qe(b);
        return g ? g : b.id - a.id
    }
    function se(a, b) {
        var d, c = x && a.markedSpans;
        if (c)
            for (var e, f = 0; f < c.length; ++f)
                e = c[f],
                e.marker.collapsed && null == (b ? e.from : e.to) && (!d || re(d, e.marker) < 0) && (d = e.marker);
        return d
    }
    function te(a) {
        return se(a, !0)
    }
    function ue(a) {
        return se(a, !1)
    }
    function ve(a, b, c, d, e) {
        var f = kf(a, b)
          , g = x && f.markedSpans;
        if (g)
            for (var h = 0; h < g.length; ++h) {
                var i = g[h];
                if (i.marker.collapsed) {
                    var j = i.marker.find(0)
                      , k = sa(j.from, c) || pe(i.marker) - pe(e)
                      , l = sa(j.to, d) || qe(i.marker) - qe(e);
                    if (!(k >= 0 && 0 >= l || 0 >= k && l >= 0) && (0 >= k && (i.marker.inclusiveRight && e.inclusiveLeft ? sa(j.to, c) >= 0 : sa(j.to, c) > 0) || k >= 0 && (i.marker.inclusiveRight && e.inclusiveLeft ? sa(j.from, d) <= 0 : sa(j.from, d) < 0)))
                        return !0
                }
            }
    }
    function we(a) {
        for (var b; b = te(a); )
            a = b.find(-1, !0).line;
        return a
    }
    function xe(a) {
        for (var b, c; b = ue(a); )
            a = b.find(1, !0).line,
            (c || (c = [])).push(a);
        return c
    }
    function ye(a, b) {
        var c = kf(a, b)
          , d = we(c);
        return c == d ? b : of(d)
    }
    function ze(a, b) {
        if (b > a.lastLine())
            return b;
        var d, c = kf(a, b);
        if (!Ae(a, c))
            return b;
        for (; d = ue(c); )
            c = d.find(1, !0).line;
        return of(c) + 1
    }
    function Ae(a, b) {
        var c = x && b.markedSpans;
        if (c)
            for (var d, e = 0; e < c.length; ++e)
                if (d = c[e],
                d.marker.collapsed) {
                    if (null == d.from)
                        return !0;
                    if (!d.marker.widgetNode && 0 == d.from && d.marker.inclusiveLeft && Be(a, b, d))
                        return !0
                }
    }
    function Be(a, b, c) {
        if (null == c.to) {
            var d = c.marker.find(1, !0);
            return Be(a, d.line, ee(d.line.markedSpans, c.marker))
        }
        if (c.marker.inclusiveRight && c.to == b.text.length)
            return !0;
        for (var e, f = 0; f < b.markedSpans.length; ++f)
            if (e = b.markedSpans[f],
            e.marker.collapsed && !e.marker.widgetNode && e.from == c.to && (null == e.to || e.to != c.from) && (e.marker.inclusiveLeft || c.marker.inclusiveRight) && Be(a, b, e))
                return !0
    }
    function De(a, b, c) {
        qf(b) < (a.curOp && a.curOp.scrollTop || a.doc.scrollTop) && wd(a, null, c)
    }
    function Ee(a) {
        if (null != a.height)
            return a.height;
        var b = a.doc.cm;
        if (!b)
            return 0;
        if (!zg(document.body, a.node)) {
            var c = "position: relative;";
            a.coverGutter && (c += "margin-left: -" + b.display.gutters.offsetWidth + "px;"),
            a.noHScroll && (c += "width: " + b.display.wrapper.clientWidth + "px;"),
            yg(b.display.measure, vg("div", [a.node], null, c))
        }
        return a.height = a.node.parentNode.offsetHeight
    }
    function Fe(a, b, c, d) {
        var e = new Ce(a,c,d)
          , f = a.cm;
        return f && e.noHScroll && (f.display.alignWidgets = !0),
        Ad(a, b, "widget", function(b) {
            var c = b.widgets || (b.widgets = []);
            if (null == e.insertAt ? c.push(e) : c.splice(Math.min(c.length - 1, Math.max(0, e.insertAt)), 0, e),
            e.line = b,
            f && !Ae(a, b)) {
                var d = qf(b) < a.scrollTop;
                nf(b, b.height + Ee(e)),
                d && wd(f, null, e.height),
                f.curOp.forceUpdate = !0
            }
            return !0
        }),
        e
    }
    function He(a, b, c, d) {
        a.text = b,
        a.stateAfter && (a.stateAfter = null),
        a.styles && (a.styles = null),
        null != a.order && (a.order = null),
        ne(a),
        oe(a, c);
        var e = d ? d(a) : 1;
        e != a.height && nf(a, e)
    }
    function Ie(a) {
        a.parent = null,
        ne(a)
    }
    function Je(a, b) {
        if (a)
            for (; ; ) {
                var c = a.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!c)
                    break;
                a = a.slice(0, c.index) + a.slice(c.index + c[0].length);
                var d = c[1] ? "bgClass" : "textClass";
                null == b[d] ? b[d] = c[2] : new RegExp("(?:^|s)" + c[2] + "(?:$|s)").test(b[d]) || (b[d] += " " + c[2])
            }
        return a
    }
    function Ke(a, b) {
        if (a.blankLine)
            return a.blankLine(b);
        if (a.innerMode) {
            var c = y.innerMode(a, b);
            return c.mode.blankLine ? c.mode.blankLine(c.state) : void 0
        }
    }
    function Le(a, b, c, d) {
        for (var e = 0; 10 > e; e++) {
            d && (d[0] = y.innerMode(a, c).mode);
            var f = a.token(b, c);
            if (b.pos > b.start)
                return f
        }
        throw new Error("Mode " + a.name + " failed to advance stream.")
    }
    function Me(a, b, c, d) {
        function e(a) {
            return {
                start: k.start,
                end: k.pos,
                string: k.current(),
                type: h || null,
                state: a ? Nd(f.mode, j) : j
            }
        }
        var h, f = a.doc, g = f.mode;
        b = Qa(f, b);
        var l, i = kf(f, b.line), j = pb(a, b.line, c), k = new Wd(i.text,a.options.tabSize);
        for (d && (l = []); (d || k.pos < b.ch) && !k.eol(); )
            k.start = k.pos,
            h = Le(g, k, j),
            d && l.push(e(!0));
        return d ? l : e()
    }
    function Ne(a, b, c, d, e, f, g) {
        var h = c.flattenSpans;
        null == h && (h = a.options.flattenSpans);
        var l, i = 0, j = null, k = new Wd(b,a.options.tabSize), m = a.options.addModeClass && [null];
        for ("" == b && Je(Ke(c, d), f); !k.eol(); ) {
            if (k.pos > a.options.maxHighlightLength ? (h = !1,
            g && Qe(a, b, d, k.pos),
            k.pos = b.length,
            l = null) : l = Je(Le(c, k, d, m), f),
            m) {
                var n = m[0].name;
                n && (l = "m-" + (l ? n + " " + l : n))
            }
            if (!h || j != l) {
                for (; i < k.start; )
                    i = Math.min(k.start, i + 5e4),
                    e(i, j);
                j = l
            }
            k.start = k.pos
        }
        for (; i < k.pos; ) {
            var o = Math.min(k.pos, i + 5e4);
            e(o, j),
            i = o
        }
    }
    function Oe(a, b, c, d) {
        var e = [a.state.modeGen]
          , f = {};
        Ne(a, b.text, a.doc.mode, c, function(a, b) {
            e.push(a, b)
        }, f, d);
        for (var g = 0; g < a.state.overlays.length; ++g) {
            var h = a.state.overlays[g]
              , i = 1
              , j = 0;
            Ne(a, b.text, h.mode, !0, function(a, b) {
                for (var c = i; a > j; ) {
                    var d = e[i];
                    d > a && e.splice(i, 1, a, e[i + 1], d),
                    i += 2,
                    j = Math.min(a, d)
                }
                if (b)
                    if (h.opaque)
                        e.splice(c, i - c, a, "cm-overlay " + b),
                        i = c + 2;
                    else
                        for (; i > c; c += 2) {
                            var f = e[c + 1];
                            e[c + 1] = (f ? f + " " : "") + "cm-overlay " + b
                        }
            }, f)
        }
        return {
            styles: e,
            classes: f.bgClass || f.textClass ? f : null
        }
    }
    function Pe(a, b, c) {
        if (!b.styles || b.styles[0] != a.state.modeGen) {
            var d = pb(a, of(b))
              , e = Oe(a, b, b.text.length > a.options.maxHighlightLength ? Nd(a.doc.mode, d) : d);
            b.stateAfter = d,
            b.styles = e.styles,
            e.classes ? b.styleClasses = e.classes : b.styleClasses && (b.styleClasses = null),
            c === a.doc.frontier && a.doc.frontier++
        }
        return b.styles
    }
    function Qe(a, b, c, d) {
        var e = a.doc.mode
          , f = new Wd(b,a.options.tabSize);
        for (f.start = f.pos = d || 0,
        "" == b && Ke(e, c); !f.eol(); )
            Le(e, f, c),
            f.start = f.pos
    }
    function Te(a, b) {
        if (!a || /^\s*$/.test(a))
            return null;
        var c = b.addModeClass ? Se : Re;
        return c[a] || (c[a] = a.replace(/\S+/g, "cm-$&"))
    }
    function Ue(a, b) {
        var c = vg("span", null, null, h ? "padding-right: .1px" : null)
          , d = {
            pre: vg("pre", [c], "CodeMirror-line"),
            content: c,
            col: 0,
            pos: 0,
            cm: a,
            splitSpaces: (f || h) && a.getOption("lineWrapping")
        };
        b.measure = {};
        for (var e = 0; e <= (b.rest ? b.rest.length : 0); e++) {
            var i, g = e ? b.rest[e - 1] : b.line;
            d.pos = 0,
            d.addToken = We,
            Ng(a.display.measure) && (i = rf(g)) && (d.addToken = Ye(d.addToken, i)),
            d.map = [];
            var j = b != a.display.externalMeasured && of(g);
            $e(g, d, Pe(a, g, j)),
            g.styleClasses && (g.styleClasses.bgClass && (d.bgClass = Eg(g.styleClasses.bgClass, d.bgClass || "")),
            g.styleClasses.textClass && (d.textClass = Eg(g.styleClasses.textClass, d.textClass || ""))),
            0 == d.map.length && d.map.push(0, 0, d.content.appendChild(Lg(a.display.measure))),
            0 == e ? (b.measure.map = d.map,
            b.measure.cache = {}) : ((b.measure.maps || (b.measure.maps = [])).push(d.map),
            (b.measure.caches || (b.measure.caches = [])).push({}))
        }
        return h && /\bcm-tab\b/.test(d.content.lastChild.className) && (d.content.className = "cm-tab-wrap-hack"),
        Rf(a, "renderLine", a, b.line, d.pre),
        d.pre.className && (d.textClass = Eg(d.pre.className, d.textClass || "")),
        d
    }
    function Ve(a) {
        var b = vg("span", "\u2022", "cm-invalidchar");
        return b.title = "\\u" + a.charCodeAt(0).toString(16),
        b.setAttribute("aria-label", b.title),
        b
    }
    function We(a, b, c, d, e, h, i) {
        if (b) {
            var j = a.splitSpaces ? b.replace(/ {3,}/g, Xe) : b
              , k = a.cm.state.specialChars
              , l = !1;
            if (k.test(b))
                for (var m = document.createDocumentFragment(), n = 0; ; ) {
                    k.lastIndex = n;
                    var o = k.exec(b)
                      , p = o ? o.index - n : b.length - n;
                    if (p) {
                        var q = document.createTextNode(j.slice(n, n + p));
                        f && 9 > g ? m.appendChild(vg("span", [q])) : m.appendChild(q),
                        a.map.push(a.pos, a.pos + p, q),
                        a.col += p,
                        a.pos += p
                    }
                    if (!o)
                        break;
                    if (n += p + 1,
                    "	" == o[0]) {
                        var r = a.cm.options.tabSize
                          , s = r - a.col % r
                          , q = m.appendChild(vg("span", gg(s), "cm-tab"));
                        q.setAttribute("role", "presentation"),
                        q.setAttribute("cm-text", "	"),
                        a.col += s
                    } else if ("\r" == o[0] || "\n" == o[0]) {
                        var q = m.appendChild(vg("span", "\r" == o[0] ? "\u240d" : "\u2424", "cm-invalidchar"));
                        q.setAttribute("cm-text", o[0]),
                        a.col += 1
                    } else {
                        var q = a.cm.options.specialCharPlaceholder(o[0]);
                        q.setAttribute("cm-text", o[0]),
                        f && 9 > g ? m.appendChild(vg("span", [q])) : m.appendChild(q),
                        a.col += 1
                    }
                    a.map.push(a.pos, a.pos + 1, q),
                    a.pos++
                }
            else {
                a.col += b.length;
                var m = document.createTextNode(j);
                a.map.push(a.pos, a.pos + b.length, m),
                f && 9 > g && (l = !0),
                a.pos += b.length
            }
            if (c || d || e || l || i) {
                var t = c || "";
                d && (t += d),
                e && (t += e);
                var u = vg("span", [m], t, i);
                return h && (u.title = h),
                a.content.appendChild(u)
            }
            a.content.appendChild(m)
        }
    }
    function Xe(a) {
        for (var b = " ", c = 0; c < a.length - 2; ++c)
            b += c % 2 ? " " : "\xa0";
        return b += " "
    }
    function Ye(a, b) {
        return function(c, d, e, f, g, h, i) {
            e = e ? e + " cm-force-border" : "cm-force-border";
            for (var j = c.pos, k = j + d.length; ; ) {
                for (var l = 0; l < b.length; l++) {
                    var m = b[l];
                    if (m.to > j && m.from <= j)
                        break
                }
                if (m.to >= k)
                    return a(c, d, e, f, g, h, i);
                a(c, d.slice(0, m.to - j), e, f, null, h, i),
                f = null,
                d = d.slice(m.to - j),
                j = m.to
            }
        }
    }
    function Ze(a, b, c, d) {
        var e = !d && c.widgetNode;
        e && a.map.push(a.pos, a.pos + b, e),
        !d && a.cm.display.input.needsContentAttribute && (e || (e = a.content.appendChild(document.createElement("span"))),
        e.setAttribute("cm-marker", c.id)),
        e && (a.cm.display.input.setUneditable(e),
        a.content.appendChild(e)),
        a.pos += b
    }
    function $e(a, b, c) {
        var d = a.markedSpans
          , e = a.text
          , f = 0;
        if (d)
            for (var k, l, n, o, p, q, r, h = e.length, i = 0, g = 1, j = "", m = 0; ; ) {
                if (m == i) {
                    n = o = p = q = l = "",
                    r = null,
                    m = 1 / 0;
                    for (var t, s = [], u = 0; u < d.length; ++u) {
                        var v = d[u]
                          , w = v.marker;
                        "bookmark" == w.type && v.from == i && w.widgetNode ? s.push(w) : v.from <= i && (null == v.to || v.to > i || w.collapsed && v.to == i && v.from == i) ? (null != v.to && v.to != i && m > v.to && (m = v.to,
                        o = ""),
                        w.className && (n += " " + w.className),
                        w.css && (l = (l ? l + ";" : "") + w.css),
                        w.startStyle && v.from == i && (p += " " + w.startStyle),
                        w.endStyle && v.to == m && (t || (t = [])).push(w.endStyle, v.to),
                        w.title && !q && (q = w.title),
                        w.collapsed && (!r || re(r.marker, w) < 0) && (r = v)) : v.from > i && m > v.from && (m = v.from)
                    }
                    if (t)
                        for (var u = 0; u < t.length; u += 2)
                            t[u + 1] == m && (o += " " + t[u]);
                    if (!r || r.from == i)
                        for (var u = 0; u < s.length; ++u)
                            Ze(b, 0, s[u]);
                    if (r && (r.from || 0) == i) {
                        if (Ze(b, (null == r.to ? h + 1 : r.to) - i, r.marker, null == r.from),
                        null == r.to)
                            return;
                        r.to == i && (r = !1)
                    }
                }
                if (i >= h)
                    break;
                for (var x = Math.min(h, m); ; ) {
                    if (j) {
                        var y = i + j.length;
                        if (!r) {
                            var z = y > x ? j.slice(0, x - i) : j;
                            b.addToken(b, z, k ? k + n : n, p, i + z.length == m ? o : "", q, l)
                        }
                        if (y >= x) {
                            j = j.slice(x - i),
                            i = x;
                            break
                        }
                        i = y,
                        p = ""
                    }
                    j = e.slice(f, f = c[g++]),
                    k = Te(c[g++], b.cm.options)
                }
            }
        else
            for (var g = 1; g < c.length; g += 2)
                b.addToken(b, e.slice(f, f = c[g]), Te(c[g + 1], b.cm.options))
    }
    function _e(a, b) {
        return 0 == b.from.ch && 0 == b.to.ch && "" == hg(b.text) && (!a.cm || a.cm.options.wholeLineUpdateBefore)
    }
    function af(a, b, c, d) {
        function e(a) {
            return c ? c[a] : null
        }
        function f(a, c, e) {
            He(a, c, e, d),
            Tf(a, "change", a, b)
        }
        function g(a, b) {
            for (var c = a, f = []; b > c; ++c)
                f.push(new Ge(j[c],e(c),d));
            return f
        }
        var h = b.from
          , i = b.to
          , j = b.text
          , k = kf(a, h.line)
          , l = kf(a, i.line)
          , m = hg(j)
          , n = e(j.length - 1)
          , o = i.line - h.line;
        if (b.full)
            a.insert(0, g(0, j.length)),
            a.remove(j.length, a.size - j.length);
        else if (_e(a, b)) {
            var p = g(0, j.length - 1);
            f(l, l.text, n),
            o && a.remove(h.line, o),
            p.length && a.insert(h.line, p)
        } else if (k == l)
            if (1 == j.length)
                f(k, k.text.slice(0, h.ch) + m + k.text.slice(i.ch), n);
            else {
                var p = g(1, j.length - 1);
                p.push(new Ge(m + k.text.slice(i.ch),n,d)),
                f(k, k.text.slice(0, h.ch) + j[0], e(0)),
                a.insert(h.line + 1, p)
            }
        else if (1 == j.length)
            f(k, k.text.slice(0, h.ch) + j[0] + l.text.slice(i.ch), e(0)),
            a.remove(h.line + 1, o);
        else {
            f(k, k.text.slice(0, h.ch) + j[0], e(0)),
            f(l, m + l.text.slice(i.ch), n);
            var p = g(1, j.length - 1);
            o > 1 && a.remove(h.line + 1, o - 1),
            a.insert(h.line + 1, p)
        }
        Tf(a, "change", a, b)
    }
    function bf(a) {
        this.lines = a,
        this.parent = null;
        for (var b = 0, c = 0; b < a.length; ++b)
            a[b].parent = this,
            c += a[b].height;
        this.height = c
    }
    function cf(a) {
        this.children = a;
        for (var b = 0, c = 0, d = 0; d < a.length; ++d) {
            var e = a[d];
            b += e.chunkSize(),
            c += e.height,
            e.parent = this
        }
        this.size = b,
        this.height = c,
        this.parent = null
    }
    function hf(a, b, c) {
        function d(a, e, f) {
            if (a.linked)
                for (var g = 0; g < a.linked.length; ++g) {
                    var h = a.linked[g];
                    if (h.doc != e) {
                        var i = f && h.sharedHist;
                        (!c || i) && (b(h.doc, i),
                        d(h.doc, a, i))
                    }
                }
        }
        d(a, null, !0)
    }
    function jf(a, b) {
        if (b.cm)
            throw new Error("This document is already in use.");
        a.doc = b,
        b.cm = a,
        E(a),
        A(a),
        a.options.lineWrapping || K(a),
        a.options.mode = b.modeOption,
        mc(a)
    }
    function kf(a, b) {
        if (b -= a.first,
        0 > b || b >= a.size)
            throw new Error("There is no line " + (b + a.first) + " in the document.");
        for (var c = a; !c.lines; )
            for (var d = 0; ; ++d) {
                var e = c.children[d]
                  , f = e.chunkSize();
                if (f > b) {
                    c = e;
                    break
                }
                b -= f
            }
        return c.lines[b]
    }
    function lf(a, b, c) {
        var d = []
          , e = b.line;
        return a.iter(b.line, c.line + 1, function(a) {
            var f = a.text;
            e == c.line && (f = f.slice(0, c.ch)),
            e == b.line && (f = f.slice(b.ch)),
            d.push(f),
            ++e
        }),
        d
    }
    function mf(a, b, c) {
        var d = [];
        return a.iter(b, c, function(a) {
            d.push(a.text)
        }),
        d
    }
    function nf(a, b) {
        var c = b - a.height;
        if (c)
            for (var d = a; d; d = d.parent)
                d.height += c
    }
    function of(a) {
        if (null == a.parent)
            return null;
        for (var b = a.parent, c = jg(b.lines, a), d = b.parent; d; b = d,
        d = d.parent)
            for (var e = 0; d.children[e] != b; ++e)
                c += d.children[e].chunkSize();
        return c + b.first
    }
    function pf(a, b) {
        var c = a.first;
        a: do {
            for (var d = 0; d < a.children.length; ++d) {
                var e = a.children[d]
                  , f = e.height;
                if (f > b) {
                    a = e;
                    continue a
                }
                b -= f,
                c += e.chunkSize()
            }
            return c
        } while (!a.lines);for (var d = 0; d < a.lines.length; ++d) {
            var g = a.lines[d]
              , h = g.height;
            if (h > b)
                break;
            b -= h
        }
        return c + d
    }
    function qf(a) {
        a = we(a);
        for (var b = 0, c = a.parent, d = 0; d < c.lines.length; ++d) {
            var e = c.lines[d];
            if (e == a)
                break;
            b += e.height
        }
        for (var f = c.parent; f; c = f,
        f = c.parent)
            for (var d = 0; d < f.children.length; ++d) {
                var g = f.children[d];
                if (g == c)
                    break;
                b += g.height
            }
        return b
    }
    function rf(a) {
        var b = a.order;
        return null == b && (b = a.order = gh(a.text)),
        b
    }
    function sf(a) {
        this.done = [],
        this.undone = [],
        this.undoDepth = 1 / 0,
        this.lastModTime = this.lastSelTime = 0,
        this.lastOp = this.lastSelOp = null,
        this.lastOrigin = this.lastSelOrigin = null,
        this.generation = this.maxGeneration = a || 1
    }
    function tf(a, b) {
        var c = {
            from: ta(b.from),
            to: fd(b),
            text: lf(a, b.from, b.to)
        };
        return Af(a, c, b.from.line, b.to.line + 1),
        hf(a, function(a) {
            Af(a, c, b.from.line, b.to.line + 1)
        }, !0),
        c
    }
    function uf(a) {
        for (; a.length; ) {
            var b = hg(a);
            if (!b.ranges)
                break;
            a.pop()
        }
    }
    function vf(a, b) {
        return b ? (uf(a.done),
        hg(a.done)) : a.done.length && !hg(a.done).ranges ? hg(a.done) : a.done.length > 1 && !a.done[a.done.length - 2].ranges ? (a.done.pop(),
        hg(a.done)) : void 0
    }
    function wf(a, b, c, d) {
        var e = a.history;
        e.undone.length = 0;
        var g, f = +new Date;
        if ((e.lastOp == d || e.lastOrigin == b.origin && b.origin && ("+" == b.origin.charAt(0) && a.cm && e.lastModTime > f - a.cm.options.historyEventDelay || "*" == b.origin.charAt(0))) && (g = vf(e, e.lastOp == d))) {
            var h = hg(g.changes);
            0 == sa(b.from, b.to) && 0 == sa(b.from, h.to) ? h.to = fd(b) : g.changes.push(tf(a, b))
        } else {
            var i = hg(e.done);
            for (i && i.ranges || zf(a.sel, e.done),
            g = {
                changes: [tf(a, b)],
                generation: e.generation
            },
            e.done.push(g); e.done.length > e.undoDepth; )
                e.done.shift(),
                e.done[0].ranges || e.done.shift()
        }
        e.done.push(c),
        e.generation = ++e.maxGeneration,
        e.lastModTime = e.lastSelTime = f,
        e.lastOp = e.lastSelOp = d,
        e.lastOrigin = e.lastSelOrigin = b.origin,
        h || Rf(a, "historyAdded")
    }
    function xf(a, b, c, d) {
        var e = b.charAt(0);
        return "*" == e || "+" == e && c.ranges.length == d.ranges.length && c.somethingSelected() == d.somethingSelected() && new Date - a.history.lastSelTime <= (a.cm ? a.cm.options.historyEventDelay : 500)
    }
    function yf(a, b, c, d) {
        var e = a.history
          , f = d && d.origin;
        c == e.lastSelOp || f && e.lastSelOrigin == f && (e.lastModTime == e.lastSelTime && e.lastOrigin == f || xf(a, f, hg(e.done), b)) ? e.done[e.done.length - 1] = b : zf(b, e.done),
        e.lastSelTime = +new Date,
        e.lastSelOrigin = f,
        e.lastSelOp = c,
        d && d.clearRedo !== !1 && uf(e.undone)
    }
    function zf(a, b) {
        var c = hg(b);
        c && c.ranges && c.equals(a) || b.push(a)
    }
    function Af(a, b, c, d) {
        var e = b["spans_" + a.id]
          , f = 0;
        a.iter(Math.max(a.first, c), Math.min(a.first + a.size, d), function(c) {
            c.markedSpans && ((e || (e = b["spans_" + a.id] = {}))[f] = c.markedSpans),
            ++f
        })
    }
    function Bf(a) {
        if (!a)
            return null;
        for (var c, b = 0; b < a.length; ++b)
            a[b].marker.explicitlyCleared ? c || (c = a.slice(0, b)) : c && c.push(a[b]);
        return c ? c.length ? c : null : a
    }
    function Cf(a, b) {
        var c = b["spans_" + a.id];
        if (!c)
            return null;
        for (var d = 0, e = []; d < b.text.length; ++d)
            e.push(Bf(c[d]));
        return e
    }
    function Df(a, b, c) {
        for (var d = 0, e = []; d < a.length; ++d) {
            var f = a[d];
            if (f.ranges)
                e.push(c ? La.prototype.deepCopy.call(f) : f);
            else {
                var g = f.changes
                  , h = [];
                e.push({
                    changes: h
                });
                for (var i = 0; i < g.length; ++i) {
                    var k, j = g[i];
                    if (h.push({
                        from: j.from,
                        to: j.to,
                        text: j.text
                    }),
                    b)
                        for (var l in j)
                            (k = l.match(/^spans_(\d+)$/)) && jg(b, Number(k[1])) > -1 && (hg(h)[l] = j[l],
                            delete j[l])
                }
            }
        }
        return e
    }
    function Ef(a, b, c, d) {
        c < a.line ? a.line += d : b < a.line && (a.line = b,
        a.ch = 0)
    }
    function Ff(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e]
              , g = !0;
            if (f.ranges) {
                f.copied || (f = a[e] = f.deepCopy(),
                f.copied = !0);
                for (var h = 0; h < f.ranges.length; h++)
                    Ef(f.ranges[h].anchor, b, c, d),
                    Ef(f.ranges[h].head, b, c, d)
            } else {
                for (var h = 0; h < f.changes.length; ++h) {
                    var i = f.changes[h];
                    if (c < i.from.line)
                        i.from = ra(i.from.line + d, i.from.ch),
                        i.to = ra(i.to.line + d, i.to.ch);
                    else if (b <= i.to.line) {
                        g = !1;
                        break
                    }
                }
                g || (a.splice(0, e + 1),
                e = 0)
            }
        }
    }
    function Gf(a, b) {
        var c = b.from.line
          , d = b.to.line
          , e = b.text.length - (d - c) - 1;
        Ff(a.done, c, d, e),
        Ff(a.undone, c, d, e)
    }
    function Jf(a) {
        return null != a.defaultPrevented ? a.defaultPrevented : 0 == a.returnValue
    }
    function Lf(a) {
        return a.target || a.srcElement
    }
    function Mf(a) {
        var b = a.which;
        return null == b && (1 & a.button ? b = 1 : 2 & a.button ? b = 3 : 4 & a.button && (b = 2)),
        q && a.ctrlKey && 1 == b && (b = 3),
        b
    }
    function Pf(a, b, c) {
        var d = a._handlers && a._handlers[b];
        return c ? d && d.length > 0 ? d.slice() : Of : d || Of
    }
    function Tf(a, b) {
        function f(a) {
            return function() {
                a.apply(null, d)
            }
        }
        var c = Pf(a, b, !1);
        if (c.length) {
            var e, d = Array.prototype.slice.call(arguments, 2);
            Xb ? e = Xb.delayedCallbacks : Sf ? e = Sf : (e = Sf = [],
            setTimeout(Uf, 0));
            for (var g = 0; g < c.length; ++g)
                e.push(f(c[g]))
        }
    }
    function Uf() {
        var a = Sf;
        Sf = null;
        for (var b = 0; b < a.length; ++b)
            a[b]()
    }
    function Vf(a, b, c) {
        return "string" == typeof b && (b = {
            type: b,
            preventDefault: function() {
                this.defaultPrevented = !0
            }
        }),
        Rf(a, c || b.type, a, b),
        Jf(b) || b.codemirrorIgnore
    }
    function Wf(a) {
        var b = a._handlers && a._handlers.cursorActivity;
        if (b)
            for (var c = a.curOp.cursorActivityHandlers || (a.curOp.cursorActivityHandlers = []), d = 0; d < b.length; ++d)
                -1 == jg(c, b[d]) && c.push(b[d])
    }
    function Xf(a, b) {
        return Pf(a, b).length > 0
    }
    function Yf(a) {
        a.prototype.on = function(a, b) {
            Nf(this, a, b)
        }
        ,
        a.prototype.off = function(a, b) {
            Qf(this, a, b)
        }
    }
    function cg() {
        this.id = null
    }
    function gg(a) {
        for (; fg.length <= a; )
            fg.push(hg(fg) + " ");
        return fg[a]
    }
    function hg(a) {
        return a[a.length - 1]
    }
    function jg(a, b) {
        for (var c = 0; c < a.length; ++c)
            if (a[c] == b)
                return c;
        return -1
    }
    function kg(a, b) {
        for (var c = [], d = 0; d < a.length; d++)
            c[d] = b(a[d], d);
        return c
    }
    function lg() {}
    function mg(a, b) {
        var c;
        return Object.create ? c = Object.create(a) : (lg.prototype = a,
        c = new lg),
        b && ng(b, c),
        c
    }
    function ng(a, b, c) {
        b || (b = {});
        for (var d in a)
            !a.hasOwnProperty(d) || c === !1 && b.hasOwnProperty(d) || (b[d] = a[d]);
        return b
    }
    function og(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function() {
            return a.apply(null, b)
        }
    }
    function rg(a, b) {
        return b ? b.source.indexOf("\\w") > -1 && qg(a) ? !0 : b.test(a) : qg(a)
    }
    function sg(a) {
        for (var b in a)
            if (a.hasOwnProperty(b) && a[b])
                return !1;
        return !0
    }
    function ug(a) {
        return a.charCodeAt(0) >= 768 && tg.test(a)
    }
    function vg(a, b, c, d) {
        var e = document.createElement(a);
        if (c && (e.className = c),
        d && (e.style.cssText = d),
        "string" == typeof b)
            e.appendChild(document.createTextNode(b));
        else if (b)
            for (var f = 0; f < b.length; ++f)
                e.appendChild(b[f]);
        return e
    }
    function xg(a) {
        for (var b = a.childNodes.length; b > 0; --b)
            a.removeChild(a.firstChild);
        return a
    }
    function yg(a, b) {
        return xg(a).appendChild(b)
    }
    function Ag() {
        for (var a = document.activeElement; a && a.root && a.root.activeElement; )
            a = a.root.activeElement;
        return a
    }
    function Bg(a) {
        return new RegExp("(^|\\s)" + a + "(?:$|\\s)\\s*")
    }
    function Eg(a, b) {
        for (var c = a.split(" "), d = 0; d < c.length; d++)
            c[d] && !Bg(c[d]).test(b) && (b += " " + c[d]);
        return b
    }
    function Fg(a) {
        if (document.body.getElementsByClassName)
            for (var b = document.body.getElementsByClassName("CodeMirror"), c = 0; c < b.length; c++) {
                var d = b[c].CodeMirror;
                d && a(d)
            }
    }
    function Hg() {
        Gg || (Ig(),
        Gg = !0)
    }
    function Ig() {
        var a;
        Nf(window, "resize", function() {
            null == a && (a = setTimeout(function() {
                a = null,
                Fg(vc)
            }, 100))
        }),
        Nf(window, "blur", function() {
            Fg(cd)
        })
    }
    function Lg(a) {
        if (null == Kg) {
            var b = vg("span", "\u200b");
            yg(a, vg("span", [b, document.createTextNode("x")])),
            0 != a.firstChild.offsetHeight && (Kg = b.offsetWidth <= 1 && b.offsetHeight > 2 && !(f && 8 > g))
        }
        var c = Kg ? vg("span", "\u200b") : vg("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px");
        return c.setAttribute("cm-text", ""),
        c
    }
    function Ng(a) {
        if (null != Mg)
            return Mg;
        var b = yg(a, document.createTextNode("A\u062eA"))
          , c = wg(b, 0, 1).getBoundingClientRect();
        if (!c || c.left == c.right)
            return !1;
        var d = wg(b, 1, 2).getBoundingClientRect();
        return Mg = d.right - c.right < 3
    }
    function Sg(a) {
        if (null != Rg)
            return Rg;
        var b = yg(a, vg("span", "x"))
          , c = b.getBoundingClientRect()
          , d = wg(b, 0, 1).getBoundingClientRect();
        return Rg = Math.abs(c.left - d.left) > 1
    }
    function Ug(a, b, c, d) {
        if (!a)
            return d(b, c, "ltr");
        for (var e = !1, f = 0; f < a.length; ++f) {
            var g = a[f];
            (g.from < c && g.to > b || b == c && g.to == b) && (d(Math.max(g.from, b), Math.min(g.to, c), 1 == g.level ? "rtl" : "ltr"),
            e = !0)
        }
        e || d(b, c, "ltr")
    }
    function Vg(a) {
        return a.level % 2 ? a.to : a.from
    }
    function Wg(a) {
        return a.level % 2 ? a.from : a.to
    }
    function Xg(a) {
        var b = rf(a);
        return b ? Vg(b[0]) : 0
    }
    function Yg(a) {
        var b = rf(a);
        return b ? Wg(hg(b)) : a.text.length
    }
    function Zg(a, b) {
        var c = kf(a.doc, b)
          , d = we(c);
        d != c && (b = of(d));
        var e = rf(d)
          , f = e ? e[0].level % 2 ? Yg(d) : Xg(d) : 0;
        return ra(b, f)
    }
    function $g(a, b) {
        for (var c, d = kf(a.doc, b); c = ue(d); )
            d = c.find(1, !0).line,
            b = null;
        var e = rf(d)
          , f = e ? e[0].level % 2 ? Xg(d) : Yg(d) : d.text.length;
        return ra(null == b ? of(d) : b, f)
    }
    function _g(a, b) {
        var c = Zg(a, b.line)
          , d = kf(a.doc, c.line)
          , e = rf(d);
        if (!e || 0 == e[0].level) {
            var f = Math.max(0, d.text.search(/\S/))
              , g = b.line == c.line && b.ch <= f && b.ch;
            return ra(c.line, g ? 0 : f)
        }
        return c
    }
    function ah(a, b, c) {
        var d = a[0].level;
        return b == d ? !0 : c == d ? !1 : c > b
    }
    function ch(a, b) {
        bh = null;
        for (var d, c = 0; c < a.length; ++c) {
            var e = a[c];
            if (e.from < b && e.to > b)
                return c;
            if (e.from == b || e.to == b) {
                if (null != d)
                    return ah(a, e.level, a[d].level) ? (e.from != e.to && (bh = d),
                    c) : (e.from != e.to && (bh = c),
                    d);
                d = c
            }
        }
        return d
    }
    function dh(a, b, c, d) {
        if (!d)
            return b + c;
        do
            b += c;
        while (b > 0 && ug(a.text.charAt(b)));return b
    }
    function eh(a, b, c, d) {
        var e = rf(a);
        if (!e)
            return fh(a, b, c, d);
        for (var f = ch(e, b), g = e[f], h = dh(a, b, g.level % 2 ? -c : c, d); ; ) {
            if (h > g.from && h < g.to)
                return h;
            if (h == g.from || h == g.to)
                return ch(e, h) == f ? h : (g = e[f += c],
                c > 0 == g.level % 2 ? g.to : g.from);
            if (g = e[f += c],
            !g)
                return null;
            h = c > 0 == g.level % 2 ? dh(a, g.to, -1, d) : dh(a, g.from, 1, d)
        }
    }
    function fh(a, b, c, d) {
        var e = b + c;
        if (d)
            for (; e > 0 && ug(a.text.charAt(e)); )
                e += c;
        return 0 > e || e > a.text.length ? null : e
    }
    var a = navigator.userAgent
      , b = navigator.platform
      , c = /gecko\/\d/i.test(a)
      , d = /MSIE \d/.test(a)
      , e = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(a)
      , f = d || e
      , g = f && (d ? document.documentMode || 6 : e[1])
      , h = /WebKit\//.test(a)
      , i = h && /Qt\/\d+\.\d+/.test(a)
      , j = /Chrome\//.test(a)
      , k = /Opera\//.test(a)
      , l = /Apple Computer/.test(navigator.vendor)
      , m = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(a)
      , n = /PhantomJS/.test(a)
      , o = /AppleWebKit/.test(a) && /Mobile\/\w+/.test(a)
      , p = o || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(a)
      , q = o || /Mac/.test(b)
      , r = /\bCrOS\b/.test(a)
      , s = /win/i.test(b)
      , t = k && a.match(/Version\/(\d*\.\d*)/);
    t && (t = Number(t[1])),
    t && t >= 15 && (k = !1,
    h = !0);
    var u = q && (i || k && (null == t || 12.11 > t))
      , v = c || f && g >= 9
      , w = !1
      , x = !1;
    N.prototype = ng({
        update: function(a) {
            var b = a.scrollWidth > a.clientWidth + 1
              , c = a.scrollHeight > a.clientHeight + 1
              , d = a.nativeBarWidth;
            if (c) {
                this.vert.style.display = "block",
                this.vert.style.bottom = b ? d + "px" : "0";
                var e = a.viewHeight - (b ? d : 0);
                this.vert.firstChild.style.height = Math.max(0, a.scrollHeight - a.clientHeight + e) + "px"
            } else
                this.vert.style.display = "",
                this.vert.firstChild.style.height = "0";
            if (b) {
                this.horiz.style.display = "block",
                this.horiz.style.right = c ? d + "px" : "0",
                this.horiz.style.left = a.barLeft + "px";
                var f = a.viewWidth - a.barLeft - (c ? d : 0);
                this.horiz.firstChild.style.width = a.scrollWidth - a.clientWidth + f + "px"
            } else
                this.horiz.style.display = "",
                this.horiz.firstChild.style.width = "0";
            return !this.checkedZeroWidth && a.clientHeight > 0 && (0 == d && this.zeroWidthHack(),
            this.checkedZeroWidth = !0),
            {
                right: c ? d : 0,
                bottom: b ? d : 0
            }
        },
        setScrollLeft: function(a) {
            this.horiz.scrollLeft != a && (this.horiz.scrollLeft = a),
            this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz)
        },
        setScrollTop: function(a) {
            this.vert.scrollTop != a && (this.vert.scrollTop = a),
            this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert)
        },
        zeroWidthHack: function() {
            var a = q && !m ? "12px" : "18px";
            this.horiz.style.height = this.vert.style.width = a,
            this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
            this.disableHoriz = new cg,
            this.disableVert = new cg
        },
        enableZeroWidthBar: function(a, b) {
            function c() {
                var d = a.getBoundingClientRect()
                  , e = document.elementFromPoint(d.left + 1, d.bottom - 1);
                e != a ? a.style.pointerEvents = "none" : b.set(1e3, c)
            }
            a.style.pointerEvents = "auto",
            b.set(1e3, c)
        },
        clear: function() {
            var a = this.horiz.parentNode;
            a.removeChild(this.horiz),
            a.removeChild(this.vert)
        }
    }, N.prototype),
    O.prototype = ng({
        update: function() {
            return {
                bottom: 0,
                right: 0
            }
        },
        setScrollLeft: function() {},
        setScrollTop: function() {},
        clear: function() {}
    }, O.prototype),
    y.scrollbarModel = {
        "native": N,
        "null": O
    },
    X.prototype.signal = function(a, b) {
        Xf(a, b) && this.events.push(arguments)
    }
    ,
    X.prototype.finish = function() {
        for (var a = 0; a < this.events.length; a++)
            Rf.apply(null, this.events[a])
    }
    ;
    var ra = y.Pos = function(a, b) {
        return this instanceof ra ? (this.line = a,
        void (this.ch = b)) : new ra(a,b)
    }
      , sa = y.cmpPos = function(a, b) {
        return a.line - b.line || a.ch - b.ch
    }
      , xa = null;
    Da.prototype = ng({
        init: function(a) {
            function h(a) {
                if (!Vf(c, a)) {
                    if (c.somethingSelected())
                        xa = c.getSelections(),
                        b.inaccurateSelection && (b.prevInput = "",
                        b.inaccurateSelection = !1,
                        e.value = xa.join("\n"),
                        ig(e));
                    else {
                        if (!c.options.lineWiseCopyCut)
                            return;
                        var d = Ba(c);
                        xa = d.text,
                        "cut" == a.type ? c.setSelections(d.ranges, null, _f) : (b.prevInput = "",
                        e.value = d.text.join("\n"),
                        ig(e))
                    }
                    "cut" == a.type && (c.state.cutIncoming = !0)
                }
            }
            var b = this
              , c = this.cm
              , d = this.wrapper = Ea()
              , e = this.textarea = d.firstChild;
            a.wrapper.insertBefore(d, a.wrapper.firstChild),
            o && (e.style.width = "0px"),
            Nf(e, "input", function() {
                f && g >= 9 && b.hasSelection && (b.hasSelection = null),
                b.poll()
            }),
            Nf(e, "paste", function(a) {
                Vf(c, a) || za(a, c) || (c.state.pasteIncoming = !0,
                b.fastPoll())
            }),
            Nf(e, "cut", h),
            Nf(e, "copy", h),
            Nf(a.scroller, "paste", function(d) {
                wc(a, d) || Vf(c, d) || (c.state.pasteIncoming = !0,
                b.focus())
            }),
            Nf(a.lineSpace, "selectstart", function(b) {
                wc(a, b) || Hf(b)
            }),
            Nf(e, "compositionstart", function() {
                var a = c.getCursor("from");
                b.composing && b.composing.range.clear(),
                b.composing = {
                    start: a,
                    range: c.markText(a, c.getCursor("to"), {
                        className: "CodeMirror-composing"
                    })
                }
            }),
            Nf(e, "compositionend", function() {
                b.composing && (b.poll(),
                b.composing.range.clear(),
                b.composing = null)
            })
        },
        prepareSelection: function() {
            var a = this.cm
              , b = a.display
              , c = a.doc
              , d = ib(a);
            if (a.options.moveInputWithCursor) {
                var e = Pb(a, c.sel.primary().head, "div")
                  , f = b.wrapper.getBoundingClientRect()
                  , g = b.lineDiv.getBoundingClientRect();
                d.teTop = Math.max(0, Math.min(b.wrapper.clientHeight - 10, e.top + g.top - f.top)),
                d.teLeft = Math.max(0, Math.min(b.wrapper.clientWidth - 10, e.left + g.left - f.left))
            }
            return d
        },
        showSelection: function(a) {
            var b = this.cm
              , c = b.display;
            yg(c.cursorDiv, a.cursors),
            yg(c.selectionDiv, a.selection),
            null != a.teTop && (this.wrapper.style.top = a.teTop + "px",
            this.wrapper.style.left = a.teLeft + "px")
        },
        reset: function(a) {
            if (!this.contextMenuPending) {
                var b, c, d = this.cm, e = d.doc;
                if (d.somethingSelected()) {
                    this.prevInput = "";
                    var h = e.sel.primary();
                    b = Qg && (h.to().line - h.from().line > 100 || (c = d.getSelection()).length > 1e3);
                    var i = b ? "-" : c || d.getSelection();
                    this.textarea.value = i,
                    d.state.focused && ig(this.textarea),
                    f && g >= 9 && (this.hasSelection = i)
                } else
                    a || (this.prevInput = this.textarea.value = "",
                    f && g >= 9 && (this.hasSelection = null));
                this.inaccurateSelection = b
            }
        },
        getField: function() {
            return this.textarea
        },
        supportsTouch: function() {
            return !1
        },
        focus: function() {
            if ("nocursor" != this.cm.options.readOnly && (!p || Ag() != this.textarea))
                try {
                    this.textarea.focus()
                } catch (a) {}
        },
        blur: function() {
            this.textarea.blur()
        },
        resetPosition: function() {
            this.wrapper.style.top = this.wrapper.style.left = 0
        },
        receivedFocus: function() {
            this.slowPoll()
        },
        slowPoll: function() {
            var a = this;
            a.pollingFast || a.polling.set(this.cm.options.pollInterval, function() {
                a.poll(),
                a.cm.state.focused && a.slowPoll()
            })
        },
        fastPoll: function() {
            function c() {
                var d = b.poll();
                d || a ? (b.pollingFast = !1,
                b.slowPoll()) : (a = !0,
                b.polling.set(60, c))
            }
            var a = !1
              , b = this;
            b.pollingFast = !0,
            b.polling.set(20, c)
        },
        poll: function() {
            var a = this.cm
              , b = this.textarea
              , c = this.prevInput;
            if (this.contextMenuPending || !a.state.focused || Pg(b) && !c && !this.composing || a.isReadOnly() || a.options.disableInput || a.state.keySeq)
                return !1;
            var d = b.value;
            if (d == c && !a.somethingSelected())
                return !1;
            if (f && g >= 9 && this.hasSelection === d || q && /[\uf700-\uf7ff]/.test(d))
                return a.display.input.reset(),
                !1;
            if (a.doc.sel == a.display.selForContextMenu) {
                var e = d.charCodeAt(0);
                if (8203 != e || c || (c = "\u200b"),
                8666 == e)
                    return this.reset(),
                    this.cm.execCommand("undo")
            }
            for (var h = 0, i = Math.min(c.length, d.length); i > h && c.charCodeAt(h) == d.charCodeAt(h); )
                ++h;
            var j = this;
            return gc(a, function() {
                ya(a, d.slice(h), c.length - h, null, j.composing ? "*compose" : null),
                d.length > 1e3 || d.indexOf("\n") > -1 ? b.value = j.prevInput = "" : j.prevInput = d,
                j.composing && (j.composing.range.clear(),
                j.composing.range = a.markText(j.composing.start, a.getCursor("to"), {
                    className: "CodeMirror-composing"
                }))
            }),
            !0
        },
        ensurePolled: function() {
            this.pollingFast && this.poll() && (this.pollingFast = !1)
        },
        onKeyPress: function() {
            f && g >= 9 && (this.hasSelection = null),
            this.fastPoll()
        },
        onContextMenu: function(a) {
            function q() {
                if (null != e.selectionStart) {
                    var a = c.somethingSelected()
                      , f = "\u200b" + (a ? e.value : "");
                    e.value = "\u21da",
                    e.value = f,
                    b.prevInput = a ? "" : "\u200b",
                    e.selectionStart = 1,
                    e.selectionEnd = f.length,
                    d.selForContextMenu = c.doc.sel
                }
            }
            function r() {
                if (b.contextMenuPending = !1,
                b.wrapper.style.cssText = n,
                e.style.cssText = m,
                f && 9 > g && d.scrollbars.setScrollTop(d.scroller.scrollTop = j),
                null != e.selectionStart) {
                    (!f || f && 9 > g) && q();
                    var a = 0
                      , h = function() {
                        d.selForContextMenu == c.doc.sel && 0 == e.selectionStart && e.selectionEnd > 0 && "\u200b" == b.prevInput ? hc(c, Pd.selectAll)(c) : a++ < 10 ? d.detectingSelectAll = setTimeout(h, 500) : d.input.reset()
                    };
                    d.detectingSelectAll = setTimeout(h, 200)
                }
            }
            var b = this
              , c = b.cm
              , d = c.display
              , e = b.textarea
              , i = xc(c, a)
              , j = d.scroller.scrollTop;
            if (i && !k) {
                var l = c.options.resetSelectionOnContextMenu;
                l && -1 == c.doc.sel.contains(i) && hc(c, _a)(c.doc, Oa(i), _f);
                var m = e.style.cssText
                  , n = b.wrapper.style.cssText;
                b.wrapper.style.cssText = "position: absolute";
                var o = b.wrapper.getBoundingClientRect();
                if (e.style.cssText = "position: absolute; width: 30px; height: 30px; top: " + (a.clientY - o.top - 5) + "px; left: " + (a.clientX - o.left - 5) + "px; z-index: 1000; background: " + (f ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
                h)
                    var p = window.scrollY;
                if (d.input.focus(),
                h && window.scrollTo(null, p),
                d.input.reset(),
                c.somethingSelected() || (e.value = b.prevInput = " "),
                b.contextMenuPending = !0,
                d.selForContextMenu = c.doc.sel,
                clearTimeout(d.detectingSelectAll),
                f && g >= 9 && q(),
                v) {
                    Kf(a);
                    var s = function() {
                        Qf(window, "mouseup", s),
                        setTimeout(r, 20)
                    };
                    Nf(window, "mouseup", s)
                } else
                    setTimeout(r, 50)
            }
        },
        readOnlyChanged: function(a) {
            a || this.reset()
        },
        setUneditable: lg,
        needsContentAttribute: !1
    }, Da.prototype),
    Fa.prototype = ng({
        init: function(a) {
            function e(a) {
                if (!Vf(c, a)) {
                    if (c.somethingSelected())
                        xa = c.getSelections(),
                        "cut" == a.type && c.replaceSelection("", null, "cut");
                    else {
                        if (!c.options.lineWiseCopyCut)
                            return;
                        var b = Ba(c);
                        xa = b.text,
                        "cut" == a.type && c.operation(function() {
                            c.setSelections(b.ranges, 0, _f),
                            c.replaceSelection("", null, "cut")
                        })
                    }
                    if (a.clipboardData && !o)
                        a.preventDefault(),
                        a.clipboardData.clearData(),
                        a.clipboardData.setData("text/plain", xa.join("\n"));
                    else {
                        var d = Ea()
                          , e = d.firstChild;
                        c.display.lineSpace.insertBefore(d, c.display.lineSpace.firstChild),
                        e.value = xa.join("\n");
                        var f = document.activeElement;
                        ig(e),
                        setTimeout(function() {
                            c.display.lineSpace.removeChild(d),
                            f.focus()
                        }, 50)
                    }
                }
            }
            var b = this
              , c = b.cm
              , d = b.div = a.lineDiv;
            Ca(d),
            Nf(d, "paste", function(a) {
                Vf(c, a) || za(a, c)
            }),
            Nf(d, "compositionstart", function(a) {
                var d = a.data;
                if (b.composing = {
                    sel: c.doc.sel,
                    data: d,
                    startData: d
                },
                d) {
                    var e = c.doc.sel.primary()
                      , f = c.getLine(e.head.line)
                      , g = f.indexOf(d, Math.max(0, e.head.ch - d.length));
                    g > -1 && g <= e.head.ch && (b.composing.sel = Oa(ra(e.head.line, g), ra(e.head.line, g + d.length)))
                }
            }),
            Nf(d, "compositionupdate", function(a) {
                b.composing.data = a.data
            }),
            Nf(d, "compositionend", function(a) {
                var c = b.composing;
                c && (a.data == c.startData || /\u200b/.test(a.data) || (c.data = a.data),
                setTimeout(function() {
                    c.handled || b.applyComposition(c),
                    b.composing == c && (b.composing = null)
                }, 50))
            }),
            Nf(d, "touchstart", function() {
                b.forceCompositionEnd()
            }),
            Nf(d, "input", function() {
                b.composing || (c.isReadOnly() || !b.pollContent()) && gc(b.cm, function() {
                    mc(c)
                })
            }),
            Nf(d, "copy", e),
            Nf(d, "cut", e)
        },
        prepareSelection: function() {
            var a = ib(this.cm, !1);
            return a.focus = this.cm.state.focused,
            a
        },
        showSelection: function(a, b) {
            a && this.cm.display.view.length && ((a.focus || b) && this.showPrimarySelection(),
            this.showMultipleSelections(a))
        },
        showPrimarySelection: function() {
            var a = window.getSelection()
              , b = this.cm.doc.sel.primary()
              , d = Ia(this.cm, a.anchorNode, a.anchorOffset)
              , e = Ia(this.cm, a.focusNode, a.focusOffset);
            if (!d || d.bad || !e || e.bad || 0 != sa(va(d, e), b.from()) || 0 != sa(ua(d, e), b.to())) {
                var f = Ga(this.cm, b.from())
                  , g = Ga(this.cm, b.to());
                if (f || g) {
                    var h = this.cm.display.view
                      , i = a.rangeCount && a.getRangeAt(0);
                    if (f) {
                        if (!g) {
                            var j = h[h.length - 1].measure
                              , k = j.maps ? j.maps[j.maps.length - 1] : j.map;
                            g = {
                                node: k[k.length - 1],
                                offset: k[k.length - 2] - k[k.length - 3]
                            }
                        }
                    } else
                        f = {
                            node: h[0].measure.map[2],
                            offset: 0
                        };
                    try {
                        var l = wg(f.node, f.offset, g.offset, g.node)
                    } catch (m) {}
                    l && (!c && this.cm.state.focused ? (a.collapse(f.node, f.offset),
                    l.collapsed || a.addRange(l)) : (a.removeAllRanges(),
                    a.addRange(l)),
                    i && null == a.anchorNode ? a.addRange(i) : c && this.startGracePeriod()),
                    this.rememberSelection()
                }
            }
        },
        startGracePeriod: function() {
            var a = this;
            clearTimeout(this.gracePeriod),
            this.gracePeriod = setTimeout(function() {
                a.gracePeriod = !1,
                a.selectionChanged() && a.cm.operation(function() {
                    a.cm.curOp.selectionChanged = !0
                })
            }, 20)
        },
        showMultipleSelections: function(a) {
            yg(this.cm.display.cursorDiv, a.cursors),
            yg(this.cm.display.selectionDiv, a.selection)
        },
        rememberSelection: function() {
            var a = window.getSelection();
            this.lastAnchorNode = a.anchorNode,
            this.lastAnchorOffset = a.anchorOffset,
            this.lastFocusNode = a.focusNode,
            this.lastFocusOffset = a.focusOffset
        },
        selectionInEditor: function() {
            var a = window.getSelection();
            if (!a.rangeCount)
                return !1;
            var b = a.getRangeAt(0).commonAncestorContainer;
            return zg(this.div, b)
        },
        focus: function() {
            "nocursor" != this.cm.options.readOnly && this.div.focus()
        },
        blur: function() {
            this.div.blur()
        },
        getField: function() {
            return this.div
        },
        supportsTouch: function() {
            return !0
        },
        receivedFocus: function() {
            function b() {
                a.cm.state.focused && (a.pollSelection(),
                a.polling.set(a.cm.options.pollInterval, b))
            }
            var a = this;
            this.selectionInEditor() ? this.pollSelection() : gc(this.cm, function() {
                a.cm.curOp.selectionChanged = !0
            }),
            this.polling.set(this.cm.options.pollInterval, b)
        },
        selectionChanged: function() {
            var a = window.getSelection();
            return a.anchorNode != this.lastAnchorNode || a.anchorOffset != this.lastAnchorOffset || a.focusNode != this.lastFocusNode || a.focusOffset != this.lastFocusOffset
        },
        pollSelection: function() {
            if (!this.composing && !this.gracePeriod && this.selectionChanged()) {
                var a = window.getSelection()
                  , b = this.cm;
                this.rememberSelection();
                var c = Ia(b, a.anchorNode, a.anchorOffset)
                  , d = Ia(b, a.focusNode, a.focusOffset);
                c && d && gc(b, function() {
                    _a(b.doc, Oa(c, d), _f),
                    (c.bad || d.bad) && (b.curOp.selectionChanged = !0)
                })
            }
        },
        pollContent: function() {
            var a = this.cm
              , b = a.display
              , c = a.doc.sel.primary()
              , d = c.from()
              , e = c.to();
            if (d.line < b.viewFrom || e.line > b.viewTo - 1)
                return !1;
            var f;
            if (d.line == b.viewFrom || 0 == (f = pc(a, d.line)))
                var g = of(b.view[0].line)
                  , h = b.view[0].node;
            else
                var g = of(b.view[f].line)
                  , h = b.view[f - 1].node.nextSibling;
            var i = pc(a, e.line);
            if (i == b.view.length - 1)
                var j = b.viewTo - 1
                  , k = b.lineDiv.lastChild;
            else
                var j = of(b.view[i + 1].line) - 1
                  , k = b.view[i + 1].node.previousSibling;
            for (var l = a.doc.splitLines(Ka(a, h, k, g, j)), m = lf(a.doc, ra(g, 0), ra(j, kf(a.doc, j).text.length)); l.length > 1 && m.length > 1; )
                if (hg(l) == hg(m))
                    l.pop(),
                    m.pop(),
                    j--;
                else {
                    if (l[0] != m[0])
                        break;
                    l.shift(),
                    m.shift(),
                    g++
                }
            for (var n = 0, o = 0, p = l[0], q = m[0], r = Math.min(p.length, q.length); r > n && p.charCodeAt(n) == q.charCodeAt(n); )
                ++n;
            for (var s = hg(l), t = hg(m), u = Math.min(s.length - (1 == l.length ? n : 0), t.length - (1 == m.length ? n : 0)); u > o && s.charCodeAt(s.length - o - 1) == t.charCodeAt(t.length - o - 1); )
                ++o;
            l[l.length - 1] = s.slice(0, s.length - o),
            l[0] = l[0].slice(n);
            var v = ra(g, n)
              , w = ra(j, m.length ? hg(m).length - o : 0);
            return l.length > 1 || l[0] || sa(v, w) ? (rd(a.doc, l, v, w, "+input"),
            !0) : void 0
        },
        ensurePolled: function() {
            this.forceCompositionEnd()
        },
        reset: function() {
            this.forceCompositionEnd()
        },
        forceCompositionEnd: function() {
            this.composing && !this.composing.handled && (this.applyComposition(this.composing),
            this.composing.handled = !0,
            this.div.blur(),
            this.div.focus())
        },
        applyComposition: function(a) {
            this.cm.isReadOnly() ? hc(this.cm, mc)(this.cm) : a.data && a.data != a.startData && hc(this.cm, ya)(this.cm, a.data, 0, a.sel)
        },
        setUneditable: function(a) {
            a.contentEditable = "false"
        },
        onKeyPress: function(a) {
            a.preventDefault(),
            this.cm.isReadOnly() || hc(this.cm, ya)(this.cm, String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), 0)
        },
        readOnlyChanged: function(a) {
            this.div.contentEditable = String("nocursor" != a)
        },
        onContextMenu: lg,
        resetPosition: lg,
        needsContentAttribute: !0
    }, Fa.prototype),
    y.inputStyles = {
        textarea: Da,
        contenteditable: Fa
    },
    La.prototype = {
        primary: function() {
            return this.ranges[this.primIndex]
        },
        equals: function(a) {
            if (a == this)
                return !0;
            if (a.primIndex != this.primIndex || a.ranges.length != this.ranges.length)
                return !1;
            for (var b = 0; b < this.ranges.length; b++) {
                var c = this.ranges[b]
                  , d = a.ranges[b];
                if (0 != sa(c.anchor, d.anchor) || 0 != sa(c.head, d.head))
                    return !1
            }
            return !0
        },
        deepCopy: function() {
            for (var a = [], b = 0; b < this.ranges.length; b++)
                a[b] = new Ma(ta(this.ranges[b].anchor),ta(this.ranges[b].head));
            return new La(a,this.primIndex)
        },
        somethingSelected: function() {
            for (var a = 0; a < this.ranges.length; a++)
                if (!this.ranges[a].empty())
                    return !0;
            return !1
        },
        contains: function(a, b) {
            b || (b = a);
            for (var c = 0; c < this.ranges.length; c++) {
                var d = this.ranges[c];
                if (sa(b, d.from()) >= 0 && sa(a, d.to()) <= 0)
                    return c
            }
            return -1
        }
    },
    Ma.prototype = {
        from: function() {
            return va(this.anchor, this.head)
        },
        to: function() {
            return ua(this.anchor, this.head)
        },
        empty: function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }
    };
    var Ub, zc, Ac, Db = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, Xb = null, Yb = 0, Gc = 0, Nc = 0, Oc = null;
    f ? Oc = -.53 : c ? Oc = 15 : j ? Oc = -.7 : l && (Oc = -1 / 3);
    var Pc = function(a) {
        var b = a.wheelDeltaX
          , c = a.wheelDeltaY;
        return null == b && a.detail && a.axis == a.HORIZONTAL_AXIS && (b = a.detail),
        null == c && a.detail && a.axis == a.VERTICAL_AXIS ? c = a.detail : null == c && (c = a.wheelDelta),
        {
            x: b,
            y: c
        }
    };
    y.wheelEventPixels = function(a) {
        var b = Pc(a);
        return b.x *= Oc,
        b.y *= Oc,
        b
    }
    ;
    var Tc = new cg
      , Xc = null
      , fd = y.changeEnd = function(a) {
        return a.text ? ra(a.from.line + a.text.length - 1, hg(a.text).length + (1 == a.text.length ? a.from.ch : 0)) : a.to
    }
    ;
    y.prototype = {
        constructor: y,
        focus: function() {
            window.focus(),
            this.display.input.focus()
        },
        setOption: function(a, b) {
            var c = this.options
              , d = c[a];
            (c[a] != b || "mode" == a) && (c[a] = b,
            Fd.hasOwnProperty(a) && hc(this, Fd[a])(this, b, d))
        },
        getOption: function(a) {
            return this.options[a]
        },
        getDoc: function() {
            return this.doc
        },
        addKeyMap: function(a, b) {
            this.state.keyMaps[b ? "push" : "unshift"](Vd(a))
        },
        removeKeyMap: function(a) {
            for (var b = this.state.keyMaps, c = 0; c < b.length; ++c)
                if (b[c] == a || b[c].name == a)
                    return b.splice(c, 1),
                    !0
        },
        addOverlay: ic(function(a, b) {
            var c = a.token ? a : y.getMode(this.options, a);
            if (c.startState)
                throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({
                mode: c,
                modeSpec: a,
                opaque: b && b.opaque
            }),
            this.state.modeGen++,
            mc(this)
        }),
        removeOverlay: ic(function(a) {
            for (var b = this.state.overlays, c = 0; c < b.length; ++c) {
                var d = b[c].modeSpec;
                if (d == a || "string" == typeof a && d.name == a)
                    return b.splice(c, 1),
                    this.state.modeGen++,
                    void mc(this)
            }
        }),
        indentLine: ic(function(a, b, c) {
            "string" != typeof b && "number" != typeof b && (b = null == b ? this.options.smartIndent ? "smart" : "prev" : b ? "add" : "subtract"),
            Sa(this.doc, a) && zd(this, a, b, c)
        }),
        indentSelection: ic(function(a) {
            for (var b = this.doc.sel.ranges, c = -1, d = 0; d < b.length; d++) {
                var e = b[d];
                if (e.empty())
                    e.head.line > c && (zd(this, e.head.line, a, !0),
                    c = e.head.line,
                    d == this.doc.sel.primIndex && xd(this));
                else {
                    var f = e.from()
                      , g = e.to()
                      , h = Math.max(c, f.line);
                    c = Math.min(this.lastLine(), g.line - (g.ch ? 0 : 1)) + 1;
                    for (var i = h; c > i; ++i)
                        zd(this, i, a);
                    var j = this.doc.sel.ranges;
                    0 == f.ch && b.length == j.length && j[d].from().ch > 0 && Xa(this.doc, d, new Ma(f,j[d].to()), _f)
                }
            }
        }),
        getTokenAt: function(a, b) {
            return Me(this, a, b)
        },
        getLineTokens: function(a, b) {
            return Me(this, ra(a), b, !0)
        },
        getTokenTypeAt: function(a) {
            a = Qa(this.doc, a);
            var f, b = Pe(this, kf(this.doc, a.line)), c = 0, d = (b.length - 1) / 2, e = a.ch;
            if (0 == e)
                f = b[2];
            else
                for (; ; ) {
                    var g = c + d >> 1;
                    if ((g ? b[2 * g - 1] : 0) >= e)
                        d = g;
                    else {
                        if (!(b[2 * g + 1] < e)) {
                            f = b[2 * g + 2];
                            break
                        }
                        c = g + 1
                    }
                }
            var h = f ? f.indexOf("cm-overlay ") : -1;
            return 0 > h ? f : 0 == h ? null : f.slice(0, h - 1)
        },
        getModeAt: function(a) {
            var b = this.doc.mode;
            return b.innerMode ? y.innerMode(b, this.getTokenAt(a).state).mode : b
        },
        getHelper: function(a, b) {
            return this.getHelpers(a, b)[0]
        },
        getHelpers: function(a, b) {
            var c = [];
            if (!Md.hasOwnProperty(b))
                return c;
            var d = Md[b]
              , e = this.getModeAt(a);
            if ("string" == typeof e[b])
                d[e[b]] && c.push(d[e[b]]);
            else if (e[b])
                for (var f = 0; f < e[b].length; f++) {
                    var g = d[e[b][f]];
                    g && c.push(g)
                }
            else
                e.helperType && d[e.helperType] ? c.push(d[e.helperType]) : d[e.name] && c.push(d[e.name]);
            for (var f = 0; f < d._global.length; f++) {
                var h = d._global[f];
                h.pred(e, this) && -1 == jg(c, h.val) && c.push(h.val)
            }
            return c
        },
        getStateAfter: function(a, b) {
            var c = this.doc;
            return a = Pa(c, null == a ? c.first + c.size - 1 : a),
            pb(this, a + 1, b)
        },
        cursorCoords: function(a, b) {
            var c, d = this.doc.sel.primary();
            return c = null == a ? d.head : "object" == typeof a ? Qa(this.doc, a) : a ? d.from() : d.to(),
            Pb(this, c, b || "page")
        },
        charCoords: function(a, b) {
            return Ob(this, Qa(this.doc, a), b || "page")
        },
        coordsChar: function(a, b) {
            return a = Nb(this, a, b || "page"),
            Sb(this, a.left, a.top)
        },
        lineAtHeight: function(a, b) {
            return a = Nb(this, {
                top: a,
                left: 0
            }, b || "page").top,
            pf(this.doc, a + this.display.viewOffset)
        },
        heightAtLine: function(a, b) {
            var d, c = !1;
            if ("number" == typeof a) {
                var e = this.doc.first + this.doc.size - 1;
                a < this.doc.first ? a = this.doc.first : a > e && (a = e,
                c = !0),
                d = kf(this.doc, a)
            } else
                d = a;
            return Mb(this, d, {
                top: 0,
                left: 0
            }, b || "page").top + (c ? this.doc.height - qf(d) : 0)
        },
        defaultTextHeight: function() {
            return Vb(this.display)
        },
        defaultCharWidth: function() {
            return Wb(this.display)
        },
        setGutterMarker: ic(function(a, b, c) {
            return Ad(this.doc, a, "gutter", function(a) {
                var d = a.gutterMarkers || (a.gutterMarkers = {});
                return d[b] = c,
                !c && sg(d) && (a.gutterMarkers = null),
                !0
            })
        }),
        clearGutter: ic(function(a) {
            var b = this
              , c = b.doc
              , d = c.first;
            c.iter(function(c) {
                c.gutterMarkers && c.gutterMarkers[a] && (c.gutterMarkers[a] = null,
                nc(b, d, "gutter"),
                sg(c.gutterMarkers) && (c.gutterMarkers = null)),
                ++d
            })
        }),
        lineInfo: function(a) {
            if ("number" == typeof a) {
                if (!Sa(this.doc, a))
                    return null;
                var b = a;
                if (a = kf(this.doc, a),
                !a)
                    return null
            } else {
                var b = of(a);
                if (null == b)
                    return null
            }
            return {
                line: b,
                handle: a,
                text: a.text,
                gutterMarkers: a.gutterMarkers,
                textClass: a.textClass,
                bgClass: a.bgClass,
                wrapClass: a.wrapClass,
                widgets: a.widgets
            }
        },
        getViewport: function() {
            return {
                from: this.display.viewFrom,
                to: this.display.viewTo
            }
        },
        addWidget: function(a, b, c, d, e) {
            var f = this.display;
            a = Pb(this, Qa(this.doc, a));
            var g = a.bottom
              , h = a.left;
            if (b.style.position = "absolute",
            b.setAttribute("cm-ignore-events", "true"),
            this.display.input.setUneditable(b),
            f.sizer.appendChild(b),
            "over" == d)
                g = a.top;
            else if ("above" == d || "near" == d) {
                var i = Math.max(f.wrapper.clientHeight, this.doc.height)
                  , j = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
                ("above" == d || a.bottom + b.offsetHeight > i) && a.top > b.offsetHeight ? g = a.top - b.offsetHeight : a.bottom + b.offsetHeight <= i && (g = a.bottom),
                h + b.offsetWidth > j && (h = j - b.offsetWidth)
            }
            b.style.top = g + "px",
            b.style.left = b.style.right = "",
            "right" == e ? (h = f.sizer.clientWidth - b.offsetWidth,
            b.style.right = "0px") : ("left" == e ? h = 0 : "middle" == e && (h = (f.sizer.clientWidth - b.offsetWidth) / 2),
            b.style.left = h + "px"),
            c && ud(this, h, g, h + b.offsetWidth, g + b.offsetHeight)
        },
        triggerOnKeyDown: ic(Yc),
        triggerOnKeyPress: ic(_c),
        triggerOnKeyUp: $c,
        execCommand: function(a) {
            return Pd.hasOwnProperty(a) ? Pd[a].call(null, this) : void 0
        },
        triggerElectric: ic(function(a) {
            Aa(this, a)
        }),
        findPosH: function(a, b, c, d) {
            var e = 1;
            0 > b && (e = -1,
            b = -b);
            for (var f = 0, g = Qa(this.doc, a); b > f && (g = Cd(this.doc, g, e, c, d),
            !g.hitSide); ++f)
                ;
            return g
        },
        moveH: ic(function(a, b) {
            var c = this;
            c.extendSelectionsBy(function(d) {
                return c.display.shift || c.doc.extend || d.empty() ? Cd(c.doc, d.head, a, b, c.options.rtlMoveVisually) : 0 > a ? d.from() : d.to()
            }, bg)
        }),
        deleteH: ic(function(a, b) {
            var c = this.doc.sel
              , d = this.doc;
            c.somethingSelected() ? d.replaceSelection("", null, "+delete") : Bd(this, function(c) {
                var e = Cd(d, c.head, a, b, !1);
                return 0 > a ? {
                    from: e,
                    to: c.head
                } : {
                    from: c.head,
                    to: e
                }
            })
        }),
        findPosV: function(a, b, c, d) {
            var e = 1
              , f = d;
            0 > b && (e = -1,
            b = -b);
            for (var g = 0, h = Qa(this.doc, a); b > g; ++g) {
                var i = Pb(this, h, "div");
                if (null == f ? f = i.left : i.left = f,
                h = Dd(this, i, e, c),
                h.hitSide)
                    break
            }
            return h
        },
        moveV: ic(function(a, b) {
            var c = this
              , d = this.doc
              , e = []
              , f = !c.display.shift && !d.extend && d.sel.somethingSelected();
            if (d.extendSelectionsBy(function(g) {
                if (f)
                    return 0 > a ? g.from() : g.to();
                var h = Pb(c, g.head, "div");
                null != g.goalColumn && (h.left = g.goalColumn),
                e.push(h.left);
                var i = Dd(c, h, a, b);
                return "page" == b && g == d.sel.primary() && wd(c, null, Ob(c, i, "div").top - h.top),
                i
            }, bg),
            e.length)
                for (var g = 0; g < d.sel.ranges.length; g++)
                    d.sel.ranges[g].goalColumn = e[g]
        }),
        findWordAt: function(a) {
            var b = this.doc
              , c = kf(b, a.line).text
              , d = a.ch
              , e = a.ch;
            if (c) {
                var f = this.getHelper(a, "wordChars");
                (a.xRel < 0 || e == c.length) && d ? --d : ++e;
                for (var g = c.charAt(d), h = rg(g, f) ? function(a) {
                    return rg(a, f)
                }
                : /\s/.test(g) ? function(a) {
                    return /\s/.test(a)
                }
                : function(a) {
                    return !/\s/.test(a) && !rg(a)
                }
                ; d > 0 && h(c.charAt(d - 1)); )
                    --d;
                for (; e < c.length && h(c.charAt(e)); )
                    ++e
            }
            return new Ma(ra(a.line, d),ra(a.line, e))
        },
        toggleOverwrite: function(a) {
            (null == a || a != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? Dg(this.display.cursorDiv, "CodeMirror-overwrite") : Cg(this.display.cursorDiv, "CodeMirror-overwrite"),
            Rf(this, "overwriteToggle", this, this.state.overwrite))
        },
        hasFocus: function() {
            return this.display.input.getField() == Ag()
        },
        isReadOnly: function() {
            return !(!this.options.readOnly && !this.doc.cantEdit)
        },
        scrollTo: ic(function(a, b) {
            (null != a || null != b) && yd(this),
            null != a && (this.curOp.scrollLeft = a),
            null != b && (this.curOp.scrollTop = b)
        }),
        getScrollInfo: function() {
            var a = this.display.scroller;
            return {
                left: a.scrollLeft,
                top: a.scrollTop,
                height: a.scrollHeight - tb(this) - this.display.barHeight,
                width: a.scrollWidth - tb(this) - this.display.barWidth,
                clientHeight: vb(this),
                clientWidth: ub(this)
            }
        },
        scrollIntoView: ic(function(a, b) {
            if (null == a ? (a = {
                from: this.doc.sel.primary().head,
                to: null
            },
            null == b && (b = this.options.cursorScrollMargin)) : "number" == typeof a ? a = {
                from: ra(a, 0),
                to: null
            } : null == a.from && (a = {
                from: a,
                to: null
            }),
            a.to || (a.to = a.from),
            a.margin = b || 0,
            null != a.from.line)
                yd(this),
                this.curOp.scrollToPos = a;
            else {
                var c = vd(this, Math.min(a.from.left, a.to.left), Math.min(a.from.top, a.to.top) - a.margin, Math.max(a.from.right, a.to.right), Math.max(a.from.bottom, a.to.bottom) + a.margin);
                this.scrollTo(c.scrollLeft, c.scrollTop)
            }
        }),
        setSize: ic(function(a, b) {
            function d(a) {
                return "number" == typeof a || /^\d+$/.test(String(a)) ? a + "px" : a
            }
            var c = this;
            null != a && (c.display.wrapper.style.width = d(a)),
            null != b && (c.display.wrapper.style.height = d(b)),
            c.options.lineWrapping && Ib(this);
            var e = c.display.viewFrom;
            c.doc.iter(e, c.display.viewTo, function(a) {
                if (a.widgets)
                    for (var b = 0; b < a.widgets.length; b++)
                        if (a.widgets[b].noHScroll) {
                            nc(c, e, "widget");
                            break
                        }
                ++e
            }),
            c.curOp.forceUpdate = !0,
            Rf(c, "refresh", this)
        }),
        operation: function(a) {
            return gc(this, a)
        },
        refresh: ic(function() {
            var a = this.display.cachedTextHeight;
            mc(this),
            this.curOp.forceUpdate = !0,
            Jb(this),
            this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop),
            I(this),
            (null == a || Math.abs(a - Vb(this.display)) > .5) && E(this),
            Rf(this, "refresh", this)
        }),
        swapDoc: ic(function(a) {
            var b = this.doc;
            return b.cm = null,
            jf(this, a),
            Jb(this),
            this.display.input.reset(),
            this.scrollTo(a.scrollLeft, a.scrollTop),
            this.curOp.forceScroll = !0,
            Tf(this, "swapDoc", this, b),
            b
        }),
        getInputField: function() {
            return this.display.input.getField()
        },
        getWrapperElement: function() {
            return this.display.wrapper
        },
        getScrollerElement: function() {
            return this.display.scroller
        },
        getGutterElement: function() {
            return this.display.gutters
        }
    },
    Yf(y);
    var Ed = y.defaults = {}
      , Fd = y.optionHandlers = {}
      , Hd = y.Init = {
        toString: function() {
            return "CodeMirror.Init"
        }
    };
    Gd("value", "", function(a, b) {
        a.setValue(b)
    }, !0),
    Gd("mode", null, function(a, b) {
        a.doc.modeOption = b,
        A(a)
    }, !0),
    Gd("indentUnit", 2, A, !0),
    Gd("indentWithTabs", !1),
    Gd("smartIndent", !0),
    Gd("tabSize", 4, function(a) {
        B(a),
        Jb(a),
        mc(a)
    }, !0),
    Gd("lineSeparator", null, function(a, b) {
        if (a.doc.lineSep = b,
        b) {
            var c = []
              , d = a.doc.first;
            a.doc.iter(function(a) {
                for (var e = 0; ; ) {
                    var f = a.text.indexOf(b, e);
                    if (-1 == f)
                        break;
                    e = f + b.length,
                    c.push(ra(d, f))
                }
                d++
            });
            for (var e = c.length - 1; e >= 0; e--)
                rd(a.doc, b, c[e], ra(c[e].line, c[e].ch + b.length))
        }
    }),
    Gd("specialChars", /[\u0000-\u001f\u007f\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(a, b, c) {
        a.state.specialChars = new RegExp(b.source + (b.test("	") ? "" : "|	"),"g"),
        c != y.Init && a.refresh()
    }),
    Gd("specialCharPlaceholder", Ve, function(a) {
        a.refresh()
    }, !0),
    Gd("electricChars", !0),
    Gd("inputStyle", p ? "contenteditable" : "textarea", function() {
        throw new Error("inputStyle can not (yet) be changed in a running editor")
    }, !0),
    Gd("rtlMoveVisually", !s),
    Gd("wholeLineUpdateBefore", !0),
    Gd("theme", "default", function(a) {
        F(a),
        G(a)
    }, !0),
    Gd("keyMap", "default", function(a, b, c) {
        var d = Vd(b)
          , e = c != y.Init && Vd(c);
        e && e.detach && e.detach(a, d),
        d.attach && d.attach(a, e || null)
    }),
    Gd("extraKeys", null),
    Gd("lineWrapping", !1, C, !0),
    Gd("gutters", [], function(a) {
        L(a.options),
        G(a)
    }, !0),
    Gd("fixedGutter", !0, function(a, b) {
        a.display.gutters.style.left = b ? W(a.display) + "px" : "0",
        a.refresh()
    }, !0),
    Gd("coverGutterNextToScrollbar", !1, function(a) {
        Q(a)
    }, !0),
    Gd("scrollbarStyle", "native", function(a) {
        P(a),
        Q(a),
        a.display.scrollbars.setScrollTop(a.doc.scrollTop),
        a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)
    }, !0),
    Gd("lineNumbers", !1, function(a) {
        L(a.options),
        G(a)
    }, !0),
    Gd("firstLineNumber", 1, G, !0),
    Gd("lineNumberFormatter", function(a) {
        return a
    }, G, !0),
    Gd("showCursorWhenSelecting", !1, hb, !0),
    Gd("resetSelectionOnContextMenu", !0),
    Gd("lineWiseCopyCut", !0),
    Gd("readOnly", !1, function(a, b) {
        "nocursor" == b ? (cd(a),
        a.display.input.blur(),
        a.display.disabled = !0) : a.display.disabled = !1,
        a.display.input.readOnlyChanged(b)
    }),
    Gd("disableInput", !1, function(a, b) {
        b || a.display.input.reset()
    }, !0),
    Gd("dragDrop", !0, uc),
    Gd("allowDropFileTypes", null),
    Gd("cursorBlinkRate", 530),
    Gd("cursorScrollMargin", 0),
    Gd("cursorHeight", 1, hb, !0),
    Gd("singleCursorHeightPerLine", !0, hb, !0),
    Gd("workTime", 100),
    Gd("workDelay", 100),
    Gd("flattenSpans", !0, B, !0),
    Gd("addModeClass", !1, B, !0),
    Gd("pollInterval", 100),
    Gd("undoDepth", 200, function(a, b) {
        a.doc.history.undoDepth = b
    }),
    Gd("historyEventDelay", 1250),
    Gd("viewportMargin", 10, function(a) {
        a.refresh()
    }, !0),
    Gd("maxHighlightLength", 1e4, B, !0),
    Gd("moveInputWithCursor", !0, function(a, b) {
        b || a.display.input.resetPosition()
    }),
    Gd("tabindex", null, function(a, b) {
        a.display.input.getField().tabIndex = b || ""
    }),
    Gd("autofocus", null);
    var Id = y.modes = {}
      , Jd = y.mimeModes = {};
    y.defineMode = function(a, b) {
        y.defaults.mode || "null" == a || (y.defaults.mode = a),
        arguments.length > 2 && (b.dependencies = Array.prototype.slice.call(arguments, 2)),
        Id[a] = b
    }
    ,
    y.defineMIME = function(a, b) {
        Jd[a] = b
    }
    ,
    y.resolveMode = function(a) {
        if ("string" == typeof a && Jd.hasOwnProperty(a))
            a = Jd[a];
        else if (a && "string" == typeof a.name && Jd.hasOwnProperty(a.name)) {
            var b = Jd[a.name];
            "string" == typeof b && (b = {
                name: b
            }),
            a = mg(b, a),
            a.name = b.name
        } else if ("string" == typeof a && /^[\w\-]+\/[\w\-]+\+xml$/.test(a))
            return y.resolveMode("application/xml");
        return "string" == typeof a ? {
            name: a
        } : a || {
            name: "null"
        }
    }
    ,
    y.getMode = function(a, b) {
        var b = y.resolveMode(b)
          , c = Id[b.name];
        if (!c)
            return y.getMode(a, "text/plain");
        var d = c(a, b);
        if (Kd.hasOwnProperty(b.name)) {
            var e = Kd[b.name];
            for (var f in e)
                e.hasOwnProperty(f) && (d.hasOwnProperty(f) && (d["_" + f] = d[f]),
                d[f] = e[f])
        }
        if (d.name = b.name,
        b.helperType && (d.helperType = b.helperType),
        b.modeProps)
            for (var f in b.modeProps)
                d[f] = b.modeProps[f];
        return d
    }
    ,
    y.defineMode("null", function() {
        return {
            token: function(a) {
                a.skipToEnd()
            }
        }
    }),
    y.defineMIME("text/plain", "null");
    var Kd = y.modeExtensions = {};
    y.extendMode = function(a, b) {
        var c = Kd.hasOwnProperty(a) ? Kd[a] : Kd[a] = {};
        ng(b, c)
    }
    ,
    y.defineExtension = function(a, b) {
        y.prototype[a] = b
    }
    ,
    y.defineDocExtension = function(a, b) {
        ef.prototype[a] = b
    }
    ,
    y.defineOption = Gd;
    var Ld = [];
    y.defineInitHook = function(a) {
        Ld.push(a)
    }
    ;
    var Md = y.helpers = {};
    y.registerHelper = function(a, b, c) {
        Md.hasOwnProperty(a) || (Md[a] = y[a] = {
            _global: []
        }),
        Md[a][b] = c
    }
    ,
    y.registerGlobalHelper = function(a, b, c, d) {
        y.registerHelper(a, b, d),
        Md[a]._global.push({
            pred: c,
            val: d
        })
    }
    ;
    var Nd = y.copyState = function(a, b) {
        if (b === !0)
            return b;
        if (a.copyState)
            return a.copyState(b);
        var c = {};
        for (var d in b) {
            var e = b[d];
            e instanceof Array && (e = e.concat([])),
            c[d] = e
        }
        return c
    }
      , Od = y.startState = function(a, b, c) {
        return a.startState ? a.startState(b, c) : !0
    }
    ;
    y.innerMode = function(a, b) {
        for (; a.innerMode; ) {
            var c = a.innerMode(b);
            if (!c || c.mode == a)
                break;
            b = c.state,
            a = c.mode
        }
        return c || {
            mode: a,
            state: b
        }
    }
    ;
    var Pd = y.commands = {
        selectAll: function(a) {
            a.setSelection(ra(a.firstLine(), 0), ra(a.lastLine()), _f)
        },
        singleSelection: function(a) {
            a.setSelection(a.getCursor("anchor"), a.getCursor("head"), _f)
        },
        killLine: function(a) {
            Bd(a, function(b) {
                if (b.empty()) {
                    var c = kf(a.doc, b.head.line).text.length;
                    return b.head.ch == c && b.head.line < a.lastLine() ? {
                        from: b.head,
                        to: ra(b.head.line + 1, 0)
                    } : {
                        from: b.head,
                        to: ra(b.head.line, c)
                    }
                }
                return {
                    from: b.from(),
                    to: b.to()
                }
            })
        },
        deleteLine: function(a) {
            Bd(a, function(b) {
                return {
                    from: ra(b.from().line, 0),
                    to: Qa(a.doc, ra(b.to().line + 1, 0))
                }
            })
        },
        delLineLeft: function(a) {
            Bd(a, function(a) {
                return {
                    from: ra(a.from().line, 0),
                    to: a.from()
                }
            })
        },
        delWrappedLineLeft: function(a) {
            Bd(a, function(b) {
                var c = a.charCoords(b.head, "div").top + 5
                  , d = a.coordsChar({
                    left: 0,
                    top: c
                }, "div");
                return {
                    from: d,
                    to: b.from()
                }
            })
        },
        delWrappedLineRight: function(a) {
            Bd(a, function(b) {
                var c = a.charCoords(b.head, "div").top + 5
                  , d = a.coordsChar({
                    left: a.display.lineDiv.offsetWidth + 100,
                    top: c
                }, "div");
                return {
                    from: b.from(),
                    to: d
                }
            })
        },
        undo: function(a) {
            a.undo()
        },
        redo: function(a) {
            a.redo()
        },
        undoSelection: function(a) {
            a.undoSelection()
        },
        redoSelection: function(a) {
            a.redoSelection()
        },
        goDocStart: function(a) {
            a.extendSelection(ra(a.firstLine(), 0))
        },
        goDocEnd: function(a) {
            a.extendSelection(ra(a.lastLine()))
        },
        goLineStart: function(a) {
            a.extendSelectionsBy(function(b) {
                return Zg(a, b.head.line)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineStartSmart: function(a) {
            a.extendSelectionsBy(function(b) {
                return _g(a, b.head)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineEnd: function(a) {
            a.extendSelectionsBy(function(b) {
                return $g(a, b.head.line)
            }, {
                origin: "+move",
                bias: -1
            })
        },
        goLineRight: function(a) {
            a.extendSelectionsBy(function(b) {
                var c = a.charCoords(b.head, "div").top + 5;
                return a.coordsChar({
                    left: a.display.lineDiv.offsetWidth + 100,
                    top: c
                }, "div")
            }, bg)
        },
        goLineLeft: function(a) {
            a.extendSelectionsBy(function(b) {
                var c = a.charCoords(b.head, "div").top + 5;
                return a.coordsChar({
                    left: 0,
                    top: c
                }, "div")
            }, bg)
        },
        goLineLeftSmart: function(a) {
            a.extendSelectionsBy(function(b) {
                var c = a.charCoords(b.head, "div").top + 5
                  , d = a.coordsChar({
                    left: 0,
                    top: c
                }, "div");
                return d.ch < a.getLine(d.line).search(/\S/) ? _g(a, b.head) : d
            }, bg)
        },
        goLineUp: function(a) {
            a.moveV(-1, "line")
        },
        goLineDown: function(a) {
            a.moveV(1, "line")
        },
        goPageUp: function(a) {
            a.moveV(-1, "page")
        },
        goPageDown: function(a) {
            a.moveV(1, "page")
        },
        goCharLeft: function(a) {
            a.moveH(-1, "char")
        },
        goCharRight: function(a) {
            a.moveH(1, "char")
        },
        goColumnLeft: function(a) {
            a.moveH(-1, "column")
        },
        goColumnRight: function(a) {
            a.moveH(1, "column")
        },
        goWordLeft: function(a) {
            a.moveH(-1, "word")
        },
        goGroupRight: function(a) {
            a.moveH(1, "group")
        },
        goGroupLeft: function(a) {
            a.moveH(-1, "group")
        },
        goWordRight: function(a) {
            a.moveH(1, "word")
        },
        delCharBefore: function(a) {
            a.deleteH(-1, "char")
        },
        delCharAfter: function(a) {
            a.deleteH(1, "char")
        },
        delWordBefore: function(a) {
            a.deleteH(-1, "word")
        },
        delWordAfter: function(a) {
            a.deleteH(1, "word")
        },
        delGroupBefore: function(a) {
            a.deleteH(-1, "group")
        },
        delGroupAfter: function(a) {
            a.deleteH(1, "group")
        },
        indentAuto: function(a) {
            a.indentSelection("smart")
        },
        indentMore: function(a) {
            a.indentSelection("add")
        },
        indentLess: function(a) {
            a.indentSelection("subtract")
        },
        insertTab: function(a) {
            a.replaceSelection("	")
        },
        insertSoftTab: function(a) {
            for (var b = [], c = a.listSelections(), d = a.options.tabSize, e = 0; e < c.length; e++) {
                var f = c[e].from()
                  , g = dg(a.getLine(f.line), f.ch, d);
                b.push(new Array(d - g % d + 1).join(" "))
            }
            a.replaceSelections(b)
        },
        defaultTab: function(a) {
            a.somethingSelected() ? a.indentSelection("add") : a.execCommand("insertTab")
        },
        transposeChars: function(a) {
            gc(a, function() {
                for (var b = a.listSelections(), c = [], d = 0; d < b.length; d++) {
                    var e = b[d].head
                      , f = kf(a.doc, e.line).text;
                    if (f)
                        if (e.ch == f.length && (e = new ra(e.line,e.ch - 1)),
                        e.ch > 0)
                            e = new ra(e.line,e.ch + 1),
                            a.replaceRange(f.charAt(e.ch - 1) + f.charAt(e.ch - 2), ra(e.line, e.ch - 2), e, "+transpose");
                        else if (e.line > a.doc.first) {
                            var g = kf(a.doc, e.line - 1).text;
                            g && a.replaceRange(f.charAt(0) + a.doc.lineSeparator() + g.charAt(g.length - 1), ra(e.line - 1, g.length - 1), ra(e.line, 1), "+transpose")
                        }
                    c.push(new Ma(e,e))
                }
                a.setSelections(c)
            })
        },
        newlineAndIndent: function(a) {
            gc(a, function() {
                for (var b = a.listSelections().length, c = 0; b > c; c++) {
                    var d = a.listSelections()[c];
                    a.replaceRange(a.doc.lineSeparator(), d.anchor, d.head, "+input"),
                    a.indentLine(d.from().line + 1, null, !0)
                }
                xd(a)
            })
        },
        toggleOverwrite: function(a) {
            a.toggleOverwrite()
        }
    }
      , Qd = y.keyMap = {};
    Qd.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    },
    Qd.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    },
    Qd.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    },
    Qd.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
    },
    Qd["default"] = q ? Qd.macDefault : Qd.pcDefault,
    y.normalizeKeyMap = function(a) {
        var b = {};
        for (var c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (/^(name|fallthrough|(de|at)tach)$/.test(c))
                    continue;
                if ("..." == d) {
                    delete a[c];
                    continue
                }
                for (var e = kg(c.split(" "), Rd), f = 0; f < e.length; f++) {
                    var g, h;
                    f == e.length - 1 ? (h = e.join(" "),
                    g = d) : (h = e.slice(0, f + 1).join(" "),
                    g = "...");
                    var i = b[h];
                    if (i) {
                        if (i != g)
                            throw new Error("Inconsistent bindings for " + h)
                    } else
                        b[h] = g
                }
                delete a[c]
            }
        for (var j in b)
            a[j] = b[j];
        return a
    }
    ;
    var Sd = y.lookupKey = function(a, b, c, d) {
        b = Vd(b);
        var e = b.call ? b.call(a, d) : b[a];
        if (e === !1)
            return "nothing";
        if ("..." === e)
            return "multi";
        if (null != e && c(e))
            return "handled";
        if (b.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(b.fallthrough))
                return Sd(a, b.fallthrough, c, d);
            for (var f = 0; f < b.fallthrough.length; f++) {
                var g = Sd(a, b.fallthrough[f], c, d);
                if (g)
                    return g
            }
        }
    }
      , Td = y.isModifierKey = function(a) {
        var b = "string" == typeof a ? a : Tg[a.keyCode];
        return "Ctrl" == b || "Alt" == b || "Shift" == b || "Mod" == b
    }
      , Ud = y.keyName = function(a, b) {
        if (k && 34 == a.keyCode && a["char"])
            return !1;
        var c = Tg[a.keyCode]
          , d = c;
        return null == d || a.altGraphKey ? !1 : (a.altKey && "Alt" != c && (d = "Alt-" + d),
        (u ? a.metaKey : a.ctrlKey) && "Ctrl" != c && (d = "Ctrl-" + d),
        (u ? a.ctrlKey : a.metaKey) && "Cmd" != c && (d = "Cmd-" + d),
        !b && a.shiftKey && "Shift" != c && (d = "Shift-" + d),
        d)
    }
    ;
    y.fromTextArea = function(a, b) {
        function d() {
            a.value = i.getValue()
        }
        if (b = b ? ng(b) : {},
        b.value = a.value,
        !b.tabindex && a.tabIndex && (b.tabindex = a.tabIndex),
        !b.placeholder && a.placeholder && (b.placeholder = a.placeholder),
        null == b.autofocus) {
            var c = Ag();
            b.autofocus = c == a || null != a.getAttribute("autofocus") && c == document.body
        }
        if (a.form && (Nf(a.form, "submit", d),
        !b.leaveSubmitMethodAlone)) {
            var e = a.form
              , f = e.submit;
            try {
                var g = e.submit = function() {
                    d(),
                    e.submit = f,
                    e.submit(),
                    e.submit = g
                }
            } catch (h) {}
        }
        b.finishInit = function(b) {
            b.save = d,
            b.getTextArea = function() {
                return a
            }
            ,
            b.toTextArea = function() {
                b.toTextArea = isNaN,
                d(),
                a.parentNode.removeChild(b.getWrapperElement()),
                a.style.display = "",
                a.form && (Qf(a.form, "submit", d),
                "function" == typeof a.form.submit && (a.form.submit = f))
            }
        }
        ,
        a.style.display = "none";
        var i = y(function(b) {
            a.parentNode.insertBefore(b, a.nextSibling)
        }, b);
        return i
    }
    ;
    var Wd = y.StringStream = function(a, b) {
        this.pos = this.start = 0,
        this.string = a,
        this.tabSize = b || 8,
        this.lastColumnPos = this.lastColumnValue = 0,
        this.lineStart = 0
    }
    ;
    Wd.prototype = {
        eol: function() {
            return this.pos >= this.string.length
        },
        sol: function() {
            return this.pos == this.lineStart
        },
        peek: function() {
            return this.string.charAt(this.pos) || void 0
        },
        next: function() {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
        },
        eat: function(a) {
            var b = this.string.charAt(this.pos);
            if ("string" == typeof a)
                var c = b == a;
            else
                var c = b && (a.test ? a.test(b) : a(b));
            return c ? (++this.pos,
            b) : void 0
        },
        eatWhile: function(a) {
            for (var b = this.pos; this.eat(a); )
                ;
            return this.pos > b
        },
        eatSpace: function() {
            for (var a = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
                ++this.pos;
            return this.pos > a
        },
        skipToEnd: function() {
            this.pos = this.string.length
        },
        skipTo: function(a) {
            var b = this.string.indexOf(a, this.pos);
            return b > -1 ? (this.pos = b,
            !0) : void 0
        },
        backUp: function(a) {
            this.pos -= a
        },
        column: function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = dg(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
            this.lastColumnPos = this.start),
            this.lastColumnValue - (this.lineStart ? dg(this.string, this.lineStart, this.tabSize) : 0)
        },
        indentation: function() {
            return dg(this.string, null, this.tabSize) - (this.lineStart ? dg(this.string, this.lineStart, this.tabSize) : 0)
        },
        match: function(a, b, c) {
            if ("string" != typeof a) {
                var f = this.string.slice(this.pos).match(a);
                return f && f.index > 0 ? null : (f && b !== !1 && (this.pos += f[0].length),
                f)
            }
            var d = function(a) {
                return c ? a.toLowerCase() : a
            }
              , e = this.string.substr(this.pos, a.length);
            return d(e) == d(a) ? (b !== !1 && (this.pos += a.length),
            !0) : void 0
        },
        current: function() {
            return this.string.slice(this.start, this.pos)
        },
        hideFirstChars: function(a, b) {
            this.lineStart += a;
            try {
                return b()
            } finally {
                this.lineStart -= a
            }
        }
    };
    var Xd = 0
      , Yd = y.TextMarker = function(a, b) {
        this.lines = [],
        this.type = b,
        this.doc = a,
        this.id = ++Xd
    }
    ;
    Yf(Yd),
    Yd.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            var a = this.doc.cm
              , b = a && !a.curOp;
            if (b && Zb(a),
            Xf(this, "clear")) {
                var c = this.find();
                c && Tf(this, "clear", c.from, c.to)
            }
            for (var d = null, e = null, f = 0; f < this.lines.length; ++f) {
                var g = this.lines[f]
                  , h = ee(g.markedSpans, this);
                a && !this.collapsed ? nc(a, of(g), "text") : a && (null != h.to && (e = of(g)),
                null != h.from && (d = of(g))),
                g.markedSpans = fe(g.markedSpans, h),
                null == h.from && this.collapsed && !Ae(this.doc, g) && a && nf(g, Vb(a.display))
            }
            if (a && this.collapsed && !a.options.lineWrapping)
                for (var f = 0; f < this.lines.length; ++f) {
                    var i = we(this.lines[f])
                      , j = J(i);
                    j > a.display.maxLineLength && (a.display.maxLine = i,
                    a.display.maxLineLength = j,
                    a.display.maxLineChanged = !0)
                }
            null != d && a && this.collapsed && mc(a, d, e + 1),
            this.lines.length = 0,
            this.explicitlyCleared = !0,
            this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
            a && cb(a.doc)),
            a && Tf(a, "markerCleared", a, this),
            b && _b(a),
            this.parent && this.parent.clear()
        }
    }
    ,
    Yd.prototype.find = function(a, b) {
        null == a && "bookmark" == this.type && (a = 1);
        for (var c, d, e = 0; e < this.lines.length; ++e) {
            var f = this.lines[e]
              , g = ee(f.markedSpans, this);
            if (null != g.from && (c = ra(b ? f : of(f), g.from),
            -1 == a))
                return c;
            if (null != g.to && (d = ra(b ? f : of(f), g.to),
            1 == a))
                return d
        }
        return c && {
            from: c,
            to: d
        }
    }
    ,
    Yd.prototype.changed = function() {
        var a = this.find(-1, !0)
          , b = this
          , c = this.doc.cm;
        a && c && gc(c, function() {
            var d = a.line
              , e = of(a.line)
              , f = Ab(c, e);
            if (f && (Hb(f),
            c.curOp.selectionChanged = c.curOp.forceUpdate = !0),
            c.curOp.updateMaxLine = !0,
            !Ae(b.doc, d) && null != b.height) {
                var g = b.height;
                b.height = null;
                var h = Ee(b) - g;
                h && nf(d, d.height + h)
            }
        })
    }
    ,
    Yd.prototype.attachLine = function(a) {
        if (!this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            b.maybeHiddenMarkers && -1 != jg(b.maybeHiddenMarkers, this) || (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(a)
    }
    ,
    Yd.prototype.detachLine = function(a) {
        if (this.lines.splice(jg(this.lines, a), 1),
        !this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this)
        }
    }
    ;
    var Xd = 0
      , $d = y.SharedTextMarker = function(a, b) {
        this.markers = a,
        this.primary = b;
        for (var c = 0; c < a.length; ++c)
            a[c].parent = this
    }
    ;
    Yf($d),
    $d.prototype.clear = function() {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var a = 0; a < this.markers.length; ++a)
                this.markers[a].clear();
            Tf(this, "clear")
        }
    }
    ,
    $d.prototype.find = function(a, b) {
        return this.primary.find(a, b)
    }
    ;
    var Ce = y.LineWidget = function(a, b, c) {
        if (c)
            for (var d in c)
                c.hasOwnProperty(d) && (this[d] = c[d]);
        this.doc = a,
        this.node = b
    }
    ;
    Yf(Ce),
    Ce.prototype.clear = function() {
        var a = this.doc.cm
          , b = this.line.widgets
          , c = this.line
          , d = of(c);
        if (null != d && b) {
            for (var e = 0; e < b.length; ++e)
                b[e] == this && b.splice(e--, 1);
            b.length || (c.widgets = null);
            var f = Ee(this);
            nf(c, Math.max(0, c.height - f)),
            a && gc(a, function() {
                De(a, c, -f),
                nc(a, d, "widget")
            })
        }
    }
    ,
    Ce.prototype.changed = function() {
        var a = this.height
          , b = this.doc.cm
          , c = this.line;
        this.height = null;
        var d = Ee(this) - a;
        d && (nf(c, c.height + d),
        b && gc(b, function() {
            b.curOp.forceUpdate = !0,
            De(b, c, d)
        }))
    }
    ;
    var Ge = y.Line = function(a, b, c) {
        this.text = a,
        oe(this, b),
        this.height = c ? c(this) : 1
    }
    ;
    Yf(Ge),
    Ge.prototype.lineNo = function() {
        return of(this)
    }
    ;
    var Re = {}
      , Se = {};
    bf.prototype = {
        chunkSize: function() {
            return this.lines.length
        },
        removeInner: function(a, b) {
            for (var c = a, d = a + b; d > c; ++c) {
                var e = this.lines[c];
                this.height -= e.height,
                Ie(e),
                Tf(e, "delete")
            }
            this.lines.splice(a, b)
        },
        collapse: function(a) {
            a.push.apply(a, this.lines)
        },
        insertInner: function(a, b, c) {
            this.height += c,
            this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a));
            for (var d = 0; d < b.length; ++d)
                b[d].parent = this
        },
        iterN: function(a, b, c) {
            for (var d = a + b; d > a; ++a)
                if (c(this.lines[a]))
                    return !0
        }
    },
    cf.prototype = {
        chunkSize: function() {
            return this.size
        },
        removeInner: function(a, b) {
            this.size -= b;
            for (var c = 0; c < this.children.length; ++c) {
                var d = this.children[c]
                  , e = d.chunkSize();
                if (e > a) {
                    var f = Math.min(b, e - a)
                      , g = d.height;
                    if (d.removeInner(a, f),
                    this.height -= g - d.height,
                    e == f && (this.children.splice(c--, 1),
                    d.parent = null),
                    0 == (b -= f))
                        break;
                    a = 0
                } else
                    a -= e
            }
            if (this.size - b < 25 && (this.children.length > 1 || !(this.children[0]instanceof bf))) {
                var h = [];
                this.collapse(h),
                this.children = [new bf(h)],
                this.children[0].parent = this
            }
        },
        collapse: function(a) {
            for (var b = 0; b < this.children.length; ++b)
                this.children[b].collapse(a)
        },
        insertInner: function(a, b, c) {
            this.size += b.length,
            this.height += c;
            for (var d = 0; d < this.children.length; ++d) {
                var e = this.children[d]
                  , f = e.chunkSize();
                if (f >= a) {
                    if (e.insertInner(a, b, c),
                    e.lines && e.lines.length > 50) {
                        for (; e.lines.length > 50; ) {
                            var g = e.lines.splice(e.lines.length - 25, 25)
                              , h = new bf(g);
                            e.height -= h.height,
                            this.children.splice(d + 1, 0, h),
                            h.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                a -= f
            }
        },
        maybeSpill: function() {
            if (!(this.children.length <= 10)) {
                var a = this;
                do {
                    var b = a.children.splice(a.children.length - 5, 5)
                      , c = new cf(b);
                    if (a.parent) {
                        a.size -= c.size,
                        a.height -= c.height;
                        var e = jg(a.parent.children, a);
                        a.parent.children.splice(e + 1, 0, c)
                    } else {
                        var d = new cf(a.children);
                        d.parent = a,
                        a.children = [d, c],
                        a = d
                    }
                    c.parent = a.parent
                } while (a.children.length > 10);a.parent.maybeSpill()
            }
        },
        iterN: function(a, b, c) {
            for (var d = 0; d < this.children.length; ++d) {
                var e = this.children[d]
                  , f = e.chunkSize();
                if (f > a) {
                    var g = Math.min(b, f - a);
                    if (e.iterN(a, g, c))
                        return !0;
                    if (0 == (b -= g))
                        break;
                    a = 0
                } else
                    a -= f
            }
        }
    };
    var df = 0
      , ef = y.Doc = function(a, b, c, d) {
        if (!(this instanceof ef))
            return new ef(a,b,c,d);
        null == c && (c = 0),
        cf.call(this, [new bf([new Ge("",null)])]),
        this.first = c,
        this.scrollTop = this.scrollLeft = 0,
        this.cantEdit = !1,
        this.cleanGeneration = 1,
        this.frontier = c;
        var e = ra(c, 0);
        this.sel = Oa(e),
        this.history = new sf(null),
        this.id = ++df,
        this.modeOption = b,
        this.lineSep = d,
        this.extend = !1,
        "string" == typeof a && (a = this.splitLines(a)),
        af(this, {
            from: e,
            to: e,
            text: a
        }),
        _a(this, Oa(e), _f)
    }
    ;
    ef.prototype = mg(cf.prototype, {
        constructor: ef,
        iter: function(a, b, c) {
            c ? this.iterN(a - this.first, b - a, c) : this.iterN(this.first, this.first + this.size, a)
        },
        insert: function(a, b) {
            for (var c = 0, d = 0; d < b.length; ++d)
                c += b[d].height;
            this.insertInner(a - this.first, b, c)
        },
        remove: function(a, b) {
            this.removeInner(a - this.first, b)
        },
        getValue: function(a) {
            var b = mf(this, this.first, this.first + this.size);
            return a === !1 ? b : b.join(a || this.lineSeparator())
        },
        setValue: jc(function(a) {
            var b = ra(this.first, 0)
              , c = this.first + this.size - 1;
            ld(this, {
                from: b,
                to: ra(c, kf(this, c).text.length),
                text: this.splitLines(a),
                origin: "setValue",
                full: !0
            }, !0),
            _a(this, Oa(b))
        }),
        replaceRange: function(a, b, c, d) {
            b = Qa(this, b),
            c = c ? Qa(this, c) : b,
            rd(this, a, b, c, d)
        },
        getRange: function(a, b, c) {
            var d = lf(this, Qa(this, a), Qa(this, b));
            return c === !1 ? d : d.join(c || this.lineSeparator())
        },
        getLine: function(a) {
            var b = this.getLineHandle(a);
            return b && b.text
        },
        getLineHandle: function(a) {
            return Sa(this, a) ? kf(this, a) : void 0
        },
        getLineNumber: function(a) {
            return of(a)
        },
        getLineHandleVisualStart: function(a) {
            return "number" == typeof a && (a = kf(this, a)),
            we(a)
        },
        lineCount: function() {
            return this.size
        },
        firstLine: function() {
            return this.first
        },
        lastLine: function() {
            return this.first + this.size - 1
        },
        clipPos: function(a) {
            return Qa(this, a)
        },
        getCursor: function(a) {
            var c, b = this.sel.primary();
            return c = null == a || "head" == a ? b.head : "anchor" == a ? b.anchor : "end" == a || "to" == a || a === !1 ? b.to() : b.from()
        },
        listSelections: function() {
            return this.sel.ranges
        },
        somethingSelected: function() {
            return this.sel.somethingSelected()
        },
        setCursor: jc(function(a, b, c) {
            Ya(this, Qa(this, "number" == typeof a ? ra(a, b || 0) : a), null, c)
        }),
        setSelection: jc(function(a, b, c) {
            Ya(this, Qa(this, a), Qa(this, b || a), c)
        }),
        extendSelection: jc(function(a, b, c) {
            Va(this, Qa(this, a), b && Qa(this, b), c)
        }),
        extendSelections: jc(function(a, b) {
            Wa(this, Ta(this, a), b)
        }),
        extendSelectionsBy: jc(function(a, b) {
            var c = kg(this.sel.ranges, a);
            Wa(this, Ta(this, c), b)
        }),
        setSelections: jc(function(a, b, c) {
            if (a.length) {
                for (var d = 0, e = []; d < a.length; d++)
                    e[d] = new Ma(Qa(this, a[d].anchor),Qa(this, a[d].head));
                null == b && (b = Math.min(a.length - 1, this.sel.primIndex)),
                _a(this, Na(e, b), c)
            }
        }),
        addSelection: jc(function(a, b, c) {
            var d = this.sel.ranges.slice(0);
            d.push(new Ma(Qa(this, a),Qa(this, b || a))),
            _a(this, Na(d, d.length - 1), c)
        }),
        getSelection: function(a) {
            for (var c, b = this.sel.ranges, d = 0; d < b.length; d++) {
                var e = lf(this, b[d].from(), b[d].to());
                c = c ? c.concat(e) : e
            }
            return a === !1 ? c : c.join(a || this.lineSeparator())
        },
        getSelections: function(a) {
            for (var b = [], c = this.sel.ranges, d = 0; d < c.length; d++) {
                var e = lf(this, c[d].from(), c[d].to());
                a !== !1 && (e = e.join(a || this.lineSeparator())),
                b[d] = e
            }
            return b
        },
        replaceSelection: function(a, b, c) {
            for (var d = [], e = 0; e < this.sel.ranges.length; e++)
                d[e] = a;
            this.replaceSelections(d, b, c || "+input")
        },
        replaceSelections: jc(function(a, b, c) {
            for (var d = [], e = this.sel, f = 0; f < e.ranges.length; f++) {
                var g = e.ranges[f];
                d[f] = {
                    from: g.from(),
                    to: g.to(),
                    text: this.splitLines(a[f]),
                    origin: c
                }
            }
            for (var h = b && "end" != b && jd(this, d, b), f = d.length - 1; f >= 0; f--)
                ld(this, d[f]);
            h ? $a(this, h) : this.cm && xd(this.cm)
        }),
        undo: jc(function() {
            nd(this, "undo")
        }),
        redo: jc(function() {
            nd(this, "redo")
        }),
        undoSelection: jc(function() {
            nd(this, "undo", !0)
        }),
        redoSelection: jc(function() {
            nd(this, "redo", !0)
        }),
        setExtending: function(a) {
            this.extend = a
        },
        getExtending: function() {
            return this.extend
        },
        historySize: function() {
            for (var a = this.history, b = 0, c = 0, d = 0; d < a.done.length; d++)
                a.done[d].ranges || ++b;
            for (var d = 0; d < a.undone.length; d++)
                a.undone[d].ranges || ++c;
            return {
                undo: b,
                redo: c
            }
        },
        clearHistory: function() {
            this.history = new sf(this.history.maxGeneration)
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0)
        },
        changeGeneration: function(a) {
            return a && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
        },
        isClean: function(a) {
            return this.history.generation == (a || this.cleanGeneration)
        },
        getHistory: function() {
            return {
                done: Df(this.history.done),
                undone: Df(this.history.undone)
            }
        },
        setHistory: function(a) {
            var b = this.history = new sf(this.history.maxGeneration);
            b.done = Df(a.done.slice(0), null, !0),
            b.undone = Df(a.undone.slice(0), null, !0)
        },
        addLineClass: jc(function(a, b, c) {
            return Ad(this, a, "gutter" == b ? "gutter" : "class", function(a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass";
                if (a[d]) {
                    if (Bg(c).test(a[d]))
                        return !1;
                    a[d] += " " + c
                } else
                    a[d] = c;
                return !0
            })
        }),
        removeLineClass: jc(function(a, b, c) {
            return Ad(this, a, "gutter" == b ? "gutter" : "class", function(a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass"
                  , e = a[d];
                if (!e)
                    return !1;
                if (null == c)
                    a[d] = null;
                else {
                    var f = e.match(Bg(c));
                    if (!f)
                        return !1;
                    var g = f.index + f[0].length;
                    a[d] = e.slice(0, f.index) + (f.index && g != e.length ? " " : "") + e.slice(g) || null
                }
                return !0
            })
        }),
        addLineWidget: jc(function(a, b, c) {
            return Fe(this, a, b, c)
        }),
        removeLineWidget: function(a) {
            a.clear()
        },
        markText: function(a, b, c) {
            return Zd(this, Qa(this, a), Qa(this, b), c, c && c.type || "range")
        },
        setBookmark: function(a, b) {
            var c = {
                replacedWith: b && (null == b.nodeType ? b.widget : b),
                insertLeft: b && b.insertLeft,
                clearWhenEmpty: !1,
                shared: b && b.shared,
                handleMouseEvents: b && b.handleMouseEvents
            };
            return a = Qa(this, a),
            Zd(this, a, a, c, "bookmark")
        },
        findMarksAt: function(a) {
            a = Qa(this, a);
            var b = []
              , c = kf(this, a.line).markedSpans;
            if (c)
                for (var d = 0; d < c.length; ++d) {
                    var e = c[d];
                    (null == e.from || e.from <= a.ch) && (null == e.to || e.to >= a.ch) && b.push(e.marker.parent || e.marker)
                }
            return b
        },
        findMarks: function(a, b, c) {
            a = Qa(this, a),
            b = Qa(this, b);
            var d = []
              , e = a.line;
            return this.iter(a.line, b.line + 1, function(f) {
                var g = f.markedSpans;
                if (g)
                    for (var h = 0; h < g.length; h++) {
                        var i = g[h];
                        null != i.to && e == a.line && a.ch >= i.to || null == i.from && e != a.line || null != i.from && e == b.line && i.from >= b.ch || c && !c(i.marker) || d.push(i.marker.parent || i.marker)
                    }
                ++e
            }),
            d
        },
        getAllMarks: function() {
            var a = [];
            return this.iter(function(b) {
                var c = b.markedSpans;
                if (c)
                    for (var d = 0; d < c.length; ++d)
                        null != c[d].from && a.push(c[d].marker)
            }),
            a
        },
        posFromIndex: function(a) {
            var b, c = this.first, d = this.lineSeparator().length;
            return this.iter(function(e) {
                var f = e.text.length + d;
                return f > a ? (b = a,
                !0) : (a -= f,
                void ++c)
            }),
            Qa(this, ra(c, b))
        },
        indexFromPos: function(a) {
            a = Qa(this, a);
            var b = a.ch;
            if (a.line < this.first || a.ch < 0)
                return 0;
            var c = this.lineSeparator().length;
            return this.iter(this.first, a.line, function(a) {
                b += a.text.length + c
            }),
            b
        },
        copy: function(a) {
            var b = new ef(mf(this, this.first, this.first + this.size),this.modeOption,this.first,this.lineSep);
            return b.scrollTop = this.scrollTop,
            b.scrollLeft = this.scrollLeft,
            b.sel = this.sel,
            b.extend = !1,
            a && (b.history.undoDepth = this.history.undoDepth,
            b.setHistory(this.getHistory())),
            b
        },
        linkedDoc: function(a) {
            a || (a = {});
            var b = this.first
              , c = this.first + this.size;
            null != a.from && a.from > b && (b = a.from),
            null != a.to && a.to < c && (c = a.to);
            var d = new ef(mf(this, b, c),a.mode || this.modeOption,b,this.lineSep);
            return a.sharedHist && (d.history = this.history),
            (this.linked || (this.linked = [])).push({
                doc: d,
                sharedHist: a.sharedHist
            }),
            d.linked = [{
                doc: this,
                isParent: !0,
                sharedHist: a.sharedHist
            }],
            be(d, ae(this)),
            d
        },
        unlinkDoc: function(a) {
            if (a instanceof y && (a = a.doc),
            this.linked)
                for (var b = 0; b < this.linked.length; ++b) {
                    var c = this.linked[b];
                    if (c.doc == a) {
                        this.linked.splice(b, 1),
                        a.unlinkDoc(this),
                        ce(ae(this));
                        break
                    }
                }
            if (a.history == this.history) {
                var d = [a.id];
                hf(a, function(a) {
                    d.push(a.id)
                }, !0),
                a.history = new sf(null),
                a.history.done = Df(this.history.done, d),
                a.history.undone = Df(this.history.undone, d)
            }
        },
        iterLinkedDocs: function(a) {
            hf(this, a)
        },
        getMode: function() {
            return this.mode
        },
        getEditor: function() {
            return this.cm
        },
        splitLines: function(a) {
            return this.lineSep ? a.split(this.lineSep) : Og(a)
        },
        lineSeparator: function() {
            return this.lineSep || "\n"
        }
    }),
    ef.prototype.eachLine = ef.prototype.iter;
    var ff = "iter insert remove copy getEditor constructor".split(" ");
    for (var gf in ef.prototype)
        ef.prototype.hasOwnProperty(gf) && jg(ff, gf) < 0 && (y.prototype[gf] = function(a) {
            return function() {
                return a.apply(this.doc, arguments)
            }
        }(ef.prototype[gf]));
    Yf(ef);
    var Hf = y.e_preventDefault = function(a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }
      , If = y.e_stopPropagation = function(a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    }
      , Kf = y.e_stop = function(a) {
        Hf(a),
        If(a)
    }
      , Nf = y.on = function(a, b, c) {
        if (a.addEventListener)
            a.addEventListener(b, c, !1);
        else if (a.attachEvent)
            a.attachEvent("on" + b, c);
        else {
            var d = a._handlers || (a._handlers = {})
              , e = d[b] || (d[b] = []);
            e.push(c)
        }
    }
      , Of = []
      , Qf = y.off = function(a, b, c) {
        if (a.removeEventListener)
            a.removeEventListener(b, c, !1);
        else if (a.detachEvent)
            a.detachEvent("on" + b, c);
        else
            for (var d = Pf(a, b, !1), e = 0; e < d.length; ++e)
                if (d[e] == c) {
                    d.splice(e, 1);
                    break
                }
    }
      , Rf = y.signal = function(a, b) {
        var c = Pf(a, b, !0);
        if (c.length)
            for (var d = Array.prototype.slice.call(arguments, 2), e = 0; e < c.length; ++e)
                c[e].apply(null, d)
    }
      , Sf = null
      , Zf = 30
      , $f = y.Pass = {
        toString: function() {
            return "CodeMirror.Pass"
        }
    }
      , _f = {
        scroll: !1
    }
      , ag = {
        origin: "*mouse"
    }
      , bg = {
        origin: "+move"
    };
    cg.prototype.set = function(a, b) {
        clearTimeout(this.id),
        this.id = setTimeout(b, a)
    }
    ;
    var dg = y.countColumn = function(a, b, c, d, e) {
        null == b && (b = a.search(/[^\s\u00a0]/),
        -1 == b && (b = a.length));
        for (var f = d || 0, g = e || 0; ; ) {
            var h = a.indexOf("	", f);
            if (0 > h || h >= b)
                return g + (b - f);
            g += h - f,
            g += c - g % c,
            f = h + 1
        }
    }
      , eg = y.findColumn = function(a, b, c) {
        for (var d = 0, e = 0; ; ) {
            var f = a.indexOf("	", d);
            -1 == f && (f = a.length);
            var g = f - d;
            if (f == a.length || e + g >= b)
                return d + Math.min(g, b - e);
            if (e += f - d,
            e += c - e % c,
            d = f + 1,
            e >= b)
                return d
        }
    }
      , fg = [""]
      , ig = function(a) {
        a.select()
    };
    o ? ig = function(a) {
        a.selectionStart = 0,
        a.selectionEnd = a.value.length
    }
    : f && (ig = function(a) {
        try {
            a.select()
        } catch (b) {}
    }
    );
    var wg, pg = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, qg = y.isWordChar = function(a) {
        return /\w/.test(a) || a > "\x80" && (a.toUpperCase() != a.toLowerCase() || pg.test(a))
    }
    , tg = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    wg = document.createRange ? function(a, b, c, d) {
        var e = document.createRange();
        return e.setEnd(d || a, c),
        e.setStart(a, b),
        e
    }
    : function(a, b, c) {
        var d = document.body.createTextRange();
        try {
            d.moveToElementText(a.parentNode)
        } catch (e) {
            return d
        }
        return d.collapse(!0),
        d.moveEnd("character", c),
        d.moveStart("character", b),
        d
    }
    ;
    var zg = y.contains = function(a, b) {
        if (3 == b.nodeType && (b = b.parentNode),
        a.contains)
            return a.contains(b);
        do
            if (11 == b.nodeType && (b = b.host),
            b == a)
                return !0;
        while (b = b.parentNode)
    }
    ;
    f && 11 > g && (Ag = function() {
        try {
            return document.activeElement
        } catch (a) {
            return document.body
        }
    }
    );
    var Kg, Mg, Cg = y.rmClass = function(a, b) {
        var c = a.className
          , d = Bg(b).exec(c);
        if (d) {
            var e = c.slice(d.index + d[0].length);
            a.className = c.slice(0, d.index) + (e ? d[1] + e : "")
        }
    }
    , Dg = y.addClass = function(a, b) {
        var c = a.className;
        Bg(b).test(c) || (a.className += (c ? " " : "") + b)
    }
    , Gg = !1, Jg = function() {
        if (f && 9 > g)
            return !1;
        var a = vg("div");
        return "draggable"in a || "dragDrop"in a
    }(), Og = y.splitLines = 3 != "\n\nb".split(/\n/).length ? function(a) {
        for (var b = 0, c = [], d = a.length; d >= b; ) {
            var e = a.indexOf("\n", b);
            -1 == e && (e = a.length);
            var f = a.slice(b, "\r" == a.charAt(e - 1) ? e - 1 : e)
              , g = f.indexOf("\r");
            -1 != g ? (c.push(f.slice(0, g)),
            b += g + 1) : (c.push(f),
            b = e + 1)
        }
        return c
    }
    : function(a) {
        return a.split(/\r\n?|\n/)
    }
    , Pg = window.getSelection ? function(a) {
        try {
            return a.selectionStart != a.selectionEnd
        } catch (b) {
            return !1
        }
    }
    : function(a) {
        try {
            var b = a.ownerDocument.selection.createRange()
        } catch (c) {}
        return b && b.parentElement() == a ? 0 != b.compareEndPoints("StartToEnd", b) : !1
    }
    , Qg = function() {
        var a = vg("div");
        return "oncopy"in a ? !0 : (a.setAttribute("oncopy", "return;"),
        "function" == typeof a.oncopy)
    }(), Rg = null, Tg = y.keyNames = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    };
    !function() {
        for (var a = 0; 10 > a; a++)
            Tg[a + 48] = Tg[a + 96] = String(a);
        for (var a = 65; 90 >= a; a++)
            Tg[a] = String.fromCharCode(a);
        for (var a = 1; 12 >= a; a++)
            Tg[a + 111] = Tg[a + 63235] = "F" + a
    }();
    var bh, gh = function() {
        function c(c) {
            return 247 >= c ? a.charAt(c) : c >= 1424 && 1524 >= c ? "R" : c >= 1536 && 1773 >= c ? b.charAt(c - 1536) : c >= 1774 && 2220 >= c ? "r" : c >= 8192 && 8203 >= c ? "w" : 8204 == c ? "b" : "L"
        }
        function j(a, b, c) {
            this.level = a,
            this.from = b,
            this.to = c
        }
        var a = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
          , b = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm"
          , d = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
          , e = /[stwN]/
          , f = /[LRr]/
          , g = /[Lb1n]/
          , h = /[1n]/
          , i = "L";
        return function(a) {
            if (!d.test(a))
                return !1;
            for (var m, b = a.length, k = [], l = 0; b > l; ++l)
                k.push(m = c(a.charCodeAt(l)));
            for (var l = 0, n = i; b > l; ++l) {
                var m = k[l];
                "m" == m ? k[l] = n : n = m
            }
            for (var l = 0, o = i; b > l; ++l) {
                var m = k[l];
                "1" == m && "r" == o ? k[l] = "n" : f.test(m) && (o = m,
                "r" == m && (k[l] = "R"))
            }
            for (var l = 1, n = k[0]; b - 1 > l; ++l) {
                var m = k[l];
                "+" == m && "1" == n && "1" == k[l + 1] ? k[l] = "1" : "," != m || n != k[l + 1] || "1" != n && "n" != n || (k[l] = n),
                n = m
            }
            for (var l = 0; b > l; ++l) {
                var m = k[l];
                if ("," == m)
                    k[l] = "N";
                else if ("%" == m) {
                    for (var p = l + 1; b > p && "%" == k[p]; ++p)
                        ;
                    for (var q = l && "!" == k[l - 1] || b > p && "1" == k[p] ? "1" : "N", r = l; p > r; ++r)
                        k[r] = q;
                    l = p - 1
                }
            }
            for (var l = 0, o = i; b > l; ++l) {
                var m = k[l];
                "L" == o && "1" == m ? k[l] = "L" : f.test(m) && (o = m)
            }
            for (var l = 0; b > l; ++l)
                if (e.test(k[l])) {
                    for (var p = l + 1; b > p && e.test(k[p]); ++p)
                        ;
                    for (var s = "L" == (l ? k[l - 1] : i), t = "L" == (b > p ? k[p] : i), q = s || t ? "L" : "R", r = l; p > r; ++r)
                        k[r] = q;
                    l = p - 1
                }
            for (var v, u = [], l = 0; b > l; )
                if (g.test(k[l])) {
                    var w = l;
                    for (++l; b > l && g.test(k[l]); ++l)
                        ;
                    u.push(new j(0,w,l))
                } else {
                    var x = l
                      , y = u.length;
                    for (++l; b > l && "L" != k[l]; ++l)
                        ;
                    for (var r = x; l > r; )
                        if (h.test(k[r])) {
                            r > x && u.splice(y, 0, new j(1,x,r));
                            var z = r;
                            for (++r; l > r && h.test(k[r]); ++r)
                                ;
                            u.splice(y, 0, new j(2,z,r)),
                            x = r
                        } else
                            ++r;
                    l > x && u.splice(y, 0, new j(1,x,l))
                }
            return 1 == u[0].level && (v = a.match(/^\s+/)) && (u[0].from = v[0].length,
            u.unshift(new j(0,0,v[0].length))),
            1 == hg(u).level && (v = a.match(/\s+$/)) && (hg(u).to -= v[0].length,
            u.push(new j(0,b - v[0].length,b))),
            2 == u[0].level && u.unshift(new j(1,u[0].to,u[0].to)),
            u[0].level != hg(u).level && u.push(new j(u[0].level,b,b)),
            u
        }
    }();
    return y.version = "5.14.3",
    y
});
/* CodeMirror - Minified & Bundled
   Generated on 5/3/2016 with http://codemirror.net/doc/compress.html
   Version: HEAD

   Modes:
   - javascript.js
 */

!function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function b(a, b, c) {
        return /^(?:operator|sof|keyword c|case|new|[\[{}\(,;:]|=>)$/.test(b.lastType) || "quasi" == b.lastType && /\{\s*$/.test(a.string.slice(0, a.pos - (c || 0)))
    }
    a.defineMode("javascript", function(c, d) {
        function n(a) {
            for (var c, b = !1, d = !1; null != (c = a.next()); ) {
                if (!b) {
                    if ("/" == c && !d)
                        return;
                    "[" == c ? d = !0 : d && "]" == c && (d = !1)
                }
                b = !b && "\\" == c
            }
        }
        function q(a, b, c) {
            return o = a,
            p = c,
            b
        }
        function r(a, c) {
            var d = a.next();
            if ('"' == d || "'" == d)
                return c.tokenize = s(d),
                c.tokenize(a, c);
            if ("." == d && a.match(/^\d+(?:[eE][+\-]?\d+)?/))
                return q("number", "number");
            if ("." == d && a.match(".."))
                return q("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(d))
                return q(d);
            if ("=" == d && a.eat(">"))
                return q("=>", "operator");
            if ("0" == d && a.eat(/x/i))
                return a.eatWhile(/[\da-f]/i),
                q("number", "number");
            if ("0" == d && a.eat(/o/i))
                return a.eatWhile(/[0-7]/i),
                q("number", "number");
            if ("0" == d && a.eat(/b/i))
                return a.eatWhile(/[01]/i),
                q("number", "number");
            if (/\d/.test(d))
                return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),
                q("number", "number");
            if ("/" == d)
                return a.eat("*") ? (c.tokenize = t,
                t(a, c)) : a.eat("/") ? (a.skipToEnd(),
                q("comment", "comment")) : b(a, c, 1) ? (n(a),
                a.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),
                q("regexp", "string-2")) : (a.eatWhile(l),
                q("operator", "operator", a.current()));
            if ("`" == d)
                return c.tokenize = u,
                u(a, c);
            if ("#" == d)
                return a.skipToEnd(),
                q("error", "error");
            if (l.test(d))
                return a.eatWhile(l),
                q("operator", "operator", a.current());
            if (j.test(d)) {
                a.eatWhile(j);
                var e = a.current()
                  , f = k.propertyIsEnumerable(e) && k[e];
                return f && "." != c.lastType ? q(f.type, f.style, e) : q("variable", "variable", e)
            }
        }
        function s(a) {
            return function(b, c) {
                var e, d = !1;
                if (g && "@" == b.peek() && b.match(m))
                    return c.tokenize = r,
                    q("jsonld-keyword", "meta");
                for (; null != (e = b.next()) && (e != a || d); )
                    d = !d && "\\" == e;
                return d || (c.tokenize = r),
                q("string", "string")
            }
        }
        function t(a, b) {
            for (var d, c = !1; d = a.next(); ) {
                if ("/" == d && c) {
                    b.tokenize = r;
                    break
                }
                c = "*" == d
            }
            return q("comment", "comment")
        }
        function u(a, b) {
            for (var d, c = !1; null != (d = a.next()); ) {
                if (!c && ("`" == d || "$" == d && a.eat("{"))) {
                    b.tokenize = r;
                    break
                }
                c = !c && "\\" == d
            }
            return q("quasi", "string-2", a.current())
        }
        function w(a, b) {
            b.fatArrowAt && (b.fatArrowAt = null);
            var c = a.string.indexOf("=>", a.start);
            if (!(0 > c)) {
                for (var d = 0, e = !1, f = c - 1; f >= 0; --f) {
                    var g = a.string.charAt(f)
                      , h = v.indexOf(g);
                    if (h >= 0 && 3 > h) {
                        if (!d) {
                            ++f;
                            break
                        }
                        if (0 == --d)
                            break
                    } else if (h >= 3 && 6 > h)
                        ++d;
                    else if (j.test(g))
                        e = !0;
                    else {
                        if (/["'\/]/.test(g))
                            return;
                        if (e && !d) {
                            ++f;
                            break
                        }
                    }
                }
                e && !d && (b.fatArrowAt = f)
            }
        }
        function y(a, b, c, d, e, f) {
            this.indented = a,
            this.column = b,
            this.type = c,
            this.prev = e,
            this.info = f,
            null != d && (this.align = d)
        }
        function z(a, b) {
            for (var c = a.localVars; c; c = c.next)
                if (c.name == b)
                    return !0;
            for (var d = a.context; d; d = d.prev)
                for (var c = d.vars; c; c = c.next)
                    if (c.name == b)
                        return !0
        }
        function A(a, b, c, d, e) {
            var f = a.cc;
            for (B.state = a,
            B.stream = e,
            B.marked = null,
            B.cc = f,
            B.style = b,
            a.lexical.hasOwnProperty("align") || (a.lexical.align = !0); ; ) {
                var g = f.length ? f.pop() : h ? M : L;
                if (g(c, d)) {
                    for (; f.length && f[f.length - 1].lex; )
                        f.pop()();
                    return B.marked ? B.marked : "variable" == c && z(a, d) ? "variable-2" : b
                }
            }
        }
        function C() {
            for (var a = arguments.length - 1; a >= 0; a--)
                B.cc.push(arguments[a])
        }
        function D() {
            return C.apply(null, arguments),
            !0
        }
        function E(a) {
            function b(b) {
                for (var c = b; c; c = c.next)
                    if (c.name == a)
                        return !0;
                return !1
            }
            var c = B.state;
            if (B.marked = "def",
            c.context) {
                if (b(c.localVars))
                    return;
                c.localVars = {
                    name: a,
                    next: c.localVars
                }
            } else {
                if (b(c.globalVars))
                    return;
                d.globalVars && (c.globalVars = {
                    name: a,
                    next: c.globalVars
                })
            }
        }
        function G() {
            B.state.context = {
                prev: B.state.context,
                vars: B.state.localVars
            },
            B.state.localVars = F
        }
        function H() {
            B.state.localVars = B.state.context.vars,
            B.state.context = B.state.context.prev
        }
        function I(a, b) {
            var c = function() {
                var c = B.state
                  , d = c.indented;
                if ("stat" == c.lexical.type)
                    d = c.lexical.indented;
                else
                    for (var e = c.lexical; e && ")" == e.type && e.align; e = e.prev)
                        d = e.indented;
                c.lexical = new y(d,B.stream.column(),a,null,c.lexical,b)
            };
            return c.lex = !0,
            c
        }
        function J() {
            var a = B.state;
            a.lexical.prev && (")" == a.lexical.type && (a.indented = a.lexical.indented),
            a.lexical = a.lexical.prev)
        }
        function K(a) {
            function b(c) {
                return c == a ? D() : ";" == a ? C() : D(b)
            }
            return b
        }
        function L(a, b) {
            return "var" == a ? D(I("vardef", b.length), ja, K(";"), J) : "keyword a" == a ? D(I("form"), M, L, J) : "keyword b" == a ? D(I("form"), L, J) : "{" == a ? D(I("}"), fa, J) : ";" == a ? D() : "if" == a ? ("else" == B.state.lexical.info && B.state.cc[B.state.cc.length - 1] == J && B.state.cc.pop()(),
            D(I("form"), M, L, J, oa)) : "function" == a ? D(ua) : "for" == a ? D(I("form"), pa, L, J) : "variable" == a ? D(I("stat"), $) : "switch" == a ? D(I("form"), M, I("}", "switch"), K("{"), fa, J, J) : "case" == a ? D(M, K(":")) : "default" == a ? D(K(":")) : "catch" == a ? D(I("form"), G, K("("), va, K(")"), L, J, H) : "class" == a ? D(I("form"), wa, J) : "export" == a ? D(I("stat"), Aa, J) : "import" == a ? D(I("stat"), Ba, J) : "module" == a ? D(I("form"), ka, I("}"), K("{"), fa, J, J) : C(I("stat"), M, K(";"), J)
        }
        function M(a) {
            return O(a, !1)
        }
        function N(a) {
            return O(a, !0)
        }
        function O(a, b) {
            if (B.state.fatArrowAt == B.stream.start) {
                var c = b ? W : V;
                if ("(" == a)
                    return D(G, I(")"), da(ka, ")"), J, K("=>"), c, H);
                if ("variable" == a)
                    return C(G, ka, K("=>"), c, H)
            }
            var d = b ? S : R;
            return x.hasOwnProperty(a) ? D(d) : "function" == a ? D(ua, d) : "keyword c" == a ? D(b ? Q : P) : "(" == a ? D(I(")"), P, Ha, K(")"), J, d) : "operator" == a || "spread" == a ? D(b ? N : M) : "[" == a ? D(I("]"), Fa, J, d) : "{" == a ? ea(aa, "}", null, d) : "quasi" == a ? C(T, d) : "new" == a ? D(X(b)) : D()
        }
        function P(a) {
            return a.match(/[;\}\)\],]/) ? C() : C(M)
        }
        function Q(a) {
            return a.match(/[;\}\)\],]/) ? C() : C(N)
        }
        function R(a, b) {
            return "," == a ? D(M) : S(a, b, !1)
        }
        function S(a, b, c) {
            var d = 0 == c ? R : S
              , e = 0 == c ? M : N;
            return "=>" == a ? D(G, c ? W : V, H) : "operator" == a ? /\+\+|--/.test(b) ? D(d) : "?" == b ? D(M, K(":"), e) : D(e) : "quasi" == a ? C(T, d) : ";" != a ? "(" == a ? ea(N, ")", "call", d) : "." == a ? D(_, d) : "[" == a ? D(I("]"), P, K("]"), J, d) : void 0 : void 0
        }
        function T(a, b) {
            return "quasi" != a ? C() : "${" != b.slice(b.length - 2) ? D(T) : D(M, U)
        }
        function U(a) {
            return "}" == a ? (B.marked = "string-2",
            B.state.tokenize = u,
            D(T)) : void 0
        }
        function V(a) {
            return w(B.stream, B.state),
            C("{" == a ? L : M)
        }
        function W(a) {
            return w(B.stream, B.state),
            C("{" == a ? L : N)
        }
        function X(a) {
            return function(b) {
                return "." == b ? D(a ? Z : Y) : C(a ? N : M)
            }
        }
        function Y(a, b) {
            return "target" == b ? (B.marked = "keyword",
            D(R)) : void 0
        }
        function Z(a, b) {
            return "target" == b ? (B.marked = "keyword",
            D(S)) : void 0
        }
        function $(a) {
            return ":" == a ? D(J, L) : C(R, K(";"), J)
        }
        function _(a) {
            return "variable" == a ? (B.marked = "property",
            D()) : void 0
        }
        function aa(a, b) {
            return "variable" == a || "keyword" == B.style ? (B.marked = "property",
            D("get" == b || "set" == b ? ba : ca)) : "number" == a || "string" == a ? (B.marked = g ? "property" : B.style + " property",
            D(ca)) : "jsonld-keyword" == a ? D(ca) : "modifier" == a ? D(aa) : "[" == a ? D(M, K("]"), ca) : "spread" == a ? D(M) : void 0
        }
        function ba(a) {
            return "variable" != a ? C(ca) : (B.marked = "property",
            D(ua))
        }
        function ca(a) {
            return ":" == a ? D(N) : "(" == a ? C(ua) : void 0
        }
        function da(a, b) {
            function c(d) {
                if ("," == d) {
                    var e = B.state.lexical;
                    return "call" == e.info && (e.pos = (e.pos || 0) + 1),
                    D(a, c)
                }
                return d == b ? D() : D(K(b))
            }
            return function(d) {
                return d == b ? D() : C(a, c)
            }
        }
        function ea(a, b, c) {
            for (var d = 3; d < arguments.length; d++)
                B.cc.push(arguments[d]);
            return D(I(b, c), da(a, b), J)
        }
        function fa(a) {
            return "}" == a ? D() : C(L, fa)
        }
        function ga(a) {
            return i && ":" == a ? D(ia) : void 0
        }
        function ha(a, b) {
            return "=" == b ? D(N) : void 0
        }
        function ia(a) {
            return "variable" == a ? (B.marked = "variable-3",
            D()) : void 0
        }
        function ja() {
            return C(ka, ga, ma, na)
        }
        function ka(a, b) {
            return "modifier" == a ? D(ka) : "variable" == a ? (E(b),
            D()) : "spread" == a ? D(ka) : "[" == a ? ea(ka, "]") : "{" == a ? ea(la, "}") : void 0
        }
        function la(a, b) {
            return "variable" != a || B.stream.match(/^\s*:/, !1) ? ("variable" == a && (B.marked = "property"),
            "spread" == a ? D(ka) : "}" == a ? C() : D(K(":"), ka, ma)) : (E(b),
            D(ma))
        }
        function ma(a, b) {
            return "=" == b ? D(N) : void 0
        }
        function na(a) {
            return "," == a ? D(ja) : void 0
        }
        function oa(a, b) {
            return "keyword b" == a && "else" == b ? D(I("form", "else"), L, J) : void 0
        }
        function pa(a) {
            return "(" == a ? D(I(")"), qa, K(")"), J) : void 0
        }
        function qa(a) {
            return "var" == a ? D(ja, K(";"), sa) : ";" == a ? D(sa) : "variable" == a ? D(ra) : C(M, K(";"), sa)
        }
        function ra(a, b) {
            return "in" == b || "of" == b ? (B.marked = "keyword",
            D(M)) : D(R, sa)
        }
        function sa(a, b) {
            return ";" == a ? D(ta) : "in" == b || "of" == b ? (B.marked = "keyword",
            D(M)) : C(M, K(";"), ta)
        }
        function ta(a) {
            ")" != a && D(M)
        }
        function ua(a, b) {
            return "*" == b ? (B.marked = "keyword",
            D(ua)) : "variable" == a ? (E(b),
            D(ua)) : "(" == a ? D(G, I(")"), da(va, ")"), J, L, H) : void 0
        }
        function va(a) {
            return "spread" == a ? D(va) : C(ka, ga, ha)
        }
        function wa(a, b) {
            return "variable" == a ? (E(b),
            D(xa)) : void 0
        }
        function xa(a, b) {
            return "extends" == b ? D(M, xa) : "{" == a ? D(I("}"), ya, J) : void 0
        }
        function ya(a, b) {
            return "variable" == a || "keyword" == B.style ? "static" == b ? (B.marked = "keyword",
            D(ya)) : (B.marked = "property",
            "get" == b || "set" == b ? D(za, ua, ya) : D(ua, ya)) : "*" == b ? (B.marked = "keyword",
            D(ya)) : ";" == a ? D(ya) : "}" == a ? D() : void 0
        }
        function za(a) {
            return "variable" != a ? C() : (B.marked = "property",
            D())
        }
        function Aa(a, b) {
            return "*" == b ? (B.marked = "keyword",
            D(Ea, K(";"))) : "default" == b ? (B.marked = "keyword",
            D(M, K(";"))) : C(L)
        }
        function Ba(a) {
            return "string" == a ? D() : C(Ca, Ea)
        }
        function Ca(a, b) {
            return "{" == a ? ea(Ca, "}") : ("variable" == a && E(b),
            "*" == b && (B.marked = "keyword"),
            D(Da))
        }
        function Da(a, b) {
            return "as" == b ? (B.marked = "keyword",
            D(Ca)) : void 0
        }
        function Ea(a, b) {
            return "from" == b ? (B.marked = "keyword",
            D(M)) : void 0
        }
        function Fa(a) {
            return "]" == a ? D() : C(N, Ga)
        }
        function Ga(a) {
            return "for" == a ? C(Ha, K("]")) : "," == a ? D(da(Q, "]")) : C(da(N, "]"))
        }
        function Ha(a) {
            return "for" == a ? D(pa, Ha) : "if" == a ? D(M, Ha) : void 0
        }
        function Ia(a, b) {
            return "operator" == a.lastType || "," == a.lastType || l.test(b.charAt(0)) || /[,.]/.test(b.charAt(0))
        }
        var o, p, e = c.indentUnit, f = d.statementIndent, g = d.jsonld, h = d.json || g, i = d.typescript, j = d.wordCharacters || /[\w$\xa1-\uffff]/, k = function() {
            function a(a) {
                return {
                    type: a,
                    style: "keyword"
                }
            }
            var b = a("keyword a")
              , c = a("keyword b")
              , d = a("keyword c")
              , e = a("operator")
              , f = {
                type: "atom",
                style: "atom"
            }
              , g = {
                "if": a("if"),
                "while": b,
                "with": b,
                "else": c,
                "do": c,
                "try": c,
                "finally": c,
                "return": d,
                "break": d,
                "continue": d,
                "new": a("new"),
                "delete": d,
                "throw": d,
                "debugger": d,
                "var": a("var"),
                "const": a("var"),
                let: a("var"),
                "function": a("function"),
                "catch": a("catch"),
                "for": a("for"),
                "switch": a("switch"),
                "case": a("case"),
                "default": a("default"),
                "in": e,
                "typeof": e,
                "instanceof": e,
                "true": f,
                "false": f,
                "null": f,
                undefined: f,
                NaN: f,
                Infinity: f,
                "this": a("this"),
                "class": a("class"),
                "super": a("atom"),
                "yield": d,
                "export": a("export"),
                "import": a("import"),
                "extends": d
            };
            if (i) {
                var h = {
                    type: "variable",
                    style: "variable-3"
                }
                  , j = {
                    "interface": a("class"),
                    "implements": d,
                    namespace: d,
                    module: a("module"),
                    "enum": a("module"),
                    "public": a("modifier"),
                    "private": a("modifier"),
                    "protected": a("modifier"),
                    "abstract": a("modifier"),
                    as: e,
                    string: h,
                    number: h,
                    "boolean": h,
                    any: h
                };
                for (var k in j)
                    g[k] = j[k]
            }
            return g
        }(), l = /[+\-*&%=<>!?|~^]/, m = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/, v = "([{}])", x = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            "this": !0,
            "jsonld-keyword": !0
        }, B = {
            state: null,
            column: null,
            marked: null,
            cc: null
        }, F = {
            name: "this",
            next: {
                name: "arguments"
            }
        };
        return J.lex = !0,
        {
            startState: function(a) {
                var b = {
                    tokenize: r,
                    lastType: "sof",
                    cc: [],
                    lexical: new y((a || 0) - e,0,"block",!1),
                    localVars: d.localVars,
                    context: d.localVars && {
                        vars: d.localVars
                    },
                    indented: a || 0
                };
                return d.globalVars && "object" == typeof d.globalVars && (b.globalVars = d.globalVars),
                b
            },
            token: function(a, b) {
                if (a.sol() && (b.lexical.hasOwnProperty("align") || (b.lexical.align = !1),
                b.indented = a.indentation(),
                w(a, b)),
                b.tokenize != t && a.eatSpace())
                    return null;
                var c = b.tokenize(a, b);
                return "comment" == o ? c : (b.lastType = "operator" != o || "++" != p && "--" != p ? o : "incdec",
                A(b, c, o, p, a))
            },
            indent: function(b, c) {
                if (b.tokenize == t)
                    return a.Pass;
                if (b.tokenize != r)
                    return 0;
                var g = c && c.charAt(0)
                  , h = b.lexical;
                if (!/^\s*else\b/.test(c))
                    for (var i = b.cc.length - 1; i >= 0; --i) {
                        var j = b.cc[i];
                        if (j == J)
                            h = h.prev;
                        else if (j != oa)
                            break
                    }
                "stat" == h.type && "}" == g && (h = h.prev),
                f && ")" == h.type && "stat" == h.prev.type && (h = h.prev);
                var k = h.type
                  , l = g == k;
                return "vardef" == k ? h.indented + ("operator" == b.lastType || "," == b.lastType ? h.info + 1 : 0) : "form" == k && "{" == g ? h.indented : "form" == k ? h.indented + e : "stat" == k ? h.indented + (Ia(b, c) ? f || e : 0) : "switch" != h.info || l || 0 == d.doubleIndentSwitch ? h.align ? h.column + (l ? 0 : 1) : h.indented + (l ? 0 : e) : h.indented + (/^(?:case|default)\b/.test(c) ? e : 2 * e)
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: h ? null : "/*",
            blockCommentEnd: h ? null : "*/",
            lineComment: h ? null : "//",
            fold: "brace",
            closeBrackets: "()[]{}''\"\"``",
            helperType: h ? "json" : "javascript",
            jsonldMode: g,
            jsonMode: h,
            expressionAllowed: b,
            skipExpression: function(a) {
                var b = a.cc[a.cc.length - 1];
                (b == M || b == N) && a.cc.pop()
            }
        }
    }),
    a.registerHelper("wordChars", "javascript", /[\w$]/),
    a.defineMIME("text/javascript", "javascript"),
    a.defineMIME("text/ecmascript", "javascript"),
    a.defineMIME("application/javascript", "javascript"),
    a.defineMIME("application/x-javascript", "javascript"),
    a.defineMIME("application/ecmascript", "javascript"),
    a.defineMIME("application/json", {
        name: "javascript",
        json: !0
    }),
    a.defineMIME("application/x-json", {
        name: "javascript",
        json: !0
    }),
    a.defineMIME("application/ld+json", {
        name: "javascript",
        jsonld: !0
    }),
    a.defineMIME("text/typescript", {
        name: "javascript",
        typescript: !0
    }),
    a.defineMIME("application/typescript", {
        name: "javascript",
        typescript: !0
    })
});
/* CodeMirror - Minified & Bundled
   Generated on 5/3/2016 with http://codemirror.net/doc/compress.html
   Version: HEAD

   Add-ons:
   - lint.js
 */

!function(a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function(a) {
    "use strict";
    function c(b, c) {
        function e(b) {
            return d.parentNode ? (d.style.top = Math.max(0, b.clientY - d.offsetHeight - 5) + "px",
            void (d.style.left = b.clientX + 5 + "px")) : a.off(document, "mousemove", e)
        }
        var d = document.createElement("div");
        return d.className = "CodeMirror-lint-tooltip",
        d.appendChild(c.cloneNode(!0)),
        document.body.appendChild(d),
        a.on(document, "mousemove", e),
        e(b),
        null != d.style.opacity && (d.style.opacity = 1),
        d
    }
    function d(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }
    function e(a) {
        a.parentNode && (null == a.style.opacity && d(a),
        a.style.opacity = 0,
        setTimeout(function() {
            d(a)
        }, 600))
    }
    function f(b, d, f) {
        function h() {
            a.off(f, "mouseout", h),
            g && (e(g),
            g = null)
        }
        var g = c(b, d)
          , i = setInterval(function() {
            if (g)
                for (var a = f; ; a = a.parentNode) {
                    if (a && 11 == a.nodeType && (a = a.host),
                    a == document.body)
                        return;
                    if (!a) {
                        h();
                        break
                    }
                }
            return g ? void 0 : clearInterval(i)
        }, 400);
        a.on(f, "mouseout", h)
    }
    function g(a, b, c) {
        this.marked = [],
        this.options = b,
        this.timeout = null,
        this.hasGutter = c,
        this.onMouseOver = function(b) {
            s(a, b)
        }
        ,
        this.waitingFor = 0
    }
    function h(a, b) {
        return b instanceof Function ? {
            getAnnotations: b
        } : (b && b !== !0 || (b = {}),
        b)
    }
    function i(a) {
        var c = a.state.lint;
        c.hasGutter && a.clearGutter(b);
        for (var d = 0; d < c.marked.length; ++d)
            c.marked[d].clear();
        c.marked.length = 0
    }
    function j(b, c, d, e) {
        var g = document.createElement("div")
          , h = g;
        return g.className = "CodeMirror-lint-marker-" + c,
        d && (h = g.appendChild(document.createElement("div")),
        h.className = "CodeMirror-lint-marker-multiple"),
        0 != e && a.on(h, "mouseover", function(a) {
            f(a, b, h)
        }),
        g
    }
    function k(a, b) {
        return "error" == a ? a : b
    }
    function l(a) {
        for (var b = [], c = 0; c < a.length; ++c) {
            var d = a[c]
              , e = d.from.line;
            (b[e] || (b[e] = [])).push(d)
        }
        return b
    }
    function m(a) {
        var b = a.severity;
        b || (b = "error");
        var c = document.createElement("div");
        return c.className = "CodeMirror-lint-message-" + b,
        c.appendChild(document.createTextNode(a.message)),
        c
    }
    function n(b, c, d) {
        function g() {
            f = -1,
            b.off("change", g)
        }
        var e = b.state.lint
          , f = ++e.waitingFor;
        b.on("change", g),
        c(b.getValue(), function(c, d) {
            b.off("change", g),
            e.waitingFor == f && (d && c instanceof a && (c = d),
            p(b, c))
        }, d, b)
    }
    function o(b) {
        var c = b.state.lint
          , d = c.options
          , e = d.options || d
          , f = d.getAnnotations || b.getHelper(a.Pos(0, 0), "lint");
        f && (d.async || f.async ? n(b, f, e) : p(b, f(b.getValue(), e, b)))
    }
    function p(a, c) {
        i(a);
        for (var d = a.state.lint, e = d.options, f = l(c), g = 0; g < f.length; ++g) {
            var h = f[g];
            if (h) {
                for (var n = null, o = d.hasGutter && document.createDocumentFragment(), p = 0; p < h.length; ++p) {
                    var q = h[p]
                      , r = q.severity;
                    r || (r = "error"),
                    n = k(n, r),
                    e.formatAnnotation && (q = e.formatAnnotation(q)),
                    d.hasGutter && o.appendChild(m(q)),
                    q.to && d.marked.push(a.markText(q.from, q.to, {
                        className: "CodeMirror-lint-mark-" + r,
                        __annotation: q
                    }))
                }
                d.hasGutter && a.setGutterMarker(g, b, j(o, n, h.length > 1, d.options.tooltips))
            }
        }
        e.onUpdateLinting && e.onUpdateLinting(c, f, a)
    }
    function q(a) {
        var b = a.state.lint;
        b && (clearTimeout(b.timeout),
        b.timeout = setTimeout(function() {
            o(a)
        }, b.options.delay || 500))
    }
    function r(a, b) {
        for (var c = b.target || b.srcElement, d = document.createDocumentFragment(), e = 0; e < a.length; e++) {
            var g = a[e];
            d.appendChild(m(g))
        }
        f(b, d, c)
    }
    function s(a, b) {
        var c = b.target || b.srcElement;
        if (/\bCodeMirror-lint-mark-/.test(c.className)) {
            for (var d = c.getBoundingClientRect(), e = (d.left + d.right) / 2, f = (d.top + d.bottom) / 2, g = a.findMarksAt(a.coordsChar({
                left: e,
                top: f
            }, "client")), h = [], i = 0; i < g.length; ++i) {
                var j = g[i].__annotation;
                j && h.push(j)
            }
            h.length && r(h, b)
        }
    }
    var b = "CodeMirror-lint-markers";
    a.defineOption("lint", !1, function(c, d, e) {
        if (e && e != a.Init && (i(c),
        c.state.lint.options.lintOnChange !== !1 && c.off("change", q),
        a.off(c.getWrapperElement(), "mouseover", c.state.lint.onMouseOver),
        clearTimeout(c.state.lint.timeout),
        delete c.state.lint),
        d) {
            for (var f = c.getOption("gutters"), j = !1, k = 0; k < f.length; ++k)
                f[k] == b && (j = !0);
            var l = c.state.lint = new g(c,h(c, d),j);
            l.options.lintOnChange !== !1 && c.on("change", q),
            0 != l.options.tooltips && a.on(c.getWrapperElement(), "mouseover", l.onMouseOver),
            o(c)
        }
    }),
    a.defineExtension("performLint", function() {
        this.state.lint && o(this)
    })
});
