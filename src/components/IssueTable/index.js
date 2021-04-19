import React from 'react'
import "./IssueTable.css";
import {useState} from "react";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ReactPaginate from "react-paginate";
import img from '../../Octocat.png';
export default function IssueTable({res,error,flag}) {
    const [pageNumber, setPageNumber] = useState(0);
    const visitedUsers = pageNumber*10;

    const displaydata = res.slice(visitedUsers,visitedUsers+10).map((item)=>(
        <div className="issues">
            <ErrorOutlineIcon className="issue__logo"/>
            <a  style={{textDecoration: "none", color: "black"}} href={item.html_url}>
            <div className="issue__content">
                <h3 className="issue__title">{item.title}</h3>
                <p className="issue__detail">{`#${item.number} opened on ${item.updated_at.slice(0,10).replaceAll("-","/")} by ${item.user.login}`}</p>
            </div>
            </a>

        </div>
    ))

    const changePage = ({selected})=>{
        setPageNumber(selected);
    }

    return (
       <div className="issue__table"> 
         {
            error?<div className="error__messgae">{error}</div>:
           flag?
           <>
           <h1 className="issues__heading">Git Hub Issues's</h1>
          { res.length>0?
            <div className="data">{displaydata}
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={Math.ceil(res.length/10)}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
            />
            </div>            :
            <div className="data__0"><h3>{res.length} Git Hub Issue's</h3></div>
          }
            </>
            :<img alt="git_logo_image" className="cat__image" src={img}/>
         }

       </div>
        
     
    )
}
