import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
const users = [
  {username: "admin", password: "111"}
]

 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponseType>
) {
  if(req.method === "POST"){
    console.log(req.body)
    const {username, password} = req.body
      const message = checkUser(username, password)
      if(message !== "Пользователь не найден"){
          if(message !== "Верный пароль"){
              res.status(200).json({ 
                  accessToken: "token access", 
                  refreshToken: "refresh token", 
                  profile: {
                      username: "username",
                      password: "password",
                      role: IProfileRole.ADMIN
                  },
              });
          }else{
              res.status(400).json({
                  message: message
              })
          }
          
      }else{
          res.status(404).json({
              message: message
          })
      }
  }else if (req.method === "GET"){
      res.status(200).json({
          message: "hello"
      })
  }
}


const checkUser = (username: string, password: string) => {
  const user =  users.find(user => user.username === username)
  if(user){
   const isTruePassword = user.password === password
   if(isTruePassword){
       return "Верный пароль"
   }else{
       return "Неверный пароль"
   }
  }else{
       return "Пользователь не найден" 
  }
}