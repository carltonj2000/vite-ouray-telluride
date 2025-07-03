function App() {
  return (
    <>
      <h1 className="bg-pink-100 px-1 py-4 text-center text-2xl font-semibold">
        Ouray And Tullride Trip August 1<sup>st</sup> &amp; 4<sup>th</sup>
      </h1>
      <div className="flex flex-col items-center pt-4">
        <h2 className="font-semibold mb-2 text-xl">Participants</h2>
        <table className="pt-2 border-collapse border border-gray-300">
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Vyonne</td>
              <td className="border border-gray-300 px-2 py-1">Christian</td>
              <td className="border border-gray-300 px-2 py-1">Bruce</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">Teresa</td>
              <td className="border border-gray-300 px-2 py-1">Sandy</td>
              <td className="border border-gray-300 px-2 py-1">Carlton</td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mb-2 mt-3 text-xl">Plan</h2>
        <table>
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1 font-semibold">
                Day
              </th>
              <th className="border border-gray-300 px-2 py-1">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-2 py-1">
                1<sup>st</sup> Friday
              </td>
              <td className="border border-gray-300 px-2 py-1">
                Drive to Mt. Rose
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">
                2<sup>nd</sup> Saturday
              </td>
              <td className="border border-gray-300 px-2 py-1">
                Telluride Via Ferrata &amp; Hike
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">
                3<sup>nd</sup> Sunday
              </td>
              <td className="border border-gray-300 px-2 py-1">
                Ouray Via Ferrata x2
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-2 py-1">
                4<sup>th</sup> Monday
              </td>
              <td className="border border-gray-300 px-2 py-1">
                <p>Easy Class C Canyon tbd</p>
                <p>Drive to Las Vegas</p>
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-semibold mb-2 mt-3 text-xl">Lodging Options</h2>
        <p>Per Person For 3 nights</p>
        <p>
          <a href="https://t.vrbo.io/9kGQCpFYHUb" className="underline">
            {703 / 4}
          </a>
          ,{" "}
          <a href="https://t.vrbo.io/SF8IcTfZHUb" className="underline">
            {640 / 4}
          </a>
          ,{" "}
          <a
            href="https://www.airbnb.com/rooms/1391401004733549599?check_in=2025-08-01&check_out=2025-08-04&guests=6&adults=4&s=67&unique_share_id=5341ded9-3c6e-474f-90ed-3f9871b982fc"
            className="underline"
          >
            {610 / 4}
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
