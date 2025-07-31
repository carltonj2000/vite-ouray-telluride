function App() {
  return (
    <>
      <div className="bg-blue-300 opacity-90 px-1 py-3 flex flex-col items-center">
        <h1 className="text-2xl font-semibold">Ouray And Telluride Trip</h1>
        <p>
          August 1<sup>st</sup> - 4<sup>th</sup>, 2025
        </p>
      </div>
      <div className="bg-blue-200 opacity-90 flex flex-col items-center pt-4">
        <h2 className="font-semibold mb-2 text-xl">Participants</h2>
        <table className="pt-2 border-collapse border border-blue-800">
          <tbody>
            <tr>
              <td className="border border-blue-400 px-2 py-1">Christian</td>
              <td className="border border-blue-400 px-2 py-1">Vyonne</td>
              <td className="border border-blue-400 px-2 py-1">Deb</td>
              <td className="border border-blue-400 px-2 py-1">Jackie</td>
            </tr>
            <tr>
              <td className="border border-blue-400 px-2 py-1">Bruce</td>
              <td className="border border-blue-400 px-2 py-1">Teresa</td>
              <td className="border border-blue-400 px-2 py-1">Sandy</td>
              <td className="border border-blue-400 px-2 py-1">Carlton</td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mb-2 mt-3 text-xl">Plan</h2>
        <table>
          <thead>
            <tr>
              <th className="border border-blue-400 px-2 py-1 font-semibold">
                Day
              </th>
              <th className="border border-blue-400 px-2 py-1">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                Friday<br/>August 1<sup>st</sup>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>8AM Meet @ Bruce's</li>
                  <li>Drive to Montrose ETA 5 PM</li>
                  <li>Japanese Theme Dinner</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                Saturday<br/>August 2<sup>nd</sup>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>
                    <a href="https://ourayviaferrata.org/" className="underline text-blue-400">
                      Ouray Via Ferratas
                    </a>
                  </li>
                  <li>Upstream (VF4.5B)</li>
                  <li>Downstream (VF4B optional VF5)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                Sunday<br/>August 3<sup>rd</sup>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>Ouray Canyons</li>
                  <li>
                    <a href="https://ropewiki.com/index.php?title=Angel_Creek_(Lower)" className="underline text-blue-400">
                    Angle Creek 
                    </a>
                    {" "}4 raps, 45ft
                  </li>
                  <li>
                    <a href="https://ropewikiacom/index.php?title=Angel_Creek_(Lower)" className="underline text-blue-400">
                    Portland Creek
                    </a>
                    {" "}2-3 raps, 55ft
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                Monday<br/>August 4<sup>th</sup>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>
                    <a href="https://www.telluride.com/activity/telluride-via-ferrata/" className="underline text-blue-400">
                      Telluride Via Ferrata
                    </a>
                  </li>
                  <li>
                    Drive to Las Vegas
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mt-3 mb-2 text-xl">Equipment</h2>
        <table className="pt-2 border-collapse border border-blue-800">
          <tbody>
            <tr>
              <th className="border border-blue-400 px-2 py-1 font-semibold">Canyon</th>
              <th className="border border-blue-400 px-2 py-1 font-semibold">Via Ferrata</th>
            </tr>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>Large Pack</li>
                  <li>Rain Jacket</li>
                  <li>Wetsuit</li>
                  <li>Water Shoes</li>
                  <li>Dry bags/keg</li>
                  <li>Harness</li>
                  <li>Rappel gear</li>
                  <li>Helment</li>
                  <li>Gloves (neoprene)</li>
                  <li>Water</li>
                  <li>Swimming Suit</li>
                  <li>Puffy Jacket</li>
                  <li>Snacks In Car</li>
                </ul>
              </td>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>Small Pack</li>
                  <li>Rain Jacket</li>
                  <li>Harness</li>
                  <li>Gloves</li>
                  <li>Helment</li>
                  <li>Lanyard</li>
                  <li>Water</li>
                  <li>Snacks</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mt-3 mb-2 text-xl">In Car</h2>
        <table className="pt-2 border-collapse border border-blue-800">
          <tbody>
            <tr>
              <td className="border border-blue-400 px-2 py-1">
                <ul>
                  <li>Toiletries</li>
                  <li>First aid</li>
                  <li>Lights</li>
                  <li>Snacks</li>
                  <li>Water</li>
                  <li>Electrolytes</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-blue-200 opacity-90 h-full"></div>
    </>
  );
}
/* toiletries, lights, first aid */
        {/* <h2 className="font-semibold mb-2 mt-3 text-xl"> */}
        {/*   Tentative Lodging Cost */}
        {/* </h2> */}
        {/* <p>Per Person For 3 nights</p> */}
        {/* <p> */}
        {/*   <a href="https://t.vrbo.io/9kGQCpFYHUb" className="underline"> */}
        {/*     {703 / 4} */}
        {/*   </a> */}
        {/*   ,{" "} */}
        {/*   <a href="https://t.vrbo.io/SF8IcTfZHUb" className="underline"> */}
        {/*     {640 / 4} */}
        {/*   </a> */}
        {/*   ,{" "} */}
        {/*   <a */}
        {/*     href="https://www.airbnb.com/rooms/1391401004733549599?check_in=2025-08-01&check_out=2025-08-04&guests=6&adults=4&s=67&unique_share_id=5341ded9-3c6e-474f-90ed-3f9871b982fc" */}
        {/*     className="underline" */}
        {/*   > */}
        {/*     {610 / 4} */}
        {/*   </a> */}
        {/* </p> */}

export default App;
