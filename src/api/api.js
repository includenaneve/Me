import axios from 'axios'
const API = {}
const domain = 'http://remote.liujiajian.top:9777'

API.gm = async(url) => {
  const { status, data } = await axios.get(domain + url);
  return new Promise((resolve, reject) => {
    if (status === 200) {
      resolve(data)
    } else {
      reject(new Error('请求失败! 状态码:' + status))
    }
  })
}

API.pm = async(url, obj) => {
  const params = new URLSearchParams();
  for(const key in obj) {
    params.append(key, obj[key]);
  }
  const { status, data } = await axios.post(domain + url, params);
  return new Promise((resolve, reject) => {
    if (status === 200) {
      resolve(data)
    } else {
      reject(new Error('请求失败! 状态码:' + status))
    }
  })
}

API.getArticle = () => {
  return API.gm('/article')
}

API.editArticle = (obj) => {
  return API.pm('/edit', obj)
}

API.getUptoken = () => {
  return API.gm('/uptoken')
}

API.getSign = () => {
  return API.gm('/sign')
}

export default API