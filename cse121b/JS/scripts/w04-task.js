/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "BORGEAS JULFÉRIQUE MPOMPA",
    photo: "images/JulFe3+.jpg",
    favoriteFoods: ["Banga soup", "Mushrooms and Foufou",
    "Fried Herrings", "Chicken Sauce", "Green Beans",
    "Cassava", "Rice", "Vegetables",
    "Porc Meat", "Asparagus",
    "Caterpillar with Eggplants","Kao with Pasta"],
    hobbies: ["Software Development", "Programming",
    "Literature", "Maths", "Sports", "Gospel Music", "Learning Foreign Languages", "Studying The Holy BIBLE"],
    placesLived: []
    
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
        "Pointe-Noire: ","19 Years",
        "Brazzaville: ","8 Years"

);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src= myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
  });

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach((placeLived) => {
    let dt = document.createElement("dt");
    dt.textContent = placeLived;
    document.querySelector("#places-lived").appendChild(dt);
  });

