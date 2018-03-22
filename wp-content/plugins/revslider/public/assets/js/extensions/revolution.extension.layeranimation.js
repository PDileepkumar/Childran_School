/************************************************
 * REVOLUTION 5.3 EXTENSION - LAYER ANIMATION
 * @version: 3.5.1 (09.12.2016)
 * @requires jquery.themepunch.revolution.js
 * @author ThemePunch
 ************************************************/
! function(a) {
    "use strict";

    function p(a, b, c, d, e, f, g) {
        var h = a.find(b);
        h.css("borderWidth", f + "px"), h.css(c, 0 - f + "px"), h.css(d, "0px solid transparent"), h.css(e, g)
    }
    var b = jQuery.fn.revolution,
        d = (b.is_mobile(), {
            alias: "LayerAnimation Min JS",
            name: "revolution.extensions.layeranimation.min.js",
            min_core: "5.3.1",
            version: "3.5.1"
        });
    jQuery.extend(!0, b, {
        updateMarkup: function(a, b) {
            var c = jQuery(a).data();
            if (void 0 !== c.start && !c.frames_added && void 0 === c.frames) {
                var d = new Array,
                    e = m(f(), c.transform_in, void 0, !1),
                    g = m(f(), c.transform_out, void 0, !1),
                    h = m(f(), c.transform_hover, void 0, !1);
                jQuery.isNumeric(c.end) && jQuery.isNumeric(c.start) && jQuery.isNumeric(e.speed) && (c.end = parseInt(c.end, 0) - (parseInt(c.start, 0) + parseFloat(e.speed, 0))), d.push({
                    frame: "0",
                    delay: c.start,
                    from: c.transform_in,
                    to: c.transform_idle,
                    split: c.splitin,
                    speed: e.speed,
                    ease: e.anim.ease,
                    mask: c.mask_in,
                    splitdelay: c.elementdelay
                }), d.push({
                    frame: "5",
                    delay: c.end,
                    to: c.transform_out,
                    split: c.splitout,
                    speed: g.speed,
                    ease: g.anim.ease,
                    mask: c.mask_out,
                    splitdelay: c.elementdelay
                }), c.transform_hover && d.push({
                    frame: "hover",
                    to: c.transform_hover,
                    style: c.style_hover,
                    speed: h.speed,
                    ease: h.anim.ease,
                    splitdelay: c.elementdelay
                }), c.frames = d
            }
            if (!c.frames_added) {
                if (c.inframeindex = 0, c.outframeindex = -1, c.hoverframeindex = -1, void 0 !== c.frames)
                    for (var i = 0; i < c.frames.length; i++) void 0 === c.frames[0].from && (c.frames[0].from = "o:inherit"), 0 === c.frames[0].delay && (c.frames[0].delay = 20), "hover" === c.frames[i].frame ? c.hoverframeindex = i : "frame_999" !== c.frames[i].frame && "frame_out" !== c.frames[i].frame && "last" !== c.frames[i].frame && "end" !== c.frames[i].frame || (c.outframeindex = i), void 0 !== c.frames[i].split && c.frames[i].split.match(/chars|words|lines/g) && (c.splittext = !0);
                c.outframeindex = c.outframeindex === -1 ? c.hoverframeindex === -1 ? c.frames.length - 1 : c.frames.length - 2 : c.outframeindex, c.frames_added = !0
            }
        },
        animcompleted: function(a, c) {
            var d = a.data(),
                e = d.videotype,
                f = d.autoplay,
                g = d.autoplayonlyfirsttime;
            void 0 != e && "none" != e && (1 == f || "true" == f || "on" == f || "1sttime" == f || g ? (("carousel" !== c.sliderType || "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && a.closest("li").hasClass("active-revslide") || "carousel" === c.sliderType && "on" !== c.carousel.showLayersAllTime && a.closest("li").hasClass("active-revslide")) && b.playVideo(a, c), b.toggleState(a.data("videotoggledby")), (g || "1sttime" == f) && (d.autoplayonlyfirsttime = !1, d.autoplay = "off")) : ("no1sttime" == f && (d.datasetautoplay = "on"), b.unToggleState(a.data("videotoggledby"))))
        },
        handleStaticLayers: function(a, b) {
            var c = parseInt(a.data("startslide"), 0),
                d = parseInt(a.data("endslide"), 0);
            c < 0 && (c = 0), d < 0 && (d = b.realslideamount), 0 === c && d === b.realslideamount - 1 && (d = b.realslideamount + 1), a.data("startslide", c), a.data("endslide", d)
        },
        animateTheCaptions: function(a) {
            if ("stop" === b.compare_version(d).check) return !1;
            var c = a.opt,
                e = a.slide,
                f = a.recall,
                g = a.maintimeline,
                h = a.preset,
                i = a.startslideanimat,
                j = "carousel" === c.sliderType ? 0 : c.width / 2 - c.gridwidth[c.curWinRange] * c.bw / 2,
                k = 0,
                l = e.data("index");
            if (c.layers = c.layers || new Object, c.layers[l] = c.layers[l] || e.find(".tp-caption"), c.layers.static = c.layers.static || c.c.find(".tp-static-layers").find(".tp-caption"), void 0 === c.timelines && b.createTimelineStructure(c), c.conh = c.c.height(), c.conw = c.c.width(), c.ulw = c.ul.width(), c.ulh = c.ul.height(), c.debugMode) {
                e.addClass("indebugmode"), e.find(".helpgrid").remove(), c.c.find(".hglayerinfo").remove(), e.append('<div class="helpgrid" style="width:' + c.gridwidth[c.curWinRange] * c.bw + "px;height:" + c.gridheight[c.curWinRange] * c.bw + 'px;"></div>');
                var m = e.find(".helpgrid");
                m.append('<div class="hginfo">Zoom:' + Math.round(100 * c.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + c.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + c.gridwidth[c.curWinRange] + "x" + c.gridheight[c.curWinRange] + "</div>"), c.c.append('<div class="hglayerinfo"></div>'), m.append('<div class="tlhg"></div>')
            }
            void 0 !== l && c.layers[l] && jQuery.each(c.layers[l], function(a, d) {
                var e = jQuery(this);
                b.updateMarkup(this, c), b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                }), h && 0 !== i || b.buildFullTimeLine({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h,
                    regenerate: 0 === i
                }), f && "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && b.animcompleted(e, c)
            }), c.layers.static && jQuery.each(c.layers.static, function(a, d) {
                var e = jQuery(this),
                    g = e.data();
                g.hoveredstatus !== !0 && g.inhoveroutanimation !== !0 ? (b.updateMarkup(this, c), b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                }), h && 0 !== i || b.buildFullTimeLine({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h,
                    regenerate: 0 === i
                }), f && "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime && b.animcompleted(e, c)) : b.prepareSingleCaption({
                    caption: e,
                    opt: c,
                    offsetx: j,
                    offsety: k,
                    index: a,
                    recall: f,
                    preset: h
                })
            });
            var n = c.nextSlide === -1 || void 0 === c.nextSlide ? 0 : c.nextSlide;
            n = n > c.rowzones.length ? c.rowzones.length : n, void 0 != c.rowzones && c.rowzones.length > 0 && void 0 != c.rowzones[n] && n >= 0 && n <= c.rowzones.length && c.rowzones[n].length > 0 && b.setSize(c), h || void 0 !== i && (void 0 !== l && jQuery.each(c.timelines[l].layers, function(a, d) {
                var e = d.layer.data();
                "none" !== d.wrapper && void 0 !== d.wrapper || ("keep" == d.triggerstate && "on" === e.triggerstate ? b.playAnimationFrame({
                    caption: d.layer,
                    opt: c,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }) : d.timeline.restart(0))
            }), c.timelines.staticlayers && jQuery.each(c.timelines.staticlayers.layers, function(a, d) {
                var e = d.layer.data(),
                    f = n >= d.firstslide && n <= d.lastslide,
                    g = n < d.firstslide || n > d.lastslide,
                    h = d.timeline.getLabelTime("slide_" + d.firstslide),
                    i = d.timeline.getLabelTime("slide_" + d.lastslide),
                    j = e.static_layer_timeline_time,
                    k = "in" === e.animdirection || "out" !== e.animdirection && void 0,
                    l = "bytrigger" === e.frames[0].delay,
                    o = ("bytrigger" === e.frames[e.frames.length - 1].delay, e.triggered_startstatus),
                    p = e.lasttriggerstate;
                e.hoveredstatus !== !0 && 1 != e.inhoveroutanimation && (void 0 !== j && k && ("keep" == p ? (b.playAnimationFrame({
                    caption: d.layer,
                    opt: c,
                    frame: "frame_0",
                    triggerdirection: "in",
                    triggerframein: "frame_0",
                    triggerframeout: "frame_999"
                }), e.triggeredtimeline.time(j)) : e.hoveredstatus !== !0 && d.timeline.time(j)), "reset" === p && "hidden" === o && (d.timeline.time(0), e.animdirection = "out"), f ? k ? n === d.lastslide && (d.timeline.play(i), e.animdirection = "in") : (l || "in" === e.animdirection || d.timeline.play(h), ("visible" == o && "keep" !== p || "keep" === p && k === !0 || "visible" == o && void 0 === k) && (d.timeline.play(h + .01), e.animdirection = "in")) : g && k && d.timeline.play("frame_999"))
            })), void 0 != g && setTimeout(function() {
                g.resume()
            }, 30)
        },
        prepareSingleCaption: function(a) {
            var c = a.caption,
                d = c.data(),
                e = a.opt,
                f = a.recall,
                g = a.recall,
                i = (a.preset, jQuery("body").hasClass("rtl"));
            if (d._pw = void 0 === d._pw ? c.closest(".tp-parallax-wrap") : d._pw, d._lw = void 0 === d._lw ? c.closest(".tp-loop-wrap") : d._lw, d._mw = void 0 === d._mw ? c.closest(".tp-mask-wrap") : d._mw, d._responsive = d.responsive || "on", d._respoffset = d.responsive_offset || "on", d._ba = d.basealign || "grid", d._gw = "grid" === d._ba ? e.width : e.ulw, d._gh = "grid" === d._ba ? e.height : e.ulh, d._lig = void 0 === d._lig ? c.hasClass("rev_layer_in_group") ? c.closest(".rev_group") : c.hasClass("rev_layer_in_column") ? c.closest(".rev_column_inner") : c.hasClass("rev_column_inner") ? c.closest(".rev_row") : "none" : d._lig, d._ingroup = void 0 === d._ingroup ? !(c.hasClass("rev_group") || !c.closest(".rev_group")) : d._ingroup, d._isgroup = void 0 === d._isgroup ? !!c.hasClass("rev_group") : d._isgroup, d._nctype = d.type || "none", d._cbgc_auto = void 0 === d._cbgc_auto ? "column" === d._nctype && d._pw.find(".rev_column_bg_auto_sized") : d._cbgc_auto, d._cbgc_man = void 0 === d._cbgc_man ? "column" === d._nctype && d._pw.find(".rev_column_bg_man_sized") : d._cbgc_man, d._slideid = d._slideid || c.closest(".tp-revslider-slidesli").data("index"), d._id = void 0 === d._id ? c.data("id") || c.attr("id") : d._id, d._slidelink = void 0 === d._slidelink ? void 0 !== c.hasClass("slidelink") && c.hasClass("slidelink") : d._slidelink, void 0 === d._li && (c.hasClass("tp-static-layer") ? (d._isstatic = !0, d._li = c.closest(".tp-static-layers"), d._slideid = "staticlayers") : d._li = c.closest(".tp-revslider-slidesli")), d._row = void 0 === d._row ? "column" === d._nctype && d._pw.closest(".rev_row") : d._row, void 0 === d._togglelisteners && c.find(".rs-toggled-content") ? (d._togglelisteners = !0, void 0 === d.actions && c.click(function() {
                    b.swaptoggleState(c)
                })) : d._togglelisteners = !1, "fullscreen" == e.sliderLayout && (a.offsety = d._gh / 2 - e.gridheight[e.curWinRange] * e.bh / 2), ("on" == e.autoHeight || void 0 != e.minHeight && e.minHeight > 0) && (a.offsety = e.conh / 2 - e.gridheight[e.curWinRange] * e.bh / 2), a.offsety < 0 && (a.offsety = 0), e.debugMode) {
                c.closest("li").find(".helpgrid").css({
                    top: a.offsety + "px",
                    left: a.offsetx + "px"
                });
                var k = e.c.find(".hglayerinfo");
                c.on("hover, mouseenter", function() {
                    var a = "";
                    c.data() && jQuery.each(c.data(), function(b, c) {
                        "object" != typeof c && (a = a + '<span style="white-space:nowrap"><span style="color:#27ae60">' + b + ":</span>" + c + "</span>&nbsp; &nbsp; ")
                    }), k.html(a)
                })
            }
            var m = void 0 === d.visibility ? "oon" : o(d.visibility, e)[e.forcedWinRange] || o(d.visibility, e) || "ooon";
            if ("off" === m || d._gw < e.hideCaptionAtLimit && "on" == d.captionhidden || d._gw < e.hideAllCaptionAtLimit ? d._pw.addClass("tp-hidden-caption") : d._pw.removeClass("tp-hidden-caption"), d.layertype = "html", a.offsetx < 0 && (a.offsetx = 0), void 0 != d.thumbimage && void 0 == d.videoposter && (d.videoposter = d.thumbimage), c.find("img").length > 0) {
                var n = c.find("img");
                d.layertype = "image", 0 == n.width() && n.css({
                    width: "auto"
                }), 0 == n.height() && n.css({
                    height: "auto"
                }), void 0 == n.data("ww") && n.width() > 0 && n.data("ww", n.width()), void 0 == n.data("hh") && n.height() > 0 && n.data("hh", n.height());
                var q = n.data("ww"),
                    t = n.data("hh"),
                    v = "slide" == d._ba ? e.ulw : e.gridwidth[e.curWinRange],
                    w = "slide" == d._ba ? e.ulh : e.gridheight[e.curWinRange];
                q = o(n.data("ww"), e)[e.curWinRange] || o(n.data("ww"), e) || "auto", t = o(n.data("hh"), e)[e.curWinRange] || o(n.data("hh"), e) || "auto";
                var x = "full" === q || "full-proportional" === q,
                    y = "full" === t || "full-proportional" === t;
                if ("full-proportional" === q) {
                    var z = n.data("owidth"),
                        A = n.data("oheight");
                    z / v < A / w ? (q = v, t = A * (v / z)) : (t = w, q = z * (w / A))
                } else q = x ? v : !jQuery.isNumeric(q) && q.indexOf("%") > 0 ? q : parseFloat(q), t = y ? w : !jQuery.isNumeric(t) && t.indexOf("%") > 0 ? t : parseFloat(t);
                q = void 0 === q ? 0 : q, t = void 0 === t ? 0 : t, "off" !== d._responsive ? ("grid" != d._ba && x ? jQuery.isNumeric(q) ? n.css({
                    width: q + "px"
                }) : n.css({
                    width: q
                }) : jQuery.isNumeric(q) ? n.css({
                    width: q * e.bw + "px"
                }) : n.css({
                    width: q
                }), "grid" != d._ba && y ? jQuery.isNumeric(t) ? n.css({
                    height: t + "px"
                }) : n.css({
                    height: t
                }) : jQuery.isNumeric(t) ? n.css({
                    height: t * e.bh + "px"
                }) : n.css({
                    height: t
                })) : n.css({
                    width: q,
                    height: t
                }), d._ingroup && "row" !== d._nctype && (void 0 !== q && !jQuery.isNumeric(q) && q.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minWidth: q
                }), void 0 !== t && !jQuery.isNumeric(t) && t.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minHeight: t
                }))
            }
            if ("slide" === d._ba) a.offsetx = 0, a.offsety = 0;
            else if (d._isstatic && void 0 !== e.carousel && void 0 !== e.carousel.horizontal_align && "carousel" === e.sliderType) {
                switch (e.carousel.horizontal_align) {
                    case "center":
                        a.offsetx = 0 + (e.ulw - e.gridwidth[e.curWinRange] * e.bw) / 2;
                        break;
                    case "left":
                        break;
                    case "right":
                        a.offsetx = e.ulw - e.gridwidth[e.curWinRange] * e.bw
                }
                a.offsetx = a.offsetx < 0 ? 0 : a.offsetx
            }
            var B = "html5" == d.audio ? "audio" : "video";
            if (c.hasClass("tp-videolayer") || c.hasClass("tp-audiolayer") || c.find("iframe").length > 0 || c.find(B).length > 0) {
                if (d.layertype = "video", b.manageVideoLayer && b.manageVideoLayer(c, e, f, g), !f && !g) {
                    d.videotype;
                    b.resetVideo && b.resetVideo(c, e, a.preset)
                }
                var D = d.aspectratio;
                void 0 != D && D.split(":").length > 1 && b.prepareCoveredVideo(D, e, c);
                var n = c.find("iframe") ? c.find("iframe") : n = c.find(B),
                    E = !c.find("iframe"),
                    F = c.hasClass("coverscreenvideo");
                n.css({
                    display: "block"
                }), void 0 == c.data("videowidth") && (c.data("videowidth", n.width()), c.data("videoheight", n.height()));
                var q = o(c.data("videowidth"), e)[e.curWinRange] || o(c.data("videowidth"), e) || "auto",
                    t = o(c.data("videoheight"), e)[e.curWinRange] || o(c.data("videoheight"), e) || "auto";
                !jQuery.isNumeric(q) && q.indexOf("%") > 0 ? t = parseFloat(t) * e.bh + "px" : (q = parseFloat(q) * e.bw + "px", t = parseFloat(t) * e.bh + "px"), d.cssobj = void 0 === d.cssobj ? r(c, 0) : d.cssobj;
                var G = s(d.cssobj, e);
                if ("auto" == G.lineHeight && (G.lineHeight = G.fontSize + 4), c.hasClass("fullscreenvideo") || F) {
                    a.offsetx = 0, a.offsety = 0, c.data("x", 0), c.data("y", 0);
                    var H = d._gh;
                    "on" == e.autoHeight && (H = e.conh), c.css({
                        width: d._gw,
                        height: H
                    })
                } else punchgs.TweenLite.set(c, {
                    paddingTop: Math.round(G.paddingTop * e.bh) + "px",
                    paddingBottom: Math.round(G.paddingBottom * e.bh) + "px",
                    paddingLeft: Math.round(G.paddingLeft * e.bw) + "px",
                    paddingRight: Math.round(G.paddingRight * e.bw) + "px",
                    marginTop: G.marginTop * e.bh + "px",
                    marginBottom: G.marginBottom * e.bh + "px",
                    marginLeft: G.marginLeft * e.bw + "px",
                    marginRight: G.marginRight * e.bw + "px",
                    borderTopWidth: Math.round(G.borderTopWidth * e.bh) + "px",
                    borderBottomWidth: Math.round(G.borderBottomWidth * e.bh) + "px",
                    borderLeftWidth: Math.round(G.borderLeftWidth * e.bw) + "px",
                    borderRightWidth: Math.round(G.borderRightWidth * e.bw) + "px",
                    width: q,
                    height: t
                });
                (0 == E && !F || 1 != d.forcecover && !c.hasClass("fullscreenvideo") && !F) && (n.width(q), n.height(t)), d._ingroup && null !== d.videowidth && void 0 !== d.videowidth && !jQuery.isNumeric(d.videowidth) && d.videowidth.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                    minWidth: d.videowidth
                })
            }
            u(c, e, 0, d._responsive), c.hasClass("tp-resizeme") && c.find("*").each(function() {
                u(jQuery(this), e, "rekursive", d._responsive)
            });
            var I = c.outerHeight(),
                J = c.css("backgroundColor");
            p(c, ".frontcorner", "left", "borderRight", "borderTopColor", I, J), p(c, ".frontcornertop", "left", "borderRight", "borderBottomColor", I, J), p(c, ".backcorner", "right", "borderLeft", "borderBottomColor", I, J), p(c, ".backcornertop", "right", "borderLeft", "borderTopColor", I, J), "on" == e.fullScreenAlignForce && (a.offsetx = 0, a.offsety = 0), d.arrobj = new Object, d.arrobj.voa = o(d.voffset, e)[e.curWinRange] || o(d.voffset, e)[0], d.arrobj.hoa = o(d.hoffset, e)[e.curWinRange] || o(d.hoffset, e)[0], d.arrobj.elx = o(d.x, e)[e.curWinRange] || o(d.x, e)[0], d.arrobj.ely = o(d.y, e)[e.curWinRange] || o(d.y, e)[0];
            var K = 0 == d.arrobj.voa.length ? 0 : d.arrobj.voa,
                L = 0 == d.arrobj.hoa.length ? 0 : d.arrobj.hoa,
                M = 0 == d.arrobj.elx.length ? 0 : d.arrobj.elx,
                N = 0 == d.arrobj.ely.length ? 0 : d.arrobj.ely;
            d.eow = c.outerWidth(!0), d.eoh = c.outerHeight(!0), 0 == d.eow && 0 == d.eoh && (d.eow = e.ulw, d.eoh = e.ulh);
            var O = "off" !== d._respoffset ? parseInt(K, 0) * e.bw : parseInt(K, 0),
                P = "off" !== d._respoffset ? parseInt(L, 0) * e.bw : parseInt(L, 0),
                Q = "grid" === d._ba ? e.gridwidth[e.curWinRange] * e.bw : d._gw,
                R = "grid" === d._ba ? e.gridheight[e.curWinRange] * e.bw : d._gh;
            "on" == e.fullScreenAlignForce && (Q = e.ulw, R = e.ulh), "none" !== d._lig && void 0 != d._lig && (Q = d._lig.width(), R = d._lig.height(), a.offsetx = 0, a.offsety = 0), M = "center" === M || "middle" === M ? Q / 2 - d.eow / 2 + P : "left" === M ? P : "right" === M ? Q - d.eow - P : "off" !== d._respoffset ? M * e.bw : M, N = "center" == N || "middle" == N ? R / 2 - d.eoh / 2 + O : "top" == N ? O : "bottom" == N ? R - d.eoh - O : "off" !== d._respoffset ? N * e.bw : N, i && !d._slidelink && (M += d.eow), d._slidelink && (M = 0), d.calcx = parseInt(M, 0) + a.offsetx, d.calcy = parseInt(N, 0) + a.offsety;
            var S = c.css("z-Index");
            if ("row" !== d._nctype && "column" !== d._nctype) punchgs.TweenLite.set(d._pw, {
                zIndex: S,
                top: d.calcy,
                left: d.calcx,
                overwrite: "auto"
            });
            else if ("row" !== d._nctype) punchgs.TweenLite.set(d._pw, {
                zIndex: S,
                width: d.columnwidth,
                top: 0,
                left: 0,
                overwrite: "auto"
            });
            else if ("row" === d._nctype) {
                var T = "grid" === d._ba ? Q + "px" : "100%";
                punchgs.TweenLite.set(d._pw, {
                    zIndex: S,
                    width: T,
                    top: 0,
                    left: a.offsetx,
                    overwrite: "auto"
                })
            }
            void 0 !== d.blendmode && punchgs.TweenLite.set(d._pw, {
                mixBlendMode: d.blendmode
            }), "row" === d._nctype && (d.columnbreak <= e.curWinRange ? c.addClass("rev_break_columns") : c.removeClass("rev_break_columns")), "on" == d.loopanimation && punchgs.TweenLite.set(d._lw, {
                minWidth: d.eow,
                minHeight: d.eoh
            }), d._ingroup && "row" !== d._nctype && (void 0 !== d._groupw && !jQuery.isNumeric(d._groupw) && d._groupw.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                minWidth: d._groupw
            }), void 0 !== d._grouph && !jQuery.isNumeric(d._grouph) && d._grouph.indexOf("%") > 0 && punchgs.TweenLite.set([d._lw, d._pw, d._mw], {
                minHeight: d._grouph
            }))
        },
        createTimelineStructure: function(a) {
            function b(a, b, c, d) {
                var f, e = new punchgs.TimelineLite({
                    paused: !0
                });
                c = c || new Object, c[a.attr("id")] = c[a.attr("id")] || new Object, "staticlayers" === d && (c[a.attr("id")].firstslide = a.data("startslide"), c[a.attr("id")].lastslide = a.data("endslide")), a.data("slideid", d), c[a.attr("id")].defclasses = f = a[0].className, c[a.attr("id")].wrapper = f.indexOf("rev_layer_in_column") >= 0 ? a.closest(".rev_column_inner") : f.indexOf("rev_column_inner") >= 0 ? a.closest(".rev_row") : f.indexOf("rev_layer_in_group") >= 0 ? a.closest(".rev_group") : "none", c[a.attr("id")].timeline = e, c[a.attr("id")].layer = a, c[a.attr("id")].triggerstate = a.data("lasttriggerstate"), c[a.attr("id")].dchildren = f.indexOf("rev_row") >= 0 ? a[0].getElementsByClassName("rev_column_inner") : f.indexOf("rev_column_inner") >= 0 ? a[0].getElementsByClassName("tp-caption") : f.indexOf("rev_group") >= 0 ? a[0].getElementsByClassName("rev_layer_in_group") : "none", a.data("timeline", e)
            }
            a.timelines = a.timelines || new Object, a.c.find(".tp-revslider-slidesli, .tp-static-layers").each(function() {
                var c = jQuery(this),
                    d = c.data("index");
                a.timelines[d] = a.timelines[d] || {}, a.timelines[d].layers = a.timelines[d].layers || new Object, c.find(".tp-caption").each(function(c) {
                    b(jQuery(this), a, a.timelines[d].layers, d)
                })
            })
        },
        buildFullTimeLine: function(a) {
            var k, l, c = a.caption,
                d = c.data(),
                f = a.opt,
                i = {},
                n = j();
            if (k = f.timelines[d._slideid].layers[d._id], !k.generated || a.regenerate === !0) {
                if (l = k.timeline, k.generated = !0, void 0 !== d.current_timeline && a.regenerate !== !0 ? (d.current_timeline_pause = d.current_timeline.paused(), d.current_timeline_time = d.current_timeline.time(), d.current_is_nc_timeline = l === d.current_timeline, d.static_layer_timeline_time = d.current_timeline_time) : (d.static_layer_timeline_time = d.current_timeline_time, d.current_timeline_time = 0, d.current_timeline && d.current_timeline.clear()), l.clear(), i.svg = void 0 != d.svg_src && c.find("svg"), i.svg && (d.idlesvg = h(d.svg_idle, g())), d.hoverframeindex !== -1 && void 0 !== d.hoverframeindex && !c.hasClass("rs-hover-ready")) {
                    if (c.addClass("rs-hover-ready"), d.hovertimelines = {}, d.hoveranim = m(n, d.frames[d.hoverframeindex].to), d.hoveranim = q(d.hoveranim, d.frames[d.hoverframeindex].style), i.svg) {
                        var p = h(d.svg_hover, g());
                        void 0 != d.hoveranim.anim.color && (p.anim.fill = d.hoveranim.anim.color, d.idlesvg.anim.fill = i.svg.css("color")), d.hoversvg = p
                    }
                    c.hover(function(a) {
                        var b = {
                                caption: jQuery(a.currentTarget),
                                opt: f,
                                firstframe: "frame_0",
                                lastframe: "frame_999"
                            },
                            d = (e(b), b.caption),
                            g = d.data(),
                            h = g.frames[g.hoverframeindex],
                            j = !0;
                        g.forcehover = h.force, j && (g.hovertimelines.item = punchgs.TweenLite.to(d, h.speed / 1e3, g.hoveranim.anim), (g.hoverzIndex || g.hoveranim.anim && g.hoveranim.anim.zIndex) && (g.basiczindex = void 0 === g.basiczindex ? g.cssobj.zIndex : g.basiczindex, g.hoverzIndex = void 0 === g.hoverzIndex ? g.hoveranim.anim.zIndex : g.hoverzIndex, g.inhoverinanimation = !0, 0 === h.speed && (g.inhoverinanimation = !1), g.hovertimelines.pwhoveranim = punchgs.TweenLite.to(g._pw, h.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: g.hoverzIndex
                        }), g.hovertimelines.pwhoveranim.eventCallback("onComplete", function(a) {
                            a.inhoverinanimation = !1
                        }, [g])), i.svg && (g.hovertimelines.svghoveranim = punchgs.TweenLite.to([i.svg, i.svg.find("path")], h.speed / 1e3, g.hoversvg.anim)), g.hoveredstatus = !0)
                    }, function(a) {
                        var b = {
                                caption: jQuery(a.currentTarget),
                                opt: f,
                                firstframe: "frame_0",
                                lastframe: "frame_999"
                            },
                            d = (e(b), b.caption),
                            g = d.data(),
                            h = g.frames[g.hoverframeindex],
                            j = !0;
                        j && (g.hoveredstatus = !1, g.inhoveroutanimation = !0, g.hovertimelines.item.pause(), g.hovertimelines.item = punchgs.TweenLite.to(d, h.speed / 1e3, jQuery.extend(!0, {}, g._gsTransformTo)), 0 == h.speed && (g.inhoveroutanimation = !1), g.hovertimelines.item.eventCallback("onComplete", function(a) {
                            a.inhoveroutanimation = !1
                        }, [g]), void 0 !== g.hovertimelines.pwhoveranim && (g.hovertimelines.pwhoveranim = punchgs.TweenLite.to(g._pw, h.speed / 1e3, {
                            overwrite: "auto",
                            zIndex: g.basiczindex
                        })), i.svg && punchgs.TweenLite.to([i.svg, i.svg.find("path")], h.speed / 1e3, g.idlesvg.anim))
                    })
                }
                for (var r = 0; r < d.frames.length; r++)
                    if (r !== d.hoverframeindex) {
                        var s = r === d.inframeindex ? "frame_0" : r === d.outframeindex || "frame_999" === d.frames[r].frame ? "frame_999" : "frame_" + r;
                        d.frames[r].framename = s, k[s] = {}, k[s].timeline = new punchgs.TimelineLite({
                            align: "normal"
                        });
                        var t = d.frames[r].delay,
                            v = (d.triggered_startstatus, void 0 !== t ? jQuery.inArray(t, ["slideenter", "bytrigger", "wait"]) >= 0 ? t : parseInt(t, 0) / 1e3 : "wait");
                        void 0 !== k.firstslide && "frame_0" === s && (l.addLabel("slide_" + k.firstslide + "_pause", 0), l.addPause("slide_" + k.firstslide + "_pause"), l.addLabel("slide_" + k.firstslide, "+=0.005")), void 0 !== k.lastslide && "frame_999" === s && (l.addLabel("slide_" + k.lastslide + "_pause", "+=0.01"), l.addPause("slide_" + k.lastslide + "_pause"), l.addLabel("slide_" + k.lastslide, "+=0.005")), jQuery.isNumeric(v) ? l.addLabel(s, "+=" + v) : (l.addLabel("pause_" + r, "+=0.01"), l.addPause("pause_" + r), l.addLabel(s, "+=0.01")), l = b.createFrameOnTimeline({
                            caption: a.caption,
                            timeline: l,
                            label: s,
                            frameindex: r,
                            opt: f
                        })
                    }
                a.regenerate || (d.current_is_nc_timeline && (d.current_timeline = l), d.current_timeline_pause ? l.pause(d.current_timeline_time) : l.time(d.current_timeline_time))
            }
        },
        createFrameOnTimeline: function(a) {
            var c = a.caption,
                d = c.data(),
                e = a.label,
                g = a.timeline,
                h = a.frameindex,
                j = a.opt,
                k = c,
                o = {},
                p = j.timelines[d._slideid].layers[d._id],
                q = d.frames.length - 1,
                r = d.frames[h].split;
            if (d.hoverframeindex !== -1 && d.hoverframeindex == q && (q -= 1), o.content = new punchgs.TimelineLite({
                    align: "normal"
                }), o.mask = new punchgs.TimelineLite({
                    align: "normal"
                }), void 0 === g.vars.id && (g.vars.id = Math.round(1e5 * Math.random())), "column" === d._nctype && (g.add(punchgs.TweenLite.set(d._cbgc_man, {
                    display: "block"
                }), e), g.add(punchgs.TweenLite.set(d._cbgc_auto, {
                    display: "none"
                }), e)), void 0 === d.mySplitText && d.splittext) {
                var s = c.find("a").length > 0 ? c.find("a") : c;
                d.mySplitText = new punchgs.SplitText(s, {
                    type: "chars,words,lines",
                    charsClass: "tp-splitted tp-charsplit",
                    wordsClass: "tp-splitted tp-wordsplit",
                    linesClass: "tp-splitted tp-linesplit"
                }), c.addClass("splitted")
            }
            void 0 !== d.mySplitText && r && r.match(/chars|words|lines/g) && (k = d.mySplitText[r]);
            var y, z, t = h !== d.outframeindex ? m(f(), d.frames[h].to) : void 0 !== d.frames[h].to && null === d.frames[h].to.match(/auto:auto/g) ? m(i(), d.frames[h].to, 1 == j.sdir) : m(i(), d.frames[d.inframeindex].from, 0 == j.sdir),
                u = void 0 !== d.frames[h].from ? m(t, d.frames[d.inframeindex].from, 1 == j.sdir) : void 0,
                x = d.frames[h].splitdelay;
            if (0 !== h || a.fromcurrentstate ? z = n(d.frames[h].mask) : y = n(d.frames[h].mask), t.anim.ease = void 0 === d.frames[h].ease ? punchgs.Power1.easeInOut : d.frames[h].ease, void 0 !== u && (u.anim.ease = void 0 === d.frames[h].ease ? punchgs.Power1.easeInOut : d.frames[h].ease, u.speed = void 0 === d.frames[h].speed ? u.speed : d.frames[h].speed, u.anim.x = u.anim.x * j.bw || l(u.anim.x, j, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), u.anim.y = u.anim.y * j.bw || l(u.anim.y, j, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), void 0 !== t && (t.anim.ease = void 0 === d.frames[h].ease ? punchgs.Power1.easeInOut : d.frames[h].ease, t.speed = void 0 === d.frames[h].speed ? t.speed : d.frames[h].speed, t.anim.x = t.anim.x * j.bw || l(t.anim.x, j, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), t.anim.y = t.anim.y * j.bw || l(t.anim.y, j, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), c.data("iframes") && g.add(punchgs.TweenLite.set(c.find("iframe"), {
                    autoAlpha: 1
                }), e + "+=0.001"), h === d.outframeindex && (d.frames[h].to && d.frames[h].to.match(/auto:auto/g), t.speed = void 0 === d.frames[h].speed || "inherit" === d.frames[h].speed ? d.frames[d.inframeindex].speed : d.frames[h].speed, t.anim.ease = void 0 === d.frames[h].ease || "inherit" === d.frames[h].ease ? d.frames[d.inframeindex].ease : d.frames[h].ease, t.anim.overwrite = "auto"), 0 !== h || a.fromcurrentstate) 0 === h && a.fromcurrentstate && (t.speed = u.speed);
            else {
                if (k != c) {
                    var A = jQuery.extend({}, t.anim, !0);
                    g.add(punchgs.TweenLite.set(c, t.anim), e), t = f(), t.ease = A.ease, void 0 !== A.filter && (t.anim.filter = A.filter), void 0 !== A["-webkit-filter"] && (t.anim["-webkit-filter"] = A["-webkit-filter"])
                }
                u.anim.visibility = "hidden", u.anim.immediateRender = !0, t.anim.visibility = "visible"
            }
            return a.fromcurrentstate && (t.anim.immediateRender = !0), 0 !== h || a.fromcurrentstate ? g.add(o.content.staggerTo(k, t.speed / 1e3, t.anim, x), e) : g.add(o.content.staggerFromTo(k, u.speed / 1e3, u.anim, t.anim, x), e), void 0 === z || z === !1 || 0 === h && a.ignorefirstframe || (z.anim.ease = void 0 === z.anim.ease || "inherit" === z.anim.ease ? d.frames[0].ease : z.anim.ease, z.anim.overflow = "hidden", z.anim.x = z.anim.x * j.bw || l(z.anim.x, j, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), z.anim.y = z.anim.y * j.bw || l(z.anim.y, j, d.eow, d.eoh, d.calcy, d.calcx, "vertical")), 0 === h && y && y !== !1 && !a.fromcurrentstate || 0 === h && a.ignorefirstframe ? (z = new Object, z.anim = new Object, z.anim.overwrite = "auto", z.anim.ease = t.anim.ease, z.anim.x = z.anim.y = 0, y && y !== !1 && (y.anim.x = y.anim.x * j.bw || l(y.anim.x, j, d.eow, d.eoh, d.calcy, d.calcx, "horizontal"), y.anim.y = y.anim.y * j.bw || l(y.anim.y, j, d.eow, d.eoh, d.calcy, d.calcx, "vertical"), y.anim.overflow = "hidden")) : 0 === h && g.add(o.mask.set(d._mw, {
                overflow: "visible"
            }), e), void 0 !== y && void 0 !== z && y !== !1 && z !== !1 ? g.add(o.mask.fromTo(d._mw, u.speed / 1e3, y.anim, z.anim, x), e) : void 0 !== z && z !== !1 && g.add(o.mask.to(d._mw, t.speed / 1e3, z.anim, x), e), g.addLabel(e + "_end"), d._gsTransformTo && h === q && d.hoveredstatus && (d.hovertimelines.item = punchgs.TweenLite.to(c, 0, d._gsTransformTo)), d._gsTransformTo = !1, o.content.eventCallback("onStart", function(a, c, d, e, f, g, h, i) {
                var k = {};
                if (k.layer = h, k.eventtype = 0 === a ? "enterstage" : a === e.outframeindex ? "leavestage" : "framestarted", k.layertype = h.data("layertype"), e.active = !0, k.frame_index = a, k.layersettings = h.data(), j.c.trigger("revolution.layeraction", [k]), "on" == e.loopanimation && w(e._lw, j.bw), "enterstage" === k.eventtype && (e.animdirection = "in", e.visibleelement = !0, b.toggleState(e.layertoggledby)), "none" !== c.dchildren && void 0 !== c.dchildren && c.dchildren.length > 0)
                    if (0 === a)
                        for (var l = 0; l < c.dchildren.length; l++) jQuery(c.dchildren[l]).data("timeline").play(0);
                    else if (a === e.outframeindex)
                    for (var l = 0; l < c.dchildren.length; l++) b.endMoveCaption({
                        caption: jQuery(c.dchildren[l]),
                        opt: j,
                        checkchildrens: !0
                    });
                punchgs.TweenLite.set(d, {
                    visibility: "visible"
                }), e.current_frame = a, e.current_timeline = f, e.current_timeline_time = f.time(), i && (e.static_layer_timeline_time = e.current_timeline_time), e.last_frame_started = a
            }, [h, p, d._pw, d, g, t.anim, c, a.updateStaticTimeline]), o.content.eventCallback("onUpdate", function(a, b, d, e, f, g, h, i) {
                "column" === e._nctype && v(c, j), punchgs.TweenLite.set(d, {
                    visibility: "visible"
                }), e.current_frame = g, e.current_timeline = f, e.current_timeline_time = f.time(), i && (e.static_layer_timeline_time = e.current_timeline_time), void 0 !== e.hoveranim && e._gsTransformTo === !1 && (e._gsTransformTo = h, e._gsTransformTo && e._gsTransformTo.startAt && delete e._gsTransformTo.startAt, void 0 === e.cssobj.styleProps.css ? e._gsTransformTo = jQuery.extend(!0, {}, e.cssobj.styleProps, e._gsTransformTo) : e._gsTransformTo = jQuery.extend(!0, {}, e.cssobj.styleProps.css, e._gsTransformTo)), e.visibleelement = !0
            }, [e, d._id, d._pw, d, g, h, jQuery.extend(!0, {}, t.anim), a.updateStaticTimeline]), o.content.eventCallback("onComplete", function(a, d, e, f, g, h, i) {
                var k = {};
                k.layer = c, k.eventtype = 0 === a ? "enteredstage" : a === d - 1 || a === e ? "leftstage" : "frameended", k.layertype = c.data("layertype"), k.layersettings = c.data(), j.c.trigger("revolution.layeraction", [k]), "leftstage" !== k.eventtype && b.animcompleted(c, j), "leftstage" === k.eventtype && b.stopVideo && b.stopVideo(c, j), "column" === g._nctype && (punchgs.TweenLite.set(g._cbgc_man, {
                    display: "none"
                }), punchgs.TweenLite.set(g._cbgc_auto, {
                    display: "block"
                })), "leftstage" === k.eventtype && (g.active = !1, punchgs.TweenLite.set(f, {
                    visibility: "hidden",
                    overwrite: "auto"
                }), g.animdirection = "out", g.visibleelement = !1, b.unToggleState(g.layertoggledby)), g.current_frame = a, g.current_timeline = h, g.current_timeline_time = h.time(), i && (g.static_layer_timeline_time = g.current_timeline_time)
            }, [h, d.frames.length, q, d._pw, d, g, a.updateStaticTimeline]), g
        },
        endMoveCaption: function(a) {
            a.firstframe = "frame_0", a.lastframe = "frame_999";
            var c = e(a),
                d = a.caption.data();
            if (void 0 !== a.frame ? c.timeline.play(a.frame) : (!c.static || a.currentslide >= c.removeonslide || a.currentslide < c.showonslide) && (c.outnow = new punchgs.TimelineLite, c.timeline.pause(), d.visibleelement === !0 && b.createFrameOnTimeline({
                    caption: a.caption,
                    timeline: c.outnow,
                    label: "outnow",
                    frameindex: a.caption.data("outframeindex"),
                    opt: a.opt,
                    fromcurrentstate: !0
                }).play()), a.checkchildrens && c.timeline_obj && c.timeline_obj.dchildren && "none" !== c.timeline_obj.dchildren && c.timeline_obj.dchildren.length > 0)
                for (var f = 0; f < c.timeline_obj.dchildren.length; f++) b.endMoveCaption({
                    caption: jQuery(c.timeline_obj.dchildren[f]),
                    opt: a.opt
                })
        },
        playAnimationFrame: function(a) {
            a.firstframe = a.triggerframein, a.lastframe = a.triggerframeout;
            var f, c = e(a),
                d = a.caption.data(),
                g = 0;
            for (var h in d.frames) d.frames[h].framename === a.frame && (f = g), g++;
            void 0 !== d.triggeredtimeline && d.triggeredtimeline.pause(), d.triggeredtimeline = new punchgs.TimelineLite, c.timeline.pause();
            var i = d.visibleelement === !0;
            d.triggeredtimeline = b.createFrameOnTimeline({
                caption: a.caption,
                timeline: d.triggeredtimeline,
                label: "triggered",
                frameindex: f,
                updateStaticTimeline: !0,
                opt: a.opt,
                ignorefirstframe: !0,
                fromcurrentstate: i
            }).play()
        },
        removeTheCaptions: function(a, c) {
            if ("stop" === b.compare_version(d).check) return !1;
            var f = a.data("index"),
                g = new Array;
            c.layers[f] && jQuery.each(c.layers[f], function(a, b) {
                g.push(b)
            });
            var h = b.currentSlideIndex(c);
            g && jQuery.each(g, function(a) {
                var d = jQuery(this);
                "carousel" === c.sliderType && "on" === c.carousel.showLayersAllTime ? (clearTimeout(d.data("videoplaywait")), b.stopVideo && b.stopVideo(d, c), b.removeMediaFromList && b.removeMediaFromList(d, c), c.lastplayedvideos = []) : (x(d), clearTimeout(d.data("videoplaywait")), b.endMoveCaption({
                    caption: d,
                    opt: c,
                    currentslide: h
                }), b.removeMediaFromList && b.removeMediaFromList(d, c), c.lastplayedvideos = [])
            })
        }
    });
    var e = function(a) {
            var b = {};
            return a.firstframe = void 0 === a.firstframe ? "frame_0" : a.firstframe, a.lastframe = void 0 === a.lastframe ? "frame_999" : a.lastframe, b.id = a.caption.data("id") || a.caption.attr("id"), b.slideid = a.caption.data("slideid") || a.caption.closest(".tp-revslider-slidesli").data("index"), b.timeline_obj = a.opt.timelines[b.slideid].layers[b.id], b.timeline = b.timeline_obj.timeline, b.ffs = b.timeline.getLabelTime(a.firstframe), b.ffe = b.timeline.getLabelTime(a.firstframe + "_end"), b.lfs = b.timeline.getLabelTime(a.lastframe), b.lfe = b.timeline.getLabelTime(a.lastframe + "_end"), b.ct = b.timeline.time(), b.static = void 0 != b.timeline_obj.firstslide || void 0 != b.timeline_obj.lastslide, b.static && (b.showonslide = b.timeline_obj.firstslide, b.removeonslide = b.timeline_obj.lastslide), b
        },
        f = function(a) {
            return a = void 0 === a ? new Object : a, a.anim = void 0 === a.anim ? new Object : a.anim, a.anim.x = void 0 === a.anim.x ? 0 : a.anim.x, a.anim.y = void 0 === a.anim.y ? 0 : a.anim.y, a.anim.z = void 0 === a.anim.z ? 0 : a.anim.z, a.anim.rotationX = void 0 === a.anim.rotationX ? 0 : a.anim.rotationX, a.anim.rotationY = void 0 === a.anim.rotationY ? 0 : a.anim.rotationY, a.anim.rotationZ = void 0 === a.anim.rotationZ ? 0 : a.anim.rotationZ, a.anim.scaleX = void 0 === a.anim.scaleX ? 1 : a.anim.scaleX, a.anim.scaleY = void 0 === a.anim.scaleY ? 1 : a.anim.scaleY, a.anim.skewX = void 0 === a.anim.skewX ? 0 : a.anim.skewX, a.anim.skewY = void 0 === a.anim.skewY ? 0 : a.anim.skewY, a.anim.opacity = void 0 === a.anim.opacity ? 1 : a.anim.opacity, a.anim.transformOrigin = void 0 === a.anim.transformOrigin ? "50% 50%" : a.anim.transformOrigin, a.anim.transformPerspective = void 0 === a.anim.transformPerspective ? 600 : a.anim.transformPerspective, a.anim.rotation = void 0 === a.anim.rotation ? 0 : a.anim.rotation, a.anim.force3D = void 0 === a.anim.force3D ? "auto" : a.anim.force3D, a.anim.autoAlpha = void 0 === a.anim.autoAlpha ? 1 : a.anim.autoAlpha, a.anim.visibility = void 0 === a.anim.visibility ? "visible" : a.anim.visibility, a.anim.overwrite = void 0 === a.anim.overwrite ? "auto" : a.anim.overwrite, a.speed = void 0 === a.speed ? .3 : a.speed, a.filter = void 0 === a.filter ? "blur(0px) grayscale(0px)" : a.filter, a["-webkit-filter"] = void 0 === a["-webkit-filter"] ? "blur(0px) grayscale(0px)" : a["-webkit-filter"], a
        },
        g = function() {
            var a = new Object;
            return a.anim = new Object, a.anim.stroke = "none", a.anim.strokeWidth = 0, a.anim.strokeDasharray = "none", a.anim.strokeDashoffset = "0", a
        },
        h = function(a, b) {
            var c = a.split(";");
            return c && jQuery.each(c, function(a, c) {
                var d = c.split(":"),
                    e = d[0],
                    f = d[1];
                "sc" == e && (b.anim.stroke = f), "sw" == e && (b.anim.strokeWidth = f), "sda" == e && (b.anim.strokeDasharray = f), "sdo" == e && (b.anim.strokeDashoffset = f)
            }), b
        },
        i = function() {
            var a = new Object;
            return a.anim = new Object, a.anim.x = 0, a.anim.y = 0, a.anim.z = 0, a
        },
        j = function() {
            var a = new Object;
            return a.anim = new Object, a.speed = .2, a
        },
        k = function(a, b) {
            if (jQuery.isNumeric(parseFloat(a))) return parseFloat(a);
            if (void 0 === a || "inherit" === a) return b;
            if (a.split("{").length > 1) {
                var c = a.split(","),
                    d = parseFloat(c[1].split("}")[0]);
                c = parseFloat(c[0].split("{")[1]), a = Math.random() * (d - c) + c
            }
            return a
        },
        l = function(a, b, c, d, e, f, g) {
            return !jQuery.isNumeric(a) && a.match(/%]/g) ? (a = a.split("[")[1].split("]")[0], "horizontal" == g ? a = (c + 2) * parseInt(a, 0) / 100 : "vertical" == g && (a = (d + 2) * parseInt(a, 0) / 100)) : (a = "layer_left" === a ? 0 - c : "layer_right" === a ? c : a, a = "layer_top" === a ? 0 - d : "layer_bottom" === a ? d : a, a = "left" === a || "stage_left" === a ? 0 - c - f : "right" === a || "stage_right" === a ? b.conw - f : "center" === a || "stage_center" === a ? b.conw / 2 - c / 2 - f : a, a = "top" === a || "stage_top" === a ? 0 - d - e : "bottom" === a || "stage_bottom" === a ? b.conh - e : "middle" === a || "stage_middle" === a ? b.conh / 2 - d / 2 - e : a), a
        },
        m = function(a, b, c) {
            var d = new Object;
            if (d = jQuery.extend(!0, {}, d, a), void 0 === b) return d;
            var e = b.split(";"),
                f = "";
            return e && jQuery.each(e, function(a, b) {
                var e = b.split(":"),
                    g = e[0],
                    h = e[1];
                c && void 0 != h && h.length > 0 && h.match(/\(R\)/) && (h = h.replace("(R)", ""), h = "right" === h ? "left" : "left" === h ? "right" : "top" === h ? "bottom" : "bottom" === h ? "top" : h, "[" === h[0] && "-" === h[1] ? h = h.replace("[-", "[") : "[" === h[0] && "-" !== h[1] ? h = h.replace("[", "[-") : "-" === h[0] ? h = h.replace("-", "") : h[0].match(/[1-9]/) && (h = "-" + h)), void 0 != h && (h = h.replace(/\(R\)/, ""), "rotationX" != g && "rX" != g || (d.anim.rotationX = k(h, d.anim.rotationX) + "deg"), "rotationY" != g && "rY" != g || (d.anim.rotationY = k(h, d.anim.rotationY) + "deg"), "rotationZ" != g && "rZ" != g || (d.anim.rotation = k(h, d.anim.rotationZ) + "deg"), "scaleX" != g && "sX" != g || (d.anim.scaleX = k(h, d.anim.scaleX)), "scaleY" != g && "sY" != g || (d.anim.scaleY = k(h, d.anim.scaleY)), "opacity" != g && "o" != g || (d.anim.opacity = k(h, d.anim.opacity)), "fb" == g && (f = "" === f ? "blur(" + parseInt(h, 0) + "px)" : f + " blur(" + parseInt(h, 0) + "px)"), "fg" == g && (f = "" === f ? "grayscale(" + parseInt(h, 0) + "%)" : f + " grayscale(" + parseInt(h, 0) + "%)"), 0 === d.anim.opacity && (d.anim.autoAlpha = 0), d.anim.opacity = 0 == d.anim.opacity ? 1e-4 : d.anim.opacity, "skewX" != g && "skX" != g || (d.anim.skewX = k(h, d.anim.skewX)), "skewY" != g && "skY" != g || (d.anim.skewY = k(h, d.anim.skewY)), "x" == g && (d.anim.x = k(h, d.anim.x)), "y" == g && (d.anim.y = k(h, d.anim.y)), "z" == g && (d.anim.z = k(h, d.anim.z)), "transformOrigin" != g && "tO" != g || (d.anim.transformOrigin = h.toString()), "transformPerspective" != g && "tP" != g || (d.anim.transformPerspective = parseInt(h, 0)), "speed" != g && "s" != g || (d.speed = parseFloat(h)))
            }), "" !== f && (d.anim["-webkit-filter"] = f, d.anim.filter = f), d
        },
        n = function(a) {
            if (void 0 === a) return !1;
            var b = new Object;
            b.anim = new Object;
            var c = a.split(";");
            return c && jQuery.each(c, function(a, c) {
                c = c.split(":");
                var d = c[0],
                    e = c[1];
                "x" == d && (b.anim.x = e), "y" == d && (b.anim.y = e), "s" == d && (b.speed = parseFloat(e)), "e" != d && "ease" != d || (b.anim.ease = e)
            }), b
        },
        o = function(a, b, c) {
            if (void 0 == a && (a = 0), !jQuery.isArray(a) && "string" === jQuery.type(a) && (a.split(",").length > 1 || a.split("[").length > 1)) {
                a = a.replace("[", ""), a = a.replace("]", "");
                var d = a.match(/'/g) ? a.split("',") : a.split(",");
                a = new Array, d && jQuery.each(d, function(b, c) {
                    c = c.replace("'", ""), c = c.replace("'", ""), a.push(c)
                })
            } else {
                var e = a;
                jQuery.isArray(a) || (a = new Array, a.push(e))
            }
            var e = a[a.length - 1];
            if (a.length < b.rle)
                for (var f = 1; f <= b.curWinRange; f++) a.push(e);
            return a
        },
        q = function(a, b) {
            if (void 0 === b) return a;
            b = b.replace("c:", "color:"), b = b.replace("bg:", "background-color:"), b = b.replace("bw:", "border-width:"), b = b.replace("bc:", "border-color:"), b = b.replace("br:", "borderRadius:"), b = b.replace("bs:", "border-style:"), b = b.replace("td:", "text-decoration:"), b = b.replace("zi:", "zIndex:");
            var c = b.split(";");
            return c && jQuery.each(c, function(b, c) {
                var d = c.split(":");
                d[0].length > 0 && (a.anim[d[0]] = d[1])
            }), a
        },
        r = function(a, b) {
            var e, c = new Object,
                d = !1;
            if ("rekursive" == b && (e = a.closest(".tp-caption"), e && a.css("fontSize") === e.css("fontSize") && a.css("fontWeight") === e.css("fontWeight") && a.css("lineHeight") === e.css("lineHeight") && (d = !0)), c.basealign = a.data("basealign") || "grid", c.fontSize = d ? void 0 === e.data("fontsize") ? parseInt(e.css("fontSize"), 0) || 0 : e.data("fontsize") : void 0 === a.data("fontsize") ? parseInt(a.css("fontSize"), 0) || 0 : a.data("fontsize"), c.fontWeight = d ? void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), c.whiteSpace = d ? void 0 === e.data("whitespace") ? e.css("whitespace") || "normal" : e.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whitespace") || "normal" : a.data("whitespace"), c.textAlign = d ? void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign") : void 0 === a.data("textalign") ? a.css("textalign") || "inherit" : a.data("textalign"), c.zIndex = d ? void 0 === e.data("zIndex") ? e.css("zIndex") || "inherit" : e.data("zIndex") : void 0 === a.data("zIndex") ? a.css("zIndex") || "inherit" : a.data("zIndex"), jQuery.inArray(a.data("layertype"), ["video", "image", "audio"]) !== -1 || a.is("img") ? c.lineHeight = 0 : c.lineHeight = d ? void 0 === e.data("lineheight") ? parseInt(e.css("lineHeight"), 0) || 0 : e.data("lineheight") : void 0 === a.data("lineheight") ? parseInt(a.css("lineHeight"), 0) || 0 : a.data("lineheight"), c.letterSpacing = d ? void 0 === e.data("letterspacing") ? parseFloat(e.css("letterSpacing"), 0) || 0 : e.data("letterspacing") : void 0 === a.data("letterspacing") ? parseFloat(a.css("letterSpacing")) || 0 : a.data("letterspacing"), c.paddingTop = void 0 === a.data("paddingtop") ? parseInt(a.css("paddingTop"), 0) || 0 : a.data("paddingtop"), c.paddingBottom = void 0 === a.data("paddingbottom") ? parseInt(a.css("paddingBottom"), 0) || 0 : a.data("paddingbottom"), c.paddingLeft = void 0 === a.data("paddingleft") ? parseInt(a.css("paddingLeft"), 0) || 0 : a.data("paddingleft"), c.paddingRight = void 0 === a.data("paddingright") ? parseInt(a.css("paddingRight"), 0) || 0 : a.data("paddingright"), c.marginTop = void 0 === a.data("margintop") ? parseInt(a.css("marginTop"), 0) || 0 : a.data("margintop"), c.marginBottom = void 0 === a.data("marginbottom") ? parseInt(a.css("marginBottom"), 0) || 0 : a.data("marginbottom"), c.marginLeft = void 0 === a.data("marginleft") ? parseInt(a.css("marginLeft"), 0) || 0 : a.data("marginleft"), c.marginRight = void 0 === a.data("marginright") ? parseInt(a.css("marginRight"), 0) || 0 : a.data("marginright"), c.borderTopWidth = void 0 === a.data("bordertopwidth") ? parseInt(a.css("borderTopWidth"), 0) || 0 : a.data("bordertopwidth"), c.borderBottomWidth = void 0 === a.data("borderbottomwidth") ? parseInt(a.css("borderBottomWidth"), 0) || 0 : a.data("borderbottomwidth"), c.borderLeftWidth = void 0 === a.data("borderleftwidth") ? parseInt(a.css("borderLeftWidth"), 0) || 0 : a.data("borderleftwidth"), c.borderRightWidth = void 0 === a.data("borderrightwidth") ? parseInt(a.css("borderRightWidth"), 0) || 0 : a.data("borderrightwidth"), "rekursive" != b) {
                if (c.color = void 0 === a.data("color") ? "nopredefinedcolor" : a.data("color"), c.whiteSpace = d ? void 0 === e.data("whitespace") ? e.css("whiteSpace") || "nowrap" : e.data("whitespace") : void 0 === a.data("whitespace") ? a.css("whiteSpace") || "nowrap" : a.data("whitespace"), c.textAlign = d ? void 0 === e.data("textalign") ? e.css("textalign") || "inherit" : e.data("textalign") : void 0 === a.data("textalign") ? a.css("textalign") || "inherit" : a.data("textalign"), c.fontWeight = d ? void 0 === e.data("fontweight") ? parseInt(e.css("fontWeight"), 0) || 0 : e.data("fontweight") : void 0 === a.data("fontweight") ? parseInt(a.css("fontWeight"), 0) || 0 : a.data("fontweight"), c.minWidth = void 0 === a.data("width") ? parseInt(a.css("minWidth"), 0) || 0 : a.data("width"), c.minHeight = void 0 === a.data("height") ? parseInt(a.css("minHeight"), 0) || 0 : a.data("height"), void 0 != a.data("videowidth") && void 0 != a.data("videoheight")) {
                    var f = a.data("videowidth"),
                        g = a.data("videoheight");
                    f = "100%" === f ? "none" : f, g = "100%" === g ? "none" : g, a.data("width", f), a.data("height", g)
                }
                c.maxWidth = void 0 === a.data("width") ? parseInt(a.css("maxWidth"), 0) || "none" : a.data("width"), c.maxHeight = void 0 === a.data("height") ? parseInt(a.css("maxHeight"), 0) || "none" : a.data("height"), c.wan = void 0 === a.data("wan") ? parseInt(a.css("-webkit-transition"), 0) || "none" : a.data("wan"), c.moan = void 0 === a.data("moan") ? parseInt(a.css("-moz-animation-transition"), 0) || "none" : a.data("moan"), c.man = void 0 === a.data("man") ? parseInt(a.css("-ms-animation-transition"), 0) || "none" : a.data("man"), c.ani = void 0 === a.data("ani") ? parseInt(a.css("transition"), 0) || "none" : a.data("ani")
            }
            return c.styleProps = {
                borderTopLeftRadius: a[0].style.borderTopLeftRadius,
                borderTopRightRadius: a[0].style.borderTopRightRadius,
                borderBottomRightRadius: a[0].style.borderBottomRightRadius,
                borderBottomLeftRadius: a[0].style.borderBottomLeftRadius,
                "background-color": a[0].style["background-color"],
                "border-top-color": a[0].style["border-top-color"],
                "border-bottom-color": a[0].style["border-bottom-color"],
                "border-right-color": a[0].style["border-right-color"],
                "border-left-color": a[0].style["border-left-color"],
                "border-top-style": a[0].style["border-top-style"],
                "border-bottom-style": a[0].style["border-bottom-style"],
                "border-left-style": a[0].style["border-left-style"],
                "border-right-style": a[0].style["border-right-style"],
                "border-left-width": a[0].style["border-left-width"],
                "border-right-width": a[0].style["border-right-width"],
                "border-bottom-width": a[0].style["border-bottom-width"],
                "border-top-width": a[0].style["border-top-width"],
                color: a[0].style.color,
                "text-decoration": a[0].style["text-decoration"],
                "font-style": a[0].style["font-style"]
            }, "" == c.styleProps.color && (c.styleProps.color = a.css("color")), c
        },
        s = function(a, b) {
            var c = new Object;
            return a && jQuery.each(a, function(d, e) {
                var f = o(e, b)[b.curWinRange];
                c[d] = void 0 !== f ? f : a[d]
            }), c
        },
        t = function(a, b, c, d) {
            return a = jQuery.isNumeric(a) ? a * b + "px" : a, a = "full" === a ? d : "auto" === a || "none" === a ? c : a
        },
        u = function(a, b, c, d) {
            var e = a.data();
            e = void 0 === e ? {} : e;
            try {
                if ("BR" == a[0].nodeName || "br" == a[0].tagName) return !1
            } catch (a) {}
            e.cssobj = void 0 === e.cssobj ? r(a, c) : e.cssobj;
            var f = s(e.cssobj, b),
                g = b.bw,
                h = b.bh;
            if ("off" === d && (g = 1, h = 1), "auto" == f.lineHeight && (f.lineHeight = f.fontSize + 4), !a.hasClass("tp-splitted")) {
                a.css("-webkit-transition", "none"), a.css("-moz-transition", "none"), a.css("-ms-transition", "none"), a.css("transition", "none");
                var i = void 0 !== a.data("transform_hover") || void 0 !== a.data("style_hover");
                if (i && punchgs.TweenLite.set(a, f.styleProps), punchgs.TweenLite.set(a, {
                        fontSize: Math.round(f.fontSize * g) + "px",
                        fontWeight: f.fontWeight,
                        letterSpacing: Math.floor(f.letterSpacing * g) + "px",
                        paddingTop: Math.round(f.paddingTop * h) + "px",
                        paddingBottom: Math.round(f.paddingBottom * h) + "px",
                        paddingLeft: Math.round(f.paddingLeft * g) + "px",
                        paddingRight: Math.round(f.paddingRight * g) + "px",
                        marginTop: f.marginTop * h + "px",
                        marginBottom: f.marginBottom * h + "px",
                        marginLeft: f.marginLeft * g + "px",
                        marginRight: f.marginRight * g + "px",
                        borderTopWidth: Math.round(f.borderTopWidth * h) + "px",
                        borderBottomWidth: Math.round(f.borderBottomWidth * h) + "px",
                        borderLeftWidth: Math.round(f.borderLeftWidth * g) + "px",
                        borderRightWidth: Math.round(f.borderRightWidth * g) + "px",
                        lineHeight: Math.round(f.lineHeight * h) + "px",
                        textAlign: f.textAlign,
                        overwrite: "auto"
                    }), "rekursive" != c) {
                    var j = "slide" == f.basealign ? b.ulw : b.gridwidth[b.curWinRange],
                        k = "slide" == f.basealign ? b.ulh : b.gridheight[b.curWinRange],
                        l = t(f.maxWidth, g, "none", j),
                        m = t(f.maxHeight, h, "none", k),
                        n = t(f.minWidth, g, "0px", j),
                        o = t(f.minHeight, h, "0px", k);
                    if (n = void 0 === n ? 0 : n, o = void 0 === o ? 0 : o, l = void 0 === l ? "none" : l, m = void 0 === m ? "none" : m, e._isgroup && ("#1/1#" === n && (n = l = j), "#1/2#" === n && (n = l = j / 2), "#1/3#" === n && (n = l = j / 3), "#1/4#" === n && (n = l = j / 4), "#1/5#" === n && (n = l = j / 5), "#1/6#" === n && (n = l = j / 6), "#2/3#" === n && (n = l = j / 3 * 2), "#3/4#" === n && (n = l = j / 4 * 3), "#2/5#" === n && (n = l = j / 5 * 2), "#3/5#" === n && (n = l = j / 5 * 3), "#4/5#" === n && (n = l = j / 5 * 4), "#3/6#" === n && (n = l = j / 6 * 3), "#4/6#" === n && (n = l = j / 6 * 4), "#5/6#" === n && (n = l = j / 6 * 5)), e._ingroup && (e._groupw = n, e._grouph = o), punchgs.TweenLite.set(a, {
                            maxWidth: l,
                            maxHeight: m,
                            minWidth: n,
                            minHeight: o,
                            whiteSpace: f.whiteSpace,
                            textAlign: f.textAlign,
                            overwrite: "auto"
                        }), "nopredefinedcolor" != f.color && punchgs.TweenLite.set(a, {
                            color: f.color,
                            overwrite: "auto"
                        }), void 0 != e.svg_src) {
                        var p = "nopredefinedcolor" != f.color && void 0 != f.color ? f.color : void 0 != f.css && "nopredefinedcolor" != f.css.color && void 0 != f.css.color ? f.css.color : void 0 != f.styleProps.color ? f.styleProps.color : void 0 != f.styleProps.css && void 0 != f.styleProps.css.color && f.styleProps.css.color;
                        0 != p && (punchgs.TweenLite.set(a.find("svg"), {
                            fill: p,
                            overwrite: "auto"
                        }), punchgs.TweenLite.set(a.find("svg path"), {
                            fill: p,
                            overwrite: "auto"
                        }))
                    }
                }
                "column" === e._nctype && (void 0 === e._column_bg_set && (e._column_bg_set = a.css("backgroundColor"), e._column_bg_image = a.css("backgroundImage"), e._column_bg_image_repeat = a.css("backgroundRepeat"), e._column_bg_image_position = a.css("backgroundPosition"), e._column_bg_image_size = a.css("backgroundSize"), e._column_bg_opacity = a.data("bgopacity"), e._column_bg_opacity = void 0 === e._column_bg_opacity ? 1 : e._column_bg_opacity, punchgs.TweenLite.set(a, {
                    backgroundColor: "transparent",
                    backgroundImage: ""
                })), setTimeout(function() {
                    v(a, b)
                }, 1), e._cbgc_auto && (e._cbgc_auto[0].style.backgroundSize = e._column_bg_image_size, jQuery.isArray(f.marginLeft) ? punchgs.TweenLite.set(e._cbgc_auto, {
                    borderTopWidth: f.marginTop[b.curWinRange] * h + "px",
                    borderLeftWidth: f.marginLeft[b.curWinRange] * g + "px",
                    borderRightWidth: f.marginRight[b.curWinRange] * g + "px",
                    borderBottomWidth: f.marginBottom[b.curWinRange] * h + "px",
                    backgroundColor: e._column_bg_set,
                    backgroundImage: e._column_bg_image,
                    backgroundRepeat: e._column_bg_image_repeat,
                    backgroundPosition: e._column_bg_image_position,
                    opacity: e._column_bg_opacity
                }) : punchgs.TweenLite.set(e._cbgc_auto, {
                    borderTopWidth: f.marginTop * h + "px",
                    borderLeftWidth: f.marginLeft * g + "px",
                    borderRightWidth: f.marginRight * g + "px",
                    borderBottomWidth: f.marginBottom * h + "px",
                    backgroundColor: e._column_bg_set,
                    backgroundImage: e._column_bg_image,
                    backgroundRepeat: e._column_bg_image_repeat,
                    backgroundPosition: e._column_bg_image_position,
                    opacity: e._column_bg_opacity
                }))), setTimeout(function() {
                    a.css("-webkit-transition", a.data("wan")), a.css("-moz-transition", a.data("moan")), a.css("-ms-transition", a.data("man")), a.css("transition", a.data("ani"))
                }, 30)
            }
        },
        v = function(a, b) {
            var c = a.data();
            if (c._cbgc_man) {
                var d, e, f, g, h;
                jQuery.isArray(c.cssobj.marginLeft) ? (d = c.cssobj.marginLeft[b.curWinRange] * b.bw, e = c.cssobj.marginTop[b.curWinRange] * b.bh, f = c.cssobj.marginBottom[b.curWinRange] * b.bh, g = c.cssobj.marginRight[b.curWinRange] * b.bw) : (d = c.cssobj.marginLeft * b.bw, e = c.cssobj.marginTop * b.bh, f = c.cssobj.marginBottom * b.bh, g = c.cssobj.marginRight * b.bw), h = c._row.hasClass("rev_break_columns") ? "100%" : c._row.outerHeight() - (e + f) + "px", c._cbgc_man[0].style.backgroundSize = c._column_bg_image_size, punchgs.TweenLite.set(c._cbgc_man, {
                    width: "100%",
                    height: h,
                    backgroundColor: c._column_bg_set,
                    backgroundImage: c._column_bg_image,
                    backgroundRepeat: c._column_bg_image_repeat,
                    backgroundPosition: c._column_bg_image_position,
                    overwrite: "auto",
                    opacity: c._column_bg_opacity
                })
            }
        },
        w = function(a, b) {
            var c = a.data();
            if (a.hasClass("rs-pendulum") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var d = void 0 == a.data("startdeg") ? -20 : a.data("startdeg"),
                    e = void 0 == a.data("enddeg") ? 20 : a.data("enddeg"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                d *= b, e *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    rotation: d,
                    transformOrigin: g
                }, {
                    rotation: e,
                    ease: h
                })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    rotation: e,
                    transformOrigin: g
                }, {
                    rotation: d,
                    ease: h,
                    onComplete: function() {
                        c._loop_timeline.restart()
                    }
                }))
            }
            if (a.hasClass("rs-rotate") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var d = void 0 == a.data("startdeg") ? 0 : a.data("startdeg"),
                    e = void 0 == a.data("enddeg") ? 360 : a.data("enddeg"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                d *= b, e *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    rotation: d,
                    transformOrigin: g
                }, {
                    rotation: e,
                    ease: h,
                    onComplete: function() {
                        c._loop_timeline.restart()
                    }
                }))
            }
            if (a.hasClass("rs-slideloop") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var i = void 0 == a.data("xs") ? 0 : a.data("xs"),
                    j = void 0 == a.data("ys") ? 0 : a.data("ys"),
                    k = void 0 == a.data("xe") ? 0 : a.data("xe"),
                    l = void 0 == a.data("ye") ? 0 : a.data("ye"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                i *= b, j *= b, k *= b, l *= b, c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    x: i,
                    y: j
                }, {
                    x: k,
                    y: l,
                    ease: h
                })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    x: k,
                    y: l
                }, {
                    x: i,
                    y: j,
                    onComplete: function() {
                        c._loop_timeline.restart()
                    }
                }))
            }
            if (a.hasClass("rs-pulse") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var m = void 0 == a.data("zoomstart") ? 0 : a.data("zoomstart"),
                    n = void 0 == a.data("zoomend") ? 0 : a.data("zoomend"),
                    f = void 0 == a.data("speed") ? 2 : a.data("speed"),
                    h = void 0 == a.data("easing") ? punchgs.Power2.easeInOut : a.data("easing");
                c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    scale: m
                }, {
                    scale: n,
                    ease: h
                })), c._loop_timeline.append(new punchgs.TweenLite.fromTo(a, f, {
                    force3D: "auto",
                    scale: n
                }, {
                    scale: m,
                    onComplete: function() {
                        c._loop_timeline.restart()
                    }
                }))
            }
            if (a.hasClass("rs-wave") && void 0 == c._loop_timeline) {
                c._loop_timeline = new punchgs.TimelineLite;
                var o = void 0 == a.data("angle") ? 10 : parseInt(a.data("angle"), 0),
                    p = void 0 == a.data("radius") ? 10 : parseInt(a.data("radius"), 0),
                    f = void 0 == a.data("speed") ? -20 : a.data("speed"),
                    g = void 0 == a.data("origin") ? "50% 50%" : a.data("origin"),
                    q = g.split(" "),
                    r = new Object;
                q.length >= 1 ? (r.x = q[0], r.y = q[1]) : (r.x = "50%", r.y = "50%"), p *= b;
                var s = (parseInt(r.x, 0) / 100 - .5) * a.width(),
                    t = (parseInt(r.y, 0) / 100 - .5) * a.height(),
                    u = -1 * p + t,
                    v = 0 + s,
                    w = {
                        a: 0,
                        ang: o,
                        element: a,
                        unit: p,
                        xoffset: v,
                        yoffset: u
                    },
                    x = parseInt(o, 0),
                    y = new punchgs.TweenLite.fromTo(w, f, {
                        a: 0 + x
                    }, {
                        a: 360 + x,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone
                    });
                y.eventCallback("onUpdate", function(a) {
                    var b = a.a * (Math.PI / 180),
                        c = a.yoffset + a.unit * (1 - Math.sin(b)),
                        d = a.xoffset + Math.cos(b) * a.unit;
                    punchgs.TweenLite.to(a.element, .1, {
                        force3D: "auto",
                        x: d,
                        y: c
                    })
                }, [w]), y.eventCallback("onComplete", function(a) {
                    a._loop_timeline.restart()
                }, [c]), c._loop_timeline.append(y)
            }
        },
        x = function(a) {
            a.closest(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var a = this;
                void 0 != a._loop_timeline && (a._loop_timeline.pause(), a._loop_timeline = null)
            })
        }
}(jQuery);