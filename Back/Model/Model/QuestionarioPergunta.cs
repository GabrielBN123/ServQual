using System;
using System.Collections.Generic;
using System.Text;

namespace Model.Model
{
    public class QuestionarioPergunta
    {
        public int Id { get; set; }
        public string Pergunta { get; set; }
        public virtual QuestionarioResposta Resposta { get; set; }
        public  virtual Secao Secao { get; set; }
        public virtual Projeto Projeto { get; set; }

    }
}
