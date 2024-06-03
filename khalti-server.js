const express = require("express");
const cors = require("cors"); // Import cors package
require("dotenv").config();
const axios = require("axios");

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("machikni");
  });
  
  app.post("/khalti",
    async (req, res) => {
      const payload = req.body;
    const khaltiResponse = await axios.post(
      'https://a.khalti.com/api/v2/epayment/initiate/',
      payload,
      {
        headers: {
          Authorization: `Key  ${process.env.KHALTI_SECRET_KEY}`,
        },
      }
    );
    if(khaltiResponse){
      res.json({
        success: true,
        data: khaltiResponse?.data
      })
    }else{
      res.send({
        success:false,
        message:"something went wrong."
      })
    }
    });
  
  const PORT = process.env.PORT || 5000;
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  