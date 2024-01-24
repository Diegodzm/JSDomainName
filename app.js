
function domainGenerator(){
  let pronoun = ['the', 'our',"your","hello"];
  let adj = ['great', 'big',"small","dumb"];
  let noun = ['jogger', 'racoon',"shark","plane"];
  let Domain=[ ".com", ".net", ".us", ".io",];
  let string=" ";
  let DomainGenerator=[];


  for( pro in pronoun){
    for(ad in adj){
        for(nou in noun){
          for(dom in Domain){
            string=pronoun[pro]+adj[ad]+noun[nou]+Domain[dom];
            console.log(string);
         
      
    }
}
}
} 
}
domainGenerator();