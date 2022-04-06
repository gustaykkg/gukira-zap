const accountSid = 'ACc5b7280ec605ca4864450c2faf33f989'
const authToken = '07cf6358ff5bcab87a12343722a68e82'
const client = require('twilio')(accountSid,authToken);
let msgDay = true
const express = require('express')
const app = express();
app.get("/", (request, response)=>{
  response.sendStatus(200)
})
app.listen(3000, () => {
        console.log(`Exemplo app node rodando no endereço http://localhost:${3000}`)
      });

setInterval( async()=>{

        let now =  new Date()
        let past = new Date('2022-03-26T00:00:00')

        let anodiff = now.getFullYear() - past.getFullYear()
        let mesdiff = now.getMonth() - past.getMonth()
        

    if(msgDay == true){

        if(now.getMonth() != past.getMonth() && now.getDate() == past.getDate() && now.getFullYear() == past.getFullYear()){
                client.messages.create({
                from: 'whatsapp:+14155238886',
                body: `Cara tamo comerando aniversario de ${mesdiff} ${mesdiff == 1 ? "mes" : "meses"} entra ai no site que se eu não tava com preguiça eu fiz algo bonitin\nhttps://gukira.netlify.app\n\n\nps:ainda em desenvolvimento, se recebeu a msm e não é nosso aniversario ignora`,
                to: 'whatsapp:+5511995729292'
                }).then(message => console.log(message.sid))

          client.messages.create({
                from: 'whatsapp:+14155238886',
                body: `Cara tamo comerando aniversario de ${mesdiff} ${mesdiff == 1 ? "mes" : "meses"} entra ai no site que se eu não tava com preguiça eu fiz algo bonitin\nhttps://gukira.netlify.app\n\n\nps:ainda em desenvolvimento, se recebeu a msm e não é nosso aniversario ignora`,
                to: 'whatsapp:+5511910759773'
                }).then(message => console.log(message.sid))
                msgDay = false
        }
   

                
        
        else if(now.getMonth() == past.getMonth() && now.getDate() == past.getDate() && now.getFullYear() != past.getFullYear()){
                    
            client.messages.create({
                from: 'whatsapp:+14155238886',
                body: `Parça esse bot ainda ta funcionando mesmo depois de ${anodiff} ${anodiff == 1 ? "ano" : "anos"} eu provavelmente não fiz nada diferente, porem entra ai\nhttps://gukira.netlify.app\n\n\nps:ainda em desenvolvimento, se recebeu a msm e não é nosso aniversario ignora`,
                to: 'whatsapp:+5511995729292'
                }).then(message => console.log(message.sid))

          client.messages.create({
                from: 'whatsapp:+14155238886',
                body: `Cara tamo comerando aniversario de ${mesdiff} ${mesdiff == 1 ? "mes" : "meses"} entra ai no site que se eu não tava com preguiça eu fiz algo bonitin\nhttps://gukira.netlify.app\n\n\nps:ainda em desenvolvimento, se recebeu a msm e não é nosso aniversario ignora`,
                to: 'whatsapp:+5511910759773'
                }).then(message => console.log(message.sid))
                msgDay = false
        }
    
        else if(mesdiff != 0 && anodiff != 0){
            client.messages.create({
                from: 'whatsapp:+14155238886',
                body: `Se isso ta chegando mesmo com ${anodiff} ${anodiff == 1 ? "ano" : "anos"} e ${mesdiff} ${mesdiff == 1 ? "mes" : "meses"} significa que minha promessa ainda ta de pé e eu te amo muito mesmo\nhttps://gukira.netlify.app\n\n\nps:ainda em desenvolvimento, se recebeu a msm e não é nosso aniversario ignora`,
                to: 'whatsapp:+5511995729292'
                }).then(message => console.log(message.sid))

          client.messages.create({
                from: 'whatsapp:+14155238886',
                body: `Cara tamo comerando aniversario de ${mesdiff} ${mesdiff == 1 ? "mes" : "meses"} entra ai no site que se eu não tava com preguiça eu fiz algo bonitin\nhttps://gukira.netlify.app\n\n\nps:ainda em desenvolvimento, se recebeu a msm e não é nosso aniversario ignora`,
                to: 'whatsapp:+5511910759773'
                }).then(message => console.log(message.sid))
                msgDay = false
            
        }
        else if(now.getDate() == past.getDate() && mesdiff == 0 && now.getDay() - past.getDay() != 0){
                msgDay = true
        }

   
}
        },1000)
        
    