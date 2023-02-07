const Product=require("../models/product");
const getAllProducts=async(req,res)=>{
    const {company,name,price,featured,sort,select}=req.query;
    const queryObject={};
    if(company){
        queryObject.company= { $regex:company, $options: 'a' };
    }
    if(price){
        queryObject.price= price;
    }
    if(name){
        queryObject.name={ $regex:name, $options: 'i' };
    }
    if(featured){
        queryObject.featured=featured;
    }
    
    let apiData=Product.find(queryObject);
    
    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix);
     }
    
     if(select){
        let selectFix=select.replace(","," ");
        apiData=apiData.select(selectFix);
     }
    
    let page=Number(req.query.page) ||1;
    let limit=Number(req.query.limit) || 10 ;
    let skip=(page-1)*limit;

    apiData=apiData.skip(skip).limit(limit);

     const myData= await apiData;
    res.status(200).json({myData});
}

const getAllProductsTesting=async(req,res)=>{
    const myData= await Product.find(req.query);
    res.status(200).json({myData});
}

module.exports={getAllProducts,getAllProductsTesting}