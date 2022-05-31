document.querySelector(".click-here").addEventListener('click',function(){
  document.querySelector(".background-window").style = 'display : flex';
});
let close = document.querySelector(".close");
close.addEventListener('click',function(){
    document.querySelector(".background-window").style = 'display : none';
    console.log("55");

});

function onclickfun(){
  document.querySelector(".background-window-addpost").style = 'display : flex';
}
function onclickclose(){
  document.querySelector(".background-window-addpost").style = 'display : none';
}
function onclickcompassfun(){
  document.querySelector(".background-window-requests").style = 'display : flex';
}
function onclickcompassclosefun(){
  document.querySelector(".background-window-requests").style = 'display : none';

}


var  editprofileform = document.querySelector(".edit-profile-form");

editprofileform.onfocus = function(){
  'use strict';
  if(this.placeholder ==='  First Name' ) 
    {
    this.placeholder ='';
  }
}
editprofileform.onblur = function(){
  'use strict';
  if(editprofileform.placeholder ===''){
    editprofileform.placeholder ='  First Name';
  }

}


// editprofileform.addEventListener('onfocus',function(){
//     if(editprofileform.ariaPlaceholder ==='  First Name'){
//       editprofileform.ariaPlaceholder ='';
//     }
// })

// function onfocusfun(){
//   if(this.placeholder ==='  First Name'){
//     this.placeholder ='';
//   }
// }