/*!
 * Albe-Timeline v4.0.1, https://github.com/Albejr/jquery-albe-timeline
 * ======================================================================
 * Plugin para renderização de 'linha do tempo' a partir de listas de dados em JSON
 *
 * 2017, Albertino Júnior, http://albertino.eti.br
 */
!function (e) {
    e.fn.albeTimeline = function (t, n) {
        this.html("");
        var r = e.extend({}, e.fn.albeTimeline.defaults, n),
            s = e.fn.albeTimeline.languages.hasOwnProperty(r.language) ? e.fn.albeTimeline.languages[r.language] : {
                days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                shortMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сент", "Окт", "Ноя", "Дек"],
                separator: "de",
                msgEmptyContent: "Sem informações a serem exibidas."
            };
        if ("string" == typeof t && (t = e.parseJSON(t)), e.isEmptyObject(t)) console.warn(s.msgEmptyContent); else {
            t = t.sort(function (e, a) {
                return r.sortDesc ? Date.parse(a.time) - Date.parse(e.time) : Date.parse(e.time) - Date.parse(a.time)
            });
            var i = e("<ul>").attr("id", "timeline-menu"), l = e("<section>").attr("id", "timeline");
            e.each(t, function (t, n) {
                var d = new Date(n.time).getUTCFullYear(), o = e(l).find("div.group" + d);
                if (0 === o.length) {
                    o = e("<div>").attr("id", "y" + d).addClass("group" + d).text(d), e(l).append(o);
                    var p = e("<a>").attr("href", "#y" + d).text(d);
                    i.append(e("<li>").append(p))
                }
                var c = e("<div>").addClass("tl_badge");
                c.text(a(n.time, r.formatDate, s));
                var g = e("<div>").addClass("panel").append(c);
                if (n.header) {
                    var u = e("<div>").addClass("panel-heading"), f = e("<h4>").addClass("panel-title").text(n.header);
                    u.append(f), g.append(u)
                }
                var h = e("<div>").addClass("panel-body");
                if (e.each(n.body, function (a, t) {
                    var n = e("<" + t.tag + ">");
                    e(t.attr).each(function () {
                        e.each(this, function (e, a) {
                            "cssclass" === e.toLowerCase() ? n.addClass(a) : n.attr(e, a)
                        })
                    }), t.content && n.html(t.content), h.append(n)
                }), g.append(h), n.footer) {
                    var m = e("<div>").addClass("panel-footer").html(n.footer);
                    g.append(m)
                }
                var v = o.siblings('article[id^="a' + d + '"]'),
                    b = e('<article id="a' + d + "-" + (v.length + 1) + '">').append(g);
                v.length > 0 ? b.insertAfter(v.last()) : b.insertAfter(o)
            });
            var d = e("<div>").addClass("tl_badge").html("&nbsp;"), o = e("<div>").addClass("panel").append(d);
            l.append(e("<article>").append(o)), l.append(e("<div>").addClass("clearfix").css({float: "none"})), e.each(l.find("article"), function (a, t) {
                e(this).addClass(a % 2 == 0 ? "" : "inverted"), r.effect && "none" != r.effect && e(this).addClass("animated " + r.effect)
            }), r.showGroup ? r.showMenu && i.appendTo(this) : e.each(l.find('div[class*="group"]'), function (a, t) {
                e(this).css("display", "none")
            }), l.appendTo(this)
        }
    }, e.fn.albeTimeline.languages = {}, e.fn.albeTimeline.defaults = {
        effect: "fadeInUp",
        formatDate: "dd MMM",
        language: "pt-BR",
        showGroup: !0,
        showMenu: !0,
        sortDesc: !0
    };
    var a = function (e, a, n) {
        var r = e.split(/[ :\-\/]/g), s = new Date(r[0], r[1] - 1, r[2], r[3] || 0, r[4] || 0, r[5] || 0);
        return n.separator && (a = a.replace(new RegExp(n.separator, "g"), "___")), a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace("ss", t(s.getSeconds(), 2))).replace("s", s.getSeconds())).replace("dd", t(s.getDate(), 2))).replace("d", s.getDate())).replace("mm", t(s.getMinutes(), 2))).replace("m", s.getMinutes())).replace("MMMM", n.months[s.getMonth()])).replace("MMM", n.months[s.getMonth()].substring(0, 3))).replace("MM", t(s.getMonth() + 1, 2))).replace("DD", n.days[s.getDay()])).replace("yyyy", s.getUTCFullYear())).replace("YYYY", s.getUTCFullYear())).replace("yy", (s.getUTCFullYear() + "").substring(2))).replace("YY", (s.getUTCFullYear() + "").substring(2))).replace("HH", t(s.getHours(), 2))).replace("H", s.getHours()), n.separator && (a = a.replace(new RegExp("___", "g"), n.separator)), a
    }, t = function (e, a, t) {
        return t = t || "0", (e += "").length >= a ? e : new Array(a - e.length + 1).join(t) + e
    }
}(jQuery);
