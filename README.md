# Aplicativo de lista de tarefas:
>Aplicativo de lista de tarefas desenvolvido para a matéria de programação de aplicações mobile em android.

## Especificações da aplicação:
O app começa com três estados principais:

**task**: Armazena o texto da tarefa que está sendo digitada.

**tasks**: Um array que guarda todas as tarefas, cada uma com um texto e um status.

**editIndex**: Controla se uma tarefa está sendo editada.

## Funcionalidades:
### Adicionar/Editar Tarefas:
- Se editIndex for -1, o app adiciona uma nova tarefa ao array tasks.
- Se editIndex for um índice válido, a tarefa correspondente é atualizada.
> Adicionando uma tarefa: <br>
![Adicionando tarefa1](https://github.com/user-attachments/assets/d16bef57-4922-4e21-81b6-e199596fa2c8) <br>
![Adicionando tarefa2](https://github.com/user-attachments/assets/ae61d840-c478-4249-8fde-5838d6464416)


> Editando uma tarefa: <br>
![Editando tarefa1](https://github.com/user-attachments/assets/48e54842-ad43-4dec-8e56-51bd322724b0) <br>
![Editando tarefa2](https://github.com/user-attachments/assets/b667321a-7231-4869-a111-13d86e07e621) <br>
![Editando tarefa3](https://github.com/user-attachments/assets/2c1706c7-54a1-4bfb-a09c-23a44ca88754)


### Marcar como Concluída:
- Ao tocar em uma tarefa, ela alterna entre 🔲 (pendente) e ✅ (concluída).
> Marcando uma tarefa como concluída: <br>
![Tarefa concluída](https://github.com/user-attachments/assets/c5b93010-1990-4579-92a9-32bc6138b6b9)

### Excluir Tarefas:
- Remove a tarefa do array tasks sem confirmação.
> Removendo uma tarefa: <br>
![Removendo tarefa1](https://github.com/user-attachments/assets/e0ce94b9-6a93-41ee-9816-3227aaca5f4d) <br>
![Removendo tarefa2](https://github.com/user-attachments/assets/3a1b81bb-9724-467f-80d9-18113947d7cd)

### Colaboradores:
  <table>
    <tr>
      <td align="center">
      <a href="#" title="Foto de Mateus">
        <img src="https://avatars.githubusercontent.com/u/100164090?v=4" width="100px;" alt="Foto de Mateus"/><br>
        <sub>
          <b>Mateus Cipriano</b>
        </sub>
      </a>
      </td>
      <td align="center">
      <a href="#" title="Foto de Sarah">
        <img src="https://avatars.githubusercontent.com/u/185303323?v=4" width="100px;" alt="Foto de Sarah"/><br>
        <sub>
          <b>Sarah Kamínski</b>
        </sub>
      </a>
      </td>
    </tr>
  </table>
  

Este projeto foi desenvolvido com: <br>
![React Native](https://img.shields.io/badge/React_Native-20232A?style=plasctic&logo=react&logoColor=61DAFB)
