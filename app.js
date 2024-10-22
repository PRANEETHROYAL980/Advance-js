let ham=document.querySelector('.ham');
ham.addEventListener('click',()=>{
    let navlinks=document.querySelector('.navlinks')
    navlinks.classList.toggle('hi');
    ham.classList.toggle('hi')
})

                // Fetch Functionalities

let section3=document.querySelector('.section3-1')
console.log('hi')
fetch("app.json")
.then(res=>{return res.json()})
.then(data=>{
    data.map(data=>{
       let div=document.createElement('div');
       div.classList.add('section3-2')
       let image=document.createElement('img')
       image.src=data.image;
       let head=document.createElement('h1')
       head.innerHTML=`Item Name:${data.itemName}`
       let para1=document.createElement('h3');
       para1.innerHTML=`price:${data.price}/-`
       let para2=document.createElement('h3');
       para2.innerHTML=`Rating: ${data.rating}/5`
       let para3=document.createElement('h3')
       para3.innerHTML=`Veg/NonVeg: ${data.type}`
       let para4=document.createElement('h3')
       para4.innerHTML=`Maincourse/Starter: ${data.course}`
       section3.appendChild(div );
       div.appendChild(image)
       div.appendChild(head)    
       div.appendChild(para1)
       div.appendChild(para2)
       div.appendChild(para3)
       div.appendChild(para4)

    })
})


let sort1=document.querySelector('#sort')
let filter1=document.querySelector('#filter')
let sort2=document.querySelector('.sort');
let filter2=document.querySelector('.filter');
sort1.addEventListener('click',()=>{
    sort2.classList.toggle('hi')
    filter2.classList.toggle('hi')

})
filter1.addEventListener('click',()=>{
    filter2.classList.toggle('hi')
    sort2.classList.toggle('hi')

})


            // Sorting the data

let plth=document.querySelector('.plth');
let phtl=document.querySelector('.phtl');
let rlth=document.querySelector('.rlth');
let rhtl=document.querySelector('.rhtl');


plth.addEventListener('click',()=>{
    section3.innerHTML='';
    console.log('hi')
    fetch("app.json")
    .then(res=>{return res.json()})
    .then(data=>{
       let lth= data.sort((a,b)=>{return a.price-b.price});
       lth.map(data=>{
        let div=document.createElement('div');
        div.classList.add('section3-2')
        let image=document.createElement('img')
        image.src=data.image;
        let head=document.createElement('h1')
        head.innerHTML=`Item Name:${data.itemName}`
        let para1=document.createElement('h3');
        para1.innerHTML=`price:${data.price}/-`
        let para2=document.createElement('h3');
        para2.innerHTML=`Rating: ${data.rating}/5`
        let para3=document.createElement('h3')
        para3.innerHTML=`Veg/NonVeg: ${data.type}`
        let para4=document.createElement('h3')
        para4.innerHTML=`Maincourse/Starter: ${data.course}`
        section3.appendChild(div );
        div.appendChild(image)
        div.appendChild(head)    
        div.appendChild(para1)
        div.appendChild(para2)
        div.appendChild(para3)
        div.appendChild(para4)
 
     })
       
    })
})
phtl.addEventListener('click',()=>{
    section3.innerHTML='';
    fetch("app.json")
    .then(res=>{return res.json()})
    .then(data=>{
       let lth= data.sort((a,b)=>{return b.price-a.price});
       lth.map(data=>{
        let div=document.createElement('div');
        div.classList.add('section3-2')
        let image=document.createElement('img')
        image.src=data.image;
        let head=document.createElement('h1')
        head.innerHTML=`Item Name:${data.itemName}`
        let para1=document.createElement('h3');
        para1.innerHTML=`price:${data.price}/-`
        let para2=document.createElement('h3');
        para2.innerHTML=`Rating: ${data.rating}/5`
        let para3=document.createElement('h3')
        para3.innerHTML=`Veg/NonVeg: ${data.type}`
        let para4=document.createElement('h3')
        para4.innerHTML=`Maincourse/Starter: ${data.course}`
        section3.appendChild(div );
        div.appendChild(image)
        div.appendChild(head)    
        div.appendChild(para1)
        div.appendChild(para2)
        div.appendChild(para3)
        div.appendChild(para4)
 
     })
       
    })
})
rlth.addEventListener('click',()=>{
    section3.innerHTML='';
    fetch("app.json")
    .then(res=>{return res.json()})
    .then(data=>{
       let lth= data.sort((a,b)=>{return a.rating-b.rating});
       lth.map(data=>{
        let div=document.createElement('div');
        div.classList.add('section3-2')
        let image=document.createElement('img')
        image.src=data.image;
        let head=document.createElement('h1')
        head.innerHTML=`Item Name:${data.itemName}`
        let para1=document.createElement('h3');
        para1.innerHTML=`price:${data.price}/-`
        let para2=document.createElement('h3');
        para2.innerHTML=`Rating: ${data.rating}/5`
        let para3=document.createElement('h3')
        para3.innerHTML=`Veg/NonVeg: ${data.type}`
        let para4=document.createElement('h3')
        para4.innerHTML=`Maincourse/Starter: ${data.course}`
        section3.appendChild(div );
        div.appendChild(image)
        div.appendChild(head)    
        div.appendChild(para1)
        div.appendChild(para2)
        div.appendChild(para3)
        div.appendChild(para4)
 
     })
       
    })
})
rhtl.addEventListener('click',()=>{
    section3.innerHTML='';
    fetch("app.json")
    .then(res=>{return res.json()})
    .then(data=>{
       let lth= data.sort((a,b)=>{return b.rating-a.rating});
       lth.map(data=>{
        let div=document.createElement('div');
        div.classList.add('section3-2')
        let image=document.createElement('img')
        image.src=data.image;
        let head=document.createElement('h1')
        head.innerHTML=`Item Name:${data.itemName}`
        let para1=document.createElement('h3');
        para1.innerHTML=`price:${data.price}/-`
        let para2=document.createElement('h3');
        para2.innerHTML=`Rating: ${data.rating}/5`
        let para3=document.createElement('h3')
        para3.innerHTML=`Veg/NonVeg: ${data.type}`
        let para4=document.createElement('h3')
        para4.innerHTML=`Maincourse/Starter: ${data.course}`
        section3.appendChild(div );
        div.appendChild(image)
        div.appendChild(head)    
        div.appendChild(para1)
        div.appendChild(para2)
        div.appendChild(para3)
        div.appendChild(para4)
 
     })
       
    })
})

                    // filter


