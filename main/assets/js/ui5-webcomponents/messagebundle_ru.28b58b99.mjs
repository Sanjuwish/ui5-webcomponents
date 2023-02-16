const E = "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043A\u0430\u0440\u0442\u044B", _ = "\u041A\u0430\u0440\u0442\u0430", T = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u044B", A = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u044B", I = "\u0410\u0432\u0430\u0442\u0430\u0440", R = "{0} \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F, {1} \u0441\u043A\u0440\u044B\u0442\u043E.", O = "\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430.", L = "\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u044B.", N = "\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u044B.", S = "\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0430\u043C\u0438.", C = "\u0411\u0435\u0439\u0434\u0436", P = "{0} \u0438\u0437 {1}", D = "\u041F\u0443\u0442\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438", U = "\u0411\u043E\u043B\u044C\u0448\u0435", B = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C", s = "\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435", t = "\u041F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F", n = "\u041E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F", o = "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F", c = "\u0438\u0437", M = "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442 {0} \u0438\u0437 {1}", G = "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", K = "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430", V = "\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430 \u2013 \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430", H = "\u0426\u0432\u0435\u0442\u043E\u0432\u0430\u044F \u043F\u0430\u043B\u0438\u0442\u0440\u0430", X = "\u0426\u0432\u0435\u0442", Y = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C", W = "\u041E\u041A", F = "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0446\u0432\u0435\u0442", Z = "\u0411\u043E\u043B\u044C\u0448\u0435 \u0446\u0432\u0435\u0442\u043E\u0432...", e = "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0430\u043B\u044C\u0444\u0430", r = "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u043E\u0442\u0442\u0435\u043D\u043A\u0430", u = "\u0428\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043D\u043E\u0435", a = "\u041A\u0440\u0430\u0441\u043D\u044B\u0439", b = "\u0417\u0435\u043B\u0435\u043D\u044B\u0439", m = "\u0421\u0438\u043D\u0438\u0439", d = "\u0410\u043B\u044C\u0444\u0430", i = "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043E \u0432\u044B\u0431\u043E\u0440\u0430", l = "\u0412\u0432\u043E\u0434 \u0434\u0430\u0442\u044B", w = "\u0412\u0432\u043E\u0434 \u0434\u0430\u0442\u044B \u0438 \u0432\u0440\u0435\u043C\u0435\u043D\u0438", p = "\u0412\u0432\u043E\u0434 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0434\u0430\u0442", J = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", f = "\u041E\u0431\u0437\u043E\u0440...", g = "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B", h = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u044B", k = "\u041F\u043E\u043B\u0435 \u0441\u043E \u0441\u043F\u0438\u0441\u043A\u043E\u043C", x = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u043F\u0446\u0438\u0438", y = "\u0415\u0441\u0442\u044C \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F", j = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C", q = "\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D 1 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", v = "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432: {0}", z = "\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432", Q = "\u041D\u0435\u0437\u0430\u043C\u0435\u0442\u043D\u0430\u044F", $ = "\u0412\u044B\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F", EE = "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0441\u043F\u0438\u0441\u043A\u0430 {0} \u0438\u0437 {1}", _E = "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435", TE = "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E", AE = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u043F\u044B", IE = "\u0420\u0435\u0436\u0438\u043C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430", RE = "\u0412\u044B\u0431\u043E\u0440 \u043F\u043E\u0437\u0438\u0446\u0438\u0438", OE = "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0432\u044B\u0431\u043E\u0440\u0430", LE = "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0432\u044B\u0431\u043E\u0440\u0430", NE = "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F", SE = "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u0417\u0430\u043A\u0440\u044B\u0442\u044C", CE = "\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0442\u044C", PE = "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u041E\u0448\u0438\u0431\u043A\u0430", DE = "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435", UE = "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 - \u0423\u0441\u043F\u0435\u0448\u043D\u043E", BE = "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430", sE = "\u041E\u041A", tE = "\u042D\u0442\u043E \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0443\u0436\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E.", nE = "\u0412\u0432\u043E\u0434 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439", oE = "\u0415\u0449\u0435 {0}", cE = "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C/\u0441\u0432\u0435\u0440\u043D\u0443\u0442\u044C", ME = "\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D", GE = "\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0441\u043B\u0435\u0432\u0430", KE = "\u041F\u043E\u043B\u043E\u0441\u0430 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0441\u043F\u0440\u0430\u0432\u0430", VE = "\u041E\u0446\u0435\u043D\u043A\u0430", HE = "\u0417\u0432\u0435\u0437\u0434\u044B \u043E\u0446\u0435\u043D\u043A\u0438", XE = "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C", YE = "\u0413\u0440\u0443\u043F\u043F\u0430 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043A\u043D\u043E\u043F\u043E\u043A", WE = "\u0414\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u0435\u043B \u0438\u043B\u0438 Enter", FE = "\u0421\u0435\u0433\u043C\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430", ZE = "\u041F\u043E\u043B\u0437\u0443\u043D\u043E\u043A", eE = "\u0411\u043E\u043B\u044C\u0448\u0435", rE = "\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 1 \u0438\u0437 {0}", uE = "{0} \u0438\u0437 {1}", aE = "\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0433\u0440\u0443\u043F\u043F\u044B", bE = "\u0412\u044B\u0431\u043E\u0440 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430", mE = "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0440\u043E\u043A\u0438", dE = "\u041F\u043E\u043B\u043E\u0436\u0438\u0442.", iE = "\u041E\u0442\u0440\u0438\u0446\u0430\u0442.", lE = "\u041A\u0440\u0438\u0442\u0438\u0447.", wE = "\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D.", pE = "Tab with subitems", JE = "\u0414\u0430\u043B\u044C\u0448\u0435", fE = "\u041D\u0430\u0437\u0430\u0434", gE = "\u041C\u0435\u043D\u044E \u043F\u0435\u0440\u0435\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F", hE = "\u0411\u043E\u043B\u044C\u0448\u0435", kE = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C", xE = "Press down arrow key to open subitems menu", yE = "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432: {0}", jE = "\u0421\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0441\u0432\u044B\u0448\u0435 \u043B\u0438\u043C\u0438\u0442\u0430: {0}", qE = "\u0427\u0430\u0441\u044B", vE = "\u041C\u0438\u043D\u0443\u0442\u044B", zE = "\u0421\u0435\u043A\u0443\u043D\u0434\u044B", QE = "\u041E\u041A", $E = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C", E_ = "\u0412\u0432\u043E\u0434 \u0432\u0440\u0435\u043C\u0435\u043D\u0438", __ = "\u0412\u0432\u043E\u0434 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438", T_ = "\u0414\u0430\u0442\u0430", A_ = "\u0412\u0440\u0435\u043C\u044F", I_ = "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435", R_ = "\u041D\u0435\u0442 \u043C\u0430\u0440\u043A\u0435\u0440\u043E\u0432", O_ = "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 1 \u043C\u0430\u0440\u043A\u0435\u0440", L_ = "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043C\u0430\u0440\u043A\u0435\u0440\u044B: {0}", N_ = "\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0440\u043A\u0435\u0440\u043E\u0432", S_ = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", C_ = "\u041F\u043E\u0437\u0438\u0446\u0438\u044F \u0434\u0435\u0440\u0435\u0432\u0430", P_ = "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0443\u0437\u0435\u043B", D_ = "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0443\u0437\u0435\u043B", U_ = '\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u041E\u0448\u0438\u0431\u043A\u0430"', B_ = '\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u041F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435"', s_ = '\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u0423\u0441\u043F\u0435\u0448\u043D\u043E"', t_ = '\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"', n_ = "\u041D\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0432\u0432\u043E\u0434", o_ = "\u0412\u044B\u0434\u0430\u043D\u043E \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0435", c_ = "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C", M_ = "\u0417\u0430\u043F\u0438\u0441\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0432\u0430\u043B\u0438\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u0430", G_ = "\u0414\u0430\u043B\u044C\u0448\u0435", K_ = "\u041D\u0430\u0437\u0430\u0434", V_ = "\u041D\u043E\u043C\u0435\u0440 \u043D\u0435\u0434\u0435\u043B\u0438", H_ = "\u041D\u0435\u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C", X_ = "\u0421\u0435\u0433\u043E\u0434\u043D\u044F", Y_ = "\u0412\u044B\u0431\u043E\u0440 \u043C\u0435\u0441\u044F\u0446\u0430", W_ = "\u0412\u044B\u0431\u043E\u0440 \u0433\u043E\u0434\u0430", F_ = "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C", Z_ = "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C", e_ = "\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0434\u0432\u0435 \u0447\u0430\u0441\u0442\u0438 \u043A\u043D\u043E\u043F\u043A\u0430", r_ = "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043F\u0440\u043E\u0431\u0435\u043B \u0438\u043B\u0438 Enter, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E, \u0438 Alt + \u043A\u043B\u0430\u0432\u0438\u0448\u0443 \u0441\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u043E\u0439 \u0432\u043D\u0438\u0437 \u0438\u043B\u0438 F4, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E \u0441\u0442\u0440\u0435\u043B\u043A\u0438", u_ = "\u041D\u0430\u0437\u0430\u0434", a_ = "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C", b_ = {
  ARIA_LABEL_CARD_CONTENT: E,
  ARIA_ROLEDESCRIPTION_CARD: _,
  ARIA_ROLEDESCRIPTION_CARD_HEADER: T,
  ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER: A,
  AVATAR_TOOLTIP: I,
  AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL: R,
  AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL: O,
  AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL: L,
  AVATAR_GROUP_ARIA_LABEL_GROUP: N,
  AVATAR_GROUP_MOVE: S,
  BADGE_DESCRIPTION: C,
  BREADCRUMB_ITEM_POS: P,
  BREADCRUMBS_ARIA_LABEL: D,
  BREADCRUMBS_OVERFLOW_ARIA_LABEL: U,
  BREADCRUMBS_CANCEL_BUTTON: B,
  BUSY_INDICATOR_TITLE: s,
  BUTTON_ARIA_TYPE_ACCEPT: t,
  BUTTON_ARIA_TYPE_REJECT: n,
  BUTTON_ARIA_TYPE_EMPHASIZED: o,
  CAROUSEL_OF_TEXT: c,
  CAROUSEL_DOT_TEXT: M,
  CAROUSEL_PREVIOUS_ARROW_TEXT: G,
  CAROUSEL_NEXT_ARROW_TEXT: K,
  COLORPALETTE_CONTAINER_LABEL: V,
  COLORPALETTE_POPOVER_TITLE: H,
  COLORPALETTE_COLOR_LABEL: X,
  COLOR_PALETTE_DIALOG_CANCEL_BUTTON: Y,
  COLOR_PALETTE_DIALOG_OK_BUTTON: W,
  COLOR_PALETTE_DIALOG_TITLE: F,
  COLOR_PALETTE_MORE_COLORS_TEXT: Z,
  COLORPICKER_ALPHA_SLIDER: e,
  COLORPICKER_HUE_SLIDER: r,
  COLORPICKER_HEX: u,
  COLORPICKER_RED: a,
  COLORPICKER_GREEN: b,
  COLORPICKER_BLUE: m,
  COLORPICKER_ALPHA: d,
  DATEPICKER_OPEN_ICON_TITLE: i,
  DATEPICKER_DATE_DESCRIPTION: l,
  DATETIME_DESCRIPTION: w,
  DATERANGE_DESCRIPTION: p,
  DELETE: J,
  FILEUPLOAD_BROWSE: f,
  FILEUPLOADER_TITLE: g,
  GROUP_HEADER_TEXT: h,
  SELECT_ROLE_DESCRIPTION: k,
  SELECT_OPTIONS: x,
  INPUT_SUGGESTIONS: y,
  INPUT_SUGGESTIONS_TITLE: j,
  INPUT_SUGGESTIONS_ONE_HIT: q,
  INPUT_SUGGESTIONS_MORE_HITS: v,
  INPUT_SUGGESTIONS_NO_HIT: z,
  LINK_SUBTLE: Q,
  LINK_EMPHASIZED: $,
  LIST_ITEM_POSITION: EE,
  LIST_ITEM_SELECTED: _E,
  LIST_ITEM_NOT_SELECTED: TE,
  LIST_ITEM_GROUP_HEADER: AE,
  ARIA_LABEL_LIST_ITEM_CHECKBOX: IE,
  ARIA_LABEL_LIST_ITEM_RADIO_BUTTON: RE,
  ARIA_LABEL_LIST_SELECTABLE: OE,
  ARIA_LABEL_LIST_MULTISELECTABLE: LE,
  ARIA_LABEL_LIST_DELETABLE: NE,
  MESSAGE_STRIP_CLOSE_BUTTON: SE,
  MESSAGE_STRIP_CLOSABLE: CE,
  MESSAGE_STRIP_ERROR: PE,
  MESSAGE_STRIP_WARNING: DE,
  MESSAGE_STRIP_SUCCESS: UE,
  MESSAGE_STRIP_INFORMATION: BE,
  MULTICOMBOBOX_DIALOG_OK_BUTTON: sE,
  VALUE_STATE_ERROR_ALREADY_SELECTED: tE,
  MULTIINPUT_ROLEDESCRIPTION_TEXT: nE,
  MULTIINPUT_SHOW_MORE_TOKENS: oE,
  PANEL_ICON: cE,
  RANGE_SLIDER_ARIA_DESCRIPTION: ME,
  RANGE_SLIDER_START_HANDLE_DESCRIPTION: GE,
  RANGE_SLIDER_END_HANDLE_DESCRIPTION: KE,
  RATING_INDICATOR_TOOLTIP_TEXT: VE,
  RATING_INDICATOR_TEXT: HE,
  RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON: XE,
  SEGMENTEDBUTTON_ARIA_DESCRIPTION: YE,
  SEGMENTEDBUTTON_ARIA_DESCRIBEDBY: WE,
  SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION: FE,
  SLIDER_ARIA_DESCRIPTION: ZE,
  LOAD_MORE_TEXT: eE,
  TABLE_HEADER_ROW_INFORMATION: rE,
  TABLE_ROW_POSITION: uE,
  TABLE_GROUP_ROW_ARIA_LABEL: aE,
  ARIA_LABEL_ROW_SELECTION: bE,
  ARIA_LABEL_SELECT_ALL_CHECKBOX: mE,
  TAB_ARIA_DESIGN_POSITIVE: dE,
  TAB_ARIA_DESIGN_NEGATIVE: iE,
  TAB_ARIA_DESIGN_CRITICAL: lE,
  TAB_ARIA_DESIGN_NEUTRAL: wE,
  TAB_SPLIT_ROLE_DESCRIPTION: pE,
  TABCONTAINER_NEXT_ICON_ACC_NAME: JE,
  TABCONTAINER_PREVIOUS_ICON_ACC_NAME: fE,
  TABCONTAINER_OVERFLOW_MENU_TITLE: gE,
  TABCONTAINER_END_OVERFLOW: hE,
  TABCONTAINER_POPOVER_CANCEL_BUTTON: kE,
  TABCONTAINER_SUBTABS_DESCRIPTION: xE,
  TEXTAREA_CHARACTERS_LEFT: yE,
  TEXTAREA_CHARACTERS_EXCEEDED: jE,
  TIMEPICKER_HOURS_LABEL: qE,
  TIMEPICKER_MINUTES_LABEL: vE,
  TIMEPICKER_SECONDS_LABEL: zE,
  TIMEPICKER_SUBMIT_BUTTON: QE,
  TIMEPICKER_CANCEL_BUTTON: $E,
  TIMEPICKER_INPUT_DESCRIPTION: E_,
  DURATION_INPUT_DESCRIPTION: __,
  DATETIME_PICKER_DATE_BUTTON: T_,
  DATETIME_PICKER_TIME_BUTTON: A_,
  TOKEN_ARIA_DELETABLE: I_,
  TOKENIZER_ARIA_CONTAIN_TOKEN: R_,
  TOKENIZER_ARIA_CONTAIN_ONE_TOKEN: O_,
  TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS: L_,
  TOKENIZER_ARIA_LABEL: N_,
  TOKENIZER_POPOVER_REMOVE: S_,
  TREE_ITEM_ARIA_LABEL: C_,
  TREE_ITEM_EXPAND_NODE: P_,
  TREE_ITEM_COLLAPSE_NODE: D_,
  VALUE_STATE_TYPE_ERROR: U_,
  VALUE_STATE_TYPE_WARNING: B_,
  VALUE_STATE_TYPE_SUCCESS: s_,
  VALUE_STATE_TYPE_INFORMATION: t_,
  VALUE_STATE_ERROR: n_,
  VALUE_STATE_WARNING: o_,
  VALUE_STATE_INFORMATION: c_,
  VALUE_STATE_SUCCESS: M_,
  CALENDAR_HEADER_NEXT_BUTTON: G_,
  CALENDAR_HEADER_PREVIOUS_BUTTON: K_,
  DAY_PICKER_WEEK_NUMBER_TEXT: V_,
  DAY_PICKER_NON_WORKING_DAY: H_,
  DAY_PICKER_TODAY: X_,
  MONTH_PICKER_DESCRIPTION: Y_,
  YEAR_PICKER_DESCRIPTION: W_,
  STEPINPUT_DEC_ICON_TITLE: F_,
  STEPINPUT_INC_ICON_TITLE: Z_,
  SPLIT_BUTTON_DESCRIPTION: e_,
  SPLIT_BUTTON_KEYBOARD_HINT: r_,
  MENU_BACK_BUTTON_ARIA_LABEL: u_,
  MENU_CLOSE_BUTTON_ARIA_LABEL: a_
};
export {
  E as ARIA_LABEL_CARD_CONTENT,
  NE as ARIA_LABEL_LIST_DELETABLE,
  IE as ARIA_LABEL_LIST_ITEM_CHECKBOX,
  RE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,
  LE as ARIA_LABEL_LIST_MULTISELECTABLE,
  OE as ARIA_LABEL_LIST_SELECTABLE,
  bE as ARIA_LABEL_ROW_SELECTION,
  mE as ARIA_LABEL_SELECT_ALL_CHECKBOX,
  _ as ARIA_ROLEDESCRIPTION_CARD,
  T as ARIA_ROLEDESCRIPTION_CARD_HEADER,
  A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,
  N as AVATAR_GROUP_ARIA_LABEL_GROUP,
  L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,
  R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,
  S as AVATAR_GROUP_MOVE,
  O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,
  I as AVATAR_TOOLTIP,
  C as BADGE_DESCRIPTION,
  D as BREADCRUMBS_ARIA_LABEL,
  B as BREADCRUMBS_CANCEL_BUTTON,
  U as BREADCRUMBS_OVERFLOW_ARIA_LABEL,
  P as BREADCRUMB_ITEM_POS,
  s as BUSY_INDICATOR_TITLE,
  t as BUTTON_ARIA_TYPE_ACCEPT,
  o as BUTTON_ARIA_TYPE_EMPHASIZED,
  n as BUTTON_ARIA_TYPE_REJECT,
  G_ as CALENDAR_HEADER_NEXT_BUTTON,
  K_ as CALENDAR_HEADER_PREVIOUS_BUTTON,
  M as CAROUSEL_DOT_TEXT,
  K as CAROUSEL_NEXT_ARROW_TEXT,
  c as CAROUSEL_OF_TEXT,
  G as CAROUSEL_PREVIOUS_ARROW_TEXT,
  X as COLORPALETTE_COLOR_LABEL,
  V as COLORPALETTE_CONTAINER_LABEL,
  H as COLORPALETTE_POPOVER_TITLE,
  d as COLORPICKER_ALPHA,
  e as COLORPICKER_ALPHA_SLIDER,
  m as COLORPICKER_BLUE,
  b as COLORPICKER_GREEN,
  u as COLORPICKER_HEX,
  r as COLORPICKER_HUE_SLIDER,
  a as COLORPICKER_RED,
  Y as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,
  W as COLOR_PALETTE_DIALOG_OK_BUTTON,
  F as COLOR_PALETTE_DIALOG_TITLE,
  Z as COLOR_PALETTE_MORE_COLORS_TEXT,
  l as DATEPICKER_DATE_DESCRIPTION,
  i as DATEPICKER_OPEN_ICON_TITLE,
  p as DATERANGE_DESCRIPTION,
  w as DATETIME_DESCRIPTION,
  T_ as DATETIME_PICKER_DATE_BUTTON,
  A_ as DATETIME_PICKER_TIME_BUTTON,
  H_ as DAY_PICKER_NON_WORKING_DAY,
  X_ as DAY_PICKER_TODAY,
  V_ as DAY_PICKER_WEEK_NUMBER_TEXT,
  J as DELETE,
  __ as DURATION_INPUT_DESCRIPTION,
  g as FILEUPLOADER_TITLE,
  f as FILEUPLOAD_BROWSE,
  h as GROUP_HEADER_TEXT,
  y as INPUT_SUGGESTIONS,
  v as INPUT_SUGGESTIONS_MORE_HITS,
  z as INPUT_SUGGESTIONS_NO_HIT,
  q as INPUT_SUGGESTIONS_ONE_HIT,
  j as INPUT_SUGGESTIONS_TITLE,
  $ as LINK_EMPHASIZED,
  Q as LINK_SUBTLE,
  AE as LIST_ITEM_GROUP_HEADER,
  TE as LIST_ITEM_NOT_SELECTED,
  EE as LIST_ITEM_POSITION,
  _E as LIST_ITEM_SELECTED,
  eE as LOAD_MORE_TEXT,
  u_ as MENU_BACK_BUTTON_ARIA_LABEL,
  a_ as MENU_CLOSE_BUTTON_ARIA_LABEL,
  CE as MESSAGE_STRIP_CLOSABLE,
  SE as MESSAGE_STRIP_CLOSE_BUTTON,
  PE as MESSAGE_STRIP_ERROR,
  BE as MESSAGE_STRIP_INFORMATION,
  UE as MESSAGE_STRIP_SUCCESS,
  DE as MESSAGE_STRIP_WARNING,
  Y_ as MONTH_PICKER_DESCRIPTION,
  sE as MULTICOMBOBOX_DIALOG_OK_BUTTON,
  nE as MULTIINPUT_ROLEDESCRIPTION_TEXT,
  oE as MULTIINPUT_SHOW_MORE_TOKENS,
  cE as PANEL_ICON,
  ME as RANGE_SLIDER_ARIA_DESCRIPTION,
  KE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,
  GE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,
  HE as RATING_INDICATOR_TEXT,
  VE as RATING_INDICATOR_TOOLTIP_TEXT,
  XE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,
  FE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,
  WE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,
  YE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,
  x as SELECT_OPTIONS,
  k as SELECT_ROLE_DESCRIPTION,
  ZE as SLIDER_ARIA_DESCRIPTION,
  e_ as SPLIT_BUTTON_DESCRIPTION,
  r_ as SPLIT_BUTTON_KEYBOARD_HINT,
  F_ as STEPINPUT_DEC_ICON_TITLE,
  Z_ as STEPINPUT_INC_ICON_TITLE,
  hE as TABCONTAINER_END_OVERFLOW,
  JE as TABCONTAINER_NEXT_ICON_ACC_NAME,
  gE as TABCONTAINER_OVERFLOW_MENU_TITLE,
  kE as TABCONTAINER_POPOVER_CANCEL_BUTTON,
  fE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,
  xE as TABCONTAINER_SUBTABS_DESCRIPTION,
  aE as TABLE_GROUP_ROW_ARIA_LABEL,
  rE as TABLE_HEADER_ROW_INFORMATION,
  uE as TABLE_ROW_POSITION,
  lE as TAB_ARIA_DESIGN_CRITICAL,
  iE as TAB_ARIA_DESIGN_NEGATIVE,
  wE as TAB_ARIA_DESIGN_NEUTRAL,
  dE as TAB_ARIA_DESIGN_POSITIVE,
  pE as TAB_SPLIT_ROLE_DESCRIPTION,
  jE as TEXTAREA_CHARACTERS_EXCEEDED,
  yE as TEXTAREA_CHARACTERS_LEFT,
  $E as TIMEPICKER_CANCEL_BUTTON,
  qE as TIMEPICKER_HOURS_LABEL,
  E_ as TIMEPICKER_INPUT_DESCRIPTION,
  vE as TIMEPICKER_MINUTES_LABEL,
  zE as TIMEPICKER_SECONDS_LABEL,
  QE as TIMEPICKER_SUBMIT_BUTTON,
  O_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,
  L_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,
  R_ as TOKENIZER_ARIA_CONTAIN_TOKEN,
  N_ as TOKENIZER_ARIA_LABEL,
  S_ as TOKENIZER_POPOVER_REMOVE,
  I_ as TOKEN_ARIA_DELETABLE,
  C_ as TREE_ITEM_ARIA_LABEL,
  D_ as TREE_ITEM_COLLAPSE_NODE,
  P_ as TREE_ITEM_EXPAND_NODE,
  n_ as VALUE_STATE_ERROR,
  tE as VALUE_STATE_ERROR_ALREADY_SELECTED,
  c_ as VALUE_STATE_INFORMATION,
  M_ as VALUE_STATE_SUCCESS,
  U_ as VALUE_STATE_TYPE_ERROR,
  t_ as VALUE_STATE_TYPE_INFORMATION,
  s_ as VALUE_STATE_TYPE_SUCCESS,
  B_ as VALUE_STATE_TYPE_WARNING,
  o_ as VALUE_STATE_WARNING,
  W_ as YEAR_PICKER_DESCRIPTION,
  b_ as default
};
