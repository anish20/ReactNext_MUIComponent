import { Button, Card, CardContent, Grid, Link, Paper, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import React, { useState } from 'react'

function DynamicForm() {
  const [inputFields,setInputFields]=useState([{certificateName:"",certificateFile:null},]);

  const onChangeInput=(index,e)=>{
   console.log(index,e.target.value);
   const values=[...inputFields];
    values[index][e.target.name]=e.target.value;
    setInputFields([...inputFields[index][e.target.name],e.target.value]);
  }

  // const onChangeFiles=(index,e)=>{
  //   console.log(index,e.target.files);
  // }

  const handleOnsubmit=(e)=>{
    e.preventDefault();
    console.log("Input fields:",inputFields);
  }

  return (
    <>
    <Grid container direction={"row"} >
           <Grid item xs={3}>
            rfekjref
            </Grid>
        <Grid item xs={6}>
             <Card>
                <CardContent>
                  <form onSubmit={handleOnsubmit}>
                  {inputFields.map((item,index)=>(
                       <Grid container direction={"row"} spacing={3} marginBottom={"20px"} key={index} >
                       <Grid item xs={12} md={5} >
                       <TextField id="outlined-basic" type={"text"} onChange={(e)=>onChangeInput(index,e)} name='certificateName' value={item.certificateName} label="Certificate Name" variant="outlined"  size='small' fullWidth />
                       </Grid>
                       <Grid item xs={12} md={5}>
                       <TextField id="outlined-basic" type={"file"} onChange={(e)=>onChangeInput(index,e)} InputLabelProps={{shrink:true}} name='certificateFile' value={item.certificateFile} label="Certificate File"  variant="outlined"   size='small' fullWidth />
                       </Grid>
                       <Grid item xs={12} md={2} >
                        {index===0 &&  (
                          <Grid className='icons' display={inputFields.length===5 ? "none":""} >
                          <Link onClick={()=>setInputFields([...inputFields,{certificateName:"",certificateFile:null}])}><AddCircleIcon fontSize='16px'/><span>Add More</span></Link>
                           </Grid>
                        )}

                       {index > 0 &&  (
                          <Grid className='icons' >
                          <Link onClick={()=>{
                            const values=[...inputFields];
                            values.splice(index,1);
                            setInputFields(values);
                          }}><AddCircleIcon fontSize='16px'/><span>Remove</span></Link>
                          </Grid>
                        )}
                          </Grid>
                     </Grid>
                  ))}

               <Button variant="contained" onClick={handleOnsubmit} type='submit' size='small' endIcon={<SaveIcon />}>Save</Button>
                 </form>
               
                </CardContent>
              </Card> 
             
        </Grid>
    </Grid>
    </>
  )
}

export default DynamicForm