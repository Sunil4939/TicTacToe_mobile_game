import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

let count = 0;
let c = 0;
let res = "";
let dis = false;

const App = () => {
  const [text, setText] = useState([]);
  const [result, setResult] = useState();
  const [buttonDisabled, setButtonDisabled] = useState([]);

  useEffect(() => {
    disableButton();
  }, []);

  let data = [...text];
  let bool = [...buttonDisabled];

  // add text in text content 
  const addText = (index) => {
    if (count % 2 == 0) {
      data[index] = "X";
      bool[index] = true;
    } else {
      data[index] = "O";
      bool[index] = true;
    }
    count = count + 1;
    // console.log(data);
    // console.log(count)
    setText(data);
    setButtonDisabled(bool);
    check();
  }

  // check of the text content

  const check = () => {

    if (data[0] != undefined) {
      if (data[0] == data[1] && data[1] == data[2]) {
        res = `Winner is ${data[0]}`;
      }
      else if (data[0] == data[3] && data[3] == data[6]) {
        res = `Winner is ${data[0]}`;
      }
      else if (data[0] == data[4] && data[4] == data[8]) {
        res = `Winner is ${data[0]}`;
      }

    }
    if (data[1] != undefined) {
      if (data[1] == data[4] && data[4] == data[7]) {
        res = `Winner is ${data[1]}`;
      }
    }
    if (data[2] != undefined) {
      if (data[2] == data[5] && data[5] == data[8]) {
        res = `Winner is ${data[2]}`;
      } else if (data[2] == data[4] && data[4] == data[6]) {
        res = `Winner is ${data[2]}`;
      }
    }
    if (data[3] != undefined) {
      if (data[3] == data[4] && data[4] == data[5]) {
        res = `Winner is ${data[3]}`;
      }
    }
    if (data[6] != undefined) {
      if (data[6] == data[7] && data[7] == data[8]) {
        res = `Winner is ${data[6]}`;
      }
    }
    
    if( count == 9 && res == ""){
      res = "Draw"
    }
   
    if (res != "") {
      disableButton();
    }
    setResult(res);
  }

  // disable text content
  const disableButton = () => {
    for (let i = 0; i < 9; i++) {
      bool[i] = true;
    }
    setButtonDisabled(bool);
  }

  // enable text content
  const enabledButton = () => {
    for (let i = 0; i < 9; i++) {
      if (data[i] == undefined && res == "") {
        bool[i] = false;
      }
    }
    setButtonDisabled(bool);
  }

  // start game
  const start = () => {
    enabledButton();
    dis = true;
  }

  // pause game
  const pauseResume = () => {
    if (c % 2 == 0) {
      disableButton();
      c += 1;
    }
    else {
      enabledButton();
      c -= 1;
    }
  }

  // restart game
  const reStart = () => {
    data = [];
    bool = [];
    setText(data);
    setButtonDisabled(bool);
    count = 0;
    c = 0;
    res = "";
    setResult(res);

  }

  return (
    <View style={styles.container}>
      <View style={styles.gamecontainer}>
        <View style={styles.rowcontainer}>
          <Text style={styles.textcontent} disabled={buttonDisabled[0]} onPress={() => addText(0)}>{text[0]}</Text>
          <Text style={styles.textcontent} disabled={buttonDisabled[1]} onPress={() => addText(1)}>{text[1]}</Text>
          <Text style={styles.textcontent} disabled={buttonDisabled[2]} onPress={() => addText(2)}>{text[2]}</Text>
        </View>
        <View style={styles.rowcontainer}>
          <Text style={styles.textcontent} disabled={buttonDisabled[3]} onPress={() => addText(3)}>{text[3]}</Text>
          <Text style={styles.textcontent} disabled={buttonDisabled[4]} onPress={() => addText(4)}>{text[4]}</Text>
          <Text style={styles.textcontent} disabled={buttonDisabled[5]} onPress={() => addText(5)}>{text[5]}</Text>
        </View>
        <View style={styles.rowcontainer}>
          <Text style={styles.textcontent} disabled={buttonDisabled[6]} onPress={() => addText(6)}>{text[6]}</Text>
          <Text style={styles.textcontent} disabled={buttonDisabled[7]} onPress={() => addText(7)}>{text[7]}</Text>
          <Text style={styles.textcontent} disabled={buttonDisabled[8]} onPress={() => addText(8)}>{text[8]}</Text>
        </View>
      </View>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.rowcontainer}>
        <TouchableOpacity style={styles.btn} disabled={dis} onPress={start}>
          <Text style={styles.btntext}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={pauseResume}>
          <Text style={styles.btntext}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={reStart}>
          <Text style={styles.btntext}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gamecontainer: {
    width: 300,
    height: 300,
    backgroundColor: 'purple'
  },
  rowcontainer: {
    flexDirection: 'row',
    // borderWidth:2
  },
  textcontent: {
    width: '33.3%',
    height: 100,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 60,
    color: 'white',

  },
  result: {
    color: 'white',
    fontSize: 60
  },
  btn: {
    backgroundColor: 'green',
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: "center",
    margin: 10,
  },
  btntext: {
    color: 'white',
  }
})
export default App;