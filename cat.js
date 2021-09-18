const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2021,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },{
    name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://raw.githubusercontent.com/SJMcode/ssss/main/cat1.jpg"
    }
    ,{
        name: "Meowsalot",
          species: "Cat",
          favFoods: ["tuna", "catnip", "celery"],
          birthYear: 2012,
          photo: "https://raw.githubusercontent.com/SJMcode/ssss/main/cat2.jpg"
        }
        ,{
            name: "Meowsalot",
              species: "Cat",
              favFoods: ["tuna", "catnip", "celery"],
              birthYear: 2012,
              photo: "https://raw.githubusercontent.com/SJMcode/ssss/main/cat3.jpg"
            }
            
  ];

function age(birthDate){
    let calculatedAge= new Date().getFullYear()-birthDate;
    if(calculatedAge == 1){
        return '1 Year old'
    }
    else if(calculatedAge == 0){
        return 'Baby'
    }
    else{
        return `${calculatedAge} years old`
    }
}

function foods(foods){
    return `
        <h4>Favorite Foods</h4>
        <ul class="foods-list">
            ${foods.map(food=> `<li>${food}</li>`).join('')}
        </ul>
    `
}
 function petTemplate(pet){
  return `
  <div class="animal">
      <img class="pet-photo" src=${pet.photo}>
      <h2 class="pet-name">${pet.name}<span class="species"> (${pet.species})</span></h2>
  
  <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
  ${pet.favFoods ? foods(pet.favFoods):''}
  </div>
`
 }

  document.getElementById("app").innerHTML = `
  <h1 class="app-title">Pets (${petsData.length} results)</h1>
  ${petsData.map(petTemplate).join(" ")}
  <p class="footer">These ${petsData.length} pets were added recently, Check back soon for updates.</p>
  `
