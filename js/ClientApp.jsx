import React from 'react'
import { render } from 'react-dom'
const ce = React.createElement
const MyTitle = function (props) {
  return (
    <div>
      <h1 style={ { color: props.color } }>{props.title}</h1>
    </div>
  )
}

const MyFirstComponent = function () {
  return (
    <div id="my-first-component">
      <input type="text"/>
      <MyTitle title="Game of Thromes" color="YellowGreen" />
      <MyTitle title="The Chase" color="GreenYellow" />
      <MyTitle title="Grand Design" color="burlywood" />
      <SignUpForm/>
    </div>
  )
}

const SignUpForm = function () {
  return (
    <div>
      <form action="/signup" method="post">
        <div>
          <label for="name">Name: </label>
          <input type="text"></input>
        </div>
      </form>
    </div>
  )
}

render(ce(MyFirstComponent), document.getElementById('app'))
