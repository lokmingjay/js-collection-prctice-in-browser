'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var prev =collectionA[0] ;
  var count = 0;
  var collectionC =[];
for (let i =0; i< collectionA.length;i++){
  
 
   if(collectionA[i]==prev){   
       count++;
   }
   if((collectionA[i]!== prev || i == collectionA.length-1))
   {
    collectionC.push({key:prev, count:count});
    count=1;
   }

   if(collectionA[i].includes('-')){   
    var index =collectionA[i].indexOf('-')+1;
    count = Number(collectionA[i].substring(index,collectionA[i].length));
    collectionC.push({key:collectionA[i][0], count:count});
    count = 1;
    
}


   prev = collectionA[i];

  
}

for (let i=0 ; i< collectionC.length; i++){
  for (let j =0 ; j <objectB.value.length; j++){
  if(collectionC[i]['key']==objectB.value[j]){
    if( collectionC[i]['count']/3>=1)
    collectionC[i]['count']= collectionC[i]['count']-Math.floor(collectionC[i]['count']/3);
  }
  }
  }

return  collectionC;
}
