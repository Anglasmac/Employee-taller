const Employee = require('../models/employee.js')
//get all documents form employee
const getEmployee = async(req,res)=>{
    const employees = await employee.find()
    res.json(employees)
}
const postEmployee =async(req,res)=>{
    const body= (req.body)
    let msg = 'employee inserted succesful'
    try {
        const employee = new Employee(body)
        await employee.save()
    } catch (error) {
        msg = 'employee not inserted'
    }
    res.json({msg:msg})
};

module.exports={
    getEmployee,
    postEmployee
};