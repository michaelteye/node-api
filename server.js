const express = require('express') // get access to express
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':
        {
            'age':29,
        'birthName':'Sheyaa Bin Abraham-Joseph',
        'birthLocation':'London England'
    },
    'Chance the raper':
    {
        'age':29,
    'birthName':'Sheyaa Bin try chance to rapper',
    'birthLocation':'LA USA'
    },
    'raper':
    {
        'age':20,
    'birthName':'Sheyaa Bin the rapper',
    'birthLocation':'LA USA'
    }
}



app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLocaleLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else {
        response.json(rappers['raper'])
    }
})

app.listen(PORT, ()=>{
    console.log(`the server is runing on ${PORT} you better go and get it`)
})