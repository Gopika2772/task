const data = document.getElementById("data")
console.log(123);
let arr=[];
axios.get("http://3.111.150.205/get-forms")
.then((res)=>{
    arr=res.data;
    showdata();
})

function showdata(){
    console.log(arr);
    arr.forEach((val,index)=>{
        console.log(index);
        data.innerHTML +=`
        <div style="border: 2px solid black">
        <h1><span>${index+1}</span>${val.name}</h1>
        <h1>${val.email}</h1>
    </div>
        `;
    })
}