
// let str="abcadeecfb"
// function removeduplicate(str){
//     let set=new Set();
//     for(i=0;i<str.length;i++){
//         set.add(str[i]);
//     }
//     let b=[...set];
//    let c= b.join('');
//     console.log(c);
// }
// removeduplicate(str);


let str="abcadeecfb"
function alphabet_cnt(str){
let mp=new Map();
for(i=0;i<str.length;i++){
    if(mp.has(str[i])){
        mp.set(str[i],mp.get(str[i])+1);
    }
    else
    mp.set(str[i],1);
}
for(let [alpha,cnt] of mp){
    console.log(`${alpha} = ${cnt}`);
}

}
alphabet_cnt(str);