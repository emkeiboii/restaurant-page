import hambagaImage from "../hambaga.jpg";
const menu = [
  {
    id: 1,
    itemName: "Classic Cheeseburger",
    img: hambagaImage,
    itemDesc:
      "A juicy beef patty topped with cheddar cheese, lettuce, tomato, and our signature sauce.",
  },
  {
    id: 2,
    itemName: "BBQ Bacon Burger",
    img: hambagaImage,
    itemDesc:
      "Loaded with crispy bacon, BBQ sauce, and melted smoked gouda on a toasted bun.",
  },
  {
    id: 3,
    itemName: "Veggie Delight",
    img: hambagaImage,
    itemDesc:
      "A grilled plant-based patty with avocado, arugula, and vegan mayo.",
  },
  {
    id: 4,
    itemName: "Spicy Jalapeño Burger",
    img: hambagaImage,
    itemDesc:
      "For the brave: spiced beef patty, pepper jack cheese, and fresh jalapeños.",
  },
];

export default function Menu() {
  const mainContentContainer = document.getElementById("content");

  const menuGrid = document.createElement("section");
  menuGrid.classList.add("menu-grid");
  mainContentContainer.appendChild(menuGrid);
  menu.forEach((item) => {
    const foodCard = foodItemCard(
      item.id,
      item.img,
      item.itemName,
      item.itemDesc
    );

    menuGrid.appendChild(foodCard);
  });
}

function foodItemCard(id, img, itemName, desc) {
  const itemCard = document.createElement("div");
  itemCard.classList.add("menu-item");
  itemCard.id = id;

  const itemImg = document.createElement("img");
  itemImg.src = img;

  const foodLabel = document.createElement("span");
  foodLabel.classList.add("menu-title");
  foodLabel.textContent = itemName;

  const itemDesc = document.createElement("p");
  itemDesc.classList.add("menu-description");
  itemDesc.textContent = desc;

  itemCard.appendChild(itemImg);
  itemCard.appendChild(foodLabel);
  itemCard.appendChild(itemDesc);
  return itemCard;
}
