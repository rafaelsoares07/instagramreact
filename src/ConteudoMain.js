import ConteudoMainStoreis from "./ConteudoMainStories"
import ConteudoMainPosts from "./ConteudoMainPosts"

export default function ConteudoMain(){
    return(
        <div class="esquerda">
          <ConteudoMainStoreis />
          <ConteudoMainPosts />          
        </div>
    )
}