let container = document.createElement('div');
container.id = 'container'
container.style = "display: flex; flex-direction: row; flex-wrap: wrap"
document.body.appendChild(container);
for (let i=0; i<data.results.length; i++) {
    let res = data.results[i]
    console.log('incrementing')
    let newData = document.createElement('div');
    newData.style = "display: flex; flex-direction: column; margin: 15px; padding: 20px; border: 5px solid"
    newData.innerHTML = `
    <img src="${res.picture.large}" style="display: block; margin: auto; height: 150px; width: 150px">
    <p1 style="text-align: center">${res.name.title} ${res.name.first} ${res.name.last}</p1>
    <p1 style="text-align: center">${res.location.state}, ${res.location.country}</p1>
    <p1 style="text-align: center">Age ${res.dob.age}</p1>

    <p1 style="text-align: center">${res.email}</p1>
    <p1 style="text-align: center">${res.cell}</p1>



    ` 
    console.log('newdata', newData)
    document.getElementById('container').appendChild(newData)
}