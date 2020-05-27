import React from 'react'
import Pagination from "react-js-pagination"
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeInputValue, search, pageChange } from './searchAction'

const Search = props => {
  const {
    inputData,
    searchTerm,
    pageNumber,
    totalCount,
    changeInputValue,
    search,
    pageChange
  } = {...props}

  const handlePageChange = (pageNumber) => {
    pageChange(pageNumber)
    search(searchTerm, pageNumber)
  }

  return (
    <>
      <div className="input-group my-3">
        <input type="text" className="form-control" placeholder="Pesquisa por usuário"
          value={inputData}
          onChange={changeInputValue} />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button"
            onClick={() => search(inputData)} >
            Pesquisar
          </button>
        </div>      
      </div>
      {totalCount &&
        <>
          <p className="mb-3">{`Resultados para: ${searchTerm}`}</p>
          <div className="d-flex flex-row justify-content-center">
            <Pagination
              className="p-3"
              itemClass="page-item"
              linkClass="page-link"
              activePage={pageNumber}          
              itemsCountPerPage={20}
              totalItemsCount={totalCount}
              pageRangeDisplayed={5}
              onChange={handlePageChange.bind(this)}        
            />
          </div>
        </>
      }      
    </>
  )
}  

const mapStateToProps = state => ({
  inputData: state.search.inputData,
  searchTerm: state.search.searchTerm,
  totalCount: state.search.totalCount,
  pageNumber: state.search.pageNumber
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeInputValue, search, pageChange }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Search)