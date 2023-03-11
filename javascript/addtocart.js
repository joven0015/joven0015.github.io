const product = [
    {
        id: 0,
        image:'https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=',
        title:'Name',
        price: 100
    },
    {
        id: 1,
        image:'https://thumbs.dreamstime.com/b/good-morning-image-hd-wallpapers-sun-deepak-photo-graph-flowers-176211421.jpg',
        title:'Name1',
        price: 13
    },
    {
        id: 2,
        image:'https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=',
        title:'Name2',
        price: 104
    },
    {
        id: 3,
        image:'https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=',
        title:'Name3',
        price: 150
    },
    {
        id: 4,
        image:'https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=',
        title:'Name5',
        price: 150
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class= 'images' src=${image}></img>
            </div>
            <div style="margin: 0;" class='bottom'>
                <p style="margin: 0;">${title}</p>
                <h2>${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'> Add To Cart </botton>"+
            `</div>
        </div>`
    )
}).join('') 

var carts = [];

 function delElement(a){
    carts.splice(a, 1);
    displaycart();
 }

 function addtocart(a){
    carts.push({...categories[a]});
    displaycart();
 }
 function displaycart(a){
    let j = 0, total = 0;
    
    
    if (carts.length==0){
        document.getElementById("cartItem").innerHTML= "Your Cart Is Empty";
        document.getElementById("total").innerHTML = "$"+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML= carts.map((items)=> 
        {
            var {image,title,price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$"+total+".00";
            return(
                `<div class = 'cartItem'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15pxl; '> ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick = 'delElement("+(j++)+")'></i></div>"
            );
        }).join('')
    }
 }
