import { Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Place } from './index'

export default function PlaceCard({ dataFilter }: { dataFilter: Place[]}) {
  const navigate = useNavigate()
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div className="content">
      { dataFilter.map((place, idx) => (
        <div className="card" key={idx} onClick={() => navigate(place.id.toString())}>
          <Card>
            <div className="card_header">
              <div className="card_img-header">
                <img  src={place.profile_image_url} alt={place.name} />
              </div>
              <div className="card_name">
                <Link to={place.id.toString()}>{place.name}</Link>
                <div className="card_name-detail">
                  <div>{place.operation_time.find(d => d.day === day[new Date().getDay()] )?.time_open} - {place.operation_time.find(d => d.day === day[new Date().getDay()] )?.time_close}</div>
                  <div>{place.rating}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )) }
    </div>
  )
}
