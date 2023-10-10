import { COLOR, SIZE, clients } from "@/utils/enum"
import Link from "next/link"
import classes from "@/styles/Test.module.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

function Home() {
  const searchParams = useSearchParams()
  const currentColor = searchParams.get("color")
  const currentSize = searchParams.get("size")
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
          COLOR.map(color => 
            <Link
              className={`${classes.button} ${currentColor === color ? classes.activeButton : ""}`}
              href={
                `?color=${color}&size=${currentSize}`
              }
            >
              {color}
            </Link>
          )
        }
        <h2 className={classes.size}>SIZE</h2>
        {
          SIZE.map(size => 
            <Link
              className={`${classes.button} ${currentSize === size ? classes.activeButton : ""}`}
              href={
                `?color=${currentColor}&size=${size}`
              }
            >
              {size}
            </Link>
            
          )
        }
        <div className={classes.img}>
          <img  width="400px" src="/black-tee.jpg" alt="tee" />
        </div>
      </div>
  )
};

export default Home
