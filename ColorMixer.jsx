import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';

const ColorMixer = () => {
  const color = JSON.parse(localStorage.getItem('color'));
  const [r, setr] = useState(color&&color.r?color.r:0);
  const [g, setg] = useState(color&&color.g?color.g:0);
  const [b, setb] = useState(color&&color.b?color.b:0);
  const [error, setError] = useState('');

  function save(){
    localStorage.setItem("color",JSON.stringify({r,g,b}))
  }

  function setWhite() {
    setr(255);
    setg(255);
    setb(255);
  }
  function setBlack() {
    setr(0);
    setg(0);
    setb(0);
  }

  function ErrorHandling(value) {
    if (value > 255 || value < 0) {
      setError("Invalid value please enter between (0–255)");
      return Math.min(Math.max(value, 0), 255);
    } else {
      setError("");
      return value;
    }
  }

  return (
    <div style={{ height: '1200px' }} >
      <br />
      <p className="text-[50px] text-blue-400 m-0"> Color Mixer</p>
      <br />
      <div style={{ height: "200px", width: "300px", backgroundColor: 'rgb(' + r + ' ' + g + ' ' + b + ')', border: '2px solid black' }} ></div>
      <br />
      <label htmlFor="">red  </label>
      <input type="range" min={0} max={255}
        value={r}
        onChange={(event) => {
          setr(event.target.value)
          ErrorHandling(event)
        }} />
      <p style={{ display: "inline" }} >({r})</p> <br />

      <label htmlFor="">green</label>
      <input type="range" min={0} max={255}
        value={g}
        onChange={(event) => { setg(event.target.value) }} />
      <p style={{ display: "inline" }} >({g})</p> <br />

      <label htmlFor="">blue </label>
      <input type="range" min={0} max={255}
        value={b}
        onChange={(event) => setb(event.target.value)} />
      <p style={{ display: "inline" }} >({b})</p> <br />

      <br />
      <h4>Set values Manually</h4>

      <input type="text"
        value={r}
        style={{ border: '2px solid black', marginRight: "10px", width: "50px" }}
        onChange={(event) => setr(ErrorHandling(Number(event.target.value)))}
      />
      <input type="text"
        value={g}
        style={{ border: '2px solid black', marginRight: "10px", width: "50px" }}
        onChange={(event) => setg(ErrorHandling(Number(event.target.value)))} />
      <input type="text"
        value={b}
        style={{ border: '2px solid black', marginRight: "10px", width: "50px" }}
        onChange={(event) => setb(ErrorHandling(Number(event.target.value)))} />
      <br />
      <p style={{ marginRight: '26px', marginLeft: "15px", display: 'inline' }} >red</p>
      <p style={{ marginRight: '24px', display: 'inline' }} >green</p>
      <p style={{ marginRight: '40px', display: 'inline' }} >blue</p>

      <br />
      <p style={{ color: 'red' }} >{error}</p>
      <br />

      <Button variant="light"
        style={{ border: '2px solid black', marginRight: "10px" }}
        onClick={setWhite}>
        Set White
      </Button>

      <Button variant='dark'
        style={{ border: '2px solid black' }}
        onClick={setBlack} >Set Black
      </Button>
      <br /> <br />
      <Button onClick={save} >Save</Button>

    </div>
  )
}

export default ColorMixer
