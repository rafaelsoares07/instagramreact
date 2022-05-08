function Usuario(props){
  return(
  <div class="usuario">
    <img src={props.imagemUsuario} />
    <div class="texto">
      <strong>{props.nickName}</strong>
      {props.name}
    </div>
  </div>
  )
} 

function Sugestões(){
  return(
    <section class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
    </section>
    
  )
}

function Recomendados(props){
  return(
    <div class="sugestoes">
        <div class="sugestao">
              <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                  <div class="nome">{props.name}</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
    </div>
  )
}

function Rodape(){
  return(
    <>
      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>
      <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </>
    
  )
}

export default function ConteudoSideBar(){
  const recomendados= [
    {name:'bad.vibes.memes', img:'assets/img/bad.vibes.memes.svg'},
    {name:'chibirdart', img:'assets/img/chibirdart.svg'},
    {name:'razoesparaacreditar', img:'assets/img/razoesparaacreditar.svg'},
    {name:'adorable_animals', img:'assets/img/adorable_animals.svg'},
    {name:'smallcutecats', img:'assets/img/smallcutecats.svg'}
  ] 
    return(
        <div class="sidebar">
          <Usuario name="Catana" nickName="catanacomics" imagemUsuario='assets/img/catanacomics.svg'/>
          <Sugestões />
          {recomendados.map(item => 
          <Recomendados name={item.name} img={item.img} />)
          }
          <Rodape />
        </div>
    )
}