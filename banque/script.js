let solde = 385; 
solde = parseInt(solde);
let action = prompt ("1: Retrait 2: Virement 3: Consultation solde");
action = parseInt (action);

document.write("Banque Thief <br/><br/>")

switch (action) {

    case 1:
        let retrait = prompt ("Montant du Retrait")
            if (retrait>solde)
            {
                let agio = 8+(retrait-solde)*0.1
                document.write("montant du retrait : ")
                document.write(retrait)
                document.write(" € <br/>")
                document.write("montant des agios : ")
                document.write(agio)
                document.write(" € <br/>")
                document.write("votre solde est de : ")
                document.write(solde-agio-retrait)
                document.write(" € <br/>")
            }

            else
            {
                document.write("montant du retrait : ")
                document.write(retrait)
                document.write(" € <br/>")
                document.write("votre solde est de : ")
                document.write(solde-retrait)
                document.write(" € <br/>")
            }
    break 

    case 2:
        let virement = prompt ("Montant du Virement")
        virement = parseInt(virement)
        document.write("montant du virement : ")
        document.write(virement)
        document.write(" € <br/>")
        document.write("votre solde est de : ")
        document.write(solde + virement)
        document.write(" € <br/>")
    break

    case 3:
        document.write("votre solde est de : ")
        document.write(solde)
        document.write(" € <br/>")
    break





}

