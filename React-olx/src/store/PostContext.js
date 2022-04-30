import { createContext, useState } from 'react'

export const PostContext = createContext(null)

function Post ({children}){
    const [postDitails,setPostDetails] = useState()

    return(
        <PostContext.Provider value={{postDitails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}

export default Post