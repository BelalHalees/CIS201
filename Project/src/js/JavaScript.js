var x=0;
function addItem(){
    
 document.getElementById("item-count").innerHTML= ++x;
 }

function unavailable() {
    alert("Item Is Unavailable");
  }

  var PSN =[
  {Image: "../src/imgs/ps5cart.webp", Title: "PlayStation 5(Pyhsical)", Catagory: "PlayStation", SubCat: "Console", Descreption: "825 GB SSD | 8K Output, HDR Technology, up to 120 fps, Ray Tracing, Ultra High Speed SSD | 220 Volts | Blu-ray Disc/Digital Download", State: "Available", Price: "699$",Reviews: "2127 reviews", Cart: "Add to cart"},
  
  {Image: "../src/imgs/eldenps5.jpg", Title: "Elden Ring (PS5)", Catagory: "PlayStation", SubCat: "Games", Descreption: "Genre: Role Playing | Developer: Bandai Namco  | Rating: +18 | Media: Blu-ray Disc", State: "Available", Price: "60$", Rating:" <i class=fa fa-star></i> ",Reviews: "420 reviews", Cart: "Add to cart"},
  
  {Image: "../src/imgs/ps5cont.jpg", Title: "Sony DualSense Controller (PS5)", Catagory: "PlayStation", SubCat: "Accessories", Descreption: "Wireless | Cosmic Red | USB | Built-in Microphone, Adaptive Triggers, Motion Sensors, Integrated Speaker", State: "Unavailable", Price: "89$", Reviews: "307 reviews", Cart: "Add to cart"},
  
  {Image: "../src/imgs/ps5head.jpg", Title: "Sony PULSE 3D Gaming Headset (PS5)", Catagory: "PlayStation", SubCat: "Accessories", Descreption: "Gaming Headset | Wireless | USB (Charging) | Noise Cancelling Microphone | 64 kg ( 1.41 lb )", State: "Available", Price: "120$",Reviews: "569 reviews", Cart: "Add to cart"}
  ];

  var XBOX =[
    {Image: "../src/imgs/xboxseriesx.jpg", Title: "Xbox Series X  (Microsoft)", Catagory: "XBOX", SubCat: "Console", Descreption: "1 TB SSD | True 4K Gaming & 8K Ready, Teraflops of Power | 220 Volts | Blu-ray Disc/Digital Download ", State: "Available", Price: "599$",Reviews: "1857 reviews", Cart: "Add to cart"},
  
    {Image: "../src/imgs/forza5.jpg", Title: "Forza Horizon 5 (XBOX X)", Catagory: "XBOX", SubCat: "Games", Descreption: "Genre: Racing | Developer: Playground Games | Rating: +3 | Media: Blu-ray Disc", State: "Available", Price: "69$", Reviews: "998 reviews", Cart: "Add to cart"},
    
    {Image: "../src/imgs/xboxseriess.jpg", Title: "XBOX Series S (Microsoft)", Catagory: "XBOX", SubCat: "Console", Descreption: "512 GB SSD | Digital Edition | White | 220 Volts | Disc-Free Gaming, 4K Streaming Media Playback, 1440p up to 120 fps", State: "Unavailable", Price: "299$", Reviews: "666 reviews", Cart: "Add to cart"},
    
    {Image: "../src/imgs/xboxcharger.jpg", Title: "Play & Charge Kit Gaming Device Charger (XBOX)", Catagory: "XBOX", SubCat: "Accessories", Descreption: "Controller Charger | LED Charging Indicator, Single Battery Port | 0.17 kg", State: "Available", Price: "20$",Reviews: "555 reviews", Cart: "Add to cart"}
  ]

  var NINTENDO =[
    {Image: "../src/imgs/oldecart.webp", Title: "Nintendo Switch OLED (Nintendo)", Catagory: "Nintendo", SubCat: "Console", Descreption: "64 GB  | OLED Screen | White | Wide adjustable stand", State: "Available", Price: "350$",Reviews: "2782 reviews", Cart: "Add to cart"},
  
    {Image: "../src/imgs/hades.webp", Title: "Hades (Nintendo)", Catagory: "Nintendo", SubCat: "Games", Descreption: "Genre: Role Playing, Action | Developer: Supergiant Games | Rating: Teen | Size: 5.8 GB", State: "Available", Price: "60$",Reviews: "42069 reviews", Cart: "Add to cart"},
    
    {Image: "../src/imgs/rise.jpg", Title: "Nintendo Switch Pro Controller Monster hunter rise Edition (Nintendo)", Catagory: "Nintendo", SubCat: "Accessories", Descreption: "Wireless | Monster Hunter Edition | Compatible with Nintendo Switch, Nintendo Switch Lite| 1 Lithium Polymer batteries required", State: "Unvailable", Price: "95$",Reviews: "272 reviews", Cart: "Add to cart"},
  
    {Image: "../src/imgs/ac.webp", Title: "Nintendo Switch AC Adapter (Nintendo)", Catagory: "Nintendo", SubCat: "Accessories", Descreption: "This is a replacement for the AC Adapter included with each Nintendo Switch™ console", State: "Available", Price: "19.99$",Reviews: "127 reviews", Cart: "Add to cart"},
  ]


  function DisplayProduct(y){
    document.getElementById("Display").innerHTML = "";
    for(var i = 0; i < y.length; i++){
      document.getElementById("Display").innerHTML += "<div class=container d-flex justify-content-center style= margin-top:25px;><div class= row><div class=col-md-10><div class=card card-body> <div class= media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row><div class=mr-2 mb-3 mb-lg-0><img src="+y[i].Image +" width=150 height=150 alt=L></div><div class=media-body><h6 class=media-title font-weight-semibold> <a data-abc=true><b>"+y[i].Title+ "</b></a></h6><ul class=list-inline list-inline-dotted mb-3 mb-lg-2> <li class=list-inline-item><a  class=text-muted data-abc=true>"+y[i].Catagory+"</a></li> <li class=list-inline-item><a  class=text-muted data-abc=true>"+y[i].SubCat+"</a></li></ul><p class=mb-3>"+y[i].Descreption+"</p><ul class=list-inline list-inline-dotted mb-0> <li class=list-inline-item>"+y[i].State+"</li></ul></div><div class=mt-3 mt-lg-0 ml-lg-3 text-center><h3 class=mb-0 font-weight-semibold>"+y[i].Price+"</h3><div class=text-muted>"+y[i].Reviews+"</div><button type=button class=btn btn-warning mt-4 text-white style=background-color:gold;>"+y[i].Cart+"</button></div></div></div></div></div></div>";
  }
}
  
