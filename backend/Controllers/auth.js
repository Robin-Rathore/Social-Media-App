import {db} from "../connect.js";
import bcrypt from "bcryptjs"; 
// Register Function
export const register = (req, res) => {
    //CHECK USER IF EXISTS
  
    const q = "SELECT * FROM users WHERE username = ?";
  
    db.query(q, [req.body.username], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");
      //CREATE A NEW USER
      //Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  
      const q =
        "INSERT INTO users (username,email,password,name) VALUE (?)";
  
      const values = [
        req.body.username,
        req.body.email,
        hashedPassword,
        req.body.name,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
      });
    });
  };
//  Login function 
export const login = ()=>{

}


// Logout function
export const logout = ()=>{

}