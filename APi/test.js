async function loadTOdos(){
 try{
    const response = await fetch("http://localhost:3000/todos")
    if (!response.ok){
        throw new Error("URL มันผิดครับเพ่", response.status)
    }
    const actualData = await response.json()
    console.log(actualData)
}catch (err){
    console.log("เซิฟพังจ้าาา" , err.massage)
}
}
loadTOdos()