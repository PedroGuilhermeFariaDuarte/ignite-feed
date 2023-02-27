![image](https://user-images.githubusercontent.com/16112395/221676902-8b5bfb7d-98be-4008-aa58-5c23b19353a2.png)

# Ignite Feed
Um app de timeline de feed's

## Sobre
Ignite Feed é um app de timeline de feed, idealizado pela rocketseat na primeira etapa do Ignite 😁

O app possui as seguintes features

1. Adicionar um comentário
2. Excluir um comentário
3. Dar hot(like) em um comentário

<p>
<img src="https://user-images.githubusercontent.com/16112395/221677309-5efb700f-cb6d-422b-a908-71be7e4619c0.png" height="320" />
<img src="https://user-images.githubusercontent.com/16112395/221677079-022c027f-1677-4bfe-a03f-f86b582e6083.png" height="320" />
<img src="https://user-images.githubusercontent.com/16112395/221678140-036ac357-2760-469c-8390-cbd3b9cf8ab2.png" />
</p>



## Outra informações
Olá, este projeto faz parte da trilha **Ignite** da Rocketseat, e após quase 2 anos no mundo do Vue estou voltando ao mundo do React 😁

Esse projeto é bem bacana, reaprendi sobre os conceitos fundamentais do React, a implementação dos Componentes, Propriedades, Estado, Comunicação entre componentes e muito mais.

Além dos conceitos, acredito que as grandes novidades foram sem duvida os CSS Modules e o Vite. Geralmente eu usava o styled-components para encapsular o CSS do componente e também pra usar alguns recursos como as proprieadades 😆, vou sentir falta das props, mas usar o CSS puro e "modulado" é sem sombra de duvidas bem melhor.

Pelo o que percebir a linha de aprendizagem é bem menor, temos um "bundler" mais rapido e leve, temos também o *composes* (o composes permitir "herdar" estilzações de outros modulos ou classes desse modulo de uma forma bem perfomatica), olha o exemplo abaixo:

```css
.commentImage {
    composes: imageProfile from "../Sidebar/styles.module.css";    
}
```

a classe **commentImage** é composta pelas estilizações da classe *imageProfile*, e vejam, estamos **importando** o module em seu "estado bruto", sem precisar passar por quaisquer processo de Compiler/Bundle, podemos continuar aplicando quaisquer outras regras de estilo, em comparação com outras formas legadas de reuzo de estilos, acredito ser a melhor forma.

Se você se interessou sobre o CSS Modules veja esse [Readme](https://github.com/css-modules/css-modules).

E falando em Compilers e Bundles, o [Vite](https://vitejs.dev/) foi também uma grande surpresa, apenas alguns minutos antes digitei *npm run start* no terminal e tive que esperar alguns minutos até todo o processo de compiler e bundle serem finalizados e após instalar o vite digitei *npm run dev* e pronto!, a aplicação já estava rodando, tudo em questão de segundos, acho que foi menos 6sg...

O ECModules veio para ficar e como muitos Browser ja aderiram ao padrão acredito que o Webpack e Babel já estão com os dias contados.

O vite faz o uso das fetaures de Modules do Ecmascript para "dinamizar" o carregamento de arquivos JS e em sob-demanda, no exemplo acima, do CSS Modules, o import só vai ser feito quando o componente for carregado na tela, e sem um processo lento de compile e bundle.

Ainda estou me aprofundando no assunto mas de cara já estou vendo futuro nessa feature e aplicando nos meus proximos projetos.

Bom, é isso, tive uma grande atualização e uma boa reentrada no mundo do React, foi mal trocalhido.... estou pensando em fazer um comparativo entre o React e Vue/Nuxt em uma live pela [Twitch](https://www.twitch.tv/onedev_), fiquem de olha lá.

E aproveitando estou planejando em fazer um face-lift nesse projeto, integrar com banco de dados, fazer o mobile, o deploy... 

estou com varias ideias em breve vamos ter um novo projeto e até lá! 
