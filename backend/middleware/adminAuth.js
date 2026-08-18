import jwt from 'jsonwebtoken'

const adminAuth=async(req,res,next)=>{
  try {
    const {token}=req.headers

    // console.log("Token:", token);

    if(!token){
      return res.json({success:false,message:"Not Authorized Login Again"})
    }
    const token_decode=jwt.verify(token,process.env.JWT_SECRET);


    // console.log("Decoded:", token_decode);
    // console.log(
    //   "Expected:",
    //   process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    // );


    if(token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
      return res.json({success:false,message:"Not Authorized Login Again"})
    }
    next()
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
    
  }
}
export default adminAuth