import React from 'react';
import UserContext from '../context/DataContext';
import DataColor from '../context/DataColor';
console.log(DataColor);

const ContentData = () => {
  return (
    <UserContext.Consumer>
      {user => {
        console.log(user);
        return (
          <DataColor.Consumer>
            {data => {
              console.log(data);
              return (
                <ul
                  style={{
                    color: data.color,
                    background: data.backgroundColor,
                    padding: data.padding,
                    textAlign: data.textAlign,
                    listStyle: data.listStyleType,
                    fontSize: data.fontSize,
                  }}
                >
                  <li>Name: {user.name}</li>
                  <li>Age: {user.age}</li>
                  <li>Color: {data.color}</li>
                </ul>
              );
            }}
          </DataColor.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
};

export default ContentData;
