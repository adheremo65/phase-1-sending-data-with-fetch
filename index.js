// Add your code here
function submitData(name,email){
    const all = fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name,email})
    }).then((res) =>res.json())
    .then((data)=>{
       const div = document.createElement('div');
  div.innerHTML = `Data received: ${data.id}`;
  document.body.appendChild(div)
    }).catch((error=>{
        const div2 = document.createElement("div2")
  div2.innerHTML = `${error.message }`
  document.body.appendChild(div2)
    }))
    return all; 
}
