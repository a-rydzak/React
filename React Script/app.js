const appContainer = document.getElementById("app")
const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}

const render = () => {
		Http.onreadystatechange = (e) => {
	  console.log(Http.responseText)
	}

    let element = '<div><h3>Account</h3><a href="#" onClick={some_event}>Login</a><a href="#" onClick={some_event}>Logout</a></div>'
    let html = React.createElement("h1",null,"The time is: " + new Date().toLocaleTimeString())
    ReactDOM.render(html,appContainer);


}

setInterval(render, 1000);

// ReactDOM.render(
//     React.createElement(
//         "div",
//         {},
//         Title({
//             backgroundColor: "blue",
//             textColor: "white"
//         }),
//         Title({
//             backgroundColor: "red",
//             textColor: "blue"
//         }),
//         Title({
//             backgroundColor: "pink",
//             textColor: "green"
//         }),
//     ),
//     document.getElementById("app")
// );