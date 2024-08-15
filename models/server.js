const express = require('express');
const dbConnection = require('../database/config');
require('dotenv').config();
const{getEmployee,postEmployee}=('../Controllers/employeeController.js')

class Server{
    constructor(){
        this.app = express();
        this.listen();
        this.dbConnection();
        this.pathEmployee='/api/employee'
        this.route();
    }
    async dbConnection(){
        await dbConnection();
    }
    route(){
        this.app.use(express.json())
        this.app.get(this.pathEmployee, getEmployee);
        this.app.post(this.pathEmployee, postEmployee);
    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is runniing on port ${process.env.PORT}`)
        })
    }
}
module.exports=Server