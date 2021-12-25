import React, { Fragment } from "react";
import { data } from "./services/data";

const App = () => {
  return (
    <div>
      {Object.entries(data).map((item, index) => {
        const { name, userCreated }: any = item[1];
        return (
          <ul key={index}>
            {item[0]}
            {Array.isArray(item[1]) ? (
              item[1]
                .sort((a, b) =>
                  a.dateCreated > b.dateCreated || a.name > b.name
                    ? 1
                    : b.dateCreated > a.dateCreated || b.name > a.name
                    ? -1
                    : 0
                )
                .map((val, idx) => {
                  return (
                    <Fragment key={idx}>
                      {!val.isArchived && (
                        <li>{val.name ? val.name : val.content}</li>
                      )}
                    </Fragment>
                  );
                })
            ) : (
              <Fragment>
                <div>Name: {name}</div>
                <div>User Created :{userCreated}</div>
              </Fragment>
            )}
          </ul>
        );
      })}
    </div>
  );
};

export default App;
