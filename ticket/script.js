


function commande() {
    var stock_plat = 3;
    var stock_boisson = 6;

    var prix_plat = 11;
    var prix_boisson = 1.5;
    var prix_supp = 0.5;

    var qt_plat = prompt("Nombre de plat");
    if (qt_plat > stock_plat) {
        var qt_plat = 0
        var qt_plat = prompt("Stock disponible : 3, Entrez nouvelle commande")
        document.write("nombre de plat : ")
        document.write(qt_plat)
        document.write(" x ")
        document.write(prix_plat)
        document.write(" € <br/>")
    }
    else {
        document.write("nombre de plat : ")
        document.write(qt_plat)
        document.write(" x ")
        document.write(prix_plat)
        document.write(" € <br/>")
    }


    var qt_boisson = prompt("Nombre de boisson");
    if (qt_boisson > stock_boisson) {
        var qt_boisson = 0
        var qt_boisson = prompt("Stock disponible : 6, Entrez nouvelle commande")
        document.write("nombre de boisson : ")
        document.write(qt_boisson)
        document.write(" x ")
        document.write(qt_boisson)
        document.write(" € <br/>")
    }
    else {
        document.write("nombre de boisson : ")
        document.write(qt_boisson)
        document.write(" x ")
        document.write(prix_boisson)
        document.write(" € <br/>")
    }

    var qt_supp = prompt("Nombre de supplément");

    document.write("nombre de supplément : ")
    document.write(qt_supp)
    document.write(" x ")
    document.write(prix_supp)
    document.write(" € <br/><br/>")

    var total = (qt_boisson * prix_boisson + qt_plat * prix_plat + qt_supp * prix_supp);

    document.write("TOTAL : ")
    document.write(total.toFixed(2))
    document.write(" € <br/>")

    var tva = (total * 0.1);

    document.write("DONT TVA : ")
    document.write(tva.toFixed(2))
    document.write(" €")
}