let Starter=document.querySelector('.starter');
let main=document.querySelector('.main');
let type1=document.querySelector('.type1');
let type2=document.querySelector('.type2');

Starter.addEventListener("click",()=>{
    section3.innerHTML="";
    fetch("app.json")
    .then(res=>{return res.json()})
    .then(data=>{
       let lth= data.filter((data)=>{
        return data.course=='Starters'
       });
       lth.map(data=>{
        let div=document.createElement('div');
        div.classList.add('section3-2')
        let image=document.createElement('img')
        image.src=data.image;
        let head=document.createElement('h1')
        head.innerHTML=`Item Name:${data.itemName}`
        let para1=document.createElement('h3');
        para1.innerHTML=`price:${data.price}/-`
        let para2=document.createElement('h3');
        para2.innerHTML=`Rating: ${data.rating}/5`
        let para3=document.createElement('h3')
        para3.innerHTML=`Veg/NonVeg: ${data.type}`
        let para4=document.createElement('h3')
        para4.innerHTML=`Maincourse/Starter: ${data.course}`
        section3.appendChild(div );
        div.appendChild(image)
        div.appendChild(head)    
        div.appendChild(para1)
        div.appendChild(para2)
        div.appendChild(para3)
        div.appendChild(para4)
 
     })
       
    })
})
main.addEventListener("click",()=>{
    section3.innerHTML="";
    fetch("app.json")
    .then(res=>{return res.json()})
    .then(data=>{
       let lth=data.filter((a)=>{
        return a.course=="MainCourse";
       })
       lth.map(data=>{
        let div=document.createElement('div');
        div.classList.add('section3-2')
        let image=document.createElement('img')
        image.src=data.image;
        let head=document.createElement('h1')
        head.innerHTML=`Item Name:${data.itemName}`
        let para1=document.createElement('h3');
        para1.innerHTML=`price:${data.price}/-`
        let para2=document.createElement('h3');
        para2.innerHTML=`Rating: ${data.rating}/5`
        let para3=document.createElement('h3')
        para3.innerHTML=`Veg/NonVeg: ${data.type}`
        let para4=document.createElement('h3')
        para4.innerHTML=`Maincourse/Starter: ${data.course}`
        section3.appendChild(div );
        div.appendChild(image)
        div.appendChild(head)    
        div.appendChild(para1)
        div.appendChild(para2)
        div.appendChild(para3)
        div.appendChild(para4)
 
     })
       
    })
})
type1.addEventListener('click',()=>{
    section3.innerHTML="";
    fetch("app.json")
    .then(res=>{return res.json()})
    .then(data=>{
       let lth=data.filter((a)=>{
        return a.type=="Veg";
       })
       lth.map(data=>{
        let div=document.createElement('div');
        div.classList.add('section3-2')
        let image=document.createElement('img')
        image.src=data.image;
        let head=document.createElement('h1')
        head.innerHTML=`Item Name:${data.itemName}`
        let para1=document.createElement('h3');
        para1.innerHTML=`price:${data.price}/-`
        let para2=document.createElement('h3');
        para2.innerHTML=`Rating: ${data.rating}/5`
        let para3=document.createElement('h3')
        para3.innerHTML=`Veg/NonVeg: ${data.type}`
        let para4=document.createElement('h3')
        para4.innerHTML=`Maincourse/Starter: ${data.course}`
        section3.appendChild(div );
        div.appendChild(image)
        div.appendChild(head)    
        div.appendChild(para1)
        div.appendChild(para2)
        div.appendChild(para3)
        div.appendChild(para4)
 
     })
       
    })
})
type2.addEventListener('click',()=>{
    section3.innerHTML="";
    fetch("app.json")
    .then(res=>{return res.json()})
    .then(data=>{
       let lth=data.filter((a)=>{
        return a.type=="NonVeg";
       })
       lth.map(data=>{
        let div=document.createElement('div');
        div.classList.add('section3-2')
        let image=document.createElement('img')
        image.src=data.image;
        let head=document.createElement('h1')
        head.innerHTML=`Item Name:${data.itemName}`
        let para1=document.createElement('h3');
        para1.innerHTML=`price:${data.price}/-`
        let para2=document.createElement('h3');
        para2.innerHTML=`Rating: ${data.rating}/5`
        let para3=document.createElement('h3')
        para3.innerHTML=`Veg/NonVeg: ${data.type}`
        let para4=document.createElement('h3')
        para4.innerHTML=`Maincourse/Starter: ${data.course}`
        section3.appendChild(div );
        div.appendChild(image)
        div.appendChild(head)    
        div.appendChild(para1)
        div.appendChild(para2)
        div.appendChild(para3)
        div.appendChild(para4)
 
     })
       
    })
})
