import Ho from "../models/Ho.js";


export const createH = async (req,res,next) =>{
    const newHo = new Ho(req.body)
    try{
    const savedHo= await newHo.save()
    res.status(200).json(savedHo)



    }catch(err){

        next(err)

        

    }
}


//update
export const updateH = async (req,res,next) =>{
    try{
        const updatedHo= await Ho.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        res.status(200).json(updatedHo)
    
    
    
        }catch(err){

        next(err)

        

    }
}
//delete

export const deleteH = async (req,res,next) =>{
    try{
        await Ho.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted ")
    
    
    
        }catch(err){

        next(err)

        

    }
}

//get
export const getH = async (req,res,next) =>{
   
    try{
        const Hos = await Ho.findById(req.params.id)
        res.status(200).json(Hos)
    
    
    
        }catch(err){

        next(err)

        

    }
}

//getall
export const getAllH = async (req,res,next) =>{
    try{
        const HosAll = await Ho.find()
        res.status(200).json(HosAll)
        
    
    
    
        }catch(err){

        next(err)

        

    }
}
