import React, { Component } from "react";
import PropTypes from "prop-types";
import * as S from "./tab-content-styled";

class TabContent extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    activeTab: PropTypes.string.isRequired,
    itemPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    maxPages: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
        activePage: this.getActivePage(props),
        activeTab: this.getActiveTab(props),
        itemPerPage: this.getItemPerPage(),
        totalItems: this.getTotalItems(props),
        maxPages: this.getMaxPages(props),

        //state variables to control swipes and drags
        
    };
    this.cRef = React.createRef();
  }

//#region --- functions to control Tab contents
  getActivePage(props){
    return props.activePage;
  }
  setActivePage(){
    this.setState({activePage: 1});
  }

  getItemPerPage() {
    if(window.innerWidth < 768) {
      return 4;
    } else if(window.innerWidth < 1280) {
      return 6;
    } else {
      return 8;
    }
  }

  getTotalItems = (parent) =>{
    // get all menu tabs
    const parentArr = parent.children;
    var total = 0;

    parentArr.map((child) => {
      // get active tab
      if (child.props.label === parent.activeTab){
        total = child.props.children.length;
      }
    });
    return total;
  }

  getMaxPages(parent) {
    var maxpages = 1;

    const totalitems = this.getTotalItems(parent);
    const itemperpage = this.getItemPerPage();

    if(totalitems > 0){
      maxpages = Math.ceil(totalitems / itemperpage);
    }

    return maxpages;
  }

  getActiveTab(props) {
    return props.activeTab;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.activeTab !== this.props.activeTab){
      this.setState({activePage: 1, activeTab: nextProps.activeTab});        
    }
  }
//#endregion

//#region --- functions to control Tab Pagination
  setNextPage = () => {
    if(this.state.activePage < this.state.maxPages){
      var newPage = this.state.activePage + 1;
      this.setState({activePage: newPage});
    }else if(this.state.activePage === this.state.maxPages){
      this.setState({activePage: 1});
    }
  }

  setPrevPage = () => {
    if(this.state.activePage > 1){
      var newPage = this.state.activePage - 1;
      this.setState({activePage: newPage});
    }else if(this.state.activePage === 1){
      this.setState({activePage: this.state.maxPages});
    }
  }


//#endregion

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
        maxPages,
      }
    } = this;

    return (
      <S.TabContentContainer>
        <S.ContentLeft onClick={() => this.setPrevPage()}></S.ContentLeft>
          <S.TabContent>
          {children.map((child) => {
            if (child.props.label !== this.state.activeTab){
              return undefined;
            }
            else{
              console.log("Active Tab: " + activeTab);
              console.log("Active Page: " + activePage);
              const childArr = child.props.children;
              const start = (activePage - 1) * itemPerPage;
              const end = start + itemPerPage;
              const childArrSlice = childArr.slice(start, end);
              return childArrSlice;
            }
          })}
          </S.TabContent>
        <S.ContentRight onClick={() => this.setNextPage()}></S.ContentRight>
      </S.TabContentContainer>
    );
  }
}

export default TabContent;