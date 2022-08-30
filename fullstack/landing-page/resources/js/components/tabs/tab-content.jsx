import React, { Component } from "react";
import PropTypes from "prop-types";
import * as S from "./tab-content-styled";

class TabContent extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    activeTab: PropTypes.string.isRequired,
    itemPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    maxPage: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
        activePage: 1,
        activeTab: "",
        itemPerPage: this.getItemPerPage(),
        totalItems: this.getTotalItems(),
        maxPage: 1,
    };
  }

  getItemPerPage() {
    if(window.innerWidth < 768) {
      console.log("mobile");
      return 4;
    } else if(window.innerWidth < 1280) {
      console.log("tablet");
      return 6;
    } else {
      console.log("desktop");
      return 8;
    }
  }

  getTotalItems() {
    if(this.props.children.length > 0) {
      console.log(this.props.children.length);
      return this.props.children.length;
    } else {
      return 0;
    }
  }

  getMaxPages() {
    console.log("Calculating pages");
    return Math.ceil(this.getTotalItems / this.getItemPerPage);
  }

  static getDerivedStateFromProps(props) {
    return {activeTab: props.activeTab};
  }

  render() {
    const {
      props: {
        children,
      },
      state: {
        activePage,
        activeTab,
        itemPerPage,
        totalItems,
        maxPage,
      }
    } = this;

    return (
      <S.TabContent>
        {children.map((child, index) => {
          if (child.props.label !== this.state.activeTab){
            return undefined;
          }
          else{
            console.log(index);
            if(index >= (activePage - 1) * this.state.itemPerPage && index < activePage * this.state.itemPerPage){
              console.log("Active Item");
              return child.props.children;
            } else { 
              console.log("Not active item");
              return undefined;
            }
          }
        })}
      </S.TabContent>
    );
  }
}

export default TabContent;