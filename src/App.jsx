import { useState } from "react"

function App() {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState([])

  const [noteColor, setNoteColor] = useState("black")
  const [noteBackgroundColor, setNoteBackgroundColor] = useState("transparent")
  const [resetBackground, setResetBackground] = useState(true)

  const [phoneDigit, setPhoneDigit] = useState("")
  const [phoneNumber, setPhoneNumber] = useState([])


  function noteHandleChange(event) {
    setNote(event.target.value);
    console.log(note);
  }

  function phoneHandleChange(event) {
    setPhoneDigit(event.target.value);
    console.log(phoneDigit);
  }

  function colorHandleChange(event) {

    console.log(event.target.id);

    switch (event.target.id) {
      case 'font':
        setNoteColor(event.target.value);
        break;

      case 'background':
        setNoteBackgroundColor(event.target.value);
        setResetBackground(false)
        console.log('ok');
        break;

      default:
        break;
    }

    console.log(noteColor);
  }

  function resetBackGround() {

    setNoteBackgroundColor('transparent')
    setResetBackground(true)
  }

  function add() {

    event.preventDefault();

    if (note != '') {

      setNotes([...notes, { text: note, color: { color: noteColor, backgroundColor: noteBackgroundColor, padding: '3px', borderRadius: "5px" } }]);
      setNote("");
    }
  }

  function phoneAdd() {

    event.preventDefault();

    if (phoneDigit != '') {

      setPhoneNumber([...phoneNumber, { number: phoneDigit, color: { color: noteColor, backgroundColor: noteBackgroundColor, padding: '3px', borderRadius: "5px" } }])
      setPhoneDigit("")
    }
  }



  return (
    <>
      <div id="main">
        <div>

          <div className="styleArea">
            <section>
              <div className="styleType">
                <input type="color" onChange={colorHandleChange} className="textStyle" id="font" />
                <label htmlFor="textStyle"> - Cor da fonte</label>
              </div>

              <div className="styleType">
                <input type="color" onChange={colorHandleChange} className="textStyle" id="background" />
                <label htmlFor="textStyle"> - Cor de destaque</label>
              </div>

              <button disabled={resetBackground} onClick={resetBackGround}>Remover destaque</button>
            </section>
          </div>

          <div className="textoArea">
            <form onSubmit={add}>
              <input type="text" value={note} onChange={noteHandleChange} maxLength={33} className="inputTexto" />
              <button className="addBtns">Add nome</button>
            </form>

            <form onSubmit={phoneAdd}>
              <input type="number" value={phoneDigit} onChange={phoneHandleChange} maxLength={15} className="inputTexto" />
              <button className="addBtns">Add numero</button>
            </form>
          </div>


          <div className="lousas">

            <div className="lousaNomes">
              <h2>Nomes:</h2>

              <ul>
                {notes.map(text => (
                  <li style={text.color}>{text.text}</li>
                ))}

              </ul>

            </div>

            <div className="lousaNumeros">
              <h2>Números:</h2>

              <ul>
                {phoneNumber.map(number => (
                  <li style={number.color}>{number.number}</li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
