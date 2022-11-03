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
        familyTree?.children?.map((child) => {
          return (
            <div style={{ paddingLeft: 10 }}>
              <span onClick={expand}>{child.name}</span>
              {child?.children?.map((subChild) => {
                return (
                  <div style={{ paddingLeft: 10 }}>
                    <span onClick={expand}>{subChild?.name}</span>
                    {subChild.children?.map((subChildInner) => {
                      return (
                        <div style={{ paddingLeft: 10 }}>
                          <span onClick={expand}>{subChildInner?.name}</span>
                          {subChildInner.children?.map((subChildInner2) => {
                            return (
                              <div>
                                <span>{subChildInner2.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
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
