module.exports = {
    GetAll: (req,res)=> {
        return res.status(200).json ({Msg: "All Product"})
    },

    GetByID: (req,res)=> {
        let proid = req.params.id
        return res.status(200).json ({Msg: `Product id : ${proid} `})
    },

    AddNew: (req,res)=> {
        return res.status(200).json ({Msg: "New Product"})
    },

    UpdateByID: (req,res)=> {
        let proid = req.params.id
        return res.status(200).json ({Msg: `Product id: ${proid}`})
    },

    DeletByID: (req,res)=> {
        let proid = req.params.id
        return res.status(200).json ({Msg: `Delet Product id: ${proid}`})
    },
}