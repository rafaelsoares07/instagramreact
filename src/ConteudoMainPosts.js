function Post(props){
    return(
    <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.icone} />
            {props.name}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.imagePrincipal} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.curtida} />
            <div class="texto">
              Curtido por <strong>{props.igCurtida}</strong> e <strong>{props.texto}</strong>
            </div>
          </div>
        </div>
    </div>
    )   
}

export default function ConteudoMainPosts(){
  const user=[
    {name:"meowed", icon:"assets/img/meowed.svg", img:"assets/img/gato-telefone.svg", igCurtida:'respondeAi', iconCurtida:"assets/img/respondeai.svg", texto:"e outras 148.487 pessoas"},
    {name:"Barked", icon:"assets/img/barked.svg", img:"assets/img/dog.svg", igCurtida:'animals', iconCurtida:"assets/img/adorable_animals.svg", texto:"e outras 17.487 pessoas"}
  ]

  return(
  <div class="posts">
    {user.map(item=><Post nome={item.name} icone={item.icon} imagePrincipal={item.img} igCurtida={item.igCurtida} texto={item.texto} curtida={item.iconCurtida}/>)}
  </div>
  )
}