# exercicios-arnia-forms-custom-hooks

Exercícios em React para prática dos alunos da Arnia

## Exercício 1:

Crie um formulário utilizando o React Hook Form com os campos `Nome`, `E-mail`, `Telefone`, `CPF/CNPJ`, `Data de nascimento`, `Tecnologias que tenho domínio`, `Senha` e `Confirmação de senha`. 

- Crie um radio button (ou pode usar um select) pra selecionar CPF ou CNPJ
- Crie uma função que verifica se o CPF é válido, e se for inválido deve informar ao usuário no momento que ele digitar o CPF inválido (Caso esteja selecionado CPF)*
- Crie uma função que verifica se o CNPJ é válido, e se for inválido deve informar ao usuário no momento que ele digitar o CNPJ inválido (Caso esteja selecionado CNPJ)*

* As funcoes para validação do CPF ou CNPJ podem ser encontradas na pasta functions desse projeto.

- Adicione uma validação para garantir que os valores inseridos nos campos `Senha`e `Confirmação de senha` sejam iguais.
- Adicione validações para garantir que todos os campos sejam preenchidos corretamente.
- Valide se a senha possui pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial e se possui no mínimo 8 dígitos.
- O campo `Tecnologias que tenho domínio` é um grupo de 6 checkbox com as tecnologias `PHP`, `Java`, `Javascript`, `Node`, `React`, `Outro`. Caso o usuário marque a opção `Outro`, deve aparecer um input para que ele digite qual outra tecnologia que ele domina. Segue um exemplo com o print abaixo:

![](./_media/print-exemplo-campo-tecnologias-que-domino_2.png)

- Valide para que pelo menos uma opção do grupo `Tecnologias que tenho domínio` seja selecionada. Se a opção selecionada for `Outro`, verifique se o input que apareceu para digitar a tecnologia, está preenchido.

- Assim que clicar no botão de submeter o formulário, o botão deve ficar desabilitado e depois de 2 segundos, mostre uma mensagem na tela dizendo que o formulário foi submetido com sucesso (O botão deve voltar a ficar habilitado e os campos do formulário devem estar vazios para o usuário preencher com novas informações)

## Exercício 2:

Crie um custom hook chamado `useNetworkStatus` que verifica se o usuário está online ou offline. Ele deve retornar um valor booleano indicando o status de conectividade.

## Exercício 3:

Crie um custom hook chamado `useAuthentication` que gerencia o estado de autenticação do usuário. Ele deve fornecer funções para autenticar, desautenticar e verificar o estado de autenticação.

## Exerício 4:

Crie um custom hook chamado `useDarkMode` que permite alternar entre os temas claro e escuro em um aplicativo.