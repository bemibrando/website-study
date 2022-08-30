import React, { Component } from "react";
import PropTypes from "prop-types";	
import TabContent from "./tab-content";
import Tab from "./tab-item";
import * as S from "./tabs-styled";

class Tabs extends Component{
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props){
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    }

    render(){
        const {
            onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
          <S.Tabs className="tabs">
              <S.TabList className="tab-list">
                {children.map((child) => {
                  const { label } = child.props;
      
                  return (
                    <Tab
                      activeTab={activeTab}
                      key={label}
                      label={label}
                      onClick={onClickTabItem}
                    />
                  );
                })}
              </S.TabList>
              <TabContent activeTab={activeTab} className="tab-content">
                {children}
              </TabContent>
          </S.Tabs>
        );
    }
}

export default Tabs;