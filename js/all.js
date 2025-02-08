let data = [
    {
        Name:"第1個充電站",
        Charge:"免費"
    },
    {
        Name:"第2個充電站",
        Charge:"投幣式"
    },
    {
        Name:"第3個充電站",
        Charge:"投幣式"
    },
    {
        Name:"第4個充電站",
        Charge:"投幣式"
    },
];
const list = document.querySelector(".list");

//初始化
function init(){
let str ="";
data.forEach(function(item,index){
    let content = `<li>${item.Name}，${item.Charge}</li>`;
    str+=content;
});
list.innerHTML = str;
};
init();

//篩選器監聽
const stationFilter = document.querySelector(".filter");
stationFilter.addEventListener("click",function(e){
    if(e.target.value==undefined){
        return;
    }
    let str="";
    data.forEach(function(item,index){
        if(e.target.value == "全部"){
            str += `<li>${item.Name}，${item.Charge}</li>`; 
        }
        if(e.target.value == item.Charge){
            str += `<li>${item.Name}，${item.Charge}</li>`;
        }
    });
    list.innerHTML = str;
    
});

//新增邏輯
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");

btn.addEventListener("click",function(e){
    let obj ={};
    obj.Charge = stationCharge.value;
    obj.Name = stationName.value;
    data.push(obj);
    init();
    stationCharge.value ="免費";
    stationName.value ="";

});