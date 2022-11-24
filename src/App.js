// import logo from './logo.svg';
import './App.css';
// import styled from
import React from "react"
import styled from "styled-components";
import signsData from "./signsData";
import aSign from "/usr/local/bin/learn-bsl/src/images/a.png"


export default function App(){
    const [sign, setSign] = React.useState({
        signID: "",
        signName: "",
        image: "",
        height:"",
        width:""
    })

    const [allSignImages, setAllSignImages] = React.useState(signsData)

    function getSignImage(){
        let signsArray = allSignImages.data.signs
        // const signID = "a"
        console.log("clicked")
        let url = signsArray[1].url
        let id1 = signsArray[1].id
        // const path = signsArray[1].path
        console.log(url)
        // import aSign from "/usr/local/bin/learn-bsl/src/images/a.png"
        setSign(prevSign => ({
            ...prevSign,
            image: url,
            height: 200,
            width: 200,
            signID: id1
        }))

  }
    function validateInput() {
        let x = document.forms["inputForm"]["signGuessed"].value;
        let img = document.getElementById("a");
        // console.log(img.id)
        if (x == img.id) {
            alert("Correct");
            return true;
        }
        else {
            alert("Wrong!")
        }
    }
  return (
      <main>

        <div className="form" >
            <h1>Guess the sign! </h1>
            {/*<GameBox>*/}
            <Button onClick={getSignImage}>
            Get sign image
            </Button>
            <br/>

            <img src={sign.image} height={sign.height} id="a"/>

            <br/>
            <form name="inputForm" onSubmit={validateInput}>
            <input type="text" name="signGuessed" placeholder="Enter your guess here!"/>
            </form>


            {/*</GameBox>*/}
        </div>
          {/*<img src={sign.image} height={sign.height} />*/}
          {/*<img src={aSign}/>*/}
      </main>
  )
}

// function App() {
//   return (
//
//   <Div>
//     <GameBox>
//       <img id="image" src={aSign} height={200} width={200}/>
//       <br/>
//       <Button onclick="show(image,btnID)" id="btnID">Click to show image</Button>
//       <button type="button"
//               onClick="show(image)" id="btnID">
//         Show Image
//       </button>
//
//
//     </GameBox>
//   </Div>
//
//   )
//   function show(imgID){
//     document.getElementById(imgID).style.display = "block";
//
//     // document.getElementById(btnID).style.display = "none";
//   }
// }
//
//
// export default App;

const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    `;

const GameBox = styled.div`
  //height: 600px;
  //width: 700px;
  display: flex;
  background-color: slateblue;
  justify-content: center;
  //align-items: center;
`;

const Button = styled.button`
  height: 50px;
  width: 120px;
  //background: transparent;
  //border-radius: 3px;
  //border: 2px solid palevioletred;
  //color: palevioletred;
  //margin: 0 1em;
  //padding: 0.25em 1em;
`