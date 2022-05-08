function Story(props){
  
  
  return(
    <div class="story">
      <div class="imagem">
        <img src={props.img} />
      </div>
      <div class="usuario">
        {props.name}
      </div>
    </div>
  )
}

export default function ConteudoMainStoreis(){
  const user = [
    {name:"9gag",img:"assets/img/9gag.svg" },
    {name:"Meaowed",img:"assets/img/meowed.svg" },
    {name:"barked",img:"assets/img/barked.svg" },
    {name:"nathanwpylestrangeplanet",img:"assets/img/nathanwpylestrangeplanet.svg" },
    {name:"wawawicomics",img:"assets/img/wawawicomics.svg" },
    {name:"respondeai",img:"assets/img/respondeai.svg" },
    {name:"filomoderna",img:"assets/img/filomoderna.svg" },
    {name:"memeriagourmet",img:"assets/img/memeriagourmet.svg" }
  ]

  return(
  <div class="stories">
      {user.map((item)=> <Story name={item.name} img={item.img} />)}
  </div>
  )
}