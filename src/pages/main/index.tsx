import { Button } from '@mui/material'
import ServiceModal from '../../components/modal/service'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { service } from "@service"
import { useState, useEffect } from "react"
import './index.css'; // Custom CSS faylini import qiling

const Index = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([])
  const [item, setItem] = useState({})
  const getData = async () => {
    try {
      const response = await service.get()
      if (response.status === 200 && response?.data?.services) {
        setData(response?.data?.services)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteItem = async (id) => {
    try {
      const response = await service.delete(id)
      if (response.status === 200) {
        window.location.reload()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const editItem = (item) => {
    setItem(item)
    setOpen(true)
  }

  return (
    <>
      <div className="container">
        <ServiceModal open={open} handleClose={() => setOpen(false)} item={item} />
        <Button variant='contained' className='button' onClick={() => setOpen(true)}>Add</Button>
        <TableContainer component={Paper} className='table-container'>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" className='table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>T/R</TableCell>
                <TableCell align="center">Service name</TableCell>
                <TableCell align="center">Service price</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={index + 1}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.price}</TableCell>
                  <TableCell align="center" className='actions'>
                    <button className='icon-button edit' onClick={() => editItem(item)}><box-icon name='edit'></box-icon></button>
                    <button className='icon-button delete' onClick={() => deleteItem(item.id)}><box-icon name='trash'></box-icon></button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Index
