import { Card } from "@mui/material";
import { Place } from './index'

export default function PlaceCard({ dataFilter }: { dataFilter: Place[]}) {
  return (
    <div className="content">
      { dataFilter.map((place, idx) => (
        <div className="card" key={idx}>
          <Card>
            <div>{place.name}</div>
          </Card>
        </div>
      )) }
    </div>
  )
}
