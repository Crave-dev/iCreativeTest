import './placelist.scss'
import dataJson from '../../../data.json'
import { ChangeEvent, useMemo, useRef, useState } from 'react'
import { Card, FormControl, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material'
import PlaceCard from './PlaceCard'

export interface Place {
  id: number
  name: string
  categories: string[]
  profile_image_url: string
  images: string[]
  operation_time: Array<Record<"day"|"time_open"|"time_close", string>>
  address: string 
  rating: number
}

export default function PlaceList() {
  const data = useRef(JSON.parse(JSON.stringify(dataJson)) as Place[])
  const categoryOptions = useRef(['restaurant', 'bakery', 'cafe'])

  const [category, setCategory] = useState("restaurant")
  const onCategoryChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value)
  }

  const [search, setSearch] = useState("")
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const dataFilter = useMemo(() => {
    return data.current
      .filter(place => place.categories.includes(category))
      .filter(place => place.name.toLowerCase().split(' ').some(word => word.startsWith(search.toLowerCase())))

  }, [category, search, data])

  return (
    <div className="wrapper">
      <div className="place_header">
        <div>Place List</div>
        <div className="box-filter">
          <FormControl  size="small">
          <Select value={category} onChange={onCategoryChange} >
          {
            categoryOptions.current.map((option, idx) => (
              <MenuItem value={option} key={idx}>{option.charAt(0).toUpperCase() + option.slice(1)}</MenuItem>
            ))
          }
          </Select>
        </FormControl>
        <TextField size="small" placeholder="Search name..." onChange={onSearchChange} />
        </div>
      </div>
      <PlaceCard dataFilter={dataFilter} />
    </div>
  )
}
