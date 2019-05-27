$(document).ready(function () {
  //DropDown Menu
  $('#dropdownMenuLink').click(function () {
    $('.dropdown-menu').show();
    $('.dropdown-menu').delay(2000).hide(200);
  });
  //Catégories cachés par défaut
  $('#bat').hide();
  $('#proc1, #proc2, #proc3, #proc4, #proc5, #proc6, #proc7, #proc8, #proc9, #proc10, #proc11, #proc12').hide();
  $('#produc1, #produc2, #produc3, #produc4, #produc5, #produc6, #produc7, #produc8, #produc9, #produc10, #produc11, #produc12').hide();
  //Prix des telephones et variables d'ajouts
  let panier = 0;
  let nbproduit = 0;
  let huawei = 0;
  let hPsmart = 185;
  let iphXr = 0;
  let iphoneXr = 855;
  let iphXs = 0;
  let iphoneXs = 1259;
  let p2 = 0;
  let p20 = 379;
  let p3 = 0;
  let p30 = 799;
  let pt = 0;
  let psmart = 229;
  let galax9 = 0;
  let s9 = 436;
  let galax10 = 0;
  let s10 = 665;
  //Prix des batteries
  let powerBPerso = 124;
  let pbP = 0;
  let megaPowerB = 152;
  let mpB = 0;
  let powerBWirless = 61;
  let pbW = 0;
  let radioPB = 115;
  let rpB = 0;
  // bouton d'affichage des batteries
  $('#batbutton').click(function () {
    //cacher la partie telephone à l'affichage des batteries
    $('#tel').hide();
    //Affichage du contenu avec tempo
    $('#bat').slideDown(900);
    $('.blocbat1').hide().delay(700).show(1000);
    $('.blocbat2').hide().delay(1400).show(1000);
  });
  //bouton d'affichage des telephones

  $('#telbutton').click(function () {
    //cacher la partie batterie à l'affichage des telephones
    $('#bat').hide();
    //Affichage du contenu avec tempo
    $('#tel').slideDown(900);
    $('#TEL01_TEL02').hide().delay(700).show(1000);
    $('#TEL03_TEL04').hide().delay(1400).show(1000);
    $('#TEL05_TEL06').hide().delay(2100).show(1000);
    $('#TEL07_TEL08').hide().delay(2800).show(1000);
  });
  // Bouton moins
  $('#produc1').click(function () {
    huawei --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (huawei <= 0) {
      $('#prod1').text('0'+ '€');
      $('#produc1, #proc1').hide();
        $('#reduce1').hide();
    }
    $('#reduce1').text('Huawei PSMART 2019 '+' x'+huawei);
      panier -= Number(hPsmart);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });
  //Bouton acheter 1 (tel)

  $('#TEL01, #proc1').click(function () {
    $('#reduce1').show();
    nbproduit ++;
    huawei ++;
    panier += Number(hPsmart);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    // Au click du produit ajout des valeurs au panier
    if (huawei >= 1) {
      $('#reduce1').text('Huawei PSMART 2019 '+' x'+huawei);
      $('.Bloc4').text(panier + '€');
      $('#prod1').text(hPsmart+ '€');
      $('#proc1').show();
      $('#produc1').show();
    }
  });
  //Bouton acheter 2 (tel)
  $('#produc2').click(function () {
    iphXr --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (iphXr <= 0) {
      $('#prod2').text('0'+ '€');
      $('#produc2, #proc2').hide();
        $('#reduce2').hide();
    }
    $('#reduce2').text('Iphone_Xr '+' x'+iphXr);
      panier -= Number(iphoneXr);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#TEL02, #proc2').click(function () {
      $('#reduce2').show();
    nbproduit ++;
    iphXr ++;
    panier += Number(iphoneXr);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    // Au click du produit ajout des valeurs au panier
    if (iphXr >= 1) {
      $('#reduce2').text('Iphone_Xr '+' x'+iphXr)
      $('.Bloc4').text(panier + '€');
      $('#prod2').text(iphoneXr + '€');
      $('#proc2').show();
      $('#produc2').show();
    }
  });
  //Bouton acheter 3 (tel)
  $('#produc3').click(function () {
    iphXs --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (iphXs <= 0) {
      $('#prod3').text('0'+ '€');
      $('#produc3, #proc3').hide();
        $('#reduce3').hide();
    }
    $('#reduce3').text('Iphone_Xs '+' x'+iphXs);
      panier -= Number(iphoneXs);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#TEL03, #proc3').click(function () {
    $('#reduce3').show();
    nbproduit ++;
    iphXs ++;
    panier += Number(iphoneXs);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    // Au click du produit ajout des valeurs au panier
    if (iphXs >= 1) {
      $('#reduce3').text('Iphone_Xs '+' x'+iphXs)
      $('.Bloc4').text(panier + '€');
      $('#prod3').text(iphoneXs + '€');
      $('#proc3').show();
      $('#produc3').show();
    }
  });
  //Bouton acheter 4 (tel)
  $('#produc4').click(function () {
    p2 --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (p2 <= 0) {
      $('#prod4').text('0'+ '€');
      $('#produc4, #proc4').hide();
        $('#reduce4').hide();
    }
    $('#reduce4').text('Huawei P20 '+' x'+p2);
      panier -= Number(p20);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#TEL04, #proc4').click(function () {
    $('#reduce4').show();
    nbproduit ++;
    p2 ++;
    panier += Number(p20);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    // Au click du produit ajout des valeurs au panier
    if (p2 >= 1) {
      $('#reduce4').text('Huawei P20 '+' x'+p2)
      $('.Bloc4').text(panier + '€');
      $('#prod4').text(p20 + '€');
      $('#proc4').show();
      $('#produc4').show();
    }
  });
  //Bouton acheter 5 (tel)
  $('#produc5').click(function () {
    p3 --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (p3 <= 0) {
      $('#prod5').text('0'+ '€');
      $('#produc5, #proc5').hide();
        $('#reduce5').hide();
    }
    $('#reduce5').text('Huawei P30 '+' x'+p3);
      panier -= Number(p30);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#TEL05, #proc5').click(function () {
      $('#reduce5').show();
    nbproduit ++;
    p3 ++;
    panier += Number(p30);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    // Au click du produit ajout des valeurs au panier
    if (p3 >= 1) {
      $('#reduce5').text('Huawei P30 '+' x'+p3)
      $('.Bloc4').text(panier + '€');
      $('#prod5').text(p30 + '€');
      $('#proc5').show();
      $('#produc5').show();
    }
  });
  //Bouton acheter 6 (tel)
  $('#produc6').click(function () {
    pt --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (pt <= 0) {
      $('#prod6').text('0'+ '€');
      $('#produc6, #proc6').hide();
        $('#reduce6').hide();
    }
    $('#reduce6').text('Huawei PSMART '+' x'+pt);
      panier -= Number(psmart);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#TEL06, #proc6').click(function () {
    $('#reduce6').show();
    nbproduit ++;
    pt ++;
    panier += Number(psmart);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    // Au click du produit ajout des valeurs au panier
    if (pt >= 1) {
      $('#reduce6').text('Huawei PSMART'+' x'+pt)
      $('.Bloc4').text(panier + '€');
      $('#prod6').text(psmart + '€');
      $('#proc6').show();
      $('#produc6').show();
    }
  });
  //Bouton acheter 7 (tel)
  $('#produc7').click(function () {
    galax9 --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (galax9 <= 0) {
      $('#prod7').text('0'+ '€');
      $('#produc7, #proc7').hide();
        $('#reduce7').hide();
    }
    $('#reduce7').text('Samsung GALAXY S9 '+' x'+s9);
      panier -= Number(s9);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });
  $('#TEL07, #proc7').click(function () {
    $('#reduce7').show();
    nbproduit ++;
    galax9 ++;
    panier += Number(s9);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    // Au click du produit ajout des valeurs au panier
    if (galax9 >= 1) {
      $('#reduce7').text('Samsung GALAXY S9 '+' x'+galax9)
      $('.Bloc4').text(panier + '€');
      $('#prod7').text(s9 + '€');
      $('#proc7').show();
      $('#produc7').show();
    }
  });
  //Bouton acheter 8 (tel)
  $('#produc8').click(function () {
    galax10 --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (galax10 <= 0) {
      $('#prod8').text('0'+ '€');
      $('#produc8, #proc8').hide();
        $('#reduce8').hide();
    }
    $('#reduce8').text('Samsung GALAXY S10 '+' x'+s10);
      panier -= Number(s10);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#TEL08, #proc8').click(function () {
    $('#reduce8').show();
    nbproduit ++;
    galax10 ++;
    panier += Number(s10);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    // Au click du produit ajout des valeurs au panier
    if (galax10 >= 1) {
      $('#reduce8').text('Samsung GALAXY S10 '+' x'+galax10)
      $('.Bloc4').text(panier + '€');
      $('#prod8').text(s10 + '€');
      $('#proc8').show();
      $('#produc8').show();
    }
  });
  //Bouton acheter 1 (bat)
  $('#produc9').click(function () {
    pbP --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (pbP <= 0) {
      $('#prod9').text('0'+ '€');
      $('#produc9, #proc9').hide();
        $('#reduce9').hide();
    }
    $('#reduce9').text('Batterie externe multicolores '+' x'+pbP);
      panier -= Number(powerBPerso);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#BAT01, #proc9').click(function () {
        $('#reduce9').show();
    nbproduit ++;
    pbP ++;
    panier += Number(powerBPerso);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    if (pbP >= 1) {
      $('#reduce9').text('Batterie externe multicolores'+' x'+pbP)
      $('.Bloc4').text(panier + '€');
      $('#prod9').text(powerBPerso + '€');
      $('#proc9').show();
      $('#produc9').show();
    }
  });
  //Bouton acheter 2 (bat)
  $('#produc10').click(function () {
    mpB --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (mpB <= 0) {
      $('#prod10').text('0'+ '€');
      $('#produc10, #proc10').hide();
        $('#reduce10').hide();
    }
    $('#reduce10').text('batterie de poche blanche  '+' x'+mpB);
      panier -= Number(megaPowerB);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#BAT02, #proc10').click(function () {
      $('#reduce10').show();
    nbproduit ++;
    mpB ++;
    panier += Number(megaPowerB);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    if (mpB >= 1) {
      $('#reduce10').text('batterie de poche blanche '+' x'+mpB)
      $('.Bloc4').text(panier + '€');
      $('#prod10').text(megaPowerB + '€');
      $('#proc10').show();
      $('#produc10').show();
    }
  });
  //Bouton acheter 3 (bat)
  $('#produc11').click(function () {
    pbW --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if (pbW <= 0) {
      $('#prod11').text('0'+ '€');
      $('#produc11, #proc11').hide();
        $('#reduce11').hide();
    }
    $('#reduce11').text('batterie sans fil rouge  '+' x'+pbW);
      panier -= Number(powerBWirless);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#BAT03, #proc11').click(function () {
    $('#reduce11').show();
    nbproduit ++;
    pbW ++;
    panier += Number(powerBWirless);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    if (pbW >= 1) {
      $('#reduce11').text('batterie sans fil rouge '+' x'+pbW)
      $('.Bloc4').text(panier + '€');
      $('#prod11').text(powerBWirless + '€');
      $('#proc11').show();
      $('#produc11').show();
    }
  });
  //Bouton acheter 4 (bat)
  $('#produc12').click(function () {
    rpB --;
    nbproduit --;
      $('#nbproducts').text(nbproduit);
    if ( rpB <= 0) {
      $('#prod12').text('0'+ '€');
      $('#produc12, #proc12').hide();
        $('#reduce12').hide();
    }
    $('#reduce12').text('batterie style radio multicolores  '+' x'+rpB);
      panier -= Number(radioPB);
      $('.Bloc4').text(panier + '€');
    $('#prixtotal').text(panier + '€');
  });

  $('#BAT04, #proc12').click(function () {
    $('#reduce12').show();
    nbproduit ++;
    rpB ++;
    panier += Number(radioPB);
    $('#prixtotal').text(panier + '€');
    $('#nbproducts').text(nbproduit);
    if (rpB >= 1) {
      $('#reduce12').text('batterie style radio multicolores '+' x'+rpB)
      $('.Bloc4').text(panier + '€');
      $('#prod12').text(radioPB + '€');
      $('#proc12').show();
      $('#produc12').show();
    }
  });
});
