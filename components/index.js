import { Card, CardContent, Grid } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function IndexPage() {
  return (
   <>
    <Grid container direction={"row"} spacing={3} padding={"20px"}>
      <Grid item xs={6} md={3}>
        <Link href={"/pagination"}>
        <a>
        <Card>
          <CardContent style={{textAlign:'center',color:"blue"}}>MUI Pagination</CardContent>
        </Card>
        </a>
        </Link>
        
      </Grid>
    </Grid>
   </>
  )
}

export default IndexPage