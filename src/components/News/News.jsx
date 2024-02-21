import React from 'react'
import NewItem from './NewItem/NewsItem'
import styles from './News.module.css'
const News = () => {
  const array = [
    {id: 0, src: 'https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fsun9-12.userapi.com%2Fimpf%2Fc837434%2Fv837434555%2F3216d%2FhSIG95hMO_c.jpg%3Fsize%3D604x377%26quality%3D96%26sign%3D2174f4d7946030aa2f4c489a04360f43%26c_uniq_tag%3DEO-EisLhQmwND7_JA6bsGq-Y48JCwnaKL-WofO8TV00%26type%3Dalbum&lr=213&pos=2&rpt=simage&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0', href: '/news/news_10'},
    {id: 1, src: 'https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fsun9-12.userapi.com%2Fimpf%2Fc837434%2Fv837434555%2F3216d%2FhSIG95hMO_c.jpg%3Fsize%3D604x377%26quality%3D96%26sign%3D2174f4d7946030aa2f4c489a04360f43%26c_uniq_tag%3DEO-EisLhQmwND7_JA6bsGq-Y48JCwnaKL-WofO8TV00%26type%3Dalbum&lr=213&pos=2&rpt=simage&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0', href: '/news/news_11'},
    {id: 2, src: 'https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fsun9-12.userapi.com%2Fimpf%2Fc837434%2Fv837434555%2F3216d%2FhSIG95hMO_c.jpg%3Fsize%3D604x377%26quality%3D96%26sign%3D2174f4d7946030aa2f4c489a04360f43%26c_uniq_tag%3DEO-EisLhQmwND7_JA6bsGq-Y48JCwnaKL-WofO8TV00%26type%3Dalbum&lr=213&pos=2&rpt=simage&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0', href: '/news/news_12'},
    {id: 3, src: 'https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fsun9-12.userapi.com%2Fimpf%2Fc837434%2Fv837434555%2F3216d%2FhSIG95hMO_c.jpg%3Fsize%3D604x377%26quality%3D96%26sign%3D2174f4d7946030aa2f4c489a04360f43%26c_uniq_tag%3DEO-EisLhQmwND7_JA6bsGq-Y48JCwnaKL-WofO8TV00%26type%3Dalbum&lr=213&pos=2&rpt=simage&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0', href: '/news/news_13'},
    {id: 4, src: 'https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fsun9-12.userapi.com%2Fimpf%2Fc837434%2Fv837434555%2F3216d%2FhSIG95hMO_c.jpg%3Fsize%3D604x377%26quality%3D96%26sign%3D2174f4d7946030aa2f4c489a04360f43%26c_uniq_tag%3DEO-EisLhQmwND7_JA6bsGq-Y48JCwnaKL-WofO8TV00%26type%3Dalbum&lr=213&pos=2&rpt=simage&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0', href: '/news/news_13'},
    {id: 5, src: 'https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fsun9-12.userapi.com%2Fimpf%2Fc837434%2Fv837434555%2F3216d%2FhSIG95hMO_c.jpg%3Fsize%3D604x377%26quality%3D96%26sign%3D2174f4d7946030aa2f4c489a04360f43%26c_uniq_tag%3DEO-EisLhQmwND7_JA6bsGq-Y48JCwnaKL-WofO8TV00%26type%3Dalbum&lr=213&pos=2&rpt=simage&text=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0', href: '/news/news_13'},

  ]
  return (
    <div className={styles.wrapp}>
      {
      array.map((value) => (
        <NewItem key={value.id} data={value}/>
      ))
    }
    </div>
  )
}

export default News