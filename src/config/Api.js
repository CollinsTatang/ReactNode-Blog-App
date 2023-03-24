import axios from "axios";

const read_token = process.env.REACT_APP_READ_TOKEN;

export const blogList = async () => {
  const url = `
  https://api.buttercms.com/v2/posts?auth_token=${read_token}`;
  return axios.get(url).then((res) => {
    return res.data.data;
  });
};

export default blogList