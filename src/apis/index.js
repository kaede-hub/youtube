import axios from 'axios'

const KEY = 'AIzaSyDN1uqsqQ1e7jgfuICZdc1V9-A1PhAnGCE'

const youtube = axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3'
})

const params = {
  part: 'snippet',
  maxResults: 40,
  key:KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}

export const fetchSelecteData = async (id) => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      id
    }
  })
}

export const fetchRelatedData = async (id) => {
  return await youtube.get('/search', {
    params: {
      ...params,
      relatedToVideoId : id
    }
  })
}
