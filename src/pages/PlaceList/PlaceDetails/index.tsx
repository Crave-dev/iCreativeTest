import './placeDetail.scss'
import { useMemo, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dataJson from '../../../../data.json'
import { Button } from '@mui/material'

export default function PlaceDetails(){
  const data = useRef(dataJson)
  const { placeId } = useParams()
  const navigate = useNavigate()

  const dataDetail = useMemo(() => {
    return data.current.find(place => place.id === Number(placeId))
  }, [placeId, data])

  return (
    <div className="detail_wrapper">
      <Button className="back_button" onClick={() => navigate(-1)}>&#60; Back</Button>
      <img className="profile_img" src={dataDetail?.profile_image_url} alt={dataDetail?.name} />
      <div className="detail_content">
        <div className="title">{dataDetail?.name}</div>
        <div>Address : <p>{dataDetail?.address}</p></div>
        <div>Opening Hour : { 
          dataDetail?.operation_time.map(t => (
            <p>
              <span>{t.day}</span>
              <span>{t.time_open} - {t.time_close}</span>
            </p>
            ))
        }</div> 
      </div>
    </div>
  )
}
