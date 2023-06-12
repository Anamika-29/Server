var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var users = [
  {
    role: "admin",
    email: "admin@edufect.com",
    password: "admin",
  },
  {
    role: "user",
    email: "user@user.com",
    password: "user123",

    },]

let cart=[]
let cartdata=[]
data=[
  {
      prodCode:	"DS2S245",
      category:	"Dining",
      desc:	[
          "Two	seater	Dining	Set",
          "Built	from	High	quality	wood",
          "1	year	warranty"
      ],
      img:"https://hometown.gumlet.io/media/product/61/9353/6.jpg?mode=fill&h=100&w=100&dpr=1.3",
      ingredients:	[
          {	ingName:	"Dining	Table",	qty:	1	},
          {	ingName:	"Chair",	qty:	2	}
      ],
      title:	"Two	seater	Dining	Set"
  },
  {
      prodCode:	"DS6S761",
      category:	"Dining",
      desc:	[
          "Six	Seater	Dining	Set	in	Antique	Cherry	Colour",
          "Assembly	by	Skilled	Carpenters",
          "Made	from	Teak	wood"
      ],
      img:"https://hometown.gumlet.io/media/product/89/3163/57821/1.jpg?mode=fill&h=100&w=100&dpr=1.3",
      ingredients:	[
          {	ingName:	"Dining	Table",	qty:	1	},
          {	ingName:	"Chair",	qty:	4	},
          {	ingName:	"Bench",	qty:	1	}
      ],
      title:	"Six	Seater	Dining	Set"
  },
  {
      prodCode:	"DS4S177",
      category:	"Dining",
      desc:	[
          "Mild	Steel	Four	Seater	Dining	Set	in	Black	Colour",
          "Knock-down	construction	for	easy	transportation"
      ],
      img:"https://hometown.gumlet.io/media/product/99/3753/86779/1.jpg?mode=fill&h=100&w=100&dpr=1.3",
      ingredients:	[
          {	ingName:	"Dining	Table",	qty:	1	},
          {	ingName:	"Chair",	qty:	4	}
      ],
      title:	"Mild	Steel	Dining	Set"
  },

      {
          prodCode:	"BN1S388",
          category:	"Dining",
          desc:	[
              "Solid	Wood	Dining	Bench	in	Dark	Walnut	Colour",
              "Comfortable	bench	for	a	relaxed	dinner"
          ],
          img:"https://hometown.gumlet.io/media/product/94/0553/11804/1.jpg?mode=fill&h=100&w=100&dpr=1.3"
              ,
          ingredients:	[{	ingName:	"Bench",	qty:	1	}],
          title:	"Dining	Bench"
      },
      {
          prodCode:	"SF2S532",
          category:	"Drawing",
          desc:	[
              "Characteristic	Rising	Track	Arm	Rest	Design",
              "Premium	High	Gloss	Leatherette	Upholstery",
              "Independent	Headrest	And	Lumber	Support"
          ],
          img:"https://hometown.gumlet.io/media/product/48/2753/29530/1.jpg?mode=fill&h=100&w=100&dpr=1.3"
             ,
          ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
          title:	"Two	Seater	Sofa"
      },
      {
          prodCode:	"SF2S206",
          category:	"Drawing",
          desc:	["Two	Seater	Sofa	in	Blue	Colour",	"Assembly	by	Skilled	Carpenters"],
          img:"https://hometown.gumlet.io/media/product/20/3453/62912/1.jpg?mode=fill&h=100&w=100&dpr=1.3"
             ,
          ingredients:	[{	ingName:	"Sofa",	qty:	1	}],
          title:	"Two	Seater	Sofa"
      },
      {
          prodCode:	"SFBD311",
          category:	"Drawing",
          desc:	[
              "Sofa	Cum	bed	in	Brown	Colour",
              "Ply-wood	construction	with	hand	polished	finish",
              "Removable	fabric	cover	on	best	quality	foam	mattress",
              "Throw	cushions	and	bolsters	come	with	the	product"
          ],
          img:"https://hometown.gumlet.io/media/product/30/3253/57132/1.jpg?mode=fill&h=100&w=100&dpr=1.3"
              ,
          ingredients:	[{	ingName:	"Sofa",	qty:	1	},	{	ingName:	"Cushions",	qty:	2	}],
          title:	"Sofa	cum	Bed"
      },
      {
          prodCode:	"BDQS381",
          category:	"Bedroom",desc:	[
						"Wood	Box	Storage	King	Size	Bed	in	Wenge	Colour	",
						"Box	Storage	included	for	Maximum	space	utilization",
						"Mattress	is	included"
				],
        img:"https://hometown.gumlet.io/media/product/43/8153/54285/1.jpg?mode=fill&h=100&w=100&dpr=1.3"
				,
				ingredients:	[{	ingName:	"Bed",	qty:	1	},	{	ingName:	"Mattress",	qty:	2	}],
				title:	"King	size	Bed"
		},
		{
				prodCode:	"BDQS229",
				category:	"Bedroom",
				desc:	[
						"Wood	Hydraulic	Storage	Queen	Size	Bed",
						"Half	hydraulic	storage",
						"Superior	E2	grade	MDF	used	with	melamine	finish"
				],
        img:"https://hometown.gumlet.io/media/product/74/1153/94332/1.jpg?mode=fill&h=100&w=100&dpr=1.3"
				,
				
				ingredients:	[{	ingName:	"Bed",	qty:	1	}],
				title:	"Queen	size	Bed"
		},
		{
				prodCode:	"ST1T425",
				category:	"Study",
				desc:	[
						"Wood	Study	Table	in	Walnut	Colour",
						"Assembly	by	Skilled	Carpenters",
						"Built	from	High	Quality	Wood"
				],
        img:"https://hometown.gumlet.io/media/product/02/9153/44662/1.jpg?mode=fill&h=100&w=100&dpr=1.3"
				,
				

				ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
				title:	"Study	Table"
		},
		{
				prodCode:	"ST1T588",
				category:	"Study",
				desc:	[
						"	Wood	Study	Table	in	Highgloss	White	&	Blue	Colour",
						"Study	table	comes	with	bookshelf	on	top,	5	drawers	&	1	open	shelf",
						"Superior	quality	MDF	with	stain	resistant	melamine	finish"
				],
        img:"https://hometown.gumlet.io/media/product/07/9553/45053/1.jpg?mode=fill&h=100&w=100&dpr=1.3"
				,
				
			
				ingredients:	[{	ingName:	"Study	Table",	qty:	1	}],
				title:	"Study	Table"
		}
]
const port = 2410;
app.post("/login", function (req, res) {
  let body = { email: req.body.email, password: req.body.password };
  let obj = users.find(
    (obj) => obj.email === body.email && obj.password === body.password
  );
  if (obj === undefined) res.status(401).send("Login Failed!!");
  else {
    res.send(obj);
  }
});
app.get("/products", function (req, res) {

  res.send(
data
  );
});
app.post("/cart", function (req, res) { 
   let prodCode =req.body.prodCode
  let data=cart.findIndex((st)=>st.prodCode==prodCode)
  console.log(data)
let body = { ...req.body,quantity:1 };
  cart.push(body);
  data==-1?cart.push(body):cart[data].quantity=cart[data].quantity+1
  let obj = { ...body };
 
  res.send(cart);
});
app.get("/cart", function (req, res) {

  res.send(cart);
});
app.post("/cartdata", function (req, res) {
  let obj = req.body
  console.log(obj)
  req.body==[]?cartdata=[]:
 cartdata.push(req.body)
  res.send(req.body);
});
app.put("/cartdata/:index", function (req, res) {
  let obj = req.params.index
  console.log(obj)
  let find=cartdata.findIndex((st,index)=>index==obj)
 cartdata[find]=(req.body)
  res.send(req.body);
});
app.get("/cartdata", function (req, res) {
let jj=Array.prototype.concat(...cartdata)

var k = jj.reduce((acc, obj)=>{
  var existItem = acc.find(item => item.ingName === obj.ingName);
  if(existItem){
    existItem.qty += obj.qty;
    return acc;
  } 
  acc.push(obj);
  return acc;
}, []);
  res.send(k);
});
app.get("/empapp/empcontact/:empuserid", function (req, res) {
  let empid = +req.params.empuserid;
  let obj = users.find((obj) => +obj.empuserid === empid);
  let body = { ...obj.contact, empuserid: obj.empuserid };
  res.send(body);
});
app.post("/empapp/empcontact/:empuserid", function (req, res) {
  let empid = +req.params.empuserid;
  let ind = users.findIndex((obj) => +obj.empuserid === empid);
  console.log(ind);
  let obj = { ...req.body };
  delete obj.empuserid;
  let body = users[ind];
  let obj1 = { ...body, contact: { ...obj } };
  console.log(obj1);
  users[ind] = obj1;
  res.send(req.body);
});
app.get("/empapp/empbills/:empuserid", function (req, res) {
  let empid = +req.params.empuserid;
  let ind = users.findIndex((obj) => +obj.empuserid === empid);
  let dispArr = users[ind].bills;
  let page = +req.query.page;
  page = isNaN(page) ? 1 : page;
  //have to add pagination
  let respArr = pagination(dispArr, page);
  let len = dispArr.length;
  let quo = Math.floor(len / 10);
  let rem = len % 10;
  let extra = rem === 0 ? 0 : 1;
  let numofpages = quo + extra;
  let pageInfo = {
    pageNumber: page,
    numberOfPages: numofpages,
    numOfItems: 10,
    totalItemCount: dispArr.length,
  };
  res.json({
    data: respArr,
    pageInfo: pageInfo,
  });
});
app.post("/empapp/empbills/:empuserid", function (req, res) {
  let empid = +req.params.empuserid;
  let ind = users.findIndex((obj) => +obj.empuserid === empid);
  console.log(ind);
  let obj = users[ind];
  if (obj.bills === undefined) {
    let billArr = [];
    let obj1 = { billid: 1, ...req.body };
    billArr.push(obj1);
    let obj2 = { ...obj, bills: billArr };
    users[ind] = obj2;
  } else {
    let billArr = obj.bills;
    console.log(billArr);
    let obj1 = { billid: billArr.length + 1, ...req.body };
    billArr.push(obj1);
    obj.bills = billArr;
    let obj2 = { ...obj };
    users[ind] = obj2;
  }
  console.log(users[ind]);
  res.send(req.body);
});
app.post("/empapp/hotelbill", function (req, res) {
  let body = req.body;
  let ind = users.findIndex((obj1) => +obj1.empuserid === +body.empuserid);
  let billInd = users[ind].bills.findIndex(
    (obj1) => +obj1.billid === +body.billid
  );
  //console.log(users[ind].bills[billInd])
  delete body.billid;
  delete body.empuserid;
  let body1 = users[ind].bills[billInd];
  //console.log(body, body1);
  let obj = { ...body1, ...body };
  //console.log(obj);
  users[ind].bills[billInd] = obj;
  res.send(users[ind]);
});
app.get("/empapp/hotelbill/:empid/:billid", function (req, res) {
  let empid = +req.params.empid;
  //console.log(empid);
  let ind = users.findIndex((obj1) => +obj1.empuserid === empid);
  let ob1 = users.find((obj1) => +obj1.empuserid === +empid);
  let billid = +req.params.billid;
  console.log(billid);
  let billInd = ob1.bills.findIndex((obj) => +obj.billid === billid);
  console.log(billInd);
  let obj = users[ind].bills[billInd];
  let obj1 = { empuserid: empid, ...obj };
  console.log(obj1);
  res.send(obj1);
});
app.get("/empapp/travelbill/:empid/:billid", function (req, res) {
  let empid = +req.params.empid;
  let ind = users.findIndex((obj1) => +obj1.empuserid === empid);
  let ob1 = users.find((obj1) => +obj1.empuserid === empid);
  let billid = +req.params.billid;
  console.log(ob1);
  //finding bill index
  let billInd = ob1.bills.findIndex((obj) => +obj.billid === billid);
  console.log(billInd);
  let obj = users[ind].bills[billInd];
  let obj1 = { empuserid: empid, ...obj };
  console.log(obj1);
  res.send(obj1);
});
app.post("/empapp/travelbill", function (req, res) {
  let body = req.body;
  let ind = users.findIndex((obj1) => +obj1.empuserid === +body.empuserid);
  let billInd = users[ind].bills.findIndex(
    (obj1) => +obj1.billid === +body.billid
  );
  console.log(billInd);
  delete body.billid;
  delete body.empuserid;
  let body1 = users[ind].bills[billInd];
  let obj = { ...body, ...body1 };
  users[ind].bills[billInd] = obj;
  res.send(users[ind]);
});

function pagination(obj, page) {
  var resArr = obj;
  resArr = resArr.slice(page * 10 - 10, page * 10);
  return resArr;
}

app.listen(port, () => console.log(`Node app listening on port ${port}!`));
