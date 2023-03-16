import React, { useState } from "react";
import style from "./style/leo.module.css";
import { Link } from "react-router-dom";

import { action } from "./style/store/index1";
import { useDispatch } from "react-redux";

const Leo = () => {
  let [arr, setarr] = useState([]);
  const [valid, setValid] = useState(false);
  let dispatch = useDispatch();

  // let fun = (event) => {
  //   if (event.target.checked) {
  //     setValid(true);
  //   } else {
  //     setValid(false);
  //   }
  // };

  let onClickHandler = (event) => {
    event.preventDefault();

    // alert(`${arr} of seats total amount ${arr.length * 100}`);
    dispatch(action.seat(arr));
  };
  let tablehandler = (event) => {
    if (event.target.checked === true) {
      setarr((prev) => {
        return [...prev, event.target.value];
      });
      console.log(arr);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i])) {
          setarr(arr.filter((seat) => seat !== event.target.value));
        }
      }
    }
  };
  return (
    <div>
      <h1>LEO</h1>
      <div>
        <p className={`${style.kposter}`}>
          SUMMARY OF LEO <br />
          Leo is an upcoming 2023 action crime thriller film directed by Lokesh
          Kanagaraj, who also wrote the dialogue with Rathna Kumar and Deeraj
          Vaidy. The movie stars Vijay in the lead roles, along with Sanjay
          Dutt, Trisha Krishnan, Gautham Menon, and many others in supporting
          roles. Given the fact that this movie is a part of Lokesh's LCU, Kamal
          Haasan, Karthi, Arjun Das, and Suriya will all appear in a few scenes.
          Anirudh Ravichander composed the music and the background score for
          this film, and the cinematography was handled by Manoj Paramahamsa.
          The film's editing was done by Philomin Raj. Vishnu Edavan wrote the
          lyrics for this film. Lalit Kumar produced this film under the banner
          of Seven Screen Studios. Thalapathy 67 will be widely distributed in a
          larger theatrical release by Red Giant Movies. Thalapathy Vijay is
          putting together several chocolates. The actor creating the sword
          emerges in between the sequences. As a legion of cars enter his estate
          at the climax of the promo, the actor is shown brandishing a
          chocolate-dripping sword. The links between the current promo and
          Vikram's preview feed suggest that Leo has joined the list of LCU.
          According to reports, the movie "Leo" is a pan-Indian action thriller
          with the tagline "Bloody Sweat." A heated script and an intense plot
          line are features of the action-crime thriller Thalapthy 67. Because
          this movie is part of LCU, it will go above and beyond what is
          expected. Because of the hype around this movie, critics and the
          audience create the plot in their own distinct style.
        </p>
      </div>
      <div className={`${style.tdiv}`}>
        <table onChange={tablehandler}>
          <thead>
            <tr>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>

              <td className={`${style.gap1}`}></td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
            </tr>
            <tr>
              <td>A</td>
              <td className={`${style.kite}`}>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  value="A3"
                  className={`${style.check}`}
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A5"
                />
              </td>

              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="A12"
                />
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="B12"
                />
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="C12"
                />
              </td>
            </tr>
            <tr>
              <td>D</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="D12"
                />
              </td>
            </tr>
            <tr>
              <td>E</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="E12"
                />
              </td>
            </tr>

            <tr className={`${style.gap}`}></tr>
            <tr>
              <td>F</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="F12"
                />
              </td>
            </tr>
            <tr>
              <td>G</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="G12"
                />
              </td>
            </tr>
            <tr>
              <td>H</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="H12"
                />
              </td>
            </tr>
            <tr>
              <td>I</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="I12"
                />
              </td>
            </tr>
            <tr>
              <td>J</td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J1"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J2"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J3"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J4"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J5"
                />
              </td>
              <td></td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J6"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J7"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J8"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J9"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J10"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J11"
                />
              </td>
              <td>
                {" "}
                <input
                  type="checkbox"
                  className={`${style.check}`}
                  value="J12"
                />
              </td>
            </tr>
          </thead>
        </table>
        <div> </div>
      </div>
      <button onClick={onClickHandler}>
        {" "}
        <Link to={"/Uileo"}>all data</Link>
      </button>
    </div>
  );
};

export default Leo;
