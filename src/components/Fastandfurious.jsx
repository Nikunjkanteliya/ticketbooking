import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style/faf.module.css";

import { action } from "./style/store/index1";
import { useDispatch } from "react-redux";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

const Fastandfurious = () => {
  let [arr, setarr] = useState([]);

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
   
    
    
      dispatch(action.seat(arr));
    

    // alert(`${arr} of seats total amount ${arr.length * 100}`);
    // dispatch(action.seat(arr));
  };

  // console.log(completedata);
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
    <div >
     <h1 > fast and furious</h1>
     <div>
        <p className={`${style.kposter}`}>
          SUMMARY OF FAST AND FURIOUS <br />
          Fast & Furious (also known as The Fast and the Furious) is a media franchise centered on a series of action films that are largely concerned with street racing, heists, spies, and family. The franchise also includes short films, a television series, toys, video games, live shows, and theme park attractions. It is distributed by Universal Pictures.

The first film was released in 2001, which began the original tetralogy of films focused on illegal street racing and culminated in the film Fast & Furious (2009). The series transitioned towards heists and spying with Fast Five (2011) and was followed by five sequels, with the most recent, Fast X, set for release in May 2023. The main films are known as The Fast Saga.

Universal expanded the series to include the spin-off film Fast & Furious Presents: Hobbs & Shaw (2019), while its subsidiary DreamWorks Animation followed this with the animated streaming television series Fast & Furious Spy Racers. Soundtrack albums have been released for all the films, as well as compilation albums containing existing music heard in the films. Two short films that tie into the series have also been released.

The series has been commercially successful. It is Universal's biggest franchise and the eighth highest-grossing film series, with a combined gross of over $6 billion.[1] Critical reception for the first four films were mixed to negative until the fifth and later films, which were more mixed to positively received. Outside of the films, Fast & Furious has been the focus of other media, including attractions at Universal Studios Hollywood and Universal Studios Florida, live shows, commercials, toys, and video games. It is considered the vehicle that propelled lead actors Vin Diesel and Paul Walker to stardom.[2]
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
        
      <Link to={"/Uifaf"}> all data</Link>
       
      </button>
    </div>
  );
};
export default Fastandfurious;
