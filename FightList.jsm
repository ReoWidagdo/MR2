var k
var i
var b
var cari;
var cari2;
var cari3;
var cari4;
var macror;
var mac;
var result;


macror =  "CODE:";
macror +=  "TAG POS=1 TYPE=A ATTR=TXT:Power<SP>Attack" + "\n"; 
macror +=  "wait seconds=0.2" + "\n";
macror +=  "TAG POS=1 TYPE=A ATTR=TXT:Power<SP>Attack" + "\n"; 
macror +=  "wait seconds=0.5" + "\n";

mac =  "CODE:";
mac +=  "SET !EXTRACT_TEST_POPUP NO" + "\n";
mac +=  "TAG POS=1 TYPE=SPAN ATTR=ID:fight-attacker-health EXTRACT=TXT" + "\n";

ma2 =  "CODE:";
ma2 +=  "TAG POS=1 TYPE=A ATTR=TXT:Fight" + "\n";
ma2 +=  "wait seconds=4" + "\n";

ma =  "CODE:";
ma +=  "TAG POS=1 TYPE=DIV ATTR=TXT:*rival<SP>mobster" + "\n"; 
ma +=  "wait seconds=2" + "\n";
ma +=  "TAG POS=R1 TYPE=A ATTR=TXT:Attack" + "\n"; 
ma +=  "wait seconds=1" + "\n";
ma +=  "TAG POS=1 TYPE=A ATTR=TXT:Power<SP>Attack" + "\n"; 
ma +=  "wait seconds=1" + "\n";



for (var i = 0; i < 20; i++)
 {iimPlay(ma2)
	cari4 = iimPlay("FightListMerah\\rival.iim");
	if (cari4 != 1)
	{alert("Mantap ... Akhirnya Clan Merah Tiarap semua")
	break}
		iimPlay(ma)
for (var k = 1; k <= 99; k++) 
  {
  iimPlay(mac)
  var result=iimGetLastExtract()
	if(result.replace('%','') < 20)
	iimPlay("FightListMerah\\healing.iim")
  	cari2 = iimPlay("FightListMerah\\kill.iim");
  	cari3 = iimPlay("FightListMerah\\snuf.iim");
      		if (cari3 === 1)
   		break
   			if (cari2 === 1)
    			break
   				else { do {b += iimPlay(macror)+ cari2; cari2++;}
				while (cari2 === 1)}
  }
 }
