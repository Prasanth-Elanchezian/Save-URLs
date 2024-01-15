let myLeads =[]
const inputEl = document.getElementById("input-el")
const saveInput = document.getElementById("input-btn");
const ulEl= document.getElementById("ul-el"); 

const tabBtn = document.getElementById("tab-btn");

tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
  })

})

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function render(leads){
  let listItems = ""
  for(let i=0; i<leads.length; i++){
  // listItems += "<li><a target='_blank' href='"+ myLeads[i]+"'>" + myLeads[i] +"</a></li>";
  listItems +=
   `<li>
     <a target='_blank' href='${leads[i]}'>${leads[i]}
     </a>
    </li>`;
  } 
  ulEl.innerHTML = listItems
}

const clearEl = document.getElementById("clear");
clearEl.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[];
  render(myLeads);
});

// let removeEl = document.getElementById("remove");
// removeEl.addEventListener("click",function(){
//   ulEl.innerHTML=myLeads.pop();
// });

saveInput.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value="";
  localStorage.setItem("myLeads",JSON.stringify(myLeads));
  render(myLeads);
});



// let arr=[]
// const input = document.getElementById("new"); 
// const subEl = document.getElementById("sub");
// const output = document.getElementById("get"); 
// subEl.addEventListener("click",function sub(){
//   arr.push(input.value)
//   print();
// });
// function print(){
//   let ele = ""
//   for(let i=0; i<arr.length; i++){
//     ele += "<li>" + arr[i] + "</li>";
//   }
//   output.innerHTML = ele
// } 
