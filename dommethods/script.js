function clickButton(){
    // alert("im clicked");
    const rootDiv = document.getElementById("root"); // control on the div which have root as the id
    rootDiv.innerHTML="<p style='color:white;background-color:yllow;padding:2rem;'>hi guys, how are you?</p>"
    rootDiv.style.backgroundColor="red";
};
function clickAppend(){
    // src and target are should be different.
    const rootDivSource =document.getElementById("root");
    const target = rootDivSource.cloneNode(true); // js clone
    rootDivSource.appendChild(target);
}
function clickBodyAppend(){
    // src and target are should be different.
    // const rootDivsrc =document.getElementById("root");
    // const cotainerDivtarget =document.getElementById("container");
    // for(let i=0; i<=8;i++){
    //     const target = rootDivsrc.cloneNode(true); // js clone
    //     cotainerDivtarget.appendChild(target);
   // }

 //  const buttoncontenthtm=document.getElementById("bodyAppend").innerHTML;
//    const buttoncontent=document.getElementById("bodyAppend").textContent;//for display text
//     console.log(buttoncontent)

//const qa=document.querySelector("#bodyAppend").textContent;//for class . ; for id #  ;defaultly it shows tag
//console.log(qa);


//const qa=document.querySelectorAll(".bodyAppend");  
//console.log(qa);
//
}
