using System;
using System.Collections.Generic;
using System.Text;

namespace Model.Model
{
    public class Projeto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string   Status  { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFinal { get; set; }

    }
}
