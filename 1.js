var awal = 6969

for (let index = 0; index < 21; index++) {
    var mati = awal - (0.111*awal)
    var lahir = mati*2
    var hasil = parseInt(lahir)
    awal = hasil
    
    console.log("Periode ke "+ index+ " = "+awal)
    
}
if(index = 20){
    console.log("Jumlah burung pada hari ke 441 adalah "+awal)
}