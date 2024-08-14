import prodModel from "../../models/prodModel";

const prodList = (req, res) => {

    const products = userModel.getAll() 
    res.json(products)
  }

export default prodList