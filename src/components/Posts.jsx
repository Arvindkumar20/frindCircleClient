import Post from "./Post"

export default function Posts() {
  return (
    <div >
 { [1,2,3,4].map((e)=>{
    return <div key={e}>
    <Post/>
    </div>
    }) }
    </div>

 
  )
}
