import React, { useState } from "react";
import { IFamilyTree } from "../../types";

interface Props {
  familyTree: IFamilyTree;
}

const Family: React.FC<Props> = ({ familyTree }) => {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ paddingLeft: 10 }}>
      <span onClick={expand}>{familyTree.name}</span>
      {isVisible ? (
        familyTree?.children?.map((child, idx) => {
          return (
            <div key={idx} style={{ paddingLeft: 10 }}>
              <Family familyTree={child} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Family;
