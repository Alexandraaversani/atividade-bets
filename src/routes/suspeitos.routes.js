import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
    {
        id: 1,
        nome: "Gustavo Lima",
        profissao: "Cantor",
        envolvimento: yes,
        nivelSuspeita: "baixo"
    },

        {
            id: 2,
            nome: "Lula",
            profissao: "Presidente",
            envolvimento: yes,
            nivelSuspeita: "alto"
        },

    {
        id: 3,
        nome: "Paulo Mauf",
        profissao: "Politico",
        envolvimento: no,
        nivelSuspeita: "médio"
    }
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });

  // Rota para buscar um suspeitos pelo id
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((perseguido) => perseguido.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }
  
    return res.status(200).json(suspeito);
  });

  // Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, profissao, envolvimento, nivelSuspeita} = req.body;
});


 // Remove o suspeito do array de suspeitos
 suspeitos = suspeitos.filter((suspeito) => suspeito.id != id);

 return res.status(200).json({
   message: "Suspeito removido com sucesso!",
   suspeito,
 });


export default suspeitosRoutes;
  

    
