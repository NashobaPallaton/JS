function calculer_moyenne() {

  math = document.getElementById("inputnote1").value;
  fr = document.getElementById("inputnote2").value;
  hg = document.getElementById("inputnote3").value;
  sport = document.getElementById("inputnote4").value;
  ap = document.getElementById("inputnote5").value;
  pc = document.getElementById("inputnote6").value;

  math = parseInt(math);
  fr = parseInt(fr);
  hg = parseInt(hg);
  sport = parseInt(sport);
  ap = parseInt(ap);
  pc = parseInt(pc);

  moy = (math + fr + hg + sport + ap + pc) / 6;

  alert(moy.toFixed(2))

}