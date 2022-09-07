import { Avatar, Card, CardContent, Grid, Pagination, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import usePagination from './usePagination';

function PaginationComponent() {
    const [gitUser,setGitUser]=useState([]);
    const[page,setPage]=useState(1);
    const PER_PAGE = 5;
    const count = Math.ceil(gitUser.length / PER_PAGE);
    const _DATA = usePagination(gitUser, PER_PAGE);

    const loadGitUser=()=>{
        const API_URL=`https://api.github.com/search/users?q=type:user`;
        axios.get(API_URL).then((response)=>{
            if(response!==null){
                const{data : {items}}=response;
                console.log(items);
                setGitUser(items && items);
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        loadGitUser();
    },[])

  return (
    <>
   
      <Grid container direction={"row"} spacing={3} padding={"20px"}>
           {_DATA.currentData().map(items=>(
             <Grid item xs={4} md={3}>
             <Card>
              <CardContent>
                   <Grid style={{display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'}}>
                  <Avatar
                   alt="Remy Sharp"
                 src={items.avatar_url}
                 sx={{ width: 100, height: 100 }}
                 />  
                   </Grid>
                   <Grid>
                      <Typography> Name : {items.login}</Typography>
                      <Typography> Role : {items.type}</Typography>
                      <Typography> Score : {items.score}</Typography>

                   </Grid>
                  
              </CardContent>
             </Card>
          </Grid>
           ))}
           
      </Grid>
     
      <Grid style={{paddingTop:'10px',marginBottom:'20px', display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'}}>
      <Pagination  

count={count}
page={page}
 color="primary"
       onChange={(e,val)=>{setPage(val);_DATA.jump(val);}}
    //   page={loadGitUser.length}
       />
      </Grid>
      
    </>
  )
}

export default PaginationComponent