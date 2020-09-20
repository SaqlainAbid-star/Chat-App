let signup = () =>{

    let email = document.getElementById("email")
    let password = document.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
        console.log(result)
        window.location.href = "user.html"
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });email-password.html


}


let login = () => {
    
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((result)=>{
        console.log("User Login Successfully")
        console.log(result)
        window.location = "chat.html"
        
    })
    
    .catch(function(error) {
        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });email-password.html

}





// Chat App user1

var list = document.getElementById("list1")

firebase.database().ref('messages1').on('child_added',function (data){

    // create li tag with text node
    var li = document.createElement('li')
    li.setAttribute("class","user1 p-1 pl-2 my-2 shadow rounded-pill border border-primary")
    list.appendChild(li)
    var liText =document.createTextNode(data.val().value)
    li.appendChild(liText)

     // create delete button
     var delBtn1 = document.createElement("button");
     var delText1 = document.createTextNode("Delete")
     delBtn1.setAttribute("class","btn btn-primary rounded-pill btn-sm ml-2")
     delBtn1.setAttribute("id",data.val().key)
     delBtn1.setAttribute("onclick","deleteItem1(this)")
     delBtn1.appendChild(delText1)
     li.appendChild(delBtn1)

})


function send(){

    var messages1 = document.getElementById("messages1");

    var key = firebase.database().ref('messages1').push().key

    var message1 = {
        value: messages1.value,
        key: key,
    }

    firebase.database().ref('messages1').child(key).set(message1)

    // console.log(todo_item.value) 
    
    messages1.value = ""

}

function deleteItem1(e){
    firebase.database().ref('messages1').child(e.id).remove()
    e.parentNode.remove()

}


// Chat app user 2


var list = document.getElementById("list1")

firebase.database().ref('messages2').on('child_added',function (data){

    // create li tag with text node
    var li = document.createElement('li')
    li.setAttribute("class","user2 p-1 pl-2 my-2 shadow border rounded-pill border-success")
    list.appendChild(li)
    var liText =document.createTextNode(data.val().value)
    li.appendChild(liText)

     // create delete button
     var delBtn2 = document.createElement("button");
     var delText2 = document.createTextNode("Delete")
     delBtn2.setAttribute("class","btn btn-success rounded-pill btn-sm ml-2")
     delBtn2.setAttribute("id",data.val().key)
     delBtn2.setAttribute("onclick","deleteItem2(this)")
     delBtn2.appendChild(delText2)
     li.appendChild(delBtn2)

})

function deleteItem2(e){
    firebase.database().ref('messages2').child(e.id).remove()
    e.parentNode.remove()

}