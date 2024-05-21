function binStr(s){
    //la fonction reçoit une chaine de bits
    var tentative = 0;
    var bitCourant = '';
    for (var i = 0;i < s.length ; i++){
        bitCourant = s[i];
        if (bitCourant==='1'){
            s[i] = '0';
            tentative++;
        }

    }
    return -1;
}