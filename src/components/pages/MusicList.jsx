import React from "react";

const MusicList = () => {
  const onClickAlert = (id) => {
    // alert(id)
    console.log("id", id);
  };
  const getData = (event) => {
    alert(event.target.value);
  };
  return (
    <div>
      <table border={1} align="center" cellSpacing={0}>
        <tr>
          <td>First Name</td>
          <td>
            {" "}
            <input
              placeholder="Enter First Name"
              type="text"
              name="fnm"
              onChange={getData}
            />
          </td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>
            {" "}
            <input type="text" name="lnm" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MusicList;
