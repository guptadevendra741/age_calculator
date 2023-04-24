function Age(){
    let day = document.getElementById("date").value;
    let mon = document.getElementById("month").value;
    let yr = document.getElementById("year").value;

    let date = new Date();
    let d1 = date.getDate();
     let m1 = 1 + date.getMonth();
     let yr1 = date.getFullYear();

     let month = [31,28,31,30,31,30,31,31,30,31,30,31];

     if(day>d1){
        d1 = d1 + month[m1-1];
        m1 = m1-1;
     }

     if(mon>m1){
        m1= m1 +12;
        yr1 = yr1 -1;
     }

     let d=d1-day;
     let m = m1-mon;
     let y = yr1-yr;

if(isNaN(day) || isNaN(mon) ||isNaN(yr)){
   document.getElementById('age').innerHTML = "Please enter valid input in above Field";

}else if(day=="" || mon=="" || yr==""){
   document.getElementById('age').innerHTML = "Empty Field!! Please enter values in all the fields";

}else{
   document.getElementById('age').innerHTML = 'Your Age is ' + y + " years " + m + " Months " + d + " days." 
}
      
    
    }