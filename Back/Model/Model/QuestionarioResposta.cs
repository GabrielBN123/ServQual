using System;
using System.Collections.Generic;
using System.Text;

namespace Model.Model
{
    public class QuestionarioResposta
    {
        public int Id { get; set; }
        public virtual QuestionarioPergunta Pergunta { get; set; }
        public string Resposta { get; set; }

        /*Resposta vai receber os seguintes 
            muito Bom
            bom
            Regular
            Medio
            ruim
         */
    }
}
