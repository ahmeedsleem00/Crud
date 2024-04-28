
var productInputName = document.getElementById("productName")
var productInputCategory = document.getElementById("productCategory")
var productInputPrice = document.getElementById("productPrice")
var productInputDescription = document.getElementById("productDesc")


var updateBtn =document.getElementById("updateBtn")
var mainBtn =document.getElementById("mainBtn")

var indexUpdate = 0


var productsList;
// local storage get

if (localStorage.getItem("Products") != null)
{
   productsList = JSON.parse( localStorage.getItem("Products"))
   displayData()
}
else
{

    productsList = []
}


/// Get Data From User


function getInputsData() 
{




    var product = {
        name: productInputName.value ,
        category: productInputCategory.value ,
        price: productInputPrice.value ,
        description: productInputDescription.value
    }

    productsList.push(product)
// local storage set
    localStorage.setItem("Products" , JSON.stringify(productsList))
    displayData()
    clearData()  
    
}



/// Display Data

function displayData() 
{
    var cartona = ""

    for(var x=0; x<productsList.length; x++) 
    {
        cartona += 
        `
    <tr>
        <td>${x}</td>
        <td>${productsList[x].name}</td>
        <td>${productsList[x].category}</td>
        <td>${productsList[x].price}</td>
        <td>${productsList[x].description}.</td>
        <td><button onclick="deleteItem(${x})"  class="btn btn-danger">
        <i class="fa-solid fa-trash-can mx-1"></i>

        Delete
        </button></td>
        <td><button onclick="UpdateProduct(${x})" class="btn btn-secondary">
        <i class="fa-solid fa-pen-to-square mx-1"></i>
        Update
        </button></td>
    </tr>
        `
    }

    document.getElementById("tbody").innerHTML = cartona
}


/// Clear Data from inputs

function clearData() 
{
    productInputName.value = ""
    productInputCategory.value = ""
    productInputPrice.value = ""
    productInputDescription.value = ""
}

/// Delete Product

function deleteItem(index)
{
    productsList.splice(index , 1)
    localStorage.setItem("Products" , JSON.stringify(productsList))
    displayData()

}
/// Delete All Products

function deleteAllItems(all)
{
    productsList.splice(all)
    localStorage.setItem("Products" , JSON.stringify(productsList))
    displayData()

}

function UpdateProduct(index)
{


    indexUpdate = index
    productInputName.value = productsList[index].name
    productInputCategory.value = productsList[index].category
    productInputPrice.value = productsList[index].price
    productInputDescription.value = productsList[index].description

   
    
    updateBtn.classList.remove("d-none")
    mainBtn.classList.add("d-none")
    

}


function updateThisProduct()
{

    var product = {
        name: productInputName.value ,
        category: productInputCategory.value ,
        price: productInputPrice.value ,
        description: productInputDescription.value
    }

    productsList.splice( indexUpdate, 1 , product)

    localStorage.setItem("Products" , JSON.stringify(productsList))
    displayData()
    clearData()  
    mainBtn.classList.remove("d-none")
    updateBtn.classList.add("d-none")


}



function searchProduct(value)
{

    var cartona = ""

    for(var x=0; x<productsList.length; x++)
    {
        if(productsList[x].name.toLowerCase().includes(value.toLowerCase()))
        {
            cartona += 
            `
        <tr>
            <td>${x}</td>
            <td>${productsList[x].name}</td>
            <td>${productsList[x].category}</td>
            <td>${productsList[x].price}</td>
            <td>${productsList[x].description}.</td>
            <td><button onclick="deleteItem(${x})"  class="btn btn-danger">
            <i class="fa-solid fa-trash-can mx-1"></i>
        
            Delete
            </button></td>
            <td><button onclick="UpdateProduct(${x})" class="btn btn-secondary">
            <i class="fa-solid fa-pen-to-square mx-1"></i>
            Update
            </button></td>
        </tr>
            `
        }
    }

    document.getElementById("tbody").innerHTML = cartona
} 
