'use strict';

function collectSameElements(collectionA, collectionB) {
  const collectionC = new Array();
  for (let i=0 ; i< collectionA.length; i++){
    for (let j =0 ; j <collectionB[0].length; j++){
    if(collectionA[i]==collectionB[0][j]){
      collectionC.push(collectionA[i]);
    }
    }
    }
  return collectionC;
}
