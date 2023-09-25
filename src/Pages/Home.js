import { Link } from "react-router-dom";
import '../css/Home.css';

const Home = () => {

const posts = [
    {
      id: 1,
      title: "iPhone 9",
      desc: "An apple mobile which is nothing like apple",
      image: "https://i.dummyjson.com/data/products/1/1.jpg",
    },
    {
      id: 2,
      title: "iPhone 9",
      desc: "An apple mobile which is nothing like apple",
      image: "https://i.dummyjson.com/data/products/1/2.jpg",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      desc: "An apple mobile which is nothing like apple",
      image: "https://i.dummyjson.com/data/products/1/3.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      desc: "OPPO F19 is officially announced on April 2021.",
      image: "https://i.dummyjson.com/data/products/1/4.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      desc: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
      id: 6,
      title: "MacBook Pro",
      desc: "MacBook Pro 2021 with mini-LED display may launch between September, November",
      image: "https://i.dummyjson.com/data/products/6/1.png",
    },
  ];
  return (
    <div className="posts">
      {
        posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="post-img">
              <img src={post.image} alt="" />
            </div>
            <div className="content">
              <Link className="title-link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
          ))
        }
    </div>

  )
}
export default Home;