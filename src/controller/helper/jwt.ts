const jwt=require('jsonwebtoken');

const jwiSignToken=(data)=>{
    return new Promise((resolve, reject) => {
        jwt.sign(data, process.env.JWT_SECRET, function(err, token) {
            console.log(token);
            if(err)reject(err);
            resolve(token);
          });
    });
};
export default jwiSignToken;