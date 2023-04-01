function test() {
    // get the values from the input fields
    var todo = document.getElementById("TODO").value;
    var description = document.getElementById("description").value;
  
    // create a new object to represent the to-do item
    var newItem = {
      todo: todo,
      description: description,
      completed: false
    };
  
    // create a new list item element to represent the to-do item
    var listItem = document.createElement("li");
  
    // add the to-do text and description to the list item
    var text = document.createTextNode(todo + ": " + description);
    listItem.appendChild(text);
  

    
    // create the check button and add it to the list item
    var checkButton = document.createElement("button");
    checkButton.innerHTML = "check";
    checkButton.addEventListener('click', function() {
      // send a POST request to mark the to-do item as completed
      newItem.completed = true;
      axios.post('https://crudcrud.com/api/4bc8eb9436df48528d4ddc6c796a7b99/todos', newItem)
        .then(function (response) {
          // remove the list item from the list
          listItem.remove();
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    listItem.appendChild(checkButton);
  
    // create the X button and add it to the list item
    // add the list item to the list
    //document.getElementById("myList").appendChild(listItem);
    
  // create the X button and add it to the list item
  var xButton = document.createElement("button");
  xButton.innerHTML = "X";
  xButton.addEventListener('click', function() {
    // remove the list item from the list
    listItem.remove();
  });
  listItem.appendChild(xButton);


  // add the list item to the list
  document.getElementById("myList").appendChild(listItem);
  }
  
  
  window.addEventListener('DOMContentLoaded', ()=>{
    
    axios.get('https://crudcrud.com/api/4bc8eb9436df48528d4ddc6c796a7b99/todos/').then((response)=> {
      console.log(response.data)
      for(var i=0; i<response.data.length ;i++){
        getOnscreen(response.data[i]);
      }
      
  }).catch((err)=>{
    console.log(err)
    
  })
  })

  function getOnscreen(data) {
    var listItem = document.createElement("li");
  
    var text = document.createTextNode(data.todo + ": " + data.description);
    listItem.appendChild(text);
  
   
    var xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.addEventListener('click', function() {
      axios.delete(`https://crudcrud.com/api/4bc8eb9436df48528d4ddc6c796a7b99/todos/${data._id}`)
        .then(function (response) {
          listItem.remove();
        })
        .catch(function (error) {
          console.log(error);
        });
    });
    listItem.appendChild(xButton);
  
    document.getElementById("TODO:").appendChild(listItem);
  }
  