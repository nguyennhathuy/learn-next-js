import { COLOR, SIZE, clients } from "@/utils/enum"
import Link from "next/link"
import classes from "@/styles/Test.module.css"
import { useState } from "react";
function Home() {
  const [currentColor, setCurrentColor] = useState('Black');
  const [currentSize, setCurrentSize] = useState('XL');
  return (
      // <div>
      //   <h1>Hello Im home</h1>
      //   <ul>
      //     {
      //       clients.map((client, index) => (
      //         <li key={index}><Link href={`/clients/${client.clientId}`}>{client.clientId} profile</Link></li>
      //       ))
      //     }
      //   </ul>
      // </div>

      <div>
        <h1>Acme Circles T-Shirt</h1>

        <h2 className={classes.color}>COLOR</h2>
        {
          COLOR.map(color => <button onClick={() => setCurrentColor(color)} className={`${classes.button} ${currentColor === color ? classes.activeButton : ""}`}>{color}</button>)
        }
        <h2 className={classes.size}>SIZE</h2>
        {
          SIZE.map(size => <button onClick={() => setCurrentSize(size)} className={`${classes.button} ${currentSize === size ? classes.activeButton : ""}`}>{size}</button>)
        }
        <div>
          <img  width="400px" src="/black-tee.jpg" alt="tee" />
        </div>
      </div>
  )
};

export default Home
