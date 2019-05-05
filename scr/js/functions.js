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

function makeSina(x1, y1, x2, y2){
    return sina = (y2 - y1)/Math.sqrt(pow((x2-x1), 2) + pow((y2-y1), 2));

}

function makeCosa(x1, y1, x2, y2){
    return cosa = (x2 - x1)/Math.sqrt(pow((x2-x1), 2) + pow((y2-y1), 2));

}

function MultiplyMatrix(A,B)
{
    var rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[ i ] = [];
    for (var k = 0; k < colsB; k++)
     { for (var i = 0; i < rowsA; i++)
        { var t = 0;
          for (var j = 0; j < rowsB; j++) t += A[i][j]*B[j][k];
          C[i][k] = t;
        }
     }
    return C;
}

function makeMGlobal(Mlocal, sina, cosa){
    var n = 6, m = 6;
    var MatrixV = [];
    var TransV = [];
    var MGlobal = [];
    for (var i = 0; i < m; i++){
        MatrixV[i] = [];
        for (var j = 0; j < n; j++){
            MatrixV[i][j] = 0;
    }}
    MatrixV[0][0] = cosa;
    MatrixV[0][1] = sina;
    MatrixV[1][0] = -sina;
    MatrixV[1][1] = cosa;
    MatrixV[1][1] = cosa;
    MatrixV[2][2] = 1;
    MatrixV[0][0] = cosa;
    MatrixV[4][3] = sina;
    MatrixV[3][4] = -sina;
    MatrixV[3][3] = cosa;
    MatrixV[4][4] = cosa;
    MatrixV[5][5] = 1;

    var m = MatrixV.length, n = MatrixV[0].length, TransV = [];
        for (var i = 0; i < n; i++) { 
            TransV[ i ] = [];
            for (var j = 0; j < m; j++) TransV[i][j] = MatrixV[j][i];
         }

    MGlobal = MultiplyMatrix(TransV,MultiplyMatrix(Mlocal,MatrixV));

}