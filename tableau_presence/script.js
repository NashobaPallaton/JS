function Student(name, status,){
    this.name = name;
    this.status = status;
}

var eleve1 = new Student("Halim", "présent",);
var eleve2 = new Student("Fred", "présent",);
var eleve3 = new Student("Perrine", "présent",);
var eleve4 = new Student("Stephane", "présent",);
var eleve5 = new Student("Greg", "présent",);
var eleve6 = new Student("Outman", "Absent",);
var eleve7 = new Student("Cédric", "Absent",);
var eleve8 = new Student("Zak", "présent",);
var eleve9 = new Student("Jimmy", "présent",);


document.write(eleve1.name + " est " + eleve1.status + "<Br/>")
document.write(eleve2.name + " est " + eleve2.status + "<Br/>")
document.write(eleve3.name + " est " + eleve3.status + "<Br/>")
document.write(eleve4.name + " est " + eleve4.status + "<Br/>")
document.write(eleve5.name + " est " + eleve5.status + "<Br/>")
document.write(eleve6.name + " est " + eleve6.status + "<Br/>")
document.write(eleve7.name + " est " + eleve7.status + "<Br/>")
document.write(eleve8.name + " est " + eleve8.status + "<Br/>")
document.write(eleve9.name + " est " + eleve9.status + "<Br/>")

