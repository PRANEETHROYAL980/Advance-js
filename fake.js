let section3=document.querySelector('.section3-1')

fetch("app.json")
.then(res=>{return res.json()})
.then(a=>{
    a.map(a=>{
        let b=a.sort((a,b)=>{
            return a.price-b.price;
        })
        console.log(a);
    })
})