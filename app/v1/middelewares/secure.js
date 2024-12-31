module.exports =(req,res,next)=> {
    /// יצירת שכבה שמדפיסה את כתובות ה איפי של הבקשה וממשיכה
       let arrIps = ["192.168.15","::1","8.6.5.9","23.54.3.1"];
   
       for(let i =0; i<arrIps.length;i++){ /// מעבר על כל הכתובות במערך
   
           if (req.ip == arrIps[i]){      /// בדיקה אם האיפי נמצא
              return next();
           }
       }
       return res.status(404).json({Msg: "Not Authorized"}); // במידה ולא נמצא החזרת תשובה : לא מורשה
       
   };
