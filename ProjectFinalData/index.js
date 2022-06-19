
let SampleProducts=[{
    image_url:
     
      "https://images.bewakoof.com/uploads/grid/app/WhatsApp-Video-2022-01-29-at-14-06-03-1643446784.gif",
    name: "Today",
   
  },
  {
    image_url:
    "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-best-seller-1637307127.jpg",
    name: "Best Seller",
   
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/CUSTOMISE-thumbnail-1644818150.jpg",
    name: "Customization",
  
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/last-sizes-left-1639915515.jpg",
    name: "Last Size Left",
  
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-plus-size-1637307128.jpg",
    name: "Plus Size",
  
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/merch-store-thumbnail-1650381435.jpg",
    name: "The Official March Store",
  
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/bwkf-offer-thumbnail-1651735001.jpg",
    name: "coupon Offers ",
    
  },

  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-1637307130.jpg",
    name: "New Arrival",
  
  },
  {
    image_url:
      "https://images.bewakoof.com/uploads/grid/app/PersonalCare-Thumbnail-1647932750.jpg",
    name: "Personal Care",
    
  },
  ];
  
  
  SampleProducts.forEach(function (elem) {
  
      //creating child boxes
      let box = document.createElement("div");
  
      //creating image element;
  
      let picture = document.createElement("img");
      picture.setAttribute("src", elem.image_url);
  
  
  
      //create p2;
  
      let Name = document.createElement("h3");
      Name.innerText = elem.name;
  
      box.append(picture, Name,);
      document.querySelector("#sample").append(box);
    });


    // Popular categories images

    let ShowOff=[{
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-printed-tshirt-1654498507.png",
       
      },
      {
        image:
        "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1g-1654498502.png",
      
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1h-1654498503.png",
      
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1j-1654498503.png",
  
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1k-1654498503.png",
   
      
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1l-1654498504.png",
    
     
      
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1m-1654498504.png",
       
      
        
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-printed-pyjama-1654501962.png",
    
    
        
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1o-1654498506.png",
        //  "https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-shoes-1651235308.gif",
      
     
        
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1b-1654498500.png",
      
        
      },

      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1c-1654498500.png",
     
     
        
      },
      {
        image:
          "https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1p-1654498506.png",
      
      
        
      },
      ];

      
ShowOff.forEach(function (el) {

    //creating child boxes
    let divBox = document.createElement("div");
    
    //creating image element;
    
    let images = document.createElement("img");
    images.setAttribute("src", el.image);
   
    
    divBox.append(images);
    
    // console.log(divBox)
    
    
    document.querySelector("#showOff").append(divBox);
    });

    let Discountpe=[{
      img:
       
        "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-buy2get1-banner-refreshment-1654174580.jpg",
    
     
    },
    {
      img:
      "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-play-banner-refreshment-1654174646.jpg",
     
    },
    {
     img:
        "https://images.bewakoof.com/uploads/grid/app/PlusSize-mid-size-banner-men-June-1654178469.jpg",
    
    },
    {
     img:
        "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-buy3fr999-m-1652960227.jpg",
    
    },
  ];

  Discountpe.forEach(function(el){

     //creating child boxes
     let Box = document.createElement("div");
    
     //creating image element;
     
     let DiscImg = document.createElement("img");
     DiscImg.setAttribute("src", el.img);
    
     
     Box.append(DiscImg);
     
     // console.log(divBox)
     
     
     document.querySelector("#DiscountPe").append(Box);

     });

  