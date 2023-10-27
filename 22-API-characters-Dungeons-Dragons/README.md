# Revisao m02 b2b t06

Vamos construir uma API que seja capaz de registrar, armazenar e extrair informacoes sobre personagens de `Dungeons and Dragons`

A API deve ser capaz de criar cadastros de personagens com as seguintes informacoes:
- Identificador, de tipo livre
- Nome do jogador, do tipo `string`
- Nome do personagem, do tipo `string`
- Classe, do tipo `string`, que podem ser as seguintes:
  - Barbaro
  - Bardo
  - Bruxo
  - Clerigo
  - Druida
  - Feiticeiro
  - Guerreiro
  - Ladino
  - Mago
  - Monge
  - Paladino
  - Patrulheiro
- Alinhamento, do tipo `string`, que pode ser uma combinacao de:
  - Leal, neutro ou caotico
  - Bom, neutro ou mal
- Nivel do personagem, do tipo `number`
- Data de criacao, do tipo `Date`

---

Apos o personagem ser criado, a API deve ser capaz de criar e remover `Equipamentos` de um dado personagem, seguindo a seguinte informacao:
- Equipamentos, do tipo `array`, que deve conter `itens`, do tipo `object` com as propriedades:
  - Equipado, do tipo `boolean`
  - Usa as duas maos, do tipo `boolean`
  - Tipo de dano, do tipo `string` que pode ser
    - Magico, perfurante, cortante, contusao
  - Dano, do tipo `string` que deve seguir a seginte logica:
    - (Numero de dados) x (Numero de faces do dado) - exemplo: `2d6`, 2 dados de seis lados
- Apenas 2 itens podem ter a condicao `equipado === true`, a nao ser que um item tenha a condicao `Usa as duas maos === true`

---

Deve exister busca pelo nome do personagem, trazendo um personagem especifico de um jogador ou todos os personagens com mesmo nome, assim como busca por Identificador e somento por nome de jogador

---

Deve ser possivel deletar um personagem pelo seu identificador ou pela combinacao de nome do personagem e nome do jogador

---

Todo o armazenamento de dados deve ser feito em memoria, em um arquivo `.json`