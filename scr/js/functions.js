function makeMLocal(E, F, J){
    var n = 6, m = 6;
    var MLocal = [];
    for (var i = 0; i < m; i++){
        MLocal[i] = [];
        for (var j = 0; j < n; j++){
            MLocal[i][j] = 0;
    }}
    MLocal[0][0] = (E*F)/1;
    MLocal[0][1] = 0;
    MLocal[0][2] = 0;
    MLocal[0][3] = -(E*F)/1;
    MLocal[0][4] = 0;
    MLocal[0][5] = 0;
    MLocal[1][1] = (12*E*J)/pow(1,3);
    MLocal[1][2] = (6*E*J)/pow(1,2);
    MLocal[1][3] = 0;
    MLocal[1][4] = -(12*E*J)/pow(1,3);
    MLocal[1][5] = (6*E*J)/pow(1,2);
    MLocal[2][2] = (4*E*J)/1;
    MLocal[2][3] = 0;
    MLocal[2][4] = -(6*E*J)/pow(1,2);
    MLocal[2][5] = (2*E*J)/1;
    MLocal[3][3] = (E*F)/1;
    MLocal[3][4] = 0;
    MLocal[3][5] = 0;
    MLocal[4][4] = (12*E*J)/pow(1,3);
    MLocal[4][5] = -(6*E*J)/pow(1,2);
    MLocal[5][5] = (4*E*J)/1;
    for (var i = 0; i < m; i++){
        for (var j = 0, k=0; j < n - k++; j++){
            MLocal[i][j] = MLocal[j][i];
    }}
    return MLocal;
}

function lenthRod(x1, y1, x2, y2){
    return L = Math.sqrt(pow((x2-x1), 2) + pow((y2-y1), 2));
}
